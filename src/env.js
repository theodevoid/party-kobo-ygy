const { createEnv } = require("@t3-oss/env-core");
const { z } = require("zod");

module.exports = {
  env: createEnv({
    clientPrefix: "",
    server: {
      HUE_BRIDGE_USER: z.string().min(1),
      HUE_BRIDGE_CLIENT_KEY: z.string().min(1),
      STREAM_KEY: z.string().min(1),
    },
    client: {},
    runtimeEnvStrict: {
      HUE_BRIDGE_USER: process.env.HUE_BRIDGE_USER,
      HUE_BRIDGE_CLIENT_KEY: process.env.HUE_BRIDGE_CLIENT_KEY,
      STREAM_KEY: process.env.STREAM_KEY,
    },
  }),
};
