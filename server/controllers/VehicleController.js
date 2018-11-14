// require vehicles from vehicles
const vehicles = require("../vehicles");
// set a variable that stores the amount of vehicles
let vehicleAmount = vehicles.length;


module.exports.list =  function list(request, response) {
    return response.json(vehicles);
   }
   module.exports.show =  function show(request, response) {
    let vehicle = vehicles.find((id) => id._id == request.params.id);
    response.json(vehicle);
   }
   module.exports.create =  function create(request, response) {
    request.body._id = vehicleAmount + 1;   
    vehicles.push(request.body);
    vehicleAmount++;
    response.json(request.body);    
   }
   module.exports.update =  function update(request, response) {
    return response.json({theId: request.params.id});
   }
   module.exports.remove =  function remove(request, response) {
return response.json({});
   }