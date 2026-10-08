// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'd' to 'isCanvasExpanded'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 59170.744060e8.js
         * chunkId: 59170
         * moduleId: 564599
         */
module.exports = function (module, exports, require) {
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var aiPptSlideCanvasModule = require("ai-ppt-slide-canvas-module") /*id: 186183*/;
  function l() {
    let {
      isExpand: e,
      matchedCanvasPluginIdentifier: t
    } = chatStoreManager.useStore("chatViewCanvasStore").getState();
    return !!e && t === aiPptSlideCanvasModule.canvasElementId;
  }
  require.d(exports, {
    isCanvasExpanded: function () {
      return l;
    }
  });
}