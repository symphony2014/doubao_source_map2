// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'globalPolyfillAccess'
// - Resolved require(533515) to 'global-polyfill-access'
// - Renamed variable 'o' to 'isFunctionPolyfill'
// - Resolved require(142982) to 'is-function-polyfill'
// - Renamed variable 'i' to 'isPrototypeOfPolyfill'
// - Resolved require(28472) to 'is-prototype-of-polyfill'
// - Renamed variable 'a' to 'nativeSymbolSupportCheck'
// - Resolved require(418662) to 'native-symbol-support-check'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 362010
         */
module.exports = function (module, exports, require) {
  var globalPolyfillAccess = require("global-polyfill-access") /*id: 533515*/;
  var isFunctionPolyfill = require("is-function-polyfill") /*id: 142982*/;
  var isPrototypeOfPolyfill = require("is-prototype-of-polyfill") /*id: 28472*/;
  var nativeSymbolSupportCheck = require("native-symbol-support-check") /*id: 418662*/;
  var u = Object;
  module.exports = nativeSymbolSupportCheck ? function (t) {
    return typeof t == "symbol";
  } : function (t) {
    var r = globalPolyfillAccess("Symbol");
    return isFunctionPolyfill(r) && isPrototypeOfPolyfill(r.prototype, u(t));
  };
}