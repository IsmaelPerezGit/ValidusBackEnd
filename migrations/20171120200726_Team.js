exports.up = function(knex, Promise) {
    return knex.schema.createTable('teams', function(table){
        // table.increments('id');
        // table.integer('size');
        // table.integer('users_id').unsigned()
        //     .references('users.id');

        //without foreign keys
        table.increments('id');
        table.string('user_id');
        table.string('goal_id');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('teams');
};