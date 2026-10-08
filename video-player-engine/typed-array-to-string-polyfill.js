// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(357134) to 'typed-array-polyfill-util'
// - Renamed variable 'l' to 'tryCatchFunctionWrapper'
// - Resolved require(676963) to 'try-catch-function-wrapper'
// - Renamed variable 'i' to 'globalObjectPolyfill'
// - Resolved require(515719) to 'global-object-polyfill'
// - Renamed variable 'a' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43278.082fbd69.js
         * chunkId: 43278
         * moduleId: 127330
         */
module.exports = function (module, exports, require) {
  var Q = require("typed-array-polyfill-util") /*id: 357134*/.exportTypedArrayMethod;
  var tryCatchFunctionWrapper = require("try-catch-function-wrapper") /*id: 676963*/;
  var globalObjectPolyfill = require("global-object-polyfill") /*id: 515719*/;
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var d = globalObjectPolyfill.Uint8Array;
  var r = d && d.prototype || {};
  var o = [].toString;
  var B = functionBindFallback([].join);
  if (tryCatchFunctionWrapper(function () {
    o.call({});
  })) {
    o = function () {
      return B(this);
    };
  }
  var R = r.toString !== o;
  Q("toString", o, R);
}