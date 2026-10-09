// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'P' to 'handleSessionEnd'
// - Renamed export 'Y' to 'persistSessionEnd'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 55100.9330c1b8.js
         * chunkId: 55100
         * moduleId: 311349
         */
module.exports = function (module, exports, require) {
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var chatTraceHandlers = require("chat-trace-handlers") /*id: 651544*/;
  var messagingSessionUtils = require("messaging-session-utils") /*id: 545930*/;
  var messageLogSuppressionUtils = require("message-log-suppression-utils") /*id: 545406*/;
  let r = (e, s, n, i) => {
    l(e.getSessionLifeCycleContext(s, n), i);
  };
  let l = (e, s) => {
    let n = messagingSessionUtils.updateContextState(e);
    if (!messageLogSuppressionUtils.shouldSkipSessionEnd(n)) {
      messageLogSuppressionUtils.updateMessageRecord(n, "onMessageSessionEnd");
      loggerServiceCore.defaultLogger.persist.success({
        eventName: "on_message_session_end",
        meta: chatTraceHandlers.chatSessionTrace.onMessageSessionEnd(n, s)
      });
    }
  };
  require.d(exports, {
    handleSessionEnd: function () {
      return r;
    },
    persistSessionEnd: function () {
      return l;
    }
  });
}