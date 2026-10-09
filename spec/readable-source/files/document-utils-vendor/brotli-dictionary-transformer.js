// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'brotliDictionaryConfig'
// - Resolved require(132684) to 'brotli-dictionary-config'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7359.24db40f3.js
         * chunkId: 7359
         * moduleId: 888410
         */
module.exports = function (module, exports, require) {
  var brotliDictionaryConfig = require("brotli-dictionary-config") /*id: 132684*/;
  function i(e, t, r) {
    this.prefix = new Uint8Array(e.length);
    this.transform = t;
    this.suffix = new Uint8Array(r.length);
    for (var n = 0; n < e.length; n++) {
      this.prefix[n] = e.charCodeAt(n);
    }
    for (var n = 0; n < r.length; n++) {
      this.suffix[n] = r.charCodeAt(n);
    }
  }
  var o = [new i("", 0, ""), new i("", 0, " "), new i(" ", 0, " "), new i("", 12, ""), new i("", 10, " "), new i("", 0, " the "), new i(" ", 0, ""), new i("s ", 0, " "), new i("", 0, " of "), new i("", 10, ""), new i("", 0, " and "), new i("", 13, ""), new i("", 1, ""), new i(", ", 0, " "), new i("", 0, ", "), new i(" ", 10, " "), new i("", 0, " in "), new i("", 0, " to "), new i("e ", 0, " "), new i("", 0, "\""), new i("", 0, "."), new i("", 0, "\">"), new i("", 0, "\n"), new i("", 3, ""), new i("", 0, "]"), new i("", 0, " for "), new i("", 14, ""), new i("", 2, ""), new i("", 0, " a "), new i("", 0, " that "), new i(" ", 10, ""), new i("", 0, ". "), new i(".", 0, ""), new i(" ", 0, ", "), new i("", 15, ""), new i("", 0, " with "), new i("", 0, "'"), new i("", 0, " from "), new i("", 0, " by "), new i("", 16, ""), new i("", 17, ""), new i(" the ", 0, ""), new i("", 4, ""), new i("", 0, ". The "), new i("", 11, ""), new i("", 0, " on "), new i("", 0, " as "), new i("", 0, " is "), new i("", 7, ""), new i("", 1, "ing "), new i("", 0, "\n\t"), new i("", 0, ":"), new i(" ", 0, ". "), new i("", 0, "ed "), new i("", 20, ""), new i("", 18, ""), new i("", 6, ""), new i("", 0, "("), new i("", 10, ", "), new i("", 8, ""), new i("", 0, " at "), new i("", 0, "ly "), new i(" the ", 0, " of "), new i("", 5, ""), new i("", 9, ""), new i(" ", 10, ", "), new i("", 10, "\""), new i(".", 0, "("), new i("", 11, " "), new i("", 10, "\">"), new i("", 0, "=\""), new i(" ", 0, "."), new i(".com/", 0, ""), new i(" the ", 0, " of the "), new i("", 10, "'"), new i("", 0, ". This "), new i("", 0, ","), new i(".", 0, " "), new i("", 10, "("), new i("", 10, "."), new i("", 0, " not "), new i(" ", 0, "=\""), new i("", 0, "er "), new i(" ", 11, " "), new i("", 0, "al "), new i(" ", 11, ""), new i("", 0, "='"), new i("", 11, "\""), new i("", 10, ". "), new i(" ", 0, "("), new i("", 0, "ful "), new i(" ", 10, ". "), new i("", 0, "ive "), new i("", 0, "less "), new i("", 11, "'"), new i("", 0, "est "), new i(" ", 10, "."), new i("", 11, "\">"), new i(" ", 0, "='"), new i("", 10, ","), new i("", 0, "ize "), new i("", 11, "."), new i("Â\xA0", 0, ""), new i(" ", 0, ","), new i("", 10, "=\""), new i("", 11, "=\""), new i("", 0, "ous "), new i("", 11, ", "), new i("", 10, "='"), new i(" ", 10, ","), new i(" ", 11, "=\""), new i(" ", 11, ", "), new i("", 11, ","), new i("", 11, "("), new i("", 11, ". "), new i(" ", 11, "."), new i("", 11, "='"), new i(" ", 11, ". "), new i(" ", 10, "=\""), new i(" ", 11, "='"), new i(" ", 10, "='")];
  function a(e, t) {
    if (e[t] < 192) {
      if (e[t] >= 97 && e[t] <= 122) {
        e[t] ^= 32;
      }
      return 1;
    } else if (e[t] < 224) {
      e[t + 1] ^= 32;
      return 2;
    } else {
      e[t + 2] ^= 5;
      return 3;
    }
  }
  exports.kTransforms = o;
  exports.kNumTransforms = o.length;
  exports.transformDictionaryWord = function (e, t, r, i, s) {
    var l;
    var u = o[s].prefix;
    var c = o[s].suffix;
    var h = o[s].transform;
    var d = h < 12 ? 0 : h - 11;
    var f = 0;
    var A = t;
    if (d > i) {
      d = i;
    }
    for (var g = 0; g < u.length;) {
      e[t++] = u[g++];
    }
    r += d;
    i -= d;
    if (h <= 9) {
      i -= h;
    }
    f = 0;
    for (; f < i; f++) {
      e[t++] = brotliDictionaryConfig.dictionary[r + f];
    }
    l = t - i;
    if (h === 10) {
      a(e, l);
    } else if (h === 11) {
      while (i > 0) {
        var p = a(e, l);
        l += p;
        i -= p;
      }
    }
    for (var m = 0; m < c.length;) {
      e[t++] = c[m++];
    }
    return t - A;
  };
}