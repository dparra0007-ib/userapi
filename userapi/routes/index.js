const express = require('express');

const router = express.Router();

/* eslint-disable */
const config = require('/usr/src/dynamic-conf/default.json');
/* eslint-enable */

router.route('/users/')

  .get((req, res) => {
    const usersbd = req.db;
    const collection = usersbd.get('userlist');
    collection.find({}, {}, (e, docs) => {
      res.json(docs);
    });
  })

  .post((req, res) => {
    if (req.query.clean === 'true') delete require.cache[require.resolve('/usr/src/dynamic-conf/default.json')];
    const extraMessage = config.Userapi.Extra.message;
    const usersbd = req.db;
    const collection = usersbd.get('userlist');
    collection.insert(req.body, (err) => {
      res.send((err === null) ? {
        msg: process.env.USERAPI_ADDMESSAGE + extraMessage,
      } : { msg: `error: ${process.env.USERAPI_ERRMESSAGE}` });
    });
  });

router.route('/users/:id')

  .delete((req, res) => {
    if (req.query.clean === 'true') delete require.cache[require.resolve('/usr/src/dynamic-conf/default.json')];
    const extraMessage = config.Userapi.Extra.message;
    const usersbd = req.db;
    const collection = usersbd.get('userlist');
    const userToDelete = req.params.id;
    collection.remove({ _id: userToDelete }, (err) => {
      res.send((err === null) ? {
        msg: process.env.USERAPI_DELMESSAGE + extraMessage,
      } : { msg: `error: ${process.env.USERAPI_ERRMESSAGE}` });
    });
  });

module.exports = router;
