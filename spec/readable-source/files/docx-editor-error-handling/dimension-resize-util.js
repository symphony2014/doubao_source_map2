// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'U' to 'constrainWidth'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 338639
         */
module.exports = function (module, exports, require) {
  let n = (e, i) => {
    let {
      width: r,
      height: n
    } = e;
    if (r > i) {
      return {
        width: i,
        height: n / r * i
      };
    } else {
      return {
        width: r,
        height: n
      };
    }
  };
  require.d(exports, {
    constrainWidth: function () {
      return n;
    }
  });
}