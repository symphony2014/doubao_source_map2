// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'docBlockTypeConstants'
// - Resolved require(433991) to 'doc-block-type-constants'
// - Renamed variable 'i' to 'blockSettingResolver'
// - Resolved require(272995) to 'block-setting-resolver'
// - Updated imported property 'pI' to 'getBlockSetting' (module 272995)
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 895892
         */
module.exports = function (module, exports, require) {
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var blockSettingResolver = require("block-setting-resolver") /*id: 272995*/;
  function l(e) {
    let {
      blockView: n
    } = e;
    let {
      children: r
    } = n.record.snapshot;
    if (!r || !r.length) {
      return null;
    }
    let o = n.blockManager.getBlockIdsByRecordId(r[0])[0];
    let l = n.blockManager.getBlockViewByBlockId(o);
    if (!l) {
      return null;
    }
    let c = blockSettingResolver.getBlockSetting(l.model.type, n.blockManager, "getViewSnapshot");
    if (c) {
      return c({
        blockView: l
      });
    } else {
      return null;
    }
  }
  let c = {
    blockType: docBlockTypeConstants.blockTypeConstants.VIEW,
    getViewSnapshot: l
  };
  exports.default = [c];
  require.r(exports);
  require.d(exports, {
    viewBlockGetViewSnapshot: function () {
      return l;
    }
  });
}