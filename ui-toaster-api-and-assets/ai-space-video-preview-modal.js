// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'y' to 'VideoPreviewModal'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 34843.105268c8.js
         * chunkId: 34843
         * moduleId: 630841
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var aiActionConstants = require("ai-action-constants") /*id: 535829*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var businessLayoutConstants = require("business-layout-constants") /*id: 252973*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var reactSuspenseWrapper = require("react-suspense-wrapper") /*id: 944055*/;
  var modalDialogComponent = require("modal-dialog-component") /*id: 903195*/;
  var semiTooltipWrapper = require("semi-tooltip-wrapper") /*id: 905177*/;
  var samanthaButtonComponent = require("samantha-button-component") /*id: 307533*/;
  var rtlChatInputIcon = require("rtl-chat-input-icon") /*id: 162129*/;
  var noteStarIcon = require("note-star-icon") /*id: 440749*/;
  var useParamsResolver = require("use-params-resolver") /*id: 790576*/;
  var aiSpaceFileActionHandler = require("ai-space-file-action-handler") /*id: 90817*/;
  var mediaPreviewStore = require("media-preview-store") /*id: 28049*/;
  var aiSpaceStoreManager = require("ai-space-store-manager") /*id: 798389*/;
  var driveAiShareOverviewStore = require("drive-ai-share-overview-store") /*id: 262375*/;
  var useMediaAsrTrigger = require("use-media-asr-trigger") /*id: 8104*/;
  var chatSkillHandlerHook = require("chat-skill-handler-hook") /*id: 8286*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let S = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryWithFallback({
    fn: async () => {
      let {
        VideoPlayer: e
      } = await Promise.all([require.e("video-player-xgplayer") /*id: 2348*/, require.e("media-source-playback-engine") /*id: 36277*/, require.e("xgplayer-media-player") /*id: 12575*/, require.e("media-player-i18n-download") /*id: 64826*/, require.e("hls-video-player") /*id: 92744*/, require.e("ai-space-video-player") /*id: 36904*/]).then(require.bind(require, "ai-space-video-player-timeline-carousel") /*id: 76572*/);
      return {
        default: e
      };
    }
  })));
  let I = e => {
    let {
      disabled: i,
      disabledTip: t,
      children: n
    } = e;
    if (i && t) {
      return reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
        content: t,
        children: n
      });
    } else {
      return n;
    }
  };
  function T() {
    let {
      video: e,
      closeVideo: i
    } = mediaPreviewStore.mediaPreviewStore(e => ({
      video: e.video,
      closeVideo: e.closeVideo
    }), deepEqualityUtil_1.isDeepEqual);
    let t = i18nTranslationUtils.useTranslationWithFallback();
    let {
      token: n
    } = useParamsResolver.useParamsResolver();
    let {
      show: r,
      url: l,
      definitions: c,
      posterUrl: d
    } = e;
    let p = () => {
      setTimeout(() => {
        i();
      }, 100);
    };
    let {
      handleChatSkill: m
    } = chatSkillHandlerHook.useChatSkillHandler();
    return reactJsxRuntimeCoreReexport.jsx(modalDialogComponent.Modal, {
      className: "modal-wrapper-Q7BTGF",
      visible: r,
      header: null,
      footer: null,
      style: {
        borderRadius: "16px",
        width: "calc(100vw - 80px)",
        aspectRatio: "16/9 auto",
        maxHeight: "calc(100vh - 80px)",
        margin: "auto",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      },
      maskClosable: true,
      onCancel: p,
      children: r && reactJsxRuntimeCoreReexport.jsx(S, {
        onDefinitionClick: () => {
          teaAnalyticsEventTracker.trackEvent("file_function_click", {
            show_from: "bottom_right",
            button_name: "sharpness"
          });
        },
        onSpeedClick: () => {
          teaAnalyticsEventTracker.trackEvent("file_function_click", {
            show_from: "bottom_right",
            button_name: "speed"
          });
        },
        onFullScreenClick: () => {
          teaAnalyticsEventTracker.trackEvent("file_function_click", {
            show_from: "bottom_right",
            button_name: "zoom"
          });
        },
        definitions: c,
        url: l,
        onClose: p,
        posterUrl: d,
        speedRates: [{
          label: t("aispace_playVideo_speed", {
            s_number: 0.75
          }),
          value: 0.75
        }, {
          label: t("aispace_playVideo_speed", {
            s_number: 1
          }),
          value: 1
        }, {
          label: t("aispace_playVideo_speed", {
            s_number: 1.25
          }),
          value: 1.25
        }, {
          label: t("aispace_playVideo_speed", {
            s_number: 1.5
          }),
          value: 1.5
        }, {
          label: t("aispace_playVideo_speed", {
            s_number: 2
          }),
          value: 2
        }, {
          label: t("aispace_playVideo_speed", {
            s_number: 3
          }),
          value: 3
        }, {
          label: t("aispace_playVideo_speed", {
            s_number: 5
          }),
          value: 5
        }],
        autoPlay: true,
        scene: "aispace",
        controlSlots: reactJsxRuntimeCoreReexport.jsx(P, {
          shareId: n,
          handleChatSkill: m,
          handleClose: p
        })
      })
    });
  }
  function P(e) {
    let {
      shareId: t,
      handleChatSkill: n,
      handleClose: o
    } = e;
    let {
      video: c
    } = mediaPreviewStore.mediaPreviewStore(e => ({
      video: e.video,
      closeVideo: e.closeVideo
    }), deepEqualityUtil_1.isDeepEqual);
    let d = t ? driveAiShareOverviewStore.shareOverviewStore : aiSpaceStoreManager.useAiSpaceStore;
    let {
      nodeId: u
    } = c;
    let p = d(e => e.nodeInfoMap[u]);
    let f = aiSpaceFileActionHandler.isMediaFileActionable({
      node: p
    });
    let b = aiSpaceFileActionHandler.getMediaFileTooltip({
      node: p
    });
    let {
      handleTriggerMediaASR: S
    } = useMediaAsrTrigger.useMediaAsr();
    let T = aiSpaceFileActionHandler.getFileReviewWarning({
      node: p
    });
    let P = f && !T;
    let C = (p == null ? undefined : p.content?.aiSkillStatus) === businessLayoutConstants.ProcessState.Processing;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "flex items-center",
      children: [reactJsxRuntimeCoreReexport.jsx(I, {
        disabledTip: C ? i18nTranslationUtils.i18nextTranslate("drive_tooltip_generating_estimate", {
          s_remainTime: "5-20"
        }) : b || T,
        disabled: !P,
        children: reactJsxRuntimeCoreReexport.jsx("span", {
          children: reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
            style: {
              color: "#fff",
              fontSize: "12px",
              opacity: P ? 1 : 0.5
            },
            disabled: !C && !P,
            loading: C,
            type: "quartary",
            icon: reactJsxRuntimeCoreReexport.jsx(rtlChatInputIcon.RtlChatInputIcon, {}),
            onClick: () => {
              if ((p == null ? undefined : p.content?.aiSkillStatus) === businessLayoutConstants.ProcessState.Init) {
                S({
                  nodeId: p.id
                });
                return;
              }
              n(aiActionConstants.aiActionConstants.AISpace_VideoMindMap, p);
              o();
            },
            children: i18nTranslationUtils.i18nextTranslate("aispace_mainPage_btn_mindMap")
          })
        })
      }), reactJsxRuntimeCoreReexport.jsx(I, {
        disabledTip: C ? i18nTranslationUtils.i18nextTranslate("drive_tooltip_generating_estimate", {
          s_remainTime: "5-20"
        }) : b || T,
        disabled: !P,
        children: reactJsxRuntimeCoreReexport.jsx("span", {
          children: reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
            style: {
              color: "#fff",
              fontSize: "12px",
              opacity: P ? 1 : 0.5
            },
            loading: C,
            disabled: !C && !P,
            type: "quartary",
            icon: reactJsxRuntimeCoreReexport.jsx(noteStarIcon.NoteStarIcon, {}),
            onClick: () => {
              if ((p == null ? undefined : p.content?.aiSkillStatus) === businessLayoutConstants.ProcessState.Init) {
                S({
                  nodeId: p.id
                });
                return;
              }
              n(aiActionConstants.aiActionConstants.AISpace_VideoSummary, p);
              o();
            },
            children: i18nTranslationUtils.i18nextTranslate("aispace_mainPage_btn_summary")
          })
        })
      })]
    });
  }
  require.d(exports, {
    VideoPreviewModal: function () {
      return T;
    }
  });
}