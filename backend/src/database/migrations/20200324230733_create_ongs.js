exports.up = function(knex) {
  return knex.schema.createTable('ongs', function (table){
    table.string('id').primary();
    table.string('name').notNulllable;
    table.string('email').notNulllable;
    table.string('whatsapp').notNulllable;
    table.string('city').notNulllable;
    table.string('uf', 2).notNulllable;
  })
  
};

exports.down = function(knex) {
  knex.schema.dropTable('ongs');
  
};
