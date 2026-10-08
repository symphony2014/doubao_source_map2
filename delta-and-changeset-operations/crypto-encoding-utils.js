// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat-runtime-chunk-after-interactive.a19b580b.js
         * chunkId: 36136
         * moduleId: 147600
         */
module.exports = function (module, exports, require) {
  var t;
  var n;
  t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  n = {
    rotl: function (e, t) {
      return e << t | e >>> 32 - t;
    },
    rotr: function (e, t) {
      return e << 32 - t | e >>> t;
    },
    endian: function (e) {
      if (e.constructor == Number) {
        return n.rotl(e, 8) & 16711935 | n.rotl(e, 24) & -16711936;
      }
      for (var t = 0; t < e.length; t++) {
        e[t] = n.endian(e[t]);
      }
      return e;
    },
    randomBytes: function (e) {
      var t = [];
      for (; e > 0; e--) {
        t.push(Math.floor(Math.random() * 256));
      }
      return t;
    },
    bytesToWords: function (e) {
      var t = [];
      var n = 0;
      var i = 0;
      for (; n < e.length; n++, i += 8) {
        t[i >>> 5] |= e[n] << 24 - i % 32;
      }
      return t;
    },
    wordsToBytes: function (e) {
      var t = [];
      var n = 0;
      for (; n < e.length * 32; n += 8) {
        t.push(e[n >>> 5] >>> 24 - n % 32 & 255);
      }
      return t;
    },
    bytesToHex: function (e) {
      var t = [];
      var n = 0;
      for (; n < e.length; n++) {
        t.push((e[n] >>> 4).toString(16));
        t.push((e[n] & 15).toString(16));
      }
      return t.join("");
    },
    hexToBytes: function (e) {
      var t = [];
      var n = 0;
      for (; n < e.length; n += 2) {
        t.push(parseInt(e.substr(n, 2), 16));
      }
      return t;
    },
    bytesToBase64: function (e) {
      var n = [];
      var i = 0;
      for (; i < e.length; i += 3) {
        var r = e[i] << 16 | e[i + 1] << 8 | e[i + 2];
        var o = 0;
        for (; o < 4; o++) {
          if (i * 8 + o * 6 <= e.length * 8) {
            n.push(t.charAt(r >>> (3 - o) * 6 & 63));
          } else {
            n.push("=");
          }
        }
      }
      return n.join("");
    },
    base64ToBytes: function (e) {
      e = e.replace(/[^A-Z0-9+\/]/ig, "");
      var n = [];
      var i = 0;
      var r = 0;
      for (; i < e.length; r = ++i % 4) {
        if (r != 0) {
          n.push((t.indexOf(e.charAt(i - 1)) & Math.pow(2, r * -2 + 8) - 1) << r * 2 | t.indexOf(e.charAt(i)) >>> 6 - r * 2);
        }
      }
      return n;
    }
  };
  module.exports = n;
}