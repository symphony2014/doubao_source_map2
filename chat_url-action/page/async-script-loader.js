// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11671.ea21fc6d.js
         * chunkId: 11671
         * moduleId: 289141
         */
module.exports = function (module, exports, require) {
  function t(e, t) {
    e.onload = function () {
      this.onerror = this.onload = null;
      t(null, e);
    };
    e.onerror = function () {
      this.onerror = this.onload = null;
      t(Error("Failed to load " + this.src), e);
    };
  }
  module.exports = function (e, n, i) {
    var r = document.head || document.getElementsByTagName("head")[0];
    var s = document.createElement("script");
    if (typeof n == "function") {
      i = n;
      n = {};
    }
    n = n || {};
    i = i || function () {};
    s.type = n.type || "text/javascript";
    s.charset = n.charset || "utf8";
    s.async = !("async" in n) || !!n.async;
    s.src = e;
    if (n.attrs) {
      (function (e, t) {
        for (var n in t) {
          e.setAttribute(n, t[n]);
        }
      })(s, n.attrs);
    }
    if (n.text) {
      s.text = "" + n.text;
    }
    ("onload" in s ? t : function (e, t) {
      e.onreadystatechange = function () {
        if (this.readyState == "complete" || this.readyState == "loaded") {
          this.onreadystatechange = null;
          t(null, e);
        }
      };
    })(s, i);
    if (!s.onload) {
      t(s, i);
    }
    r.appendChild(s);
  };
}