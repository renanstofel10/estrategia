'use strict';
const Joi = require('joi');

const schemaComments = Joi.object({
    postId: Joi.number().integer().positive().required(),
    id: Joi.number().integer().positive().required(),
    email: Joi.string().required(),
    name: Joi.string().required(),
    body: Joi.string().required()
});

module.exports = { schemaComments }