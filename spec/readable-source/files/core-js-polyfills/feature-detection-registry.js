// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'safeFunctionExecutor'
// - Resolved require(4842) to 'safe-function-executor'
// - Renamed variable 'o' to 'isFunctionCheck'
// - Resolved require(705647) to 'is-function-check'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 696668
         */
module.exports = function (module, exports, require) {
  var safeFunctionExecutor = require("safe-function-executor") /*id: 4842*/;
  var isFunctionCheck = require("is-function-check") /*id: 705647*/;
  var i = /#|\.prototype\./;
  function u(t, r) {
    var n = s[c(t)];
    return n === a || n !== f && (isFunctionCheck(r) ? safeFunctionExecutor(r) : !!r);
  }
  var c = u.normalize = function (t) {
    return String(t).replace(i, ".").toLowerCase();
  };
  var s = u.data = {};
  var f = u.NATIVE = "N";
  var a = u.POLYFILL = "P";
  module.exports = u;
}