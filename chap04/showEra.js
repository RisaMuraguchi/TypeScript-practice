"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var year = Math.round(Math.random() * 120) + 1901;
if (year < 1912) {
    console.log("明治");
}
else if (year < 1926) {
    console.log("大正");
}
else if (year < 1989) {
    console.log("昭和");
}
else if (year < 2019) {
    console.log("平成");
}
else {
    console.log("令和");
}
