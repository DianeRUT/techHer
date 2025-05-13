interface StudentOperations {
addStudent: (student: Student) => void;
displayStudents(): Student[];
calculateAverageGrade(): AverageGrade;
}

interface Student {
    id: number;
    names: string;
    gender: Gender;
    grade: string;

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