// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'CU' to 'useActiveSkillId'
// - Renamed export 'Es' to 'hasActiveSkill'
// - Renamed export 'ai' to 'useSkillConfig'
// - Renamed export 'j$' to 'useOnboardingSkills'
// - Renamed export 'yW' to 'useSidebarSkills'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 441131
         */
module.exports = function (module, exports, require) {
  var deepEqualityUtil = require("deep-equality-util") /*id: 249434*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  let o = () => chatStoreManager.useStoreSelector("chatGuidanceStore", e => e.activeSkillIdentifier);
  let a = () => o() !== undefined;
  let l = () => chatStoreManager.useStoreSelector("chatGuidanceStore", e => e.sidebarSkills, deepEqualityUtil.deepEqual);
  let s = () => chatStoreManager.useStoreSelector("chatGuidanceStore", e => e.onboardingSkills, deepEqualityUtil.deepEqual);
  let u = () => chatStoreManager.useStoreSelector("chatGuidanceStore", e => e.skillConfig, deepEqualityUtil.deepEqual);
  require.d(exports, {
    useActiveSkillId: function () {
      return o;
    },
    hasActiveSkill: function () {
      return a;
    },
    useSkillConfig: function () {
      return u;
    },
    useOnboardingSkills: function () {
      return s;
    },
    useSidebarSkills: function () {
      return l;
    }
  });
}