// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'd' to 'attachmentPermSvc'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 275142
         */
module.exports = function (module, exports, require) {
  let n = require("dependency-injection-container") /*id: 555385*/.providerName("attachment-permission-service");
  require.d(exports, {
    attachmentPermSvc: function () {
      return n;
    }
  });
}