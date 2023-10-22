const Student = require("../model/student");

let controller = {

    getStudents: function (req, res, next) {
        res.status(200).json(Student.getAll());
    },

    getStudentById: function (req, res, next) {
        console.log(req.params);
        let id = parseInt(req.params.id);
        let student = Student.getById(id);
        if (student) {
            res.status(200).json(student);
        }
        else {
            res.status(404).json({ message: "student not found." });
        }
    },

    createStudent: function (req, res, next) {
        let { id, name, program } = req.body;
        console.log(req.params, req.body);
        if (id && name && program) {
            let newStudent = new Student(parseInt(id), name, program);
            newStudent.create();
            res.status(201).json(newStudent);
        } else {
            res.status(400).json({ message: "provide all data." });
        }
    },
    deleteStudent: function (req, res, next) {
        let id = parseInt(req.params.id);
        console.log(id, typeof id);
        let deletedStudent = Student.removebyId(id);
        if (!deletedStudent) {
            res.status(404).json({ message: "student not found" });
        }
        else {
            res.status(200).json(deletedStudent);
        }
    },

    updateStudent: function (req, res, next) {
        let {id} = req.params;
        let {name, program } = req.query;
        if (id && name && program) {
            let updatedStudent = new Student(parseInt(id), name, program);
            updatedStudent.update();
            res.status(200).json(updatedStudent);
        } else {
            res.status(400).json({ message: "provide all data." });
        }
     },
    filterByProgram: function (req, res, next) { 
        let { program } = req.body;
        console.log(program);
        if (program) {
            let filteredStudents = new Student(null, null, program);
            res.status(200).json(filteredStudents.filterByProgram());
        } else {
            res.status(400).json({ message: "provide all data." });
        }
    },
};

module.exports = controller;