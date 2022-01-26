let chainInfo = {
    "bscChainTestNet": {
        "chainId": "0x61",
        "chainName": "BSC TestNet",
        "rpcUrls": [
            "https://data-seed-prebsc-1-s1.binance.org:8545/",
            "https://data-seed-prebsc-2-s1.binance.org:8545/"
        ],
        "iconUrls": [
            "https://dex-bin.bnbstatic.com/static/images/favicon.ico",
            "https://dex-bin.bnbstatic.com/static/images/favicon.ico"
        ],
        "nativeCurrency": {
            "name": "BNB",
            "symbol": "BNB",
            "decimals": 18
        },
        "blockExplorerUrls": [
            "https://testnet.bscscan.com/"
        ]
    },
    "bscChainMainNet": {
        "chainId": "0x38",
        "chainName": "BSC MainNet",
        "rpcUrls": [
            "https://bsc-dataseed1.binance.org",
            "https://bsc-dataseed1.defibit.io/",
            "https://bsc-dataseed1.ninicoin.io/"
        ],
        "iconUrls": [
            "https://dex-bin.bnbstatic.com/static/images/favicon.ico",
            "https://dex-bin.bnbstatic.com/static/images/favicon.ico"
        ],
        "nativeCurrency": {
            "name": "BNB",
            "symbol": "BNB",
            "decimals": 18
        },
        "blockExplorerUrls": [
            "https://bscscan.com/"
        ]
    },
}

async function registerEthereumChain(chain) {
    let chainData = {
        'jsonrpc': '2.0',
        'method': 'wallet_addEthereumChain',
        'params': [
            chainInfo[chain],
        ],
    };
    return window.ethereum.request(chainData)
    // window.ethereum.request($)
}

async function addTokenToWallet(token, symbol, decimals, logo){
    await window.ethereum.request({
        method: 'wallet_watchAsset',
        params: {
            type: 'ERC20', // Initially only supports ERC20, but eventually more!
            options: {
                address: token, // The address that the token is at.
                symbol: symbol, // A ticker symbol or shorthand, up to 5 chars.
                decimals: decimals, // The number of decimals in the token
                image: logo, // A string url of the token logo
            },
        },
    });
}


function getQueryString(name) {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    let r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return decodeURIComponent(r[2]);
    }
    return null;
}