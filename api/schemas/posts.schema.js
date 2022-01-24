'use strict';
const Joi = require('joi');

const schemaPosts = Joi.object({
    userId: Joi.number().integer().positive().required(),
    id: Joi.number().integer().positive().required(),
    title: Joi.string().required(),
    body: Joi.string().required(),
}).required();

module.exports = { schemaPosts }