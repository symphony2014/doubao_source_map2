// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'userInfoStatusSelectors'
// - Resolved require(480327) to 'user-info-status-selectors'
// - Renamed variable 'r' to 'flowAccountModule'
// - Resolved require(898004) to 'flow-account-module'
// - Updated imported property 'M7' to 'selectUserInfoSuccess' (module 480327)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 39861.de9394a9.js
         * chunkId: 39861
         * moduleId: 790122
         */
module.exports = function (module, exports, require) {
  var userInfoStatusSelectors = require("user-info-status-selectors") /*id: 480327*/;
  var flowAccountModule = require("flow-account-module") /*id: 898004*/;
  let i = {
    navigate: undefined
  };
  let l = async n => {
    let t = userInfoStatusSelectors.selectUserInfoSuccess();
    let {
      headers: e,
      url: l
    } = n;
    let s = e.get("x-tt-flow-login") || e.get("x-tt-agw-login");
    let {
      navigate: u
    } = i;
    if (s === "0" && t) {
      try {
        await flowAccountModule.getFlowAccount().passportApi.logout({
          navigate: u,
          reason: "response_header_user_logout",
          trackMeta: {
            from: "response_header",
            trigger_url: l,
            logout_resp_header_logid: e.get("x-tt-logid") || ""
          }
        });
        return {
          done: true
        };
      } catch (n) {}
    }
    return {
      done: false
    };
  };
  require.r(exports);
  require.d(exports, {
    sseLogoutInterceptor: function () {
      return l;
    }
  });
}