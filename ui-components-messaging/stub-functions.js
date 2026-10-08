// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'K' to 'stubHandler'
// - Renamed export 'k' to 'noopFunc'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 401.be1fef9b.js
         * chunkId: 401
         * moduleId: 319573
         */
module.exports = function (module, exports, require) {
  let i = () => {};
  let l = () => {};
  require.d(exports, {
    stubHandler: function () {
      return i;
    },
    noopFunc: function () {
      return l;
    }
  });
}