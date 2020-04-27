const express = require('express')
const users = require('../controllers/users')

usersRouter = express.Router()

usersRouter
  .post('/user', (req, res, next) => {
    const user = {
      username: req.body.username,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
    }
    users.create(user, (err, result) => {
      if (err) throw err
      res.status(201).json({ username: result })
    })
  })
  .get('/:username', (req, res, next) => { // Express URL params - https://expressjs.com/en/guide/routing.html

        // TODO C:usernreate get method API
        const username = req.params.username
        users.get(username, (err, result) => {
          if (err) throw err
          res.status(201).json({ username: result[0], firstname: result[1], lastname: result[2]})
        })
    
  })

module.exports = usersRouter
