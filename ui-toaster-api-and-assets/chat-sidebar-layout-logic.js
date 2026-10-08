// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'I' to 'getChatLayoutState'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 34843.105268c8.js
         * chunkId: 34843
         * moduleId: 947890
         */
module.exports = function (module, exports, require) {
  var chatSidebarLogic = require("chat-sidebar-logic") /*id: 265614*/;
  var chatSidebarStateManager = require("chat-sidebar-state-manager") /*id: 496970*/;
  var chatPanelModes = require("chat-panel-modes") /*id: 690886*/;
  let o = e => {
    let i;
    let {
      isRightSideExpand: t,
      canvasLayoutState: o
    } = e;
    if (!t) {
      return;
    }
    try {
      i = chatSidebarStateManager.getSidebarExpandState();
    } catch {
      i = chatSidebarLogic.checkSidebarFlag(document.cookie);
    }
    if (!i) {
      return String(3);
    }
    let s = o === chatPanelModes.PanelMode.FULL_PANEL || o === chatPanelModes.PanelMode.FULL_IMMERSIVE ? "full" : o === chatPanelModes.PanelMode.NARROW_SIDE_PANEL ? "narrow" : "default";
    if (s === "full" || (s === "narrow" ? window.innerWidth <= 1080 && window.innerWidth > 800 : window.innerWidth <= 1920 && window.innerWidth > 800)) {
      return String(3);
    } else {
      return String(7);
    }
  };
  require.d(exports, {
    getChatLayoutState: function () {
      return o;
    }
  });
}