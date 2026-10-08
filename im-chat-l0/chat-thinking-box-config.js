// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'W' to 'getThinkingBoxCfg'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: im-chat-l0.82349834.js
         * chunkId: 41884
         * moduleId: 474506
         */
module.exports = function (module, exports, require) {
  let l = (e, t) => {
    return {
      useThinkingBox: e.ext?.cot_ui_style === "summary_and_tool_result" || e.ext?.cot_ui_style === "summary"
    };
  };
  require.d(exports, {
    getThinkingBoxCfg: function () {
      return l;
    }
  });
}