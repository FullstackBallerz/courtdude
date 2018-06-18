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

      console.log('USERRRR! ', user)
      if (!user) {
          res.status(401).send('Wrong username and/or password')
      }
      res.json(user);
    } catch (err) {
      next(err);
    }
  });