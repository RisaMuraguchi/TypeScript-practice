"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calcRectangleArea(width, height) {
    if (height == undefined) {
        height = width;
    }
    return width * height;
}
var areaRectangle = calcRectangleArea(24, 11);
console.log("\u7E2611\u3067\u6A2A24\u306E\u9577\u65B9\u5F62\u306E\u9762\u7A4D: ".concat(areaRectangle));
var areaSquare = calcRectangleArea(13);
console.log("\u4E00\u8FBA\u304C13\u306E\u6B63\u65B9\u5F62\u306E\u9762\u7A4D: ".concat(areaSquare));
