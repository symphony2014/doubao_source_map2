// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'a' to 'useChatCanvasState'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 906955
         */
module.exports = function (module, exports, require) {
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  let o = () => chatStoreManager.useStoreSelector("chatViewCanvasStore", e => {
    let t = e.isExpand ? e.matchedCanvasPluginIdentifier : undefined;
    if (t) {
      return {
        sashPct: e.sashPctMap[String(t)],
        canvasExpandWithPreRender: e.isExpand && !!e.preRenderNodeId,
        matchedPluginName: String(t)
      };
    } else {
      return {};
    }
  }, deepEqualityUtil_1.isDeepEqual);
  require.d(exports, {
    useChatCanvasState: function () {
      return o;
    }
  });
}