export const THRUBI_ADDRESS = "0xeC6020cd56349ED60512c9985BdC5F3B7098315d";

export const THRUBI_ABI = [
    {
        "constant": true,
        "inputs": [],
        "name": "userCount",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x07973ccf"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "lastProcessedClaim",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x17f0f244"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "lastProcessedTransform",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x7b306690"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x8da5cb5b"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "lastClaim",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0xa8adb564"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "lastTransform",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0xaa2ddbf1"
    },
    {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor",
        "signature": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "ethAddress",
                "type": "address"
            }
        ],
        "name": "UserCreated",
        "type": "event",
        "signature": "0x0b0376a109cbb578b709f85f6a7befcdac3ac1ab251c99ede87f30c9572ac4d3"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "ethAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "name",
                "type": "string"
            },
            {
                "indexed": false,
                "name": "surname",
                "type": "string"
            }
        ],
        "name": "UserUpdated",
        "type": "event",
        "signature": "0xe5d18d6612696bff7df1db8015eac613241613297fa2ba2783993e4fd0e76f3d"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "ethAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "deactivated",
                "type": "bool"
            }
        ],
        "name": "UserActivated",
        "type": "event",
        "signature": "0x778b37e4212438e31bb36f033dd30e024005d668a4df069a75261d4e41f4013f"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "ethAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "deactivated",
                "type": "bool"
            }
        ],
        "name": "UserDeactivated",
        "type": "event",
        "signature": "0x1b32d41cdfc3bfbfff6b3c55227176d2d8d97ea2494e509db5d8b60d246e680b"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "userId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "populationId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "ethAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "weiAmount",
                "type": "uint256"
            }
        ],
        "name": "ClaimSubmitted",
        "type": "event",
        "signature": "0x3a30d1c4069e097873e77443df9683e8de5c7ba3674315b8670a0211e3130195"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "userId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "populationId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "ethAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "weiAmount",
                "type": "uint256"
            }
        ],
        "name": "TransformSubmitted",
        "type": "event",
        "signature": "0xd7d9057eeb8d77c85b055fd0a383e2cbb00c462d8d90a53f7dea6493d376661d"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_userId",
                "type": "uint256"
            },
            {
                "name": "_populationId",
                "type": "uint256"
            },
            {
                "name": "_ethAddress",
                "type": "address"
            }
        ],
        "name": "transform",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function",
        "signature": "0x723ed1db"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getLastTransform",
        "outputs": [
            {
                "name": "_lastTransform",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x8a3f8702"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getLastProcessedTransform",
        "outputs": [
            {
                "name": "_lastProcessedTransform",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x766dcc9c"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_i",
                "type": "uint256"
            }
        ],
        "name": "getTransform",
        "outputs": [
            {
                "name": "_userId",
                "type": "uint256"
            },
            {
                "name": "_populationId",
                "type": "uint256"
            },
            {
                "name": "_ethAddress",
                "type": "address"
            },
            {
                "name": "_weiAmount",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x21347ab1"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "signalProcessedTransforms",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x764103fc"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_userId",
                "type": "uint256"
            },
            {
                "name": "_populationId",
                "type": "uint256"
            },
            {
                "name": "_ethAddress",
                "type": "address"
            },
            {
                "name": "_weiAmount",
                "type": "uint256"
            }
        ],
        "name": "claimEth",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function",
        "signature": "0xd8875079"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getLastClaim",
        "outputs": [
            {
                "name": "_lastClaim",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x68a825ad"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getLastProcessedClaim",
        "outputs": [
            {
                "name": "_lastProcessedClaim",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x8fdfde42"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_i",
                "type": "uint256"
            }
        ],
        "name": "getClaim",
        "outputs": [
            {
                "name": "_userId",
                "type": "uint256"
            },
            {
                "name": "_populationId",
                "type": "uint256"
            },
            {
                "name": "_address",
                "type": "address"
            },
            {
                "name": "_weiAmount",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x5aef2447"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_ethAddress",
                "type": "address"
            }
        ],
        "name": "findMe",
        "outputs": [
            {
                "name": "foundMe",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x3223a182"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_ethAddress",
                "type": "address"
            }
        ],
        "name": "findMyUser",
        "outputs": [
            {
                "name": "found",
                "type": "bool"
            },
            {
                "name": "name",
                "type": "string"
            },
            {
                "name": "surname",
                "type": "string"
            },
            {
                "name": "deactivated",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0xc77489f1"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_ethAddress",
                "type": "address"
            },
            {
                "name": "_name",
                "type": "string"
            },
            {
                "name": "_surname",
                "type": "string"
            }
        ],
        "name": "updateUser",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x10e8b22d"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_ethAddress",
                "type": "address"
            }
        ],
        "name": "createUser",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0xcdd87618"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_ethAddress",
                "type": "address"
            }
        ],
        "name": "activateUser",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0xb4acfe1c"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_ethAddress",
                "type": "address"
            }
        ],
        "name": "deactivateUser",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x1a47767b"
    }
];