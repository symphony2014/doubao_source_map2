// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45310.b344db4b.js
         * chunkId: 45310
         * moduleId: 475156
         */
module.exports = function (module, exports, require) {
  function t(e) {
    switch (typeof e) {
      case "string":
        return e;
      case "boolean":
        if (e) {
          return "true";
        } else {
          return "false";
        }
      case "number":
        if (isFinite(e)) {
          return e;
        } else {
          return "";
        }
      default:
        return "";
    }
  }
  module.exports = function (e, r, n, i) {
    r = r || "&";
    n = n || "=";
    if (e === null) {
      e = undefined;
    }
    if (typeof e == "object") {
      return Object.keys(e).map(function (i) {
        var s = encodeURIComponent(t(i)) + n;
        if (Array.isArray(e[i])) {
          return e[i].map(function (e) {
            return s + encodeURIComponent(t(e));
          }).join(r);
        } else {
          return s + encodeURIComponent(t(e[i]));
        }
      }).join(r);
    } else if (i) {
      return encodeURIComponent(t(i)) + n + encodeURIComponent(t(e));
    } else {
      return "";
    }
  };
}