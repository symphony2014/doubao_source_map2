// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatVideoTimestampSymbol'
// - Resolved require(62607) to 'chat-video-timestamp-symbol'
// - Renamed variable 'r' to 'objectMatchUtil'
// - Resolved require(941914) to 'object-match-util'
// - Renamed variable 'o' to 'chatMessageContentRenderer_1'
// - Resolved require(783136) to 'chat-message-content-renderer_1'
// - Renamed variable 'a' to 'chatEventEmitter'
// - Resolved require(740942) to 'chat-event-emitter'
// - Renamed variable 'l' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 's' to 'secondsToTimeFormat'
// - Resolved require(279117) to 'seconds-to-time-format'
// - Renamed variable 'c' to 'desktopTimestampUrlHandler'
// - Resolved require(98217) to 'desktop-timestamp-url-handler'
// - Renamed variable 'd' to 'chatTimestampRenderer'
// - Resolved require(644303) to 'chat-timestamp-renderer'
// - Resolved require(234080) to 'doubao-config-constants_1'
// - Renamed variable '_' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property '_u' to 'wwwDomain' (module 234080)
// - Updated imported property 'Z' to 'checkObjectMatch' (module 941914)
// - Updated imported property 'v' to 'formatSecondsToTime' (module 279117)
// - Updated imported property 'q2' to 'openTimestampedUrl' (module 98217)
// - Updated imported property 'CQ' to 'addTimestampToUrl' (module 98217)
// - Updated imported property 'v' to 'chatEmitter' (module 740942)
// - Updated imported property 'rd' to 'ChatMessageContentRenderer' (module 783136)
// - Updated imported property 'o' to 'renderChatTimestamps' (module 644303)
// - Updated imported property 'D' to 'videoTimestampSymbol' (module 62607)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 629270
         */
module.exports = function (module, exports, require) {
  var chatVideoTimestampSymbol = require("chat-video-timestamp-symbol") /*id: 62607*/;
  var objectMatchUtil = require("object-match-util") /*id: 941914*/;
  var chatMessageContentRenderer_1 = require("chat-message-content-renderer_1") /*id: 783136*/;
  var chatEventEmitter = require("chat-event-emitter") /*id: 740942*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var secondsToTimeFormat = require("seconds-to-time-format") /*id: 279117*/;
  var desktopTimestampUrlHandler = require("desktop-timestamp-url-handler") /*id: 98217*/;
  var chatTimestampRenderer = require("chat-timestamp-renderer") /*id: 644303*/;
  let u = ["beta.doubao.com", "www.doubao.com", "inhouse.doubao.com", "beta.dola.com", "www.dola.com", "beta.cici.com", "www.cici.com", "beta.ciciai.com", "www.ciciai.com", "inhouse.ciciai.com", require("doubao-config-constants_1") /*id: 234080*/.wwwDomain];
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let m = e => {
    let {
      inView: t,
      message: n
    } = e;
    let i = objectMatchUtil.checkObjectMatch(u, e => {
      var t;
      if ((t = window.location.href) === null || t === undefined) {
        return undefined;
      } else {
        return t.includes(e);
      }
    });
    let m = (e, t, r) => {
      if (e) {
        teaAnalyticsEventTracker.trackEvent("highlights_timeline_singleshow", {
          current_page: i ? "chat" : "web_otherpage",
          web_address: i ? undefined : new URL(e).host,
          is_sidebar: +!i,
          video_time: t,
          position: r.toString(),
          message_id: n.message_id
        });
      }
    };
    let v = (e, t, r) => {
      if (e && !(t < 0)) {
        teaAnalyticsEventTracker.trackEvent("highlights_timeline_singleclick", {
          current_page: i ? "chat" : "web_otherpage",
          web_address: i ? undefined : new URL(e).host,
          is_sidebar: +!i,
          video_time: secondsToTimeFormat.formatSecondsToTime(t),
          position: r.toString(),
          message_id: n.message_id
        });
        if (i) {
          desktopTimestampUrlHandler.openTimestampedUrl(e, t);
          return;
        }
        chatEventEmitter.chatEmitter.emit("chat.message.click-video-timestamp-ref", {
          url: desktopTimestampUrlHandler.addTimestampToUrl(e, t),
          timestamp: t
        });
      }
    };
    return reactJsxRuntimeCoreReexport.jsx(chatMessageContentRenderer_1.ChatMessageContentRenderer, {
      inView: t,
      message: n,
      messageBlockText: undefined,
      messageBlockTextFinish: undefined,
      messageBlockTextBroken: undefined,
      customRenderOptions: {
        useCustomReplacementElements: e => chatTimestampRenderer.renderChatTimestamps({
          ...e,
          onClickRef: v,
          isSideChat: !i,
          reportTimestampShow: m
        })
      }
    });
  };
  function v(e, t, n) {
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
  class f {
    constructor() {
      v(this, "pluginIdentifier", chatVideoTimestampSymbol.videoTimestampSymbol);
      v(this, "Content", m);
    }
  }
  require.r(exports);
  require.d(exports, {
    ReceiveVideoTimestampTextContent: function () {
      return f;
    }
  });
}