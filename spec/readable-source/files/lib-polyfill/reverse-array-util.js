// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'getArrayLengthSafe'
// - Resolved require(569025) to 'get-array-length-safe'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 336328
         */
module.exports = function (module, exports, require) {
  var getArrayLengthSafe = require("get-array-length-safe") /*id: 569025*/;
  module.exports = function (t, r) {
    var e = getArrayLengthSafe(t);
    var o = new r(e);
    var i = 0;
    for (; i < e; i++) {
      o[i] = t[e - i - 1];
    }
    return o;
  };
}