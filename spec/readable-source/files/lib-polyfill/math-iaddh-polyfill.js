// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(358006) to 'polyfill-property-definer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 402975
         */
module.exports = function (module, exports, require) {
  require("polyfill-property-definer") /*id: 358006*/({
    target: "Math",
    stat: true,
    forced: true
  }, {
    iaddh: function (t, r, e, n) {
      var o = t >>> 0;
      var i = e >>> 0;
      return (r >>> 0) + (n >>> 0) + ((o & i | (o | i) & ~(o + i >>> 0)) >>> 31) | 0;
    }
  });
}