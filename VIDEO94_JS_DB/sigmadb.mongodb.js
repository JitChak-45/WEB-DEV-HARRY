
use('SigmaDb');

// Insert a few documents into the sales collection.
db.getCollection('couses').insertMany([
    {
      "name": "Java",
      "price": 20000,
      "Instructor": "harry"
    },
    {
      "name": "Python",
      "price": 18000,
      "Instructor": "alice"
    },
    {
      "name": "JavaScript",
      "price": 17000,
      "Instructor": "bob"
    },
    {
      "name": "C++",
      "price": 22000,
      "Instructor": "charlie"
    },
    {
      "name": "Ruby",
      "price": 16000,
      "Instructor": "diana"
    },
    {
      "name": "PHP",
      "price": 15000,
      "Instructor": "eve"
    },
    {
      "name": "Swift",
      "price": 21000,
      "Instructor": "frank"
    },
    {
      "name": "Kotlin",
      "price": 20000,
      "Instructor": "george"
    },
    {
      "name": "Go",
      "price": 19000,
      "Instructor": "hannah"
    },
    {
      "name": "Rust",
      "price": 23000,
      "Instructor": "ian"
    },
    {
      "name": "TypeScript",
      "price": 18000,
      "Instructor": "jack"
    }
  ]
  );


console.log(`Data Saved In DataBase`);

