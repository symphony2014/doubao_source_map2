// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Y' to 'normalizeValue'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 401.be1fef9b.js
         * chunkId: 401
         * moduleId: 854139
         */
module.exports = function (module, exports, require) {
  let i = (e, t, n) => {
    let i = t - e;
    if (i === 0) {
      return 1;
    } else {
      return (n - e) / i;
    }
  };
  require.d(exports, {
    normalizeValue: function () {
      return i;
    }
  });
}