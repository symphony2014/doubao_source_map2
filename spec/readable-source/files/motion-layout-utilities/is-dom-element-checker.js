// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'R' to 'isDomElement'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 46473.bc9b0de0.js
         * chunkId: 46473
         * moduleId: 34457
         */
module.exports = function (module, exports, require) {
  var isObjectUtil_1 = require("is-object-util_1") /*id: 688228*/;
  function r(t) {
    return isObjectUtil_1.isObject(t) && "offsetHeight" in t;
  }
  require.d(exports, {
    isDomElement: function () {
      return r;
    }
  });
}