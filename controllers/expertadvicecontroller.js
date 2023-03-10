const cropModel = require("../mongodb/models/croppost-model");
const expertModel = require("../mongodb/models/expertadvice-model");

module.exports.addAdvice = async (req, res) => {
  try {
    const postId = req.params.postid;
    const { expertname, advicescription } = req.body;
    console.log(expertname, advicescription);

    const postExist = await cropModel.findById(postId);

    if (postExist) {
      const addExpertData = await expertModel.create({
        advicescription: advicescription,
        expertname: expertname,
      });

      if (addExpertData) {
        const updatedData = await cropModel.findByIdAndUpdate(postId, {
          advice: addExpertData._id,
          isreviewed: true
        });

        if (updatedData) {
          return res.status(200).json({
            msg: "Succesfully Updated the data",
          });
        }
      }
    }
    return res.status(501).json({
      msg: "There is some Fault",
    });
  } catch (err) {
    return res.status(500).json({
      msg: "There is Some Fault",
    });
  }
};
