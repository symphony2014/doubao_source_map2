// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'docBlockTypeConstants'
// - Resolved require(433991) to 'doc-block-type-constants'
// - Renamed variable 'n' to 'blockSettingResolver'
// - Resolved require(272995) to 'block-setting-resolver'
// - Renamed variable 'l' to 'captionDefaultUtil'
// - Resolved require(341053) to 'caption-default-util'
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// - Updated imported property 'xH' to 'getAbstractSetting' (module 272995)
// - Updated imported property 'x' to 'getCaptionDefault' (module 341053)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_find.9ec97f72.js
         * chunkId: 50944
         * moduleId: 260273
         */
module.exports = function (module, exports, require) {
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var blockSettingResolver = require("block-setting-resolver") /*id: 272995*/;
  var captionDefaultUtil = require("caption-default-util") /*id: 341053*/;
  let c = {
    blockSetting: {
      blockType: docBlockTypeConstants.blockTypeConstants.CODE,
      find: function (e) {
        var o;
        let {
          block: c,
          keyword: a
        } = e;
        let d = blockSettingResolver.getAbstractSetting(c.type, c.blockManager, "find");
        return [...(((o = c.captionFindAndReplaceModel) === null || o === undefined ? undefined : o.find(a, c.id, captionDefaultUtil.getCaptionDefault(c.snapshot))) ?? []), ...((d == null ? undefined : d(e)) ?? [])];
      }
    }
  };
  exports.default = [c];
  require.r(exports);
}