// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'G' to 'localHighlightToken'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 8716.cb47e363.js
         * chunkId: 8716
         * moduleId: 790796
         */
module.exports = function (module, exports, require) {
  let r = require("dependency-injection-container") /*id: 555385*/.providerName("local-text-highlight");
  require.d(exports, {
    localHighlightToken: function () {
      return r;
    }
  });
}