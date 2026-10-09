// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'b' to 'embedObjectName'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 129397
         */
module.exports = function (module, exports, require) {
  let o = require("dependency-injection-container") /*id: 555385*/.providerName("embedObject");
  require.d(exports, {
    embedObjectName: function () {
      return o;
    }
  });
}