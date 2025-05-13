// let age : number = 9;
// let country : string = "Rwanda";
// let coutry : any = "Rwanda";
// coutry = 8;

// let sum : number = coutry as number + 9;
// console.log('hello');

// let ages: number[] = [];
// let countries: string[] = [];
// let countryRead: readonly string[] = ['Rwanda', 'Kigali'];
// countries.push('')

//custom types (types, interface)

// type imibare = number;
// type inyunguti = string
// type person ={
//     gender: string,
//     country: string,
//     names: string,

// }

// let person1: person = {
//     gender: 'FEMALE',
//     country : 'RWANDA',
//     names : 'nadia'
// }

// console.log(person1.country);

// let age: imibare = 10;
// let country : inyunguti = 'Rwanda';
// age = 'Kigalie';

// interface personInterface{
//     gender: string,
//     country: string,
//     names: string,
// }

// let person2: personInterface = {
//     gender: 'FEMALE',
//     country: 'RWANDA',
//     names: 'nadia',
// }

// enum gender{
//     FEMALE = 'FEMALE',
//     MALE = 'MALE',

// }

// let selectedGender: gender = gender.MALE;

// enum StatusEnum {
//     ACTIVE = 'ACTIVE',
//     INACTIVE = 'INACTIVE',
// }

// // RETURN VOID FUNCTION

// function deposit (currentBalance : number, amount: number): void{
//     //business logic here

//     let balance : number = currentBalance + amount;
// }

// // return value function

// function depositReturn ( currentBalance: number, amount : number) : number{
//     return currentBalance + amount;
// }

// class Stock{
//     public stockBalance : number;
//     private difference : number;

//     constructor(balance: number){
//         this.stockBalance = balance;
//         this.difference = 0;
//     }

//     stockIn(quantity: number) : void{
//         this.stockBalance += quantity;
//     }

//     stockOut(quantity: number):void{
//         this.stockBalance -= quantity;
//     }
//     getDiffence() : number {
//         return this.difference
//     }
// }
// let stock = new Stock (200);
// let stockTwo = new Stock(500);
// let stockThree = new Stock(1000);


// class Car {
//     public car: number;

//     constructor(km: number) {
//         this.car = km;
//     }

//     driving(kilometer: number): void {
//         this.car += kilometer;
//     }

//     stop(): void {
//     }
// }

// let myCar = new Car(200);
// myCar.driving(50);
// console.log(myCar.car); 

// class User{
//     public firstName: string;
//     public lastName: string;
//     private age : number;

//     constructor(){
//         this.firstName = "";
//         this.lastName ="";
//         this.age = 0;
//     }
//     register(firstName: string, lastName: string, age: number): void {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }

//     getUser(): { firstName: string; lastName: string; age: number } {
//         return {
//             firstName: this.firstName,
//             lastName: this.lastName,
//             age: this.age,
//         };
//     }
// }

// class Book{
//     public manufacture : string;
//     public title: string;

//     constructor(man: string, tit: string){
//         this.manufacture= man;
//         this.title = tit;
//     }

// }

//child class

// class EducationBook extends Book{
//     constructor(){
//         super("UR", "Math Book");
//     }
// }

// class House {
//     public size: number;
//     public floors: number;
//     public district: string;

//     constructor(size: number, floors: number, district: string) {
//         this.size = size;
//         this.floors = floors;
//         this.district = district;
//     }
// }

// class NyarugengeHouse extends House{
//     constructor(){
//         super(103, 12, "Nyarugenge")
//     }
// }

// class KicukiroHouse extends House {
//     constructor() {
//         super(149, 45, "Kicukiro");
//     }
// }

interface Person {
    names: string;
    age: number;
    address: string;
}
const personOne: Person ={
    names: 'Mugisha',
    age: 20,
    address: 'Rwanda'
};
const { names, age } = personOne;
console.log(names);
console.log(age);

const countries: string[] = ['Rwanda', 'Ghana', 'Burundi'];
const [countryOne, countryTwo] = countries;
console.log(countryOne);
console.log(countryTwo);