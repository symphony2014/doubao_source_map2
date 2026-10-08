// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 75828.3c5eebd1.js
         * chunkId: 75828
         * moduleId: 493366
         */
module.exports = function (module, exports, require) {
  var e = {};
  function r(t, n) {
    var i;
    if (typeof n != "string") {
      n = r.defaultChars;
    }
    i = function (t) {
      var r;
      var n;
      var i = e[t];
      if (i) {
        return i;
      }
      r = 0;
      i = e[t] = [];
      for (; r < 128; r++) {
        n = String.fromCharCode(r);
        i.push(n);
      }
      for (r = 0; r < t.length; r++) {
        i[n = t.charCodeAt(r)] = "%" + ("0" + n.toString(16).toUpperCase()).slice(-2);
      }
      return i;
    }(n);
    return t.replace(/(%[a-f0-9]{2})+/gi, function (t) {
      var e;
      var r;
      var n;
      var o;
      var s;
      var a;
      var c;
      var l = "";
      e = 0;
      r = t.length;
      for (; e < r; e += 3) {
        if ((n = parseInt(t.slice(e + 1, e + 3), 16)) < 128) {
          l += i[n];
          continue;
        }
        if ((n & 224) == 192 && e + 3 < r && ((o = parseInt(t.slice(e + 4, e + 6), 16)) & 192) == 128) {
          if ((c = n << 6 & 1984 | o & 63) < 128) {
            l += "��";
          } else {
            l += String.fromCharCode(c);
          }
          e += 3;
          continue;
        }
        if ((n & 240) == 224 && e + 6 < r && (o = parseInt(t.slice(e + 4, e + 6), 16), s = parseInt(t.slice(e + 7, e + 9), 16), (o & 192) == 128 && (s & 192) == 128)) {
          if ((c = n << 12 & 61440 | o << 6 & 4032 | s & 63) < 2048 || c >= 55296 && c <= 57343) {
            l += "���";
          } else {
            l += String.fromCharCode(c);
          }
          e += 6;
          continue;
        }
        if ((n & 248) == 240 && e + 9 < r && (o = parseInt(t.slice(e + 4, e + 6), 16), s = parseInt(t.slice(e + 7, e + 9), 16), a = parseInt(t.slice(e + 10, e + 12), 16), (o & 192) == 128 && (s & 192) == 128 && (a & 192) == 128)) {
          if ((c = n << 18 & 1835008 | o << 12 & 258048 | s << 6 & 4032 | a & 63) < 65536 || c > 1114111) {
            l += "����";
          } else {
            c -= 65536;
            l += String.fromCharCode(55296 + (c >> 10), 56320 + (c & 1023));
          }
          e += 9;
          continue;
        }
        l += "�";
      }
      return l;
    });
  }
  r.defaultChars = ";/?:@&=+$,#";
  r.componentChars = "";
  module.exports = r;
}