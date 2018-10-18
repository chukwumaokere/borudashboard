//var mysql = require('mysql');
const https = require('https');

/*
var con = mysql.createConnection({
        localAddress: "localhost",
        host: "198.199.74.167",
        user: "cokere",
        password: "Okere2548",
        database: "pilot"
});
*/
var thisdata = 'LL';
/*
function getTotalHours(){
	var thisdata = 'K';

	https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
		let data = '';

		resp.on('data', (chunk) => {
			data += chunk;
		});

		resp.on('end', () => {
			console.log(JSON.parse(data).explanation);
			var thisdata = JSON.parse(data).service_version;
			return thisdata;
		});
	}).on("error", (err) => {
		var thisdata = err.message;
		console.log("Error: " + err.message);
	});
	return thisdata;
}*/
//var thisdata = getTotalHours();

/*
const getData = async () => {
        const data = await https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
                  let data = '';

                  // A chunk of data has been recieved.
                  resp.on('data', (chunk) => {
                    data += chunk;
                  });

                  // The whole response has been received. Print out the result.
                  resp.on('end', () => {
                    console.log(JSON.parse(data).explanation);
                   //return JSON.parse(data).explanation;
                  });

                }).on("error", (err) => {
                  console.log("Error: " + err.message);
                });
       // return data;
}
*/
const data = https.get('https://core.boruapps.com/modules/chart/dataChart.php?task_type=3%2C7%2C-1' , (resp) => {
                  let data = '';

                  // A chunk of data has been recieved.
                  resp.on('data', (chunk) => {
                    data += chunk;
                  });

                  // The whole response has been received. Print out the result.
                  resp.on('end', () => {
                    console.log(JSON.parse(data).elements[0].values);
                  });

                }).on("error", (err) => {
                  console.log("Error: " + err.message);
                });


var thisdata = 'K';
var totaltasks = '';
var dailyHours = "150.00";

module.exports = {
	totaltasks,
	dailyHours,
	thisdata
};
