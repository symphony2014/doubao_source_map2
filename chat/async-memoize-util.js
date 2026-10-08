// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'f' to 'asyncMemoize'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 855254
         */
module.exports = function (module, exports, require) {
  let i = new WeakMap();
  async function r(e) {
    let t = i.get(e);
    if (!t) {
      let t = e();
      i.set(e, t);
      try {
        return await t;
      } catch (n) {
        if (i.get(e) === t) {
          i.delete(e);
        }
        throw n;
      }
    }
    return await t;
  }
  require.d(exports, {
    asyncMemoize: function () {
      return r;
    }
  });
}