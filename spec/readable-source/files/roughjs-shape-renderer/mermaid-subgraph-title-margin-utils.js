// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'L' to 'getSubGraphTitleMargins'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 68615.ae4e84e7.js
         * chunkId: 68615
         * moduleId: 152138
         */
module.exports = function (module, exports, require) {
  var a = require("mermaid-config-utils") /*id: 101498*/.setName(t => {
    let {
      flowchart: n
    } = t;
    let r = (n == null ? undefined : n.subGraphTitleMargin?.top) ?? 0;
    let s = (n == null ? undefined : n.subGraphTitleMargin?.bottom) ?? 0;
    return {
      subGraphTitleTopMargin: r,
      subGraphTitleBottomMargin: s,
      subGraphTitleTotalMargin: r + s
    };
  }, "getSubGraphTitleMargins");
  require.d(exports, {
    getSubGraphTitleMargins: function () {
      return a;
    }
  });
}