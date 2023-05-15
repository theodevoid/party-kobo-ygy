const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const { saweriaValidator } = require("./middleware");
const { jedagJedug } = require("./jedag-jedug");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 2000;

// {
//   "version": "2022.01",
//   "created_at": "2021-01-01T12:00:00+00:00",
//   "id": "00000000-0000-0000-0000-000000000000",
//   "type": "donation",
//   "amount_raw": 69420,
//   "cut": 3471,
//   "donator_name": "Someguy",
//   "donator_email": "someguy@example.com",
//   "donator_is_user": false,
//   "message": "THIS IS A FAKE MESSAGE! HAVE A GOOD ONE"
// }

// app.post("/saweria", async (req, res) => {
//   console.log(req.body);
//   if (req.body.amount_raw >= 10000) {
//     await jedagJedug();
//     return res.send("ok");
//   }

//   return res.send("amount insufficient");
// });

app.listen(PORT, async () => {
  await jedagJedug()
  console.log("Listening...");
});
