// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'L' to 'blockVisibilityProvider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 46719
         */
module.exports = function (module, exports, require) {
  let n = require("dependency-injection-container") /*id: 555385*/.providerName("block-visibility");
  require.d(exports, {
    blockVisibilityProvider: function () {
      return n;
    }
  });
}