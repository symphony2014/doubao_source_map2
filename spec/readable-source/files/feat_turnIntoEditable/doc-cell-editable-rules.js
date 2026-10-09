// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'docBlockTypeConstants'
// - Resolved require(433991) to 'doc-block-type-constants'
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_turnIntoEditable.3eb83575.js
         * chunkId: 72034
         * moduleId: 497845
         */
module.exports = function (module, exports, require) {
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  function l(e, t) {
    return e.every(e => {
      return t.getBlockModelByBlockIdNotCheck(e.id)?.type === docBlockTypeConstants.blockTypeConstants.CELL;
    });
  }
  let o = [function (e) {
    let {
      blockManager: t
    } = e;
    return {
      needUpdateSelection: e => !l(e, t),
      extractBlockModelsRule: {
        cond: e => l(e, t),
        h: e => e.reduce((e, n) => e.concat(t.getBlockModelByBlockId(n.id).children), [])
      },
      fixOperateTargetsRule: {
        cond: e => e.type === docBlockTypeConstants.blockTypeConstants.CELL,
        h: e => e.children
      }
    };
  }];
  exports.default = o;
  require.r(exports);
}