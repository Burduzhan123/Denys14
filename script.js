

  /*class Student {
    constructor(firstName, lastName, year, course) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.year = year;
        this.course = course
        this.marks = [];
        this._presence = new Array(5);
        this._current = 0;
    }

    get age() {
        return new Date().getFullYear() - this.year;
    }

    get averageMark() {
        let count = 0,
            sum = this.marks.reduce((a, b) => { ++count; return a + b; }, 0);
        return count ? sum / count : 0;
    }

    present(mark) {
        if (this._current === this._presence.length)
            throw new RangeError(`${this.firstName} ${this.lastName} уже закончил сессию.`);
        this.marks[this._current] = mark;
        this._presence[this._current++] = true;
    }
    absent() {
        if (this._current === this._presence.length)
            throw new RangeError(`${this.firstName} ${this.lastName} уже закончил сессию.`)
        this._presence[this._current++] = false;
    }
    
}


let student = new Student("Иван", "Иванов", 1998, '3 курс' );

let Employee = {
    course2: '4 курс',
  };
  
  delete Employee.course2;//другой курс, его же и удаляем
  
  console.log(Employee.course2);

console.log(student.age);

student.present(4);
student.present(5);
student.absent();
student.present(4);
student.present(5);


console.log(student.averageMark.toFixed(1));
console.log(student);*/


function Student(name) {
    this.name = name;
    this.grades = [];
    this.attendance = [];
  
    this.addGrade = function (grade) {
      this.grades.push(grade);
    };
  
    this.getAverageGrade = function () {
      if (this.grades.length === 0) {
        return 0;
      } else {
        return (
          this.grades.reduce((acc, grade) => acc + grade, 0) / this.grades.length
        );
      }
    };
  
    this.addAttendance = function (attendance) {
      this.attendance.push(attendance);
    };
  
    this.getAverageAttendance = function () {
      if (this.attendance.length === 0) {
        return 0;
      } else {
        return (
          this.attendance.reduce((acc, attendance) => acc + attendance, 0) /
          this.attendance.length
        );
      }
    };
  
  }
  
  function Group(name) {
    this.students = [];
    this.name = name; 

    this.addStudent = function (student) {
      this.students.push(student);
    };
  
    this.removeStudent = function (student) {
      const index = this.students.indexOf(student);
      if (index !== -1) {
        this.students.splice(index, 1);
      }
    };
  
    this.studentsGrade = function () {
      return this.students
        .map((student) => ({
          student: student,
          averageGrade: student.getAverageGrade(),
        }))
        .sort((a, b) => b.averageGrade - a.averageGrade);
    };
  
    this.studentsAttendance = function () {
      return this.students
        .map((student) => ({
          student: student,
          averageAttendance: student.getAverageAttendance(),
        }))
        .sort((a, b) => b.averageAttendance - a.averageAttendance);
    };
  }
  
  const group = new Group();
  
  const student1 = new Student('Mark');
  student1.addGrade(7);
  student1.addAttendance(5);
  group.addStudent(student1);
  
  const student2 = new Student('Отто');
  student2.addGrade(5);
  student2.addAttendance(6);
  group.addStudent(student2);
  
   //group.removeStudent(student2);
  
  console.log("Grade:");
  console.log(group.studentsGrade());
  
  console.log("Attendance:");
  console.log(group.studentsAttendance());






  

