// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: super-task-audio-play-card.63d4cbf3.js
         * chunkId: 17108
         * moduleId: 478585
         */
module.exports = function (module, exports, require) {
  if (typeof Element != "undefined" && !Element.prototype.matches) {
    var t = Element.prototype;
    t.matches = t.matchesSelector || t.mozMatchesSelector || t.msMatchesSelector || t.oMatchesSelector || t.webkitMatchesSelector;
  }
  module.exports = function (e, t) {
    while (e && e.nodeType !== 9) {
      if (typeof e.matches == "function" && e.matches(t)) {
        return e;
      }
      e = e.parentNode;
    }
  };
}