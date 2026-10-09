// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'L' to 'getSubGraphTitleMargins'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 34190.b63a1963.js
         * chunkId: 34190
         * moduleId: 954180
         */
module.exports = function (module, exports, require) {
  var i = require("logger-level-utils") /*id: 696754*/.setFunctionName(t => {
    let {
      flowchart: o
    } = t;
    let l = (o == null ? undefined : o.subGraphTitleMargin?.top) ?? 0;
    let n = (o == null ? undefined : o.subGraphTitleMargin?.bottom) ?? 0;
    return {
      subGraphTitleTopMargin: l,
      subGraphTitleBottomMargin: n,
      subGraphTitleTotalMargin: l + n
    };
  }, "getSubGraphTitleMargins");
  require.d(exports, {
    getSubGraphTitleMargins: function () {
      return i;
    }
  });
}