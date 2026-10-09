// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'b' to 'getSophonFgConfig'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 21824.a596cfb5.js
         * chunkId: 21824
         * moduleId: 592593
         */
module.exports = function (module, exports, require) {
  let n = window.localStorage.sophon_fg;
  let o = {};
  try {
    if (n) {
      o = JSON.parse(n);
    }
  } catch (e) {}
  require.d(exports, {
    getSophonFgConfig: function () {
      return o;
    }
  });
}