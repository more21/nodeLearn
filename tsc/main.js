"use strict";
exports.__esModule = true;
var name = "Nitin";
console.log(name);
var boy = /** @class */ (function () {
    function boy(fname, lname, age, smoke) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.smoke = smoke;
    }
    boy.prototype.getdetail = function () {
        console.log("Name " + this.fname + " " + this.lname + " and age is " + this.age + " is smoke " + this.smoke);
    };
    return boy;
}());
var boys = new boy("Nitin", "More", 24, true);
boys.getdetail();
console.log(boys.age);
