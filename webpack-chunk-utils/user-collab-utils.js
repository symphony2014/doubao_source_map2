// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Kl' to 'uniqUsersById'
// - Renamed export 'T8' to 'filterCollabUsers'
// - Renamed export 'st' to 'normalizeUserId'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 132196
         */
module.exports = function (module, exports, require) {
  var arrayUniqByMatcher = require("array-uniq-by-matcher") /*id: 898750*/;
  let o = e => {
    let {
      suid: n,
      user_id: r
    } = e;
    let i = n || r;
    return {
      ...e,
      user_id: i ? String(i) : undefined,
      _larkId: n,
      _bearId: r
    };
  };
  function a(e) {
    if (e) {
      return arrayUniqByMatcher.uniqByMatcher(e, "user_id");
    } else {
      return [];
    }
  }
  let u = e => (e == null ? undefined : e.length) <= 0 ? [] : e.filter(e => (e == null ? undefined : e.allow_show_collaboration_avatar) !== false);
  require.d(exports, {
    uniqUsersById: function () {
      return a;
    },
    filterCollabUsers: function () {
      return u;
    },
    normalizeUserId: function () {
      return o;
    }
  });
}