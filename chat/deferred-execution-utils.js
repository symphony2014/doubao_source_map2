// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Os' to 'createDelayedTask'
// - Renamed export 'ht' to 'invokeImmediate'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 43572
         */
module.exports = function (module, exports, require) {
  let i = e => e();
  let r = (e, t) => {
    let n = setTimeout(e, t);
    return {
      cancel() {
        clearTimeout(n);
      },
      exec() {
        this.cancel();
        return e();
      }
    };
  };
  require.d(exports, {
    createDelayedTask: function () {
      return r;
    },
    invokeImmediate: function () {
      return i;
    }
  });
}