// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// - Renamed variable 'i' to 'functionValidator'
// - Resolved require(599706) to 'function-validator'
// - Renamed variable 'a' to 'stringToArrayPolyfillWrapper'
// - Resolved require(902400) to 'string-to-array-polyfill-wrapper'
// - Renamed variable 'u' to 'safeArrayCreateUtil'
// - Resolved require(311252) to 'safe-array-create-util'
// - Renamed variable 'c' to 'globalPrototypeAccessUtil'
// - Resolved require(329929) to 'global-prototype-access-util'
// - Renamed variable 'f' to 'arrayUnscopablesDefine'
// - Resolved require(557126) to 'array-unscopables-define'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 229570
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var functionValidator = require("function-validator") /*id: 599706*/;
  var stringToArrayPolyfillWrapper = require("string-to-array-polyfill-wrapper") /*id: 902400*/;
  var safeArrayCreateUtil = require("safe-array-create-util") /*id: 311252*/;
  var globalPrototypeAccessUtil = require("global-prototype-access-util") /*id: 329929*/;
  var arrayUnscopablesDefine = require("array-unscopables-define") /*id: 557126*/;
  var s = Array;
  var l = functionBindFallback(globalPrototypeAccessUtil("Array", "sort"));
  polyfillPropertyDefiner({
    target: "Array",
    proto: true
  }, {
    toSorted: function (t) {
      if (t !== undefined) {
        functionValidator(t);
      }
      return l(safeArrayCreateUtil(s, stringToArrayPolyfillWrapper(this)), t);
    }
  });
  arrayUnscopablesDefine("toSorted");
}