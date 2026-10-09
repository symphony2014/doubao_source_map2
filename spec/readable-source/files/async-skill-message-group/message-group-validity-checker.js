// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'E' to 'isMessageGroupValid'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-group.90ca15b6.js
         * chunkId: 97027
         * moduleId: 397350
         */
module.exports = function (module, exports, require) {
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  let r = e => {
    var t;
    return (t = e == null ? undefined : e.every(e => messageContentTypeAndStatusChecker.xdd(e))) !== null && t !== undefined && t;
  };
  require.d(exports, {
    isMessageGroupValid: function () {
      return r;
    }
  });
}