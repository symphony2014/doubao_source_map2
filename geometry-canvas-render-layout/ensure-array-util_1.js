// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'ensureArray'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 155564
         */
module.exports = function (module, exports, require) {
  var arrayIsArrayUtil = require("array-is-array-util") /*id: 447761*/;
  function r(t) {
    if (arrayIsArrayUtil.isArray(t)) {
      return t;
    } else {
      return [t];
    }
  }
  require.d(exports, {
    ensureArray: function () {
      return r;
    }
  });
}