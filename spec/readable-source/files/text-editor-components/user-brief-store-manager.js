// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'nv' to 'useUserBriefStore'
// - Renamed export 'fs' to 'fetchUserBriefs'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 64757.47c6d48d.js
         * chunkId: 64757
         * moduleId: 59679
         */
module.exports = function (module, exports, require) {
  var reduxDevtoolsPersistIntegration_1 = require("redux-devtools-persist-integration_1") /*id: 688840*/;
  var reactStoreFactory = require("react-store-factory") /*id: 960791*/;
  var docFgServiceConstants = require("doc-fg-service-constants") /*id: 699539*/;
  let l = {
    requestMap: {},
    userBriefMap: {}
  };
  let s = () => ({
    ...l
  });
  let c = e => {
    let {
      prefix: n
    } = e;
    let {
      getFGValue: r,
      isEnableDebug: l
    } = docFgServiceConstants.getDocFgService();
    let c = r(docFgServiceConstants.featureFlags.reduxDevToolsSnapshot, {
      source: docFgServiceConstants.serviceKeys.debugStorage
    });
    let u = reduxDevtoolsPersistIntegration_1.withDevToolsEnhancer(s);
    if (l() && c) {
      return reactStoreFactory.createStore()(reduxDevtoolsPersistIntegration_1.devToolsMiddleware(u, {
        name: `${n}-user-brief-store`
      }));
    } else {
      return reactStoreFactory.createStore()(u);
    }
  };
  let u = function (e = {}) {
    let {
      prefix: n
    } = e;
    return c({
      prefix: n
    });
  };
  let d = function () {
    var e = arguments.length;
    var n = Array(e);
    var r = 0;
    for (; r < e; r++) {
      n[r] = arguments[r];
    }
    if (!d.prototype._useUserBriefStore) {
      (function () {
        let {
          _useUserBriefStore: e
        } = d.prototype || {};
        if (!e) {
          let e = u();
          Object.setPrototypeOf(d.prototype, e);
          Object.defineProperties(d, {
            ...Object.getOwnPropertyDescriptors(e)
          });
          d.prototype._useUserBriefStore = e;
        }
        d.prototype._useUserBriefStore;
      })();
    }
    return d.prototype._useUserBriefStore(...n);
  };
  var collectionArrayGrouper = require("collection-array-grouper") /*id: 177883*/;
  var diContainerInstance = require("di-container-instance") /*id: 167867*/;
  var docUserServiceToken = require("doc-user-service-token") /*id: 765582*/;
  var otterDocApiServiceDi = require("otter-doc-api-service-di") /*id: 53616*/;
  let v = e => {
    let n = diContainerInstance.diContainer.get(docUserServiceToken.docUserServiceToken).getIsLoggedIn();
    if (!e || !n) {
      return;
    }
    let r = otterDocApiServiceDi.getOtterDocService().AgwMGetUserOverview({
      user_id_list: e
    });
    d.setState(n => {
      let i = {
        ...n.requestMap
      };
      e.forEach(e => {
        i[e] ||= Promise.resolve(null);
        i[e] = i[e].then(n => r.then(r => {
          var i;
          var o;
          let a = (o = r.data) === null || o === undefined ? undefined : (i = o.users) === null || i === undefined ? undefined : i.find(n => n.user_id === e);
          if (a == null ? undefined : a.user_id) {
            return {
              user_id: a.user_id,
              nickname: a.name,
              avatar_url: a.avatar_url
            };
          } else {
            return n;
          }
        }, () => n));
      });
      return {
        requestMap: i
      };
    });
    r.then(e => {
      d.setState(n => {
        var r;
        var i;
        let o = {
          ...n.userBriefMap
        };
        if ((i = e.data) !== null && i !== undefined && (r = i.users) !== null && r !== undefined) {
          r.forEach(e => {
            if (e == null ? undefined : e.user_id) {
              o[e.user_id] = {
                user_id: e.user_id,
                nickname: e.name,
                avatar_url: e.avatar_url
              };
            }
          });
        }
        return {
          userBriefMap: o
        };
      });
    });
  };
  let g = e => {
    let {
      requestMap: n
    } = d.getState();
    let {
      true: r = [],
      false: i = []
    } = collectionArrayGrouper.groupValuesToArray([...new Set(e)], e => !!n[e]);
    if (i.length) {
      v(i);
    }
    let o = [];
    Promise.all(r.map(e => n[e].then(n => {
      if (!n) {
        o.push(e);
      }
    }))).then(() => {
      if (o.length) {
        v(o);
      }
    });
  };
  require.d(exports, {
    useUserBriefStore: function () {
      return d;
    },
    fetchUserBriefs: function () {
      return g;
    }
  });
}