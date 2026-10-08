// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'tryCatchFunctionWrapper'
// - Resolved require(676963) to 'try-catch-function-wrapper'
// - Renamed variable 'o' to 'isFunctionPolyfill'
// - Resolved require(142982) to 'is-function-polyfill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 948260
         */
module.exports = function (module, exports, require) {
  var tryCatchFunctionWrapper = require("try-catch-function-wrapper") /*id: 676963*/;
  var isFunctionPolyfill = require("is-function-polyfill") /*id: 142982*/;
  var i = /#|\.prototype\./;
  function a(t, r) {
    var e = c[u(t)];
    return e === s || e !== f && (isFunctionPolyfill(r) ? tryCatchFunctionWrapper(r) : !!r);
  }
  var u = a.normalize = function (t) {
    return String(t).replace(i, ".").toLowerCase();
  };
  var c = a.data = {};
  var f = a.NATIVE = "N";
  var s = a.POLYFILL = "P";
  module.exports = a;
}