// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'utilsTypeCheckHelpers'
// - Resolved require(998785) to 'utils-type-check-helpers'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 23931.af272c7e.js
         * chunkId: 23931
         * moduleId: 661494
         */
module.exports = function (module, exports, require) {
  var utilsTypeCheckHelpers = require("utils-type-check-helpers") /*id: 998785*/;
  module.exports = function (e, t) {
    t = t || {};
    var r = {};
    function o(e, t) {
      if (utilsTypeCheckHelpers.isPlainObject(e) && utilsTypeCheckHelpers.isPlainObject(t)) {
        return utilsTypeCheckHelpers.merge(e, t);
      } else if (utilsTypeCheckHelpers.isEmptyObject(t)) {
        return utilsTypeCheckHelpers.merge({}, e);
      } else if (utilsTypeCheckHelpers.isPlainObject(t)) {
        return utilsTypeCheckHelpers.merge({}, t);
      } else if (utilsTypeCheckHelpers.isArray(t)) {
        return t.slice();
      } else {
        return t;
      }
    }
    function i(r) {
      if (utilsTypeCheckHelpers.isUndefined(t[r])) {
        if (utilsTypeCheckHelpers.isUndefined(e[r])) {
          return undefined;
        } else {
          return o(undefined, e[r]);
        }
      } else {
        return o(e[r], t[r]);
      }
    }
    function a(e) {
      if (!utilsTypeCheckHelpers.isUndefined(t[e])) {
        return o(undefined, t[e]);
      }
    }
    function s(r) {
      if (utilsTypeCheckHelpers.isUndefined(t[r])) {
        if (utilsTypeCheckHelpers.isUndefined(e[r])) {
          return undefined;
        } else {
          return o(undefined, e[r]);
        }
      } else {
        return o(undefined, t[r]);
      }
    }
    function u(r) {
      if (r in t) {
        return o(e[r], t[r]);
      } else if (r in e) {
        return o(undefined, e[r]);
      } else {
        return undefined;
      }
    }
    var c = {
      url: a,
      method: a,
      data: a,
      baseURL: s,
      transformRequest: s,
      transformResponse: s,
      paramsSerializer: s,
      timeout: s,
      timeoutMessage: s,
      withCredentials: s,
      withXSRFToken: s,
      adapter: s,
      responseType: s,
      xsrfCookieName: s,
      xsrfHeaderName: s,
      onUploadProgress: s,
      onDownloadProgress: s,
      decompress: s,
      maxContentLength: s,
      maxBodyLength: s,
      beforeRedirect: s,
      transport: s,
      httpAgent: s,
      httpsAgent: s,
      cancelToken: s,
      socketPath: s,
      responseEncoding: s,
      validateStatus: u
    };
    utilsTypeCheckHelpers.forEach(Object.keys(e).concat(Object.keys(t)), function (e) {
      var t = c[e] || i;
      var o = t(e);
      if (!utilsTypeCheckHelpers.isUndefined(o) || t === u) {
        r[e] = o;
      }
    });
    return r;
  };
}