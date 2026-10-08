// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'initializeModuleInstance'
// - Resolved require(233913) to 'initialize-module-instance'
// - Renamed variable 'o' to 'chatInputConstants'
// - Resolved require(918547) to 'chat-input-constants'
// - Renamed variable 'r' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Updated imported property 'o' to 'initializeInstance' (module 233913)
// - Updated imported property '$' to 'chatInputConstants' (module 918547)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ai-coding-open-canvas-repo-plugin.1717777f.js
         * chunkId: 52823
         * moduleId: 248261
         */
module.exports = function (module, exports, require) {
  var initializeModuleInstance = require("initialize-module-instance") /*id: 233913*/;
  var chatInputConstants = require("chat-input-constants") /*id: 918547*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  function a(e) {
    let {
      payload: t,
      navigate: n
    } = e;
    try {
      let {
        skill: e
      } = t || {};
      if (e === "code") {
        initializeModuleInstance.initializeInstance.emit(chatInputConstants.chatInputConstants.activeChatInputCodeSkill, true);
      }
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "code-chat-input-active-url-action-error",
        error: e
      });
    }
    n("/chat/");
  }
  require.r(exports);
  require.d(exports, {
    default: function () {
      return a;
    }
  });
}