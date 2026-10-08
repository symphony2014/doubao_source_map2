// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'l' to 'resolvePanelMode'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 10782.3050e48d.js
         * chunkId: 10782
         * moduleId: 424315
         */
module.exports = function (module, exports, require) {
  var chatPanelModes = require("chat-panel-modes") /*id: 690886*/;
  var chatLayoutDimensions = require("chat-layout-dimensions") /*id: 519623*/;
  let r = function (e) {
    let r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : () => {
      if (typeof document == "undefined") {
        return undefined;
      } else {
        return document.getElementById("root")?.clientWidth;
      }
    };
    let s = e.canvasLayoutState ?? chatPanelModes.PanelMode.SIDE_PANEL;
    let o = (r() ?? Infinity) < chatLayoutDimensions.contentWidth;
    switch (s) {
      case chatPanelModes.PanelMode.SIDE_PANEL:
        if (o) {
          return "full_panel";
        } else {
          return "side_panel";
        }
      case chatPanelModes.PanelMode.CANVAS_ONLY:
        if (o) {
          return "canvas_only";
        } else {
          return "side_panel";
        }
      case chatPanelModes.PanelMode.FULL_IMMERSIVE:
        return "full_immersive";
      case chatPanelModes.PanelMode.FULL_PANEL:
        return "full_panel";
      case chatPanelModes.PanelMode.NARROW_SIDE_PANEL:
        if (o) {
          return "full_panel";
        } else {
          return "narrow_side_panel";
        }
      default:
        return "side_panel";
    }
  };
  require.d(exports, {
    resolvePanelMode: function () {
      return r;
    }
  });
}