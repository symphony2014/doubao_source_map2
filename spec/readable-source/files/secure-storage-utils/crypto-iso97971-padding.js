// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(689014) to 'crypto-js-core-lib'
// - Resolved require(142493) to 'crypto-cipher-core'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 55711.a6eb22ed.js
         * chunkId: 55711
         * moduleId: 963330
         */
module.exports = function (module, exports, require) {
  var n;
  n = function (e) {
    e.pad.Iso97971 = {
      pad: function (t, r) {
        t.concat(e.lib.WordArray.create([2147483648], 1));
        e.pad.ZeroPadding.pad(t, r);
      },
      unpad: function (t) {
        e.pad.ZeroPadding.unpad(t);
        t.sigBytes--;
      }
    };
    return e.pad.Iso97971;
  };
  module.exports = n(require("crypto-js-core-lib") /*id: 689014*/, require("crypto-cipher-core") /*id: 142493*/);
}