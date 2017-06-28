var mysql = require('../Db/mysqlBase');

function ContatosModel() {
  
}

// ContatosModel.prototype.create = function(_data, callback) {
//    mysql.query('INSERT INTO livros SET ?', _data,function(error,results,fields){
//    });
// };

// ContatosModel.prototype.findOne = function(_id, callback) {
//   mysql.query('SELECT id, titulo, descricao,preco FROM livros WHERE id = ' + _id, function(err, results, fields) {
//     callback(err, results);
//   });
// };

ContatosModel.prototype.findAll = function(callback) {
  mysql.query('select contatos.nome,contatos.telefone,contatos.data,operadoras.nome,operadoras.codigo,operadoras.categoria from contatos  inner join operadoras  on contatos.fkoperadora = operadoras.codigo', function(err, rows, fields) {
    callback(err, rows);
  });
};

// ContatosModel.prototype.update = function(_data, callback) {

// mysql.query('UPDATE livros SET titulo=?, descricao = ?,preco = ? where id =?',[ _data.titulo, _data.descricao, _data.preco,_data.id],function(error,results,fields){
//    });

// };

// ContatosModel.prototype.delete = function(_data, callback) {
//     mysql.query('DELETE FROM livros WHERE id= ?',[_data.id], function(err, results, fields) {
 
//   });
// };

module.exports = new ContatosModel();
