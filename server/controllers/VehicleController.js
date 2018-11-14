// import the vehicles monoose model
const vehicles = require("../models/VehicleModel");

// finds all vehicles and lists them
module.exports.list = function (req, res, next) {
  vehicles.find({}).exec()
    .then(vehicles => {
      return res.send(vehicles);
    })
    .catch(err => {
      console.log("no vehicles to show  ", err);
      return res.send(err);
    });
};

//  find vehicles by ID and show
module.exports.show = function (req, res, next) {
  vehicles.findById(req.params.id).exec()
    .then(vehicle => {
      return res.send(vehicle);
    })
    .catch(err => {
      console.log("no vehicle to show  ", err);
      return res.send(err);
    });
};

// save and create the new document into mongoDB

module.exports.create = function (req, res, next) {
  const vehicle = new vehicles();
 vehicle.body = req.body.body;
  vehicle.save((err, newvehicle) => {
    if (err) return res.send(err);
    return res.send(newvehicle);
  });
};