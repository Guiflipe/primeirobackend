const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);



/**Entidades: Serve para analizar tudo que será colocado dentro do BD.
 * - ONG
 * - Caso (incident)
 * 
 * Funcionalidades do app: 
 * - Login de ONG
 * - Logout de ONG
 * - Cadastro de ONG
 * - Cadastrar novos casos
 * - Deletar casos
 * - listar casos expecificos de uma ONG 
 * Mobile:
 * - listar todos os casos
 * - entrar em contato com a ONG
 */


/**
 * Rota e recursos
 */

 /**
  * Metodo HTTP:
  * 
  * GET: Buscar/listar uma informação do Back-end.
  * POST: Criar uma informação no Back-end.
  * PUT: Alterar uma informação no Back-end.
  * DELET: Deletar uma informação no Back-end.
  */

  /**
   * Tipos de parametros:
   * 
   * Query: params: nomeados enviados na rota após "?" (Filtros, Paginação).
   * Route params: Parametros para identificar recursos.
   * Request Body: Corpo da requisição utilizado para criar ou alterar recursos.
   */


   /** Banco de dados:
    * 
    * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server.
    * NoSql: Mongodb, couthdb, etc... 
    * 
    * Instalar banco: 
    * Driver: SLECT * FROM users
    * Query builder: table('users').select('*').where()
    */