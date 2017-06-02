var mysql = require('../Db/mysql');

function UsersModel() {
  
}

UsersModel.prototype.create = function(_data, callback) {
   mysql.query('INSERT INTO livros SET ?', _data,function(error,results,fields){
   });
};

UsersModel.prototype.findOne = function(_id, callback) {
  mysql.query('SELECT id, titulo, descricao,preco FROM livros WHERE id = ' + _id, function(err, results, fields) {
    callback(err, results);
  });
};

UsersModel.prototype.findAll = function(callback) {
  mysql.query('SELECT id, titulo, descricao,preco FROM livros', function(err, rows, fields) {
    callback(err, rows);
  });
};

UsersModel.prototype.update = function(_data, callback) {

mysql.query('UPDATE livros SET titulo=?, descricao = ?,preco = ? where id =?',[ _data.titulo, _data.descricao, _data.preco,_data.id],function(error,results,fields){
   });

};

UsersModel.prototype.delete = function(_data, callback) {
    mysql.query('DELETE FROM livros WHERE id= ?',[_data.id], function(err, results, fields) {
 
  });
};

module.exports = new UsersModel();
