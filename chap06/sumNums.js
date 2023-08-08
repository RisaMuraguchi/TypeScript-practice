"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nums = [15, 36, 21, 48, 64, 59, 7];
var ans = 0;
for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
    var element = nums_1[_i];
    ans += element;
}
console.log("\u8DB3\u3057\u7B97\u306E\u7B54\u3048: ".concat(ans));
