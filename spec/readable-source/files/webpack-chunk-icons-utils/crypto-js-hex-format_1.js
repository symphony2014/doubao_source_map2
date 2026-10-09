// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(938302) to 'crypto-js-core'
// - Resolved require(698370) to 'crypto-js-cipher-core'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 37204.6399fc74.js
         * chunkId: 37204
         * moduleId: 734737
         */
module.exports = function (module, exports, require) {
  var n;
  n = function (e) {
    var t;
    var r;
    t = e.lib.CipherParams;
    r = e.enc.Hex;
    e.format.Hex = {
      stringify: function (e) {
        return e.ciphertext.toString(r);
      },
      parse: function (e) {
        var n = r.parse(e);
        return t.create({
          ciphertext: n
        });
      }
    };
    return e.format.Hex;
  };
  module.exports = n(require("crypto-js-core") /*id: 938302*/, require("crypto-js-cipher-core") /*id: 698370*/);
}