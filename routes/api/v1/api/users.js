'use strict';

const {
  Router
} = require('express');
const ApiBase = require('./../../base');
const UserController = require('../../../../controllers/api/v1/user');

/**
 * Api Router
 */
class Users extends ApiBase {
  /**
   * @param {Express} app
   * @return {Router}
   */
  constructor(app) {
    super(app);

    const {
      login
    } = new UserController(app);

    /**
     * @swagger
     * /v1/users/login:
     *   post:
     *     tags:
     *       - Auth
     *     produces:
     *       - application/json
     *     parameters:
     *     - name: body
     *       in: body
     *       description: the login credentials
     *       required: true
     *       schema:
     *         type: object
     *         properties:
     *           username:
     *             type: string
     *           password:
     *             type: string
     *     responses:
     *       200:
     *         description: user logged in succesfully
     */

    this.router.use('/login', new Router().post('/', login));
    return this.router;
  }

  /**
   * API version
   */
  get VERSION() {
    return '1';
  }
}

module.exports = Users;
