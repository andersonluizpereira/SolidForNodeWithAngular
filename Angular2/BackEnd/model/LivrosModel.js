var mysql = require('../Db/mysql');

function LivrosModel() {
  
}

LivrosModel.prototype.create = function(_data, callback) {
   mysql.query('INSERT INTO livros SET ?', _data,function(error,results,fields){
   });
};

LivrosModel.prototype.findOne = function(_id, callback) {
  mysql.query('SELECT id, titulo, descricao,preco FROM livros WHERE id = ' + _id, function(err, results, fields) {
    callback(err, results);
  });
};

LivrosModel.prototype.findAll = function(callback) {
  mysql.query('SELECT id, titulo, descricao,preco FROM livros', function(err, rows, fields) {
    callback(err, rows);
  });
};

LivrosModel.prototype.update = function(_data, callback) {

mysql.query('UPDATE livros SET titulo=?, descricao = ?,preco = ? where id =?',[ _data.titulo, _data.descricao, _data.preco,_data.id],function(error,results,fields){
   });

};

LivrosModel.prototype.delete = function(_data, callback) {
    mysql.query('DELETE FROM livros WHERE id= ?',[_data.id], function(err, results, fields) {
 
  });
};

module.exports = new LivrosModel();
