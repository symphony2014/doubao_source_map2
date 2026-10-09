// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'k' to 'globalConsole'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lark-js-runtime.7be57fd6.js
         * chunkId: 1795
         * moduleId: 119183
         */
module.exports = function (module, exports, require) {
  let i = globalThis.console;
  require.d(exports, {
    globalConsole: function () {
      return i;
    }
  });
}