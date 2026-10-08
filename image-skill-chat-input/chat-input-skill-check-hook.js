// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'q' to 'useHasImageVideoGenerationSkills'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-tool-button.182dfecb.js
         * chunkId: 22819
         * moduleId: 735810
         */
module.exports = function (module, exports, require) {
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatFgStoreHooks = require("chat-fg-store-hooks") /*id: 583867*/;
  var chatStorageKeys = require("chat-storage-keys") /*id: 187143*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  let l = () => {
    let e = !!chatFgStoreHooks.getSourceValue("creation_input_skill_switch", {
      source: chatStorageKeys.chatStorageKeys.serverAB
    });
    let t = chatStoreManager.useStoreSelector("chatInputStore", e => [chatAppEnums.SkillType.ImageGeneration, chatAppEnums.SkillType.VideoGeneration].every(t => {
      var n;
      if ((n = e.inputSkills) === null || n === undefined) {
        return undefined;
      } else {
        return n.some(e => e.skill_type === t);
      }
    }));
    return e && t;
  };
  require.d(exports, {
    useHasImageVideoGenerationSkills: function () {
      return l;
    }
  });
}