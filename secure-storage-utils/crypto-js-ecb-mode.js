// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(689014) to 'crypto-js-core-lib'
// - Resolved require(142493) to 'crypto-cipher-core'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 55711.a6eb22ed.js
         * chunkId: 55711
         * moduleId: 48326
         */
module.exports = function (module, exports, require) {
  var n;
  n = function (e) {
    var t;
    e.mode.ECB = ((t = e.lib.BlockCipherMode.extend()).Encryptor = t.extend({
      processBlock: function (e, t) {
        this._cipher.encryptBlock(e, t);
      }
    }), t.Decryptor = t.extend({
      processBlock: function (e, t) {
        this._cipher.decryptBlock(e, t);
      }
    }), t);
    return e.mode.ECB;
  };
  module.exports = n(require("crypto-js-core-lib") /*id: 689014*/, require("crypto-cipher-core") /*id: 142493*/);
}