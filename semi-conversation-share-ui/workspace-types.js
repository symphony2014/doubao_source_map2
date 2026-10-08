// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'E' to 'WorkspaceType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 33772.61785936.js
         * chunkId: 33772
         * moduleId: 700485
         */
module.exports = function (module, exports, require) {
  var r;
  (r = {})[r.TeamWorkspace = 0] = "TeamWorkspace";
  r[r.PersonalWorkspace = 1] = "PersonalWorkspace";
  let o = r;
  require.d(exports, {
    WorkspaceType: function () {
      return o;
    }
  });
}