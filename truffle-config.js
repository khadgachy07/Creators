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
    rinkeby : {
      provider : () => 
        new HDWalletProvider({
          mnemonic: {
            phrase : keys.MNEMONIC
          },
          providerOrUrl: "https://rinkeby.infura.io/v3/f5598cb708bf4037b7fc970ad1c20d97",
          addressIndex: "0",
        }),
      network_id: 4,
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
