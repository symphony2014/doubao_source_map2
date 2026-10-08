// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'KI' to 'clearLinkPanel'
// - Renamed export 'N6' to 'linkPanelSignal'
// - Renamed export 'pg' to 'toggleLinkPanel'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 930237
         */
module.exports = function (module, exports, require) {
  let [o, i, l] = require("docx-editor-core") /*id: 135760*/.createSignal("edit-link-panel-toggle-signal");
  require.d(exports, {
    clearLinkPanel: function () {
      return l;
    },
    linkPanelSignal: function () {
      return o;
    },
    toggleLinkPanel: function () {
      return i;
    }
  });
}