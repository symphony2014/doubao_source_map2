// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 946565
         */
module.exports = function (module, exports, require) {
  (function () {
    "use strict";

    var t = {}.hasOwnProperty;
    function n() {
      var e = [];
      var r = 0;
      for (; r < arguments.length; r++) {
        var i = arguments[r];
        if (i) {
          var o = typeof i;
          if (o === "string" || o === "number") {
            e.push(i);
          } else if (Array.isArray(i)) {
            if (i.length) {
              var a = n.apply(null, i);
              if (a) {
                e.push(a);
              }
            }
          } else if (o === "object") {
            if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]")) {
              e.push(i.toString());
              continue;
            }
            for (var s in i) {
              if (t.call(i, s) && i[s]) {
                e.push(s);
              }
            }
          }
        }
      }
      return e.join(" ");
    }
    if (module.exports) {
      n.default = n;
      module.exports = n;
    } else if (typeof define == "function" && typeof define.amd == "object" && define.amd) {
      define("classnames", [], function () {
        return n;
      });
    } else {
      window.classNames = n;
    }
  })();
}