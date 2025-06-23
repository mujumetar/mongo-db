const mongoose = require("mongoose");

const adminschema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone: {
    type: Number,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const adminTbl = mongoose.model("admin", adminschema);
module.exports = adminTbl;
