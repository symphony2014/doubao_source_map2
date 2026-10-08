// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'globalPolyfillAccess'
// - Resolved require(533515) to 'global-polyfill-access'
// - Renamed variable 'o' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// - Renamed variable 'i' to 'getOwnPropertyNamesPolyfill'
// - Resolved require(667264) to 'get-own-property-names-polyfill'
// - Renamed variable 'a' to 'objectGetOwnPropertySymbols_1'
// - Resolved require(991431) to 'object-get-own-property-symbols_1'
// - Renamed variable 'u' to 'requireObjectOrThrowTypeError_1'
// - Resolved require(989247) to 'require-object-or-throw-type-error_1'
// - Updated imported property 'f' to 'getOwnPropertyNames' (module 667264)
// - Updated imported property 'f' to 'getOwnPropSymbols' (module 991431)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 358126
         */
module.exports = function (module, exports, require) {
  var globalPolyfillAccess = require("global-polyfill-access") /*id: 533515*/;
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var getOwnPropertyNamesPolyfill = require("get-own-property-names-polyfill") /*id: 667264*/;
  var objectGetOwnPropertySymbols_1 = require("object-get-own-property-symbols_1") /*id: 991431*/;
  var requireObjectOrThrowTypeError_1 = require("require-object-or-throw-type-error_1") /*id: 989247*/;
  var c = functionBindFallback([].concat);
  module.exports = globalPolyfillAccess("Reflect", "ownKeys") || function (t) {
    var r = getOwnPropertyNamesPolyfill.getOwnPropertyNames(requireObjectOrThrowTypeError_1(t));
    var e = objectGetOwnPropertySymbols_1.getOwnPropSymbols;
    if (e) {
      return c(r, e(t));
    } else {
      return r;
    }
  };
}