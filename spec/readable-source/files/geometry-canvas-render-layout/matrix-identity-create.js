// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'O4' to 'createIdentity3'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 609577
         */
module.exports = function (module, exports, require) {
  function i() {
    var t;
    try {
      t = typeof Float32Array != "undefined" ? new Float32Array(9) : Array(9);
    } catch (e) {
      t = Array(9);
    }
    t[1] = 0;
    t[2] = 0;
    t[3] = 0;
    t[5] = 0;
    t[6] = 0;
    t[7] = 0;
    t[0] = 1;
    t[4] = 1;
    t[8] = 1;
    return t;
  }
  require.d(exports, {
    createIdentity3: function () {
      return i;
    }
  });
}