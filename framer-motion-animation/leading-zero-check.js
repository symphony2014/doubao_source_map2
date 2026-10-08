// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'W' to 'hasLeadingZero'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 401.be1fef9b.js
         * chunkId: 401
         * moduleId: 952325
         */
module.exports = function (module, exports, require) {
  let i = e => /^0[^.\s]+$/u.test(e);
  require.d(exports, {
    hasLeadingZero: function () {
      return i;
    }
  });
}