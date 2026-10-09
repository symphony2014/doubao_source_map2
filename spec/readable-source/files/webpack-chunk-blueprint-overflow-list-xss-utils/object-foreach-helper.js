// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'createObjectForEach'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 629345
         */
module.exports = function (module, exports, require) {
  var objectForeachUtil_1 = require("object-foreach-util_1") /*id: 240439*/;
  var getOwnKeys = require("get-own-keys") /*id: 362947*/;
  exports.createObjectForEach = function (e, t) {
    return e && objectForeachUtil_1.createForEach(e, t, getOwnKeys.getOwnKeys);
  };
}