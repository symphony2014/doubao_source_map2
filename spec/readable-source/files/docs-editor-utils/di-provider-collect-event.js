// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'V' to 'collectEventName'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 308105
         */
module.exports = function (module, exports, require) {
  let o = require("dependency-injection-container") /*id: 555385*/.providerName("collect-event");
  require.d(exports, {
    collectEventName: function () {
      return o;
    }
  });
}