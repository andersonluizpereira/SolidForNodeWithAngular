var OperadorasModel = require('../model/OperadorasModel');
var Promise = require('bluebird');


function OperadorasController(Model) {
  this.Model = Promise.promisifyAll(Model);
}

// OperadorasController.prototype.create = function(req, res) {
//  var _data = req.body;
 
//   try {
//    this.Model.create(_data);
//     res.json("TRUE");
//   } catch (error) {
//     res.json(error)
//   }
    
// };

// OperadorasController.prototype.findOne = function(req, res) {
//   var _id = req.params._id;

//   this.Model.findOneAsync(_id)
//     .then(function(result) {
//       res.json(result[0] || []);
//     })
//     .catch(function(err) {
//       console.log(err)
//     });
// };

OperadorasController.prototype.findAll = function(req, res) {
  this.Model.findAllAsync()
    .then(function(result) {
      console.log(result);
      res.json(result || []);
    })
    .catch(function(err) {
      console.log(err)
    });
};

// OperadorasController.prototype.update = function(req, res) {
//  console.log(req.body);
//  var _data = req.body; 

//   try {
//    this.Model.update(_data);
//     res.json("TRUE");
//   } catch (error) {
//     res.json(error)
//   }
 
// };


// OperadorasController.prototype.delete = function(req, res) {
//     console.log(req.body);
//   var _data = req.body; 
//   this.Model.delete(_data);
    
//     try {
      
//       res.json("TRUE");
          
//     } catch (error) {
//         console.log(error)  
//     }

//};

module.exports = new OperadorasController(OperadorasModel);
