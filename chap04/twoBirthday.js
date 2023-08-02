"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var a = Math.round(Math.random() * 68) + 1950;
var b = Math.round(Math.random() * 68) + 1950;
console.log("A\u306E\u751F\u307E\u308C\u5E74: ".concat(a, " B\u306E\u751F\u307E\u308C\u5E74: ").concat(b));
if (a > 1989 && b > 1989) {
    console.log("A\u3055\u3093\u3082B\u3055\u3093\u3082\u5E73\u6210\u751F\u307E\u308C");
}
else if (a > 1989 || b > 1989) {
    console.log("\u3069\u3061\u3089\u304B\u304C\u5E73\u6210\u751F\u307E\u308C");
}
else {
    console.log("\u4E21\u65B9\u3068\u3082\u662D\u548C\u751F\u307E\u308C");
}
