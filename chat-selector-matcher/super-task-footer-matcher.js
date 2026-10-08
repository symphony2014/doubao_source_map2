// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'businessLayoutCondition'
// - Resolved require(390946) to 'business-layout-condition'
// - Renamed variable 'l' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 'c' to 'superTaskChatFooterSymbol'
// - Resolved require(825156) to 'super-task-chat-footer-symbol'
// - Updated imported property 'A' to 'checkLayoutState' (module 390946)
// - Updated imported property 'Y' to 'chatFooterSymbol' (module 825156)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 92115.45c824f2.js
         * chunkId: 92115
         * moduleId: 267648
         */
module.exports = function (module, exports, require) {
  var businessLayoutCondition = require("business-layout-condition") /*id: 390946*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var superTaskChatFooterSymbol = require("super-task-chat-footer-symbol") /*id: 825156*/;
  let o = e => {
    if (businessLayoutCondition.checkLayoutState(e) && e.guidance.activeSkillType === chatAppEnums.SkillType.DesExtSkillSuperTask) {
      return superTaskChatFooterSymbol.chatFooterSymbol;
    }
  };
  require.r(exports);
  require.d(exports, {
    matcher: function () {
      return o;
    }
  });
}