// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A' to 'useIsMobileView'
// - Renamed export 't' to 'scrollConstants'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-bar-item.f7100fdd.js
         * chunkId: 24932
         * moduleId: 226752
         */
module.exports = function (module, exports, require) {
  var useMediaQueryHook = require("use-media-query-hook") /*id: 510619*/;
  var userAgentPlatformUtils = require("user-agent-platform-utils") /*id: 221233*/;
  let i = () => {
    let e = userAgentPlatformUtils.isMobileOrIOS();
    return useMediaQueryHook.mediaQueryHook({
      maxWidth: 600
    }) || e;
  };
  let l = {
    sidebar: "sidebar.chatlist.scroll",
    guidance: "guidance.skill.scroll"
  };
  require.d(exports, {
    useIsMobileView: function () {
      return i;
    },
    scrollConstants: function () {
      return l;
    }
  });
}