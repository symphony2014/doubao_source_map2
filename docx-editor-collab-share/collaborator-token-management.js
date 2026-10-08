// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Dw' to 'getInvitedToken'
// - Renamed export 'F6' to 'setInternetPublic'
// - Renamed export 'Xs' to 'grantCollaborator'
// - Renamed export 'tE' to 'generateInvitedToken'
// - Renamed export 'vW' to 'getCollaborators'
// - Renamed export 'xk' to 'deleteCollaborator'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 70666.7b9c3546.js
         * chunkId: 70666
         * moduleId: 2348
         */
module.exports = function (module, exports, require) {
  var toNumberUtil_1 = require("to-number-util_1") /*id: 216346*/;
  var threadResourceTypes = require("thread-resource-types") /*id: 259428*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  let a = async e => {
    let {
      token: t,
      role: n,
      expired: a,
      type: l = threadResourceTypes.resourceTypes.Page,
      resetInvitedToken: c = false
    } = e;
    try {
      return (await apiServicesCollection.OtterDocApiService.AGWGenInvitedToken({
        obj_type: l,
        obj_token: t,
        role: n,
        expired_time_sec: toNumberUtil_1.toNumber(a),
        reset_invited_token: c
      })).data;
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "gen_invited_token_error",
        error: e
      });
      throw e;
    }
  };
  let l = async e => {
    let {
      token: t,
      type: n = threadResourceTypes.resourceTypes.Page
    } = e;
    try {
      return (await apiServicesCollection.OtterDocApiService.AGWGetInvitedToken({
        obj_type: n,
        obj_token: t
      })).data;
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "get_invited_token_error",
        error: e
      });
      throw e;
    }
  };
  let c = async e => {
    let {
      token: t,
      cursor: n,
      type: i = threadResourceTypes.resourceTypes.Page
    } = e;
    try {
      return (await apiServicesCollection.OtterDocApiService.AGWGetCollaborators({
        obj_type: i,
        obj_token: t,
        cursor: n
      })).data;
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "get_collaborators_error",
        error: e
      });
      throw e;
    }
  };
  let u = async e => {
    let {
      token: t,
      userId: n,
      type: i = threadResourceTypes.resourceTypes.Page
    } = e;
    try {
      await apiServicesCollection.OtterDocApiService.AGWDeleteCollaborators({
        obj_type: i,
        obj_token: t,
        user_id: n
      });
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "delete_collaborators_error",
        error: e
      });
      throw e;
    }
  };
  let d = async e => {
    let {
      token: t,
      userId: n,
      role: i,
      type: a = threadResourceTypes.resourceTypes.Page
    } = e;
    try {
      await apiServicesCollection.OtterDocApiService.AGWGrantCollaborator({
        obj_type: a,
        obj_token: t,
        user_id: n,
        role: i
      });
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "grant_collaborator_error",
        error: e
      });
      throw e;
    }
  };
  let h = async e => {
    let {
      token: t,
      open: n
    } = e;
    try {
      return await apiServicesCollection.OtterDocApiService.AGWSetInternetPublic({
        obj_type: threadResourceTypes.resourceTypes.Page,
        obj_token: t,
        is_open: n
      });
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "set_internet_public_error",
        error: e
      });
      throw e;
    }
  };
  require.d(exports, {
    getInvitedToken: function () {
      return l;
    },
    setInternetPublic: function () {
      return h;
    },
    grantCollaborator: function () {
      return d;
    },
    generateInvitedToken: function () {
      return a;
    },
    getCollaborators: function () {
      return c;
    },
    deleteCollaborator: function () {
      return u;
    }
  });
}