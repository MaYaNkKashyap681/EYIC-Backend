const mongoose = require("mongoose");

const cropSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      default: 'http://whdkkdhsd'
    },
    diseasefound: {
      type: Boolean,
      default: false,
    },
    planttype: {
      type: String,
      required: true,
    },
    diseaseType: {
      type: String,
      default: '',
    },
    isreviewed: {
      type: Boolean,
      default: false,
    },
    advice: {
      type: "ObjectId",
      ref: "expertModel",
    },
  },
  {
    timestamps: true,
  }
);

const cropModel = mongoose.model("cropModel", cropSchema);

module.exports = cropModel;
