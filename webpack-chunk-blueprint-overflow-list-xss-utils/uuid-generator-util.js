// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'generateUuid'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 641535
         */
module.exports = function (module, exports, require) {
  var r = {
    randomUUID: typeof crypto != "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto)
  };
  var cryptoRngUtil = require("crypto-rng-util") /*id: 347818*/;
  var uuidFromBytes = require("uuid-from-bytes") /*id: 514862*/;
  function a(e, t, n) {
    if (r.randomUUID && !t && !e) {
      return r.randomUUID();
    }
    let a = (e = e || {}).random || (e.rng || cryptoRngUtil.cryptoRng)();
    a[6] = a[6] & 15 | 64;
    a[8] = a[8] & 63 | 128;
    if (t) {
      n = n || 0;
      for (let e = 0; e < 16; ++e) {
        t[n + e] = a[e];
      }
      return t;
    }
    return uuidFromBytes.uuidFromBytes(a);
  }
  require.d(exports, {
    generateUuid: function () {
      return a;
    }
  });
}