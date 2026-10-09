// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'chatConstantsEnum'
// - Resolved require(876559) to 'chat-constants-enum'
// - Resolved require(927927) to 'merge-route-planning-symbol'
// - Updated imported property 'N' to 'mergeRoutePlanning' (module 927927)
// - Updated imported property 'zc' to 'messageContentType' (module 876559)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-content-block-merge.46483c4c.js
         * chunkId: 71023
         * moduleId: 681063
         */
module.exports = function (module, exports, require) {
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  let i = {
    pluginIdentifier: require("merge-route-planning-symbol") /*id: 927927*/.mergeRoutePlanning,
    matchContentBlock: t => t === chatConstantsEnum.messageContentType.BLOCK_ROUTE_PLAN
  };
  require.r(exports);
  require.d(exports, {
    MergeRoutePlanningBlockPluginMatcher: function () {
      return i;
    }
  });
}