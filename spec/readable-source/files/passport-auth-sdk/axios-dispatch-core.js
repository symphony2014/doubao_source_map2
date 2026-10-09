// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'utilsTypeCheckHelpers'
// - Resolved require(998785) to 'utils-type-check-helpers'
// - Renamed variable 'o' to 'axiosDefaultTransformer'
// - Resolved require(385152) to 'axios-default-transformer'
// - Renamed variable 'i' to 'isCancelToken'
// - Resolved require(903440) to 'is-cancel-token'
// - Renamed variable 'a' to 'axiosDefaultsConfig'
// - Resolved require(962818) to 'axios-defaults-config'
// - Renamed variable 's' to 'axiosCanceledError'
// - Resolved require(195120) to 'axios-canceled-error'
// - Renamed variable 'u' to 'utilsKeyCaseNormalizer'
// - Resolved require(621680) to 'utils-key-case-normalizer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 23931.af272c7e.js
         * chunkId: 23931
         * moduleId: 120624
         */
module.exports = function (module, exports, require) {
  var utilsTypeCheckHelpers = require("utils-type-check-helpers") /*id: 998785*/;
  var axiosDefaultTransformer = require("axios-default-transformer") /*id: 385152*/;
  var isCancelToken = require("is-cancel-token") /*id: 903440*/;
  var axiosDefaultsConfig = require("axios-defaults-config") /*id: 962818*/;
  var axiosCanceledError = require("axios-canceled-error") /*id: 195120*/;
  var utilsKeyCaseNormalizer = require("utils-key-case-normalizer") /*id: 621680*/;
  function c(e) {
    if (e.cancelToken) {
      e.cancelToken.throwIfRequested();
    }
    if (e.signal && e.signal.aborted) {
      throw new axiosCanceledError();
    }
  }
  module.exports = function (e) {
    c(e);
    e.headers = e.headers || {};
    e.data = axiosDefaultTransformer.call(e, e.data, e.headers, null, e.transformRequest);
    utilsKeyCaseNormalizer(e.headers, "Accept");
    utilsKeyCaseNormalizer(e.headers, "Content-Type");
    e.headers = utilsTypeCheckHelpers.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers);
    utilsTypeCheckHelpers.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (t) {
      delete e.headers[t];
    });
    return (e.adapter || axiosDefaultsConfig.adapter)(e).then(function (t) {
      c(e);
      t.data = axiosDefaultTransformer.call(e, t.data, t.headers, t.status, e.transformResponse);
      return t;
    }, function (t) {
      if (!isCancelToken(t)) {
        c(e);
        if (t && t.response) {
          t.response.data = axiosDefaultTransformer.call(e, t.response.data, t.response.headers, t.response.status, e.transformResponse);
        }
      }
      return Promise.reject(t);
    });
  };
}