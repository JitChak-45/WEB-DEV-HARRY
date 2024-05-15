use('CRUDdB');

// console.log(db);

//create collection in mongo db-->
db.createCollection('cources')

//insert in collection(one)-->
// db.cources.insertOne({
//     name: "Harrys web dev free corse",
//     price: 2000,
//     assignment: 12,
//     projects: 45
// })

//insert many
// db.cources.insertMany([
//     {
//         "name": "Harrys web dev free corse",
//         "price": 2000,
//         "assignment": 12,
//         "projects": 45
//     },
//     {
//         "name": "Advanced Python Programming",
//         "price": 3000,
//         "assignment": 10,
//         "projects": 20
//     },
//     {
//         "name": "Full-Stack JavaScript Development",
//         "price": 2500,
//         "assignment": 15,
//         "projects": 30
//     },
//     {
//         "name": "C++ Masterclass",
//         "price": 3500,
//         "assignment": 8,
//         "projects": 25
//     },
//     {
//         "name": "Ruby on Rails Web Development",
//         "price": 2800,
//         "assignment": 12,
//         "projects": 35
//     },
//     {
//         "name": "Go Programming Essentials",
//         "price": 3200,
//         "assignment": 9,
//         "projects": 22
//     },
//     {
//         "name": "Swift for iOS Development",
//         "price": 4000,
//         "assignment": 14,
//         "projects": 40
//     },
//     {
//         "name": "Kotlin for Android Development",
//         "price": 3700,
//         "assignment": 11,
//         "projects": 33
//     },
//     {
//         "name": "PHP for Web Development",
//         "price": 2100,
//         "assignment": 13,
//         "projects": 27
//     },
//     {
//         "name": "C# and .NET Framework",
//         "price": 3900,
//         "assignment": 16,
//         "projects": 38
//     },
//     {
//         "name": "Data Science with R",
//         "price": 2700,
//         "assignment": 10,
//         "projects": 29
//     }
// ]
// )


//**READ*/
//read operation in mongodb
// let a=db.cources.find({price:3700});

// console.log(a);

// console.log(a.count());
// console.log(a.toArray());


//read 2
// let b=db.cources.findOne({price:3700});
// console.log(b);


//**UPDATE */

// db.cources.updateOne({price:3700},{$set:{price:4500}})

// db.cources.updateMany({price:2000},{$set:{price:600}})

// DELETE
// db.cources.deleteOne({price:600})
db.cources.deleteMany({price:3500})

//ALL OPERATORS IN MONGODB
// https://www.mongodb.com/docs/manual/reference/operator/




