// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'p' to 'BlockTypes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 68834.ebc1ffcc.js
         * chunkId: 68834
         * moduleId: 678364
         */
module.exports = function (module, exports, require) {
  var n;
  (n = {})[n.ContainerBlock = 0] = "ContainerBlock";
  n[n.EmbedBlock = 1] = "EmbedBlock";
  n[n.Inline = 2] = "Inline";
  let i = n;
  require.d(exports, {
    BlockTypes: function () {
      return i;
    }
  });
}