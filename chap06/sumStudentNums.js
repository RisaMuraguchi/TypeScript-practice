"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var studentNums = {
    "い組": 35,
    "ろ組": 36,
    "は組": 37,
    "に組": 34,
    "ほ組": 36
};
var ans = 0;
for (var key in studentNums) {
    ans += studentNums[key];
}
console.log("\u5B66\u5E74\u306E\u6570: ".concat(ans));
