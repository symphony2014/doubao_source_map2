// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'requireObjectOrThrowTypeError_1'
// - Resolved require(989247) to 'require-object-or-throw-type-error_1'
// - Renamed variable 'o' to 'callBindSafePropertyReturnHandler'
// - Resolved require(748658) to 'call-bind-safe-property-return-handler'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 936802
         */
module.exports = function (module, exports, require) {
  var requireObjectOrThrowTypeError_1 = require("require-object-or-throw-type-error_1") /*id: 989247*/;
  var callBindSafePropertyReturnHandler = require("call-bind-safe-property-return-handler") /*id: 748658*/;
  module.exports = function (t, r, e, i) {
    try {
      if (i) {
        return r(requireObjectOrThrowTypeError_1(e)[0], e[1]);
      } else {
        return r(e);
      }
    } catch (r) {
      callBindSafePropertyReturnHandler(t, "throw", r);
    }
  };
}