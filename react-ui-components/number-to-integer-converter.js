// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'toInteger'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: skill-pin-modal.533b7e90.js
         * chunkId: 13221
         * moduleId: 156285
         */
module.exports = function (module, exports, require) {
  function i(e) {
    if (e === null || e === true || e === false) {
      return NaN;
    }
    var t = Number(e);
    if (isNaN(t)) {
      return t;
    } else if (t < 0) {
      return Math.ceil(t);
    } else {
      return Math.floor(t);
    }
  }
  require.d(exports, {
    toInteger: function () {
      return i;
    }
  });
}