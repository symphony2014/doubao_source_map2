// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'messageGroupValidityChecker'
// - Resolved require(397350) to 'message-group-validity-checker'
// - Resolved require(657258) to 'chat-message-bottom-symbol'
// - Updated imported property 'J' to 'messageBottomSymbol' (module 657258)
// - Updated imported property 'E' to 'isMessageGroupValid' (module 397350)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-group.90ca15b6.js
         * chunkId: 97027
         * moduleId: 155731
         */
module.exports = function (module, exports, require) {
  var messageGroupValidityChecker = require("message-group-validity-checker") /*id: 397350*/;
  let r = {
    pluginIdentifier: require("chat-message-bottom-symbol") /*id: 657258*/.messageBottomSymbol,
    matchPlugin(e, t) {
      return !t.ext?.crowd_test_message_group_selected && messageGroupValidityChecker.isMessageGroupValid(t.sub_message_group?.messages);
    }
  };
  require.r(exports);
  require.d(exports, {
    matcher: function () {
      return r;
    }
  });
}