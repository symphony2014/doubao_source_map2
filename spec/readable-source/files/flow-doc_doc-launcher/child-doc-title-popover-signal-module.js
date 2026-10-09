// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'iB' to 'popoverSignal'
// - Renamed export 'sF' to 'titleSignal'
// - Renamed export 'tm' to 'childDocSignal'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_doc-launcher.6a42d2d9.js
         * chunkId: 3577
         * moduleId: 882121
         */
module.exports = function (module, exports, require) {
  let [r, o, l] = require("docx-editor-core") /*id: 135760*/.createSignal("child-doc-title-popover-signal");
  require.d(exports, {
    popoverSignal: function () {
      return l;
    },
    titleSignal: function () {
      return r;
    },
    childDocSignal: function () {
      return o;
    }
  });
}