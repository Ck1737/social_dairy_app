var story_model = require("../model/story_model");

creatStory = async (req, res) => {
  const { title, body } = req.body;

  var data = await story_model.create(req.body);
  console.log(data);

  res.status(200).json({
    status: "Data Insert Successfully",
    data,
  });
};

viewStory = async (req, res) => {
  var data = await story_model.find();
  console.log(data);

  res.status(200).json({
    status: "View Story Succesfully",
    data,
  });
};


module.exports = { creatStory, viewStory };
