// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'Q' to 'globalObjectPolyfill'
// - Resolved require(515719) to 'global-object-polyfill'
// - Renamed variable 'l' to 'tryCatchFunctionWrapper'
// - Resolved require(676963) to 'try-catch-function-wrapper'
// - Renamed variable 'i' to 'iteratorCloseCheck'
// - Resolved require(675728) to 'iterator-close-check'
// - Resolved require(357134) to 'typed-array-polyfill-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43278.082fbd69.js
         * chunkId: 43278
         * moduleId: 212324
         */
module.exports = function (module, exports, require) {
  var globalObjectPolyfill = require("global-object-polyfill") /*id: 515719*/;
  var tryCatchFunctionWrapper = require("try-catch-function-wrapper") /*id: 676963*/;
  var iteratorCloseCheck = require("iterator-close-check") /*id: 675728*/;
  var a = require("typed-array-polyfill-util") /*id: 357134*/.NATIVE_ARRAY_BUFFER_VIEWS;
  var d = globalObjectPolyfill.ArrayBuffer;
  var r = globalObjectPolyfill.Int8Array;
  module.exports = !a || !tryCatchFunctionWrapper(function () {
    r(1);
  }) || !tryCatchFunctionWrapper(function () {
    new r(-1);
  }) || !iteratorCloseCheck(function (U) {
    new r();
    new r(null);
    new r(1.5);
    new r(U);
  }, true) || tryCatchFunctionWrapper(function () {
    return new r(new d(2), 1, undefined).length !== 1;
  });
}