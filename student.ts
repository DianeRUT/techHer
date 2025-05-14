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
    if (this.searchStudent(student.rollNumber)){
        console.log("student already exists");
return;
}
    this.students.push(student);
    console.log("student added successfully");
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

 private searchStudent(rollNumber: number): number | null {
    for (let i = 0; i < this.students.length; i++) {
        if (this.students[i].rollNumber === rollNumber) {
            return i;
        }
    }
    return null;
}
}

function main() {
    const studentManager = new StudentManager();
let count = 0;
const maxsteps = 4;

while (count < maxsteps) {
    if(count === 0){
        console.log("Enter student details");
        studentManager.addStudent({
            rollNumber: 1,
            names: "John Doe",
            grade: 85,
            gender: Gender.Male,
        });
    }
    if(count === 1){
         console.log("Enter student details");
        studentManager.addStudent({
            rollNumber: 2,
            names: "Jane Smith",
            grade: 90,
            gender: Gender.Female,
        });
    }
       if(count === 2){
         console.log("Display All Students");
         studentManager.displayStudents();
        
}
    if(count === 3){
        console.log("Calculate Average Grade");
        const average = studentManager.calculateAverageGrade();
        console.log(`Average Grade: ${average.value}`);
    }
    count++;
}

  console.log("Bye bye!! Exiting Menu.");
}
main();