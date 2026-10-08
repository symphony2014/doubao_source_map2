// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'b' to 'axiosInstance'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 941094
         */
module.exports = function (module, exports, require) {
  var queryStringUtilities = require("query-string-utilities") /*id: 580022*/;
  var o = queryStringUtilities;
  var axiosHttpClient = require("axios-http-client") /*id: 740865*/;
  require("user-agent-device-detector") /*id: 161498*/.isWindowDefined;
  let u = e => ({});
  var commonParamsBuilder = require("common-params-builder") /*id: 665781*/;
  var chatJsConvConfig = require("chat-js-conv-config") /*id: 146880*/;
  let l = axiosHttpClient.axios.create({
    baseURL: "/samantha/otter/",
    withCredentials: true,
    paramsSerializer: function (e) {
      return o.stringify(e, {
        arrayFormat: "repeat"
      });
    },
    headers: {
      ...chatJsConvConfig.getJsConvConfig(),
      "Content-Type": "application/x-www-form-urlencoded",
      "Agw-Js-Conv": "str"
    },
    params: {
      ...commonParamsBuilder.getCommonParams(u == null ? undefined : u(false))
    }
  });
  l.interceptors.response.use(e => {
    let n = e.config;
    if (!n || n.ignoreInterceptors) {
      return e;
    }
    let {
      code: r
    } = e.data;
    if (r === 0) {
      return {
        ...e.data
      };
    } else {
      return Promise.reject(Object.assign(Error("response error")));
    }
  });
  require.d(exports, {
    axiosInstance: function () {
      return l;
    }
  });
}