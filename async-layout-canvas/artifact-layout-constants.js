// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'AA' to 'mainResourceIndex'
// - Renamed export 'VL' to 'subResourceIndex'
// - Renamed export 'sU' to 'supportedResources'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 554108
         */
module.exports = function (module, exports, require) {
  var artifactResourceLayout = require("artifact-resource-layout") /*id: 774071*/;
  let r = -1;
  let o = -1;
  let a = [artifactResourceLayout.ArtifactResource.WriteDoc, artifactResourceLayout.ArtifactResource.Pages, artifactResourceLayout.ArtifactResource.StepWritingPages, artifactResourceLayout.ArtifactResource.CanvasPages, artifactResourceLayout.ArtifactResource.DocxPage, artifactResourceLayout.ArtifactResource.StepWritingOtterPage, artifactResourceLayout.ArtifactResource.StepDocxPage];
  require.d(exports, {
    mainResourceIndex: function () {
      return o;
    },
    subResourceIndex: function () {
      return r;
    },
    supportedResources: function () {
      return a;
    }
  });
}