// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'k' to 'getUnreadBadgeCount'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: page.fab06bed.js
         * chunkId: 21179
         * moduleId: 354225
         */
module.exports = function (module, exports, require) {
  let r = e => {
    let t = Number(e == null ? undefined : e.badge_count) || 0;
    let n = Number(e == null ? undefined : e.read_badge_count) || 0;
    if (t > n) {
      return t - n;
    } else {
      return 0;
    }
  };
  require.d(exports, {
    getUnreadBadgeCount: function () {
      return r;
    }
  });
}