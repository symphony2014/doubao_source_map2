// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'safeObjectSet'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 784610
         */
module.exports = function (module, exports, require) {
  var safeObjectSetUtil = require("safe-object-set-util") /*id: 602113*/;
  exports.safeObjectSet = function (e, t, n) {
    if (e == null) {
      return e;
    } else {
      return safeObjectSetUtil.safeObjectSet(e, t, n);
    }
  };
}