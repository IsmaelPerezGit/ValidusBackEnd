exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('teams').del()
        .then(function () {
            // Inserts seed entries
            return knex('teams').insert([
                {user_id:1, goal_id:3},
                {user_id:2, goal_id:2},
                {user_id:3, goal_id:1},
                {user_id:1, goal_id:3},
                {user_id:2, goal_id:2},
                {user_id:3, goal_id:1}
            ]);
        });
};