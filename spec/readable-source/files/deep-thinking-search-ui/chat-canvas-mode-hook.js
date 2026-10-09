// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A' to 'useChatCanvasMode'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 55821.62d46e89.js
         * chunkId: 55821
         * moduleId: 269582
         */
module.exports = function (module, exports, require) {
  var chatPanelModes = require("chat-panel-modes") /*id: 690886*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  let a = () => ({
    isCanvasNotNarrowMode: chatStoreManager.useStoreSelector("chatViewCanvasStore", e => !!e.matchedCanvasPluginIdentifier && e.canvasLayoutState !== chatPanelModes.PanelMode.NARROW_SIDE_PANEL)
  });
  require.d(exports, {
    useChatCanvasMode: function () {
      return a;
    }
  });
}