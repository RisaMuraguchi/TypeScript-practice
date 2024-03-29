"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Student = /** @class */ (function () {
    function Student(name, english, math, japanese) {
        this.name = "";
        this.english = 0;
        this.math = 0;
        this.japanese = 0;
        this.name = name;
        this.english = english;
        this.math = math;
        this.japanese = japanese;
    }
    Student.prototype.showScoresSum = function () {
        console.log("".concat(this.name, "\u306E\u5408\u8A08\u70B9: ").concat(this.total));
    };
    Student.prototype.showScoreAvg = function () {
        var avg = Math.round(this.total / 3 * 10) / 10;
        console.log("".concat(this.name, "\u306E\u5E73\u5747\u70B9: ").concat(avg));
    };
    Object.defineProperty(Student.prototype, "total", {
        get: function () {
            return this.english + this.math + this.japanese;
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}());
var taro = new Student("宮本太朗", 78, 82, 85);
taro.showScoresSum();
taro.showScoreAvg();
console.log("\u5408\u8A08\u5024: ".concat(taro.total));
