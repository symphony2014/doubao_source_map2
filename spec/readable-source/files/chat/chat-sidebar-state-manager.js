// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'zo' to 'openSidebarIfDid'
// - Renamed export 'rU' to 'useSidebarExpandState'
// - Renamed export 'XX' to 'getSidebarExpandState'
// - Renamed export 'nZ' to 'setSidebarExpand'
// - Renamed export 'yR' to 'toggleMobileSidebarExpand'
// - Renamed export 'GQ' to 'updateSidebarExpand'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 496970
         */
module.exports = function (module, exports, require) {
  var isErrorUtil = require("is-error-util") /*id: 597114*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var sidebarStatusUpdateLogger = require("sidebar-status-update-logger") /*id: 140188*/;
  var chatLayoutDimensions = require("chat-layout-dimensions") /*id: 519623*/;
  let s = () => typeof document != "undefined" && document.body.clientWidth < (chatStoreManager.getStoreState("chatViewCanvasStore").isExpand ? chatLayoutDimensions.maxScreenWidth : chatLayoutDimensions.chatPanelWidth);
  let u = () => chatStoreManager.useStoreSelector("sidebarStore", e => e.isExpand);
  let c = e => {
    chatStoreManager.getStore("sidebarStore").setState({
      isExpand: e,
      hasInteracted: true,
      hasExpandInteracted: true,
      hasExpandLinkageChanged: false
    });
    try {
      sidebarStatusUpdateLogger.updateSidebarStatus(e ? "open" : "closed", "old_sidebar_expand");
    } catch {}
  };
  let d = e => {
    chatStoreManager.getStore("sidebarStore").setState({
      isExpand: e
    });
  };
  let h = () => chatStoreManager.getStoreState("sidebarStore").isExpand;
  let m = () => {
    if (s()) {
      chatStoreManager.getStore("sidebarStore").setState(e => {
        let {
          isMobileExpand: t
        } = e;
        return {
          isMobileExpand: !t
        };
      });
    }
  };
  let g = () => {
    try {
      d(true);
    } catch (e) {
      if (isErrorUtil.isError(e)) {
        loggerServiceCore.defaultLogger.persist.error({
          message: "openSidebarIfDid error",
          error: e
        });
      }
    }
  };
  require.d(exports, {
    openSidebarIfDid: function () {
      return g;
    },
    useSidebarExpandState: function () {
      return u;
    },
    getSidebarExpandState: function () {
      return h;
    },
    setSidebarExpand: function () {
      return d;
    },
    toggleMobileSidebarExpand: function () {
      return m;
    },
    updateSidebarExpand: function () {
      return c;
    }
  });
}