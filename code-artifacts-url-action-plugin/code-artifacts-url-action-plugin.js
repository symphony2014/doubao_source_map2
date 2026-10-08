// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'a' to 'chatPanelModes'
// - Resolved require(690886) to 'chat-panel-modes'
// - Renamed variable 'i' to 'chatIocServiceLoaderHook'
// - Resolved require(31335) to 'chat-ioc-service-loader-hook'
// - Renamed variable 'n' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 's' to 'aiSpaceDataValidator'
// - Resolved require(120749) to 'ai-space-data-validator'
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'V' to 'validateArtifact' (module 120749)
// - Updated imported property 'D' to 'loadServiceAsync' (module 31335)
// - Updated imported property 'P' to 'PanelMode' (module 690886)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: code-artifacts-url-action-plugin.75d67acc.js
         * chunkId: 30489
         * moduleId: 762830
         */
module.exports = function (module, exports, require) {
  var chatPanelModes = require("chat-panel-modes") /*id: 690886*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var aiSpaceDataValidator = require("ai-space-data-validator") /*id: 120749*/;
  function o(t) {
    let {
      payload: e
    } = t;
    loggerServiceCore.defaultLogger.persist.info({
      eventName: "UrlAction_CodeArtifactsHandlerStart"
    });
    if (aiSpaceDataValidator.validateArtifact(e)) {
      try {
        let {
          message_id: t,
          conversation_id: r,
          artifact_key: n,
          artifact_id: s,
          resource_type: o,
          resource_id: c,
          version: _,
          status: f,
          block_id: u,
          artifact_meta: d,
          artifact_meta_list: l
        } = e;
        chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(e => {
          if (e != null) {
            e.openCanvasPanel({
              type: o,
              conversationId: String(r),
              chatId: r,
              autoQuote: false,
              messageId: t,
              blockId: u,
              defaultArtifacts: undefined,
              isCodeFile: true,
              canvasLayoutState: chatPanelModes.PanelMode.CANVAS_ONLY,
              artifactId: s,
              artifactKey: n,
              attachments: [],
              autoRefresh: true,
              isShowPreview: true,
              artifactMeta: d || {
                artifactKey: n,
                resourceId: c,
                resourceType: o,
                artifactId: s,
                version: _,
                identifier: n,
                status: f
              },
              artifactMetaList: l
            });
          }
        });
      } catch (t) {
        loggerServiceCore.defaultLogger.persist.error({
          eventName: "UrlAction_CodeArtifactsShareHandlerInnerError",
          error: t
        });
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    default: function () {
      return o;
    }
  });
}