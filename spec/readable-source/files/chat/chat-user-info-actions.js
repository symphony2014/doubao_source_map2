// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'MS' to 'clearUserInfo'
// - Renamed export 'Pc' to 'subscribeUserInfo'
// - Renamed export 'SE' to 'markUserInfoLoaded'
// - Renamed export 'ZS' to 'setUserInfo'
// - Renamed export 'bG' to 'getUserInfo'
// - Renamed export 'n5' to 'getUserIdStr'
// - Renamed export 'rM' to 'subscribeUserId'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 400206
         */
module.exports = function (module, exports, require) {
  var deepEqualityUtil = require("deep-equality-util") /*id: 249434*/;
  var chatUserInfoStore = require("chat-user-info-store") /*id: 130751*/;
  let o = e => {
    chatUserInfoStore.userInfoStore.setState({
      userInfo: e,
      isUserInfoLoaded: true
    });
  };
  let a = () => {
    chatUserInfoStore.userInfoStore.setState({
      isUserInfoLoaded: true
    });
  };
  let l = () => {
    chatUserInfoStore.userInfoStore.setState({
      userInfo: null
    });
  };
  let s = () => chatUserInfoStore.userInfoStore(e => e.userInfo, deepEqualityUtil.deepEqual);
  let u = () => chatUserInfoStore.userInfoStore(e => {
    return e.userInfo?.user_id_str;
  });
  let c = () => chatUserInfoStore.userInfoStore.getState().userInfo;
  let d = () => {
    return chatUserInfoStore.userInfoStore.getState().userInfo?.user_id_str;
  };
  require.d(exports, {
    clearUserInfo: function () {
      return l;
    },
    subscribeUserInfo: function () {
      return s;
    },
    markUserInfoLoaded: function () {
      return a;
    },
    setUserInfo: function () {
      return o;
    },
    getUserInfo: function () {
      return c;
    },
    getUserIdStr: function () {
      return d;
    },
    subscribeUserId: function () {
      return u;
    }
  });
}