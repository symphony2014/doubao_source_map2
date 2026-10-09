// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'receiveVideoContentSymbol'
// - Resolved require(684037) to 'receive-video-content-symbol'
// - Renamed variable 'l' to 'videoGenerationErrorBoundary'
// - Resolved require(608647) to 'video-generation-error-boundary'
// - Renamed variable 'r' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'o' to 'chatContextProviders'
// - Resolved require(793426) to 'chat-context-providers'
// - Renamed variable 'a' to 'chatContextUtil'
// - Resolved require(491849) to 'chat-context-util'
// - Renamed variable 's' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'c' to 'alertCircleRtlIcon'
// - Resolved require(397758) to 'alert-circle-rtl-icon'
// - Renamed variable 'd' to 'reactErrorBoundaryWrapper'
// - Resolved require(939224) to 'react-error-boundary-wrapper'
// - Renamed variable 'u' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'p' to 'throttledPathFilterStringify'
// - Resolved require(245841) to 'throttled-path-filter-stringify'
// - Renamed variable 'm' to 'videoPlayInfoService'
// - Resolved require(823464) to 'video-play-info-service'
// - Renamed variable 'v' to 'videoPlayerWrapper'
// - Resolved require(31773) to 'video-player-wrapper'
// - Renamed variable 'f' to 'skillTypeMappings'
// - Resolved require(361602) to 'skill-type-mappings'
// - Renamed variable 'h' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'g' to 'videoThinkingWrapper'
// - Resolved require(476422) to 'video-thinking-wrapper'
// - Renamed variable '_' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 'b' to 'userAgentDeviceDetector'
// - Resolved require(161498) to 'user-agent-device-detector'
// - Renamed variable 'k' to 'reactFunctionMemoHook'
// - Resolved require(983998) to 'react-function-memo-hook'
// - Renamed variable 'y' to 'fileDownloadUtilities'
// - Resolved require(552822) to 'file-download-utilities'
// - Renamed variable 'x' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'w' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'R' to 'canvasStylesConsts'
// - Resolved require(314168) to 'canvas-styles-consts'
// - Updated imported property 'KX' to 'isMobileOrIOS' (module 161498)
// - Updated imported property 'G' to 'getVideoPlayInfo' (module 823464)
// - Updated imported property 'Z' to 'useMemoizedCallback' (module 983998)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'Z' to 'throttledPathStr' (module 245841)
// - Updated imported property 'e' to 'VideoThinkingView' (module 476422)
// - Updated imported property 'E' to 'VideoPlayerWrapper' (module 31773)
// - Updated imported property 'Nu' to 'getSkillName' (module 361602)
// - Updated imported property 'eV' to 'downloadVideoAsMp4' (module 552822)
// - Updated imported property 'Pf' to 'withErrorBoundary' (module 939224)
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'R' to 'useChatContext' (module 491849)
// - Updated imported property '$A' to 'useThemeContext' (module 793426)
// - Updated imported property 'Z' to 'canvasClassNames' (module 314168)
// - Updated imported property 'Z' to 'AlertCircleIcon' (module 397758)
// - Updated imported property 's' to 'VideoErrorFallback' (module 608647)
// - Updated imported property 'W' to 'ReceiveVideoContent' (module 684037)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 131521
         */
module.exports = function (module, exports, require) {
  var receiveVideoContentSymbol = require("receive-video-content-symbol") /*id: 684037*/;
  var videoGenerationErrorBoundary = require("video-generation-error-boundary") /*id: 608647*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var chatContextProviders = require("chat-context-providers") /*id: 793426*/;
  var chatContextUtil = require("chat-context-util") /*id: 491849*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var alertCircleRtlIcon = require("alert-circle-rtl-icon") /*id: 397758*/;
  var reactErrorBoundaryWrapper = require("react-error-boundary-wrapper") /*id: 939224*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var throttledPathFilterStringify = require("throttled-path-filter-stringify") /*id: 245841*/;
  var videoPlayInfoService = require("video-play-info-service") /*id: 823464*/;
  var videoPlayerWrapper = require("video-player-wrapper") /*id: 31773*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var videoThinkingWrapper = require("video-thinking-wrapper") /*id: 476422*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var userAgentDeviceDetector = require("user-agent-device-detector") /*id: 161498*/;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  var fileDownloadUtilities = require("file-download-utilities") /*id: 552822*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let S = e => {
    let {
      videoID: t,
      poster: n,
      isLoading: i,
      loadingHeight: l,
      loadingWidth: r,
      loadingClassName: o,
      downloadName: a,
      reportParams: s,
      onChange: c
    } = e;
    let [d, S] = reactCoreLibraryReexport.useState("");
    let [R, $] = reactCoreLibraryReexport.useState({
      width: r,
      height: l
    });
    let C = userAgentDeviceDetector.isMobileOrIOS();
    reactCoreLibraryReexport.useEffect(() => {
      if (!i && t) {
        videoPlayInfoService.getVideoPlayInfo(t).then(e => {
          let {
            data: t,
            view_count: n
          } = e;
          S((t == null ? undefined : t.main) || (t == null ? undefined : t.backup) || "");
          if ((t == null ? undefined : t.width) && (t == null ? undefined : t.height)) {
            $({
              width: t == null ? undefined : t.width,
              height: t == null ? undefined : t.height
            });
          }
          if (n === 1) {
            if (c != null) {
              c();
            }
          }
        });
      }
    }, [t, i]);
    let T = reactFunctionMemoHook.useMemoizedCallback(e => {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "video_generation_box_player_error",
        error: (e == null ? undefined : e.originError) || Error("custom_unknown"),
        meta: {
          ...throttledPathFilterStringify.throttledPathStr(e || {}, "playerVersion", "url", "duration", "errorType", "message"),
          errorCode: `${e == null ? undefined : e.errorCode}`,
          readyState: `${e == null ? undefined : e.readyState}`,
          networkState: `${e == null ? undefined : e.networkState}`,
          mediaErrorCode: `${e == null ? undefined : e.mediaError?.code}`,
          mediaErrorMessage: e == null ? undefined : e.mediaError?.message,
          videoID: t,
          videoURL: d,
          isMobile: C,
          scene: "message_card"
        }
      });
    });
    let j = reactFunctionMemoHook.useMemoizedCallback(() => {
      teaAnalyticsEventTracker.trackEvent("video_generation_result_hover", {
        ...s
      });
    });
    if (i || !d) {
      return reactJsxRuntimeCoreReexport.jsx(videoThinkingWrapper.VideoThinkingView, {
        width: r,
        height: l,
        className: o
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx(videoPlayerWrapper.VideoPlayerWrapper, {
        url: d,
        poster: n,
        mobileWidth: C ? "50vw" : undefined,
        width: R.width || r || 480,
        height: R.height || l || 480,
        onDownload: e => {
          teaAnalyticsEventTracker.trackEvent("download", {
            ...s,
            skill_id: String(chatAppEnums.SkillType.VideoGeneration),
            skill_name: skillTypeMappings.getSkillName(chatAppEnums.SkillType.VideoGeneration),
            canvas_type: "video",
            content_type: "video",
            click_from: "video_overview"
          });
          fileDownloadUtilities.downloadVideoAsMp4(d, a || "untitled");
          e.preventDefault();
          e.stopPropagation();
        },
        onPlay: () => {
          teaAnalyticsEventTracker.trackEvent("video_generation_result_click", {
            ...s,
            button_name: "play"
          });
        },
        onReplay: () => {
          teaAnalyticsEventTracker.trackEvent("video_generation_result_click", {
            ...s,
            button_name: "replay"
          });
        },
        onComplete: () => {
          teaAnalyticsEventTracker.trackEvent("video_generation_result_show", {
            ...s,
            status: 1
          });
          loggerServiceCore.defaultLogger.persist.info({
            eventName: "video_generation_result_show",
            meta: {
              scene: "pc-video",
              status: "success",
              ...throttledPathFilterStringify.throttledPathStr(s, ["conversation_id", "message_id"])
            }
          });
        },
        onFullScreen: () => {
          teaAnalyticsEventTracker.trackEvent("video_generation_result_click", {
            ...s,
            button_name: "full_screen"
          });
        },
        onMouseEnter: j,
        onError: T
      });
    }
  };
  var canvasStylesConsts = require("canvas-styles-consts") /*id: 314168*/;
  let $ = reactErrorBoundaryWrapper.withErrorBoundary(function (e) {
    var d;
    var u;
    let {
      message: v
    } = e;
    let f = messageContentTypeAndStatusChecker.yLq(v);
    let h = (v == null ? undefined : v.content_obj?.tips) || "";
    let g = (v == null ? undefined : v.content_obj?.text) || "";
    let _ = (v == null ? undefined : v.content_obj?.vid) || "";
    let b = (v == null ? undefined : (u = v.content_obj) === null || u === undefined ? undefined : (d = u.cover) === null || d === undefined ? undefined : d.image_thumb?.url) || "";
    let k = Number((v == null ? undefined : v.content_obj?.loading_width) || 480);
    let y = Number((v == null ? undefined : v.content_obj?.loading_height) || 480);
    let x = messageContentTypeAndStatusChecker.lV9(v);
    let $ = i18nTranslationUtils.useTranslationWithFallback();
    let {
      toChatPage: C
    } = chatContextUtil.useChatContext();
    let {
      shareName: T
    } = chatContextProviders.useThemeContext() || {};
    if (x) {
      return reactJsxRuntimeCoreReexport.jsxs("div", {
        className: canvasStylesConsts.canvasClassNames.error,
        children: [reactJsxRuntimeCoreReexport.jsx(alertCircleRtlIcon.AlertCircleIcon, {
          className: "p-4 text-24 text-s-color-text-quaternary"
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: "s-font-xs-strong",
          children: g || $("skill_video_generation_failed_info")
        })]
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [h && reactJsxRuntimeCoreReexport.jsx("div", {
          className: canvasStylesConsts.canvasClassNames.tips,
          children: (e => {
            let t = "";
            let [n, i] = e.replace(/{(.*?)}/, (e, n) => {
              t = n;
              return "#";
            }).split("#");
            return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
              children: [n, reactJsxRuntimeCoreReexport.jsx("span", {
                className: canvasStylesConsts.canvasClassNames.link,
                onClick: () => {
                  if (C != null) {
                    C();
                  }
                },
                children: t
              }), i]
            });
          })(h)
        }), reactJsxRuntimeCoreReexport.jsx(S, {
          videoID: _,
          poster: b,
          isLoading: f,
          loadingHeight: y,
          loadingWidth: k,
          downloadName: T,
          reportParams: {}
        })]
      });
    }
  }, {
    errorBoundaryName: "video_message_block_error",
    FallbackComponent: videoGenerationErrorBoundary.VideoErrorFallback
  });
  function C(e, t, n) {
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
  let T = e => {
    let {
      inView: t,
      message: n,
      theme: i,
      mouseOver: l
    } = e;
    return reactJsxRuntimeCoreReexport.jsx($, {
      inView: t,
      message: n,
      theme: i,
      mouseOver: l
    });
  };
  class j {
    constructor() {
      C(this, "pluginIdentifier", receiveVideoContentSymbol.ReceiveVideoContent);
      C(this, "Content", T);
    }
  }
  require.r(exports);
  require.d(exports, {
    ShareReceiveCreateVideoContentPlugin: function () {
      return j;
    }
  });
}