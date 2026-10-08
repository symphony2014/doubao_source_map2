// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(433991) to 'doc-block-type-constants'
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 323205
         */
module.exports = function (module, exports, require) {
  function n(e) {
    let {
      blockView: i
    } = e;
    return i.hostElement.querySelector(".table-block");
  }
  let o = {
    blockType: require("doc-block-type-constants") /*id: 433991*/.blockTypeConstants.TABLE,
    getViewSnapshot: n
  };
  exports.default = [o];
  require.r(exports);
  require.d(exports, {
    getTableViewSnapshot: function () {
      return n;
    }
  });
}