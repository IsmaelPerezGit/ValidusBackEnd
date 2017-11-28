exports.seed = function (knex, Promise) {
    // Deletes ALL existing entries
    return knex('goal_progress').del()
        .then(function () {
            // Inserts seed entries
            return knex('goal_progress').insert([
                {user_id: 1, goal_id: 1, counter: 0},
                {user_id: 2, goal_id: 3, counter: 2},
                {user_id: 3, goal_id: 2, counter: 2}
            ]);
        });
};