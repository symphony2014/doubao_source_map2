// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'tryCatchFunctionWrapper'
// - Resolved require(676963) to 'try-catch-function-wrapper'
// - Resolved require(515719) to 'global-object-polyfill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 9447
         */
module.exports = function (module, exports, require) {
  var tryCatchFunctionWrapper = require("try-catch-function-wrapper") /*id: 676963*/;
  var o = require("global-object-polyfill") /*id: 515719*/.RegExp;
  module.exports = tryCatchFunctionWrapper(function () {
    var t = o(".", "s");
    return !t.dotAll || !t.test("\n") || t.flags !== "s";
  });
}