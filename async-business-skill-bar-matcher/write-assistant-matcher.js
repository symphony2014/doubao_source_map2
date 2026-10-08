// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'documentNavigationAndCreationUtils'
// - Resolved require(491592) to 'document-navigation-and-creation-utils'
// - Renamed variable 'i' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 'o' to 'writeCommandToolbarSymbol'
// - Resolved require(468837) to 'write-command-toolbar-symbol'
// - Updated imported property 'X1' to 'isDocumentResource' (module 491592)
// - Updated imported property 'J' to 'writeToolbarSymbol' (module 468837)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-skill-bar-matcher.308b09ca.js
         * chunkId: 50349
         * moduleId: 366462
         */
module.exports = function (module, exports, require) {
  var documentNavigationAndCreationUtils = require("document-navigation-and-creation-utils") /*id: 491592*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var writeCommandToolbarSymbol = require("write-command-toolbar-symbol") /*id: 468837*/;
  let a = e => {
    let {
      chatCanvas: t,
      inputActiveSkill: n
    } = e;
    if (documentNavigationAndCreationUtils.isDocumentResource(t == null ? undefined : t.type) && (n == null ? undefined : n.skill_type) === chatAppEnums.SkillType.WriteAssistant) {
      return writeCommandToolbarSymbol.writeToolbarSymbol;
    } else {
      return undefined;
    }
  };
  require.r(exports);
  require.d(exports, {
    matcher: function () {
      return a;
    }
  });
}