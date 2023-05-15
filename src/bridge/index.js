const { getBridgeIpAddress } = require("./getBridgeIpAddress");
const { v3 } = require("node-hue-api");
const { env } = require("../env");

module.exports = {
  bridgeConnection: async () => {
    const ip = await getBridgeIpAddress();

    console.log(ip);

    const connection = await v3.api
      .createLocal(ip)
      .connect(env.HUE_BRIDGE_USER);

    return connection;
  },
};
