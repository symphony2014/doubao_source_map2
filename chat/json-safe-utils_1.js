// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Y' to 'jsonUtils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 176900
         */
module.exports = function (module, exports, require) {
  let i = {
    stringify: e => {
      try {
        return JSON.stringify(e);
      } catch (e) {
        return `JSON stringify Error: ${e.message}`;
      }
    },
    parse: e => {
      try {
        return JSON.parse(e || "");
      } catch (e) {
        return null;
      }
    }
  };
  require.d(exports, {
    jsonUtils: function () {
      return i;
    }
  });
}