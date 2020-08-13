'use strict';

const { Router } = require('express');
const ApiBase = require('./../base');

const UsersHandler = require("./api/users");
const ImageHandler = require("./api/image");
const PatchHandler = require("./api/patch");
/**
 * Api Router
 */
class Api extends ApiBase{
    /**
     * @param {Express} app
     * @return {Router}
     */
	constructor(app) {
		super(app);
		this.router.use('/users', new UsersHandler());
		this.router.use('/patch', new PatchHandler());
		this.router.use('/image', new ImageHandler());

		return this.router;
	}

    /**
     * API version
     */
	get VERSION() {
		return '1';
	}
}

module.exports = Api;
