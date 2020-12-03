const fetch = require("node-fetch")
const config = require("./config").config;

class MissAgent {
    constructor(APIKEY) {
        this.token = APIKEY;
        if(!this.token) throw new Error("Specify API-KEY. Documentation: https://github.com/miss-api-xyz/miss-api.js")
    }

    get = async function(endpoint) {
        if(!endpoint) throw new Error("Specify an available endpoint. Documentation: https://github.com/miss-api-xyz/miss-api.js")
        let res = await fetch(`${config.baseURL}/api/${config.APIversion}/${endpoint}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": this.token,
            },
        })
        return res.json()
    }
}

module.exports = MissAgent;
/* Developer with ❤ by miss-api Team */
