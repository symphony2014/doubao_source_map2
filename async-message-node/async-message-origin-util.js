// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'c' to 'getMessageOrigin'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-message-node.b65fce36.js
         * chunkId: 44236
         * moduleId: 262112
         */
module.exports = function (module, exports, require) {
  let r = e => {
    let {
      extra: {
        origin: t
      }
    } = e;
    return t;
  };
  require.d(exports, {
    getMessageOrigin: function () {
      return r;
    }
  });
}