// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'tryCatchFunctionWrapper'
// - Resolved require(676963) to 'try-catch-function-wrapper'
// - Resolved require(515719) to 'global-object-polyfill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 956631
         */
module.exports = function (module, exports, require) {
  var tryCatchFunctionWrapper = require("try-catch-function-wrapper") /*id: 676963*/;
  var o = require("global-object-polyfill") /*id: 515719*/.RegExp;
  module.exports = tryCatchFunctionWrapper(function () {
    var t = o("(?<a>b)", "g");
    return t.exec("b").groups.a !== "b" || "b".replace(t, "$<a>c") !== "bc";
  });
}