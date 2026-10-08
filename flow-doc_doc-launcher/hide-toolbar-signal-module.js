// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'EA' to 'hideToolbarSignal'
// - Renamed export 'XN' to 'setHideToolbarSignal'
// - Renamed export 'tk' to 'getHideToolbarSignal'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_doc-launcher.6a42d2d9.js
         * chunkId: 3577
         * moduleId: 404524
         */
module.exports = function (module, exports, require) {
  let [r, o, l] = require("docx-editor-core") /*id: 135760*/.createSignal("hide-toolbar-signal");
  require.d(exports, {
    hideToolbarSignal: function () {
      return r;
    },
    setHideToolbarSignal: function () {
      return o;
    },
    getHideToolbarSignal: function () {
      return l;
    }
  });
}