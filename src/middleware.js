const crypto = require("crypto");
const { env } = require("./env");

const verifySignature = (receivedSignature, dataString, key) => {
  const hmac = crypto
    .createHmac("sha256", key)
    .update(dataString)
    .digest("hex");
  try {
    return crypto.timingSafeEqual(
      Buffer.from(hmac),
      Buffer.from(receivedSignature)
    );
  } catch {
    return false;
  }
};

// signature: {version}{id}{amount_raw}{donator_name}{donator_email}
const saweriaValidator = (req, res, next) => {
  const HEADER_KEY = "Saweria-Callback-Signature";
  const receivedSignature = req.header(HEADER_KEY);

  if (!receivedSignature) return res.status(400).send("error");

  const body = req.body;
  const signature = `${body.version}${body.id}${body.amount_raw}${body.donator_name}${body.donator_email}`;

  const signatureIsVerified = verifySignature(
    receivedSignature,
    signature,
    env.STREAM_KEY
  );

  if (!signatureIsVerified) return res.status(400).send("invalid signature");

  return next();
};

module.exports = {
  saweriaValidator,
};
