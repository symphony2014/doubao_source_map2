// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 875502
         */
module.exports = function (module, exports, require) {
  module.exports = function t(e, r) {
    if (e === r) {
      return true;
    }
    if (e && r && typeof e == "object" && typeof r == "object") {
      if (e.constructor !== r.constructor) {
        return false;
      }
      if (Array.isArray(e)) {
        if ((n = e.length) != r.length) {
          return false;
        }
        for (o = n; o-- != 0;) {
          if (!t(e[o], r[o])) {
            return false;
          }
        }
        return true;
      }
      if (e.constructor === RegExp) {
        return e.source === r.source && e.flags === r.flags;
      }
      if (e.valueOf !== Object.prototype.valueOf) {
        return e.valueOf() === r.valueOf();
      }
      if (e.toString !== Object.prototype.toString) {
        return e.toString() === r.toString();
      }
      if ((n = (i = Object.keys(e)).length) !== Object.keys(r).length) {
        return false;
      }
      for (o = n; o-- != 0;) {
        if (!Object.prototype.hasOwnProperty.call(r, i[o])) {
          return false;
        }
      }
      for (o = n; o-- != 0;) {
        var n;
        var o;
        var i;
        var u = i[o];
        if (!t(e[u], r[u])) {
          return false;
        }
      }
      return true;
    }
    return e != e && r != r;
  };
}