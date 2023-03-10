const express = require("express");
const { addAdvice } = require("../controllers/expertadvicecontroller");
// const checkerCrop = require("../Middleware/expertAdviceMiddleware");
const cropModel = require("../mongodb/models/croppost-model");
const router = express.Router();

router.patch("/advice/:postid", addAdvice);
router.get("/hello/:id", (req, res) => {
  return res.status(200).send(req.params.id);
});

module.exports = router;
