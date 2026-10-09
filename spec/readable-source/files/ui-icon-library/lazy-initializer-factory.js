// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'X' to 'createLazyInitializer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 401.be1fef9b.js
         * chunkId: 401
         * moduleId: 846121
         */
module.exports = function (module, exports, require) {
  function i(e) {
    let t;
    return () => {
      if (t === undefined) {
        t = e();
      }
      return t;
    };
  }
  require.d(exports, {
    createLazyInitializer: function () {
      return i;
    }
  });
}