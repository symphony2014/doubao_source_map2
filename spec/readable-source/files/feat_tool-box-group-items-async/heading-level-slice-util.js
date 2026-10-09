// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'qq' to 'sliceByHeadingLevel'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_tool-box-group-items-async.de937fc5.js
         * chunkId: 36228
         * moduleId: 627464
         */
module.exports = function (module, exports, require) {
  var headingTypeConstants = require("heading-type-constants") /*id: 23420*/;
  let r = e => {
    let l = headingTypeConstants.headingLevel2;
    let o = e.allBlockViews;
    if (o) {
      for (let e of o) {
        let o = /^heading([1-9])$/i.exec(e.type);
        if (o) {
          l = Math.max(l, Number(o[1]) + 1);
        }
      }
    }
    return l;
  };
  let i = (e, l) => {
    let o = Math.max(3, r(e));
    return l.slice(0, o - 3);
  };
  require.d(exports, {
    sliceByHeadingLevel: function () {
      return i;
    }
  });
}