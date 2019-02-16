import Web3 from "web3";

const web3 = new Web3(
  new Web3.providers.HttpProvider(
    "http://127.0.0.1:8545"
  )
);

const byteCode =
  "0x6080604052600160005534801561001557600080fd5b5033600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061272c806100666000396000f3006080604052600436106100c5576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063037525b0146100ca5780630484c4d2146101c95780630be1533e14610254578063395c3171146102bd578063529d9be81461036c57806358ce35de1461042a5780635cd9add01461050c5780636d959fdb146106f65780638057d7ed1461099257806385d1986614610b1357806393d9cb9114610bb9578063e4b841f914610c3a578063fcc1891c14610cf8575b600080fd5b3480156100d657600080fd5b506101c760048036038101908080359060200190929190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050610d23565b005b3480156101d557600080fd5b5061023a60048036038101908080359060200190929190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050610fda565b604051808215151515815260200191505060405180910390f35b34801561026057600080fd5b506102bb600480360381019080803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919291929050505061108b565b005b3480156102c957600080fd5b5061036a600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050611129565b005b34801561037857600080fd5b506103d3600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050611307565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156104165780820151818401526020810190506103fb565b505050509050019250505060405180910390f35b34801561043657600080fd5b50610491600480360381019080803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919291929050505061148f565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156104d15780820151818401526020810190506104b6565b50505050905090810190601f1680156104fe5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561051857600080fd5b506105376004803603810190808035906020019092919050505061159c565b6040518080602001806020018060200180602001858103855289818151815260200191508051906020019080838360005b83811015610583578082015181840152602081019050610568565b50505050905090810190601f1680156105b05780820380516001836020036101000a031916815260200191505b50858103845288818151815260200191508051906020019080838360005b838110156105e95780820151818401526020810190506105ce565b50505050905090810190601f1680156106165780820380516001836020036101000a031916815260200191505b50858103835287818151815260200191508051906020019080838360005b8381101561064f578082015181840152602081019050610634565b50505050905090810190601f16801561067c5780820380516001836020036101000a031916815260200191505b50858103825286818151815260200191508051906020019080838360005b838110156106b557808201518184015260208101905061069a565b50505050905090810190601f1680156106e25780820380516001836020036101000a031916815260200191505b509850505050505050505060405180910390f35b34801561070257600080fd5b5061076760048036038101908080359060200190929190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050611925565b60405180806020018060200180602001806020018060200186810386528b818151815260200191508051906020019080838360005b838110156107b757808201518184015260208101905061079c565b50505050905090810190601f1680156107e45780820380516001836020036101000a031916815260200191505b5086810385528a818151815260200191508051906020019080838360005b8381101561081d578082015181840152602081019050610802565b50505050905090810190601f16801561084a5780820380516001836020036101000a031916815260200191505b50868103845289818151815260200191508051906020019080838360005b83811015610883578082015181840152602081019050610868565b50505050905090810190601f1680156108b05780820380516001836020036101000a031916815260200191505b50868103835288818151815260200191508051906020019080838360005b838110156108e95780820151818401526020810190506108ce565b50505050905090810190601f1680156109165780820380516001836020036101000a031916815260200191505b50868103825287818151815260200191508051906020019080838360005b8381101561094f578082015181840152602081019050610934565b50505050905090810190601f16801561097c5780820380516001836020036101000a031916815260200191505b509a505050505050505050505060405180910390f35b34801561099e57600080fd5b50610b11600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050611dd3565b005b348015610b1f57600080fd5b50610b3e6004803603810190808035906020019092919050505061204f565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610b7e578082015181840152602081019050610b63565b50505050905090810190601f168015610bab5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b348015610bc557600080fd5b50610c20600480360381019080803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919291929050505061210a565b604051808215151515815260200191505060405180910390f35b348015610c4657600080fd5b50610ca1600480360381019080803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091929192905050506121c9565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610ce4578082015181840152602081019050610cc9565b505050509050019250505060405180910390f35b348015610d0457600080fd5b50610d0d612351565b6040518082815260200191505060405180910390f35b3373ffffffffffffffffffffffffffffffffffffffff166003826040518082805190602001908083835b602083101515610d725780518252602082019150602081019050602083039250610d4d565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515610de857600080fd5b610ea0600260008681526020019081526020016000206000018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610e955780601f10610e6a57610100808354040283529160200191610e95565b820191906000526020600020905b815481529060010190602001808311610e7857829003601f168201915b50505050508261235e565b1515610eab57600080fd5b6007826040518082805190602001908083835b602083101515610ee35780518252602082019150602081019050602083039250610ebe565b6001836020036101000a03801982511681845116808217855250505050505090500191505090815260200160405180910390208490806001815401808255809150509060018203906000526020600020016000909192909190915055508260026000868152602001908152602001600020600501836040518082805190602001908083835b602083101515610f8d5780518252602082019150602081019050602083039250610f68565b6001836020036101000a03801982511681845116808217855250505050505090500191505090815260200160405180910390209080519060200190610fd392919061262b565b5050505050565b60008060026000858152602001908152602001600020600501836040518082805190602001908083835b6020831015156110295780518252602082019150602081019050602083039250611004565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902080546001816001161561010002031660029004905014156110805760009050611085565b600190505b92915050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156110e757600080fd5b600581908060018154018082558091505090600182039060005260206000200160009091929091909150908051906020019061112492919061262b565b505050565b60006003836040518082805190602001908083835b602083101515611163578051825260208201915060208101905060208303925061113e565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415156111d957600080fd5b336003836040518082805190602001908083835b60208310151561121257805182526020820191506020810190506020830392506111ed565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550806004836040518082805190602001908083835b6020831015156112bc5780518252602082019150602081019050602083039250611297565b6001836020036101000a0380198251168184511680821785525050505050509050019150509081526020016040518091039020908051906020019061130292919061262b565b505050565b60603373ffffffffffffffffffffffffffffffffffffffff166003836040518082805190602001908083835b6020831015156113585780518252602082019150602081019050602083039250611333565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415156113ce57600080fd5b6007826040518082805190602001908083835b60208310151561140657805182526020820191506020810190506020830392506113e1565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902080548060200260200160405190810160405280929190818152602001828054801561148357602002820191906000526020600020905b81548152602001906001019080831161146f575b50505050509050919050565b60606004826040518082805190602001908083835b6020831015156114c957805182526020820191506020810190506020830392506114a4565b6001836020036101000a03801982511681845116808217855250505050505090500191505090815260200160405180910390208054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156115905780601f1061156557610100808354040283529160200191611590565b820191906000526020600020905b81548152906001019060200180831161157357829003601f168201915b50505050509050919050565b6060806060806115aa6126ab565b6002600087815260200190815260200160002060a06040519081016040529081600082018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156116625780601f1061163757610100808354040283529160200191611662565b820191906000526020600020905b81548152906001019060200180831161164557829003601f168201915b50505050508152602001600182018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156117045780601f106116d957610100808354040283529160200191611704565b820191906000526020600020905b8154815290600101906020018083116116e757829003601f168201915b50505050508152602001600282018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156117a65780601f1061177b576101008083540402835291602001916117a6565b820191906000526020600020905b81548152906001019060200180831161178957829003601f168201915b50505050508152602001600382018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156118485780601f1061181d57610100808354040283529160200191611848565b820191906000526020600020905b81548152906001019060200180831161182b57829003601f168201915b50505050508152602001600482018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156118ea5780601f106118bf576101008083540402835291602001916118ea565b820191906000526020600020905b8154815290600101906020018083116118cd57829003601f168201915b505050505081525050905080602001518160400151826060015183608001518393508292508191508090509450945094509450509193509193565b60608060608060606119356126ab565b6060600260008a815260200190815260200160002060a06040519081016040529081600082018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156119ef5780601f106119c4576101008083540402835291602001916119ef565b820191906000526020600020905b8154815290600101906020018083116119d257829003601f168201915b50505050508152602001600182018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611a915780601f10611a6657610100808354040283529160200191611a91565b820191906000526020600020905b815481529060010190602001808311611a7457829003601f168201915b50505050508152602001600282018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611b335780601f10611b0857610100808354040283529160200191611b33565b820191906000526020600020905b815481529060010190602001808311611b1657829003601f168201915b50505050508152602001600382018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611bd55780601f10611baa57610100808354040283529160200191611bd5565b820191906000526020600020905b815481529060010190602001808311611bb857829003601f168201915b50505050508152602001600482018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611c775780601f10611c4c57610100808354040283529160200191611c77565b820191906000526020600020905b815481529060010190602001808311611c5a57829003601f168201915b5050505050815250509150600260008a8152602001908152602001600020600501886040518082805190602001908083835b602083101515611cce5780518252602082019150602081019050602083039250611ca9565b6001836020036101000a03801982511681845116808217855250505050505090500191505090815260200160405180910390208054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611d955780601f10611d6a57610100808354040283529160200191611d95565b820191906000526020600020905b815481529060010190602001808311611d7857829003601f168201915b505050505090508160200151826040015183606001518460800151848494508393508292508191509650965096509650965050509295509295909350565b3373ffffffffffffffffffffffffffffffffffffffff166003826040518082805190602001908083835b602083101515611e225780518252602082019150602081019050602083039250611dfd565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515611e9857600080fd5b8060026000805481526020019081526020016000206000019080519060200190611ec392919061262b565b508460026000805481526020019081526020016000206001019080519060200190611eef92919061262b565b508360026000805481526020019081526020016000206002019080519060200190611f1b92919061262b565b508260026000805481526020019081526020016000206003019080519060200190611f4792919061262b565b508160026000805481526020019081526020016000206004019080519060200190611f7392919061262b565b508060026000805481526020019081526020016000206000019080519060200190611f9f92919061262b565b506006816040518082805190602001908083835b602083101515611fd85780518252602082019150602081019050602083039250611fb3565b6001836020036101000a0380198251168184511680821785525050505050509050019150509081526020016040518091039020600054908060018154018082558091505090600182039060005260206000200160009091929091909150555060008081548092919060010191905055505050505050565b606060058281548110151561206057fe5b906000526020600020018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156120fe5780601f106120d3576101008083540402835291602001916120fe565b820191906000526020600020905b8154815290600101906020018083116120e157829003601f168201915b50505050509050919050565b6000806003836040518082805190602001908083835b6020831015156121455780518252602082019150602081019050602083039250612120565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415156121bf57600090506121c4565b600190505b919050565b60603373ffffffffffffffffffffffffffffffffffffffff166003836040518082805190602001908083835b60208310151561221a57805182526020820191506020810190506020830392506121f5565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561229057600080fd5b6006826040518082805190602001908083835b6020831015156122c857805182526020820191506020810190506020830392506122a3565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902080548060200260200160405190810160405280929190818152602001828054801561234557602002820191906000526020600020905b815481526020019060010190808311612331575b50505050509050919050565b6000600580549050905090565b60008061236b8484612374565b14905092915050565b600060608060008086935085925083519150818351101561239457825191505b600090505b818110156125d75782818151811015156123af57fe5b9060200101517f010000000000000000000000000000000000000000000000000000000000000090047f0100000000000000000000000000000000000000000000000000000000000000027effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916848281518110151561242a57fe5b9060200101517f010000000000000000000000000000000000000000000000000000000000000090047f0100000000000000000000000000000000000000000000000000000000000000027effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191610156124c5577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9450612621565b82818151811015156124d357fe5b9060200101517f010000000000000000000000000000000000000000000000000000000000000090047f0100000000000000000000000000000000000000000000000000000000000000027effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916848281518110151561254e57fe5b9060200101517f010000000000000000000000000000000000000000000000000000000000000090047f0100000000000000000000000000000000000000000000000000000000000000027effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191611156125ca5760019450612621565b8080600101915050612399565b825184511015612609577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9450612621565b82518451111561261c5760019450612621565b600094505b5050505092915050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061266c57805160ff191683800117855561269a565b8280016001018555821561269a579182015b8281111561269957825182559160200191906001019061267e565b5b5090506126a791906126db565b5090565b60a06040519081016040528060608152602001606081526020016060815260200160608152602001606081525090565b6126fd91905b808211156126f95760008160009055506001016126e1565b5090565b905600a165627a7a723058201fc95c130573e7f1ab1421179c248de8d6a20f4abcc607a2be89bc0d00fbfca10029";
const contractAbi = [
  {
    constant: false,
    inputs: [
      { name: "_documentId", type: "uint256" },
      { name: "_policyId", type: "string" },
      { name: "_deligatee", type: "string" },
      { name: "_uploader", type: "string" }
    ],
    name: "deligateDocument",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      { name: "_documentId", type: "uint256" },
      { name: "_delegatee", type: "string" }
    ],
    name: "isDeligatee",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [{ name: "_username", type: "string" }],
    name: "addDeligateeAccounts",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      { name: "_username", type: "string" },
      { name: "_nucypherPublic", type: "string" }
    ],
    name: "signUpUsername",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "_deligatee", type: "string" }],
    name: "getDeligatedDocument",
    outputs: [{ name: "", type: "uint256[]" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "_username", type: "string" }],
    name: "getNucypherPublicKey",
    outputs: [{ name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "_documentId", type: "uint256" }],
    name: "getUploadedDocumentInfo",
    outputs: [
      { name: "", type: "string" },
      { name: "", type: "string" },
      { name: "", type: "string" },
      { name: "", type: "string" }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      { name: "_documentId", type: "uint256" },
      { name: "_deligatee", type: "string" }
    ],
    name: "getDeligatedDocumentInfo",
    outputs: [
      { name: "", type: "string" },
      { name: "", type: "string" },
      { name: "", type: "string" },
      { name: "", type: "string" },
      { name: "", type: "string" }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      { name: "_cipherText", type: "string" },
      { name: "_capsule", type: "string" },
      { name: "_aliceVerifyingKey", type: "string" },
      { name: "_alicePublicKey", type: "string" },
      { name: "_uploader", type: "string" }
    ],
    name: "uploadADocument",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "_index", type: "uint256" }],
    name: "getDelegteeUsername",
    outputs: [{ name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "_username", type: "string" }],
    name: "usernameAvailability",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "_uploader", type: "string" }],
    name: "getUploadedDocuments",
    outputs: [{ name: "", type: "uint256[]" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "getNumberOfDeligatee",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor"
  }
];
let contract = new web3.eth.Contract(contractAbi);
let contractAddress;


export function deployContract(_privateKey, _callingObject) {
  return new Promise(function(resolve, reject) {
    let address = web3.eth.accounts.privateKeyToAccount(_privateKey).address;
    contract
      .deploy({ data: byteCode, arguments: [] })
      .estimateGas({ from: address })
      .then(async function(gasAmount) {
        let gasPrice = await web3.eth.getGasPrice();
        let gasValue = gasPrice * gasAmount;

        let transaction = {
          from: web3.utils.toChecksumAddress(address),
          gas: gasAmount + 10,
          data: contract.deploy({ data: byteCode, arguments: [] }).encodeABI()
        };
        let bal = await web3.eth.getBalance(address);
        let requiredEth = gasValue;
        let gasInEth = web3.utils.fromWei(requiredEth.toString());
        if (bal > requiredEth) {
          _callingObject.verifyTransaction(
            transaction,
            gasInEth,
            "SignIn User to Contract",
            function() {
              let signPromise = web3.eth.accounts.signTransaction(
                transaction,
                _privateKey
              );
              // console.log(signPromise);
              signPromise
                .then(signedTx => {
                  // console.log(signedTx);
                  const sentTx = web3.eth.sendSignedTransaction(
                    signedTx.raw || signedTx.rawTransaction
                  );
                  sentTx.on("receipt", receipt => {
                    resolve(receipt.contractAddress);
                  });
                  sentTx.on("transactionHash", function(hash) {
                    _callingObject.transactionMining(hash);
                    // console.log("Allowance hash =", hash);
                  });
                  sentTx.on("error", err => {
                    resolve(err);
                  });
                })
                .catch(err => {
                  console.error(err);
                });
            }
          );
        } else {
          _callingObject.insufficientFunds(gasInEth);
        }
      });
  });
}

export async function connectToContract(_contractAddress) {
  contract.options.address = _contractAddress;
  contractAddress = _contractAddress;
  return true;
}

export async function deligateAccess(_username, _privateKey, _callingObject) {
  return new Promise(function(resolve, reject) {
    let address = web3.eth.accounts.privateKeyToAccount(_privateKey).address;
    contract.methods
        .addDeligateeAccounts(_username)
        .estimateGas({
          from: address
        })
        .then(async function(gasAmount) {
          web3.eth.getGasPrice().then(function(gasPrice) {
            let gasValue = gasPrice * gasAmount;

            let transaction = {
              from: web3.utils.toChecksumAddress(address),
              to: web3.utils.toChecksumAddress(contractAddress),
              gas: gasAmount + 10,
              data: contract.methods
                  .addDeligateeAccounts(_username)
                  .encodeABI()
            };

            web3.eth.getBalance(address).then(bal => {
              let requiredEth = gasValue;
              let gasInEth = web3.utils.fromWei(requiredEth.toString());
              // console.log(typeof requiredEth);
              if (bal > requiredEth) {
                _callingObject.verifyTransaction(
                    transaction,
                    gasInEth,
                    "Adding Delegatee",
                    function() {
                      let signPromise = web3.eth.accounts.signTransaction(
                          transaction,
                          _privateKey
                      );
                      // console.log(signPromise);
                      signPromise
                          .then(signedTx => {
                            // console.log(signedTx);
                            const sentTx = web3.eth.sendSignedTransaction(
                                signedTx.raw || signedTx.rawTransaction
                            );
                            sentTx.on("receipt", receipt => {
                              resolve(true);
                            });
                            sentTx.on("transactionHash", function(hash) {
                              _callingObject.transactionMining(hash);
                              // console.log("Allowance hash =", hash);
                            });
                            sentTx.on("error", err => {
                              resolve(err);
                            });
                          })
                          .catch(err => {
                            console.error(err);
                          });
                    }
                );
              } else {
                _callingObject.insufficientFunds(gasInEth);
              }
            });
          });
        });
  });
}

// async function testing() {
//   let callingObject = {
//     verifyTransaction: function(
//       transaction,
//       gasInEth,
//       transactionName,
//       callback
//     ) {
//       callback();
//     },
//     transactionMining: function(hash) {},
//     insufficientFunds: function(eth) {}
//   };
//   deployContract(
//     "0x36B298BE4646D2044F02ADCD1AF39A9069EF798CA4EF6F439553AA05935AAE47",
//     callingObject
//   );
// }
//
// testing();
