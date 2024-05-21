import express from 'express'
import mongoose from 'mongoose';
const app = express()
const port = 3000
import Employee from "./models/Employee.js";

mongoose.connect('mongodb://127.0.0.1:27017/company');

app.set('view engine', 'ejs');
const getRandom = (arr) => {
    let rno = Math.floor(Math.random() * arr.length);
    return arr[rno]
}

app.get('/', (req, res) => {
    res.render('index', { foo: 'FOO' });
})

app.get('/generate', async (req, res) => {
    //clear the detabase if exist

    await Employee.deleteMany({});

    //then insert the data

    let allCities = ["Kolkata", "Mumbai", "Hyderabad", "Chennai"];
    let allNames = ["Rohan", "Tinku", "Harry", "Jit"];
    let allLanguage = ["java", "c++", "js", "node.js"];
    for (let i = 0; i < 10; i++) {
        let e = await Employee.create({
            name: getRandom(allNames),
            salary: Math.ceil(Math.random() * 22000),
            language: getRandom(allLanguage),
            city: getRandom(allCities),
            isManager: Math.random() > 0.5 ? true : false
        });
        console.log(e);
        //    await e.save();

    }
    res.render('index', { foo: 'FOO' });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})