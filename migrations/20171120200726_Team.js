exports.up = function(knex, Promise) {
    return knex.schema.createTable('team', function(table){
        table.increments('id');
        table.integer('size');
        table.string('members');
        table.integer('users_id').unsigned()
            .references('users.id');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('team');
};