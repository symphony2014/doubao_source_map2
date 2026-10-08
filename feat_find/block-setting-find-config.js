// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'docBlockTypeConstants'
// - Resolved require(433991) to 'doc-block-type-constants'
// - Renamed variable 'n' to 'blockSettingResolver'
// - Resolved require(272995) to 'block-setting-resolver'
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// - Updated imported property 'xH' to 'getAbstractSetting' (module 272995)
// - Updated imported property 'pI' to 'getBlockSetting' (module 272995)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_find.9ec97f72.js
         * chunkId: 50944
         * moduleId: 285350
         */
module.exports = function (module, exports, require) {
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var blockSettingResolver = require("block-setting-resolver") /*id: 272995*/;
  let l = {
    blockSetting: {
      blockType: docBlockTypeConstants.blockTypeConstants.PAGE,
      find: function (e) {
        var o;
        let {
          block: r,
          keyword: i,
          blockManager: l
        } = e;
        if ((o = r.view) === null || o === undefined ? undefined : o.state.isShowTitle) {
          let e = blockSettingResolver.getAbstractSetting(r.type, l, "find");
          return (e == null ? undefined : e({
            keyword: i,
            isTitleChanged: true,
            block: r,
            blockManager: l
          })) || [];
        }
        {
          r.findKeyword = i;
          let e = blockSettingResolver.getBlockSetting(r.type, l, "findChildren");
          return (e == null ? undefined : e({
            keyword: i,
            blockManager: l,
            block: r,
            isTitleChanged: true
          })) || [];
        }
      }
    }
  };
  exports.default = [l];
  require.r(exports);
}