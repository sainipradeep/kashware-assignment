'use strict';
const jsonpatch = require('jsonpatch');

const Logger = require('./../../../utils/logger');

class PatchController {
    /**
     * User API Middlewares
     */
    constructor() {

        this.logger = new Logger();
        this.login = this.patch.bind(this);
    }

    /**
     * Create a new user
     * @param  {Object} req
     * @param  {Object} res
     */

    async patch(req, res) {
        try {
            let { doc, patch } = req.body
            return res.status(200).send({
                error: false,
                result: jsonpatch.apply_patch(doc, patch),
            })
        } catch (error) {
            res.status(200).send({
                "status": "101",
                "error": true,
                "message": "Something went wrong!",
                "developer_message": error.reason
            })
        }

    }

}



module.exports = PatchController;
