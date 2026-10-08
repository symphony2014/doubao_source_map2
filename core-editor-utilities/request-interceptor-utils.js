// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Lg' to 'transformPostData'
// - Renamed export 'WB' to 'applyInterceptors'
// - Renamed export 'j6' to 'stringifyRepeat'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 47773.5f26e624.js
         * chunkId: 47773
         * moduleId: 916192
         */
module.exports = function (module, exports, require) {
  var queryStringUtils_5 = require("query-string-utils_5") /*id: 298966*/;
  var o = queryStringUtils_5;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var isPlainObjectUtil = require("is-plain-object-util") /*id: 435967*/;
  var httpRequestInterceptorUtils = require("http-request-interceptor-utils") /*id: 675018*/;
  function s(e) {
    return o.stringify(e, {
      arrayFormat: "repeat"
    });
  }
  function l(e) {
    if (objectPathGetDefault.getObjectPathDefault(e, ["headers", "Content-Type"]) !== "application/json" && e.method === "post" && isPlainObjectUtil.isPlainObject(e.data)) {
      return o.stringify(e.data, {
        arrayFormat: "repeat"
      });
    } else {
      return e.data;
    }
  }
  function u(e) {
    e.interceptors.request.use(httpRequestInterceptorUtils.addGrayPolicyHeaders);
  }
  require.d(exports, {
    transformPostData: function () {
      return l;
    },
    applyInterceptors: function () {
      return u;
    },
    stringifyRepeat: function () {
      return s;
    }
  });
}