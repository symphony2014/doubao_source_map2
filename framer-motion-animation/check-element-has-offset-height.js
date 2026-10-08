// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'R' to 'hasOffsetHeight'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 40135.b0349f7e.js
         * chunkId: 40135
         * moduleId: 918816
         */
module.exports = function (module, exports, require) {
  var isObjectUtil_1 = require("is-object-util_1") /*id: 688228*/;
  function r(t) {
    return isObjectUtil_1.isObject(t) && "offsetHeight" in t;
  }
  require.d(exports, {
    hasOffsetHeight: function () {
      return r;
    }
  });
}