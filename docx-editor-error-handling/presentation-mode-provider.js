// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'R' to 'presentationMode'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 712023
         */
module.exports = function (module, exports, require) {
  let n = require("dependency-injection-container") /*id: 555385*/.providerName("presentation-mode");
  require.d(exports, {
    presentationMode: function () {
      return n;
    }
  });
}