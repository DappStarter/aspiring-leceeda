require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture oppose bottom tooth notice crime remember million gloom clinic flip senior'; 
let testAccounts = [
"0xb983a9cd9e7b8b1d7715d79c69cf03033028156071f2d41302790dccb6b5babb",
"0xec9c6569966f8d2c25149abdc69f03fef0c88942533a69ef6e1f2ad6e8242a2e",
"0xe4cacb0bb6bfdd8b3831c6b484da6d3373da5378f37ff16bf2001c0009d869eb",
"0x88245d6c42e65e09c1b9641ee13c1443d7dbc70ec54b6c4fb83139ad35c8faad",
"0x4c85f048147e0e75387cb4578ddcc68039c7631ad40f9e34f9122a33437f51c5",
"0x1dc96065c6249b13c8a5fd43a2c9a24550f041610f37d89d33d908ebbc46178f",
"0xfd9727ee6ba97a10a6a55a0a51b3a042eeb6d84325681a000182582391b9900f",
"0x4ca1d3d6e2d054b3236ca076a357b60b72eba1361f6a530d44761574fd3f9208",
"0x02cdf61694c41e009e8d45d48a4cc135bd3c04cc7add8d5761693006d7de2953",
"0x4c47a1e291a0ce11e7775f859ea3b423c943e72ef6417b81e86669f042890cd9"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
