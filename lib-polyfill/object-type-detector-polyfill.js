// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'toStringTagPolyfill'
// - Resolved require(500671) to 'to-string-tag-polyfill'
// - Renamed variable 'o' to 'isFunctionPolyfill'
// - Resolved require(142982) to 'is-function-polyfill'
// - Renamed variable 'i' to 'objectTypeDetector'
// - Resolved require(942172) to 'object-type-detector'
// - Resolved require(349338) to 'core-js-wks-access'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 549562
         */
module.exports = function (module, exports, require) {
  var toStringTagPolyfill = require("to-string-tag-polyfill") /*id: 500671*/;
  var isFunctionPolyfill = require("is-function-polyfill") /*id: 142982*/;
  var objectTypeDetector = require("object-type-detector") /*id: 942172*/;
  var a = require("core-js-wks-access") /*id: 349338*/("toStringTag");
  var u = Object;
  var c = objectTypeDetector(function () {
    return arguments;
  }()) === "Arguments";
  function f(t, r) {
    try {
      return t[r];
    } catch (t) {}
  }
  module.exports = toStringTagPolyfill ? objectTypeDetector : function (t) {
    var r;
    var e;
    var n;
    if (t === undefined) {
      return "Undefined";
    } else if (t === null) {
      return "Null";
    } else if (typeof (e = f(r = u(t), a)) == "string") {
      return e;
    } else if (c) {
      return objectTypeDetector(r);
    } else if ((n = objectTypeDetector(r)) === "Object" && isFunctionPolyfill(r.callee)) {
      return "Arguments";
    } else {
      return n;
    }
  };
}