// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'dataAnalysisPluginId'
// - Resolved require(786129) to 'data-analysis-plugin-id'
// - Updated imported property 'o' to 'dataAnalysisPluginId' (module 786129)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-layout-canvas.ea59bc0c.js
         * chunkId: 78042
         * moduleId: 338869
         */
module.exports = function (module, exports, require) {
  var dataAnalysisPluginId = require("data-analysis-plugin-id") /*id: 786129*/;
  let r = e => {
    let {
      isAgentTask: t
    } = e;
    if (t) {
      return dataAnalysisPluginId.dataAnalysisPluginId;
    } else {
      return undefined;
    }
  };
  require.r(exports);
  require.d(exports, {
    dataAnalysisAgentTaskCanvasPluginMatcher: function () {
      return r;
    }
  });
}