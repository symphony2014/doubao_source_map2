// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'getObjectPathDefault'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 690546
         */
module.exports = function (module, exports, require) {
  var objectPathGetUtil = require("object-path-get-util") /*id: 55071*/;
  exports.getObjectPathDefault = function (e, t, n) {
    var i = e == null ? undefined : objectPathGetUtil.getObjectPath(e, t);
    if (i === undefined) {
      return n;
    } else {
      return i;
    }
  };
}