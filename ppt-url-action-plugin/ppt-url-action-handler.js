// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'uuidGeneratorUtil'
// - Resolved require(641535) to 'uuid-generator-util'
// - Renamed variable 'i' to 'isStringTypeCheck'
// - Resolved require(253558) to 'is-string-type-check'
// - Renamed variable 'o' to 'isNumberUtil'
// - Resolved require(897814) to 'is-number-util'
// - Renamed variable 's' to 'chatPanelModes'
// - Resolved require(690886) to 'chat-panel-modes'
// - Renamed variable 'a' to 'chatIocServiceLoaderHook'
// - Resolved require(31335) to 'chat-ioc-service-loader-hook'
// - Renamed variable 'l' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'Z' to 'isString' (module 253558)
// - Updated imported property 'Z' to 'isNumber' (module 897814)
// - Updated imported property 'D' to 'loadServiceAsync' (module 31335)
// - Updated imported property 'P' to 'PanelMode' (module 690886)
// - Updated imported property 'Z' to 'generateUuid' (module 641535)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ppt-url-action-plugin.a588f1e1.js
         * chunkId: 79068
         * moduleId: 710338
         */
module.exports = function (module, exports, require) {
  var uuidGeneratorUtil = require("uuid-generator-util") /*id: 641535*/;
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var chatPanelModes = require("chat-panel-modes") /*id: 690886*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  function c(e) {
    let {
      payload: t
    } = e;
    loggerServiceCore.defaultLogger.persist.info({
      eventName: "UrlAction_PptHandlerStart"
    });
    if ("message_id" in t && isStringTypeCheck.isString(t.message_id) && "conversation_id" in t && isStringTypeCheck.isString(t.conversation_id) && "ppt_id" in t && isNumberUtil.isNumber(t.ppt_id) && "cover_url" in t && isStringTypeCheck.isString(t.cover_url)) {
      try {
        let {
          message_id: e,
          conversation_id: n,
          ppt_id: i,
          cover_url: o
        } = t;
        chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(t => {
          if (t != null) {
            t.openCanvasPanel({
              conversationId: n,
              messageId: e,
              canvasLayoutState: chatPanelModes.PanelMode.CANVAS_ONLY,
              pptShowProps: {
                id: uuidGeneratorUtil.generateUuid(),
                initalMode: "view",
                pptId: i,
                coverUrl: o,
                onClose: () => {
                  if (t != null) {
                    t.closeCanvasPanel();
                  }
                }
              }
            });
          }
        });
      } catch (e) {
        loggerServiceCore.defaultLogger.persist.error({
          eventName: "UrlAction_CodeArtifactsShareHandlerInnerError",
          error: e
        });
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    default: function () {
      return c;
    }
  });
}