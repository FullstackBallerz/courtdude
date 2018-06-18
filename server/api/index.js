const router = require('express').Router()
module.exports = router

router.use('/courts', require('./courts'))
router.use('/users', require('./users'))