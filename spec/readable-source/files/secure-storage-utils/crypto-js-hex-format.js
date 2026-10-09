// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(689014) to 'crypto-js-core-lib'
// - Resolved require(142493) to 'crypto-cipher-core'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 55711.a6eb22ed.js
         * chunkId: 55711
         * moduleId: 658503
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
  module.exports = n(require("crypto-js-core-lib") /*id: 689014*/, require("crypto-cipher-core") /*id: 142493*/);
}