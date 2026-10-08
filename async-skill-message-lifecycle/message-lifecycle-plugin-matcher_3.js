// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'isCocoConversationChecker'
// - Resolved require(714933) to 'is-coco-conversation-checker'
// - Renamed variable 'r' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Resolved require(909538) to 'deep-research-message-symbol'
// - Updated imported property 'j' to 'deepResearchSymbol' (module 909538)
// - Updated imported property 'D' to 'isCocoConversation' (module 714933)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-lifecycle.0911e152.js
         * chunkId: 71730
         * moduleId: 687445
         */
module.exports = function (module, exports, require) {
  var isCocoConversationChecker = require("is-coco-conversation-checker") /*id: 714933*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  let a = {
    pluginIdentifier: require("deep-research-message-symbol") /*id: 909538*/.deepResearchSymbol,
    matchPlugin: e => isCocoConversationChecker.isCocoConversation(e) && messageContentTypeAndStatusChecker.nmA(e)
  };
  require.r(exports);
  require.d(exports, {
    matcher: function () {
      return a;
    }
  });
}