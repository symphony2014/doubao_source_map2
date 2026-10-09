// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'configuredAxiosClientWrapper'
// - Resolved require(881790) to 'configured-axios-client-wrapper'
// - Updated imported property 'M' to 'makeRequest' (module 881790)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 181716
         */
module.exports = function (module, exports, require) {
  var configuredAxiosClientWrapper = require("configured-axios-client-wrapper") /*id: 881790*/;
  let r = {
    getCommonParams: () => ({}),
    getCommonHeaders: () => ({}),
    httpClient: configuredAxiosClientWrapper.makeRequest
  };
  let o = e => {
    r.getCommonParams = e.getCommonParams;
    r.getCommonHeaders = e.getCommonHeaders;
    r.httpClient = e.httpClient || configuredAxiosClientWrapper.makeRequest;
    if (e.baseURL) {
      r.baseURL = e.baseURL;
    }
  };
  let a = (e, t) => {
    let {
      url: n,
      method: o,
      data: a,
      params: l,
      headers: s
    } = e;
    return (r.httpClient || configuredAxiosClientWrapper.makeRequest)({
      url: r.baseURL ? `${r.baseURL}${n}` : n,
      method: o,
      data: a,
      params: {
        ...r.getCommonParams(),
        ...l
      },
      headers: {
        ...r.getCommonHeaders(),
        "Content-Type": "application/json; encoding=utf-8",
        ...s
      }
    }, t);
  };
  require.r(exports);
  require.d(exports, {
    imGatewayClient: function () {
      return a;
    },
    initImGateway: function () {
      return o;
    }
  });
}