exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('goals').del()
        .then(function () {
            // Inserts seed entries
            return knex('goals').insert([
                {target: 'run 2 miles', start_date: '12/5/2017', weeks:3, Sun:false, Mon:true, Tues:false, Wed:true, Thurs:false, Fri:true, Sat:false},
                {target: 'bike 4 miles', start_date: '12/8/2017', weeks:2, Sun:false, Mon:true, Tues:true, Wed:true, Thurs:false, Fri:false, Sat:false},
                {target: 'run 8 miles', start_date: '12/2/2017', weeks:8, Sun:true, Mon:true, Tues:true, Wed:true, Thurs:true, Fri:true, Sat:false},
            ]);
        });
};