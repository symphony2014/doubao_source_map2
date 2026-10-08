// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'rM' to 'NodePosition'
// - Renamed export 'u1' to 'DirectionType'
// - Renamed export 'uW' to 'BlockStatus'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 577678
         */
module.exports = function (module, exports, require) {
  var o;
  var i;
  var l;
  (o = {})[o.UP = 0] = "UP";
  o[o.DOWN = 1] = "DOWN";
  o[o.LEFT = 2] = "LEFT";
  o[o.RIGHT = 3] = "RIGHT";
  let c = o;
  (i = {}).Head = "Head";
  i.Tail = "Tail";
  let u = i;
  (l = {})[l.NO_PARENT_OR_GRANDPARENT = 0] = "NO_PARENT_OR_GRANDPARENT";
  l[l.NOT_NESTABLE_BLOCK = 1] = "NOT_NESTABLE_BLOCK";
  l[l.SUCCESS = 2] = "SUCCESS";
  let a = l;
  require.d(exports, {
    NodePosition: function () {
      return u;
    },
    DirectionType: function () {
      return c;
    },
    BlockStatus: function () {
      return a;
    }
  });
}