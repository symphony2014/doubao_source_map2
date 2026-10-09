// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(433991) to 'doc-block-type-constants'
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_clipboard-copy.bc14b660.js
         * chunkId: 78903
         * moduleId: 736036
         */
module.exports = function (module, exports, require) {
  let i = {
    blockSetting: {
      blockType: require("doc-block-type-constants") /*id: 433991*/.blockTypeConstants.IMAGE,
      onCopy: function (o) {
        var i;
        let {
          block: l
        } = o;
        if (l.snapshot?.image) {
          let o = (i = l.view) === null || i === undefined ? undefined : i.imageManager?.fetcher;
          if (!o || o.size < 1) {
            return;
          }
          let {
            name: e,
            size: u
          } = l.snapshot.image;
          let a = {
            doubao_uri: "",
            doubao_storage: 2,
            doubao_size: u,
            doubao_name: e
          };
          for (let e of o.keys()) {
            let n = o.get(e);
            if ((n == null ? undefined : n.token) === l.snapshot.image.token) {
              a.doubao_uri = n == null ? undefined : n.cdnConfig?.uri;
              break;
            }
          }
          if (!a.doubao_uri) {
            return;
          }
          return {
            doubaoInfo: a
          };
        }
      }
    }
  };
  exports.default = [i];
  require.r(exports);
}