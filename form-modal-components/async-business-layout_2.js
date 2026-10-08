// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$' to 'ResourceType'
// - Renamed export 'P' to 'ArtifactResType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 878823
         */
module.exports = function (module, exports, require) {
  var artifactEnumConstants = require("artifact-enum-constants") /*id: 912769*/;
  let {
    ArtifactResourceType: r
  } = require("artifact-resource-type") /*id: 310450*/;
  let {
    ArtifactResourceType: o
  } = artifactEnumConstants;
  require.d(exports, {
    ResourceType: function () {
      return r;
    },
    ArtifactResType: function () {
      return o;
    }
  });
}