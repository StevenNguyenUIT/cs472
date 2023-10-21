const students = [
    { id: 636936, name: "David Beckham", program: "Compro" },
    { id: 636937, name: "John Terry", program: "Compro" },
    { id: 636938, name: "Thierry Henry", program: "MBA" },
    { id: 636939, name: "cristiano ronaldo", program: "MBA" },
    { id: 636940, name: "lione messi", program: "Compro" },
];

class Student {
    constructor(id, name, program) {
        this.id = id;
        this.name = name;
        this.program = program;
    }
    create() {
        students.push(this);
    }

    static getById(id) {
        return students.find(s => s.id === id);
    }

    static getAll() {
        return students;
    }

    static removebyId(id) {
        let index = students.findIndex(s => s.id === id);
        let deletedStudent
        if (index > -1) {
            deletedStudent = students[index];
            students.splice(index, 1);
        }
        return deletedStudent;
    }
    update() { 
        let index = students.findIndex(s => s.id === this.id);
        if (index > -1) {
            students[index] = this;
        }
    }
    filterByProgram() {
        return students.filter(s => s.program === this.program);
     }
}
module.exports = Student;