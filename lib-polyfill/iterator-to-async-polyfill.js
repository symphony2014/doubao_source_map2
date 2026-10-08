// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'requireObjectOrThrowTypeError_1'
// - Resolved require(989247) to 'require-object-or-throw-type-error_1'
// - Renamed variable 'i' to 'asyncFromSyncIteratorPolyfill'
// - Resolved require(42869) to 'async-from-sync-iterator-polyfill'
// - Renamed variable 'a' to 'asyncIteratorHelperPolyfill'
// - Resolved require(638019) to 'async-iterator-helper-polyfill'
// - Renamed variable 'u' to 'iteratorWrapperHelper'
// - Resolved require(610771) to 'iterator-wrapper-helper'
// - Resolved require(87987) to 'lib-polyfill-check'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 162839
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var requireObjectOrThrowTypeError_1 = require("require-object-or-throw-type-error_1") /*id: 989247*/;
  var asyncFromSyncIteratorPolyfill = require("async-from-sync-iterator-polyfill") /*id: 42869*/;
  var asyncIteratorHelperPolyfill = require("async-iterator-helper-polyfill") /*id: 638019*/;
  var iteratorWrapperHelper = require("iterator-wrapper-helper") /*id: 610771*/;
  polyfillPropertyDefiner({
    target: "Iterator",
    proto: true,
    real: true,
    forced: require("lib-polyfill-check") /*id: 87987*/
  }, {
    toAsync: function () {
      return new asyncIteratorHelperPolyfill(iteratorWrapperHelper(new asyncFromSyncIteratorPolyfill(iteratorWrapperHelper(requireObjectOrThrowTypeError_1(this)))));
    }
  });
}