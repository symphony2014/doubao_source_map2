// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'generateUuid'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11671.ea21fc6d.js
         * chunkId: 11671
         * moduleId: 278878
         */
module.exports = function (module, exports, require) {
  let i;
  let r;
  var cryptoRngUtil = require("crypto-rng-util") /*id: 347818*/;
  var uuidFromBytes = require("uuid-from-bytes") /*id: 514862*/;
  let o = 0;
  let l = 0;
  exports.generateUuid = function (e, t, n) {
    let u = t && n || 0;
    let c = t || Array(16);
    let d = (e = e || {}).node || i;
    let f = e.clockseq !== undefined ? e.clockseq : r;
    if (d == null || f == null) {
      let t = e.random || (e.rng || cryptoRngUtil.cryptoRng)();
      if (d == null) {
        d = i = [t[0] | 1, t[1], t[2], t[3], t[4], t[5]];
      }
      if (f == null) {
        f = r = (t[6] << 8 | t[7]) & 16383;
      }
    }
    let h = e.msecs !== undefined ? e.msecs : Date.now();
    let p = e.nsecs !== undefined ? e.nsecs : l + 1;
    let m = h - o + (p - l) / 10000;
    if (m < 0 && e.clockseq === undefined) {
      f = f + 1 & 16383;
    }
    if ((m < 0 || h > o) && e.nsecs === undefined) {
      p = 0;
    }
    if (p >= 10000) {
      throw Error("uuid.v1(): Can't create more than 10M uuids/sec");
    }
    o = h;
    l = p;
    r = f;
    let g = (((h += 12219292800000) & 268435455) * 10000 + p) % 4294967296;
    c[u++] = g >>> 24 & 255;
    c[u++] = g >>> 16 & 255;
    c[u++] = g >>> 8 & 255;
    c[u++] = g & 255;
    let _ = h / 4294967296 * 10000 & 268435455;
    c[u++] = _ >>> 8 & 255;
    c[u++] = _ & 255;
    c[u++] = _ >>> 24 & 15 | 16;
    c[u++] = _ >>> 16 & 255;
    c[u++] = f >>> 8 | 128;
    c[u++] = f & 255;
    for (let e = 0; e < 6; ++e) {
      c[u + e] = d[e];
    }
    return t || uuidFromBytes.uuidFromBytes(c);
  };
}