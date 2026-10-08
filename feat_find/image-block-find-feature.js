// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(433991) to 'doc-block-type-constants'
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_find.9ec97f72.js
         * chunkId: 50944
         * moduleId: 282739
         */
module.exports = function (module, exports, require) {
  let i = {
    blockSetting: {
      blockType: require("doc-block-type-constants") /*id: 433991*/.blockTypeConstants.IMAGE,
      find: function (e) {
        var o;
        let {
          block: i,
          keyword: n
        } = e;
        return ((o = i.captionFindAndReplaceModel) === null || o === undefined ? undefined : o.find(n, i.id, i.snapshot.image.caption)) ?? [];
      }
    }
  };
  exports.default = [i];
  require.r(exports);
}