// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'commonBufferUtils'
// - Resolved require(408040) to 'common-buffer-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 19054.be6844dd.js
         * chunkId: 19054
         * moduleId: 796383
         */
module.exports = function (module, exports, require) {
  var commonBufferUtils = require("common-buffer-utils") /*id: 408040*/;
  var n = true;
  var o = true;
  try {
    String.fromCharCode.apply(null, [0]);
  } catch (t) {
    n = false;
  }
  try {
    String.fromCharCode.apply(null, new Uint8Array(1));
  } catch (t) {
    o = false;
  }
  var s = new commonBufferUtils.Buf8(256);
  var a = 0;
  for (; a < 256; a++) {
    s[a] = a >= 252 ? 6 : a >= 248 ? 5 : a >= 240 ? 4 : a >= 224 ? 3 : a >= 192 ? 2 : 1;
  }
  function l(t, e) {
    if (e < 65534 && (t.subarray && o || !t.subarray && n)) {
      return String.fromCharCode.apply(null, commonBufferUtils.shrinkBuf(t, e));
    }
    var r = "";
    var s = 0;
    for (; s < e; s++) {
      r += String.fromCharCode(t[s]);
    }
    return r;
  }
  s[254] = s[254] = 1;
  exports.string2buf = function (t) {
    var e;
    var r;
    var n;
    var o;
    var s;
    var a = t.length;
    var l = 0;
    for (o = 0; o < a; o++) {
      if (((r = t.charCodeAt(o)) & 64512) == 55296 && o + 1 < a && ((n = t.charCodeAt(o + 1)) & 64512) == 56320) {
        r = 65536 + (r - 55296 << 10) + (n - 56320);
        o++;
      }
      l += r < 128 ? 1 : r < 2048 ? 2 : r < 65536 ? 3 : 4;
    }
    s = 0;
    e = new commonBufferUtils.Buf8(l);
    o = 0;
    for (; s < l; o++) {
      if (((r = t.charCodeAt(o)) & 64512) == 55296 && o + 1 < a && ((n = t.charCodeAt(o + 1)) & 64512) == 56320) {
        r = 65536 + (r - 55296 << 10) + (n - 56320);
        o++;
      }
      if (r < 128) {
        e[s++] = r;
      } else {
        if (r < 2048) {
          e[s++] = r >>> 6 | 192;
        } else {
          if (r < 65536) {
            e[s++] = r >>> 12 | 224;
          } else {
            e[s++] = r >>> 18 | 240;
            e[s++] = r >>> 12 & 63 | 128;
          }
          e[s++] = r >>> 6 & 63 | 128;
        }
        e[s++] = r & 63 | 128;
      }
    }
    return e;
  };
  exports.buf2binstring = function (t) {
    return l(t, t.length);
  };
  exports.binstring2buf = function (t) {
    var e = new commonBufferUtils.Buf8(t.length);
    var r = 0;
    var n = e.length;
    for (; r < n; r++) {
      e[r] = t.charCodeAt(r);
    }
    return e;
  };
  exports.buf2string = function (t, e) {
    var r;
    var i;
    var n;
    var o;
    var a = e || t.length;
    var h = Array(a * 2);
    i = 0;
    r = 0;
    while (r < a) {
      if ((n = t[r++]) < 128) {
        h[i++] = n;
        continue;
      }
      if ((o = s[n]) > 4) {
        h[i++] = 65533;
        r += o - 1;
        continue;
      }
      for (n &= o === 2 ? 31 : o === 3 ? 15 : 7; o > 1 && r < a;) {
        n = n << 6 | t[r++] & 63;
        o--;
      }
      if (o > 1) {
        h[i++] = 65533;
        continue;
      }
      if (n < 65536) {
        h[i++] = n;
      } else {
        n -= 65536;
        h[i++] = n >> 10 & 1023 | 55296;
        h[i++] = n & 1023 | 56320;
      }
    }
    return l(h, i);
  };
  exports.utf8border = function (t, e) {
    var r;
    if ((e = e || t.length) > t.length) {
      e = t.length;
    }
    r = e - 1;
    while (r >= 0 && (t[r] & 192) == 128) {
      r--;
    }
    if (r < 0 || r === 0) {
      return e;
    } else if (r + s[t[r]] > e) {
      return r;
    } else {
      return e;
    }
  };
}