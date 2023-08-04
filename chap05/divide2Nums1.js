"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
for (var i = 1; i <= 5; i++) {
    var num1 = Math.round(Math.random() * 10);
    console.log("\u5206\u6BCD\u306E\u5024: ".concat(num1));
    if (num1 == 0) {
        console.log("num1が0なので処理終了");
        break;
    }
    for (var j = 1; j <= 5; j++) {
        var num2 = Math.round(Math.random() * 10);
        console.log("\u5206\u5B50\u306E\u5024: ".concat(num2));
        var ans = num2 / num1;
        console.log("\u5272\u308A\u7B97\u306E\u7D50\u679C: ".concat(ans));
    }
}
