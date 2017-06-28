var express = require('express');
var router = express.Router();

var LivrosController = require('../controller/LivrosController');
var ContatosController = require('../controller/ContatosController');
var OperadorasController = require('../controller/OperadorasController');

router.put('/livros',  LivrosController.update.bind(LivrosController));
router.post('/livros',  LivrosController.create.bind(LivrosController));
router.delete('/livros',  LivrosController.delete.bind(LivrosController));
router.get ('/livros', LivrosController.findAll.bind(LivrosController));
router.get ('/livros/:_id', LivrosController.findOne.bind(LivrosController));

router.get ('/contatos', ContatosController.findAll.bind(ContatosController));
router.get ('/operadoras', OperadorasController.findAll.bind(OperadorasController));



module.exports = router;
