import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("cat", (table) => {
    table.uuid("uuid").primary().comment("the cat unique identity");
    table.string("name").comment("the name of the cat");
    table.string("breed").comment("the breed of the cat");
    table.integer("age").comment("the age of the cat");
    table.string("description").comment("the description of the cat");
    table.string("location").comment("the location of the cat");
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("cat");
}
