// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Ae' to 'setShowToolbar'
// - Renamed export 'XN' to 'showToolbar'
// - Renamed export 'iv' to 'getShowToolbar'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_doc-launcher.6a42d2d9.js
         * chunkId: 3577
         * moduleId: 539453
         */
module.exports = function (module, exports, require) {
  let [r, o, l] = require("docx-editor-core") /*id: 135760*/.createSignal("show-toolbar-signal");
  require.d(exports, {
    setShowToolbar: function () {
      return l;
    },
    showToolbar: function () {
      return o;
    },
    getShowToolbar: function () {
      return r;
    }
  });
}