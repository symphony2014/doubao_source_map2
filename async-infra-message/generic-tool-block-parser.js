// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'parseToolBlockInfo'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 562433
         */
module.exports = function (module, exports, require) {
  let i = (e, t) => {
    let {
      title: i,
      icon_url: l
    } = (t == null ? undefined : t.content?.generic_tool_block) || {};
    return {
      loading: !(t == null ? undefined : t.is_finish),
      title: i || "",
      icon: l || ""
    };
  };
  require.d(exports, {
    parseToolBlockInfo: function () {
      return i;
    }
  });
}