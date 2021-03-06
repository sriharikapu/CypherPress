import {
  createPolicy,
  decryptDeligatedDocument,
  decryptUploadedDocument,
  encryptData,
  generateKeyPairs
} from "./httpInteractions";
import {
  checkUsernameWeb3,
  connectToContract,
  deligateDocument,
  getDelegateePublicKey,
  getDeligatedDocumentIds,
  getDeligatedDocumentInfo,
  getUploadedDocumentIds,
  getUploadedDocumentInfo,
  signInUser,
  uploadADocument,
  isDeligatee,
  getNumberOfDeligatee,
  getDelegteeUsername
} from "./web3Interactions";
import { connectNode, getData, handleUpload } from "./ipfsInteractions";

export async function doConnections(_contractAddress) {
  console.log("inside doConnections");
  console.log("contract address:", _contractAddress);
  await connectToContract(_contractAddress);
  console.log("middle of doConnections");
  await connectNode();
  console.log("end of doConnections");
}

export async function checkUsernameAvailability(_username) {
  return await checkUsernameWeb3(_username);
}

export async function signUpAndGetNucypherKeys(
  _username,
  _aliceEthereumPrivateKey,
  _callingObject
) {
  let rv = await generateKeyPairs();
  await signInUser(
    _username,
    _aliceEthereumPrivateKey,
    rv.alicePublicKey,
    _callingObject
  );
  return rv;
}

export async function uploadDocument(
  _array,
  _uploader,
  _alicePublicKey,
  _aliceEthereumPrivateKey,
  _aliceVerifyKey,
  _callingObject
) {
  // Uploading the array of data to ipfs and fetch the hash
  let hash = await handleUpload(_array);

  // Now send this hash to be encrypted using pyUmbral
  let { cipherText, capsule } = await encryptData(hash, _alicePublicKey);

  // Send a transaction to contract to store all the information
  await uploadADocument(
    cipherText,
    capsule,
    _aliceVerifyKey,
    _alicePublicKey,
    _uploader,
    _aliceEthereumPrivateKey,
    _callingObject
  );
}

export async function grantDocumentAccess(
  _documentId,
  _alicePrivateKey,
  _aliceSigningKey,
  _deligatee,
  _uploader,
  _aliceEthereumPrivateKey,
  _callingObject
) {
  // Fetch Bob's Public Key
  let bobPublicKey = await getDelegateePublicKey(_deligatee);

  // Generate a policy on the nucypherNetwork
  let policyId = await createPolicy(
    _alicePrivateKey,
    _aliceSigningKey,
    bobPublicKey
  );

  // Update the contract regarding delegation
  await deligateDocument(
    _documentId,
    policyId,
    _deligatee,
    _uploader,
    _aliceEthereumPrivateKey,
    _callingObject
  );
}

export async function fetchUploadedDocuments(
  _uploader,
  _aliceEthereumPrivateKey,
  _alicePrivateKey,
  _requestedObject,
  _documentUploadedCallback
) {
  // Fetch the list of documents uploaded by the _uploader
  console.log("inside fetchUploadedDocuments");
  let arr = await getUploadedDocumentIds(_uploader, _aliceEthereumPrivateKey);
  console.log("arr", arr);
  for (let i = 0; i < arr.length; i++) {
    // Fetch information regarding the document
    let {
      cipherText,
      capsule,
      verifyKey,
      publicKey
    } = await getUploadedDocumentInfo(arr[i], _aliceEthereumPrivateKey);

    // Use this info to generate the ipfs hash
    let ipfsHash = await decryptUploadedDocument(
      cipherText,
      capsule,
      _alicePrivateKey
    );
    console.log("ipfshash", ipfsHash);

    // Fetch data using generated ipfs hash
    let dataArray = await getData(ipfsHash, _requestedObject);
    console.log(dataArray);
    _documentUploadedCallback(dataArray, arr[i]);
  }
}

export async function fetchDelegatedDouments(
  _deligatee,
  _aliceEthereumPrivateKey,
  _alicePublicKey,
  _alicePrivateKey,
  _requestedObject,
  _documentUploadedCallback
) {
  // Fetch the list of documents deligated to the _deligatee
  console.log("inside fetchDelegatedDouments");
  let arr = await getDeligatedDocumentIds(_deligatee, _aliceEthereumPrivateKey);
  console.log("arr:", arr);
  for (let i = 0; i < arr.length; i++) {
    // Fetch information regarding the document

    let {
      cipherText,
      capsule,
      verifyKey,
      publicKey,
      policyId
    } = await getDeligatedDocumentInfo(
      arr[i],
      _deligatee,
      _aliceEthereumPrivateKey
    );

    // Use this info to generate the ipfs hash
    let ipfsHash = await decryptDeligatedDocument(
      publicKey,
      verifyKey,
      _alicePublicKey,
      _alicePrivateKey,
      capsule,
      cipherText,
      policyId
    );
    console.log("ipfs sfd", ipfsHash);
    // Fetch data using generated ipfs hash
    let dataArray = await getData(ipfsHash, _requestedObject);
    console.log("dataArray is awesome", dataArray);
    _documentUploadedCallback(dataArray);
  }
}

export async function getDelegatees() {
  let usernames = [];
  let number = await getNumberOfDeligatee();
  for (let i = 0; i < number; i++) {
    let username = await getDelegteeUsername(i);
    usernames.push(username);
  }
  return usernames;
}

export async function isDelegatee(_documentId, _delegatee) {
  return await isDeligatee(_documentId, _delegatee);
}
