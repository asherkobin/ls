exports.up = function(knex) {
  return knex.schema.createTable("cohorts", table => {
    table.increments();
    table
      .string("name", 255)
      .notNullable()
      .unique()
      .index();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cohorts");
};
