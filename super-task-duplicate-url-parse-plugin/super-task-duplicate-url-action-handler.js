// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'superTaskStore'
// - Resolved require(654619) to 'super-task-store'
// - Renamed variable 's' to 'chatConstants'
// - Resolved require(777970) to 'chat-constants'
// - Renamed variable 'u' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'l' to 'chatComplexPath'
// - Resolved require(909013) to 'chat-complex-path'
// - Updated imported property 'rw' to 'getSuperTaskStore' (module 654619)
// - Updated imported property 'CH' to 'taskTypes' (module 777970)
// - Updated imported property 'qX' to 'complexityLevels' (module 777970)
// - Updated imported property 'u' to 'chatComplexPath' (module 909013)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: super-task-duplicate-url-parse-plugin.031a71b3.js
         * chunkId: 91454
         * moduleId: 407034
         */
module.exports = function (module, exports, require) {
  var superTaskStore = require("super-task-store") /*id: 654619*/;
  var chatConstants = require("chat-constants") /*id: 777970*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var chatComplexPath = require("chat-complex-path") /*id: 909013*/;
  exports.default = t => {
    let {
      payload: e = {},
      navigate: a
    } = t;
    try {
      let {
        taskMode: t
      } = e || {};
      let u = superTaskStore.getSuperTaskStore();
      u.setState({
        duplicateStyleInfo: e
      });
      u.getState().setStatusByConvId("", {
        switchValue: chatConstants.taskTypes.SuperTask,
        taskModeValue: t || chatConstants.complexityLevels.Complex
      });
      a(u.getState().taskAbConfig.enable_sidebar_complex_task ? chatComplexPath.chatComplexPath : "/chat/");
    } catch (t) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "super-task-url-action-error",
        error: t
      });
      a("/chat/");
    }
  };
  require.r(exports);
}