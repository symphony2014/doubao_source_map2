// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'toNumber'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 216346
         */
module.exports = function (module, exports, require) {
  var stringTrimUtil = require("string-trim-util") /*id: 102462*/;
  var isObjectOrFunction_1_1 = require("is-object-or-function_1_1") /*id: 433743*/;
  var isSymbolUtil = require("is-symbol-util") /*id: 994674*/;
  var a = 0 / 0;
  var s = /^[-+]0x[0-9a-f]+$/i;
  var u = /^0b[01]+$/i;
  var c = /^0o[0-7]+$/i;
  var l = parseInt;
  exports.toNumber = function (e) {
    if (typeof e == "number") {
      return e;
    }
    if (isSymbolUtil.isSymbol(e)) {
      return a;
    }
    if (isObjectOrFunction_1_1.isObjectOrFunction(e)) {
      var t = typeof e.valueOf == "function" ? e.valueOf() : e;
      e = isObjectOrFunction_1_1.isObjectOrFunction(t) ? t + "" : t;
    }
    if (typeof e != "string") {
      if (e === 0) {
        return e;
      } else {
        return +e;
      }
    }
    e = stringTrimUtil.trimString(e);
    var n = u.test(e);
    if (n || c.test(e)) {
      return l(e.slice(2), n ? 2 : 8);
    } else if (s.test(e)) {
      return a;
    } else {
      return +e;
    }
  };
}