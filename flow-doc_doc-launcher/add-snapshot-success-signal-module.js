// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'OE' to 'addSnapshotSuccessSignal'
// - Renamed export 'Vv' to 'addSnapshotSuccessSignal_1'
// - Renamed export 'eO' to 'addSnapshotSuccessSignal_2'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_doc-launcher.6a42d2d9.js
         * chunkId: 3577
         * moduleId: 809689
         */
module.exports = function (module, exports, require) {
  let [r, o, l] = require("docx-editor-core") /*id: 135760*/.createSignal("add-snapshot-success-signal");
  require.d(exports, {
    addSnapshotSuccessSignal: function () {
      return r;
    },
    addSnapshotSuccessSignal_1: function () {
      return o;
    },
    addSnapshotSuccessSignal_2: function () {
      return l;
    }
  });
}