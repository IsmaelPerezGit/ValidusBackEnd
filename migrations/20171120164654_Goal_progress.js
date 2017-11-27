exports.up = function(knex, Promise) {
    return knex.schema.createTable('goal_progress', function(table){
        // table.increments('id');
        // table.integer('users_id').unsigned()
        //     .references('users.id');
        // table.integer('goal_id').unsigned()
        //     .references('goal.id');
        // table.integer('counter');

        //without foreign keys
        table.increments('id');
        table.integer('user_id')
        table.integer('goal_id')
        table.integer('counter');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('goal_progress');
};