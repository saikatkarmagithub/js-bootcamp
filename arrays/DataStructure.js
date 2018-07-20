/*
Community -> [Person]
Person  -> Name -> String
        -> Age  -> Number
        -> Friends  -> [Person.Name]
        -> Aquaintances -> [Person.Name]

Book  -> Title  ->  String
      -> Authours -> [Author.Name]
Author  -> Name -> String
        -> Books  -> [Book.Title]

Post  -> Content  -> String
      -> Comments
Comments  -> [Comment]
Comment -> Content  -> String
        -> Comments

World -> [Country]
Country -> Name -> String
        -> People -> [Person]
        -> Visa -> [Country.Name]
Person  -> Name -> String
        -> Visa -> [Counrty.Name]
        -> Age  -> Number
        -> Friends  -> [Person.Name]
        -> Aquaintancies  -> [Person.Name]      
*/

/* 
Person  -> Name -> String
        -> Age -> Number
*/

// class Person {
//   constructor(name, age) {
//     this.age = age;
//     this.name = name;
//   }
// }

// const pota = new Person('Saikat Karmakar', 18);
// console.log(pota);

// class Car {
//   constructor(name, distance) {
//     this.name = name;
//     this.distance = distance;
//     this.speed = 0;
//     this.accn = 0;
//   }
//   get 
// }

// class Rectangle {
//   constructor(width, length) {
//     this.width = width;
//     this.length = length;
//   }

//   get area() {
//     return this.width * this.length;
//   }

//   perimeter() {
//     return 2 * (this.width + this.length);
//   }
// }

// const rect = new Rectangle(10, 10);

// console.log(rect.perimeter());