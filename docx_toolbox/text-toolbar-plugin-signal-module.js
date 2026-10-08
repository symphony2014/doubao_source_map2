// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'MY' to 'textSignal'
// - Renamed export 'Rc' to 'toolbarSignal'
// - Renamed export 'uV' to 'pluginSignal'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 89483
         */
module.exports = function (module, exports, require) {
  let [o, i, l] = require("docx-editor-core") /*id: 135760*/.createSignal("text-toolbar-plugin-signal");
  require.d(exports, {
    textSignal: function () {
      return i;
    },
    toolbarSignal: function () {
      return o;
    },
    pluginSignal: function () {
      return l;
    }
  });
}