// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'H' to 'alignments'
// - Renamed export 'Z' to 'nodeTypes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 307129
         */
module.exports = function (module, exports, require) {
  var o;
  var i;
  (o = {}).BLOCK = "block";
  o.FILE = "file";
  o.LINE = "line";
  let l = o;
  (i = {}).left = "left";
  i.right = "right";
  i.top = "top";
  i.bottom = "bottom";
  let c = i;
  require.d(exports, {
    alignments: function () {
      return c;
    },
    nodeTypes: function () {
      return l;
    }
  });
}