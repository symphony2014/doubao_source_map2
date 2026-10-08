// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'p' to 'generateHash'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 15236.8a9a9ca2.js
         * chunkId: 15236
         * moduleId: 703059
         */
module.exports = function (module, exports, require) {
  var md5HashUtil_1 = require("md5-hash-util_1") /*id: 773120*/;
  var o = md5HashUtil_1;
  var cryptoJsSha1Impl = require("crypto-js-sha1-impl") /*id: 634541*/;
  var i = cryptoJsSha1Impl;
  function c(t) {
    var e = String(t);
    return i("08a441" + o(e + "42b91e")).toString();
  }
  require.d(exports, {
    generateHash: function () {
      return c;
    }
  });
}