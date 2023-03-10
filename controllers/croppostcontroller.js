const cropModel = require("../mongodb/models/croppost-model");
var cloudinary = require("cloudinary").v2;

const cloud__name = "dib5nqqso";
const cl__api__key = "155573177836448";
const cl__api__secret = "C7EXA2ZCIW5W5UVaCPFHwwXt2os";

cloudinary.config({
  cloud_name: cloud__name,
  api_key: cl__api__key,
  api_secret: cl__api__secret,
});

module.exports.getAll = async (req, res) => {
  try {
    // const cropsposts = await cropModel.find();
    const cropsposts = await cropModel.find({}).populate("advice").exec();
    if (cropsposts) {
      return res.status(200).send(cropsposts);
    }

    return res.status(501).json({
      msg: "There is some Fault",
    });
  } catch (err) {
    return res.status(501).json({
      msg: "There is some Fault",
    });
  }
};

module.exports.addPost = async (req, res) => {
  try {
    const { image, diseasefound, planttype, diseasetype } = req.body;
    const photoUrl = await cloudinary.uploader.upload(image);
    const addedData = await cropModel.create({
      image: photoUrl.url,
      diseasefound: diseasefound,
      planttype: planttype,
      diseaseType: diseasetype,
    });
    if (addedData) {
      return res.status(201).json({
        msg: "Crop Data posted successfully",
      });
    }

    return res.status(500).json({
      msg: "There is some Fault",
    });
  } catch (err) {
    return res.status(500).json({ msg: "There is Some Fault" });
  }
};

module.exports.getSinglePost = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const postData = await cropModel
      .findOne({
        _id: id,
      })
      .populate("advice")
      .exec();
    if (postData) {
      return res.status(200).send(postData);
    }
    return res.status(403).json({
      msg: "Post Data not found",
    });
  } catch (err) {
    return res.status(500).json({ msg: "There is Some Fault" });
  }
};
