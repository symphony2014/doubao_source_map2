// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'messageGroupValidityChecker'
// - Resolved require(397350) to 'message-group-validity-checker'
// - Resolved require(97668) to 'crowd-test-batch-message-box'
// - Updated imported property 'v' to 'crowdTestBatchKey' (module 97668)
// - Updated imported property 'E' to 'isMessageGroupValid' (module 397350)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-group.90ca15b6.js
         * chunkId: 97027
         * moduleId: 497589
         */
module.exports = function (module, exports, require) {
  var messageGroupValidityChecker = require("message-group-validity-checker") /*id: 397350*/;
  let r = {
    pluginIdentifier: require("crowd-test-batch-message-box") /*id: 97668*/.crowdTestBatchKey,
    matchPlugin(e, t) {
      return messageGroupValidityChecker.isMessageGroupValid(t.sub_message_group?.messages);
    }
  };
  require.r(exports);
  require.d(exports, {
    matcher: function () {
      return r;
    }
  });
}