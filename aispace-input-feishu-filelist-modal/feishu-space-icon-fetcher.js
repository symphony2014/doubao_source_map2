// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'F' to 'createIconFetcher'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ai-space-page-new.29989e25.js
         * chunkId: 32580
         * moduleId: 79670
         */
module.exports = function (module, exports, require) {
  var feishuSpaceSdkManager = require("feishu-space-sdk-manager") /*id: 858515*/;
  let a = e => ({
    getIconBlobUrl: async t => {
      let n = e.getState().nodeInfoMap[t];
      if (n) {
        let {
          iconPreviewInfo: e
        } = n;
        try {
          let t = await feishuSpaceSdkManager.FeishuSpaceManager.getInstance().getFeishuSpaceSDK();
          let a = await (t == null ? undefined : t.requestImgFileIconSrc({
            url: e == null ? undefined : e.icon,
            key: e == null ? undefined : e.icon_key,
            iv: e == null ? undefined : e.icon_nonce,
            cipherType: String(e == null ? undefined : e.icon_encrypted_type),
            fileToken: n.key
          }));
          if (a == null ? undefined : a.data) {
            return a.data.blobUrl;
          }
        } catch (e) {}
        return "";
      }
    }
  });
  require.d(exports, {
    createIconFetcher: function () {
      return a;
    }
  });
}