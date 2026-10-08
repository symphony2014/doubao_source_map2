// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'd' to 'parseColorString'
// - Renamed export 'i' to 'validateColorString'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 46473.bc9b0de0.js
         * chunkId: 46473
         * moduleId: 940084
         */
module.exports = function (module, exports, require) {
  var numberRegexPattern = require("number-regex-pattern") /*id: 910589*/;
  let r = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
  let s = (t, e) => i => typeof i == "string" && !!r.test(i) && !!i.startsWith(t) || !!e && i != null && !!Object.prototype.hasOwnProperty.call(i, e);
  let o = (t, e, i) => r => {
    if (typeof r != "string") {
      return r;
    }
    let [s, o, a, l] = r.match(numberRegexPattern.numberRegex);
    return {
      [t]: parseFloat(s),
      [e]: parseFloat(o),
      [i]: parseFloat(a),
      alpha: l !== undefined ? parseFloat(l) : 1
    };
  };
  require.d(exports, {
    parseColorString: function () {
      return o;
    },
    validateColorString: function () {
      return s;
    }
  });
}