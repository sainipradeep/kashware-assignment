'use strict';

const {
  Router
} = require('express');
const ApiBase = require('./../../base');
const ImageController = require('../../../../controllers/api/v1/image');

/**
 * Api Router
 */
class Image extends ApiBase {
  /**
   * @param {Express} app
   * @return {Router}
   */
  constructor(app) {
    super(app);

    const {
      single_image
    } = new ImageController(app);

  /**
   * @swagger
   * /v1/image/thumbnail:
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
   *       description: Image URL
   *       required: true
   *       schema:
   *         type: object
   *         properties:
   *           image_url:
   *             type: string
   *     responses:
   *       200:
   *         description: Create thumbnail
   */
    this.router.use('/thumbnail', new Router().post('/', single_image));
    return this.router;
  }

  /**
   * API version
   */
  get VERSION() {
    return '1';
  }
}

module.exports = Image;
