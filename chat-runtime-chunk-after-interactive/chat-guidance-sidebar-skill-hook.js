// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Q' to 'useChatGuidanceSidebarSkill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat-runtime-chunk-after-interactive.a19b580b.js
         * chunkId: 36136
         * moduleId: 478924
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  let l = e => reactCoreLibraryReexport.useMemo(() => {
    let t = chatStoreManager.getStore("chatGuidanceStore").getState().sidebarSkills || [];
    if (safeJsonUtils.safeParse((e == null ? undefined : e.extra) || "", {}).flowpc_supertask_sidebar_complex_task === "1" && t.some(e => e.skill_type === chatAppEnums.SkillType.DesExtSkillSuperTask)) {
      return {
        skill_type: chatAppEnums.SkillType.DesExtSkillSuperTask
      };
    }
  }, [e, e == null ? undefined : e.extra]);
  require.d(exports, {
    useChatGuidanceSidebarSkill: function () {
      return l;
    }
  });
}