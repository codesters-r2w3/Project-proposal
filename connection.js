const { ethers } = require("ethers");
const provider = new ethers.providers.JsonRpcProvider("https://goerli.infura.io/v3/21be386a193f4cb99dce51cbd429341e");

const walletAddress = "0x008d2fa71622bc6ebf5e645ddc5f6b524b992733";
const ABI = [
    [{
            "inputs": [{
                "internalType": "address",
                "name": "initialOwner",
                "type": "address"
            }],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [{
                    "internalType": "address",
                    "name": "sender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                }
            ],
            "name": "ERC721IncorrectOwner",
            "type": "error"
        },
        {
            "inputs": [{
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "ERC721InsufficientApproval",
            "type": "error"
        },
        {
            "inputs": [{
                "internalType": "address",
                "name": "approver",
                "type": "address"
            }],
            "name": "ERC721InvalidApprover",
            "type": "error"
        },
        {
            "inputs": [{
                "internalType": "address",
                "name": "operator",
                "type": "address"
            }],
            "name": "ERC721InvalidOperator",
            "type": "error"
        },
        {
            "inputs": [{
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }],
            "name": "ERC721InvalidOwner",
            "type": "error"
        },
        {
            "inputs": [{
                "internalType": "address",
                "name": "receiver",
                "type": "address"
            }],
            "name": "ERC721InvalidReceiver",
            "type": "error"
        },
        {
            "inputs": [{
                "internalType": "address",
                "name": "sender",
                "type": "address"
            }],
            "name": "ERC721InvalidSender",
            "type": "error"
        },
        {
            "inputs": [{
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }],
            "name": "ERC721NonexistentToken",
            "type": "error"
        },
        {
            "inputs": [{
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }],
            "name": "OwnableInvalidOwner",
            "type": "error"
        },
        {
            "inputs": [{
                "internalType": "address",
                "name": "account",
                "type": "address"
            }],
            "name": "OwnableUnauthorizedAccount",
            "type": "error"
        },
        {
            "anonymous": false,
            "inputs": [{
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "approved",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "Approval",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [{
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "approved",
                    "type": "bool"
                }
            ],
            "name": "ApprovalForAll",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [{
                    "indexed": true,
                    "internalType": "address",
                    "name": "previousOwner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "OwnershipTransferred",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [{
                    "indexed": true,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "Transfer",
            "type": "event"
        },
        {
            "inputs": [{
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "approve",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [{
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }],
            "name": "balanceOf",
            "outputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [{
                    "internalType": "string",
                    "name": "_eventName",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_evntVenue",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "_Time",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_Duration",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "_creatorAddress",
                    "type": "address"
                },
                {
                    "internalType": "string",
                    "name": "_imgUrl",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "_totalSupply",
                    "type": "uint256"
                }
            ],
            "name": "createEvent",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "name": "events",
            "outputs": [{
                    "internalType": "string",
                    "name": "eventName",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "eventVenue",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "Time",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "Duration",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "createrName",
                    "type": "string"
                },
                {
                    "internalType": "address",
                    "name": "creatorAddress",
                    "type": "address"
                },
                {
                    "internalType": "string",
                    "name": "imgUrl",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "totalSupply",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [{
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }],
            "name": "getApproved",
            "outputs": [{
                "internalType": "address",
                "name": "",
                "type": "address"
            }],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [{
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                }
            ],
            "name": "isApprovedForAll",
            "outputs": [{
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "myEvent",
            "outputs": [{
                    "internalType": "string",
                    "name": "eventName",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "eventVenue",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "Time",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "Duration",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "createrName",
                    "type": "string"
                },
                {
                    "internalType": "address",
                    "name": "creatorAddress",
                    "type": "address"
                },
                {
                    "internalType": "string",
                    "name": "imgUrl",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "totalSupply",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "myPerson",
            "outputs": [{
                    "internalType": "string",
                    "name": "Name",
                    "type": "string"
                },
                {
                    "internalType": "enum Nft.gender",
                    "name": "Gender",
                    "type": "uint8"
                },
                {
                    "internalType": "uint256",
                    "name": "Age",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "Address",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "name",
            "outputs": [{
                "internalType": "string",
                "name": "",
                "type": "string"
            }],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "owner",
            "outputs": [{
                "internalType": "address",
                "name": "",
                "type": "address"
            }],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [{
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }],
            "name": "ownerOf",
            "outputs": [{
                "internalType": "address",
                "name": "",
                "type": "address"
            }],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [{
                    "internalType": "string",
                    "name": "_name",
                    "type": "string"
                },
                {
                    "internalType": "enum Nft.gender",
                    "name": "_gen",
                    "type": "uint8"
                },
                {
                    "internalType": "uint256",
                    "name": "_age",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "_address",
                    "type": "address"
                }
            ],
            "name": "register",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [{
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "safeTransferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [{
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
                }
            ],
            "name": "safeTransferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [{
                "internalType": "string",
                "name": "_eventName",
                "type": "string"
            }],
            "name": "selectEvent",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [{
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "approved",
                    "type": "bool"
                }
            ],
            "name": "setApprovalForAll",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [{
                "internalType": "bytes4",
                "name": "interfaceId",
                "type": "bytes4"
            }],
            "name": "supportsInterface",
            "outputs": [{
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "symbol",
            "outputs": [{
                "internalType": "string",
                "name": "",
                "type": "string"
            }],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [{
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }],
            "name": "tokenURI",
            "outputs": [{
                "internalType": "string",
                "name": "",
                "type": "string"
            }],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [{
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "transferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [{
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ]
]