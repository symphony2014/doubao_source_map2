// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'P' to 'isNumericString'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 401.be1fef9b.js
         * chunkId: 401
         * moduleId: 434453
         */
module.exports = function (module, exports, require) {
  let i = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
  require.d(exports, {
    isNumericString: function () {
      return i;
    }
  });
}