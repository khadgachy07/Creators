const HDWalletProvider = require('@truffle/hdwallet-provider')
const keys = require("./keys.json")

module.exports = {
  contracts_build_directory: "./public/contracts",
  networks: {
    development: {
      host: "127.0.0.1", // Localhost (default: none)
      port: 7545, // Standard Ethereum port (default: none)
      network_id: "*", // Any network (default: none)
    },
    goerli : {
      provider : () => 
        new HDWalletProvider({
          mnemonic: {
            phrase : keys.MNEMONIC
          },
          providerOrUrl: `https://goerli.infura.io/v3/${keys.INFURA_PROJECT_ID}`,
          addressIndex: "0",
        }),
      network_id: 5,
      gas: 6000000,
      gasPrice: 20000000000,
      confirmations: 2,
      timeoutBlocks: 200,
    }
  },

  compilers: {
    solc: {
      version: "0.8.16", // Fetch exact version from solc-bin (default: truffle's version)
    },
  },
};

// transaction hash:    0x724d828d6fb680295b6e878bde8f2a540dff65a5c0a91884216fda30e6f2efcf
// contract address:    0xb069352E89792F96e0B6233009a45d0533F306Bb
