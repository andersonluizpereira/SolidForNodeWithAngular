var LivrosModel = require('../model/LivrosModel');
var Promise = require('bluebird');


function LivrosController(Model) {
  this.Model = Promise.promisifyAll(Model);
}

LivrosController.prototype.create = function(req, res) {
 var _data = req.body;
 
  try {
   this.Model.create(_data);
    res.json("TRUE");
  } catch (error) {
    res.json(error)
  }
    
};

LivrosController.prototype.findOne = function(req, res) {
  var _id = req.params._id;

  this.Model.findOneAsync(_id)
    .then(function(result) {
      res.json(result[0] || []);
    })
    .catch(function(err) {
      console.log(err)
    });
};

LivrosController.prototype.findAll = function(req, res) {
  this.Model.findAllAsync()
    .then(function(result) {
      res.json(result || []);
    })
    .catch(function(err) {
      console.log(err)
    });
};

LivrosController.prototype.update = function(req, res) {
 console.log(req.body);
 var _data = req.body; 

  try {
   this.Model.update(_data);
    res.json("TRUE");
  } catch (error) {
    res.json(error)
  }
 
};


LivrosController.prototype.delete = function(req, res) {
    console.log(req.body);
  var _data = req.body; 
  this.Model.delete(_data);
    
    try {
      
      res.json("TRUE");
          
    } catch (error) {
        console.log(error)  
    }

    
    
};

module.exports = new LivrosController(LivrosModel);
