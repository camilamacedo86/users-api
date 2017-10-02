/**
 * User Validator
 * Usage: Definition of validations which must be performed when entering data (endpoints)
 */

var RESPONSE = require('../../helper/response.js');

/**
 * Validate {user} entity
 * @param req
 */
function user(req, res, next) {
  checkUserNotEmptyFields(req);
  var errors = req.validationErrors();
  if (errors) {
    return RESPONSE.badRequest(res, "Validation error", errors);
  }
  return next();
}

/**
 * Check each field which is required into the requesisition
 * if it it is empty or not
 * @param req
 */
function checkUserNotEmptyFields(req) {
  req.checkBody('email', 'Invalid email').notEmpty();
}

exports.user = user;