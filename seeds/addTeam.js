exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('teams').del()
        .then(function () {
            // Inserts seed entries
            return knex('teams').insert([
                {size:1, user_id:1},
            ]);
        });
};