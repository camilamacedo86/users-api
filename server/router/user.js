/**
 * Router for Users
 * Usage: Definition of routes / endpoints
 */
var userCtrl = require('../controller/user.js');
var response = require('../helper/response.js');
var validator = require('./validator/user.js');
var express = require('express');
var router = express.Router();

/**
 * Get all users
 * Endpoint: /users
 */
router.get('/', (req, res) => {
  //TODO: Add implementation to search users and pagination as skip, limit and query
  userCtrl.findAll()
    .then(users => {
      if (!users) {
        return response.notFound("Users not found!");
      }
      return response.success(res, undefined, users);
    })
    .catch(err => response.error(res, err, "Error listing users."));
});

/**
 * Find a user by a id
 * Endpoint: /users/:id
 */
router.get('/:id', (req, res) => {
  userCtrl.getById(req.params.id)
    .then(user => {
      if (!user) {
        return response.notFound(res, "User not found!");
      }
      return response.success(res, undefined, user);
    })
    .catch(err => response.error(res, err, "Error finding user."));
});

/**
 * Delete a user by id
 * Endpoint: /users/:id
 */
router.delete('/:id', (req, res) => {
  userCtrl.removeById(req.params.id)
    .then(user => {
      if (!user) {
        return response.notFound(res, "User not found!");
      }
      return response.success(res, "User deleted successfully");
    })
    .catch(err => response.error(res, err, "Error deleting user."));
});

/**
 * Create a user by a json object
 * Endpoint: /users
 */
router.post('/', validator.user, (req, res) => {
  userCtrl.create(req.body)
    .then(user => response.succeedCreated(res, "User created successfully", user))
    .catch(err => response.error(res, err, "Error creating user."));
});

/**
 * Update a user by a json object
 * Endpoint: /users
 */
router.put('/:id', validator.user, (req, res) => {
  userCtrl.updateAll(req.params.id, req.body)
    .then( user => {
      if (!user) {
        return response.notFound(res, "User not found!");
      }
      return response.success(res, "User updated successfully");
    })
    .catch(err => response.error(res, err, "Error updating user."));
});

module.exports = router;
