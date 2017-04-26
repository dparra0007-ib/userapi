var express = require('express');
var router = express.Router();

/**
 * @swagger
 * definition:
 *   User:
 *     properties:
 *       username:
 *         type: string
 *       email:
 *         type: integer
 *       fullname:
 *         type: string
 *       age:
 *         type: integer
 *       location:
 *         type: string
 *       gender:
 *         type: string
 */

/**
 * @swagger
 * /users/userlist:
 *   get:
 *     tags:
 *       - Users
 *     description: Returns all users
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of users
 *         schema:
 *           $ref: '#/definitions/User'
 */
router.get('/users/userlist', function(req, res) {
    var db = req.db;
    var collection = db.get('userlist');
    collection.find({},{},function(e,docs){
        res.json(docs);
    });
});

/**
 * @swagger
 * /users/adduser:
 *   post:
 *     tags:
 *       - Users
 *     description: Creates a new user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: user
 *         description: User object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/User'
 *     responses:
 *       200:
 *         description: Successfully created
 */
router.post('/users/adduser', function(req, res) {
    var db = req.db;
    var collection = db.get('userlist');
    collection.insert(req.body, function(err, result){
        res.send(
            (err === null) ? { msg: process.env.USERAPI_ADDMESSAGE } : { msg: process.env.USERAPI_ERRMESSAGE }
        );
    });
});

/**
 * @swagger
 * /users/deleteuser/{id}:
 *   delete:
 *     tags:
 *       - Users
 *     description: Deletes a single user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: User's id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Successfully deleted
 */
router.delete('/users/deleteuser/:id', function(req, res) {
    var db = req.db;
    var collection = db.get('userlist');
    var userToDelete = req.params.id;
    collection.remove({ '_id' : userToDelete }, function(err) {
        res.send((err === null) ? { msg: process.env.USERAPI_DELMESSAGE } : { msg:'error: ' + process.env.USERAPI_ERRMESSAGE });
    });
});

module.exports = router;