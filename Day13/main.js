//%c styling console messages
console.log('%c30 Days Of JavaScript', 'color:green') // log output is green
console.log(
  '%c30 Days%c %cOf%c %cJavaScript',
  'color:green',
  '',
  'color:red',
  '',
  'color:yellow'
) // log output green red and yellow text


//console.warn()

console.warn('This is a warning')
console.warn(
  'You are using React. Do not touch the DOM. Virtual DOM will take care of handling the DOM!'
)
console.warn('Warning is different from error')

//console.error()

console.error('This is an error message')
console.error('We all make mistakes')


//console.table()

const names = ['Asabeneh', 'Brook', 'David', 'John']
console.table(names)