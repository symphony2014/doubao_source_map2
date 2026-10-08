// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'i' to 'connectionStatus'
// - Renamed export 'p' to 'defaultResolution'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 63418.ca113907.js
         * chunkId: 63418
         * moduleId: 832973
         */
module.exports = function (module, exports, require) {
  var n;
  let r = {
    width: 1280,
    height: 960
  };
  (n = {}).CONNECT_FAILED = "connect_failed";
  n.DISCONNECT = "disconnect";
  let i = n;
  require.d(exports, {
    connectionStatus: function () {
      return i;
    },
    defaultResolution: function () {
      return r;
    }
  });
}