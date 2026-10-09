// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'd' to 'parseColorValues'
// - Renamed export 'i' to 'isColorString'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 40135.b0349f7e.js
         * chunkId: 40135
         * moduleId: 318138
         */
module.exports = function (module, exports, require) {
  var numberPatternRegex = require("number-pattern-regex") /*id: 937066*/;
  let r = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
  let s = (t, e) => i => typeof i == "string" && !!r.test(i) && !!i.startsWith(t) || !!e && i != null && !!Object.prototype.hasOwnProperty.call(i, e);
  let o = (t, e, i) => r => {
    if (typeof r != "string") {
      return r;
    }
    let [s, o, a, l] = r.match(numberPatternRegex.numberPattern);
    return {
      [t]: parseFloat(s),
      [e]: parseFloat(o),
      [i]: parseFloat(a),
      alpha: l !== undefined ? parseFloat(l) : 1
    };
  };
  require.d(exports, {
    parseColorValues: function () {
      return o;
    },
    isColorString: function () {
      return s;
    }
  });
}