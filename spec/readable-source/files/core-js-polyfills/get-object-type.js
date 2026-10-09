// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'symbolTostringtagTest'
// - Resolved require(160255) to 'symbol-tostringtag-test'
// - Renamed variable 'o' to 'isFunctionCheck'
// - Resolved require(705647) to 'is-function-check'
// - Renamed variable 'i' to 'getObjectTypeString'
// - Resolved require(32151) to 'get-object-type-string'
// - Resolved require(21227) to 'symbol-well-known-registry'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 786910
         */
module.exports = function (module, exports, require) {
  var symbolTostringtagTest = require("symbol-tostringtag-test") /*id: 160255*/;
  var isFunctionCheck = require("is-function-check") /*id: 705647*/;
  var getObjectTypeString = require("get-object-type-string") /*id: 32151*/;
  var u = require("symbol-well-known-registry") /*id: 21227*/("toStringTag");
  var c = Object;
  var s = getObjectTypeString(function () {
    return arguments;
  }()) === "Arguments";
  function f(t, r) {
    try {
      return t[r];
    } catch (t) {}
  }
  module.exports = symbolTostringtagTest ? getObjectTypeString : function (t) {
    var r;
    var n;
    var e;
    if (t === undefined) {
      return "Undefined";
    } else if (t === null) {
      return "Null";
    } else if (typeof (n = f(r = c(t), u)) == "string") {
      return n;
    } else if (s) {
      return getObjectTypeString(r);
    } else if ((e = getObjectTypeString(r)) === "Object" && isFunctionCheck(r.callee)) {
      return "Arguments";
    } else {
      return e;
    }
  };
}