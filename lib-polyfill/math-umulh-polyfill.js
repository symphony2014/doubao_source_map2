// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(358006) to 'polyfill-property-definer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 249427
         */
module.exports = function (module, exports, require) {
  require("polyfill-property-definer") /*id: 358006*/({
    target: "Math",
    stat: true,
    forced: true
  }, {
    umulh: function (t, r) {
      var e = +t;
      var n = +r;
      var o = e & 65535;
      var i = n & 65535;
      var a = e >>> 16;
      var u = n >>> 16;
      var c = (a * i >>> 0) + (o * i >>> 16);
      return a * u + (c >>> 16) + ((o * u >>> 0) + (c & 65535) >>> 16);
    }
  });
}