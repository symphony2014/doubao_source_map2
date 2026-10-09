// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'k' to 'syncedRefPermToken'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 575078
         */
module.exports = function (module, exports, require) {
  let o = require("dependency-injection-container") /*id: 555385*/.providerName("syncedReferencePermissionManager");
  require.d(exports, {
    syncedRefPermToken: function () {
      return o;
    }
  });
}