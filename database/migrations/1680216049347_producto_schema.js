"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ProductoSchema extends Schema {
  up() {
    this.create("productos", (table) => {
      table.increments();
      table.string("name").unique().notNullable();
      table.integer("price").notNullable();
      table.integer("stock").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("productos");
  }
}

module.exports = ProductoSchema;
