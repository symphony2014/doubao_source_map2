// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'b6' to 'useInputSkillsSelector'
// - Renamed export 'mZ' to 'getChatInputSkills'
// - Renamed export 'n1' to 'useActiveSkillType'
// - Renamed export 'zP' to 'useSkillInfo'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 627774
         */
module.exports = function (module, exports, require) {
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  let o = e => chatStoreManager.useStoreSelector("chatInputStore", t => t.activeSkillTypeMap[e]);
  let a = e => chatStoreManager.useStoreSelector("chatInputStore", t => {
    let n = t.activeSkillTypeMap[e];
    let {
      skillMap: i
    } = t;
    if (n) {
      if (i == null) {
        return undefined;
      } else {
        return i[n];
      }
    } else {
      return undefined;
    }
  });
  let l = e => {
    var t;
    return ((t = e.inputSkills) === null || t === undefined ? undefined : t.map(t => {
      if (t.skill_type) {
        return {
          ...t,
          ...e.skillMap[t.skill_type]
        };
      }
    }).filter(Boolean)) ?? [];
  };
  let s = () => l(chatStoreManager.getStoreState("chatInputStore"));
  let u = () => chatStoreManager.useStoreSelector("chatInputStore", l, deepEqualUtil_1.deepEqual);
  require.d(exports, {
    useInputSkillsSelector: function () {
      return u;
    },
    getChatInputSkills: function () {
      return s;
    },
    useActiveSkillType: function () {
      return o;
    },
    useSkillInfo: function () {
      return a;
    }
  });
}