const mysql = require('mysql2');

var bodyparser = require('body-parser');

var express = require('express');
var app = express();
var http = require('http');


// app.set('view engine', 'ejs');


// data connection

const conn = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'Student_ex'
});

conn.connect();

let data = [];
let port = 3610;
app.get('/', (req, res) => {


    let query1 = 'select * from student_express order by id limit  0,50';
    let query2 = 'select * from student_express order by id limit  50,50';
    let query3 = 'select * from student_express order by id limit  100,50';
    let query4 = 'select * from student_express order by id limit  150,50';
    let query5 = 'select * from student_express order by id limit  200,50';
    let query6 = 'select * from student_express order by id limit  250,50';
    let query7 = 'select * from student_express order by id limit  300,50';
    let query8 = 'select * from student_express order by id limit  350,50';
    let query9 = 'select * from student_express order by id limit  400,50';
    let query10 = 'select * from student_express order by id limit  450,50';



    conn.query(query1, (err, result0, field) => {

        conn.query(query2, (err, result1, field) => {

            conn.query(query3, (err, result2, field) => {

                conn.query(query4, (err, result3, field) => {

                    conn.query(query5, (err, result4, field) => {

                        conn.query(query6, (err, result5, field) => {

                            conn.query(query7, (err, result6, field) => {

                                conn.query(query8, (err, result7, field) => {

                                    conn.query(query9, (err, result8, field) => {

                                        conn.query(query10, (err, result9, field) => {
                                            data[0] = result0, data[1] = result1,
                                                data[2] = result2, data[3] = result3,
                                                data[4] = result4, data[5] = result5,
                                                data[6] = result6, data[7] = result7,
                                                data[8] = result8, data[9] = result9;
                                            res.render('10_tab.ejs', { data });
                                        });

                                    });

                                });

                            });

                        });

                    });
                });

            });

        });
    });
});



// app.get('/1', (req, res) => {

//     conn.query('select * from student_express order by id limit 20,20', (err, result, field) => {
//         if (err) throw err;

//         res.render('10_tab', { data1: result });
//     });
//     // return res.send(result);

// });


// app.get('/2', (req, res) => {

//     conn.query('select * from student_express order by id limit 40,20', (err, result, field) => {
//         if (err) throw err;

//         res.render('10_tab', { data2: result });
//     });
//     // return res.send(result);

// });


app.listen(port, (req, res) => {

    console.log(`http://localhost:${port}/`);
});