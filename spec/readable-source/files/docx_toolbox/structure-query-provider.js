// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'u' to 'structureQueryToken'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 388568
         */
module.exports = function (module, exports, require) {
  let o = require("dependency-injection-container") /*id: 555385*/.providerName("structure-query");
  require.d(exports, {
    structureQueryToken: function () {
      return o;
    }
  });
}