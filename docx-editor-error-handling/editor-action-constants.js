// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'G' to 'actionTypes'
// - Renamed export 'M' to 'operationTypes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 216889
         */
module.exports = function (module, exports, require) {
  var n;
  var o;
  (n = {}).TURNINTO = "turninto";
  n.MOVE = "move";
  n.INSERT = "insert";
  n.REMOVE = "remove";
  n.PASTE = "paste";
  n.MARKDOWN = "markdown";
  let l = n;
  (o = {}).TURNINTO_INSERT = "TURNINTO_INSERT";
  o.TURNINTO_REMOVE = "TURNINTO_REMOVE";
  o.INSERT = "INSERT";
  o.REMOVE = "REMOVE";
  let s = o;
  require.d(exports, {
    actionTypes: function () {
      return s;
    },
    operationTypes: function () {
      return l;
    }
  });
}