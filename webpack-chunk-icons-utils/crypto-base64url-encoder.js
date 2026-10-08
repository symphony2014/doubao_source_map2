// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(938302) to 'crypto-js-core'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 37204.6399fc74.js
         * chunkId: 37204
         * moduleId: 426295
         */
module.exports = function (module, exports, require) {
  var n;
  n = function (e) {
    var t;
    t = e.lib.WordArray;
    e.enc.Base64url = {
      stringify: function (e, t = true) {
        var r = e.words;
        var n = e.sigBytes;
        var i = t ? this._safe_map : this._map;
        e.clamp();
        var o = [];
        var a = 0;
        for (; a < n; a += 3) {
          var s = (r[a >>> 2] >>> 24 - a % 4 * 8 & 255) << 16 | (r[a + 1 >>> 2] >>> 24 - (a + 1) % 4 * 8 & 255) << 8 | r[a + 2 >>> 2] >>> 24 - (a + 2) % 4 * 8 & 255;
          var c = 0;
          for (; c < 4 && a + c * 0.75 < n; c++) {
            o.push(i.charAt(s >>> (3 - c) * 6 & 63));
          }
        }
        var u = i.charAt(64);
        if (u) {
          while (o.length % 4) {
            o.push(u);
          }
        }
        return o.join("");
      },
      parse: function (e, r = true) {
        var n = e.length;
        var i = r ? this._safe_map : this._map;
        var o = this._reverseMap;
        if (!o) {
          o = this._reverseMap = [];
          for (var a = 0; a < i.length; a++) {
            o[i.charCodeAt(a)] = a;
          }
        }
        var s = i.charAt(64);
        if (s) {
          var c = e.indexOf(s);
          if (c !== -1) {
            n = c;
          }
        }
        return function (e, r, n) {
          var i = [];
          var o = 0;
          var a = 0;
          for (; a < r; a++) {
            if (a % 4) {
              var s = n[e.charCodeAt(a - 1)] << a % 4 * 2 | n[e.charCodeAt(a)] >>> 6 - a % 4 * 2;
              i[o >>> 2] |= s << 24 - o % 4 * 8;
              o++;
            }
          }
          return t.create(i, o);
        }(e, n, o);
      },
      _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
      _safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
    };
    return e.enc.Base64url;
  };
  module.exports = n(require("crypto-js-core") /*id: 938302*/);
}