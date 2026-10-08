// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A' to 'getSyncedBlockUrl'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 784437
         */
module.exports = function (module, exports, require) {
  var docxShortcutFeatureDetection = require("docx-shortcut-feature-detection") /*id: 407607*/;
  var syncedBlockUrlManager = require("synced-block-url-manager") /*id: 70948*/;
  function l(e) {
    let n = syncedBlockUrlManager.syncedBlockUrlMgr.getUrlBySyncedBlockToken(e);
    if (!n) {
      if (docxShortcutFeatureDetection.isShortcutEnabled() || docxShortcutFeatureDetection.isPDFMode()) {
        n = `https://bytedance.feishu.cn/sync/${e}`;
      } else {
        let o = (window.realLocation?.origin || document.location.origin).replace(/docsource:/, "https:");
        n = `${o}/sync/${e}`;
      }
    }
    return n;
  }
  require.d(exports, {
    getSyncedBlockUrl: function () {
      return l;
    }
  });
}