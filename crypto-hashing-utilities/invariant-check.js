// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'invariant'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 35713.652e82fe.js
         * chunkId: 35713
         * moduleId: 415427
         */
module.exports = function (module, exports, require) {
  function r(e, t) {
    if (!e) {
      throw Error("Invariant failed");
    }
  }
  require.d(exports, {
    invariant: function () {
      return r;
    }
  });
}