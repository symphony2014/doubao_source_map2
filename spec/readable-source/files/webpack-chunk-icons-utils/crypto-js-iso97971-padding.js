// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(938302) to 'crypto-js-core'
// - Resolved require(698370) to 'crypto-js-cipher-core'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 37204.6399fc74.js
         * chunkId: 37204
         * moduleId: 951098
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
  module.exports = n(require("crypto-js-core") /*id: 938302*/, require("crypto-js-cipher-core") /*id: 698370*/);
}