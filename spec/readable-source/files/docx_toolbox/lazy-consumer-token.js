// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_' to 'lazyConsumerToken'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 103465
         */
module.exports = function (module, exports, require) {
  let o = require("dependency-injection-container") /*id: 555385*/.providerName("lazy-consumer");
  require.d(exports, {
    lazyConsumerToken: function () {
      return o;
    }
  });
}