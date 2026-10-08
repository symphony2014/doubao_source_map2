// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'H' to 'undoManagerProvider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_shortcut.41d20a88.js
         * chunkId: 35682
         * moduleId: 142010
         */
module.exports = function (module, exports, require) {
  let n = require("dependency-injection-container") /*id: 555385*/.providerName("undo-manager");
  require.d(exports, {
    undoManagerProvider: function () {
      return n;
    }
  });
}