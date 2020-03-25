exports.up = function(knex) {
  return knex.schema.createTable('incidents', function (table){
    table.increments();
    table.string('title').notNulllable;
    table.string('description').notNulllable;
    table.decimal('value').notNulllable;
    table.string('ong_id').notNulllable;
    table.foreign('ong_id').references('id').inTable('ongs');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
