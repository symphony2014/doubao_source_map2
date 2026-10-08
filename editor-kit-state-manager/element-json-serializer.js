// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'F' to 'serializeElement'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 79909.d674ef0d.js
         * chunkId: 79909
         * moduleId: 39786
         */
module.exports = function (module, exports, require) {
  function r(t) {
    if (t.nodeType !== Node.ELEMENT_NODE || !(t instanceof HTMLElement)) {
      return "";
    }
    try {
      return JSON.stringify(["className", "tagName", "dataset"].reduce(function (e, n) {
        e[n] = t[n];
        return e;
      }, {}));
    } catch (t) {
      return "";
    }
  }
  require.d(exports, {
    serializeElement: function () {
      return r;
    }
  });
}