// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'r' to 'useDeepThinkingSuggestedPrompt'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 34856
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepThinkingModeLogic = require("deep-thinking-mode-logic") /*id: 202832*/;
  var modeConstants = require("mode-constants") /*id: 701817*/;
  var skillConstantsEnum = require("skill-constants-enum") /*id: 791429*/;
  var chatServiceContext = require("chat-service-context") /*id: 18590*/;
  var localResourceCheck = require("local-resource-check") /*id: 392448*/;
  var conversationMessageUtils_2 = require("conversation-message-utils_2") /*id: 149246*/;
  var messageBreakHandler = require("message-break-handler") /*id: 874388*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var conversationMessageUtils = require("conversation-message-utils") /*id: 45244*/;
  var chatToastFactoryHook = require("chat-toast-factory-hook") /*id: 219785*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var useStableObjectHook = require("use-stable-object-hook") /*id: 141660*/;
  let x = e => {
    let {
      message: t
    } = e;
    let n = () => {
      return {
        skill_id: t == null ? undefined : t.skill?.skill_id_no_default,
        skill_name: skillTypeMappings.getSkillName(t == null ? undefined : t.skill?.skill_type_no_default),
        conversation_id: t == null ? undefined : t.conversation_id,
        bot_id: t == null ? undefined : t.bot_id,
        message_id: t == null ? undefined : t.message_id,
        current_page: "chat"
      };
    };
    let i = function (e, t = {}) {
      try {
        teaAnalyticsEventTracker.trackEvent(e, {
          ...n(),
          ...t
        });
      } catch (e) {}
    };
    return useStableObjectHook.useStableObject({
      trackSuggestedPromptShow: function (e = {}) {
        i("show_suggested_prompt", {
          ...e
        });
      },
      trackSuggestedPromptSingleQuestionShow: function (e = {}) {
        i("show_suggested_prompt_single_question", {
          ...e
        });
      },
      trackClickSuggestedPrompt: function (e = {}) {
        i("click_suggested_prompt", {
          ...e
        });
      }
    });
  };
  let w = e => {
    let {
      message: t
    } = e;
    let n = i18nTranslationUtils.useTranslationWithFallback();
    let {
      sendMessage: b
    } = chatServiceContext.useChatService("chatMessageService");
    let k = chatToastFactoryHook.useToastFactory();
    let {
      replyFromMessage: y
    } = conversationMessageUtils_2.useGetMessageContext(t);
    let {
      trackClickSuggestedPrompt: w,
      trackSuggestedPromptShow: S,
      trackSuggestedPromptSingleQuestionShow: R
    } = x({
      message: t
    });
    let $ = {
      prompt_position: "1",
      suggested_type: "deep_thinking"
    };
    reactCoreLibraryReexport.useEffect(() => {
      S($);
      R($);
    }, []);
    let C = async (e, t) => {
      let {
        conversation_id: n,
        message_id: i,
        content_blocks_v2: l,
        ext: r
      } = e;
      if (!n || !l) {
        loggerServiceCore.defaultLogger.persist.error({
          error: Error("skip_deep_thinking_wrong_replyFromMessage"),
          meta: {
            conversation_id: n,
            message_id: i,
            content_blocks_v2_empty: !l
          }
        });
        return;
      }
      let o = await chatIocServiceLoaderHook.loadServiceAsync("chatIMService");
      let a = conversationMessageUtils.createMessageObject({
        conversation: conversationMessageUtils.parseConversationId(n),
        message: {
          content_blocks_v2: l,
          ext: {
            ...r,
            replace: "1",
            edit_query_id: safeJsonUtils.safeStringify([i]),
            use_deep_think_override: "0",
            use_submit_pipeline: "0"
          }
        }
      });
      if (o == null) {
        return undefined;
      } else {
        return o.sendMessage({
          message: a,
          session: {
            reportParams: t
          }
        });
      }
    };
    let T = (e, t) => b([{
      operation: {
        replace: {
          messageLink: {
            messageId: (e == null ? undefined : e.message_id) || "",
            isLocalMessage: localResourceCheck.isLocal(e)
          }
        }
      },
      reportParams: t,
      extraExt: {
        use_deep_think: "0"
      }
    }]);
    return {
      regenerateAction: {
        onRegenerateMessageClick: async () => {
          if (!(y == null ? undefined : y.message_id)) {
            k.error(n("system_error_toast"));
            throw Error("invalid message");
          }
          await messageBreakHandler.handleBrokenMessage(chatMessageStoreFactory.createMessageStore, t.conversation_id || "");
          let i = chatStoreManager.getStoreState("deepThinkingControlStore");
          let a = deepThinkingModeLogic.resolveThinkingMode(i, i.uiHasDeepThinkBtnDisabled);
          let s = {
            scene: "suggested_prompt",
            whether_use_deep_thinking: a === modeConstants.modeConstants.Pro ? skillConstantsEnum.DeepThinkingMode.WHETHER_USE_DEEP_THINKING_PRO : a === modeConstants.modeConstants.Auto ? skillConstantsEnum.DeepThinkingMode.WHETHER_USE_DEEP_THINKING_AUTO : a === modeConstants.modeConstants.On ? skillConstantsEnum.DeepThinkingMode.WHETHER_USE_DEEP_THINKING_YES : a === modeConstants.modeConstants.Off ? skillConstantsEnum.DeepThinkingMode.WHETHER_USE_DEEP_THINKING_NO : skillConstantsEnum.DeepThinkingMode.WHETHER_USE_DEEP_THINKING_NO_ENTRANCE
          };
          let c = !!(y == null ? undefined : y.content_blocks_v2?.length);
          try {
            if (c) {
              C(y, s);
            } else {
              T(y, s);
            }
            w($);
          } catch (e) {
            loggerServiceCore.defaultLogger.persist.error({
              error: e
            });
          }
        }
      }
    };
  };
  require.d(exports, {
    useDeepThinkingSuggestedPrompt: function () {
      return w;
    }
  });
}