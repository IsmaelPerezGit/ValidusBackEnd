exports.up = function(knex, Promise) {
    return knex.schema.createTable('goals', function(table){
        table.increments('id');
        table.string('target');
        table.date('start_date');
        table.integer('weeks');
        table.boolean('Sun');
        table.boolean('Mon');
        table.boolean('Tues');
        table.boolean('Wed');
        table.boolean('Thurs');
        table.boolean('Fri');
        table.boolean('Sat');
        table.integer('team_id');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('goals');
};