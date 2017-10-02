/**
 * Users Controller
 * Usage: Persistence layer management
 * Entity: {User}
 */
var User = require('../dao/user.js');

/**
 * Find all {Users}
 * @returns {*}
 */
function findAll() {
  return User.find({});
}

/**
 * Return {user} by _id
 * @param id
 * @returns {*}
 */
function getById(id) {
  return User.findOne({_id: id});
}

/**
 * Delete {user} by _id
 * @param id
 * @returns {*}
 */
function removeById(id) {
  return User.findByIdAndRemove({_id: id});
}

/**
 * Create new {user} by user data
 * @param user
 * @returns {user}
 */
function create(user) {
  return User.create(user);
}

/**
 * Update a {user} by id and full {user} data
 * @param id
 * @param user
 * @returns {*}
 */
function updateAll(id, user) {
  return User.findOneAndUpdate({_id: id}, user);
}

exports.updateAll = updateAll;
exports.create = create;
exports.removeById = removeById;
exports.getById = getById;
exports.findAll = findAll;
