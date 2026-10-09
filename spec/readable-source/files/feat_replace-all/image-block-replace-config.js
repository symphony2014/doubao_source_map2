// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(433991) to 'doc-block-type-constants'
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_replace-all.b695287c.js
         * chunkId: 1472
         * moduleId: 734447
         */
module.exports = function (module, exports, require) {
  let a = {
    blockSetting: {
      blockType: require("doc-block-type-constants") /*id: 433991*/.blockTypeConstants.IMAGE,
      replaceAll: function (e) {
        var l;
        let {
          block: n,
          keyword: a,
          matches: o
        } = e;
        if ((l = n.captionFindAndReplaceModel) === null || l === undefined) {
          return undefined;
        } else {
          return l.replaceAll(a, o, n.snapshot.image.caption);
        }
      }
    }
  };
  exports.default = [a];
  require.r(exports);
}