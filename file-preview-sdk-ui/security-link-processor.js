// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'F$' to 'getSecurityBaseUrl'
// - Renamed export 'IH' to 'openSecureWindow'
// - Renamed export 'uS' to 'openSecureLink'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17043.439c2bd3.js
         * chunkId: 17043
         * moduleId: 103048
         */
module.exports = function (module, exports, require) {
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var safeLinkProcessor = require("safe-link-processor") /*id: 644273*/;
  var userAgentBrowserDetector = require("user-agent-browser-detector") /*id: 966573*/;
  let s = "https://security.feishu.cn/link/safety";
  let l = () => {
    try {
      let e = objectPathGetDefault.getObjectPathDefault(window, "User.settingsConfig.biz_domain_config.suite_security_link.0", "");
      if (e) {
        return `https://${e}/link/safety`;
      }
    } catch (e) {}
    return s;
  };
  let a = l();
  let u = (e, t) => {
    let i = {
      baseUrl: a,
      ...t,
      logParams: {
        location: safeLinkProcessor.LinkScenes.CCM_DRIVE
      }
    };
    if (!/^https:\/\/security\..*\/link\/safety$/.test(i.baseUrl || a)) {
      i.baseUrl = s;
      if (window.location.hostname.includes("larksuite")) {
        i.baseUrl = "https://security.larksuite.com/link/safety";
      }
    }
    return safeLinkProcessor.getSecureUrl(e, i);
  };
  function d(e) {
    if (userAgentBrowserDetector.getBrowserName().toLowerCase() === "chrome") {
      window.open(e, "_blank", "noopener");
      return;
    }
    let t = window.open(e, "_blank");
    if (t) {
      t.opener = null;
    }
  }
  function c(e, t) {
    d(u(e, t));
  }
  require.d(exports, {
    getSecurityBaseUrl: function () {
      return l;
    },
    openSecureWindow: function () {
      return d;
    },
    openSecureLink: function () {
      return c;
    }
  });
}