// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'F3' to 'signalValue'
// - Renamed export 'Kp' to 'setSignal'
// - Renamed export 'Wi' to 'signalName'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 717887
         */
module.exports = function (module, exports, require) {
  let [n, o, l] = require("docx-editor-core") /*id: 135760*/.createSignal("button-trigger-signal");
  require.d(exports, {
    signalValue: function () {
      return l;
    },
    setSignal: function () {
      return o;
    },
    signalName: function () {
      return n;
    }
  });
}