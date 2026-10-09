// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'M' to 'useBusinessLayout'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 924861
         */
module.exports = function (module, exports, require) {
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  let a = e => chatMessageStoreFactory.createMessageStore(t => conversationMessageUtils_1.checkOnboardingMessages(t, e), deepEqualityUtil_1.isDeepEqual);
  require.d(exports, {
    useBusinessLayout: function () {
      return a;
    }
  });
}