// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'L' to 'maskElementText'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11464.7f88d9c4.js
         * chunkId: 11464
         * moduleId: 822125
         */
module.exports = function (module, exports, require) {
  function i(e) {
    if (!(e instanceof HTMLElement)) {
      return null;
    }
    var t = e.cloneNode(true);
    var n = document.createTreeWalker(t, NodeFilter.SHOW_TEXT, null);
    var i = n.currentNode;
    while (i) {
      if (i.nodeType === Node.TEXT_NODE) {
        var r = i;
        r.data = r.data.replace(/[^\s]/g, "*");
      }
      i = n.nextNode();
    }
    return t.outerHTML;
  }
  require.d(exports, {
    maskElementText: function () {
      return i;
    }
  });
}