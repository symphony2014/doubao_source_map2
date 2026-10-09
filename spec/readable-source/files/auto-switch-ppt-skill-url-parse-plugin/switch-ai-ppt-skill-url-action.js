// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'chatStatusActionTypes'
// - Resolved require(757046) to 'chat-status-action-types'
// - Renamed variable 'i' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 'c' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Updated imported property 'u' to 'chatActionTypes' (module 757046)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: auto-switch-ppt-skill-url-parse-plugin.cd6fcbb4.js
         * chunkId: 48524
         * moduleId: 958129
         */
module.exports = function (module, exports, require) {
  var chatStatusActionTypes = require("chat-status-action-types") /*id: 757046*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  exports.default = e => {
    let {
      navigate: t,
      updateActiveSkillTypeMap: a,
      UpdateChatIdToResolveLocalConversationId: l,
      getChatService: s,
      payload: _
    } = e;
    s("chatNavigateService").then(e => {
      if (e) {
        e.navigateToChatGuidancePage();
      } else {
        throw Error("chatNavigateService is undefined");
      }
    }).catch(() => {
      t("/chat/");
    }).finally(() => {
      try {
        let {
          isFromAISpace: e
        } = _ || {};
        l();
        a(chatAppEnums.SkillType.AIPPTSlides, e ? chatStatusActionTypes.chatActionTypes.AISpace : chatStatusActionTypes.chatActionTypes.UseURL);
      } catch (e) {
        loggerServiceCore.defaultLogger.persist.error({
          eventName: "switch-ai-ppt-skill-url-action-error",
          error: e
        });
      }
    });
  };
  require.r(exports);
}