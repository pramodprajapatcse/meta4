const TaxCalculator = artifacts.require("./TaxCalculator");

module.exports = async function (deployer) {
  try {
    console.log("Starting deployment...");
    await deployer.deploy(TaxCalculator);
    console.log("Contract deployed successfully!");
  } catch (error) {
    console.error("Deployment failed:", error);
  }
};
