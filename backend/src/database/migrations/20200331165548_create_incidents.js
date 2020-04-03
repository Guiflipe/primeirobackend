/**Utilizado para vizualizar os erros */
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table){
        table.increments();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.string('value').notNullable();
        table.string('ong_id').notNullable();
        table.foreign('ong_id').references('id').inTable('ongs');
  
    });
  };
  /**Utilizado para casos de erros, ou se precisar deletar o bd */
  exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
  };