"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var num = Math.round(Math.random() * 10);
console.log("num\u306E\u5024:".concat(num));
if (num > 4) {
    console.log("四捨五入すると0");
}
else {
    console.log("四捨五入すると10");
}
