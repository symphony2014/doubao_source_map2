// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'selectionRestoreUtil'
// - Resolved require(250115) to 'selection-restore-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-after-interactive-ai-creation-guidance.67ffc317.js
         * chunkId: 15933
         * moduleId: 735474
         */
module.exports = function (module, exports, require) {
  var selectionRestoreUtil = require("selection-restore-util") /*id: 250115*/;
  var i = {
    "text/plain": "Text",
    "text/html": "Url",
    default: "Text"
  };
  module.exports = function (e, t) {
    var n;
    var o;
    var a;
    var s;
    var l;
    var c;
    var d;
    var u = false;
    t ||= {};
    t.debug;
    try {
      s = selectionRestoreUtil();
      l = document.createRange();
      c = document.getSelection();
      (d = document.createElement("span")).textContent = e;
      d.ariaHidden = "true";
      d.style.all = "unset";
      d.style.position = "fixed";
      d.style.top = 0;
      d.style.clip = "rect(0, 0, 0, 0)";
      d.style.whiteSpace = "pre";
      d.style.webkitUserSelect = "text";
      d.style.MozUserSelect = "text";
      d.style.msUserSelect = "text";
      d.style.userSelect = "text";
      d.addEventListener("copy", function (n) {
        n.stopPropagation();
        if (t.format) {
          n.preventDefault();
          if (n.clipboardData === undefined) {
            window.clipboardData.clearData();
            var r = i[t.format] || i.default;
            window.clipboardData.setData(r, e);
          } else {
            n.clipboardData.clearData();
            n.clipboardData.setData(t.format, e);
          }
        }
        if (t.onCopy) {
          n.preventDefault();
          t.onCopy(n.clipboardData);
        }
      });
      document.body.appendChild(d);
      l.selectNodeContents(d);
      c.addRange(l);
      if (!document.execCommand("copy")) {
        throw Error("copy command was unsuccessful");
      }
      u = true;
    } catch (r) {
      try {
        window.clipboardData.setData(t.format || "text", e);
        if (t.onCopy) {
          t.onCopy(window.clipboardData);
        }
        u = true;
      } catch (r) {
        n = "message" in t ? t.message : "Copy to clipboard: #{key}, Enter";
        o = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
        a = n.replace(/#{\s*key\s*}/g, o);
        window.prompt(a, e);
      }
    } finally {
      if (c) {
        if (typeof c.removeRange == "function") {
          c.removeRange(l);
        } else {
          c.removeAllRanges();
        }
      }
      if (d) {
        document.body.removeChild(d);
      }
      s();
    }
    return u;
  };
}