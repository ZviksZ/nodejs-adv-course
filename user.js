const user = {
   name: 'Alex',
   age: 25
}

module.exports = {
   user: user,
   sayHello() {
      console.log('Hello')
   }
}


/*
* По сути это обертка
* (function(require, module, __dirname, __filename) {
*     const user = {
   name: 'Alex',
   age: 25
}

module.exports = {
   user: user,
   sayHello() {
      console.log('Hello')
   }
}
* })()
*
* */
