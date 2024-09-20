const ToDoModel = require("../models/ToDoModels");

// getting an todo...
module.exports.getToDo = async (req, res) => {
  try {
    const toDo = await ToDoModel.find();
    res.send(toDo);
  } catch (error) {
    res.send({ message: error });
  }
};


//for save todo...
module.exports.saveToDo = async (req, res) => {
  const { text } = req.body;

  ToDoModel.create({ text }).then((data) => {
    console.log("Added successfully....");
    console.log(data);
    res.send(data);
  });
};

//for update todo...

module.exports.updateToDo = async (req, res) => {
  const { _id, text } = req.body;

  ToDoModel.findByIdAndUpdate(_id, { text })
    .then(() => {
      res.send("Updated successfully....");
    })
    .catch((error) => {
      res.send({ message: error });
    });
};

//for delete todo...

module.exports.deleteToDo = async (req, res) => {
  const { _id } = req.body;

  ToDoModel.findByIdAndDelete(_id)
    .then(() => {
      res.send("Deleted successfully....");
    })
    .catch((error) => {
      res.send({ message: error });
    });
};
