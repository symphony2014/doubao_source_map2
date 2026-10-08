// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45310.b344db4b.js
         * chunkId: 45310
         * moduleId: 251759
         */
module.exports = function (module, exports, require) {
  function t(e) {
    if (typeof Float32Array != "undefined") {
      (function () {
        var t = new Float32Array([-0]);
        var r = new Uint8Array(t.buffer);
        var n = r[3] === 128;
        function i(e, n, i) {
          t[0] = e;
          n[i] = r[0];
          n[i + 1] = r[1];
          n[i + 2] = r[2];
          n[i + 3] = r[3];
        }
        function s(e, n, i) {
          t[0] = e;
          n[i] = r[3];
          n[i + 1] = r[2];
          n[i + 2] = r[1];
          n[i + 3] = r[0];
        }
        function o(e, n) {
          r[0] = e[n];
          r[1] = e[n + 1];
          r[2] = e[n + 2];
          r[3] = e[n + 3];
          return t[0];
        }
        function a(e, n) {
          r[3] = e[n];
          r[2] = e[n + 1];
          r[1] = e[n + 2];
          r[0] = e[n + 3];
          return t[0];
        }
        e.writeFloatLE = n ? i : s;
        e.writeFloatBE = n ? s : i;
        e.readFloatLE = n ? o : a;
        e.readFloatBE = n ? a : o;
      })();
    } else {
      (function () {
        function t(e, t, r, n) {
          var i = +(t < 0);
          if (i) {
            t = -t;
          }
          if (t === 0) {
            e(1 / t > 0 ? 0 : 2147483648, r, n);
          } else if (isNaN(t)) {
            e(2143289344, r, n);
          } else if (t > 3.4028234663852886e+38) {
            e((i << 31 | 2139095040) >>> 0, r, n);
          } else if (t < 1.1754943508222875e-38) {
            e((i << 31 | Math.round(t / 1.401298464324817e-45)) >>> 0, r, n);
          } else {
            var s = Math.floor(Math.log(t) / Math.LN2);
            var o = Math.round(t * Math.pow(2, -s) * 8388608) & 8388607;
            e((i << 31 | s + 127 << 23 | o) >>> 0, r, n);
          }
        }
        function o(e, t, r) {
          var n = e(t, r);
          var i = (n >> 31) * 2 + 1;
          var s = n >>> 23 & 255;
          var o = n & 8388607;
          if (s === 255) {
            if (o) {
              return NaN;
            } else {
              return i * Infinity;
            }
          } else if (s === 0) {
            return i * 1.401298464324817e-45 * o;
          } else {
            return i * Math.pow(2, s - 150) * (o + 8388608);
          }
        }
        e.writeFloatLE = t.bind(null, r);
        e.writeFloatBE = t.bind(null, n);
        e.readFloatLE = o.bind(null, i);
        e.readFloatBE = o.bind(null, s);
      })();
    }
    if (typeof Float64Array != "undefined") {
      (function () {
        var t = new Float64Array([-0]);
        var r = new Uint8Array(t.buffer);
        var n = r[7] === 128;
        function i(e, n, i) {
          t[0] = e;
          n[i] = r[0];
          n[i + 1] = r[1];
          n[i + 2] = r[2];
          n[i + 3] = r[3];
          n[i + 4] = r[4];
          n[i + 5] = r[5];
          n[i + 6] = r[6];
          n[i + 7] = r[7];
        }
        function s(e, n, i) {
          t[0] = e;
          n[i] = r[7];
          n[i + 1] = r[6];
          n[i + 2] = r[5];
          n[i + 3] = r[4];
          n[i + 4] = r[3];
          n[i + 5] = r[2];
          n[i + 6] = r[1];
          n[i + 7] = r[0];
        }
        function o(e, n) {
          r[0] = e[n];
          r[1] = e[n + 1];
          r[2] = e[n + 2];
          r[3] = e[n + 3];
          r[4] = e[n + 4];
          r[5] = e[n + 5];
          r[6] = e[n + 6];
          r[7] = e[n + 7];
          return t[0];
        }
        function a(e, n) {
          r[7] = e[n];
          r[6] = e[n + 1];
          r[5] = e[n + 2];
          r[4] = e[n + 3];
          r[3] = e[n + 4];
          r[2] = e[n + 5];
          r[1] = e[n + 6];
          r[0] = e[n + 7];
          return t[0];
        }
        e.writeDoubleLE = n ? i : s;
        e.writeDoubleBE = n ? s : i;
        e.readDoubleLE = n ? o : a;
        e.readDoubleBE = n ? a : o;
      })();
    } else {
      (function () {
        function t(e, t, r, n, i, s) {
          var o;
          var a = +(n < 0);
          if (a) {
            n = -n;
          }
          if (n === 0) {
            e(0, i, s + t);
            e(1 / n > 0 ? 0 : 2147483648, i, s + r);
          } else if (isNaN(n)) {
            e(0, i, s + t);
            e(2146959360, i, s + r);
          } else if (n > 1.7976931348623157e+308) {
            e(0, i, s + t);
            e((a << 31 | 2146435072) >>> 0, i, s + r);
          } else if (n < 2.2250738585072014e-308) {
            e((o = n / 5e-324) >>> 0, i, s + t);
            e((a << 31 | o / 4294967296) >>> 0, i, s + r);
          } else {
            var c = Math.floor(Math.log(n) / Math.LN2);
            if (c === 1024) {
              c = 1023;
            }
            e((o = n * Math.pow(2, -c)) * 4503599627370496 >>> 0, i, s + t);
            e((a << 31 | c + 1023 << 20 | o * 1048576 & 1048575) >>> 0, i, s + r);
          }
        }
        function o(e, t, r, n, i) {
          var s = e(n, i + t);
          var o = e(n, i + r);
          var a = (o >> 31) * 2 + 1;
          var c = o >>> 20 & 2047;
          var l = (o & 1048575) * 4294967296 + s;
          if (c === 2047) {
            if (l) {
              return NaN;
            } else {
              return a * Infinity;
            }
          } else if (c === 0) {
            return a * 5e-324 * l;
          } else {
            return a * Math.pow(2, c - 1075) * (l + 4503599627370496);
          }
        }
        e.writeDoubleLE = t.bind(null, r, 0, 4);
        e.writeDoubleBE = t.bind(null, n, 4, 0);
        e.readDoubleLE = o.bind(null, i, 0, 4);
        e.readDoubleBE = o.bind(null, s, 4, 0);
      })();
    }
    return e;
  }
  function r(e, t, r) {
    t[r] = e & 255;
    t[r + 1] = e >>> 8 & 255;
    t[r + 2] = e >>> 16 & 255;
    t[r + 3] = e >>> 24;
  }
  function n(e, t, r) {
    t[r] = e >>> 24;
    t[r + 1] = e >>> 16 & 255;
    t[r + 2] = e >>> 8 & 255;
    t[r + 3] = e & 255;
  }
  function i(e, t) {
    return (e[t] | e[t + 1] << 8 | e[t + 2] << 16 | e[t + 3] << 24) >>> 0;
  }
  function s(e, t) {
    return (e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]) >>> 0;
  }
  module.exports = t(t);
}