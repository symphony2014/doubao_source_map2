// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: canvas-doc-panel.03616ed7.js
         * chunkId: 16287
         * moduleId: 497836
         */
module.exports = function (module, exports, require) {
  exports.browserPrefixToKey = i;
  exports.browserPrefixToStyle = function (e, t) {
    if (t) {
      return `-${t.toLowerCase()}-${e}`;
    } else {
      return e;
    }
  };
  exports.default = undefined;
  exports.getPrefix = r;
  let n = ["Moz", "Webkit", "O", "ms"];
  function r() {
    var e;
    let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "transform";
    if (typeof window == "undefined") {
      return "";
    }
    let r = (e = window.document) === null || e === undefined || (e = e.documentElement) === null || e === undefined ? undefined : e.style;
    if (!r || t in r) {
      return "";
    }
    for (let e = 0; e < n.length; e++) {
      if (i(t, n[e]) in r) {
        return n[e];
      }
    }
    return "";
  }
  function i(e, t) {
    if (t) {
      return `${t}${function (e) {
        let t = "";
        let n = true;
        for (let r = 0; r < e.length; r++) {
          if (n) {
            t += e[r].toUpperCase();
            n = false;
          } else if (e[r] === "-") {
            n = true;
          } else {
            t += e[r];
          }
        }
        return t;
      }(e)}`;
    } else {
      return e;
    }
  }
  exports.default = r();
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}