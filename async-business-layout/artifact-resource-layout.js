// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$' to 'ArtifactResource'
// - Renamed export 'X' to 'layoutConstants'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 10991.1ee21c16.js
         * chunkId: 10991
         * moduleId: 774071
         */
module.exports = function (module, exports, require) {
  var r;
  let {
    ArtifactResourceType: n
  } = require("artifact-resource-type") /*id: 310450*/;
  (r = {}).MobileDoc = "mobile_doc";
  let i = r;
  require.d(exports, {
    ArtifactResource: function () {
      return n;
    },
    layoutConstants: function () {
      return i;
    }
  });
}