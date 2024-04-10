const fs = require('fs')
const e404 = fs.readFileSync(__dirname + '/404.html',{encoding: 'utf8'})
const about = fs.readFileSync(__dirname + '/about.html',{encoding: 'utf8'})
const contact = fs.readFileSync(__dirname + '/contact.html',{encoding: 'utf8'})
const index = fs.readFileSync(__dirname + '/index.html',{encoding: 'utf8'})

module.exports = {
    e404,
    about,
    contact,
    index
}