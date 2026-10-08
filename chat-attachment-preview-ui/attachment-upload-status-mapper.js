// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'e' to 'getAttachmentUploadStatus'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17138.c8e89dec.js
         * chunkId: 17138
         * moduleId: 909739
         */
module.exports = function (module, exports, require) {
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var statusConstants = require("status-constants") /*id: 356183*/;
  let a = e => {
    let {
      attachments: t
    } = e;
    let n = chatStoreManager.useStoreSelector("attachmentUploadStore", e => t.reduce((t, n) => {
      let i = Object.values(e.preprocessTaskMap).find(e => e.localKey === n.fileKey);
      if (i) {
        t[n.fileKey] = {
          uploadStatus: i.loading ? statusConstants.statusTypes.Processing : i.failed ? statusConstants.statusTypes.Failed : statusConstants.statusTypes.Success,
          uploadPercent: i.percent ?? 100
        };
      }
      return t;
    }, {}), deepEqualUtil_1.deepEqual);
    let a = Object.keys(n).length > 0;
    return {
      uploadingInfoMap: n,
      hasUploadingAttachments: a
    };
  };
  require.d(exports, {
    getAttachmentUploadStatus: function () {
      return a;
    }
  });
}