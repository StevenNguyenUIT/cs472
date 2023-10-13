let Student = {
    lastname: "",
    firstname: "",
    grades: [],
    inputNewGrade: function(newGrade){
        this.grades.push(newGrade);
    },
    computeAverageGrade: function(){
        let sum = 0;
        this.grades.forEach(function(e){
            sum+=e;
        });
        return sum/this.grades.length;
    }
}

let Student1 = Object.create(Student);
Student1.firstname = "Steve";
Student1.lastname = "Jobs";
Student1.grades = [];
Student1.inputNewGrade(9);
Student1.inputNewGrade(8);
Student1.inputNewGrade(10);
let Student2 = Object.create(Student);
Student2.firstname = "Elon";
Student2.lastname = "Musk";
Student2.grades = [];
Student2.inputNewGrade(9);
Student2.inputNewGrade(6);
Student2.inputNewGrade(9);
let Student3 = Object.create(Student);
Student3.firstname = "Bill";
Student3.lastname = "Gates";
Student3.grades = [];
Student3.inputNewGrade(9);
Student3.inputNewGrade(10);
Student3.inputNewGrade(7);
let arrStudents = [Student1,Student2,Student3];

arrStudents.forEach(e=>console.log("Average Grade of " + e.firstname+ " " + e.lastname + " : " + e.computeAverageGrade()));


