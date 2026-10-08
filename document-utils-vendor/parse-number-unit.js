// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7359.24db40f3.js
         * chunkId: 7359
         * moduleId: 205325
         */
module.exports = function (module, exports, require) {
  module.exports = function (e) {
    var t;
    var r;
    var n;
    var i = 0;
    var o = e.length;
    if (o === 0 || !function (e) {
      var t;
      var r = e.charCodeAt(0);
      if (r === 43 || r === 45) {
        if ((t = e.charCodeAt(1)) >= 48 && t <= 57) {
          return true;
        }
        var n = e.charCodeAt(2);
        return t === 46 && !!(n >= 48) && !!(n <= 57);
      }
      if (r === 46) {
        return !!((t = e.charCodeAt(1)) >= 48) && !!(t <= 57);
      } else {
        return !!(r >= 48) && !!(r <= 57);
      }
    }(e)) {
      return false;
    }
    for (((t = e.charCodeAt(i)) === 43 || t === 45) && i++; i < o && !((t = e.charCodeAt(i)) < 48) && !(t > 57);) {
      i += 1;
    }
    t = e.charCodeAt(i);
    r = e.charCodeAt(i + 1);
    if (t === 46 && r >= 48 && r <= 57) {
      for (i += 2; i < o && !((t = e.charCodeAt(i)) < 48) && !(t > 57);) {
        i += 1;
      }
    }
    t = e.charCodeAt(i);
    r = e.charCodeAt(i + 1);
    n = e.charCodeAt(i + 2);
    if ((t === 101 || t === 69) && (r >= 48 && r <= 57 || (r === 43 || r === 45) && n >= 48 && n <= 57)) {
      for (i += r === 43 || r === 45 ? 3 : 2; i < o && !((t = e.charCodeAt(i)) < 48) && !(t > 57);) {
        i += 1;
      }
    }
    return {
      number: e.slice(0, i),
      unit: e.slice(i)
    };
  };
}