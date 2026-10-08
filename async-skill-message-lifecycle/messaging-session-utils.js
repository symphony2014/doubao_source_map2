// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'S' to 'getChatTraceEvent'
// - Renamed export 'h' to 'updateContextState'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29910.2353a85a.js
         * chunkId: 29910
         * moduleId: 545930
         */
module.exports = function (module, exports, require) {
  var messageSessionEnums = require("message-session-enums") /*id: 497192*/;
  let n = e => e.get("chatTeaTraceEvent");
  let r = e => {
    let t = e.get("chatEventContext");
    if (t) {
      t.state = {
        session: messageSessionEnums.MessageSessionStage[e.current_session_state],
        message: messageSessionEnums.MessageStatus[e.current_single_message_state ?? 0]
      };
    }
    return t;
  };
  require.d(exports, {
    getChatTraceEvent: function () {
      return n;
    },
    updateContextState: function () {
      return r;
    }
  });
}