// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B' to 'flowPermissionHandlers'
// - Renamed export 'o' to 'flowPermissionActions'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 158405
         */
module.exports = function (module, exports, require) {
  var i;
  var threadResourceTypes = require("thread-resource-types") /*id: 259428*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var docTokenManager = require("doc-token-manager") /*id: 632370*/;
  var reduxStoreInitializer = require("redux-store-initializer") /*id: 75100*/;
  var actionTypeConstants = require("action-type-constants") /*id: 199942*/;
  let l = e => {
    let {
      role: n
    } = e;
    return {
      type: actionTypeConstants.ActionTypes.flowPermission.UPDATE_FLOW_ROLE,
      payload: {
        role: n
      }
    };
  };
  let s = e => {
    let {
      actionList: n
    } = e;
    return {
      type: actionTypeConstants.ActionTypes.flowPermission.UPDATE_FLOW_ACTION,
      payload: {
        actionList: n
      }
    };
  };
  let E = e => {
    let {
      hasInit: n
    } = e;
    return {
      type: actionTypeConstants.ActionTypes.flowPermission.SET_FLOW_INIT,
      payload: n
    };
  };
  (i = d || {}).UPDATE_PERMISSION = "UPDATE_PERMISSION";
  var d = i;
  let T = {
    handleAGWGetRole: async function (e, n = threadResourceTypes.resourceTypes.Page) {
      let r = await apiServicesCollection.OtterDocApiService.AGWGetRole({
        obj_token: e,
        obj_type: n
      });
      let {
        code: i,
        data: u
      } = r ?? {};
      if (i === 0) {
        let {
          role: e,
          action_list: n
        } = u ?? {};
        if (reduxStoreInitializer.reduxStore !== null && reduxStoreInitializer.reduxStore !== undefined) {
          reduxStoreInitializer.reduxStore.dispatch(E({
            hasInit: true
          }));
        }
        if (reduxStoreInitializer.reduxStore !== null && reduxStoreInitializer.reduxStore !== undefined) {
          reduxStoreInitializer.reduxStore.dispatch(l({
            role: e
          }));
        }
        if (reduxStoreInitializer.reduxStore !== null && reduxStoreInitializer.reduxStore !== undefined) {
          reduxStoreInitializer.reduxStore.dispatch(s({
            actionList: n
          }));
        }
      }
    }
  };
  let p = {
    updateRoleHandlerPack: {
      validator: function (e) {
        return !!e && e.type === d.UPDATE_PERMISSION;
      },
      handler: function (e) {
        let {
          role: n,
          action_list: r,
          token: i,
          user_id: o
        } = e;
        let a = window.User.id === o;
        let _ = i === docTokenManager.getDocToken();
        if (a && _) {
          if (reduxStoreInitializer.reduxStore !== null && reduxStoreInitializer.reduxStore !== undefined) {
            reduxStoreInitializer.reduxStore.dispatch(l({
              role: n
            }));
          }
          if (reduxStoreInitializer.reduxStore !== null && reduxStoreInitializer.reduxStore !== undefined) {
            reduxStoreInitializer.reduxStore.dispatch(s({
              actionList: r
            }));
          }
        }
      }
    }
  };
  require.d(exports, {
    flowPermissionHandlers: function () {
      return p;
    },
    flowPermissionActions: function () {
      return T;
    }
  });
}