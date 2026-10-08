// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45310.b344db4b.js
         * chunkId: 45310
         * moduleId: 548900
         */
module.exports = function (module, exports, require) {
  var r = exports;
  r.length = function (e) {
    var t = 0;
    var r = 0;
    var n = 0;
    for (; n < e.length; ++n) {
      if ((r = e.charCodeAt(n)) < 128) {
        t += 1;
      } else if (r < 2048) {
        t += 2;
      } else if ((r & 64512) == 55296 && (e.charCodeAt(n + 1) & 64512) == 56320) {
        ++n;
        t += 4;
      } else {
        t += 3;
      }
    }
    return t;
  };
  r.read = function (e, t, r) {
    if (r - t < 1) {
      return "";
    }
    var n;
    var i = null;
    var s = [];
    var o = 0;
    while (t < r) {
      if ((n = e[t++]) < 128) {
        s[o++] = n;
      } else if (n > 191 && n < 224) {
        s[o++] = (n & 31) << 6 | e[t++] & 63;
      } else if (n > 239 && n < 365) {
        n = ((n & 7) << 18 | (e[t++] & 63) << 12 | (e[t++] & 63) << 6 | e[t++] & 63) - 65536;
        s[o++] = 55296 + (n >> 10);
        s[o++] = 56320 + (n & 1023);
      } else {
        s[o++] = (n & 15) << 12 | (e[t++] & 63) << 6 | e[t++] & 63;
      }
      if (o > 8191) {
        (i ||= []).push(String.fromCharCode.apply(String, s));
        o = 0;
      }
    }
    if (i) {
      if (o) {
        i.push(String.fromCharCode.apply(String, s.slice(0, o)));
      }
      return i.join("");
    } else {
      return String.fromCharCode.apply(String, s.slice(0, o));
    }
  };
  r.write = function (e, t, r) {
    var n;
    var i;
    var s = r;
    var o = 0;
    for (; o < e.length; ++o) {
      if ((n = e.charCodeAt(o)) < 128) {
        t[r++] = n;
      } else {
        if (n < 2048) {
          t[r++] = n >> 6 | 192;
        } else {
          if ((n & 64512) == 55296 && ((i = e.charCodeAt(o + 1)) & 64512) == 56320) {
            n = 65536 + ((n & 1023) << 10) + (i & 1023);
            ++o;
            t[r++] = n >> 18 | 240;
            t[r++] = n >> 12 & 63 | 128;
          } else {
            t[r++] = n >> 12 | 224;
          }
          t[r++] = n >> 6 & 63 | 128;
        }
        t[r++] = n & 63 | 128;
      }
    }
    return r - s;
  };
}