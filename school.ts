

// interface School {
//     id: number;
//     name: string;
//     location: string;
//     categories: category[];
  
// }

// interface SchoolOperations {
//     addSchool: (id: number,
//     name: string,
//     location: string,
//     categories: category[],) => void;
//    displaySchools(): School[];
//    editSchool(id: number, updatedSchool: Partial<School>): number;
//    removeSchool(id: number): void;
    
// }
// enum category {
//     PRIMARY = "Primary",
//     SECONDARY = "Secondary",
//     UNIVERSITY = "University",
// }

// class SchoolInfo implements SchoolOperations{
//      private schools: School[];
//      constructor(){
//         this.schools = [];
//             }
//             addSchool(id: number, name: string, location: string, categories: category[]): void {
//                const newSchool: School = { id, name, location, categories };
//                this.schools.push(newSchool);
//             }
//             displaySchools(): School[] {
//                return this.schools;
//             }
//             editSchool(id: number, updatedSchool: Partial<School>): number {
//                const index = this.schools.findIndex(school => school.id === id);
//                if (index !== -1) {
//                   this.schools[index] = { ...this.schools[index], ...updatedSchool };
//                }
//                return index;
//             }
//             removeSchool(id: number): void {
//                this.schools = this.schools.filter(school => school.id !== id);
//             }
//             isSchoolExisting(id: number): boolean {
//                 return this.schools.find((s: School) => s.id === id) ? true : false;
//             }
     


// }

// const schoolInfo = new SchoolInfo();
// schoolInfo.addSchool(1, "Kigali International School", "Kigali", [category.PRIMARY, category.SECONDARY]);
// schoolInfo.addSchool(2, "University of Rwanda", "Kigali", [category.UNIVERSITY]);
// schoolInfo.addSchool(3, "Kigali Institute of Science and Technology", "Kigali", [category.UNIVERSITY]);
// schoolInfo.addSchool(4, "Kigali International School", "Kigali", [category.PRIMARY, category.SECONDARY]);


// const allSchools = schoolInfo.displaySchools();
// console.log(allSchools);
// schoolInfo.editSchool(1, { name: "Kigali International School of Science" });
// const updatedSchools = schoolInfo.displaySchools();
// console.log(updatedSchools);
// schoolInfo.removeSchool(2);
// const remainingSchools = schoolInfo.displaySchools();
// console.log(remainingSchools);
// schoolInfo.removeSchool(3);
// const remainingSchoolsAfterRemoval = schoolInfo.displaySchools();
// console.log(remainingSchoolsAfterRemoval);



// enum Category {
//   PRIMARY = "Primary",
//   SECONDARY = "Secondary",
//   UNIVERSITY = "University",
// }

// interface ISchool {
//   id: number;
//   name: string;
//   location: string;
//   categories: Category[];
// }

// interface ISchoolOperations {
//   addSchool(id: number, name: string, location: string, categories: Category[]): void;
//   displaySchools(): ISchool[];
//   editSchool(id: number, updatedFields: Partial<ISchool>): void;
//   removeSchool(id: number): void;
// }

// class SchoolInfo implements ISchoolOperations {
//   private schools: ISchool[] = [];

//   constructor() {
//     this.schools = [];
//   }

//   // Add a new school, guard against duplicate IDs
//   addSchool(id: number, name: string, location: string, categories: Category[]): void {
//     if (this.isSchoolExisting(id)) {
//       console.error(`School with ID ${id} already exists.`);
//       return;
//     }
//     this.schools.push({ id, name, location, categories });
//     console.log(`School "${name}" (ID: ${id}) added successfully.`);
//   }

//   // Return (and print) the full list of schools
//   displaySchools(): ISchool[] {
//     if (this.schools.length === 0) {
//       console.log("No schools recorded.");
//       return [];
//     }
//     console.log("\n== School Directory ==");
//     this.schools.forEach((s, idx) => {
//       console.log(
//         `${idx + 1}. [ID: ${s.id}] ${s.name} — ${s.location} — Categories: ${s.categories.join(", ")}`
//       );
//     });
//     return this.schools;
//   }

//   // Edit an existing school's fields
//   editSchool(id: number, updatedFields: Partial<ISchool>): void {
//     const idx = this.findIndex(id);
//     if (idx === -1) {
//       console.error(`Cannot edit: no school found with ID ${id}.`);
//       return;
//     }
//     this.schools[idx] = { ...this.schools[idx], ...updatedFields };
//     console.log(`School with ID ${id} updated successfully.`);
//   }

//   // Remove a school by ID
//   removeSchool(id: number): void {
//     const initialCount = this.schools.length;
//     this.schools = this.schools.filter(s => s.id !== id);
//     if (this.schools.length < initialCount) {
//       console.log(`School with ID ${id} removed.`);
//     } else {
//       console.error(`Cannot remove: no school found with ID ${id}.`);
//     }
//   }

//   // Helper: check existence
//   private isSchoolExisting(id: number): boolean {
//     return this.schools.some(s => s.id === id);
//   }

//   // Helper: find index by ID
//   private findIndex(id: number): number {
//     return this.schools.findIndex(s => s.id === id);
//   }
// }

// // ---------- USAGE EXAMPLE ----------

// const directory = new SchoolInfo();

// directory.addSchool(1, "Kigali International School", "Kigali", [
//   Category.PRIMARY,
//   Category.SECONDARY,
// ]);
// directory.addSchool(2, "University of Rwanda", "Kigali", [Category.UNIVERSITY]);
// directory.addSchool(3, "KIST", "Kigali", [Category.UNIVERSITY]);

// // Attempt to add a duplicate
// directory.addSchool(1, "Duplicate School", "Nowhere", [Category.PRIMARY]);

// // Display all
// directory.displaySchools();

// // Edit a school's name
// directory.editSchool(1, { name: "Kigali International School of Science" });
// directory.displaySchools();

// // Remove by ID
// directory.removeSchool(2);
// directory.displaySchools();

// // Attempt to remove non-existent
// directory.removeSchool(999);



//  the SchoolCategory enum
enum SchoolCategory {
    UNIVERSITY = 'UNIVERSITY',
    SECONDARY = 'SECONDARY',
    PRIMARY = 'PRIMARY',
}

//  the School interface
interface School {
    id: number;
    name: string;
    address: string;
    category: SchoolCategory;
}

// School Manager class
class SchoolManager {
    private schools: School[] = [];

    addSchool(school: School): void {
        if (this.schools.some(s => s.name === school.name)) {
            console.log(`School with name ${school.name} already exists.`);
            return;
        }
        this.schools.push(school);
        console.log('School added.');
    }

    editSchool(id: number, updated: Partial<Omit<School, 'id'>>): boolean {
        const school = this.schools.find(s => s.id === id);
        if (school) {
            if (updated.name !== undefined) school.name = updated.name;
            if (updated.address !== undefined) school.address = updated.address;
            if (updated.category !== undefined) school.category = updated.category;
            console.log('School updated.');
            return true;
        }
        console.log('School not found.');
        return false;
    }

    removeSchool(id: number): boolean {
        const index = this.schools.findIndex(s => s.id === id);
        if (index !== -1) {
            this.schools.splice(index, 1);
            console.log('School removed.');
            return true;
        }
        console.log('School not found.');
        return false;
    }

    displaySchools(): void {
        if (this.schools.length === 0) {
            console.log('No schools recorded.');
            return;
        }
        console.log('School List:');
        this.schools.forEach((s, i) => {
            console.log(`${i + 1}. ID: ${s.id}, Name: ${s.name}, Address: ${s.address}, Category: ${s.category}`);
        });
    }
}

// Programmatic demo for SchoolManager
function mainSchoolDemo() {
    const schoolManager = new SchoolManager();

    // Define schools
    const school1: School = {
        id: 1,
        name: 'Green Valley Primary',
        address: '123 Main St',
        category: SchoolCategory.PRIMARY,
    };
    const school2: School = {
        id: 2,
        name: 'Blue Lake Secondary',
        address: '456 Lake Ave',
        category: SchoolCategory.SECONDARY,
    };
    const school3: School = {
        id: 3,
        name: 'Red Mountain University',
        address: '789 University Rd',
        category: SchoolCategory.UNIVERSITY,
    };
    const school4: School = {
        id: 1, // Duplicate ID to test validation
        name: 'Duplicate Primary',
        address: '999 Duplicate St',
        category: SchoolCategory.PRIMARY,
    };

    // Add schools
    schoolManager.addSchool(school1);
    schoolManager.addSchool(school2);
    schoolManager.addSchool(school3);
    schoolManager.addSchool(school4); // Should show already exists

    console.log('\nDisplay All Schools');
    schoolManager.displaySchools();

    console.log('\nEdit School with ID 2');
    schoolManager.editSchool(2, { name: 'Blue Lake Secondary - Updated', address: '456 New Lake Ave' });

    console.log('\nDisplay All Schools After Edit');
    schoolManager.displaySchools();

    console.log('\nTrying to remove school with ID 3...');
    schoolManager.removeSchool(3);

    console.log('\nTrying to remove school with ID 999 (non-existing)...');
    schoolManager.removeSchool(999);

    console.log('\nDisplay All Schools After Removal');
    schoolManager.displaySchools();

    console.log('\nBye bye!! Exiting School Demo.');
}

mainSchoolDemo();



