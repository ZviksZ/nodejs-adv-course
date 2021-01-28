console.log('Аболютный путь: ', __dirname)
console.log('Аболютный путь с названием файла:', __filename)

const {user, sayHello} = require('./user')
sayHello()
console.log('Импортированный объект через module.exports:', user)
