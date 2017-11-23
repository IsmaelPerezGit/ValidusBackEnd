exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function(table){
        table.increments('id');
        table.string('email');
        table.string('username');
        table.string('user_token');
        table.integer('team_id');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users');
};