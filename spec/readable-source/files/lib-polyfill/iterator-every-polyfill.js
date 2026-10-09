// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'iteratorForEachHelper'
// - Resolved require(686807) to 'iterator-for-each-helper'
// - Renamed variable 'i' to 'functionValidator'
// - Resolved require(599706) to 'function-validator'
// - Renamed variable 'a' to 'requireObjectOrThrowTypeError_1'
// - Resolved require(989247) to 'require-object-or-throw-type-error_1'
// - Renamed variable 'u' to 'iteratorWrapperHelper'
// - Resolved require(610771) to 'iterator-wrapper-helper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 563949
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var iteratorForEachHelper = require("iterator-for-each-helper") /*id: 686807*/;
  var functionValidator = require("function-validator") /*id: 599706*/;
  var requireObjectOrThrowTypeError_1 = require("require-object-or-throw-type-error_1") /*id: 989247*/;
  var iteratorWrapperHelper = require("iterator-wrapper-helper") /*id: 610771*/;
  polyfillPropertyDefiner({
    target: "Iterator",
    proto: true,
    real: true
  }, {
    every: function (t) {
      requireObjectOrThrowTypeError_1(this);
      functionValidator(t);
      var r = iteratorWrapperHelper(this);
      var e = 0;
      return !iteratorForEachHelper(r, function (r, n) {
        if (!t(r, e++)) {
          return n();
        }
      }, {
        IS_RECORD: true,
        INTERRUPTED: true
      }).stopped;
    }
  });
}