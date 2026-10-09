// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'b' to 'embedObjectName'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 223936
         */
module.exports = function (module, exports, require) {
  var embedObjectProviderName = require("embed-object-provider-name") /*id: 129397*/;
  require.d(exports, {
    embedObjectName: function () {
      return embedObjectProviderName.embedObjectName;
    }
  });
}