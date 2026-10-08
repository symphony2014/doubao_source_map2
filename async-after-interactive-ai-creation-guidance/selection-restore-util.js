// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-after-interactive-ai-creation-guidance.67ffc317.js
         * chunkId: 15933
         * moduleId: 250115
         */
module.exports = function (module, exports, require) {
  module.exports = function () {
    var e = document.getSelection();
    if (!e.rangeCount) {
      return function () {};
    }
    var t = document.activeElement;
    var n = [];
    var r = 0;
    for (; r < e.rangeCount; r++) {
      n.push(e.getRangeAt(r));
    }
    switch (t.tagName.toUpperCase()) {
      case "INPUT":
      case "TEXTAREA":
        t.blur();
        break;
      default:
        t = null;
    }
    e.removeAllRanges();
    return function () {
      if (e.type === "Caret") {
        e.removeAllRanges();
      }
      if (!e.rangeCount) {
        n.forEach(function (t) {
          e.addRange(t);
        });
      }
      if (t) {
        t.focus();
      }
    };
  };
}