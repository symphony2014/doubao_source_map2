// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'C' to 'logSessionStart'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29910.2353a85a.js
         * chunkId: 29910
         * moduleId: 633460
         */
module.exports = function (module, exports, require) {
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  let n = e => {
    loggerServiceCore.defaultLogger.persist.success({
      eventName: "on_message_session_start",
      meta: {
        ...e.temp,
        ...e.common,
        chat_session_scene: e.slardar?.chat_session_scene,
        chat_session_id: e.slardar?.chat_session_id
      }
    });
  };
  require.d(exports, {
    logSessionStart: function () {
      return n;
    }
  });
}