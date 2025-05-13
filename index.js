// let age : number = 9;
// let country : string = "Rwanda";
// let coutry : any = "Rwanda";
// coutry = 8;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var person1 = {
    gender: 'FEMALE',
    country: 'RWANDA',
    names: 'nadia'
};
console.log(person1.country);
var person2 = {
    gender: 'FEMALE',
    country: 'RWANDA',
    names: 'nadia',
};
var gender;
(function (gender) {
    gender["FEMALE"] = "FEMALE";
    gender["MALE"] = "MALE";
})(gender || (gender = {}));
var selectedGender = gender.MALE;
var StatusEnum;
(function (StatusEnum) {
    StatusEnum["ACTIVE"] = "ACTIVE";
    StatusEnum["INACTIVE"] = "INACTIVE";
})(StatusEnum || (StatusEnum = {}));
// RETURN VOID FUNCTION
function deposit(currentBalance, amount) {
    //business logic here
    var balance = currentBalance + amount;
}
// return value function
function depositReturn(currentBalance, amount) {
    return currentBalance + amount;
}
var Stock = /** @class */ (function () {
    function Stock(balance) {
        this.stockBalance = balance;
        this.difference = 0;
    }
    Stock.prototype.stockIn = function (quantity) {
        this.stockBalance += quantity;
    };
    Stock.prototype.stockOut = function (quantity) {
        this.stockBalance -= quantity;
    };
    Stock.prototype.getDiffence = function () {
        return this.difference;
    };
    return Stock;
}());
var stock = new Stock(200);
var stockTwo = new Stock(500);
var stockThree = new Stock(1000);
var Car = /** @class */ (function () {
    function Car(km) {
        this.car = km;
    }
    Car.prototype.driving = function (kilometer) {
        this.car += kilometer;
    };
    Car.prototype.stop = function () {
    };
    return Car;
}());
var myCar = new Car(200);
myCar.driving(50);
console.log(myCar.car);
var User = /** @class */ (function () {
    function User() {
        this.firstName = "";
        this.lastName = "";
        this.age = 0;
    }
    User.prototype.register = function (firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    };
    User.prototype.getUser = function () {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            age: this.age,
        };
    };
    return User;
}());
var Book = /** @class */ (function () {
    function Book(man, tit) {
        this.manufacture = man;
        this.title = tit;
    }
    return Book;
}());
//child class
var EducationBook = /** @class */ (function (_super) {
    __extends(EducationBook, _super);
    function EducationBook() {
        return _super.call(this, "UR", "Math Book") || this;
    }
    return EducationBook;
}(Book));
var House = /** @class */ (function () {
    function House(size, floors, district) {
        this.size = size;
        this.floors = floors;
        this.district = district;
    }
    return House;
}());
var NyarugengeHouse = /** @class */ (function (_super) {
    __extends(NyarugengeHouse, _super);
    function NyarugengeHouse() {
        return _super.call(this, 103, 12, "Nyarugenge") || this;
    }
    return NyarugengeHouse;
}(House));
var KicukiroHouse = /** @class */ (function (_super) {
    __extends(KicukiroHouse, _super);
    function KicukiroHouse() {
        return _super.call(this, 149, 45, "Kicukiro") || this;
    }
    return KicukiroHouse;
}(House));
