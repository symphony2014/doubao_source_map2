// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'validateArgCount'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: skill-pin-modal.533b7e90.js
         * chunkId: 13221
         * moduleId: 131411
         */
module.exports = function (module, exports, require) {
  function i(e, t) {
    if (t.length < e) {
      throw TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present");
    }
  }
  require.d(exports, {
    validateArgCount: function () {
      return i;
    }
  });
}