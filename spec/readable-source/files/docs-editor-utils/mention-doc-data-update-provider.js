// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'm' to 'mentionDocDataToken'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 387558
         */
module.exports = function (module, exports, require) {
  let o = require("dependency-injection-container") /*id: 555385*/.providerName("mention-doc-data-update");
  require.d(exports, {
    mentionDocDataToken: function () {
      return o;
    }
  });
}