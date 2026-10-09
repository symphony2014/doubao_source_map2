// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'businessLayoutCondition'
// - Resolved require(390946) to 'business-layout-condition'
// - Renamed variable 'r' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 'o' to 'chatFooterSymbol'
// - Resolved require(802733) to 'chat-footer-symbol'
// - Updated imported property 'A' to 'checkLayoutState' (module 390946)
// - Updated imported property 'I' to 'chatFooterSymbol' (module 802733)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 174681
         */
module.exports = function (module, exports, require) {
  var businessLayoutCondition = require("business-layout-condition") /*id: 390946*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var chatFooterSymbol = require("chat-footer-symbol") /*id: 802733*/;
  let a = e => {
    if (businessLayoutCondition.checkLayoutState(e) && e.guidance.activeSkillType === chatAppEnums.SkillType.CodeInterpreter) {
      return chatFooterSymbol.chatFooterSymbol;
    }
  };
  require.r(exports);
  require.d(exports, {
    matcher: function () {
      return a;
    }
  });
}