exports.up = function(knex, Promise) {
    return knex.schema.createTable('goals', function(table){
        table.increments('id');
        table.string('target');
        table.string('start_date');
        table.string('weeks');
        table.boolean('sun');
        table.boolean('mon');
        table.boolean('tues');
        table.boolean('wed');
        table.boolean('thurs');
        table.boolean('fri');
        table.boolean('sat');
        table.string('team_size');
        // table.increments('team_id');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('goals');
};