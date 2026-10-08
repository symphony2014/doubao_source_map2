// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'H0' to 'isBrowserEnvironment'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 439836
         */
module.exports = function (module, exports, require) {
  require("browser-environment-detection-utils") /*id: 744607*/;
  require("bool-default-getter-util") /*id: 855627*/;
  require("sync-url-block-utils") /*id: 299195*/;
  let o = () => false;
  require.d(exports, {
    isBrowserEnvironment: function () {
      return o;
    }
  });
}