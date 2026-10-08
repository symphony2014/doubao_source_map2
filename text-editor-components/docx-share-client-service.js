// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z1' to 'getAuthToken'
// - Renamed export 'mt' to 'reportShareError'
// - Renamed export '$k' to 'getClientVarsByArtifact'
// - Renamed export 'g8' to 'getClientVarsByShareId'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 88629
         */
module.exports = function (module, exports, require) {
  var i;
  var l;
  var isNullishCheck = require("is-nullish-check") /*id: 282109*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var toNumberUtil_1 = require("to-number-util_1") /*id: 216346*/;
  var isGreaterThanUtil = require("is-greater-than-util") /*id: 747639*/;
  var accessPermissionEnum = require("access-permission-enum") /*id: 968819*/;
  (i = {})[i.Private = 0] = "Private";
  i[i.Public = 1] = "Public";
  let d = i;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  (l = {})[l.UserPermission = 0] = "UserPermission";
  l[l.ResourceAuthToken = 1] = "ResourceAuthToken";
  let p = l;
  var apiErrorChecker = require("api-error-checker") /*id: 429379*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var artifactDataServiceUtilities = require("artifact-data-service-utilities") /*id: 896276*/;
  var resourceConstantsDef = require("resource-constants-def") /*id: 918915*/;
  var flowDocxEditorControllerModule = require("flow-docx-editor-controller-module") /*id: 544579*/;
  let _ = e => Object.prototype.hasOwnProperty.call(e, "block_map");
  let b = e => {
    let l = e == null ? undefined : e.content_security_meta?.disposal_strategy;
    let u = !isNullishCheck.isNil(l) && !deepEqualUtil_1.deepEqual(l, accessPermissionEnum.AccessPermission.None);
    let p = e == null ? undefined : e.publish_meta?.expired_unix_time;
    let m = toNumberUtil_1.toNumber(p) !== resourceConstantsDef.expirationConstants.NeverExpire && isGreaterThanUtil.isGreaterThan(new Date().valueOf(), toNumberUtil_1.toNumber(p) * 1000);
    let v = e == null ? undefined : e.publish_meta?.publish_status;
    return {
      isBanned: u,
      isExpired: m,
      isShared: d.Public === v
    };
  };
  class k extends Error {
    constructor(e) {
      var t;
      var n;
      var i;
      super(`DocXShareClientVarsError: code=${e}`);
      n = undefined;
      if ((t = typeof (i = function (e, t) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var n = e[Symbol.toPrimitive];
        if (n !== undefined) {
          var i = n.call(e, t || "default");
          if (typeof i != "object") {
            return i;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t === "string" ? String : Number)(e);
      }(t = "code", "string")) == "symbol" ? i : i + "") in this) {
        Object.defineProperty(this, t, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[t] = n;
      }
      this.name = "DocXShareClientVarsError";
      this.code = e;
    }
  }
  let y = new Map();
  let x = async e => {
    let {
      token: t,
      needsAuthToken: n
    } = e;
    try {
      return (await apiServicesCollection.OtterDocApiService.AGWGetPublishMeta({
        page_token: t,
        needs_auth_token: n
      })).data;
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "get_publish_meta_error",
        error: e
      });
      throw e;
    }
  };
  let w = async e => {
    let t = y.get(e);
    if (t) {
      return t;
    }
    let n = await x({
      token: e,
      needsAuthToken: true
    });
    if (n == null ? undefined : n.auth_token) {
      y.set(e, n.auth_token);
    }
    if (n == null) {
      return undefined;
    } else {
      return n.auth_token;
    }
  };
  let S = async e => {
    let {
      token: t,
      version: n
    } = e;
    try {
      let e = await apiServicesCollection.OtterDocApiService.AGWGetPageClientVars({
        id: t,
        version: n
      });
      let i = e == null ? undefined : e.data;
      if (!_(i)) {
        throw Error("client_vars_is_empty");
      }
      return i;
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "get_docx_client_vars_by_auth_token_error",
        error: e
      });
      throw e;
    }
  };
  let R = async e => {
    let {
      token: t,
      authToken: n
    } = e;
    try {
      let e = await apiServicesCollection.OtterDocApiService.AGWGetPageClientVars({
        id: t,
        auth_type: p.ResourceAuthToken,
        auth_token: n
      });
      let i = e == null ? undefined : e.data;
      if (!_(i)) {
        throw Error("client_vars_is_empty");
      }
      return i;
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "get_docx_client_vars_by_auth_token_error",
        error: e
      });
      throw e;
    }
  };
  let $ = async e => {
    try {
      let t = await x({
        token: e,
        needsAuthToken: true
      });
      let {
        isBanned: n,
        isExpired: i,
        isShared: l
      } = b(t);
      if (!l) {
        throw new k(flowDocxEditorControllerModule.SuiteErrorCodes.NOT_FOUND);
      }
      if (i) {
        throw new k(flowDocxEditorControllerModule.SuiteErrorCodes.FORBIDDEN);
      }
      if (n) {
        throw new k(flowDocxEditorControllerModule.SuiteErrorCodes.SECURITY_RESOURCE_REJECTED);
      }
      if (!(t == null ? undefined : t.auth_token)) {
        throw new k(flowDocxEditorControllerModule.SuiteErrorCodes.FAILED);
      }
      return await R({
        token: e,
        authToken: t.auth_token
      });
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "get_docx_client_vars_by_share_id_error",
        error: e
      });
      if (e instanceof k) {
        throw e;
      }
      if (apiErrorChecker.isApiError(e)) {
        let {
          code: t
        } = e.errorOption;
        if (Number(t) === resourceConstantsDef.errorCodes.InvalidParams) {
          throw new k(flowDocxEditorControllerModule.SuiteErrorCodes.INVALID_PARAMETERS);
        }
        if (Number(t) === resourceConstantsDef.errorCodes.ResourceDeleted) {
          throw new k(flowDocxEditorControllerModule.SuiteErrorCodes.NOTE_DELETED);
        }
      }
      throw new k(flowDocxEditorControllerModule.SuiteErrorCodes.FAILED);
    }
  };
  let C = async e => {
    let {
      docId: t,
      artifactKey: n
    } = e;
    if (!t) {
      throw new k(flowDocxEditorControllerModule.SuiteErrorCodes.INVALID_PARAMETERS);
    }
    try {
      var i;
      let e = await artifactDataServiceUtilities.getArtifactMetaByDocId({
        docId: t,
        needHistories: true
      });
      let l = e == null ? undefined : (i = e.version_list) === null || i === undefined ? undefined : i.find(e => e.id === n);
      let r = (l == null ? undefined : l.resource_version) || (l == null ? undefined : l.resource_version) === 0 ? await S({
        token: t,
        version: l.resource_version === -1 ? undefined : l.resource_version
      }) : undefined;
      if (!r) {
        throw new k(flowDocxEditorControllerModule.SuiteErrorCodes.NOT_FOUND);
      }
      return r;
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "get_docx_client_vars_by_artifact_key_error",
        error: e
      });
      if (e instanceof k) {
        throw e;
      }
      if (apiErrorChecker.isApiError(e)) {
        let {
          code: t
        } = e.errorOption;
        if (Number(t) === resourceConstantsDef.errorCodes.InvalidParams) {
          throw new k(flowDocxEditorControllerModule.SuiteErrorCodes.INVALID_PARAMETERS);
        }
        if (Number(t) === resourceConstantsDef.errorCodes.ResourceDeleted) {
          throw new k(flowDocxEditorControllerModule.SuiteErrorCodes.NOTE_DELETED);
        }
      }
      throw new k(flowDocxEditorControllerModule.SuiteErrorCodes.FAILED);
    }
  };
  let T = async e => {
    try {
      await apiServicesCollection.OtterDocApiService.AGWReport(e);
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "report_docx_share_error",
        error: e
      });
      throw e;
    }
  };
  require.d(exports, {
    getAuthToken: function () {
      return w;
    },
    reportShareError: function () {
      return T;
    },
    getClientVarsByArtifact: function () {
      return C;
    },
    getClientVarsByShareId: function () {
      return $;
    }
  });
}