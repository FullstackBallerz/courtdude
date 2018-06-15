const router = require('express').Router()
module.exports = router

router.use('/courts', require('./courts'))