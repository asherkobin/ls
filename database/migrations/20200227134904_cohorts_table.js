exports.up = function(knex) {
  return knex.schema.createTable("cohorts", table => {
    table.increments();
    table
      .string("name", 255)
      .nonNullable()
      .unique()
      .index();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cohorts");
};
