'use strict';

const {
  Router
} = require('express');
const ApiBase = require('./../../base');
const PatchController = require('../../../../controllers/api/v1/patch');

/**
 * Api Router
 */
class Patch extends ApiBase {
  /**
   * @param {Express} app
   * @return {Router}
   */
  constructor(app) {
    super(app);

    const {
        patch
    } = new PatchController(app);

    /**
     * @swagger
     * /v1/patch:
     *   post:
     *     tags:
     *       - Auth
     *     produces:
     *       - application/json
     *     security:
     *       - Bearer: []
     *     parameters:
     *     - name: body
     *       in: body
     *       description: Patch value
     *       required: true
     *       schema:
     *         type: object
     *         properties:
     *           doc:
     *             type: object
     *           patch:
     *             type: object
     *     responses:
     *       200:
     *         description: Patch json
     */

    this.router.use('/', new Router().post('/', patch));
    return this.router;
  }

  /**
   * API version
   */
  get VERSION() {
    return '1';
  }
}

module.exports = Patch;
