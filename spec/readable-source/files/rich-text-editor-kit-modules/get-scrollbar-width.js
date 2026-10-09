// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 82855.5dc766e7.js
         * chunkId: 82855
         * moduleId: 616672
         */
module.exports = function (module, exports, require) {
  (function () {
    "use strict";

    var t;
    var n;
    n = null;
    t = function (e) {
      var t;
      var i;
      if (e == null) {
        e = false;
      }
      if (n == null || e) {
        if (document.readyState === "loading") {
          return null;
        } else {
          t = document.createElement("div");
          i = document.createElement("div");
          t.style.width = i.style.width = t.style.height = i.style.height = "100px";
          t.style.overflow = "scroll";
          i.style.overflow = "hidden";
          document.body.appendChild(t);
          document.body.appendChild(i);
          n = Math.abs(t.scrollHeight - i.scrollHeight);
          document.body.removeChild(t);
          document.body.removeChild(i);
          return n;
        }
      } else {
        return n;
      }
    };
    if (typeof define == "function" && define.amd) {
      define([], function () {
        return t;
      });
    } else {
      module.exports = t;
    }
  }).call(this);
}