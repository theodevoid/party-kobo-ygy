const { join } = require("path");
const { bridgeConnection } = require("../bridge");

const LightState = require("node-hue-api").v3.lightStates.LightState;

module.exports = {
  jedagJedug: async () => {
    const conn = await bridgeConnection();

    const open = (await import("open")).default;
    open(join(__dirname, "../media/mantrahujan.mp3"));

    const party = setInterval(async () => {
      const lightState1 = new LightState()
        .on()
        .xy(Math.random(), Math.random());
      const lightState2 = new LightState()
        .on()
        .xy(Math.random(), Math.random());
      const lightState3 = new LightState()
        .on()
        .xy(Math.random(), Math.random());

      await Promise.all([
        conn.lights.setLightState(1, lightState1),
        conn.lights.setLightState(2, lightState2),
        conn.lights.setLightState(3, lightState3),
      ]);
    }, 200);
  },
};
