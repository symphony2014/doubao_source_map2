// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(938302) to 'crypto-js-core'
// - Resolved require(698370) to 'crypto-js-cipher-core'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 37204.6399fc74.js
         * chunkId: 37204
         * moduleId: 433502
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
  module.exports = n(require("crypto-js-core") /*id: 938302*/, require("crypto-js-cipher-core") /*id: 698370*/);
}