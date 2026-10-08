// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'i' to 'getRoundedClass'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-0.6fa2ce65.js
         * chunkId: 46805
         * moduleId: 904734
         */
module.exports = function (module, exports, require) {
  let n = (e, t) => {
    let i = "";
    if (t === 4) {
      if (e === 0) {
        i = i.concat("!rounded-tl-s-radius-s ");
      }
      if (e === 1) {
        i = i.concat("!rounded-tr-s-radius-s ");
      }
      if (e === 2) {
        i = i.concat("!rounded-bl-s-radius-s ");
      }
      if (e === 3) {
        i = i.concat("!rounded-br-s-radius-s ");
      }
    } else {
      if (e === 0) {
        i = i.concat("!rounded-l-s-radius-s ");
      }
      if (e === t - 1) {
        i = i.concat("!rounded-r-s-radius-s ");
      }
    }
    return i;
  };
  require.d(exports, {
    getRoundedClass: function () {
      return n;
    }
  });
}