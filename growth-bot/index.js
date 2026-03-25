const sdk = require("@phessophissy/btc-prediction-market-sdk");

console.log("BTC Prediction Market Growth Bot running...");

const exportsList = Object.keys(sdk).sort();
console.log("SDK exports:", exportsList);

if (typeof sdk.initializeMarketSDK !== "function") {
  console.error("Smoke check failed: initializeMarketSDK export not found.");
  process.exit(1);
}

console.log("Smoke check passed: initializeMarketSDK is available.");
