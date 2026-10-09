// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'businessLayoutCondition'
// - Resolved require(390946) to 'business-layout-condition'
// - Renamed variable 'r' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 'o' to 'writeChatFooterSymbol'
// - Resolved require(398117) to 'write-chat-footer-symbol'
// - Updated imported property 'A' to 'checkLayoutState' (module 390946)
// - Updated imported property 'H' to 'writeChatFooter' (module 398117)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 240264
         */
module.exports = function (module, exports, require) {
  var businessLayoutCondition = require("business-layout-condition") /*id: 390946*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var writeChatFooterSymbol = require("write-chat-footer-symbol") /*id: 398117*/;
  let a = e => {
    if (businessLayoutCondition.checkLayoutState(e) && e.guidance.activeSkillType === chatAppEnums.SkillType.WriteAssistant) {
      return writeChatFooterSymbol.writeChatFooter;
    }
  };
  require.r(exports);
  require.d(exports, {
    matcher: function () {
      return a;
    }
  });
}