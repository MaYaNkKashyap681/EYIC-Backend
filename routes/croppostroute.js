const express = require("express");
const { getAll, addPost, getSinglePost } = require("../controllers/croppostcontroller");
const router = express.Router();

router.get('/all', getAll);
router.get('/:id', getSinglePost);
router.post('/addpost', addPost);


module.exports = router;
