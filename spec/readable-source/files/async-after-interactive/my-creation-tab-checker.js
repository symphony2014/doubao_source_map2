// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'h' to 'getCurrentTab'
// - Renamed export 'I' to 'isImageSkillInMyCreationTab'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-after-interactive.9af05afc.js
         * chunkId: 87048
         * moduleId: 125854
         */
module.exports = function (module, exports, require) {
  var chatRouteSkillMapper = require("chat-route-skill-mapper") /*id: 467072*/;
  var edenxSearchParamsHook = require("edenx-search-params-hook") /*id: 471794*/;
  let i = ["myCreation"];
  let o = e => i.includes(e);
  let s = () => {
    let [e] = edenxSearchParamsHook.resolveSearchParams();
    return e.get("tab");
  };
  let l = e => {
    let t = s();
    return e === chatRouteSkillMapper.skillTypeKeys.Image && o(t);
  };
  require.d(exports, {
    getCurrentTab: function () {
      return s;
    },
    isImageSkillInMyCreationTab: function () {
      return l;
    }
  });
}