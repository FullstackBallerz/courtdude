const router = require('express').Router();
const User = require('../db/models/Users');


module.exports = router;

router.post('/', async (req, res, next) => {
    try {
      const user = await User.findOne({
        where: {
            email: req.body.email,
            password: req.body.password
        }
      });
      if (!user) {
        res.status(401).send('Wrong username and/or password')
      }
      else {
        res.json(user);
      }
    } catch (err) {
      next(err);
    }
  });