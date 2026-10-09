// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'businessLayoutCondition'
// - Resolved require(390946) to 'business-layout-condition'
// - Renamed variable 'r' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 'o' to 'readDocumentChatFooter'
// - Resolved require(884841) to 'read-document-chat-footer'
// - Updated imported property 'A' to 'checkLayoutState' (module 390946)
// - Updated imported property 'H' to 'readDocChatFooter' (module 884841)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 938034
         */
module.exports = function (module, exports, require) {
  var businessLayoutCondition = require("business-layout-condition") /*id: 390946*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var readDocumentChatFooter = require("read-document-chat-footer") /*id: 884841*/;
  let a = e => {
    if (businessLayoutCondition.checkLayoutState(e) && e.guidance.activeSkillType === chatAppEnums.SkillType.ReadPDF) {
      return readDocumentChatFooter.readDocChatFooter;
    }
  };
  require.r(exports);
  require.d(exports, {
    matcher: function () {
      return a;
    }
  });
}