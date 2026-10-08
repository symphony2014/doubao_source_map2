// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'M' to 'makeRequest'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 881790
         */
module.exports = function (module, exports, require) {
  let i;
  var axiosHttpClient = require("axios-http-client") /*id: 740865*/;
  var axiosIsErrorExport = require("axios-is-error-export") /*id: 390976*/;
  var chatApiErrorHandler = require("chat-api-error-handler") /*id: 374853*/;
  let l = () => {
    if (!i) {
      (i = axiosHttpClient.axios.create({
        timeout: 10000
      })).interceptors.request.use(function (e) {
        var t;
        if (((t = e.method) === null || t === undefined ? undefined : t.toLowerCase()) === "post" && !e.data) {
          e.data = {};
        }
        return e;
      });
      i.interceptors.response.use(async e => {
        let {
          data: t = {},
          headers: n,
          statusText: i,
          status: r,
          config: o
        } = e;
        let {
          ignoreResponseInterceptors: l,
          responseInterceptors: s
        } = o || {};
        if (l) {
          return e;
        } else {
          if (typeof (s == null ? undefined : s[0]) == "function") {
            e = await s[0](e);
          }
          return e = chatApiErrorHandler.processChatResponse({
            responseBody: t,
            responseHeaders: n,
            responseStatusText: i,
            responseStatusCode: r,
            requestConfig: {
              url: o.url
            }
          });
        }
      }, async e => {
        if (axiosIsErrorExport.isAxiosError(e)) {
          let {
            response: i,
            config: r
          } = e;
          let {
            ignoreResponseInterceptors: o,
            responseInterceptors: l
          } = r || {};
          if (o) {
            return Promise.reject(e);
          }
          if (typeof (l == null ? undefined : l[1]) == "function") {
            await l[1](e);
          }
          if (i) {
            let {
              data: r = {},
              headers: o,
              statusText: l,
              status: s
            } = i;
            if (chatApiErrorHandler.handleUnauthorized(e, e == null ? undefined : e.response?.status)) {
              return;
            }
            chatApiErrorHandler.processChatResponse({
              responseBody: r,
              responseHeaders: o,
              responseStatusText: l,
              responseStatusCode: s,
              requestConfig: {
                url: e == null ? undefined : e.config?.url
              }
            });
          }
        }
        throw e;
      });
    }
    return i;
  };
  let s = (e, t) => l().request({
    ...e,
    params: {
      ...e.params,
      ...((t == null ? undefined : t.overrideParams) || {})
    },
    ...((t == null ? undefined : t.overrideConfig) || {})
  });
  require.d(exports, {
    makeRequest: function () {
      return s;
    }
  });
}