const { discovery } = require("node-hue-api");

module.exports = {
  getBridgeIpAddress: async () => {
    const results = await discovery.mdnsSearch();

    if (!results.length) throw new Error("Bridge not found");

    return results[0].ipaddress;
  },
};
