class Student {
    constructor(Id) {
      this.studentId = Id;
      this.answers = [];
    }
  
    addAnswer(question) {
      this.answers.push(question);
    }
}
  
class Question {
    constructor(qid, answer) {
        this.qid = qid;
        this.answer = answer;
    }

    checkAnswer(studentAnswer) {
        return this.answer === studentAnswer;
    }
}
  
class Quiz {
    constructor(questions, students) {
        this.questions = new Map();
        questions.forEach((question) => {
            this.questions.set(question.qid, question);
        });
        this.students = students;
    }

    scoreStudentBySid(sid) {
        const student = this.students.find((student) => student.studentId === sid);
        if(student.length == 0) return 0;
        let score = 0;
        student.answers.forEach((answer) => {
        const question = this.questions.get(answer.qid);
        if (question.checkAnswer(answer.answer)) {
            score++;
        }
        });
        return score;
    }
    
    getAverageScore() {
        let totalScore = 0;
        let lens = this.students.length;
        if(lens == 0) return 0;
        this.students.forEach(student => {
            totalScore += this.scoreStudentBySid(student.studentId);
        });
        return totalScore/lens;
    }
}
  
const student1 = new Student(10);
student1.addAnswer(new Question(2, 'a'));
student1.addAnswer(new Question(3, 'b'));
student1.addAnswer(new Question(1, 'b'));
const student2 = new Student(11);
student2.addAnswer(new Question(3, 'b'));
student2.addAnswer(new Question(2, 'a'));
student2.addAnswer(new Question(1, 'd'));
const students = [student1, student2];
const questions =[new Question(1, 'b'), new Question(2, 'a'), new Question(3, 'b')];
const quiz = new Quiz(questions, students);
let scoreforStudent10 = quiz.scoreStudentBySid(10);
console.log(scoreforStudent10); //Expected Result: 3
let scoreforStudent11 = quiz.scoreStudentBySid(11);
console.log(scoreforStudent11); //Expected Result: 2
let average = quiz.getAverageScore();
console.log(average); //Expected Reuslt: 2.5