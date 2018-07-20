// let todoList = [{
//   text: 'wakeup',
//   compleated: true
// },{
//   text: 'brush',
//   compleated: true
// },{
//   text: 'eat',
//   compleated: false
// },{
//   text: 'walk',
//   compleated: false
// },{
//   text: 'sleep',
//   compleated: false
// }]

// let sortTodos = function (notes) {
//   notes.sort(function (a, b) {
//     if(!a.compleated && b.compleated) {
//       return -1
//     } else if (!b.compleated && a.compleated) {
//       return 1
//     } else {
//       0
//     }
//   })
// }

// sortTodos(todoList)
// console.log(todoList)

// let deleteTodo = function (todoList, text) {
//   let index = todoList.findIndex(function (object, index) {
//     return object.text.toLowerCase() === text.toLowerCase()
//   })
//   if (index == -1) {
//     return todoList
//   } else {
//     todoList.splice(index, 1)
//     return todoList
//   }
// }

// let newTodoList = deleteTodo(todoList, 'sleep')
// console.log(newTodoList)

// let todoList = ['wakeup','brush','eat','walk','sleep']

// console.log(todoList[-2])

// console.log(todoList.splice(todoList.length-2,1))
// console.log(todoList)

// todoList.splice(2, 1)
// todoList.push('dream')
// todoList.shift()

// console.log(`You have ${todoList.length} todoos`)
// console.log(todoList)
// console.log(`First todo: ${todoList[0]}`)
// console.log(`Second Last todo: ${todoList[todoList.length - 2]}`)

// todoList.forEach(function (items, index) {  // doesnot return any value
//     console.log(`${index + 1}. ${items}`)
// })

// for(let i = 0; i < todoList.length; i++) {
//     console.log(`${i + 1}. ${todoList[i]}`)
// }