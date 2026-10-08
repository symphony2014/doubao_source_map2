// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 't' to 'suiteIconErrorUtils'
// - Resolved require(235919) to 'suite-icon-error-utils'
// - Renamed variable 'u' to 'emojiIconAnalyticsUtil'
// - Resolved require(642105) to 'emoji-icon-analytics-util'
// - Updated imported property 'Lw' to 'IconActionTypes' (module 642105)
// - Updated imported property 'Yy' to 'EmojiTabTypes' (module 642105)
// - Updated imported property 'sB' to 'trackEmojiPanelClick' (module 642105)
// - Updated imported property 'lz' to 'trackEmojiPanelView' (module 642105)
// - Updated imported property 'hk' to 'trackIconError' (module 642105)
// - Updated imported property 'Vd' to 'trackIconSuccess' (module 642105)
// - Updated imported property 'u' to 'IconErrorCodes' (module 235919)
// - Updated imported property '$' to 'reportIconError' (module 235919)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2257.45d287be.js
         * chunkId: 2257
         * moduleId: 346342
         */
module.exports = function (module, exports, require) {
  var suiteIconErrorUtils = require("suite-icon-error-utils") /*id: 235919*/;
  var emojiIconAnalyticsUtil = require("emoji-icon-analytics-util") /*id: 642105*/;
  require.r(exports);
  require.d(exports, {
    BaseClickType: function () {
      return emojiIconAnalyticsUtil.IconActionTypes;
    },
    IconViewFailReason: function () {
      return suiteIconErrorUtils.IconErrorCodes;
    },
    PanelClickType: function () {
      return emojiIconAnalyticsUtil.EmojiTabTypes;
    },
    logChoosePanelClick: function () {
      return emojiIconAnalyticsUtil.trackEmojiPanelClick;
    },
    logChoosePanelView: function () {
      return emojiIconAnalyticsUtil.trackEmojiPanelView;
    },
    logIconUpdateFail: function () {
      return emojiIconAnalyticsUtil.trackIconError;
    },
    logIconUpdateSuccess: function () {
      return emojiIconAnalyticsUtil.trackIconSuccess;
    },
    logIconViewFail: function () {
      return suiteIconErrorUtils.reportIconError;
    }
  });
}