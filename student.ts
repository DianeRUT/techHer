interface StudentOperations {
addStudent: (student: Student) => void;
displayStudents(): Student[];
calculateAverageGrade(): AverageGrade;
}

interface Student {
    rollNumber: number;
    names: string;
    gender: Gender;
    grade: number;
    
}

interface AverageGrade {
    value: number;
    scale?: string;

}

enum Gender{
    Male = "Male",
    Female ="Female",
    Other = "Other"
}

// class StudentManager implements StudentOperations {
//     private students: Student[] = [];

//     addStudent(student: Student): void {
//         this.students.push(student);
//     }

//     displayStudents(): Student[] {
//         return this.students;
//     }

//     calculateAverageGrade(): AverageGrade {
//         const totalGrades = this.students.reduce((sum, student) => sum + parseFloat(student.grade), 0);
//         const average = totalGrades / this.students.length;
//         return { value: average, scale: "GPA" };
//     }
// }

class StudentManager implements StudentOperations{

private students: Student[];

constructor(){
    this.students = [];
}


addStudent (student: Student) :void{
    //chech if the student doesn't exist by use of roll number
    if
   (this.isStudentExisting(student.rollNumber)) {
      console.log(`Student with this roll numebr ${student.rollNumber} already exists`)
      return;
    } else {
      this.students.push(student);
      console.log('student added successfully')
    }
  }
  removeStudent(rollNumber: number) {
    //check if the student already exists and if he is , we delete and if he is not we give message
    if (this.isStudentExisting(rollNumber)) {
      this.students = this.students.filter((t: Student) => t.rollNumber !== rollNumber);
      console.log('Student removed')
    } else {
      console.log('Student not found');
    }
  }

  isStudentExisting(rollNumber: number): boolean {
    return this.students.find((st: Student) => st.rollNumber === rollNumber) ? true : false
    // this is a statement condition (?) is for if
  }

displayStudents(): Student[] {
    if (this.students.length === 0) {
        console.log('No students to display.');
        return [];
    }
    

    console.log("\nlist of students:")

    for(let i = 0; i<this.students.length; i++){
          const s = this.students[i];
            console.log(`${i + 1}. Name: ${s.names}, Roll Number: ${s.rollNumber}, Grade: ${s.grade}`);
    }
    return this.students;
}
calculateAverageGrade(): AverageGrade {
    if (this.students.length === 0) {
        return { value: 0 };
    }
    let totalGrade = 0;
    for ( let i =0; i< this.students.length; i++){
        totalGrade += this.students[i].grade;

    } 
    const average = totalGrade / this.students.length;
    return { value: average};
}

//  private searchStudent(rollNumber: number): number | null {
//     for (let i = 0; i < this.students.length; i++) {
//         if (this.students[i].rollNumber === rollNumber) {
//             return i;
//         }
//     }
//     return null;
// }
}

function main() {
  const studentManager = new StudentManager();

  // Define students
  const student1: Student = {
    rollNumber: 1,
    names: "John Doe",
    grade: 85,
    gender: Gender.Male,
  };

  const student2: Student = {
    rollNumber: 2,
    names: "Jane Smith",
    grade: 90,
    gender: Gender.Female,
  };

  const student3: Student = {
    rollNumber: 3,
    names: "Alex Johnson",
    grade: 78,
    gender: Gender.Other,
  };

  const student4: Student = {
    rollNumber: 1, // Duplicate roll number to test validation
    names: "Duplicate John",
    grade: 95,
    gender: Gender.Male,
  };

  // Add students
  studentManager.addStudent(student1);
  studentManager.addStudent(student2);
  studentManager.addStudent(student3);
  studentManager.addStudent(student4); // This should will show the "already exists"

  console.log("\nDisplay All Students");
  studentManager.displayStudents();

  console.log("\nCalculate Average Grade");
  const average = studentManager.calculateAverageGrade();
  console.log(`Average Grade: ${average.value}`);

  console.log("\nTrying to remove student with roll number 2...");
  studentManager.removeStudent(2);

  console.log("\nTrying to remove student with roll number 999 (non-existing)...");
  studentManager.removeStudent(999);

  console.log("\nDisplay All Students After Removal");
  studentManager.displayStudents();

  console.log("\nBye bye!! Exiting Menu.");
}
main();

//  class Product implements IProduct{
//     public products: IProduct[];
//     constructor(){
//         this.products = [];
//     }
    

//  }