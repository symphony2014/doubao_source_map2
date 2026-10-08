// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B' to 'getChatSidebarState'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 44291.514b9aaa.js
         * chunkId: 44291
         * moduleId: 740984
         */
module.exports = function (module, exports, require) {
  var chatLayoutResponsiveHooks = require("chat-layout-responsive-hooks") /*id: 833112*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  let o = () => {
    let {
      sidebarStatus: e
    } = chatStoreManager.useStoreSelector("flowWebLayoutStore");
    let t = chatLayoutResponsiveHooks.useChatMediaQuery(false);
    if (location.pathname.startsWith("/doc")) {
      return {
        expand: false,
        sidebarStatus: "close"
      };
    } else {
      return {
        expand: t ? e === "mobile-suspense" : e === "open",
        sidebarStatus: e
      };
    }
  };
  require.d(exports, {
    getChatSidebarState: function () {
      return o;
    }
  });
}