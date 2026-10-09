// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Fo' to 'MAX_RETRY_LIMIT'
// - Renamed export 'SE' to 'createRetryInterceptor'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 392268
         */
module.exports = function (module, exports, require) {
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var errorStatusCodes = require("error-status-codes") /*id: 187285*/;
  var hybridDeployToastControl = require("hybrid-deploy-toast-control") /*id: 862984*/;
  var apiEndpointConstants = require("api-endpoint-constants") /*id: 403286*/;
  let u = [apiEndpointConstants.apiEndpoints.clientVars, apiEndpointConstants.apiEndpoints.fetchHistoryList, apiEndpointConstants.apiEndpoints.fetchChanges, apiEndpointConstants.apiEndpoints.settingsV3, apiEndpointConstants.apiEndpoints.fetchSubscriptionChangeset, apiEndpointConstants.apiEndpoints.fetchSubscriptionSnapshot, apiEndpointConstants.apiEndpoints.fetchCompleteChanges];
  let a = 5;
  let s = "__retryCount__";
  function d(e) {
    return function (n) {
      return function (e, n) {
        let d = n.config;
        if (!d || !function (e) {
          let {
            code: n
          } = e;
          let r = e.config;
          let {
            url: o
          } = r;
          let l = [errorStatusCodes.ErrorCode.KEY_INVALID, errorStatusCodes.ErrorCode.NoPerm];
          return !!o && (typeof r.forceNoRetry != "function" || !r.forceNoRetry(e)) && (!n || !l.includes(Number(n))) && (!!u.includes(o) || !!o.includes(u[0]) || r.shouldRetry === true || typeof r.shouldRetry == "function" && !!r.shouldRetry(e));
        }(n)) {
          return Promise.reject(n);
        }
        d[s] = d[s] || 0;
        let f = Number(n == null ? undefined : n.code) === errorStatusCodes.ErrorCode.COLD_DELETE ? a : isUndefinedCheck.isUndefined(d.retryMaxCount) ? 3 : d.retryMaxCount;
        if (d[s] >= f) {
          return Promise.reject(n);
        }
        d[s] += 1;
        let h = (n == null ? undefined : n.config?.url) || "";
        if (Number(n == null ? undefined : n.code) === errorStatusCodes.ErrorCode.COLD_DELETE) {
          if (h.includes(apiEndpointConstants.apiEndpoints.clientVars)) {
            hybridDeployToastControl.showDeployToast();
          }
        } else if (h.includes(apiEndpointConstants.apiEndpoints.clientVars)) {
          hybridDeployToastControl.hideDeployToast();
        }
        if (f <= d[s]) {
          hybridDeployToastControl.hideDeployToast();
        }
        let _ = 0;
        _ = h.includes(apiEndpointConstants.apiEndpoints.clientVars) ? function (e = 1) {
          return Math.pow(2, e) * 1000 + Math.random() * 2000;
        }(d[s]) : function (e = 1, n) {
          let r = n.retryDelay || 0;
          if (r) {
            if (Array.isArray(r)) {
              return r[e - 1] || 1000;
            } else {
              return r;
            }
          } else {
            return e * 1000 + Math.random() * 2000 * e;
          }
        }(d[s], d);
        return new Promise(e => setTimeout(e, _)).then(() => e(d));
      }(e, n);
    };
  }
  require.d(exports, {
    MAX_RETRY_LIMIT: function () {
      return a;
    },
    createRetryInterceptor: function () {
      return d;
    }
  });
}