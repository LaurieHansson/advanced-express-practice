// import the Comments monoose model
const Comments = require("../models/commentModel");

// finds all comments and lists them
module.exports.list = function (req, res, next) {
  Comments.find({}).exec()
    .then(comments => {
      return res.send(comments);
    })
    .catch(err => {
      console.log("no comments ", err);
      return res.send(err);
    });
};

//  find comments by ID and show
module.exports.show = function (req, res, next) {
  Comments.findById(req.params.id).exec()
    .then(comment => {
      return res.send(comment);
    })
    .catch(err => {
      console.log("no comment ", err);
      return res.send(err);
    });
};

// save and create the new document into mongoDB

module.exports.create = function (req, res, next) {
  const comment = new Comments();
 comment.body = req.body.body;
  comment.save((err, newComment) => {
    if (err) return res.send(err);
    return res.send(newComment);
  });
};