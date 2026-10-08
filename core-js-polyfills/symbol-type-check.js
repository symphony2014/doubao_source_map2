// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'globalNamespaceUtil'
// - Resolved require(858005) to 'global-namespace-util'
// - Renamed variable 'o' to 'isFunctionCheck'
// - Resolved require(705647) to 'is-function-check'
// - Renamed variable 'i' to 'isPrototypeOfBind'
// - Resolved require(629230) to 'is-prototype-of-bind'
// - Renamed variable 'u' to 'symbolIteratorSupportCheck'
// - Resolved require(364051) to 'symbol-iterator-support-check'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 95579
         */
module.exports = function (module, exports, require) {
  var globalNamespaceUtil = require("global-namespace-util") /*id: 858005*/;
  var isFunctionCheck = require("is-function-check") /*id: 705647*/;
  var isPrototypeOfBind = require("is-prototype-of-bind") /*id: 629230*/;
  var symbolIteratorSupportCheck = require("symbol-iterator-support-check") /*id: 364051*/;
  var c = Object;
  module.exports = symbolIteratorSupportCheck ? function (t) {
    return typeof t == "symbol";
  } : function (t) {
    var r = globalNamespaceUtil("Symbol");
    return isFunctionCheck(r) && isPrototypeOfBind(r.prototype, c(t));
  };
}