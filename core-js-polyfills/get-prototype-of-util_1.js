// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'objectHasOwnPolyfill'
// - Resolved require(156732) to 'object-has-own-polyfill'
// - Renamed variable 'o' to 'isFunctionCheck'
// - Resolved require(705647) to 'is-function-check'
// - Renamed variable 'i' to 'toObjectUtil'
// - Resolved require(957710) to 'to-object-util'
// - Renamed variable 'u' to 'sharedSymbolKeyUtil'
// - Resolved require(893493) to 'shared-symbol-key-util'
// - Renamed variable 'c' to 'prototypeConstructorCheck'
// - Resolved require(347835) to 'prototype-constructor-check'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 391711
         */
module.exports = function (module, exports, require) {
  var objectHasOwnPolyfill = require("object-has-own-polyfill") /*id: 156732*/;
  var isFunctionCheck = require("is-function-check") /*id: 705647*/;
  var toObjectUtil = require("to-object-util") /*id: 957710*/;
  var sharedSymbolKeyUtil = require("shared-symbol-key-util") /*id: 893493*/;
  var prototypeConstructorCheck = require("prototype-constructor-check") /*id: 347835*/;
  var s = sharedSymbolKeyUtil("IE_PROTO");
  var f = Object;
  var a = f.prototype;
  module.exports = prototypeConstructorCheck ? f.getPrototypeOf : function (t) {
    var r = toObjectUtil(t);
    if (objectHasOwnPolyfill(r, s)) {
      return r[s];
    }
    var n = r.constructor;
    if (isFunctionCheck(n) && r instanceof n) {
      return n.prototype;
    } else if (r instanceof f) {
      return a;
    } else {
      return null;
    }
  };
}