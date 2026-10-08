// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'filterDataAttrs'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11671.ea21fc6d.js
         * chunkId: 11671
         * moduleId: 584342
         */
module.exports = function (module, exports, require) {
  function i(e) {
    return Object.keys(e).reduce((t, n) => {
      if (n.substr(0, 5) === "data-") {
        t[n] = e[n];
      }
      return t;
    }, {});
  }
  require.d(exports, {
    filterDataAttrs: function () {
      return i;
    }
  });
}