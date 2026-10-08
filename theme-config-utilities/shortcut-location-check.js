// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'J' to 'isShortcutEnabled'
// - Renamed export 'p' to 'isShortcutMode'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 15236.8a9a9ca2.js
         * chunkId: 15236
         * moduleId: 143162
         */
module.exports = function (module, exports, require) {
  var hashLocationProxy = require("hash-location-proxy") /*id: 753923*/;
  function o() {
    return /shortcut=true/.test(hashLocationProxy.default.search);
  }
  let a = o();
  require.d(exports, {
    isShortcutEnabled: function () {
      return a;
    },
    isShortcutMode: function () {
      return o;
    }
  });
}