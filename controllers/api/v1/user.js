'use strict';

const Logger = require('./../../../utils/logger');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const config = require('../../../config/index')


class UserController {
  /**
   * User API Middlewares
   */
  constructor() {

    this.logger = new Logger();
    this.login = this.login.bind(this);
  }

  /**
   * Create a new user
   * @param  {Object} req
   * @param  {Object} res
   */

  async login(req, res) {
    let {
      info
    } = this.logger;
    try {
      let {
        username,
        password
      } = req.body
      info(`Login: ${JSON.stringify(req.body)}`);
      if (username == config.username) {
        const match = await bcrypt.compare(password, config.passwordHash);
        if (match) {
          let token = jwt.sign({
            data: {
              username: username
            }
          }, config.auth.jwt_secret, { expiresIn: config.auth.refresh_token_expiresin });
          return res.status(200).send({
            error: false,
            result: {},
            token: "Bearer " + token
          })
        }

      } else {
        return res.status(200).send({
          code: 100,
          error: true,
          message: "User not found"
        })
      }
    } catch (error) {
      console.log(error);
    }

  }


}

module.exports = UserController;
