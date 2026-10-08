// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'V' to 'waitForAttachmentUploadKey'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-input-engine-submit.303ad9f1.js
         * chunkId: 12958
         * moduleId: 921016
         */
module.exports = function (module, exports, require) {
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  function a(e) {
    return new Promise(t => {
      let n;
      n = chatStoreManager.getStore("attachmentUploadStore").subscribe(t => t.preprocessTaskMap[e], e => {
        if (!e || e.failed) {
          if (n != null) {
            n();
          }
          t("");
          return;
        }
        if (e.key) {
          if (n != null) {
            n();
          }
          t(e.key);
          return;
        }
      }, {
        equalityFn: deepEqualUtil_1.deepEqual,
        fireImmediately: true
      });
    });
  }
  require.d(exports, {
    waitForAttachmentUploadKey: function () {
      return a;
    }
  });
}