// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'n' to 'useSidebarVisibility'
// - Renamed export 'p' to 'useChatMediaQuery'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 833112
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatLayoutDimensions = require("chat-layout-dimensions") /*id: 519623*/;
  var useMediaQueryHook = require("use-media-query-hook") /*id: 510619*/;
  let a = e => {
    let [t] = reactCoreLibraryReexport.useState(() => typeof document == "undefined" ? Infinity : document.body.clientWidth);
    let n = useMediaQueryHook.mediaQueryHook({
      maxWidth: chatLayoutDimensions.chatPanelWidth - 1
    }, t < chatLayoutDimensions.chatPanelWidth);
    let a = useMediaQueryHook.mediaQueryHook({
      maxWidth: chatLayoutDimensions.maxScreenWidth - 1
    }, t < chatLayoutDimensions.maxScreenWidth);
    if (e) {
      return a;
    } else {
      return n;
    }
  };
  let l = e => {
    let {
      isLeftSideExpand: t,
      isRightBarExpand: n
    } = e;
    let i = a(n);
    return {
      visible: !t || i,
      isSidebarResponsiveHide: i
    };
  };
  require.d(exports, {
    useSidebarVisibility: function () {
      return l;
    },
    useChatMediaQuery: function () {
      return a;
    }
  });
}