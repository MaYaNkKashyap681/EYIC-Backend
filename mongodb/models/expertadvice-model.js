const mongoose = require("mongoose");

const expertSchema = new mongoose.Schema({
  advicescription: {
    type: String,
    default: "",
  },
  expertname: {
    type: String,
    required: true,
  },
});

const expertModel = mongoose.model("expertModel", expertSchema);

module.exports = expertModel;
