// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'g' to 'DeepSearchErrorRetry'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-action.ba18ba91.js
         * chunkId: 33086
         * moduleId: 718314
         */
module.exports = function (module, exports, require) {
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var chatServiceContext = require("chat-service-context") /*id: 18590*/;
  var localResourceCheck = require("local-resource-check") /*id: 392448*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var semiButtonWrapperComponent = require("semi-button-wrapper-component") /*id: 654274*/;
  var rtlInfoIcon = require("rtl-info-icon") /*id: 853560*/;
  var eventReportingService = require("event-reporting-service") /*id: 703133*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let g = e => {
    let {
      className: r,
      message: g
    } = e;
    let h = i18nTranslationUtils.useTranslationWithFallback();
    let {
      sendMessage: _
    } = chatServiceContext.useChatService("chatMessageService");
    let b = objectPathGetDefault.getObjectPathDefault(g, ["ext", "deep_search_error"]);
    let y = safeJsonUtils.safeParse(b, {})?.error_message ?? "";
    let w = eventReportingService.createEventReporter({
      eventName: "retry_send_deep_search_message"
    });
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: o("contain-gaLXGb", r),
      children: [reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "error-YfZMEO",
        children: [reactJsxRuntimeCoreReexport.jsx(rtlInfoIcon.RtlInfoIcon, {
          className: "text-16"
        }), reactJsxRuntimeCoreReexport.jsx("span", {
          className: "text-FKNmQ0",
          children: y
        })]
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: "btnContent-ecXMxc",
        children: reactJsxRuntimeCoreReexport.jsx(semiButtonWrapperComponent.SemiButtonWrapper, {
          onClick: () => {
            let e = conversationMessageUtils_1.findMessageById(chatMessageStoreFactory.createMessageStore.getState(), g.conversation_id || "", g.reply_id || "");
            if (e) {
              try {
                if (e) {
                  _([{
                    text: (e == null ? undefined : e.content_obj?.text) ?? "",
                    operation: {
                      replace: {
                        messageLink: {
                          messageId: e.message_id || "",
                          isLocalMessage: localResourceCheck.isLocal(e)
                        }
                      }
                    },
                    reportParams: {
                      scene: "edit"
                    },
                    extraExt: {
                      ...((e == null ? undefined : e.ext?.input_skill) ? {
                        input_skill: e.ext.input_skill
                      } : {})
                    }
                  }]);
                }
                w.success();
              } catch (e) {
                w.error({
                  reason: "send message failed, unexpected error",
                  error: e
                });
              }
            }
          },
          theme: "solid",
          className: "button-OJFxmD",
          children: h("search_tryagain")
        })
      })]
    });
  };
  require.d(exports, {
    DeepSearchErrorRetry: function () {
      return g;
    }
  });
}