// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'brandNameConstants'
// - Resolved require(63170) to 'brand-name-constants'
// - Renamed variable 'i' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'o' to 'conversationMessageUtils_1'
// - Resolved require(393180) to 'conversation-message-utils_1'
// - Renamed variable 's' to 'chatMessageStoreFactory'
// - Resolved require(794449) to 'chat-message-store-factory'
// - Renamed variable 'a' to 'chatIocServiceLoaderHook'
// - Resolved require(31335) to 'chat-ioc-service-loader-hook'
// - Renamed variable 'l' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'c' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'u' to 'apiServicesCollection'
// - Resolved require(147875) to 'api-services-collection'
// - Renamed variable 'd' to 'chatUserInfoActions'
// - Resolved require(400206) to 'chat-user-info-actions'
// - Renamed variable 'p' to 'functionInvoker'
// - Resolved require(144910) to 'function-invoker'
// - Renamed variable 'h' to 'modalConfirmDialogManager'
// - Resolved require(948195) to 'modal-confirm-dialog-manager'
// - Renamed variable 'f' to 'samanthaButtonComponent'
// - Resolved require(307533) to 'samantha-button-component'
// - Renamed variable 'g' to 'deepResearchStore'
// - Resolved require(354150) to 'deep-research-store'
// - Renamed variable 'm' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'Sv' to 'getAvailableMessage' (module 393180)
// - Updated imported property 'GH' to 'createMessageStore' (module 794449)
// - Updated imported property 'e' to 'invoke' (module 144910)
// - Updated imported property 'X9' to 'i18nextTranslate' (module 852399)
// - Updated imported property 'fz' to 'getBrandName' (module 63170)
// - Updated imported property 'T' to 'ModalConfirmDialog' (module 948195)
// - Updated imported property 'R' to 'SamanthaButton' (module 307533)
// - Updated imported property 'O' to 'getDeepResearchStore' (module 354150)
// - Updated imported property 'mH' to 'SamanthaApiService' (module 147875)
// - Updated imported property 'bG' to 'getUserInfo' (module 400206)
// - Updated imported property 'D' to 'loadServiceAsync' (module 31335)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-input-events.8e129d94.js
         * chunkId: 25182
         * moduleId: 140345
         */
module.exports = function (module, exports, require) {
  var brandNameConstants = require("brand-name-constants") /*id: 63170*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var chatUserInfoActions = require("chat-user-info-actions") /*id: 400206*/;
  var functionInvoker = require("function-invoker") /*id: 144910*/;
  var modalConfirmDialogManager = require("modal-confirm-dialog-manager") /*id: 948195*/;
  var samanthaButtonComponent = require("samantha-button-component") /*id: 307533*/;
  var deepResearchStore = require("deep-research-store") /*id: 354150*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  class v {
    async onBeforeBreakMessage(e) {
      let {
        chatId: t
      } = e;
      if (!t) {
        return true;
      }
      let n = conversationMessageUtils_1.getAvailableMessage(chatMessageStoreFactory.createMessageStore.getState(), t);
      let v = functionInvoker.invoke(() => {
        let e = i18nTranslationUtils.i18nextTranslate("web_deepResearch_stopWindow_header");
        let t = i18nTranslationUtils.i18nextTranslate("web_deepResearch_stopWindow_desc", {
          brandName: brandNameConstants.getBrandName()
        });
        if (messageContentTypeAndStatusChecker.HlN(n)) {
          e = i18nTranslationUtils.i18nextTranslate("web_deepResearch_webpage_stop_header");
          t = i18nTranslationUtils.i18nextTranslate("web_deepResearch_webpage_stop_desc", {
            brandName: brandNameConstants.getBrandName()
          });
        }
        return {
          title: e,
          content: t
        };
      });
      try {
        let e = await new Promise(e => {
          let {
            destroy: n
          } = modalConfirmDialogManager.ModalConfirmDialog.info({
            title: v.title,
            content: v.content,
            okText: i18nTranslationUtils.i18nextTranslate("web_deepResearch_stopWindow_btn_stop"),
            cancelText: i18nTranslationUtils.i18nextTranslate("web_deepResearch_stopWindow_btn_newChat"),
            zIndex: 1099,
            footer: reactJsxRuntimeCoreReexport.jsxs("div", {
              children: [reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
                type: "tertiary",
                onClick: () => {
                  n();
                  e("navigate");
                },
                children: i18nTranslationUtils.i18nextTranslate("web_deepResearch_stopWindow_btn_newChat")
              }), reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
                onClick: () => {
                  n();
                  e("break");
                },
                children: i18nTranslationUtils.i18nextTranslate("web_deepResearch_stopWindow_btn_stop")
              })]
            }),
            onCancel: () => e("cancel")
          });
          deepResearchStore.getDeepResearchStore.getState().addBreakModalDestroyer(t, n);
        });
        deepResearchStore.getDeepResearchStore.getState().removeBreakModalDestroyer(t);
        if (e === "break") {
          var b;
          teaAnalyticsEventTracker.trackEvent("end_deep_research", {
            deep_research_id: n == null ? undefined : (b = n.verbose) === null || b === undefined ? undefined : b.deep_research?.deep_research_id
          });
          apiServicesCollection.SamanthaApiService.TerminalDeepResearchAgent({
            user_id: chatUserInfoActions.getUserInfo()?.user_id || 0,
            section_id: Number(n == null ? undefined : n.section_id),
            message_id: Number(n == null ? undefined : n.message_id),
            section_id_str: n == null ? undefined : n.section_id,
            message_id_str: n == null ? undefined : n.message_id
          });
        }
        if (e === "navigate") {
          chatIocServiceLoaderHook.loadServiceAsync("chatNavigateService").then(e => {
            if (e != null) {
              e.navigateToChatGuidancePage();
            }
          });
        }
        return false;
      } catch (e) {
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
      return !messageContentTypeAndStatusChecker.Gg$(n);
    }
  }
  require.r(exports);
  require.d(exports, {
    DeepResearchInputEventsPlugin: function () {
      return v;
    }
  });
}