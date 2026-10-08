// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(433991) to 'doc-block-type-constants'
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_draggable.bce4732d.js
         * chunkId: 87721
         * moduleId: 570296
         */
module.exports = function (module, exports, require) {
  let l = {
    blockType: require("doc-block-type-constants") /*id: 433991*/.blockTypeConstants.IMAGE,
    getViewSnapshot: function (e) {
      let {
        blockView: t,
        isSingleBlock: A = false
      } = e;
      let l = t.props.hostElementRef.current;
      if (A) {
        l = l.querySelector(".image-block-width-wrapper");
      }
      if (l != null) {
        l.classList.add("image-block-wrapper-at-view-snapshot");
      }
      return l;
    }
  };
  exports.default = [l];
  require.r(exports);
}