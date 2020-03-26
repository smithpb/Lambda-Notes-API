exports.up = function(knex) {
  return knex.schema.createTable("notes", table => {
    table.increments("_id");
    table.string("title", 128).notNullable();
    table.text("textBody");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("notes");
};
