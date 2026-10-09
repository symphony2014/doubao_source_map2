// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-guidance-suggestions.e5908877.js
         * chunkId: 96934
         * moduleId: 974159
         */
module.exports = function (module, exports, require) {
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  let n = e => {
    let {
      activeSkillType: t,
      isSuperTaskSwitchEnabled: i
    } = e;
    if (!t && i || t === chatAppEnums.SkillType.DesExtSkillSuperTask) {
      return chatAppEnums.SkillType.DesExtSkillSuperTask;
    }
  };
  require.r(exports);
  require.d(exports, {
    SuperTaskGenericGuidanceSuggestionsMatcher: function () {
      return n;
    }
  });
}