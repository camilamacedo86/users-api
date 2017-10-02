/**
 * Helper for Response
 * Usage: Definition of service response model.
 * Manages the return according to the HTTP/1.1 methods
 * Ref. https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html
 */
const DATA_NOT_FOUND = "Data not found!";
const NOT_AUTHORIZED = "Not unauthorized!";
/**
 * Defined the response Object
 */
class Response {
  constructor(res, status, message, errors, content) {
    this.status = status;
    this.message = message;
    this.errors = Array.isArray(errors) ? errors : [errors];
    this.content = content;
    this.resquest = res;
  }

  send() {
    return this.resquest.status(this.status).json(this.getResponseJSON()).end();
  }

  getResponseJSON() {
    return {status:this.status, message:this.message, errors:this.errors, content:this.content};
  }
}

/**
 * Create response for internal server error
 * HTTP CODE: 500
 * @param res
 * @param err
 * @param msg
 * @returns {*}
 */
function error(res, err, message) {
  return new Response(res, 500, message).send();
}

/**
 * Create response for data not found
 * HTTP CODE : 404
 * @param res
 * @returns {*|Request|number}
 */
function notFound(res, message) {
  message = message || DATA_NOT_FOUND;
  return new Response(res, 404, message).send();
}

/**
 * Create response for a bad request request sent
 * HTTP CODE : 400
 * ( E.g invalid data )
 * @param res
 * @param err
 * @param msg
 * @returns {*}
 */
function badRequest(res, message, err) {
  return new Response(res, 400, message, err).send();
}

/**
 * Return a success message
 * HTTP CODE : 200
 * @param res
 * @param msg
 * @param entity
 * @returns {Request|*|number}
 */
function success(res, message, content) {
  return new Response(res, 200, message, undefined, content).send();
}

/**
 * Return a success message when a data is persisted
 * HTTP CODE : 201
 * @param res
 * @param entity
 * @returns {*|Request|number}
 */
function succeedCreated(res, message, content) {
  return new Response(res, 201, message, undefined, content).send();
}

/**
 * Return a message informing as not authorized
 * HTTP CODE : 401
 * @param res
 * @param message
 * @returns {*}
 */
function unauthorized(res, message) {
  message = message || NOT_AUTHORIZED;
  return new Response(res, 401, message).send();
}

exports.success = success;
exports.badRequest = badRequest;
exports.error = error;
exports.notFound = notFound;
exports.succeedCreated = succeedCreated;
exports.unauthorized = unauthorized;
