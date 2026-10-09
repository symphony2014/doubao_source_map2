// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'iA' to 'verticalAxis'
// - Renamed export 'rN' to 'gridAxis'
// - Renamed export 'rW' to 'horizontalAxis'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 32240.d3841114.js
         * chunkId: 32240
         * moduleId: 909193
         */
module.exports = function (module, exports, require) {
  var o;
  var i;
  var l;
  (o = {}).row = "row";
  o.col = "col";
  let a = o;
  (i = {}).top = "top";
  i.bottom = "bottom";
  let s = i;
  (l = {}).left = "left";
  l.right = "right";
  let c = l;
  require.d(exports, {
    verticalAxis: function () {
      return s;
    },
    gridAxis: function () {
      return a;
    },
    horizontalAxis: function () {
      return c;
    }
  });
}