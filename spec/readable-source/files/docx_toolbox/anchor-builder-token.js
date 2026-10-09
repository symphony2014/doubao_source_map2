// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'f' to 'anchorBuilderToken'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: module_block_file.6e021e7d.js
         * chunkId: 12558
         * moduleId: 729431
         */
module.exports = function (module, exports, require) {
  let r = require("dependency-injection-container") /*id: 555385*/.providerName("anchor-builder");
  require.d(exports, {
    anchorBuilderToken: function () {
      return r;
    }
  });
}