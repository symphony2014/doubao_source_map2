// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(433991) to 'doc-block-type-constants'
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_replace-all.b695287c.js
         * chunkId: 1472
         * moduleId: 121313
         */
module.exports = function (module, exports, require) {
  let a = {
    blockSetting: {
      blockType: require("doc-block-type-constants") /*id: 433991*/.blockTypeConstants.SHEET,
      replaceAll: function (e) {
        let {
          block: l,
          keyword: n,
          matches: a
        } = e;
        a.forEach(e => {
          let {
            row: a,
            col: o,
            key: r,
            cellId: c,
            sheetId: i
          } = e;
          l.bridge.replaceSearchItem(i, {
            replaceText: n,
            context: {
              row: a,
              col: o,
              key: c,
              searchKey: r,
              blockId: i,
              isReplaceable: true
            },
            isReplaceAll: true
          });
        });
        return Promise.resolve();
      }
    }
  };
  exports.default = [a];
  require.r(exports);
}