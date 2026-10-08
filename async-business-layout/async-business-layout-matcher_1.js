// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'businessLayoutCondition'
// - Resolved require(390946) to 'business-layout-condition'
// - Renamed variable 'r' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 'o' to 'translateGuidanceChatFooter_1'
// - Resolved require(778590) to 'translate-guidance-chat-footer_1'
// - Updated imported property 'A' to 'checkLayoutState' (module 390946)
// - Updated imported property 'g' to 'chatFooterGuidance' (module 778590)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 229472
         */
module.exports = function (module, exports, require) {
  var businessLayoutCondition = require("business-layout-condition") /*id: 390946*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var translateGuidanceChatFooter_1 = require("translate-guidance-chat-footer_1") /*id: 778590*/;
  let a = e => {
    if (businessLayoutCondition.checkLayoutState(e) && e.guidance.activeSkillType === chatAppEnums.SkillType.Translate) {
      return translateGuidanceChatFooter_1.chatFooterGuidance;
    }
  };
  require.r(exports);
  require.d(exports, {
    matcher: function () {
      return a;
    }
  });
}