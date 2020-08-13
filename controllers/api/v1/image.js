'use strict';

const Logger = require('./../../../utils/logger');
const Jimp = require('jimp');

class ImageController {
  /**
   * Image API Middlewares
   */
  constructor() {
    this.logger = new Logger();
    this.single_image = this.single_image.bind(this);
  }

  async single_image(req, res, next) {
    try {
      let { image_url } = req.body;
      if (!image_url) {
        res.status(200).send({
          "status": "102",
          "error": true,
          "message": "Image url required"
        });
      }
      Jimp.read(image_url)
        .then(image => {
          image.resize(50, 50);
          res.setHeader('Content-Type', 'image/jpg');
          res.status(200).send(image);
        })
        .catch(error => {
          res.status(200).send({
            "status": "101",
            "error": true,
            "message": "Something went wrong!",
            "developer_message": error.reason
          })
        });
    } catch (error) {
      res.status(200).send({
        "status": "101",
        "error": true,
        "message": "Something went wrong!",
        "developer_message": error.reason
      });
    }
  }
}

module.exports = ImageController;
