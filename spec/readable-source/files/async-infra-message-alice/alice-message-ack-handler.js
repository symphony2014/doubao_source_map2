// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'O' to 'handleAliceAck'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-alice.a1dd235d.js
         * chunkId: 20105
         * moduleId: 621767
         */
module.exports = function (module, exports, require) {
  var chatMessageTypes = require("chat-message-types") /*id: 243788*/;
  function r(e) {
    if (e.message_type === chatMessageTypes.MessageType.Ack) {
      e.user_type ||= chatMessageTypes.UserType.Human;
      if (e.ext) {
        e.ext.is_finish = "1";
      } else {
        e.ext = {
          is_finish: "1"
        };
      }
    }
    return e;
  }
  require.d(exports, {
    handleAliceAck: function () {
      return r;
    }
  });
}