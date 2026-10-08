// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'r' to 'compareLineAttrs'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 13032.fea06b08.js
         * chunkId: 13032
         * moduleId: 925951
         */
module.exports = function (module, exports, require) {
  var deepEqualityCheck_1 = require("deep-equality-check_1") /*id: 956585*/;
  function o(e, t) {
    var n = e.hasLineMarker();
    var o = t.hasLineMarker();
    return o !== n || !!o && !!n && !deepEqualityCheck_1.deepEqual(e.getLineAttributes(), t.getLineAttributes());
  }
  require.d(exports, {
    compareLineAttrs: function () {
      return o;
    }
  });
}