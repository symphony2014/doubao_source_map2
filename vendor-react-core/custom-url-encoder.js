// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 75828.3c5eebd1.js
         * chunkId: 75828
         * moduleId: 964343
         */
module.exports = function (module, exports, require) {
  var e = {};
  function r(t, n, i) {
    var o;
    var s;
    var a;
    var c;
    var l;
    var u = "";
    if (typeof n != "string") {
      i = n;
      n = r.defaultChars;
    }
    if (i === undefined) {
      i = true;
    }
    l = function (t) {
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
        if (/^[0-9a-z]$/i.test(n)) {
          i.push(n);
        } else {
          i.push("%" + ("0" + r.toString(16).toUpperCase()).slice(-2));
        }
      }
      for (r = 0; r < t.length; r++) {
        i[t.charCodeAt(r)] = t[r];
      }
      return i;
    }(n);
    o = 0;
    s = t.length;
    for (; o < s; o++) {
      a = t.charCodeAt(o);
      if (i && a === 37 && o + 2 < s && /^[0-9a-f]{2}$/i.test(t.slice(o + 1, o + 3))) {
        u += t.slice(o, o + 3);
        o += 2;
        continue;
      }
      if (a < 128) {
        u += l[a];
        continue;
      }
      if (a >= 55296 && a <= 57343) {
        if (a >= 55296 && a <= 56319 && o + 1 < s && (c = t.charCodeAt(o + 1)) >= 56320 && c <= 57343) {
          u += encodeURIComponent(t[o] + t[o + 1]);
          o++;
          continue;
        }
        u += "%EF%BF%BD";
        continue;
      }
      u += encodeURIComponent(t[o]);
    }
    return u;
  }
  r.defaultChars = ";/?:@&=+$,-_.!~*'()#";
  r.componentChars = "-_.!~*'()";
  module.exports = r;
}