// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'objectFilter'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11671.ea21fc6d.js
         * chunkId: 11671
         * moduleId: 560369
         */
module.exports = function (module, exports, require) {
  var objectForeachUtil_1_1 = require("object-foreach-util_1_1") /*id: 617264*/;
  exports.objectFilter = function (e, t) {
    var n = [];
    objectForeachUtil_1_1.objectForEach(e, function (e, i, r) {
      if (t(e, i, r)) {
        n.push(e);
      }
    });
    return n;
  };
}