// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'documentNavigationAndCreationUtils'
// - Resolved require(491592) to 'document-navigation-and-creation-utils'
// - Renamed variable 'i' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 'o' to 'genericSkillBarSymbol'
// - Resolved require(25918) to 'generic-skill-bar-symbol'
// - Updated imported property 'X1' to 'isDocumentResource' (module 491592)
// - Updated imported property 'H' to 'skillBarSymbol' (module 25918)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: sync-business-skill-bar.f60693d1.js
         * chunkId: 30411
         * moduleId: 426536
         */
module.exports = function (module, exports, require) {
  var documentNavigationAndCreationUtils = require("document-navigation-and-creation-utils") /*id: 491592*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var genericSkillBarSymbol = require("generic-skill-bar-symbol") /*id: 25918*/;
  let a = e => {
    let {
      chatView: t,
      chatCanvas: n,
      inputActiveSkill: a
    } = e;
    if (!t.isImmersiveMode && ((n == null ? undefined : n.type) === undefined || !documentNavigationAndCreationUtils.isDocumentResource(n == null ? undefined : n.type) || (a == null ? undefined : a.skill_type) !== chatAppEnums.SkillType.WriteAssistant)) {
      return genericSkillBarSymbol.skillBarSymbol;
    }
  };
  require.r(exports);
  require.d(exports, {
    matcher: function () {
      return a;
    }
  });
}