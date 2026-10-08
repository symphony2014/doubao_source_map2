// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Do' to 'isYearToken'
// - Renamed export 'Iu' to 'isDayToken'
// - Renamed export 'qp' to 'validateDateTokens'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 50072.1e2f7f4a.js
         * chunkId: 50072
         * moduleId: 579287
         */
module.exports = function (module, exports, require) {
  var a = ["D", "DD"];
  var r = ["YY", "YYYY"];
  function i(e) {
    return a.indexOf(e) !== -1;
  }
  function o(e) {
    return r.indexOf(e) !== -1;
  }
  function s(e, t, n) {
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
  }
  require.d(exports, {
    isYearToken: function () {
      return o;
    },
    isDayToken: function () {
      return i;
    },
    validateDateTokens: function () {
      return s;
    }
  });
}