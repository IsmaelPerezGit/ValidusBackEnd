exports.up = function(knex, Promise) {
    return knex.schema.createTable('goal', function(table){
        table.increments('id');
        table.string('target');
        table.date('start_date');
        table.date('end_date');
        table.boolean('Sun');
        table.boolean('Mon');
        table.boolean('Tues');
        table.boolean('Wed');
        table.boolean('Thurs');
        table.boolean('Fri');
        table.boolean('Sat');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('goal');
};