// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatPanelModes'
// - Resolved require(690886) to 'chat-panel-modes'
// - Renamed variable 'o' to 'chatMessageStoreFactory'
// - Resolved require(794449) to 'chat-message-store-factory'
// - Renamed variable 'a' to 'chatMessageUtils_2_1'
// - Resolved require(296060) to 'chat-message-utils_2_1'
// - Renamed variable 'r' to 'chatIocServiceLoaderHook'
// - Resolved require(31335) to 'chat-ioc-service-loader-hook'
// - Renamed variable 'l' to 'apiServicesCollection'
// - Resolved require(147875) to 'api-services-collection'
// - Renamed variable 's' to 'artifactResourceType'
// - Resolved require(310450) to 'artifact-resource-type'
// - Renamed variable 'c' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'd' to 'aiSpaceDataValidator'
// - Resolved require(120749) to 'ai-space-data-validator'
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'c' to 'validateConversation' (module 120749)
// - Updated imported property 'mH' to 'SamanthaApiService' (module 147875)
// - Updated imported property 'GH' to 'createMessageStore' (module 794449)
// - Updated imported property 'xg' to 'getMessageListStatus' (module 296060)
// - Updated imported property 'D' to 'loadServiceAsync' (module 31335)
// - Updated imported property 'P' to 'PanelMode' (module 690886)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ai-space-excelairead-url-parse-plugin.33351e1f.js
         * chunkId: 70942
         * moduleId: 844684
         */
module.exports = function (module, exports, require) {
  var chatPanelModes = require("chat-panel-modes") /*id: 690886*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var chatMessageUtils_2_1 = require("chat-message-utils_2_1") /*id: 296060*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var artifactResourceType = require("artifact-resource-type") /*id: 310450*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var aiSpaceDataValidator = require("ai-space-data-validator") /*id: 120749*/;
  async function _(e) {
    let {
      payload: t
    } = e;
    loggerServiceCore.defaultLogger.persist.info({
      eventName: "UrlAction_CodeArtifactsShareHandlerStart"
    });
    if (!aiSpaceDataValidator.validateConversation(t)) {
      return;
    }
    let {
      conversationId: n
    } = t;
    if (n) {
      try {
        let {
          data: e = {}
        } = await apiServicesCollection.SamanthaApiService.SearchArtifact({
          conversation_id: String(n),
          resource_type_list: [artifactResourceType.ArtifactResourceType.Code, artifactResourceType.ArtifactResourceType.CodeDevelopMode]
        });
        let {
          artifacts: t
        } = e;
        if (!(t == null ? undefined : t.length) || t.length > 1) {
          return;
        }
        let {
          artifact_key: c,
          artifact_id: d,
          resource_type: _
        } = t[0];
        let u = chatMessageStoreFactory.createMessageStore.getState();
        let {
          messageMap: v = {}
        } = chatMessageUtils_2_1.getMessageListStatus(u, n);
        let p = Object.keys(v);
        if (p.length !== 2) {
          return;
        }
        let m = p.find(e => {
          let n = v[e];
          return !!(n == null ? undefined : n.ext?.samantha_artifact_meta_list);
        });
        if (!m) {
          return;
        }
        chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(e => {
          if (e != null) {
            e.openCanvasPanel({
              type: _,
              conversationId: String(n),
              chatId: n,
              autoQuote: false,
              messageId: m,
              defaultArtifacts: undefined,
              isCodeFile: true,
              canvasLayoutState: chatPanelModes.PanelMode.CANVAS_ONLY,
              artifactId: d,
              artifactKey: c,
              attachments: [],
              autoRefresh: true,
              isShowPreview: true,
              artifactMeta: {
                artifactKey: c,
                resourceId: t[0].resource_id,
                resourceType: _,
                artifactId: d,
                version: t[0].version,
                identifier: c,
                status: t[0].status
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
      return _;
    }
  });
}