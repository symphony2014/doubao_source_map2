// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 50072.1e2f7f4a.js
         * chunkId: 50072
         * moduleId: 73360
         */
module.exports = function (module, exports, require) {
  exports.isProtectedDayOfYearToken = function (e) {
    return n.indexOf(e) !== -1;
  };
  exports.isProtectedWeekYearToken = function (e) {
    return a.indexOf(e) !== -1;
  };
  exports.throwProtectedError = function (e, t, n) {
    if (e === "YYYY") {
      throw RangeError(`Use \`yyyy\` instead of \`YYYY\` (in \`${t}\`) for formatting years to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`);
    }
    if (e === "YY") {
      throw RangeError(`Use \`yy\` instead of \`YY\` (in \`${t}\`) for formatting years to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`);
    }
    if (e === "D") {
      throw RangeError(`Use \`d\` instead of \`D\` (in \`${t}\`) for formatting days of the month to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`);
    }
    if (e === "DD") {
      throw RangeError(`Use \`dd\` instead of \`DD\` (in \`${t}\`) for formatting days of the month to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`);
    }
  };
  var n = ["D", "DD"];
  var a = ["YY", "YYYY"];
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}