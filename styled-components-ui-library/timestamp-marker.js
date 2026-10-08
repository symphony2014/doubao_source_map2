// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B' to 'markStart'
// - Renamed export 'x' to 'getMark'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 67342.cd008787.js
         * chunkId: 67342
         * moduleId: 77148
         */
module.exports = function (module, exports, require) {
  let i;
  function r() {
    i = Date.now();
  }
  function a() {
    let e = i;
    i = undefined;
    return e;
  }
  require.d(exports, {
    markStart: function () {
      return r;
    },
    getMark: function () {
      return a;
    }
  });
}