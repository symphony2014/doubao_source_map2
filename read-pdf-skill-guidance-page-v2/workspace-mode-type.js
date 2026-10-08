// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'o' to 'WorkModeType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24618.f0502e34.js
         * chunkId: 24618
         * moduleId: 569606
         */
module.exports = function (module, exports, require) {
  var i;
  (i = {})[i.Normal = 0] = "Normal";
  i[i.Workspace = 101] = "Workspace";
  let a = i;
  require.d(exports, {
    WorkModeType: function () {
      return a;
    }
  });
}