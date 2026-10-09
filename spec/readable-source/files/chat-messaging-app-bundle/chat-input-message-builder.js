// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'i_' to 'getChatReportParams'
// - Renamed export 'SU' to 'getChatConfig'
// - Renamed export 'xz' to 'createImageReportMessage'
// - Renamed export 'Tt' to 'createFileKeyMessage'
// - Renamed export 'mp' to 'getChatTrackParams'
// - Renamed export 'me' to 'createFileContentMessage'
// - Renamed export 'tz' to 'createTextMessage'
// - Renamed export 'xg' to 'ChatInputComponent'
// - Renamed export 'Z8' to 'createFileMessage'
// - Renamed export 'm0' to 'processAttachments'
// - Renamed export 'U1' to 'useChatInputStart'
// - Renamed export 'A_' to 'createImageMessage'
// - Renamed export '$c' to 'createFileAttachment'
// - Renamed export 'qK' to 'useChatInputSkill'
// - Renamed export 'eg' to 'getPreGeneratedId'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat-runtime-chunk-after-interactive.a19b580b.js
         * chunkId: 36136
         * moduleId: 659934
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var s = classnamesUtils;
  var chatEditorGuidanceSkeleton = require("chat-editor-guidance-skeleton") /*id: 583782*/;
  var conversationRateLimit = require("conversation-rate-limit") /*id: 688086*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatPluginIocManager = require("chat-plugin-ioc-manager") /*id: 232752*/;
  var chatInputStoreHelpers = require("chat-input-store-helpers") /*id: 411117*/;
  var chatGuidanceSelectors = require("chat-guidance-selectors") /*id: 441131*/;
  var chatConversationSelectors = require("chat-conversation-selectors") /*id: 783144*/;
  var chatSkillPinTypeDeterminer = require("chat-skill-pin-type-determiner") /*id: 926482*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var chatFeedConversationUtil = require("chat-feed-conversation-util") /*id: 891416*/;
  var chatGuidanceSidebarSkillHook = require("chat-guidance-sidebar-skill-hook") /*id: 478924*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  var chatSkillChangeHandlers = require("chat-skill-change-handlers") /*id: 378957*/;
  var responsiveToolButtonHook = require("responsive-tool-button-hook") /*id: 726818*/;
  var chatGuidanceConfig = require("chat-guidance-config") /*id: 801476*/;
  var useChatInputInit = require("use-chat-input-init") /*id: 569035*/;
  var chatInputPlaceholderSelector = require("chat-input-placeholder-selector") /*id: 413435*/;
  var chatTrackingUtils = require("chat-tracking-utils") /*id: 665561*/;
  var skillChatInputLogger = require("skill-chat-input-logger") /*id: 227185*/;
  var chatInputSkillHook = require("chat-input-skill-hook") /*id: 913093*/;
  var R = {
    "guidance-input": "guidance-input-SO0KB2"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var chatMessageBuilders = require("chat-message-builders") /*id: 502721*/;
  let O = e => {
    let {
      chatId: t,
      chatType: n,
      className: o,
      disabled: s,
      reportParams: l,
      placeholder: d,
      enableArouseMoreSkill: w = true,
      enableUpload: R = true,
      enableUserUpload: N = true,
      forceUseChatInputPlugin: O = false,
      specificSkillID: j
    } = e;
    let {
      isDisabled: L
    } = conversationRateLimit.useConvDisabled();
    let D = s || L;
    let [Z, z] = chatStoreManager.useStoreSelector("chatInputStore", e => [e.activeSkillTypeMap[t], e.skillMap], deepEqualityUtil_1.isDeepEqual);
    let U = chatConversationSelectors.selectConversation(t);
    let $ = chatGuidanceSidebarSkillHook.useChatGuidanceSidebarSkill(U) || (w && Z ? {
      ...(z == null ? undefined : z[Z]),
      skill_type: Z
    } : j ? z == null ? undefined : z[j] : undefined);
    let F = chatConversationSelectors.selectConvLink(t, n);
    let B = chatSkillPinTypeDeterminer.determineSkillPinType("", t);
    let {
      reportParams: W
    } = chatTrackingUtils.buildReportParams({
      chatId: t,
      chatType: n,
      activeSkill: $
    });
    let G = {
      botType: B,
      ...l,
      ...W
    };
    let {
      trackParams: K
    } = chatTrackingUtils.buildTrackParamsFromChat({
      chatId: t,
      chatType: n,
      activeSkill: $
    });
    chatSkillChangeHandlers.useChatIdChangeHandler(e => {
      chatStoreManager.getStoreState("chatInputStore").closeSkillPanel(e);
      chatIocServiceLoaderHook.loadServiceAsync("chatInputStoreService").then(e => {
        if (e != null) {
          e.resetSkillReportEvent();
        }
      });
      chatInputStoreHelpers.clearTextValue();
    });
    reactCoreLibraryReexport.useEffect(() => {
      let e = chatFeedStoreFactory.useFeedStore.subscribe(e => {
        return e.conversationMap[t]?.last_section_id;
      }, () => {
        if (!chatFeedConversationUtil.isLocalConversation(t)) {
          chatIocServiceLoaderHook.loadServiceAsync("refContentStoreService").then(e => {
            if (e != null) {
              e.clearRefContents(t, {
                retainDisableRef: true
              });
            }
          });
        }
      });
      return () => {
        e();
      };
    }, [t]);
    let H = skillChatInputLogger.useChatInputStart({
      activeSkillType: $ == null ? undefined : $.skill_type,
      reportParams: G
    });
    let {
      isToolButtonSmall: V,
      inputWidthDivRef: X
    } = responsiveToolButtonHook.useToolButtonSize();
    let q = chatGuidanceSelectors.useActiveSkillId();
    let Y = [chatAppEnums.SkillType.ReadPDF, chatAppEnums.SkillType.CodeInterpreter].includes(q);
    let Q = reactFunctionMemoHook.useMemoizedCallback(function () {
      var e = arguments.length;
      var t = Array(e);
      var n = 0;
      for (; n < e; n++) {
        t[n] = arguments[n];
      }
      if (D) {
        return Promise.resolve(false);
      } else {
        return H(...t);
      }
    });
    let {
      isNewChatInput: J,
      loading: ee
    } = chatGuidanceConfig.getChatGuidance();
    let et = J && F && !O && !q;
    let en = chatInputSkillHook.useChatInputSkill({
      chatId: t,
      chatType: n,
      disabled: D,
      trackParams: K,
      skill: $ ?? {},
      reportParams: G,
      onBeforeSubmit: Q,
      isToolButtonSmall: V
    });
    let ei = reactCoreLibraryReexport.useMemo(() => ({
      ...en,
      enableArouseMoreSkill: w,
      placeholder: d,
      enableUpload: R,
      enableUserUpload: N,
      className: o
    }), [en, w, d, R, N, o]);
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        ref: X,
        className: "h-0 w-full"
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: "w-full",
        "data-testid": "chat_input",
        "data-onboarding-id": "chat_input",
        children: ee && !O ? reactJsxRuntimeCoreReexport.jsx(chatInputPlaceholderSelector.ChatInputPlaceholderSelector, {
          className: o
        }) : et ? reactJsxRuntimeCoreReexport.jsx(M, {
          forceUseGenericInput: Y,
          activeSkill: $,
          ...ei
        }) : reactJsxRuntimeCoreReexport.jsx(A, {
          forceUseGenericInput: Y,
          activeSkill: $,
          ...ei
        })
      })]
    });
  };
  let A = reactCoreLibraryReexport.memo(function (e) {
    let {
      activeSkill: t,
      forceUseGenericInput: n,
      ...i
    } = e;
    let {
      plugin: r,
      loading: o
    } = chatPluginIocManager.chatInputPluginHook(n ? "generic" : (t == null ? undefined : t.skill_type) || "generic");
    let s = o || !r;
    useChatInputInit.useChatInputInit(s);
    if (s || !n && (r == null ? undefined : r.skillType) !== (t == null ? undefined : t.skill_type)) {
      return reactJsxRuntimeCoreReexport.jsx(chatInputPlaceholderSelector.ChatInputPlaceholderSelector, {
        className: i.className
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
        children: r == null ? undefined : r.render(i)
      });
    }
  });
  let M = reactCoreLibraryReexport.memo(function (e) {
    let {
      activeSkill: t,
      forceUseGenericInput: n,
      ...i
    } = e;
    let {
      plugin: r,
      loading: o
    } = chatPluginIocManager.guidanceInputPluginHook(n ? "generic" : (t == null ? undefined : t.skill_type) || "generic");
    let a = o || !r;
    useChatInputInit.useChatInputInit(a);
    if (a) {
      return reactJsxRuntimeCoreReexport.jsx(chatEditorGuidanceSkeleton.ChatGuidanceInput, {
        className: s(i.className, R["guidance-input"])
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx(r.Content, {
        ...i,
        className: s(i.className, R["guidance-input"]),
        exitSkillButtonTheme: "borderless"
      });
    }
  });
  require.d(exports, {
    getChatReportParams: function () {
      return chatTrackingUtils.buildReportParams;
    },
    getChatConfig: function () {
      return chatTrackingUtils.buildTrackParams;
    },
    createImageReportMessage: function () {
      return chatMessageBuilders.createImageReportMessage;
    },
    createFileKeyMessage: function () {
      return chatMessageBuilders.createFileKeyMessage;
    },
    getChatTrackParams: function () {
      return chatTrackingUtils.buildTrackParamsFromChat;
    },
    createFileContentMessage: function () {
      return chatMessageBuilders.createFileContentMessage;
    },
    createTextMessage: function () {
      return chatMessageBuilders.createTextMessage;
    },
    ChatInputComponent: function () {
      return O;
    },
    createFileMessage: function () {
      return chatMessageBuilders.createFileMessage;
    },
    processAttachments: function () {
      return chatMessageBuilders.processAttachments;
    },
    useChatInputStart: function () {
      return skillChatInputLogger.useChatInputStart;
    },
    createImageMessage: function () {
      return chatMessageBuilders.createImageMessage;
    },
    createFileAttachment: function () {
      return chatMessageBuilders.createFileAttachment;
    },
    useChatInputSkill: function () {
      return chatInputSkillHook.useChatInputSkill;
    },
    getPreGeneratedId: function () {
      return chatMessageBuilders.getPreGeneratedId;
    }
  });
}