// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'J$' to 'formatVideoMessageData'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 931033
         */
module.exports = function (module, exports, require) {
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var imageConfigConstants_1 = require("image-config-constants_1") /*id: 620790*/;
  let o = (e, t) => {
    if (!e) {
      return;
    }
    let {
      message_id: s,
      vid: c,
      cover: d,
      width: u,
      height: _,
      loading_width: m,
      loading_height: v,
      mobile_supported: f
    } = e;
    let p = (d == null ? undefined : d.preview_img) || (d == null ? undefined : d.image_preview);
    let h = Number(u || (p == null ? undefined : p.width) || (d == null ? undefined : d.image_thumb?.width) || m || imageConfigConstants_1.defaultHeight);
    let g = Number(_ || (p == null ? undefined : p.height) || (d == null ? undefined : d.image_thumb?.height) || v || imageConfigConstants_1.defaultWidth);
    return {
      mobileSupported: f === "1",
      messageId: s,
      vid: c,
      width: h,
      height: g,
      direction: h >= g ? "horizontal" : "vertical",
      thumbCoverUrl: (d == null ? undefined : d.image_thumb?.url) || (p == null ? undefined : p.url),
      previewCoverUrl: (p == null ? undefined : p.url) || (d == null ? undefined : d.image_thumb?.url),
      isLoading: messageContentTypeAndStatusChecker.aLQ(e),
      isSuccess: messageContentTypeAndStatusChecker.QJs(e),
      isError: messageContentTypeAndStatusChecker.xa3(e),
      errorText: e.text || "",
      ...t
    };
  };
  require.d(exports, {
    formatVideoMessageData: function () {
      return o;
    }
  });
}