// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'i' to 'deepEqualUtil_1'
// - Resolved require(702050) to 'deep-equal-util_1'
// - Renamed variable 'l' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'r' to 'videoPlayerBoxItem'
// - Resolved require(719010) to 'video-player-box-item'
// - Renamed variable 'o' to 'chatConversationBotId'
// - Resolved require(619792) to 'chat-conversation-bot-id'
// - Renamed variable 'a' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 's' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'c' to 'apiServicesCollection'
// - Resolved require(147875) to 'api-services-collection'
// - Renamed variable 'd' to 'reactUseChangedRef'
// - Resolved require(284850) to 'react-use-changed-ref'
// - Renamed variable 'u' to 'awemeVideoCardSymbol'
// - Resolved require(228258) to 'aweme-video-card-symbol'
// - Renamed variable 'p' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'XA' to 'AliceApiService' (module 147875)
// - Updated imported property 'S' to 'getConversationBotId' (module 619792)
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'D' to 'useChangedRef' (module 284850)
// - Updated imported property 'Z' to 'deepEqual' (module 702050)
// - Updated imported property 'j' to 'VideoPlayerBox' (module 719010)
// - Updated imported property 'a' to 'awemeVideoCardType' (module 228258)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 652482
         */
module.exports = function (module, exports, require) {
  require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var videoPlayerBoxItem = require("video-player-box-item") /*id: 719010*/;
  var chatConversationBotId = require("chat-conversation-bot-id") /*id: 619792*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var reactUseChangedRef = require("react-use-changed-ref") /*id: 284850*/;
  var awemeVideoCardSymbol = require("aweme-video-card-symbol") /*id: 228258*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function m(e, t, n) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var i = n.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  let v = function (e, t = false) {
    return {
      handleVideoClick: async e => {
        let {
          item_ids: t,
          source_from: n,
          ...i
        } = e;
        let l = {
          item_ids: t,
          ...i
        };
        let r = Number(n) !== 2 ? apiServicesCollection.AliceApiService.LoadVideoDY(l) : apiServicesCollection.AliceApiService.LoadVideoTT(l);
        let {
          data: o
        } = await r;
        return o;
      },
      handleTrackEvent: (n, i, l) => {
        if (t) {
          return;
        }
        let r = chatConversationBotId.getConversationBotId(e.conversation_id);
        let s = {
          ...i,
          bot_id: r,
          message_id: e == null ? undefined : e.message_id,
          card_type: "single_card"
        };
        teaAnalyticsEventTracker.trackEvent(n, s, l);
      }
    };
  };
  function f(e) {
    let {
      inView: t,
      message: n,
      disableTrack: o
    } = e;
    let a = i18nTranslationUtils.useTranslationWithFallback();
    let c = reactUseChangedRef.useChangedRef(messageContentTypeAndStatusChecker.RkI(n) && n.content_obj ? n.content_obj : {
      video_list: []
    }, deepEqualUtil_1.deepEqual);
    let {
      handleTrackEvent: u,
      handleVideoClick: m
    } = v(n, o);
    return reactJsxRuntimeCoreReexport.jsx(videoPlayerBoxItem.VideoPlayerBox, {
      inView: t,
      onVideoPlay: m,
      videoContent: c,
      onTrackEvent: u,
      playErrorTitle: a("video_play_error_noplay")
    });
  }
  let h = e => {
    let {
      inView: t,
      message: n
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(f, {
      inView: t,
      message: n,
      disableTrack: true
    });
  };
  class g {
    constructor() {
      m(this, "pluginIdentifier", awemeVideoCardSymbol.awemeVideoCardType);
      m(this, "Content", h);
    }
  }
  require.r(exports);
  require.d(exports, {
    ShareReceiveAwemeVideoCardPlugin: function () {
      return g;
    }
  });
}