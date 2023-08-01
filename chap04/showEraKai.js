"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var year = Math.round(Math.random() * 120) + 1901;
if (year < 1912) {
    var wareki = year - 1867;
    console.log("".concat(year, "\u5E74\u306F\u660E\u6CBB").concat(wareki, "\u5E74\u3067\u3059"));
}
else if (year < 1926) {
    var wareki = year - 1911;
    console.log("".concat(year, "\u5E74\u306F\u5927\u6B63").concat(wareki, "\u5E74\u3067\u3059"));
}
else if (year < 1989) {
    var wareki = year - 1925;
    console.log("".concat(year, "\u5E74\u306F\u662D\u548C").concat(wareki, "\u5E74\u3067\u3059"));
}
else if (year < 2019) {
    var wareki = year - 1988;
    console.log("".concat(year, "\u5E74\u306F\u5E73\u6210").concat(wareki, "\u5E74\u3067\u3059"));
}
else {
    var wareki = year - 2018;
    console.log("".concat(year, "\u5E74\u306F\u4EE4\u548C").concat(wareki, "\u5E74\u3067\u3059"));
}
