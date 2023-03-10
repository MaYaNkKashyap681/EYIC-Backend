const sampleModel = require("../mongodb/models/sample-model.js");

module.exports.sampleFunc = (req, res) => {
  return res.send("Hello");
};

module.exports.addUser = async (req, res) => {
  try {
    const { farmerId, name, email } = req.body;

    const addedUser = await sampleModel.create({
      farmerId: farmerId,
      name: name,
      email: email,
    });

    if (addedUser) {
      res.status(201).json({
        msg: "User added successfully",
      });
    } else {
      return res.status(401).json({
        msg: "User Is not Added",
      });
    }
  } catch (err) {
    return res.status(500).json({ msg: "There is Some Fault" });
  }
};

module.exports.getUsers = async (req, res) => {
  try {
    const usersList = await sampleModel.find();

    if (usersList) {
      return res.status(200).send(usersList);
    } else {
      return res.status(401).json({
        msg: "Users List not Found",
      });
    }
  } catch (err) {
    return res.status(500).json({ msg: "There is Some Fault" });
  }
};

module.exports.getUser = async (req, res) => {
  try {
    const id = req.params.id;

    const userIdFound = await sampleModel.findOne({
      _id: id,
    });

    if (userIdFound) {
      return res.status(200).send(userIdFound);
    } else {
      return res.status(401).json({
        msg: "User Id not Found",
      });
    }
  } catch (err) {
    return res.status(500).json({ msg: "There is Some Fault" });
  }
};
