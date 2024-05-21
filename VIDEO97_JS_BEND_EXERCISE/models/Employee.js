import mongoose from "mongoose";

const empschema = new mongoose.Schema({
    name: String,
    salary: Number,
    language: String,
    city: String,
    isManager: Boolean
});

const Employee = mongoose.model('Employee', empschema);
export default Employee;