// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'k' to 'isOutsideIframe'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 21824.a596cfb5.js
         * chunkId: 21824
         * moduleId: 123375
         */
module.exports = function (module, exports, require) {
  var iframeLayoutConfig = require("iframe-layout-config") /*id: 587832*/;
  function o(e) {
    return !e.closest(`.${iframeLayoutConfig.iframeContainer}`);
  }
  require.d(exports, {
    isOutsideIframe: function () {
      return o;
    }
  });
}