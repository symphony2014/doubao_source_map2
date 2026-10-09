// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'WZ' to 'snapshotErrorState'
// - Renamed export 'jb' to 'setSnapshotError'
// - Renamed export 'pz' to 'snapshotErrorOpts'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_doc-launcher.6a42d2d9.js
         * chunkId: 3577
         * moduleId: 53431
         */
module.exports = function (module, exports, require) {
  let [r, o, l] = require("docx-editor-core") /*id: 135760*/.createSignal("add-snapshot-error-signal");
  require.d(exports, {
    snapshotErrorState: function () {
      return r;
    },
    setSnapshotError: function () {
      return l;
    },
    snapshotErrorOpts: function () {
      return o;
    }
  });
}