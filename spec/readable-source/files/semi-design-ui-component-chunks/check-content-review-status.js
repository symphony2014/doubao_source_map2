// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'v' to 'checkReviewStatus'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 38149.8ce71c62.js
         * chunkId: 38149
         * moduleId: 312453
         */
module.exports = function (module, exports, require) {
  var businessLayoutConstants = require("business-layout-constants") /*id: 252973*/;
  var getFileExtension = require("get-file-extension") /*id: 256745*/;
  function o(e, t, n) {
    if (!(t == null ? undefined : t.length)) {
      return true;
    }
    if (!e || e.nodeType !== undefined && (n == null ? undefined : n.includes(e.nodeType))) {
      return false;
    }
    let s = e.riskReviewStatus !== businessLayoutConstants.ReviewStatus.Pass || e.nameReviewStatus !== businessLayoutConstants.ReviewStatus.Pass || e.contentReviewStatus !== businessLayoutConstants.ReviewStatus.Pass;
    let l = t.includes(e.content?.linkFileType || getFileExtension.getFileExtension(e.name ?? ""));
    return !s && l;
  }
  require.d(exports, {
    checkReviewStatus: function () {
      return o;
    }
  });
}