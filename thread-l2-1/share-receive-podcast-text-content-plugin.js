// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'aiPodcastContentUtils'
// - Resolved require(942305) to 'ai-podcast-content-utils'
// - Renamed variable 'l' to 'receivePodcastContentSymbol'
// - Resolved require(570350) to 'receive-podcast-content-symbol'
// - Renamed variable 'r' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'o' to 'useLatestCallbackHook_1'
// - Resolved require(318475) to 'use-latest-callback-hook_1'
// - Renamed variable 'a' to 'podcastPlayerComponent'
// - Resolved require(701810) to 'podcast-player-component'
// - Renamed variable 's' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'Z' to 'useLatestCallback' (module 318475)
// - Updated imported property 'o' to 'PodcastPlayer' (module 701810)
// - Updated imported property 'T5' to 'isAiPodcastContent' (module 942305)
// - Updated imported property 'F' to 'receivePodcastKey' (module 570350)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 249459
         */
module.exports = function (module, exports, require) {
  var aiPodcastContentUtils = require("ai-podcast-content-utils") /*id: 942305*/;
  var receivePodcastContentSymbol = require("receive-podcast-content-symbol") /*id: 570350*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var useLatestCallbackHook_1 = require("use-latest-callback-hook_1") /*id: 318475*/;
  var podcastPlayerComponent = require("podcast-player-component") /*id: 701810*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function c(e) {
    let {
      message: t,
      disableTrack: n,
      inView: i
    } = e;
    let l = useLatestCallbackHook_1.useLatestCallback(() => undefined);
    let c = useLatestCallbackHook_1.useLatestCallback((e, t) => {
      if (!n) {
        teaAnalyticsEventTracker.trackEvent(e, {
          ...t
        });
      }
    });
    return reactJsxRuntimeCoreReexport.jsx(podcastPlayerComponent.PodcastPlayer, {
      isShare: true,
      refreshChat: l,
      message: t,
      inView: i,
      trackEventFn: c,
      hideDownload: true
    });
  }
  function d(e, t, n) {
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
  let u = e => {
    let {
      message: t
    } = e;
    if (aiPodcastContentUtils.isAiPodcastContent(t)) {
      return reactJsxRuntimeCoreReexport.jsx(c, {
        ...e,
        message: t
      });
    } else {
      return null;
    }
  };
  class p {
    constructor() {
      d(this, "pluginIdentifier", receivePodcastContentSymbol.receivePodcastKey);
      d(this, "Content", u);
    }
  }
  require.r(exports);
  require.d(exports, {
    ShareReceivePodcastTextContentPlugin: function () {
      return p;
    }
  });
}