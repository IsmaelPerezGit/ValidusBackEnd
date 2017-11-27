exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('goal_progress').del()
        .then(function () {
            // Inserts seed entries
            return knex('goal_progress').insert([
                {user_id:1 , goal_id:1, counter:0 }
            ]);
        });
};