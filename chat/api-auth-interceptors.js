// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'S' to 'getAuthInterceptors'
// - Renamed export 'c' to 'checkLogoutResponse'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 813411
         */
module.exports = function (module, exports, require) {
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var userInfoStatusSelectors = require("user-info-status-selectors") /*id: 480327*/;
  let o = {
    logoutNavigate: undefined,
    resolvePathName: e => e
  };
  let a = false;
  let l = e => {
    var r;
    if ((e == null ? undefined : e.response?.status) === 429) {
      let t = e == null ? undefined : (r = e.response) === null || r === undefined ? undefined : r.config.url;
      if (t && (t == null ? undefined : t.includes("client_vars"))) {
        Promise.all([require.e("ui-avatar-typography-tag") /*id: 71518*/, require.e("form-validation-utils") /*id: 80045*/, require.e("semi-ui-form-controls") /*id: 35606*/]).then(require.bind(require, "samantha-ui-components") /*id: 844464*/).then(e => {
          let {
            SamanthaToast: t
          } = e;
          t.error({
            content: i18nTranslationUtils.i18nextTranslate("web_toast_sendMsg_fail_highDemand"),
            id: "DOC_429_TOAST_ID"
          });
        });
      }
    }
    return e;
  };
  let s = () => [e => {
    if (typeof window == "undefined") {
      return e;
    }
    let {
      config: t,
      headers: i
    } = e;
    let l = userInfoStatusSelectors.selectUserInfoSuccess();
    let s = i["x-tt-flow-login"] || i["x-tt-agw-login"];
    let u = (t == null ? undefined : t.url) || "";
    let {
      logoutNavigate: c,
      resolvePathName: d
    } = o;
    let h = d(u);
    let m = h.startsWith("/alice/") || h.startsWith("/samantha/");
    if (s === "0" && m && l) {
      if (a) {
        return e;
      }
      a = true;
      try {
        require.e("flow-account-service") /*id: 19040*/.then(require.bind(require, "flow-account-module") /*id: 898004*/).then(e => {
          let {
            getFlowAccount: t
          } = e;
          t().passportApi.logout({
            navigate: c,
            reason: "response_header_user_logout",
            trackMeta: {
              from: "response_header",
              trigger_url: u,
              logout_resp_header_logid: i["x-tt-logid"]
            }
          });
        });
      } finally {
        a = false;
      }
    }
    return e;
  }, l];
  async function u(e) {
    let t = e.headers.get("x-tt-flow-login") || e.headers.get("x-tt-agw-login");
    let i = userInfoStatusSelectors.selectUserInfoSuccess();
    if (t === "0" && i) {
      try {
        require.e("flow-account-service") /*id: 19040*/.then(require.bind(require, "flow-account-module") /*id: 898004*/).then(t => {
          let {
            getFlowAccount: n
          } = t;
          n().passportApi.logout({
            reason: "response_header_user_logout",
            trackMeta: {
              from: "chat_completion_response_header",
              logout_resp_header_logid: e.headers.get("x-tt-logid")
            }
          });
        });
      } catch (e) {}
      return Promise.resolve();
    }
  }
  require.d(exports, {
    getAuthInterceptors: function () {
      return s;
    },
    checkLogoutResponse: function () {
      return u;
    }
  });
}