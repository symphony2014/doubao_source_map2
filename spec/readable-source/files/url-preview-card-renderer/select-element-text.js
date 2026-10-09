// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72488.8973e534.js
         * chunkId: 72488
         * moduleId: 855034
         */
module.exports = function (module, exports, require) {
  module.exports = function (e) {
    var t;
    if (e.nodeName === "SELECT") {
      e.focus();
      t = e.value;
    } else if (e.nodeName === "INPUT" || e.nodeName === "TEXTAREA") {
      var n = e.hasAttribute("readonly");
      if (!n) {
        e.setAttribute("readonly", "");
      }
      e.select();
      e.setSelectionRange(0, e.value.length);
      if (!n) {
        e.removeAttribute("readonly");
      }
      t = e.value;
    } else {
      if (e.hasAttribute("contenteditable")) {
        e.focus();
      }
      var r = window.getSelection();
      var i = document.createRange();
      i.selectNodeContents(e);
      r.removeAllRanges();
      r.addRange(i);
      t = r.toString();
    }
    return t;
  };
}