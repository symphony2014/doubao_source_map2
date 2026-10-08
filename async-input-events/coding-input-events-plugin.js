// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'chatRouteConstants'
// - Resolved require(323118) to 'chat-route-constants'
// - Renamed variable 'i' to 'initializeModuleInstance'
// - Resolved require(233913) to 'initialize-module-instance'
// - Renamed variable 'o' to 'chatInputConstants'
// - Resolved require(918547) to 'chat-input-constants'
// - Renamed variable 's' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'a' to 'conversationMessageUtils_1'
// - Resolved require(393180) to 'conversation-message-utils_1'
// - Renamed variable 'l' to 'chatMessageStoreFactory'
// - Resolved require(794449) to 'chat-message-store-factory'
// - Renamed variable 'c' to 'skillTypeMappings'
// - Resolved require(361602) to 'skill-type-mappings'
// - Renamed variable 'u' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'd' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'p' to 'eventEmitterInstance'
// - Resolved require(842485) to 'event-emitter-instance'
// - Renamed variable 'h' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 'f' to 'apiServicesCollection'
// - Resolved require(147875) to 'api-services-collection'
// - Renamed variable 'g' to 'functionInvoker'
// - Resolved require(144910) to 'function-invoker'
// - Renamed variable 'm' to 'modalConfirmDialogManager'
// - Resolved require(948195) to 'modal-confirm-dialog-manager'
// - Renamed variable 'v' to 'samanthaButtonComponent'
// - Resolved require(307533) to 'samantha-button-component'
// - Renamed variable 'y' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'Sv' to 'getAvailableMessage' (module 393180)
// - Updated imported property 'GH' to 'createMessageStore' (module 794449)
// - Updated imported property 'e' to 'invoke' (module 144910)
// - Updated imported property 'X9' to 'i18nextTranslate' (module 852399)
// - Updated imported property 'Nu' to 'getSkillName' (module 361602)
// - Updated imported property 'T' to 'ModalConfirmDialog' (module 948195)
// - Updated imported property 'R' to 'SamanthaButton' (module 307533)
// - Updated imported property 'mH' to 'SamanthaApiService' (module 147875)
// - Updated imported property 'o' to 'initializeInstance' (module 233913)
// - Updated imported property '$' to 'chatInputConstants' (module 918547)
// - Updated imported property 'l' to 'eventEmitter' (module 842485)
// - Updated imported property 'fU' to 'routeChatRoot' (module 323118)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-input-events.8e129d94.js
         * chunkId: 25182
         * moduleId: 594337
         */
module.exports = function (module, exports, require) {
  var chatRouteConstants = require("chat-route-constants") /*id: 323118*/;
  var initializeModuleInstance = require("initialize-module-instance") /*id: 233913*/;
  var chatInputConstants = require("chat-input-constants") /*id: 918547*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var eventEmitterInstance = require("event-emitter-instance") /*id: 842485*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var functionInvoker = require("function-invoker") /*id: 144910*/;
  var modalConfirmDialogManager = require("modal-confirm-dialog-manager") /*id: 948195*/;
  var samanthaButtonComponent = require("samantha-button-component") /*id: 307533*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  class b {
    async onBeforeBreakMessage(e) {
      let {
        chatId: w
      } = e;
      if (!w) {
        return true;
      }
      let _ = conversationMessageUtils_1.getAvailableMessage(chatMessageStoreFactory.createMessageStore.getState(), w);
      if (!_) {
        return true;
      }
      let C = functionInvoker.invoke(() => ({
        title: i18nTranslationUtils.i18nextTranslate("web_ai_coding_agent_interrupt_popup_title"),
        content: i18nTranslationUtils.i18nextTranslate("web_ai_coding_agent_interrupt_popup_tips")
      }));
      let E = _.skill?.skill_id_no_default || chatAppEnums.SkillType.CodeAssistant.toString();
      teaAnalyticsEventTracker.trackEvent("message_interrupt_popup_show", {
        message_id: _.message_id,
        conversation_id: _.conversation_id,
        bot_id: _.bot_id,
        skill_id: E,
        skill_name: skillTypeMappings.getSkillName(_.skill?.skill_type_no_default || chatAppEnums.SkillType.CodeAssistant)
      });
      try {
        let e = await new Promise(e => {
          let {
            destroy: t
          } = modalConfirmDialogManager.ModalConfirmDialog.info({
            title: C.title,
            content: C.content,
            okText: i18nTranslationUtils.i18nextTranslate("web_ai_coding_agent_interrupt_popup_confirm"),
            cancelText: i18nTranslationUtils.i18nextTranslate("web_ai_coding_agent_interrupt_popup_newchat"),
            zIndex: 1099,
            footer: reactJsxRuntimeCoreReexport.jsxs("div", {
              children: [reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
                type: "tertiary",
                onClick: () => {
                  t();
                  e("navigate");
                },
                children: i18nTranslationUtils.i18nextTranslate("web_ai_coding_agent_interrupt_popup_newchat")
              }), reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
                onClick: () => {
                  t();
                  e("break");
                },
                children: i18nTranslationUtils.i18nextTranslate("web_ai_coding_agent_interrupt_popup_confirm")
              })]
            }),
            onCancel: () => e("cancel")
          });
        });
        if (e === "break") {
          teaAnalyticsEventTracker.trackEvent("message_interrupt_popup_click", {
            message_id: _.message_id,
            conversation_id: _.conversation_id,
            bot_id: _.bot_id,
            skill_id: E,
            skill_name: skillTypeMappings.getSkillName(_.skill?.skill_type_no_default || chatAppEnums.SkillType.CodeAssistant),
            button_name: "confirm"
          });
          apiServicesCollection.SamanthaApiService.InterruptCodeAsyncTask({
            conversation_id: _.conversation_id,
            section_id: _.section_id,
            message_id: _.reply_id
          }).then(e => {
            let t = e.code === 0;
            if (t) {
              initializeModuleInstance.initializeInstance.emit(chatInputConstants.chatInputConstants.inputInterrupt, _.message_id);
            }
            return t;
          }).catch(e => {});
        }
        if (e === "navigate") {
          teaAnalyticsEventTracker.trackEvent("message_interrupt_popup_click", {
            message_id: _.message_id,
            conversation_id: _.conversation_id,
            bot_id: _.bot_id,
            skill_id: E,
            skill_name: skillTypeMappings.getSkillName(_.skill?.skill_type_no_default || chatAppEnums.SkillType.CodeAssistant),
            button_name: "start_new_conversation"
          });
          eventEmitterInstance.eventEmitter.emit("route.push", {
            pathname: chatRouteConstants.routeChatRoot
          });
        }
        return false;
      } catch {
        return true;
      }
    }
    onBeforeSendMessage(e) {
      let {
        chatId: t
      } = e;
      if (!t) {
        return true;
      }
      let n = conversationMessageUtils_1.getAvailableMessage(chatMessageStoreFactory.createMessageStore.getState(), t);
      return !messageContentTypeAndStatusChecker.Lyd(n) || !messageContentTypeAndStatusChecker.O0n(n);
    }
  }
  require.r(exports);
  require.d(exports, {
    CodingInputEventsPlugin: function () {
      return b;
    }
  });
}