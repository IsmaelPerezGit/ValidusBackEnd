exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('teams').del()
        .then(function () {
            // Inserts seed entries
            return knex('teams').insert([
                {size:1, user_id:1, team_id:3, goal_id:1},
                {size:3, user_id:2, team_id:2, goal_id:2},
                {size:2, user_id:3, team_id:1, goal_id:3},
                {size:1, user_id:1, team_id:3, goal_id:1},
                {size:3, user_id:2, team_id:2, goal_id:2},
                {size:2, user_id:3, team_id:1, goal_id:3}
            ]);
        });
};