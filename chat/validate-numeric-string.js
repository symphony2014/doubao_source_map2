// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'k' to 'isValidNumber'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 93601
         */
module.exports = function (module, exports, require) {
  let i = e => {
    let t = e.replace(/,/g, "");
    return !isNaN(t) && !isNaN(parseFloat(t));
  };
  require.d(exports, {
    isValidNumber: function () {
      return i;
    }
  });
}