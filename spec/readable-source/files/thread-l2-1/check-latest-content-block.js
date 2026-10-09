// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'W' to 'checkLatestBlock'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 597627
         */
module.exports = function (module, exports, require) {
  let i = (e, t) => {
    let {
      contentBlocks: i
    } = e;
    return {
      isLatestBlock: (i == null ? undefined : i[i.length - 1]?.block_id) === t.block_id
    };
  };
  require.d(exports, {
    checkLatestBlock: function () {
      return i;
    }
  });
}