// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'tryCatchFunctionWrapper'
// - Resolved require(676963) to 'try-catch-function-wrapper'
// - Resolved require(515719) to 'global-object-polyfill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 764642
         */
module.exports = function (module, exports, require) {
  var tryCatchFunctionWrapper = require("try-catch-function-wrapper") /*id: 676963*/;
  var o = require("global-object-polyfill") /*id: 515719*/.RegExp;
  var i = tryCatchFunctionWrapper(function () {
    var t = o("a", "y");
    t.lastIndex = 2;
    return t.exec("abcd") !== null;
  });
  var a = i || tryCatchFunctionWrapper(function () {
    return !o("a", "y").sticky;
  });
  var u = i || tryCatchFunctionWrapper(function () {
    var t = o("^r", "gy");
    t.lastIndex = 2;
    return t.exec("str") !== null;
  });
  module.exports = {
    BROKEN_CARET: u,
    MISSED_STICKY: a,
    UNSUPPORTED_Y: i
  };
}