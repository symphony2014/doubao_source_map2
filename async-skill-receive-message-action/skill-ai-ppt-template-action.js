// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'V4' to 'aiPptTemplateButton'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-action.ba18ba91.js
         * chunkId: 33086
         * moduleId: 106025
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var uuidGeneratorUtil = require("uuid-generator-util") /*id: 641535*/;
  var skillBarActionButton = require("skill-bar-action-button") /*id: 956345*/;
  var chatPanelModes = require("chat-panel-modes") /*id: 690886*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatConversationBotId = require("chat-conversation-bot-id") /*id: 619792*/;
  var chatEventEmitter = require("chat-event-emitter") /*id: 740942*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var userInfoStatusSelectors = require("user-info-status-selectors") /*id: 480327*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let _ = e => {
    let {
      messageId: n,
      floating: _ = false,
      onClick: b,
      buttonText: y,
      ...w
    } = e;
    let k = i18nTranslationUtils.useTranslationWithFallback();
    let {
      currentChatViewConfig: x
    } = chatStoreManager.useStoreSelector("chatViewCoreStore");
    let E = (x == null ? undefined : x.chatId) || "";
    let S = userInfoStatusSelectors.selectUserInfoSuccess_1();
    reactCoreLibraryReexport.useEffect(() => {
      teaAnalyticsEventTracker.trackEvent("ai_ppt_button_show", {
        conversation_id: E,
        message_id: n,
        button_name: "select_template",
        bot_id: chatConversationBotId.getConversationBotId(E)
      });
    }, []);
    let C = chatMessageStoreFactory.createMessageStore(e => {
      if (E) {
        return conversationMessageUtils_1.getMessageFromLink(e, E, {
          isLocalMessage: false,
          messageId: n
        });
      }
    });
    let T = C == null ? undefined : C.content_obj?.outline_id;
    let I = () => {
      if (!S) {
        chatIocServiceLoaderHook.loadServiceAsync("chatNavigateService").then(e => e == null ? undefined : e.navigateToLoginPage("ppt_send_message"));
        chatEventEmitter.chatEmitter.emit("chat.guest.login", {
          source: "ppt_send_message"
        });
        return;
      }
      if (E) {
        if (b) {
          b();
        }
        apiServicesCollection.SamanthaApiService.GetOutlineMeta({
          outline_id: (C == null ? undefined : C.ext?.outline_id) ?? (C == null ? undefined : C.content_obj?.outline_id) ?? ""
        }).then(e => {
          chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(t => {
            if (t == null) {
              return undefined;
            } else {
              return t.openCanvasPanel({
                conversationId: E,
                messageId: n,
                canvasLayoutState: chatPanelModes.PanelMode.CANVAS_ONLY,
                pptShowProps: {
                  id: uuidGeneratorUtil.generateUuid(),
                  initalMode: "create",
                  content: e.data?.markdown_content,
                  outlineId: C == null ? undefined : C.content_obj?.outline_id,
                  onClose: () => chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(e => e == null ? undefined : e.closeCanvasPanel())
                }
              }, undefined, false);
            }
          });
        });
        teaAnalyticsEventTracker.trackEvent("ai_ppt_button_click", {
          conversation_id: E,
          message_id: n,
          button_name: "select_template",
          bot_id: chatConversationBotId.getConversationBotId(E)
        });
      }
    };
    if (_) {
      return reactJsxRuntimeCoreReexport.jsx(skillBarActionButton.SkillBarAction, {
        ...w,
        onClick: I,
        isShow: !!T,
        "data-testid": "ppt_gen_ppt_button",
        size: "large",
        children: y || k("skill_aippt_choose_template_button")
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx(skillBarActionButton.SkillBarButton, {
        ...w,
        onClick: I,
        children: y || k("skill_aippt_choose_template_button")
      });
    }
  };
  require.d(exports, {
    aiPptTemplateButton: function () {
      return _;
    }
  });
}