// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 't' to 'AiSpaceAudioModal'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 34843.105268c8.js
         * chunkId: 34843
         * moduleId: 848652
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var aiActionConstants = require("ai-action-constants") /*id: 535829*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatFgStoreHooks = require("chat-fg-store-hooks") /*id: 583867*/;
  var chatStorageKeys = require("chat-storage-keys") /*id: 187143*/;
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
  let I = e => {
    let {
      disabled: i,
      disabledTip: t,
      children: n,
      forceToolTip: a
    } = e;
    if ((i || a) && t) {
      return reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
        content: t,
        children: n
      });
    } else {
      return n;
    }
  };
  let T = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryWithFallback({
    fn: async () => {
      let {
        AudioPlayer: e
      } = await Promise.all([require.e("xgplayer-media-player") /*id: 12575*/, require.e("ai-space-audio-player") /*id: 43982*/]).then(require.bind(require, "ai-space-audio-player") /*id: 662761*/);
      return {
        default: e
      };
    }
  })));
  function P() {
    let {
      audio: t,
      closeAudio: d
    } = mediaPreviewStore.mediaPreviewStore(e => ({
      audio: e.audio,
      closeAudio: e.closeAudio
    }), deepEqualityUtil_1.isDeepEqual);
    let {
      handleChatSkill: u
    } = chatSkillHandlerHook.useChatSkillHandler();
    let {
      token: m
    } = useParamsResolver.useParamsResolver();
    let P = m ? driveAiShareOverviewStore.shareOverviewStore : aiSpaceStoreManager.useAiSpaceStore;
    let {
      show: C,
      url: j,
      title: A,
      duration: N,
      nodeId: E
    } = t;
    let R = P().nodeInfoMap[E];
    reactCoreLibraryReexport.useEffect(() => {
      let e = () => {
        setTimeout(() => {
          d();
        }, 100);
      };
      window.addEventListener("keydown", i => {
        if (i.keyCode === 27) {
          e();
        }
      }, true);
      return () => {
        window.removeEventListener("keydown", e, true);
      };
    }, []);
    let D = i18nTranslationUtils.useTranslationWithFallback();
    let F = aiSpaceFileActionHandler.isMediaFileActionable({
      node: R
    });
    let M = aiSpaceFileActionHandler.getFileReviewWarning({
      node: R
    });
    let $ = aiSpaceFileActionHandler.getMediaFileTooltip({
      node: R
    });
    let L = chatFgStoreHooks.getSourceValue("ai_space_media_askdoubao_enable", {
      source: chatStorageKeys.chatStorageKeys.tea,
      defaultValue: false
    });
    let W = F && !M;
    let Z = (R == null ? undefined : R.content?.aiSkillStatus) === businessLayoutConstants.ProcessState.Processing;
    let {
      handleTriggerMediaASR: G
    } = useMediaAsrTrigger.useMediaAsr();
    let J = () => {
      setTimeout(() => {
        d();
      }, 100);
    };
    return reactJsxRuntimeCoreReexport.jsx(modalDialogComponent.Modal, {
      className: "modal-wrapper-I18goC",
      visible: C,
      header: null,
      footer: null,
      style: {
        borderRadius: "12px",
        maxWidth: "700px",
        minWidth: "400px",
        width: "100%",
        margin: 0,
        top: "50%",
        left: "50%",
        transform: "translateX(-50%) translateY(-50%)"
      },
      maskClosable: true,
      onCancel: J,
      children: C && reactJsxRuntimeCoreReexport.jsx(T, {
        url: j,
        onClose: J,
        title: A,
        duration: N,
        autoPlay: true,
        controlSlot: L ? reactJsxRuntimeCoreReexport.jsxs("div", {
          className: "mr-16 flex items-center justify-end",
          children: [reactJsxRuntimeCoreReexport.jsx(I, {
            disabledTip: Z ? D("drive_tooltip_generating_estimate", {
              s_remainTime: "5-20"
            }) : $ || M,
            disabled: !W,
            forceToolTip: Z,
            children: reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
              style: {
                fontSize: "12px"
              },
              disabled: !Z && !W,
              loading: (R == null ? undefined : R.content?.aiSkillStatus) === businessLayoutConstants.ProcessState.Processing,
              type: "quartary",
              icon: reactJsxRuntimeCoreReexport.jsx(rtlChatInputIcon.RtlChatInputIcon, {}),
              onClick: () => {
                if ((R == null ? undefined : R.content?.aiSkillStatus) === businessLayoutConstants.ProcessState.Init) {
                  G({
                    nodeId: R.id
                  });
                  return;
                }
                u(aiActionConstants.aiActionConstants.AISpace_AudioMindMap, R);
                J();
              },
              children: D("aispace_mainPage_btn_mindMap")
            })
          }), reactJsxRuntimeCoreReexport.jsx(I, {
            disabledTip: Z ? D("drive_tooltip_generating_estimate", {
              s_remainTime: "5-20"
            }) : $ || M,
            disabled: !W,
            forceToolTip: Z,
            children: reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
              style: {
                fontSize: "12px"
              },
              disabled: !Z && !W,
              loading: Z,
              type: "quartary",
              icon: reactJsxRuntimeCoreReexport.jsx(noteStarIcon.NoteStarIcon, {}),
              onClick: () => {
                if ((R == null ? undefined : R.content?.aiSkillStatus) === businessLayoutConstants.ProcessState.Init) {
                  G({
                    nodeId: R.id
                  });
                  return;
                }
                u(aiActionConstants.aiActionConstants.AISpace_AudioSummary, R);
                J();
              },
              children: D("aispace_mainPage_btn_summary")
            })
          })]
        }) : undefined
      })
    });
  }
  require.d(exports, {
    AiSpaceAudioModal: function () {
      return P;
    }
  });
}