// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'r' to 'skillMessageParamFormat'
// - Resolved require(819707) to 'skill-message-param-format'
// - Renamed variable 'o' to 'videoMessageDataFormatter'
// - Resolved require(931033) to 'video-message-data-formatter'
// - Renamed variable 'l' to 'skillVideoMessageBox'
// - Resolved require(27511) to 'skill-video-message-box'
// - Renamed variable 'a' to 'videoGenerationErrorBoundary'
// - Resolved require(608647) to 'video-generation-error-boundary'
// - Renamed variable 's' to 'chatIocServiceLoaderHook'
// - Resolved require(31335) to 'chat-ioc-service-loader-hook'
// - Renamed variable 'c' to 'chatConversationSelectors'
// - Resolved require(783144) to 'chat-conversation-selectors'
// - Renamed variable 'd' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'u' to 'reactFunctionMemoHook'
// - Resolved require(983998) to 'react-function-memo-hook'
// - Renamed variable 'p' to 'reactErrorBoundaryWrapper'
// - Resolved require(939224) to 'react-error-boundary-wrapper'
// - Renamed variable 'h' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'Pf' to 'withErrorBoundary' (module 939224)
// - Updated imported property 'J$' to 'formatVideoMessageData' (module 931033)
// - Updated imported property 'sX' to 'selectConversation' (module 783144)
// - Updated imported property 'Z' to 'useMemoizedCallback' (module 983998)
// - Updated imported property 'D' to 'loadServiceAsync' (module 31335)
// - Updated imported property 'H' to 'formatSkillParams' (module 819707)
// - Updated imported property 'F' to 'SkillVideoMessageBox' (module 27511)
// - Updated imported property 's' to 'VideoErrorFallback' (module 608647)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-content-block.6ec955b1.js
         * chunkId: 43569
         * moduleId: 991381
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var skillMessageParamFormat = require("skill-message-param-format") /*id: 819707*/;
  var videoMessageDataFormatter = require("video-message-data-formatter") /*id: 931033*/;
  var skillVideoMessageBox = require("skill-video-message-box") /*id: 27511*/;
  var videoGenerationErrorBoundary = require("video-generation-error-boundary") /*id: 608647*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatConversationSelectors = require("chat-conversation-selectors") /*id: 783144*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  var reactErrorBoundaryWrapper = require("react-error-boundary-wrapper") /*id: 939224*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let v = reactErrorBoundaryWrapper.withErrorBoundary(function (e) {
    let {
      creationsVideoList: t,
      message: n
    } = e;
    let {
      videoListGroup: a
    } = reactCoreLibraryReexport.useMemo(() => {
      let e = t.reduce((e, t) => {
        let i = videoMessageDataFormatter.formatVideoMessageData(t.video, {
          messageId: n.message_id
        });
        if (i) {
          e.push(i);
        }
        return e;
      }, []);
      let i = e.reduce((e, t) => {
        let i = t.width / t.height;
        if (e[e.length - 1]?.ratio !== i) {
          e.push({
            ratio: i,
            videoList: []
          });
        }
        e[e.length - 1].videoList.push(t);
        return e;
      }, []);
      return {
        videoList: e,
        videoListGroup: i
      };
    }, [t]);
    let p = n.conversation_id || "";
    let v = chatConversationSelectors.selectConversation(p);
    let m = reactFunctionMemoHook.useMemoizedCallback((e, t) => {
      if (p && (t == null ? undefined : t.messageId) && t.vid) {
        e.stopPropagation();
        e.preventDefault();
        chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(e => e == null ? undefined : e.openCanvasPanel({
          conversationId: p,
          messageId: t.messageId || "",
          videoCanvasShowProps: {
            vid: t.vid,
            onClose: () => chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(e => e == null ? undefined : e.closeCanvasPanel())
          }
        }, undefined, false));
        chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(e => teaAnalyticsEventTracker.trackEvent("video_generation_result_click", {
          ...skillMessageParamFormat.formatSkillParams(n, e),
          button_name: "full_screen"
        }));
      }
    });
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: a.map((e, t) => reactJsxRuntimeCoreReexport.jsx(skillVideoMessageBox.SkillVideoMessageBox, {
        message: n,
        downloadName: v == null ? undefined : v.name,
        videoList: e.videoList,
        onClickVideo: m
      }, `${t}_${e.ratio}`))
    });
  }, {
    errorBoundaryName: "video_message_block_error",
    FallbackComponent: videoGenerationErrorBoundary.VideoErrorFallback
  });
  require.r(exports);
  require.d(exports, {
    VideoBlock: function () {
      return v;
    }
  });
}