const { request } = require('https');
const { baseURL, APIversion: version } = require("./config").config;

function send(point, parametr) {
	return new Promise((resolve, reject) => {
		let req = request(`${baseURL}/${version}/${point}`, parametr, (res) => {
            res.setEncoding('utf8');
			res.on('data', (data) => resolve(JSON.parse(data)));
		});

		req.on('error', reject);

		req.end();
	});
}

module.exports = send;