// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(938302) to 'crypto-js-core'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 37204.6399fc74.js
         * chunkId: 37204
         * moduleId: 726240
         */
module.exports = function (module, exports, require) {
  var n;
  n = function (e) {
    var t;
    t = e.lib.WordArray;
    e.enc.Base64 = {
      stringify: function (e) {
        var t = e.words;
        var r = e.sigBytes;
        var n = this._map;
        e.clamp();
        var i = [];
        var o = 0;
        for (; o < r; o += 3) {
          var a = (t[o >>> 2] >>> 24 - o % 4 * 8 & 255) << 16 | (t[o + 1 >>> 2] >>> 24 - (o + 1) % 4 * 8 & 255) << 8 | t[o + 2 >>> 2] >>> 24 - (o + 2) % 4 * 8 & 255;
          var s = 0;
          for (; s < 4 && o + s * 0.75 < r; s++) {
            i.push(n.charAt(a >>> (3 - s) * 6 & 63));
          }
        }
        var c = n.charAt(64);
        if (c) {
          while (i.length % 4) {
            i.push(c);
          }
        }
        return i.join("");
      },
      parse: function (e) {
        var r = e.length;
        var n = this._map;
        var i = this._reverseMap;
        if (!i) {
          i = this._reverseMap = [];
          for (var o = 0; o < n.length; o++) {
            i[n.charCodeAt(o)] = o;
          }
        }
        var a = n.charAt(64);
        if (a) {
          var s = e.indexOf(a);
          if (s !== -1) {
            r = s;
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
        }(e, r, i);
      },
      _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    };
    return e.enc.Base64;
  };
  module.exports = n(require("crypto-js-core") /*id: 938302*/);
}