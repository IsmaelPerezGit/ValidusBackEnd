exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('goals').del()
        .then(function () {
            // Inserts seed entries
            return knex('goals').insert([
                {target: 'run 2 miles', start_date: '12/5/2017', weeks:3, sun:false, mon:true, tues:false, wed:true, thurs:false, fri:true, sat:false, user_id:0},
                {target: 'bike 4 miles', start_date: '12/8/2017', weeks:2, sun:false, mon:true, tues:true, wed:true, thurs:false, fri:false, sat:false, user_id:0},
                {target: 'run 8 miles', start_date: '12/2/2017', weeks:8, sun:true, mon:true, tues:true, wed:true, thurs:true, fri:true, sat:false, user_id:0},
                {target: 'run 2 miles', start_date: '12/5/2017', weeks:3, sun:false, mon:true, tues:false, wed:true, thurs:false, fri:true, sat:false, user_id:0},
                {target: 'bike 4 miles', start_date: '12/8/2017', weeks:2, sun:false, mon:true, tues:true, wed:true, thurs:false, fri:false, sat:false, user_id:0},
                {target: 'run 8 miles', start_date: '12/2/2017', weeks:8, sun:true, mon:true, tues:true, wed:true, thurs:true, fri:true, sat:false, user_id:0}
            ]);
        });
};