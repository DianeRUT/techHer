
// enum MemberType {
//     Librarian = "Librarian",
//   Member = "Member"
//   }
  
  
//   enum BookStatus{Available = "Available",
//   Borrowed = "Borrowed"
//   }
// //custom datatype
//   type Bookdata = {
//     publishedYear: number;
//     genre: string;
//   };
  
//   //interfaces

//  interface IBook {
//     isbn: string;
//     title: string;
//     author: string;
//     status: BookStatus;
//     metadata?: Bookdata;
//   }
  
//  interface IUser {
//     id: number;
//     name: string;
//     role: MemberType;
//   }

//   class Person {
//     id: number;
//     name: string;
  
//     constructor(id: number, name: string) {
//       this.id = id;
//       this.name = name;
//     }
//   }


// class User extends Person implements IUser {
//   public role: MemberType;
//   public borrowedBooks: Book[] = [];

//   constructor(id: number, name: string, role: MemberType) {
//     super(id, name);
//     this.role = role;
//   }

//   borrowBook(book: Book): void {
//     this.borrowedBooks.push(book);
//   }

//   returnBook(book: Book): void {
//     this.borrowedBooks = this.borrowedBooks.filter(b => b.isbn !== book.isbn);
//   }
// }



// // Book class
// class Book implements IBook {
//   public metadata?: Bookdata;

//   constructor(
//     public isbn: string,
//     public title: string,
//     public author: string,
//     public status: BookStatus = BookStatus.Available,
//     metadata?: Bookdata
//   ) {
//     this.metadata = metadata;
//   }
// }
  
//   // Base Member class
//   class Member {
//     constructor(
//       public name: string,
//       public memberType: MemberType
//     ) {}
//   }
  
//   // Student class extends Member
//   class Student extends Member {
//     constructor(name: string) {
//       super(name, MemberType.Student);
//     }
//   }
  
//   // Teacher class extends Member
//   class Teacher extends Member {
//     constructor(name: string) {
//       super(name, MemberType.Teacher);
//     }
//   }
  
//   // Library class
//   class Library {
//     books: Book[] = [];
//     members: Member[] = [];
  
//     addBook(book: Book) {
//       this.books.push(book);
//     }
  
//     addMember(member: Member) {
//       this.members.push(member);
//     }
//   }

enum BookStatus {
    Available = "Available",
    Borrowed = "Borrowed"
  }
  
  interface Category {
    name: string;
  }
  
  interface Book {
    title: string;
    author: string;
    status: BookStatus;
    categories: Category[];
  }
  
//   enum Gender {
//     Female = 0,
//     Male = 1
//   }
  
  interface Librarian {
    names: string;
    gender: Gender;
  }
  
  class LibraryBranch {
    location: string;
    name: string;
    constructor(loc: string, n: string) {
      this.location = loc;
      this.name = n;
    }
  }
  
  class Library {
    location: string;
    name: string;
    constructor(loc: string, n: string) {
      this.location = loc;
      this.name = n;
    }
  }
  
  interface Library_ {
    name: string;
    location: string;
  }
  
  class KigaliLibrary extends Library {
    constructor(library: Library_) {
      super(library.location, library.name);
    }
  
    getLibraryName(): string {
      return this.name;
    }
  
    setLibraryLocation(location: string): void {
      this.location = location;
    }
  }
  
 
  const b: Library_ = {
    name: "DOHO library",
    location: "Gisozi",
  };
  
  const DohoLibrary = new KigaliLibrary(b);
  console.log(DohoLibrary.getLibraryName()); 
  