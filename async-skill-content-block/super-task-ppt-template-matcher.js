// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(204098) to 'super-task-ppt-selector'
// - Updated imported property 'g' to 'pptTemplateSelector' (module 204098)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 465847
         */
module.exports = function (module, exports, require) {
  let i = {
    pluginIdentifier: require("super-task-ppt-selector") /*id: 204098*/.pptTemplateSelector,
    matchContentBlock: e => e === 10059
  };
  require.r(exports);
  require.d(exports, {
    superTaskPPTTemplateMatcher: function () {
      return i;
    }
  });
}