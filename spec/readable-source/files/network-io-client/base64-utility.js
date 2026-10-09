// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45310.b344db4b.js
         * chunkId: 45310
         * moduleId: 81064
         */
module.exports = function (module, exports, require) {
  var r = exports;
  r.length = function (e) {
    var t = e.length;
    if (!t) {
      return 0;
    }
    var r = 0;
    for (; --t % 4 > 1 && e.charAt(t) === "=";) {
      ++r;
    }
    return Math.ceil(e.length * 3) / 4 - r;
  };
  var n = Array(64);
  var i = Array(123);
  var s = 0;
  while (s < 64) {
    i[n[s] = s < 26 ? s + 65 : s < 52 ? s + 71 : s < 62 ? s - 4 : s - 59 | 43] = s++;
  }
  r.encode = function (e, t, r) {
    var i;
    var s = null;
    var o = [];
    var a = 0;
    var c = 0;
    while (t < r) {
      var l = e[t++];
      switch (c) {
        case 0:
          o[a++] = n[l >> 2];
          i = (l & 3) << 4;
          c = 1;
          break;
        case 1:
          o[a++] = n[i | l >> 4];
          i = (l & 15) << 2;
          c = 2;
          break;
        case 2:
          o[a++] = n[i | l >> 6];
          o[a++] = n[l & 63];
          c = 0;
      }
      if (a > 8191) {
        (s ||= []).push(String.fromCharCode.apply(String, o));
        a = 0;
      }
    }
    if (c) {
      o[a++] = n[i];
      o[a++] = 61;
      if (c === 1) {
        o[a++] = 61;
      }
    }
    if (s) {
      if (a) {
        s.push(String.fromCharCode.apply(String, o.slice(0, a)));
      }
      return s.join("");
    } else {
      return String.fromCharCode.apply(String, o.slice(0, a));
    }
  };
  var o = "invalid encoding";
  r.decode = function (e, t, r) {
    var n;
    var s = r;
    var a = 0;
    var c = 0;
    while (c < e.length) {
      var l = e.charCodeAt(c++);
      if (l === 61 && a > 1) {
        break;
      }
      if ((l = i[l]) === undefined) {
        throw Error(o);
      }
      switch (a) {
        case 0:
          n = l;
          a = 1;
          break;
        case 1:
          t[r++] = n << 2 | (l & 48) >> 4;
          n = l;
          a = 2;
          break;
        case 2:
          t[r++] = (n & 15) << 4 | (l & 60) >> 2;
          n = l;
          a = 3;
          break;
        case 3:
          t[r++] = (n & 3) << 6 | l;
          a = 0;
      }
    }
    if (a === 1) {
      throw Error(o);
    }
    return r - s;
  };
  r.test = function (e) {
    return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(e);
  };
}