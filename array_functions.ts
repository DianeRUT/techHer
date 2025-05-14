// interface Student {
//   names: string,
//   age: number,
//   rollNumber: number
// }

// class StudentsOperations {
//   public students: Student[] = [];

//   constructor() {}

//   addStudent(student: Student) {
//     //first check if the student does not exit by use of rollenumber
//     if (this.isStudentExixsting(student.rollNumber)) {
//       console.log(`Student with this roll numebr ${student.rollNumber} already exists`)
//       return;
//     } else {
//       this.students.push(student);
//       console.log('student added successfully')
//     }
//   }

//   removeStudent(rollNumber: number) {
//     //check if the student already exists and if he is , we delete and if he is not we give message
//     if (this.isStudentExixsting(rollNumber)) {
//       this.students = this.students.filter((t: Student) => t.rollNumber !== rollNumber);
//       console.log('Student removed')
//     } else {
//       console.log('Student not found');
//     }
//   }

//   isStudentExixsting(rollNumber: number): boolean {
//     return this.students.find((st: Student) => st.rollNumber === rollNumber) ? true : false
//     // this is a statement condition (?) is for if
//   }
// }

// const educationStudent = new StudentsOperations();

// let st1: Student = { names: 'Beni', age: 20, rollNumber: 123 };
// let st2: Student = { names: 'gisele', age: 26, rollNumber: 193 };
// let st3: Student = { names: 'caleb', age: 27, rollNumber: 893 };
// let st4: Student = { names: 'gisele', age: 19, rollNumber: 30 };
// let st5: Student = { names: 'gentle', age: 40, rollNumber: 30 };

// educationStudent.addStudent(st1);
// educationStudent.addStudent(st2);
// educationStudent.addStudent(st3);
// educationStudent.addStudent(st4);
// educationStudent.addStudent(st5);


const country : string ='Rwanda';
switch(country){
    case 'Rwanda':{
        console.log('I am from Rwanda');
        break;
        }
        case 'Uganda':{
        console.log('I am from Uganda');
        break;
        }
        case 'Kenya':{ 
        console.log('I am from Kenya');
        break;
        }
        default:{
        console.log('I am from another country');
        }
}