// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'globalPolyfillAccess'
// - Resolved require(533515) to 'global-polyfill-access'
// - Renamed variable 'o' to 'isFunctionPolyfill'
// - Resolved require(142982) to 'is-function-polyfill'
// - Renamed variable 'i' to 'isIterableCheck'
// - Resolved require(90754) to 'is-iterable-check'
// - Renamed variable 'a' to 'isObjectOrFunctionCheck'
// - Resolved require(527865) to 'is-object-or-function-check'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 628828
         */
module.exports = function (module, exports, require) {
  var globalPolyfillAccess = require("global-polyfill-access") /*id: 533515*/;
  var isFunctionPolyfill = require("is-function-polyfill") /*id: 142982*/;
  var isIterableCheck = require("is-iterable-check") /*id: 90754*/;
  var isObjectOrFunctionCheck = require("is-object-or-function-check") /*id: 527865*/;
  var u = globalPolyfillAccess("Set");
  module.exports = function (t) {
    if (isObjectOrFunctionCheck(t) && typeof t.size == "number" && isFunctionPolyfill(t.has) && isFunctionPolyfill(t.keys)) {
      return t;
    } else if (isIterableCheck(t)) {
      return new u(t);
    } else {
      return t;
    }
  };
}