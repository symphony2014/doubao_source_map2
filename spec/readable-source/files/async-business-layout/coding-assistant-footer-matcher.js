// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'codeRouteUtils'
// - Resolved require(983618) to 'code-route-utils'
// - Renamed variable 'r' to 'businessLayoutCondition'
// - Resolved require(390946) to 'business-layout-condition'
// - Renamed variable 'o' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 'a' to 'codingAssistantChatFooter'
// - Resolved require(399379) to 'coding-assistant-chat-footer'
// - Updated imported property 'G4' to 'isCodeChatRoute' (module 983618)
// - Updated imported property 'A' to 'checkLayoutState' (module 390946)
// - Updated imported property 'H' to 'chatFooterSymbol' (module 399379)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 720784
         */
module.exports = function (module, exports, require) {
  var codeRouteUtils = require("code-route-utils") /*id: 983618*/;
  var businessLayoutCondition = require("business-layout-condition") /*id: 390946*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var codingAssistantChatFooter = require("coding-assistant-chat-footer") /*id: 399379*/;
  let s = e => {
    let t = codeRouteUtils.isCodeChatRoute();
    if (businessLayoutCondition.checkLayoutState(e) && e.guidance.activeSkillType === chatAppEnums.SkillType.CodeAssistant && !t) {
      return codingAssistantChatFooter.chatFooterSymbol;
    }
  };
  require.r(exports);
  require.d(exports, {
    matcher: function () {
      return s;
    }
  });
}