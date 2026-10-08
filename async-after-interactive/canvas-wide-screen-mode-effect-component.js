// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'chatCanvasLayoutHook'
// - Resolved require(342022) to 'chat-canvas-layout-hook'
// - Updated imported property 'O' to 'useChatCanvasLayout' (module 342022)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-after-interactive.9af05afc.js
         * chunkId: 87048
         * moduleId: 941557
         */
module.exports = function (module, exports, require) {
  var chatCanvasLayoutHook = require("chat-canvas-layout-hook") /*id: 342022*/;
  let a = e => {
    let {
      enableUrlSync: t
    } = e;
    chatCanvasLayoutHook.useChatCanvasLayout({
      enableUrlSync: t
    });
    return null;
  };
  exports.default = a;
  require.r(exports);
  require.d(exports, {
    CanvasWideScreenModeEffect: function () {
      return a;
    }
  });
}