// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Q' to 'useSkillRefContent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29592.0fe385c7.js
         * chunkId: 29592
         * moduleId: 395395
         */
module.exports = function (module, exports, require) {
  var chatRefContentSelectors = require("chat-ref-content-selectors") /*id: 434690*/;
  let l = e => {
    let {
      chatId: t,
      skillId: n
    } = e;
    let l = chatRefContentSelectors.useRefContent(t || "");
    return {
      refContents: (l == null ? undefined : l.channel) === `skill_${n}` ? l.refContents : []
    };
  };
  require.d(exports, {
    useSkillRefContent: function () {
      return l;
    }
  });
}