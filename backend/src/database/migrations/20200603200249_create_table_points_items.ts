import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
    return knex.schema.createTable('point_items', table => {
        table.increments('id').primary();
        table.integer('point_id').notNullable().unsigned();
        table.integer('item_id').notNullable().unsigned();
        
        table.foreign('point_id').references('id').inTable('points');
        table.foreign('item_id').references('id').inTable('items');
    });
}

export async function down(knex: Knex): Promise<any> {
    return knex.schema.dropTable('point_items');  
}

