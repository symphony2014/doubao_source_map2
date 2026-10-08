// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 375679
         */
module.exports = function (module, exports, require) {
  let t = (e, {
    target: t = document.body
  } = {}) => {
    let n = document.createElement("textarea");
    let i = document.activeElement;
    n.value = e;
    n.setAttribute("readonly", "");
    n.style.contain = "strict";
    n.style.position = "absolute";
    n.style.left = "-9999px";
    n.style.fontSize = "12pt";
    let r = document.getSelection();
    let o = false;
    if (r.rangeCount > 0) {
      o = r.getRangeAt(0);
    }
    t.append(n);
    n.select();
    n.selectionStart = 0;
    n.selectionEnd = e.length;
    let l = false;
    try {
      l = document.execCommand("copy");
    } catch (e) {}
    n.remove();
    if (o) {
      r.removeAllRanges();
      r.addRange(o);
    }
    if (i) {
      i.focus();
    }
    return l;
  };
  module.exports = t;
  module.exports.default = t;
}