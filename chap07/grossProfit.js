"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function showGrossProfit(sales, ratio) {
    if (ratio === void 0) { ratio = 0.7; }
    var grossProfit = Math.round(sales * ratio * 0.9);
    console.log("".concat(sales, "\u306E\u7C97\u5229: ").concat(grossProfit, "(\u7C97\u5229\u7387").concat(ratio, ")"));
}
showGrossProfit(1245615, 0.8);
showGrossProfit(2214568);
