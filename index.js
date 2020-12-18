const send = require("./src/request");
const { docs } = require("./src/config");

class MissAgent {
    constructor(APIKEY) {
        this.token = APIKEY;
        if(!this.token) throw new Error("Specify API-KEY. Documentation: " + docs);
    }

    get(endpoint) {
        if(!endpoint) throw new Error("Specify an available endpoint. Documentation: " + docs);
        let result = send(endpoint, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": this.token,
            },
        })
        return result;
    }

    version = require("./package.json").version;

}

module.exports = MissAgent;
/* Developer with ❤ by miss-api Team */
