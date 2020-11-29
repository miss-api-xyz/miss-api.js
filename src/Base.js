const http = require("http")
const config = require("./config").config;

class MissAgent {
    constructor(APIKEY) {
        this.token = APIKEY;
        if(!this.token) throw new Error("Specify API-KEY. Documentation: https://github.com/miss-api-xyz/docs-tes")

        //

        this.request = function(endpoint, options){
            return new Promise((resolve, reject) => {
                http.get(`${config.baseURL}/api/${config.APIversion}/${endpoint}`, options, (res) => {
                    let body = " ";
                    res.on('data', function(chunk){
                        body += chunk;
                        return resolve(JSON.parse(body))
                    })
                })
            })
        }

        //

    }

    get = async function(endpoint) {
        if(!endpoint) throw new Error("Specify an available endpoint. Documentation: https://github.com/miss-api-xyz/docs-tes")
        return this.request(endpoint, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": this.token,
            },
        })
    }

}

module.exports = MissAgent;

/* Developer with ❤ by miss-api Team */
