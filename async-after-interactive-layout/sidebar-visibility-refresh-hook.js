// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'i' to 'chatIocServiceLoaderHook'
// - Resolved require(31335) to 'chat-ioc-service-loader-hook'
// - Updated imported property 'D' to 'loadServiceAsync' (module 31335)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-after-interactive-layout.adb7a8b6.js
         * chunkId: 36969
         * moduleId: 301682
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  let o = () => {
    reactCoreLibraryReexport.useEffect(() => {
      let e = () => {
        if (document.visibilityState === "visible") {
          chatIocServiceLoaderHook.loadServiceAsync("chatConversationService").then(e => e == null ? undefined : e.refreshConversationList());
        }
      };
      window.addEventListener("visibilitychange", e);
      return () => {
        window.removeEventListener("visibilitychange", e);
      };
    }, []);
  };
  let a = () => {
    o();
    return null;
  };
  require.r(exports);
  require.d(exports, {
    SidebarAutoRefreshOnVisible: function () {
      return a;
    },
    useListenVisibilityChangeToRefresh: function () {
      return o;
    }
  });
}