const StarterContract = artifacts.require("StarterContract");

module.exports = function (deployer) {
  deployer.deploy(StarterContract);
};
