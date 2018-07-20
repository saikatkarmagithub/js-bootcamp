// const people = [{
//   name: 'Saikat',
//   age: 21
// },{
//   name: 'Diptajit',
//   age: 25
// },{
//   name: 'Debdut',
//   age: 22
// }]

// let personFinder = (people) => {  // array.find dose this job easier as it returns a object(only 1st object,we can't get many objects) 
//   let foundPerson = people.filter((person) => person.age >= 22) // array.filter returns a array containing the object(many objects)
//   foundPerson.forEach((object) => {
//     console.log(object.name)
//   })
// }

// // Alternative way if ony 1 object is needed


// // let personFinder = (people) => { 
// //   let foundPerson = people.find((person) => person.age === 21) // !!(Negetive Point)It can't return many objects if the condition matches
// //     console.log(foundPerson)
// //     console.log(foundPerson.name)
// // }


// personFinder(people)