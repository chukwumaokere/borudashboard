var mysql = require('mysql');
const https = require('https');


var con = mysql.createConnection({
        localAddress: "localhost",
        host: "198.199.74.167",
        user: "cokere",
        password: "Okere2548",
        database: "pilot"
});

var totaltasks = '';
con.query(`SELECT count(*) FROM tasks`, function (err, result, fields) {
    if (result[0] !== undefined){
	//totaltasks = result.
    }
});
