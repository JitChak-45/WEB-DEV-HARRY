let student = {
    "Jit": "100",
    "Ipsita": "99",
    "Prabir": "98",
    "Srabanti": "98"
  }
  
  const keys = Object.keys(student);
  
  for (let i = 0; i < keys.length; i++) {
    const name = keys[i]; // Get the student name (key)
    const marks = student[name]; // Access the mark using the name (key)
    console.log(`The marks for ${name} is ${marks}`); // Use template literal for cleaner formatting
  }
  