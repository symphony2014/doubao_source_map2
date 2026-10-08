// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'r' to 'deepEqualityUtil_1'
// - Resolved require(550444) to 'deep-equality-util_1'
// - Renamed variable 'o' to 'isEmptyUtil'
// - Resolved require(201438) to 'is-empty-util'
// - Renamed variable 's' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'l' to 'chatInputAiFeatureConstants'
// - Resolved require(155267) to 'chat-input-ai-feature-constants'
// - Renamed variable 'u' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'c' to 'attachmentUploadStoreHooks'
// - Resolved require(793484) to 'attachment-upload-store-hooks'
// - Renamed variable 'd' to 'chatConversationSelectors'
// - Resolved require(783144) to 'chat-conversation-selectors'
// - Renamed variable 'h' to 'chatTooltipWrapper'
// - Resolved require(355361) to 'chat-tooltip-wrapper'
// - Renamed variable 'p' to 'useMergedContextHook'
// - Resolved require(203934) to 'use-merged-context-hook'
// - Renamed variable 'g' to 'arxivPdfUrlChecker_1'
// - Resolved require(82103) to 'arxiv-pdf-url-checker_1'
// - Renamed variable 'f' to 'codeAssistantFileValidator'
// - Resolved require(771278) to 'code-assistant-file-validator'
// - Renamed variable 'm' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable '_' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 'v' to 'useLatestCallbackHook_1'
// - Resolved require(318475) to 'use-latest-callback-hook_1'
// - Renamed variable 'y' to 'fileTypeDetectionUtils'
// - Resolved require(393072) to 'file-type-detection-utils'
// - Renamed variable 'b' to 'getFileExtension'
// - Resolved require(256745) to 'get-file-extension'
// - Renamed variable 'P' to 'isUndefinedCheck'
// - Resolved require(600117) to 'is-undefined-check'
// - Renamed variable 'S' to 'chatIocServiceLoaderHook'
// - Resolved require(31335) to 'chat-ioc-service-loader-hook'
// - Renamed variable 'C' to 'messagingConstants'
// - Resolved require(292449) to 'messaging-constants'
// - Renamed variable 'x' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'E' to 'attachmentStateValidator'
// - Resolved require(151792) to 'attachment-state-validator'
// - Renamed variable 'O' to 'chatInputAiPresetPrompt'
// - Resolved require(573937) to 'chat-input-ai-preset-prompt'
// - Renamed variable 'A' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'KP' to 'AiFeatureType' (module 155267)
// - Updated imported property 'k5' to 'featureSkillIdMap' (module 155267)
// - Updated imported property 'D' to 'loadServiceAsync' (module 31335)
// - Updated imported property 'MZ' to 'parseState' (module 292449)
// - Updated imported property 'Z' to 'isUndefined' (module 600117)
// - Updated imported property 'l' to 'getFileExtension' (module 256745)
// - Updated imported property 'A' to 'checkArxivPdfUrl' (module 82103)
// - Updated imported property 'Ze' to 'isPdfFile' (module 393072)
// - Updated imported property 'Be' to 'isSpreadsheetFile' (module 393072)
// - Updated imported property 'I9' to 'isCsvFile' (module 393072)
// - Updated imported property 'g' to 'isDocumentFile' (module 393072)
// - Updated imported property 'E$' to 'isPresentationFile' (module 393072)
// - Updated imported property 'sQ' to 'useStoreSelector' (module 537944)
// - Updated imported property 'X' to 'isDeepEqual' (module 550444)
// - Updated imported property 'E5' to 'getUploadConfig' (module 793484)
// - Updated imported property 't' to 'ChatTooltip' (module 355361)
// - Updated imported property 'x$' to 'useMergedContext' (module 203934)
// - Updated imported property 'jw' to 'selectConvLink' (module 783144)
// - Updated imported property 'L' to 'useAttachValidator' (module 151792)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'Z' to 'isEmpty' (module 201438)
// - Updated imported property 'GX' to 'isAssistantFile' (module 771278)
// - Updated imported property 'Z' to 'useLatestCallback' (module 318475)
// - Updated imported property 'B' to 'PresetPromptButton' (module 573937)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat-input-attachment-area.08bd2afd.js
         * chunkId: 17478
         * moduleId: 692660
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var chatInputAiFeatureConstants = require("chat-input-ai-feature-constants") /*id: 155267*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var attachmentUploadStoreHooks = require("attachment-upload-store-hooks") /*id: 793484*/;
  var chatConversationSelectors = require("chat-conversation-selectors") /*id: 783144*/;
  var chatTooltipWrapper = require("chat-tooltip-wrapper") /*id: 355361*/;
  var useMergedContextHook = require("use-merged-context-hook") /*id: 203934*/;
  var arxivPdfUrlChecker_1 = require("arxiv-pdf-url-checker_1") /*id: 82103*/;
  var codeAssistantFileValidator = require("code-assistant-file-validator") /*id: 771278*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var useLatestCallbackHook_1 = require("use-latest-callback-hook_1") /*id: 318475*/;
  var fileTypeDetectionUtils = require("file-type-detection-utils") /*id: 393072*/;
  var getFileExtension = require("get-file-extension") /*id: 256745*/;
  chatInputAiFeatureConstants.AiFeatureType.GenerateMindMap;
  chatInputAiFeatureConstants.AiFeatureType.GeneratePodcast;
  let w = (e, t) => e === t.length - 1;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var messagingConstants = require("messaging-constants") /*id: 292449*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  async function k(e) {
    let t = await chatIocServiceLoaderHook.loadServiceAsync("attachmentUploadStoreService");
    return e.filter(e => {
      if (e.type === "directory") {
        let {
          localKey: i
        } = e;
        let n = t == null ? undefined : t.getDirUploadStatus(i);
        if ((n == null ? undefined : n.percent) !== 100 || n.failed) {
          return false;
        }
      }
      return true;
    }).map(e => {
      if (e.type === "directory" || e.type === "file" && e.fileKey || e.isRepo && e.fileKey) {
        let {
          parseState: t = messagingConstants.parseState.ParseState_Default
        } = e;
        if ([messagingConstants.parseState.ParseState_Default, messagingConstants.parseState.ParseState_Processing].includes(t)) {
          return e.localKey;
        }
      }
    }).filter(e => !isUndefinedCheck.isUndefined(e));
  }
  let T = e => {
    let {
      attachmentState: t
    } = e;
    let {
      type: i,
      fileName: r,
      url: o
    } = t || {};
    let s = getFileExtension.getFileExtension(r || "");
    let a = arxivPdfUrlChecker_1.checkArxivPdfUrl(o || "");
    return {
      isMeetsMindMap: reactCoreLibraryReexport.useMemo(() => {
        switch (i) {
          case "file":
            return fileTypeDetectionUtils.isPdfFile(s);
          case "link":
            return a;
          default:
            return false;
        }
      }, [i, s, a])
    };
  };
  var attachmentStateValidator = require("attachment-state-validator") /*id: 151792*/;
  var chatInputAiPresetPrompt = require("chat-input-ai-preset-prompt") /*id: 573937*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let j = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      showPresetPrompt: s = true,
      customPresetPrompts: P,
      attachmentStates: j,
      onClickImage: M,
      onDeleteAttachment: R,
      onRetryAttachment: D,
      onClickPresetPrompt: I,
      getPreGeneratedLocalMessageId: N,
      renderArea: Z,
      disableHighlight: L,
      trackParams: B,
      containerClassName: H,
      attachmentGridClassName: F,
      submitIgnoreUploadStatus: U
    } = e;
    let K = chatStoreManager.useStoreSelector("chatViewCoreStore", e => e.currentChatViewConfig, deepEqualityUtil_1.isDeepEqual);
    let {
      enableImageVlm: z
    } = attachmentUploadStoreHooks.getUploadConfig();
    let W = j.every(e => e.type === "image");
    let {
      Tooltip: G = chatTooltipWrapper.ChatTooltip
    } = useMergedContextHook.useMergedContext();
    let $ = reactCoreLibraryReexport.useRef(null);
    reactCoreLibraryReexport.useImperativeHandle(t, () => ({
      scrollToBottom: () => {
        let e = $.current;
        if (e) {
          e.scrollTop = e.scrollHeight;
        }
      }
    }));
    let V = chatConversationSelectors.selectConvLink((K == null ? undefined : K.chatId) || "", K == null ? undefined : K.chatType);
    let {
      success: q,
      tips: X
    } = attachmentStateValidator.useAttachValidator({
      attachmentStates: j,
      trackParams: B ?? {},
      scene: "attachmentArea",
      submitIgnoreUploadStatus: U
    });
    let Q = chatStoreManager.useStoreSelector("chatInputStore", e => e.activeSkillTypeMap[(K == null ? undefined : K.chatId) || ""]);
    let {
      supportCodeSkill: Y,
      supportPodcastSkill: J,
      supportAiSlidesSkill: ee
    } = chatStoreManager.useStoreSelector("chatInputStore", e => ({
      supportCodeSkill: e.checkSupportSkill(chatAppEnums.SkillType.CodeAssistant),
      supportPodcastSkill: e.checkSupportSkill(chatAppEnums.SkillType.SkillAiPodcast),
      supportAiSlidesSkill: e.checkSupportSkill(chatAppEnums.SkillType.AIPPTSlides)
    }));
    let et = J && (!Q || Q === chatAppEnums.SkillType.SkillAiPodcast);
    let ei = ee && !Q;
    (function (e, t, i) {
      let r = reactCoreLibraryReexport.useRef(null);
      reactCoreLibraryReexport.useEffect(() => {
        let n = 0;
        let o = true;
        async function s() {
          let a = await chatIocServiceLoaderHook.loadServiceAsync("attachmentUploadStoreService");
          let l = await k(e);
          if (l.length !== 0) {
            if (n > 10 && o) {
              o = false;
              loggerServiceCore.defaultLogger.persist.error({
                eventName: "ChatInputPreHandle_preParse_polling_exceeds_overLongPollingTimes",
                error: Error("[ChatInputPreHandle]: preParse polling exceeds 10 times"),
                meta: {
                  fileCount: l.length
                }
              });
            }
            if (n > 100) {
              for (let t of l) {
                if (a != null) {
                  a.updateAttachmentParseState(t, messagingConstants.parseState.ParseState_Failed);
                }
                let i = e.find(e => {
                  let {
                    localKey: i
                  } = e;
                  return t === i;
                });
                loggerServiceCore.defaultLogger.persist.error({
                  eventName: "ChatInputPreHandle_preParse_polling_single_failed",
                  error: Error("[ChatInputPreHandle]: preParse polling exceeds 100 times"),
                  meta: {
                    fileCount: l.length,
                    localKey: t,
                    fileType: i == null ? undefined : i.type,
                    fileSize: i == null ? undefined : i.size,
                    uploadWay: i == null ? undefined : i.uploadWay
                  }
                });
              }
              loggerServiceCore.defaultLogger.persist.error({
                eventName: "ChatInputPreHandle_preParse_polling_failed",
                error: Error("[ChatInputPreHandle]: preParse polling exceeds 100 times"),
                meta: {
                  fileCount: l.length
                }
              });
              return;
            }
            if (a != null) {
              a.fetchAndUpdateParseState(l, t, i);
            }
            n++;
            r.current = window.setTimeout(s, 3000);
          }
        }
        r.current = window.setTimeout(s, 300);
        return () => {
          if (r.current) {
            clearTimeout(r.current);
          }
          r.current = null;
        };
      }, [e]);
    })(j, Q, Y);
    let {
      isMeetsMindMap: en
    } = T({
      attachmentState: j[0]
    });
    let er = arxivPdfUrlChecker_1.checkArxivPdfUrl(j[0]?.type === "link" && j[0].url || "");
    let eo = reactCoreLibraryReexport.useMemo(() => {
      if (j.length === 0) {
        return [];
      }
      if (P && !isEmptyUtil.isEmpty(P)) {
        return P;
      }
      let e = j.every(e => e.type === "link");
      let t = Y && j.every(e => e.type === "file" && codeAssistantFileValidator.isAssistantFile(e.fileName));
      let i = j.every(e => e.type === "file" && (fileTypeDetectionUtils.isSpreadsheetFile(getFileExtension.getFileExtension(e.fileName)) || fileTypeDetectionUtils.isCsvFile(getFileExtension.getFileExtension(e.fileName))));
      let n = j.length === 1 && j[0].type === "directory";
      let r = j.length === 1 && j[0].isRepo;
      if (n) {
        return [chatInputAiFeatureConstants.AiFeatureType.IntroFolder, chatInputAiFeatureConstants.AiFeatureType.UsageFolder];
      }
      if (r) {
        return [chatInputAiFeatureConstants.AiFeatureType.IntroRepo];
      }
      let s = j.some(e => e.type === "image");
      if (W) {
        if (z) {
          return [chatInputAiFeatureConstants.AiFeatureType.ExplainImage];
        } else {
          return [chatInputAiFeatureConstants.AiFeatureType.SummarizeImage, chatInputAiFeatureConstants.AiFeatureType.ExtractTextFromImage];
        }
      }
      if (s) {
        return [];
      }
      if (Q === chatAppEnums.SkillType.CodeAssistant && i) {
        return [chatInputAiFeatureConstants.AiFeatureType.AnalyzeQueryData];
      }
      let a = !Q && t;
      if (Q === chatAppEnums.SkillType.CodeAssistant || a) {
        return [chatInputAiFeatureConstants.AiFeatureType.IntroFile, chatInputAiFeatureConstants.AiFeatureType.UsageFile];
      }
      if (e && !er) {
        let e = [chatInputAiFeatureConstants.AiFeatureType.SummarizeWebsite, chatInputAiFeatureConstants.AiFeatureType.HighlightWebsite, chatInputAiFeatureConstants.AiFeatureType.CreateByWebsite];
        if (en) {
          e.push(chatInputAiFeatureConstants.AiFeatureType.GenerateMindMap);
        }
        if (et) {
          e.push(chatInputAiFeatureConstants.AiFeatureType.GeneratePodcast);
        }
        return e;
      }
      if (j.length === 1) {
        let e = [chatInputAiFeatureConstants.AiFeatureType.SummarizeSingle, chatInputAiFeatureConstants.AiFeatureType.HighlightSingle];
        let t = getFileExtension.getFileExtension(j[0].fileName || "");
        if (ei && (fileTypeDetectionUtils.isDocumentFile(t) || fileTypeDetectionUtils.isPdfFile(t) || er)) {
          let t = e.indexOf(chatInputAiFeatureConstants.AiFeatureType.HighlightSingle);
          if (t !== -1) {
            e.splice(t, 1, chatInputAiFeatureConstants.AiFeatureType.GeneratePPT);
          }
        }
        if (fileTypeDetectionUtils.isDocumentFile(t)) {
          e.push(chatInputAiFeatureConstants.AiFeatureType.CreateByDoc);
        }
        if (fileTypeDetectionUtils.isPresentationFile(t)) {
          e.push(chatInputAiFeatureConstants.AiFeatureType.CreateByPPT);
        }
        if (en) {
          e.push(chatInputAiFeatureConstants.AiFeatureType.GenerateMindMap);
        }
        if ((fileTypeDetectionUtils.isPdfFile(t) || er) && et) {
          e.push(chatInputAiFeatureConstants.AiFeatureType.GeneratePodcast);
        }
        return e;
      }
      return [chatInputAiFeatureConstants.AiFeatureType.SummarizeMultiple, chatInputAiFeatureConstants.AiFeatureType.HighlightMultiple, chatInputAiFeatureConstants.AiFeatureType.MakeQuiz];
    }, [j, W, en]);
    let es = reactCoreLibraryReexport.useId();
    let ea = useLatestCallbackHook_1.useLatestCallback(async (e, t) => {
      if (q) {
        teaAnalyticsEventTracker.trackEvent("attachment_suggest_prompt_show", {
          attachment_cnt: j.length,
          upload_id: (await (N == null ? undefined : N())) || "",
          collection_id: String(j[0].fileKey || ""),
          prompt_position: t !== undefined ? String(t + 1) : "",
          title: chatInputAiFeatureConstants.featureSkillIdMap[eo[t !== undefined ? t : -1] || ""],
          id: es
        });
      }
    });
    let el = useLatestCallbackHook_1.useLatestCallback(async (e, t, i) => {
      if (q) {
        teaAnalyticsEventTracker.trackEvent("attachment_suggest_prompt_click", {
          attachment_cnt: j.length,
          upload_id: (await (N == null ? undefined : N())) || "",
          collection_id: String(j[0].fileKey || ""),
          prompt_position: i !== undefined ? String(i + 1) : "",
          title: chatInputAiFeatureConstants.featureSkillIdMap[t]
        });
      }
      if (I != null) {
        I(e, t);
      }
    });
    let eu = !!X;
    let ec = chatInputAiPresetPrompt.PresetPromptButton({
      disableHighlight: L,
      onClickPresetPrompt: el,
      attachmentCanSend: q,
      onPresetPromptShow: ea
    });
    let ed = reactCoreLibraryReexport.useMemo(() => {
      if (V && s) {
        if (X) {
          return reactJsxRuntimeCoreReexport.jsx("div", {
            className: "flex flex-wrap gap-8 overflow-hidden pt-12",
            children: eo.map((e, t) => reactJsxRuntimeCoreReexport.jsx(G, {
              content: X,
              className: a(!eu && "!hidden", "text-11 leading-14"),
              children: ec(e, w(t, eo), t)
            }, e))
          });
        } else {
          return reactJsxRuntimeCoreReexport.jsx("div", {
            className: "flex flex-wrap gap-8 overflow-hidden pt-12",
            children: eo.map((e, t) => ec(e, w(t, eo), t))
          });
        }
      }
    }, [V, s, X, eo, ec, q, eu]);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: a("container-tJHWhP", "flex flex-col pl-12 pr-2", H),
      "data-testid": "attachment_area",
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        ref: $,
        className: a("relative max-h-137 pr-10 hover:pr-3 border-box overflow-y-scroll flow-scrollbar pt-12", F),
        children: Z({
          attachmentStates: j,
          onClickImage: M,
          onDeleteAttachment: R,
          onRetryAttachment: D
        })
      }), ed]
    });
  });
  require.r(exports);
  require.d(exports, {
    AttachmentArea: function () {
      return j;
    }
  });
}