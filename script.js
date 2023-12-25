

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




  class Person {

    constructor(name, visits, raiting) {
      this.name = name;
      this.visits = visits;
      this.raiting = raiting;
    }
  }
  otto = new Person('Отто', '7', 'middle');
 mark = new Person('Mark', '10', 'best');
  delete mark
  console.log(otto);
  console.log(mark);






  

