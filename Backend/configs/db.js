const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
require("dotenv").config();

const connection = mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = { connection };

