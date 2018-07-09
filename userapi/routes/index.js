var express = require('express');
var router = express.Router();

router.route('/users')

.get(function(req, res) {
    var db = req.db;
    var collection = db.get('userlist');
    collection.find({},{},function(e,docs){
        res.json(docs);
    });
})

.post(function(req, res) {
    if(req.query['clean'] === 'true') delete require.cache[require.resolve('/usr/src/dynamic-conf/default.json')];
    var config = require('/usr/src/dynamic-conf/default.json');
    var extraMessage = config.Userapi.Extra.message;
    var db = req.db;
    var collection = db.get('userlist');
    collection.insert(req.body, function(err, result){
        res.send(
            (err === null) ? { msg: process.env.USERAPI_ADDMESSAGE + extraMessage } : { msg: process.env.USERAPI_ERRMESSAGE }
        );
    });
});

router.route('/users/:id')

.delete(function(req, res) {
    if(req.query['clean'] === 'true') delete require.cache[require.resolve('/usr/src/dynamic-conf/default.json')];
    var config = require('/usr/src/dynamic-conf/default.json');
    var extraMessage = config.Userapi.Extra.message;
    var db = req.db;
    var collection = db.get('userlist');
    var userToDelete = req.params.id;
    collection.remove({ '_id' : userToDelete }, function(err) {
        res.send((err === null) ? { msg: process.env.USERAPI_DELMESSAGE + extraMessage } : { msg:'error: ' + process.env.USERAPI_ERRMESSAGE });
    });
});

module.exports = router;