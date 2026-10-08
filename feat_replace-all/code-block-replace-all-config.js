// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'a' to 'docBlockTypeConstants'
// - Resolved require(433991) to 'doc-block-type-constants'
// - Renamed variable 'o' to 'blockSettingResolver'
// - Resolved require(272995) to 'block-setting-resolver'
// - Renamed variable 'r' to 'captionDefaultUtil'
// - Resolved require(341053) to 'caption-default-util'
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// - Updated imported property 'xH' to 'getAbstractSetting' (module 272995)
// - Updated imported property 'x' to 'getCaptionDefault' (module 341053)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_replace-all.b695287c.js
         * chunkId: 1472
         * moduleId: 63917
         */
module.exports = function (module, exports, require) {
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var blockSettingResolver = require("block-setting-resolver") /*id: 272995*/;
  var captionDefaultUtil = require("caption-default-util") /*id: 341053*/;
  let c = {
    blockSetting: {
      blockType: docBlockTypeConstants.blockTypeConstants.CODE,
      replaceAll: function (e) {
        var l;
        let {
          block: n,
          keyword: a,
          matches: c
        } = e;
        let i = blockSettingResolver.getAbstractSetting(n.type, n.blockManager, "replaceAll");
        let p = c.filter(e => e.type === "caption");
        let u = c.filter(e => e.type !== "caption");
        if ((l = n.captionFindAndReplaceModel) !== null && l !== undefined) {
          l.replaceAll(a, p, captionDefaultUtil.getCaptionDefault(n.snapshot));
        }
        if (i == null) {
          return undefined;
        } else {
          return i({
            ...e,
            matches: u
          });
        }
      }
    }
  };
  exports.default = [c];
  require.r(exports);
}