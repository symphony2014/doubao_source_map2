// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'getArrayLengthSafe'
// - Resolved require(569025) to 'get-array-length-safe'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 311252
         */
module.exports = function (module, exports, require) {
  var getArrayLengthSafe = require("get-array-length-safe") /*id: 569025*/;
  module.exports = function (t, r, e) {
    var o = 0;
    var i = arguments.length > 2 ? e : getArrayLengthSafe(r);
    var a = new t(i);
    while (i > o) {
      a[o] = r[o++];
    }
    return a;
  };
}