// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Qp' to 'useSidebarStatus'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 703029
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var breakpointConstants = require("breakpoint-constants") /*id: 488875*/;
  var sidebarStatusUpdateLogger = require("sidebar-status-update-logger") /*id: 140188*/;
  let l = typeof window != "undefined" && document.body.clientWidth <= breakpointConstants.breakpointConstants["dbx-breakpoint-xs"].valueInPx;
  let s = () => {
    let e = reactCoreLibraryReexport.useRef(true);
    let t = chatStoreManager.useStoreSelector("flowWebLayoutStore", t => {
      e.current;
      if (t.sidebarStatus === "open") {
        return "open";
      } else {
        return "closed";
      }
    });
    reactCoreLibraryReexport.useEffect(() => {
      e.current = false;
      if (l) {
        sidebarStatusUpdateLogger.logUpdateSidebarStatus("closed", "try_close_sidebar_by_IS_FLOAT_SIDEBAR");
      }
    }, []);
    return t;
  };
  require.d(exports, {
    useSidebarStatus: function () {
      return s;
    }
  });
}