var express = require("express");
var router = express.Router();

const { creatStory, viewStory} = require("../controller/story");

router.get("/find", viewStory);
router.post("/insert", creatStory);


module.exports = router;
