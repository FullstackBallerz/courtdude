const router = require('express').Router()
const Court = require('../db/models/Courts')
const User = require('../db/models/Users')

module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const courts = await Court.findAll({ include: [User] })
    res.json(courts)
  } catch (err) {
    next(err)
  }
})