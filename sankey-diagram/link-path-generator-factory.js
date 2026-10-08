// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'createLinkGenerator'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 1800.93d11244.js
         * chunkId: 1800
         * moduleId: 612048
         */
module.exports = function (module, exports, require) {
  var linkPathGenerator = require("link-path-generator") /*id: 830541*/;
  function r(t) {
    return [t.source.x1, t.y0];
  }
  function s(t) {
    return [t.target.x0, t.y1];
  }
  function o() {
    return linkPathGenerator.linkGenerator().source(r).target(s);
  }
  require.d(exports, {
    createLinkGenerator: function () {
      return o;
    }
  });
}