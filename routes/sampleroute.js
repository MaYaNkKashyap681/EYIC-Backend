const express = require("express");
const { sampleFunc, addUser, getUsers, getUser } = require("../controllers/sampleController.js");
const router = express.Router();

router.get("/", sampleFunc);

router.post("/adduser", addUser);
router.get("/getusers", getUsers);
router.get("/getuser/:id", getUser);

module.exports = router;
