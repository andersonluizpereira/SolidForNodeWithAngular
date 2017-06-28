var ContatosModel = require('../model/ContatosModel');
var Promise = require('bluebird');


function ContatosController(Model) {
  this.Model = Promise.promisifyAll(Model);
}

// ContatosController.prototype.create = function(req, res) {
//  var _data = req.body;
 
//   try {
//    this.Model.create(_data);
//     res.json("TRUE");
//   } catch (error) {
//     res.json(error)
//   }
    
// };

// ContatosController.prototype.findOne = function(req, res) {
//   var _id = req.params._id;

//   this.Model.findOneAsync(_id)
//     .then(function(result) {
//       res.json(result[0] || []);
//     })
//     .catch(function(err) {
//       console.log(err)
//     });
// };

ContatosController.prototype.findAll = function(req, res) {
  this.Model.findAllAsync()
    .then(function(result) {
      res.json(result || []);
    })
    .catch(function(err) {
      console.log(err)
    });
};

// ContatosController.prototype.update = function(req, res) {
//  console.log(req.body);
//  var _data = req.body; 

//   try {
//    this.Model.update(_data);
//     res.json("TRUE");
//   } catch (error) {
//     res.json(error)
//   }
 
// };


// ContatosController.prototype.delete = function(req, res) {
//     console.log(req.body);
//   var _data = req.body; 
//   this.Model.delete(_data);
    
//     try {
      
//       res.json("TRUE");
          
//     } catch (error) {
//         console.log(error)  
//     }

//};

module.exports = new ContatosController(ContatosModel);
