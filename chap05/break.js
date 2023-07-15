"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
for (var i = 1; i <= 10; i++) {
    var num = Math.round(Math.random() * 10);
    console.log("".concat(i, "\u500B\u76EE\u306E\u4E71\u6570: ").concat(num));
    if (num == 5) {
        console.log("5が発生したのでbreak");
        break;
    }
}
