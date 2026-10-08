// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'W' to 'mentionDocMgrToken'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 76856.d4ed01da.js
         * chunkId: 76856
         * moduleId: 303079
         */
module.exports = function (module, exports, require) {
  let r = require("dependency-injection-container") /*id: 555385*/.providerName("mention-doc-manager");
  require.d(exports, {
    mentionDocMgrToken: function () {
      return r;
    }
  });
}