// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 'i' to 'inputToolMenuListener'
// - Resolved require(719698) to 'input-tool-menu-listener'
// - Updated imported property 'v' to 'menuOptionListener' (module 719698)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-input-events.8e129d94.js
         * chunkId: 25182
         * moduleId: 413619
         */
module.exports = function (module, exports, require) {
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var inputToolMenuListener = require("input-tool-menu-listener") /*id: 719698*/;
  class o {
    async onPaste(e, t) {
      if (!e.skillType || [chatAppEnums.SkillType.ReadPDF, chatAppEnums.SkillType.CodeInterpreter].includes(e.guidance.activeSkillType)) {
        for (let n of inputToolMenuListener.menuOptionListener.listeners.onPaste || []) {
          await n(e, t);
        }
      }
      return t;
    }
  }
  require.r(exports);
  require.d(exports, {
    GenericFileUploadButtonEventsPlugin: function () {
      return o;
    }
  });
}