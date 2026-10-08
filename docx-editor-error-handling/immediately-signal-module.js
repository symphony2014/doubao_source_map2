// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Sg' to 'signalValue'
// - Renamed export 'oQ' to 'setSignal'
// - Renamed export 'uv' to 'resetSignal'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 734298
         */
module.exports = function (module, exports, require) {
  let [n, o, l] = require("docx-editor-core") /*id: 135760*/.createSignal("immediately-signal");
  require.d(exports, {
    signalValue: function () {
      return o;
    },
    setSignal: function () {
      return n;
    },
    resetSignal: function () {
      return l;
    }
  });
}