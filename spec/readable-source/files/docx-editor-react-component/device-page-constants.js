// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'G' to 'deviceTypes'
// - Renamed export 'X' to 'pageTypes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 21824.a596cfb5.js
         * chunkId: 21824
         * moduleId: 53073
         */
module.exports = function (module, exports, require) {
  var n;
  var o;
  (n = {}).MOUSE = "mouse";
  n.TRACKPAD = "trackpad";
  n.OTHER = "other";
  let l = n;
  (o = {}).PAGEMAIN = "pageMain";
  o.PRESENTATION = "presentation";
  o.HISTORY = "history";
  let s = o;
  require.d(exports, {
    deviceTypes: function () {
      return l;
    },
    pageTypes: function () {
      return s;
    }
  });
}