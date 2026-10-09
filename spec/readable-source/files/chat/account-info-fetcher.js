// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'M' to 'fetchAccountInfo'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 990858
         */
module.exports = function (module, exports, require) {
  var apiErrorChecker = require("api-error-checker") /*id: 429379*/;
  var configuredAxiosClientWrapper = require("configured-axios-client-wrapper") /*id: 881790*/;
  var uniParamsManager = require("uni-params-manager") /*id: 375503*/;
  let a = () => undefined;
  let l = {
    account_sdk_source: "web",
    sdk_version: "2.2.11-doubao.0"
  };
  let s = () => {
    try {
      return location.origin;
    } catch (e) {
      return "";
    }
  };
  let u = e => {
    var r;
    if (apiErrorChecker.isApiError(e) && (["200", "OK"].includes(e.errorOption?.httpStatus) || ((r = e.errorOption) === null || r === undefined ? undefined : r.response?.message) === "success")) {
      return e.errorOption.response;
    }
    throw e;
  };
  let c = async (e, t) => {
    var n;
    var i;
    var s;
    let {
      aid: d,
      getCommonHeaders: h,
      domain: m,
      loaderArgs: g
    } = e;
    if (!h) {
      throw Error("[fetch-account-info][server] getCommonHeaders is required");
    }
    let f = (g == null ? undefined : (s = g.request) === null || s === undefined ? undefined : (i = s.headers) === null || i === undefined ? undefined : (n = i.get) === null || n === undefined ? undefined : n.call(i, "x-flow-device-id")) ?? a();
    return configuredAxiosClientWrapper.makeRequest({
      url: `${m}/passport/account/info/v2/`,
      method: "GET",
      params: {
        aid: d ?? uniParamsManager.uniParamsManager.getParam("aid"),
        ...l,
        ...(f ? {
          device_id: f
        } : {})
      },
      headers: h()
    }, {
      overrideConfig: {
        ...t,
        ignoreResponseInterceptors: true
      }
    }).then(e => e.data).catch(u);
  };
  let d = async (e, t) => {
    if (typeof window == "undefined") {
      if (!e.domain) {
        throw Error("[fetch-account-info][server] domain is required");
      }
      if (!e.loaderArgs) {
        throw Error("[fetch-account-info][server] loaderArgs is required");
      }
      return c(e, t);
    }
    return c({
      domain: s(),
      ...e
    }, t);
  };
  require.d(exports, {
    fetchAccountInfo: function () {
      return d;
    }
  });
}