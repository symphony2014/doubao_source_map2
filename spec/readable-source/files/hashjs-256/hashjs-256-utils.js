// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'assertUtil'
// - Resolved require(728410) to 'assert-util'
// - Renamed variable 'i' to 'inheritsHelper'
// - Resolved require(595924) to 'inherits-helper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: hashjs-256.6917a130.js
         * chunkId: 62121
         * moduleId: 281108
         */
module.exports = function (module, exports, require) {
  var assertUtil = require("assert-util") /*id: 728410*/;
  var inheritsHelper = require("inherits-helper") /*id: 595924*/;
  function h(t) {
    return (t >>> 24 | t >>> 8 & 65280 | t << 8 & 16711680 | (t & 255) << 24) >>> 0;
  }
  function o(t) {
    if (t.length === 1) {
      return "0" + t;
    } else {
      return t;
    }
  }
  function s(t) {
    if (t.length === 7) {
      return "0" + t;
    }
    if (t.length === 6) {
      return "00" + t;
    }
    if (t.length === 5) {
      return "000" + t;
    }
    if (t.length === 4) {
      return "0000" + t;
    }
    if (t.length === 3) {
      return "00000" + t;
    } else if (t.length === 2) {
      return "000000" + t;
    } else if (t.length === 1) {
      return "0000000" + t;
    } else {
      return t;
    }
  }
  exports.inherits = inheritsHelper;
  exports.toArray = function (t, n) {
    if (Array.isArray(t)) {
      return t.slice();
    }
    if (!t) {
      return [];
    }
    var e = [];
    if (typeof t == "string") {
      if (n) {
        if (n === "hex") {
          if ((t = t.replace(/[^a-z0-9]+/ig, "")).length % 2 != 0) {
            t = "0" + t;
          }
          i = 0;
          for (; i < t.length; i += 2) {
            e.push(parseInt(t[i] + t[i + 1], 16));
          }
        }
      } else {
        var r = 0;
        var i = 0;
        for (; i < t.length; i++) {
          var h;
          var o;
          var s = t.charCodeAt(i);
          if (s < 128) {
            e[r++] = s;
          } else {
            if (s < 2048) {
              e[r++] = s >> 6 | 192;
            } else {
              h = t;
              o = i;
              if ((h.charCodeAt(o) & 64512) != 55296 || o < 0 || o + 1 >= h.length ? 1 : (h.charCodeAt(o + 1) & 64512) != 56320) {
                e[r++] = s >> 12 | 224;
              } else {
                s = 65536 + ((s & 1023) << 10) + (t.charCodeAt(++i) & 1023);
                e[r++] = s >> 18 | 240;
                e[r++] = s >> 12 & 63 | 128;
              }
              e[r++] = s >> 6 & 63 | 128;
            }
            e[r++] = s & 63 | 128;
          }
        }
      }
    } else {
      for (i = 0; i < t.length; i++) {
        e[i] = t[i] | 0;
      }
    }
    return e;
  };
  exports.toHex = function (t) {
    var n = "";
    var e = 0;
    for (; e < t.length; e++) {
      n += o(t[e].toString(16));
    }
    return n;
  };
  exports.htonl = h;
  exports.toHex32 = function (t, n) {
    var e = "";
    var r = 0;
    for (; r < t.length; r++) {
      var i = t[r];
      if (n === "little") {
        i = h(i);
      }
      e += s(i.toString(16));
    }
    return e;
  };
  exports.zero2 = o;
  exports.zero8 = s;
  exports.join32 = function (t, n, e, i) {
    var h;
    var o = e - n;
    assertUtil(o % 4 == 0);
    var s = Array(o / 4);
    var c = 0;
    var u = n;
    for (; c < s.length; c++, u += 4) {
      h = i === "big" ? t[u] << 24 | t[u + 1] << 16 | t[u + 2] << 8 | t[u + 3] : t[u + 3] << 24 | t[u + 2] << 16 | t[u + 1] << 8 | t[u];
      s[c] = h >>> 0;
    }
    return s;
  };
  exports.split32 = function (t, n) {
    var e = Array(t.length * 4);
    var r = 0;
    var i = 0;
    for (; r < t.length; r++, i += 4) {
      var h = t[r];
      if (n === "big") {
        e[i] = h >>> 24;
        e[i + 1] = h >>> 16 & 255;
        e[i + 2] = h >>> 8 & 255;
        e[i + 3] = h & 255;
      } else {
        e[i + 3] = h >>> 24;
        e[i + 2] = h >>> 16 & 255;
        e[i + 1] = h >>> 8 & 255;
        e[i] = h & 255;
      }
    }
    return e;
  };
  exports.rotr32 = function (t, n) {
    return t >>> n | t << 32 - n;
  };
  exports.rotl32 = function (t, n) {
    return t << n | t >>> 32 - n;
  };
  exports.sum32 = function (t, n) {
    return t + n >>> 0;
  };
  exports.sum32_3 = function (t, n, e) {
    return t + n + e >>> 0;
  };
  exports.sum32_4 = function (t, n, e, r) {
    return t + n + e + r >>> 0;
  };
  exports.sum32_5 = function (t, n, e, r, i) {
    return t + n + e + r + i >>> 0;
  };
  exports.sum64 = function (t, n, e, r) {
    var i = t[n];
    var h = r + t[n + 1] >>> 0;
    t[n] = +(h < r) + e + i >>> 0;
    t[n + 1] = h;
  };
  exports.sum64_hi = function (t, n, e, r) {
    return +(n + r >>> 0 < n) + t + e >>> 0;
  };
  exports.sum64_lo = function (t, n, e, r) {
    return n + r >>> 0;
  };
  exports.sum64_4_hi = function (t, n, e, r, i, h, o, s) {
    var c;
    var u = n;
    return t + e + i + o + (c = 0 + +((u = u + r >>> 0) < n) + +((u = u + h >>> 0) < h) + +((u = u + s >>> 0) < s)) >>> 0;
  };
  exports.sum64_4_lo = function (t, n, e, r, i, h, o, s) {
    return n + r + h + s >>> 0;
  };
  exports.sum64_5_hi = function (t, n, e, r, i, h, o, s, c, u) {
    var f;
    var a = n;
    return t + e + i + o + c + (f = 0 + +((a = a + r >>> 0) < n) + +((a = a + h >>> 0) < h) + +((a = a + s >>> 0) < s) + +((a = a + u >>> 0) < u)) >>> 0;
  };
  exports.sum64_5_lo = function (t, n, e, r, i, h, o, s, c, u) {
    return n + r + h + s + u >>> 0;
  };
  exports.rotr64_hi = function (t, n, e) {
    return (n << 32 - e | t >>> e) >>> 0;
  };
  exports.rotr64_lo = function (t, n, e) {
    return (t << 32 - e | n >>> e) >>> 0;
  };
  exports.shr64_hi = function (t, n, e) {
    return t >>> e;
  };
  exports.shr64_lo = function (t, n, e) {
    return (t << 32 - e | n >>> e) >>> 0;
  };
}