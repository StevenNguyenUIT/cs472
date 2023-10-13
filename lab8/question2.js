function Student(firstName, lastName, grades){
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = grades;
}

Student.prototype.inputNewGrade = function(newGrade){this.grades.push(newGrade)};
Student.prototype.computeAverageGrade = function(){        
    let sum = 0;
    this.grades.forEach(function(e){
        sum+=e;
    });
    return sum/this.grades.length;
}

let Student1 = new Student("Steve","Jobs",[]);
Student1.inputNewGrade(9);
Student1.inputNewGrade(8);
Student1.inputNewGrade(10);
let Student2 = new Student("Elon","Musk",[]);
Student2.inputNewGrade(9);
Student2.inputNewGrade(6);
Student2.inputNewGrade(9);
let Student3 = new Student("Bill","Gates",[]);
Student3.inputNewGrade(9);
Student3.inputNewGrade(10);
Student3.inputNewGrade(7);


let arrStudents = [Student1,Student2,Student3];
arrStudents.forEach(e=>console.log("Average Grade of " + e.firstname+ " " + e.lastname + " : " + e.computeAverageGrade()));

