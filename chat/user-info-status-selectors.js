// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Dv' to 'selectUserInfoFailed'
// - Renamed export 'EL' to 'waitForUserInfoLoaded'
// - Renamed export 'M7' to 'selectUserInfoSuccess'
// - Renamed export 'Po' to 'isUserInfoLoading'
// - Renamed export 'YO' to 'subscribeToUserInfoStatus'
// - Renamed export 'gF' to 'selectUserInfoLoading'
// - Renamed export 'iT' to 'getUserInfoStatus'
// - Renamed export 'nu' to 'selectUserInfoSuccess_1'
// - Renamed export 'xY' to 'isUserInfoFailed'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 480327
         */
module.exports = function (module, exports, require) {
  var taskStatusConstants_2 = require("task-status-constants_2") /*id: 654066*/;
  var chatUserInfoStore = require("chat-user-info-store") /*id: 130751*/;
  let o = e => {
    let {
      userInfo: t,
      isUserInfoLoaded: n
    } = e;
    if (n) {
      if ((t == null ? undefined : t.user_id_str) && (t == null ? undefined : t.sec_user_id)) {
        return taskStatusConstants_2.TaskStatus.Success;
      } else {
        return taskStatusConstants_2.TaskStatus.Failed;
      }
    } else {
      return taskStatusConstants_2.TaskStatus.Loading;
    }
  };
  let a = () => chatUserInfoStore.userInfoStore(e => o(e) === taskStatusConstants_2.TaskStatus.Failed);
  let l = () => chatUserInfoStore.userInfoStore(e => o(e) === taskStatusConstants_2.TaskStatus.Success);
  let s = () => chatUserInfoStore.userInfoStore(e => o(e) === taskStatusConstants_2.TaskStatus.Loading);
  let u = () => o(chatUserInfoStore.userInfoStore.getState());
  let c = () => u() === taskStatusConstants_2.TaskStatus.Failed;
  let d = () => u() === taskStatusConstants_2.TaskStatus.Success;
  let h = () => u() === taskStatusConstants_2.TaskStatus.Loading;
  let m = (e, t) => chatUserInfoStore.userInfoStore.subscribe(e => o(e), (t, n) => {
    e(t, n);
  }, t);
  let g = () => new Promise(e => {
    if (!h()) {
      e(true);
      return;
    }
    let t = m(n => {
      if (n !== taskStatusConstants_2.TaskStatus.Loading) {
        e(true);
        t();
      }
    });
  });
  require.d(exports, {
    selectUserInfoFailed: function () {
      return a;
    },
    waitForUserInfoLoaded: function () {
      return g;
    },
    selectUserInfoSuccess: function () {
      return d;
    },
    isUserInfoLoading: function () {
      return h;
    },
    subscribeToUserInfoStatus: function () {
      return m;
    },
    selectUserInfoLoading: function () {
      return s;
    },
    getUserInfoStatus: function () {
      return u;
    },
    selectUserInfoSuccess_1: function () {
      return l;
    },
    isUserInfoFailed: function () {
      return c;
    }
  });
}