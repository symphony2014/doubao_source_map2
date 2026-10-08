// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'findRequirementClarifyBlock'
// - Resolved require(458064) to 'find-requirement-clarify-block'
// - Renamed variable 'i' to 'skillMessageReplyMatcher'
// - Resolved require(41717) to 'skill-message-reply-matcher'
// - Renamed variable 'u' to 'requirementClarifyPluginId'
// - Resolved require(796587) to 'requirement-clarify-plugin-id'
// - Updated imported property 'W' to 'isReplyMessage' (module 41717)
// - Updated imported property 'oH' to 'findRequirementClarifyBlockInConversation' (module 458064)
// - Updated imported property 'r' to 'requirementPluginId' (module 796587)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-list-matcher.dbf94769.js
         * chunkId: 50381
         * moduleId: 724340
         */
module.exports = function (module, exports, require) {
  var findRequirementClarifyBlock = require("find-requirement-clarify-block") /*id: 458064*/;
  var skillMessageReplyMatcher = require("skill-message-reply-matcher") /*id: 41717*/;
  var requirementClarifyPluginId = require("requirement-clarify-plugin-id") /*id: 796587*/;
  let o = e => {
    let {
      isSelectMode: t,
      conversationId: n,
      unionMessageList: o
    } = e;
    let a = skillMessageReplyMatcher.isReplyMessage(n, o);
    if (!a) {
      return;
    }
    let l = findRequirementClarifyBlock.findRequirementClarifyBlockInConversation([a], n);
    if (!t && l) {
      return requirementClarifyPluginId.requirementPluginId;
    } else {
      return undefined;
    }
  };
  require.r(exports);
  require.d(exports, {
    matcher: function () {
      return o;
    }
  });
}