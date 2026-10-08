// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'QO' to 'matchChangeSignal'
// - Renamed export 'V0' to 'setMatchChangeSignal'
// - Renamed export 'gX' to 'updateMatchChangeSignal'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_doc-launcher.6a42d2d9.js
         * chunkId: 3577
         * moduleId: 227293
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  require("react-core-library-reexport") /*id: 634663*/;
  let [o, l, a] = docxEditorCore.createSignal("match-change-signal");
  require.d(exports, {
    matchChangeSignal: function () {
      return o;
    },
    setMatchChangeSignal: function () {
      return a;
    },
    updateMatchChangeSignal: function () {
      return l;
    }
  });
}