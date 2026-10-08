// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'lu' to 'menuPositionSignal'
// - Renamed export 'n' to 'updateMenuPosition'
// - Renamed export 'oN' to 'menuPositionExtra'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_doc-launcher.6a42d2d9.js
         * chunkId: 3577
         * moduleId: 337387
         */
module.exports = function (module, exports, require) {
  let [r, o, l] = require("docx-editor-core") /*id: 135760*/.createSignal("update-menu-position-signal");
  require.d(exports, {
    menuPositionSignal: function () {
      return r;
    },
    updateMenuPosition: function () {
      return o;
    },
    menuPositionExtra: function () {
      return l;
    }
  });
}