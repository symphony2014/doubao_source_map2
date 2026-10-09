// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'MJ' to 'encodingFormats'
// - Renamed export 'Mx' to 'upstreamEncKey'
// - Renamed export 'Nh' to 'downstreamEncKey'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45310.b344db4b.js
         * chunkId: 45310
         * moduleId: 328371
         */
module.exports = function (module, exports, require) {
  var n;
  (function (e) {
    e.PB = "pb";
    e.JSON = "json";
  })(n ||= {});
  let i = "upstream_encoding";
  let s = "downstream_encoding";
  require.d(exports, {
    encodingFormats: function () {
      return n;
    },
    upstreamEncKey: function () {
      return i;
    },
    downstreamEncKey: function () {
      return s;
    }
  });
}