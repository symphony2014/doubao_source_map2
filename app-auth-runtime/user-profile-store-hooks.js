// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Zs' to 'useUserProfileLoaded'
// - Renamed export 'WN' to 'markProfileLoaded'
// - Renamed export 'd9' to 'setUserProfile'
// - Renamed export 'et' to 'getUserProfile'
// - Renamed export 'W1' to 'clearUserProfile'
// - Renamed export 'jl' to 'getProfileLoadedFlag'
// - Renamed export 'Gr' to 'useUserProfile'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat-runtime-chunk-after-interactive.a19b580b.js
         * chunkId: 36136
         * moduleId: 462051
         */
module.exports = function (module, exports, require) {
  var deepEqualityUtil = require("deep-equality-util") /*id: 249434*/;
  let r = require("redux-persist-store-factory") /*id: 273160*/.createPersistStore({
    id: Symbol("user-profile-store"),
    createSlice: () => ({
      userProfile: null,
      isUserProfileLoaded: false
    })
  });
  let o = () => r(e => e.userProfile, deepEqualityUtil.deepEqual);
  let s = () => r(e => e.isUserProfileLoaded, deepEqualityUtil.deepEqual);
  let l = () => r.getState().userProfile;
  let a = () => r.getState().isUserProfileLoaded;
  let c = e => {
    r.setState({
      userProfile: e,
      isUserProfileLoaded: true
    });
  };
  let u = () => {
    r.setState({
      isUserProfileLoaded: true
    });
  };
  let d = () => {
    r.setState({
      userProfile: null
    });
  };
  require.d(exports, {
    useUserProfileLoaded: function () {
      return s;
    },
    markProfileLoaded: function () {
      return u;
    },
    setUserProfile: function () {
      return c;
    },
    getUserProfile: function () {
      return l;
    },
    clearUserProfile: function () {
      return d;
    },
    getProfileLoadedFlag: function () {
      return a;
    },
    useUserProfile: function () {
      return o;
    }
  });
}