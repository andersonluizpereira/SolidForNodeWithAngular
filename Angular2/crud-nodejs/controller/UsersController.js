var UsersModel = require('../model/UsersModel');
var Promise = require('bluebird');

class UsersController {
    constructor(Model) {
        console.log('Funfou');
        this.Model = Promise.promisifyAll(Model);
    }
    create(req, res) {
        var _data = req.body;

        try {
            this.Model.create(_data);
            res.json("TRUE");
        } catch (error) {
            res.json(error)
        }

    };

    findOne(req, res) {
        var _id = req.params._id;

        this.Model.findOneAsync(_id)
            .then(function(result) {
                res.json(result[0] || []);
            })
            .catch(function(err) {
                console.log(err)
            });
    };


    findAll(req, res) {
        this.Model.findAllAsync()
            .then(function(result) {
                res.json(result || []);
            })
            .catch(function(err) {
                console.log(err)
            });
    };

    update(req, res) {
        console.log(req.body);
        var _data = req.body;

        try {
            this.Model.update(_data);
            res.json("TRUE");
        } catch (error) {
            res.json(error)
        }

    };


    delete(req, res) {
        console.log(req.body);
        var _data = req.body;
        this.Model.delete(_data);
        try {
            res.json("TRUE");

        } catch (error) {
            console.log(error)
        }
    };
}
module.exports = new UsersController(UsersModel);