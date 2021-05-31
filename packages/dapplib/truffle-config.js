require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy knock forward turtle crazy reward stereo purity hover clinic bottom sign'; 
let testAccounts = [
"0x63539b417a1fd5409b1034dd30052edc49560cea3cfba483218aee0c7d37f727",
"0xa84d0d283ec5c5acb454486f3135bb116ce52db6cc5d89699ad89b44601c9837",
"0x522c35181973c5176b4d57c7836f95d7a83ff81e60a1abbe099f4f0ae7d283a6",
"0xf4936d7231764e94615c3bea1b5afca4b8b8f450cc6738a45214ac462fae99e1",
"0xd958ec4dc7c017168d178e1a0cd871c0d2cfead90a8971bf209b8bb14af8d522",
"0x19f5b1e6ee16e46fa64ef595724811defe96eaf7c2077c1e86e9c6321ff2e12c",
"0x4b6084bb53414a1522ee565dcaeade4052f3a8d5fee09bf0b2fca445dcb26a23",
"0xb9a47cdda43bb63b72645c44bede85c62a190c9fd09ad75d44c95cf0ab49cb7c",
"0x71277749a5705838fea4d8b4fd9071cd797c98f3f4cd060bd4a0489fc96f4da4",
"0xb6688c9abd22d8301ea80797f0fb82a540158d38a53ae7247efa6b20432e44ca"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

