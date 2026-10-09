// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'g$' to 'getMemberName'
// - Renamed export 'Qx' to 'formatMemberKey'
// - Renamed export 'kH' to 'removeMembers'
// - Renamed export 'I8' to 'memberActions'
// - Renamed export 'gu' to 'addMembers'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 741110
         */
module.exports = function (module, exports, require) {
  var i;
  var debounceUtilWrapper = require("debounce-util-wrapper") /*id: 213804*/;
  (i = {})[i.Page = 1] = "Page";
  let a = i;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var userInfoStatusSelectors = require("user-info-status-selectors") /*id: 480327*/;
  var reduxStoreInitializer = require("redux-store-initializer") /*id: 75100*/;
  var fileMemberSelectors = require("file-member-selectors") /*id: 978288*/;
  var currentUserSelectors = require("current-user-selectors") /*id: 96617*/;
  var actionTypeConstants = require("action-type-constants") /*id: 199942*/;
  let d = e => {
    let {
      type: n,
      token: r,
      members: i,
      count: o
    } = e;
    return {
      type: actionTypeConstants.ActionTypes.member.ADD_SUITE_MEMBERS,
      payload: {
        type: n,
        token: r,
        members: i,
        count: o
      }
    };
  };
  let T = e => {
    let {
      type: n,
      token: r,
      memberInfoList: i,
      count: o
    } = e;
    return {
      type: actionTypeConstants.ActionTypes.member.UPDATE_SUITE_MEMBERS,
      payload: {
        type: n,
        token: r,
        memberInfoList: i,
        count: o
      }
    };
  };
  let p = e => {
    let {
      type: n,
      token: r,
      memberIds: i,
      count: o
    } = e;
    return {
      type: actionTypeConstants.ActionTypes.member.REMOVE_SUITE_MEMBERS,
      payload: {
        type: n,
        token: r,
        memberIds: i,
        count: o
      }
    };
  };
  let S = e => {
    let {
      type: n,
      token: r,
      members: i,
      count: o = 0
    } = e;
    return {
      type: actionTypeConstants.ActionTypes.member.RESET_SUITE_MEMBERS,
      payload: {
        type: n,
        token: r,
        members: i,
        count: o
      }
    };
  };
  var platformEventDefinitions = require("platform-event-definitions") /*id: 460729*/;
  var fileNodeTypeConstants = require("file-node-type-constants") /*id: 144238*/;
  var i18nInitializationUtils = require("i18n-initialization-utils") /*id: 379142*/;
  var immutableCore = require("immutable-core") /*id: 81885*/;
  function O(e = i18nInitializationUtils.getLanguageFlags) {
    if (e.zh || e.zh_hant) {
      return "zh_cn";
    } else if (e.ja) {
      return "ja_jp";
    } else if (e.en) {
      return "en_us";
    } else {
      return undefined;
    }
  }
  let R = (e, n) => {
    let r = fileNodeTypeConstants.fileNodeTypeMap[e.toLowerCase()];
    return `${r}:${n}`;
  };
  let h = "need_refetch_members";
  let N = e => {
    if (e) {
      platformEventDefinitions.eventEmitter.emit(`${h}_${e}`);
    } else {
      platformEventDefinitions.eventEmitter.emit(h);
    }
  };
  function C(e, n) {
    if (!reduxStoreInitializer.reduxStore) {
      return false;
    }
    let r = reduxStoreInitializer.reduxStore.getState();
    let i = currentUserSelectors.selectCurrentUserId(r);
    let o = r.appState.membersCount[n] || 0;
    let a = new Set((r.appState.members[R(e, n)] || []).filter(e => !e.has_no_user_info && e.user_id !== i).map(e => e.user_id)).size;
    return o > 50 && a < 30 || o <= 50 && o !== a;
  }
  let D = (e, n) => {
    if (C(e, n)) {
      N(n);
    }
  };
  let L = (e, n) => {
    let {
      type: r,
      token: i,
      members: o
    } = n;
    e[R(r, i)] = o;
  };
  let b = (e, n) => {
    let {
      type: r,
      token: i
    } = n;
    let o = R(r, i);
    delete e[o];
  };
  function g(e) {
    let [n, r] = e.split("#");
    return {
      type: n,
      token: r
    };
  }
  let P = new Map();
  let M = new Map();
  function v(e) {
    if (!P.has(e)) {
      P.set(e, new Map());
    }
    if (!M.has(e)) {
      M.set(e, new Set());
    }
  }
  let y = debounceUtilWrapper.createDebounce((e, n) => {
    P.forEach((r, i) => {
      let {
        type: o,
        token: a
      } = g(i);
      if (r.size !== 0 && a === n && reduxStoreInitializer.reduxStore) {
        reduxStoreInitializer.reduxStore.dispatch(T({
          type: o,
          token: a,
          count: e,
          memberInfoList: [...r.values()]
        }));
      }
    });
    P.clear();
  }, 500);
  let w = debounceUtilWrapper.createDebounce((e, n) => {
    M.forEach((r, i) => {
      let {
        type: o,
        token: a
      } = g(i);
      if (r.size !== 0 && a === n && reduxStoreInitializer.reduxStore) {
        reduxStoreInitializer.reduxStore.dispatch(p({
          type: o,
          token: a,
          count: e,
          memberIds: [...r]
        }));
      }
    });
    M.clear();
  }, 500);
  let U = function (e, n, r, i = "") {
    if (!reduxStoreInitializer.reduxStore || !r) {
      return "";
    }
    let {
      appState: o
    } = reduxStoreInitializer.reduxStore.getState();
    if (!o) {
      return i;
    }
    let {
      members: a
    } = o;
    if (!a) {
      return i;
    }
    let u = a[R(n, r)];
    if (!u) {
      return i;
    }
    let c = u.find(n => String(n.suid || n.user_id) === String(e));
    if (!c) {
      return i;
    }
    let l = i18nInitializationUtils.normalizeLangCode(i18nInitializationUtils.resolveLocaleCode("zh"));
    let s = function (e, n = "", r = O()) {
      let i = e.display_name;
      if (i) {
        return function (e, n = "", r = O()) {
          let {
            i18n_value: i = {},
            value: o = ""
          } = e || {};
          if (r && i && i[r]) {
            return i[r];
          } else {
            return o || n;
          }
        }(immutableCore.Map.isMap(i) ? i.toJS() : i, n, r);
      } else {
        return n;
      }
    }(c, "", l);
    if (s) {
      return s;
    }
    if (c.i18n_names && l && c.i18n_names[l]) {
      return c.i18n_names[l];
    }
    let E = c.user_name || c.cn_name || i;
    if (i18nInitializationUtils.getLanguageFlags.zh) {
      return c.cn_name || E;
    } else {
      return c.en_name || E;
    }
  };
  let k = {
    handleUserNewInfo: (e, n) => {
      let {
        token: r,
        count: i,
        ...o
      } = n;
      let a = `${e}#${r}`;
      v(a);
      let u = P.get(a);
      let c = M.get(a);
      u.set(o.member_id, o);
      c.delete(o.member_id);
      y(i, r);
    },
    handleUserLeave: (e, n) => {
      let {
        token: r,
        users_count: i,
        member_id: o
      } = n;
      if (!o) {
        return;
      }
      let a = [].concat(o);
      let u = `${e}#${r}`;
      v(u);
      let c = M.get(u);
      let _ = P.get(u);
      a.forEach(e => {
        c.add(e);
        _.delete(e);
      });
      w(i, r);
      D(e, r);
    },
    handleResetMembers: (e, n) => {
      if (reduxStoreInitializer.reduxStore) {
        reduxStoreInitializer.reduxStore.dispatch(S({
          type: e,
          token: n
        }));
      }
    },
    handleMembersMessage: (e, n) => {
      let {
        token: r,
        members: i,
        count: o
      } = n;
      if (i && reduxStoreInitializer.reduxStore) {
        reduxStoreInitializer.reduxStore.dispatch(S({
          type: e,
          token: r,
          members: i,
          count: o
        }));
      }
    },
    getSuiteMembers: (e, n) => reduxStoreInitializer.reduxStore && fileMemberSelectors.selectMembers(reduxStoreInitializer.reduxStore.getState())[R(e, n)] || [],
    handleSetUser: (e, n) => {
      let {
        token: r,
        members: i
      } = n;
      if (reduxStoreInitializer.reduxStore) {
        reduxStoreInitializer.reduxStore.dispatch(d({
          type: e,
          token: r,
          members: i || []
        }));
      }
    },
    fetchMemberInfos: async function (e, n = a.Page) {
      if (!userInfoStatusSelectors.selectUserInfoSuccess()) {
        return Promise.reject(Error("fetchMemberInfos not logged in"));
      }
      let r = await apiServicesCollection.OtterCoreApiService.AgwGetMembers({
        room_meta: {
          token: e,
          type: n
        }
      });
      try {
        let {
          data: n
        } = r;
        let {
          count: i,
          member_list: o,
          version: a,
          users: u
        } = n || {};
        let c = {
          ...r
        };
        let _ = o == null ? undefined : o.map(e => {
          let {
            user_id: n = "",
            member_id: r
          } = e;
          let {
            avatar_url: i = "",
            name: o = ""
          } = (u == null ? undefined : u[n]) || {};
          return {
            member_id: r,
            user_id: n,
            avatar_url: i,
            cn_name: o,
            en_name: o,
            is_anonymous: 0,
            user_email: "",
            user_mobile: "",
            user_type: 0
          };
        });
        let l = {};
        if (_) {
          _.forEach(e => {
            let {
              user_id: n
            } = e;
            l[n] = e;
          });
        }
        c.data = {
          token: e,
          members: _,
          entities: {
            users: l
          },
          version: a,
          count: i
        };
        return c;
      } catch {
        return Promise.reject(Error("fetchMemberInfos invalid params"));
      }
    },
    checkIsMembersMissing: C,
    eventOnRefetchRoomMembers: (e, n) => {
      if (n) {
        platformEventDefinitions.eventEmitter.on(`${h}_${n}`, e);
      } else {
        platformEventDefinitions.eventEmitter.on(h, e);
      }
    },
    eventOffRefetchRoomMembers: (e, n) => {
      if (n) {
        platformEventDefinitions.eventEmitter.off(`${h}_${n}`, e);
      } else {
        platformEventDefinitions.eventEmitter.off(h, e);
      }
    }
  };
  require.d(exports, {
    getMemberName: function () {
      return U;
    },
    formatMemberKey: function () {
      return R;
    },
    removeMembers: function () {
      return b;
    },
    memberActions: function () {
      return k;
    },
    addMembers: function () {
      return L;
    }
  });
}