// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'createDomElement'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 53909.8afb4c62.js
         * chunkId: 53909
         * moduleId: 476723
         */
module.exports = function (module, exports, require) {
  function n() {
    var t = arguments[0];
    if (typeof t == "string") {
      t = document.createElement(t);
    }
    var e = 1;
    var i = arguments[1];
    if (i && typeof i == "object" && i.nodeType == null && !Array.isArray(i)) {
      for (var n in i) {
        if (Object.prototype.hasOwnProperty.call(i, n)) {
          var s = i[n];
          if (typeof s == "string") {
            t.setAttribute(n, s);
          } else if (s != null) {
            t[n] = s;
          }
        }
      }
      e++;
    }
    for (; e < arguments.length; e++) {
      (function t(e, i) {
        if (typeof i == "string") {
          e.appendChild(document.createTextNode(i));
        } else if (i == null) ;else if (i.nodeType != null) {
          e.appendChild(i);
        } else if (Array.isArray(i)) {
          for (var n = 0; n < i.length; n++) {
            t(e, i[n]);
          }
        } else {
          throw RangeError("Unsupported child node: " + i);
        }
      })(t, arguments[e]);
    }
    return t;
  }
  require.d(exports, {
    createDomElement: function () {
      return n;
    }
  });
}