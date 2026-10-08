// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 673582
         */
module.exports = function (module, exports, require) {
  exports.byteLength = function (e) {
    var t = u(e);
    var n = t[0];
    var r = t[1];
    return (n + r) * 3 / 4 - r;
  };
  exports.toByteArray = function (e) {
    var t;
    var n;
    var o = u(e);
    var a = o[0];
    var s = o[1];
    var c = new i((a + s) * 3 / 4 - s);
    var l = 0;
    var f = s > 0 ? a - 4 : a;
    for (n = 0; n < f; n += 4) {
      t = r[e.charCodeAt(n)] << 18 | r[e.charCodeAt(n + 1)] << 12 | r[e.charCodeAt(n + 2)] << 6 | r[e.charCodeAt(n + 3)];
      c[l++] = t >> 16 & 255;
      c[l++] = t >> 8 & 255;
      c[l++] = t & 255;
    }
    if (s === 2) {
      t = r[e.charCodeAt(n)] << 2 | r[e.charCodeAt(n + 1)] >> 4;
      c[l++] = t & 255;
    }
    if (s === 1) {
      t = r[e.charCodeAt(n)] << 10 | r[e.charCodeAt(n + 1)] << 4 | r[e.charCodeAt(n + 2)] >> 2;
      c[l++] = t >> 8 & 255;
      c[l++] = t & 255;
    }
    return c;
  };
  exports.fromByteArray = function (e) {
    var t;
    var r = e.length;
    var i = r % 3;
    var o = [];
    var a = 0;
    var s = r - i;
    for (; a < s; a += 16383) {
      o.push(function (e, t, r) {
        var i;
        var o = [];
        var a = t;
        for (; a < r; a += 3) {
          i = (e[a] << 16 & 16711680) + (e[a + 1] << 8 & 65280) + (e[a + 2] & 255);
          o.push(n[i >> 18 & 63] + n[i >> 12 & 63] + n[i >> 6 & 63] + n[i & 63]);
        }
        return o.join("");
      }(e, a, a + 16383 > s ? s : a + 16383));
    }
    if (i === 1) {
      o.push(n[(t = e[r - 1]) >> 2] + n[t << 4 & 63] + "==");
    } else if (i === 2) {
      o.push(n[(t = (e[r - 2] << 8) + e[r - 1]) >> 10] + n[t >> 4 & 63] + n[t << 2 & 63] + "=");
    }
    return o.join("");
  };
  var n = [];
  var r = [];
  var i = typeof Uint8Array != "undefined" ? Uint8Array : Array;
  var o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var a = 0;
  var s = o.length;
  for (; a < s; ++a) {
    n[a] = o[a];
    r[o.charCodeAt(a)] = a;
  }
  function u(e) {
    var t = e.length;
    if (t % 4 > 0) {
      throw Error("Invalid string. Length must be a multiple of 4");
    }
    var n = e.indexOf("=");
    if (n === -1) {
      n = t;
    }
    var r = n === t ? 0 : 4 - n % 4;
    return [n, r];
  }
  r["-".charCodeAt(0)] = 62;
  r["_".charCodeAt(0)] = 63;
}