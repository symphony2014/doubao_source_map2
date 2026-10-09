// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(433991) to 'doc-block-type-constants'
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_draggable.bce4732d.js
         * chunkId: 87721
         * moduleId: 496815
         */
module.exports = function (module, exports, require) {
  let l = {
    blockType: require("doc-block-type-constants") /*id: 433991*/.blockTypeConstants.DIVIDER,
    getViewSnapshot: function (e) {
      let {
        blockView: t
      } = e;
      return t.DividerRef.current;
    }
  };
  exports.default = [l];
  require.r(exports);
}