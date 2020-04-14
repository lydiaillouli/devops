const configure = require('../configure')
const fs = require('fs')
const path = require('path')
const os = require('os')

module.exports = {
  create: (user, callback) => {

    if(!user.username)
      return callback(new Error("Wrong user parameters"), null)

    if (Lookfor(user.username) == null){
    // Define the file for storing users information
    //config = configure()
    //const usersFile = path.join(config.users.db_dir, 'users')

    // Create user string from the json object
    // const strUser = user.username + ':' + user.firstname + ':' + user.lastname + os.EOL
    const strUser = `${user.username}:${user.firstname}:${user.lastname}${os.EOL}`
    
      fs.appendFile(usersFile, strUser, (err) => {
      if (err) throw err
      callback(null, user.username)
    })
    } else {
      return callback(new Error("User Already Exists"), null)
    }
  },
  
  get: (username, callback) => {
    // TODO create this method
    // 1. Read the file
    // 2. Check every line in the loop ("for")
    // 3. Return an onject with user information, or null
    let userObj = Lookfor(username)
    if (userObj == null) {
      return callback(new Error(" User not found"), null)
    } else {
      callback(null, userObj)
    }
  }
}
exports.Lookfor = Lookfor;
