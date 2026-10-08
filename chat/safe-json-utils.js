// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B' to 'safeStringify'
// - Renamed export 'R' to 'safeParse'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 384606
         */
module.exports = function (module, exports, require) {
  let i = e => {
    try {
      return JSON.stringify(e);
    } catch (e) {
      return "";
    }
  };
  let r = (e, t) => {
    try {
      if (e) {
        return JSON.parse(e);
      } else {
        return t;
      }
    } catch (e) {
      return t;
    }
  };
  require.d(exports, {
    safeStringify: function () {
      return i;
    },
    safeParse: function () {
      return r;
    }
  });
}