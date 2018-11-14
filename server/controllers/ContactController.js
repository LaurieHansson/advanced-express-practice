// import the contacts monoose model
const contacts = require("../models/contactModel");

// finds all contacts and lists them
module.exports.list = function (req, res, next) {
  contacts.find({}).exec()
    .then(contacts => {
      return res.send(contacts);
    })
    .catch(err => {
      console.log("no contacts found ", err);
      return res.send(err);
    });
};

//  find contacts by ID and show
module.exports.show = function (req, res, next) {
  contacts.findById(req.params.id).exec()
    .then(contact => {
      return res.send(contact);
    })
    .catch(err => {
      console.log("can't find contact ", err);
      return res.send(err);
    });
};

// save and create the new document into mongoDB

module.exports.create = function (req, res, next) {
  const contact = new contacts();
 contact.body = req.body.body;
  contact.save((err, newcontact) => {
    if (err) return res.send(err);
    return res.send(newcontact);
  });
};