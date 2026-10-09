// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Im' to 'emptyArtifactField'
// - Renamed export 'SB' to 'artifactLimit'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 26997
         */
module.exports = function (module, exports, require) {
  let i = "empty_artifact_field";
  let l = 100000;
  require.d(exports, {
    emptyArtifactField: function () {
      return i;
    },
    artifactLimit: function () {
      return l;
    }
  });
}