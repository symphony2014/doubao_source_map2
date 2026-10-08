// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'businessLayoutCondition'
// - Resolved require(390946) to 'business-layout-condition'
// - Renamed variable 'r' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 'o' to 'searchChatFooterSymbol'
// - Resolved require(249555) to 'search-chat-footer-symbol'
// - Updated imported property 'A' to 'checkLayoutState' (module 390946)
// - Updated imported property 'H' to 'searchFooterSymbol' (module 249555)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 234278
         */
module.exports = function (module, exports, require) {
  var businessLayoutCondition = require("business-layout-condition") /*id: 390946*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var searchChatFooterSymbol = require("search-chat-footer-symbol") /*id: 249555*/;
  let a = e => {
    if (businessLayoutCondition.checkLayoutState(e) && e.guidance.activeSkillType === chatAppEnums.SkillType.Search) {
      return searchChatFooterSymbol.searchFooterSymbol;
    }
  };
  require.r(exports);
  require.d(exports, {
    matcher: function () {
      return a;
    }
  });
}