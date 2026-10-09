// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'BH' to 'nearbyDriveApi'
// - Renamed export 'CI' to 'driveStreamHost'
// - Renamed export 'He' to 'parseEnvCookie'
// - Renamed export 'Hi' to 'getGlobalConfig'
// - Renamed export 'IR' to 'isBytedanceHost'
// - Renamed export 'KH' to 'isLarkProduct'
// - Renamed export 'MI' to 'getNearbyDriveApi'
// - Renamed export 'OQ' to 'isSpecialEnv'
// - Renamed export 'PE' to 'getMainDomain'
// - Renamed export 'PP' to 'isLocalhostMode'
// - Renamed export 'Rv' to 'isFeishuProduct'
// - Renamed export 'Sg' to 'getUnitId'
// - Renamed export 'Sk' to 'getOverloadStatic'
// - Renamed export 'T2' to 'getImGateway'
// - Renamed export 'TI' to 'getDomainPool'
// - Renamed export 'TS' to 'getStaticConfig'
// - Renamed export 'VX' to 'getHelpCenterDomain'
// - Renamed export 'W0' to 'getDriveApi'
// - Renamed export 'WG' to 'isBoeEnv'
// - Renamed export 'j1' to 'isStagingOrSpecial'
// - Renamed export 'k8' to 'getCommonConfig'
// - Renamed export 'kP' to 'isSpecialUser'
// - Renamed export 'kf' to 'isOnlineOrPre'
// - Renamed export 'ki' to 'localGarrModules'
// - Renamed export 'l7' to 'getParamsConfig'
// - Renamed export 'm0' to 'getWsServers'
// - Renamed export 'mb' to 'isStagingEnv'
// - Renamed export 'op' to 'isPreReleaseEnv'
// - Renamed export 'r8' to 'alwaysFalse'
// - Renamed export 'rt' to 'getApiHost'
// - Renamed export 's2' to 'getUrlMapper'
// - Renamed export 'uQ' to 'getLocalConfig'
// - Renamed export 'u_' to 'isOnlineEnv'
// - Renamed export 'vo' to 'getWindowValue'
// - Renamed export 'vp' to 'protocolScheme'
// - Renamed export 'wv' to 'getProduct'
// - Renamed export 'yj' to 'isLocalhost'
// - Renamed export 'zF' to 'getSpaceApi'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 15236.8a9a9ca2.js
         * chunkId: 15236
         * moduleId: 96848
         */
module.exports = function (module, exports, require) {
  var hashLocationProxy = require("hash-location-proxy") /*id: 753923*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var cookieUtilsHelper = require("cookie-utils-helper") /*id: 586277*/;
  function i() {
    return objectPathGetDefault.getObjectPathDefault(window, "globalConfig", {});
  }
  function c() {
    return objectPathGetDefault.getObjectPathDefault(window, "globalConfig.static", []);
  }
  function u() {
    return objectPathGetDefault.getObjectPathDefault(window, "globalConfig.overload_static_domain", []);
  }
  function l() {
    return objectPathGetDefault.getObjectPathDefault(window, "globalConfig.space_api", []);
  }
  function s() {
    return objectPathGetDefault.getObjectPathDefault(window, "globalConfig.drive_api", []);
  }
  function f() {
    return objectPathGetDefault.getObjectPathDefault(window, "globalConfig.im_gateway", []);
  }
  function d() {
    return objectPathGetDefault.getObjectPathDefault(window, "globalConfig.nearby_drive_api", []);
  }
  function g() {
    return objectPathGetDefault.getObjectPathDefault(window, "globalConfig.common", {});
  }
  function b() {
    let t = objectPathGetDefault.getObjectPathDefault(window, "globalConfig.common.domain.helpcenter");
    if (/^\w*\.\w*$/.exec(t)) {
      return `www.${t}`;
    } else {
      return t;
    }
  }
  function h() {
    return objectPathGetDefault.getObjectPathDefault(window, "globalConfig.paramsConfig", {});
  }
  function p() {
    return objectPathGetDefault.getObjectPathDefault(window, "globalConfig.common.domainPool", []);
  }
  function w() {
    return objectPathGetDefault.getObjectPathDefault(window, "globalConfig.urlMapper", {});
  }
  function _() {
    return objectPathGetDefault.getObjectPathDefault(window, "local", {});
  }
  function E() {
    return objectPathGetDefault.getObjectPathDefault(window, "globalConfig.common.product");
  }
  function m() {
    return E() === "lark";
  }
  function T() {
    return E() === "feishu";
  }
  function k() {
    return objectPathGetDefault.getObjectPathDefault(window, "globalConfig.common.mainDomain");
  }
  function x() {
    return objectPathGetDefault.getObjectPathDefault(window, "globalConfig.paramsConfig.unitID");
  }
  let I = objectPathGetDefault.getObjectPathDefault(window, "globalConfig.space_api[0]");
  let O = objectPathGetDefault.getObjectPathDefault(window, "globalConfig.drive_api[0]");
  let A = objectPathGetDefault.getObjectPathDefault(window, "globalConfig.nearby_drive_api[0]");
  let R = objectPathGetDefault.getObjectPathDefault(window, "globalConfig.frontier");
  if (!M()) {
    U();
  }
  I = hashLocationProxy.default.host;
  let S = F();
  let N = G("docsLocation.protocol");
  let y = /^https?:$/.test(N) ? N : "https:";
  if (S) {
    I = G("docsLocation.host", "");
    O = G("docsLocation.host", "");
  }
  let B = function () {
    let t = G("local.apiHost", "");
    return t || `${y}//${I}`;
  }();
  let D = function () {
    let t = G("local.driveStreamApiHost", "");
    return t || `${y}//${O}`;
  }();
  let L = G("local.localGarrModules", false);
  function G(t, e) {
    if (typeof window != "undefined") {
      if (t) {
        return objectPathGetDefault.getObjectPathDefault(window, t, e);
      } else {
        return window;
      }
    } else {
      return "";
    }
  }
  function C() {
    return !!G() && !S && objectPathGetDefault.getObjectPathDefault(window, "globalConfig.common.env") === "online";
  }
  function v() {
    return !!G() && !S && ["online", "pre_release"].includes(objectPathGetDefault.getObjectPathDefault(window, "globalConfig.common.env"));
  }
  function P() {
    let t = G("User.wsServer");
    if (t) {
      return [t];
    } else if (v() || R) {
      return (R || ["docs-frontier.snssdk.com", "docs-frontier-hl.snssdk.com"]).map(t => `wss://${t}/ws/v2`);
    } else {
      return [`${y === "https:" ? "wss:" : "ws:"}//10.6.24.195:5998/ws/v2`];
    }
  }
  function F() {
    return !!G("local.localhost") || G("docsLocation.hostname", "").indexOf("localhost") > -1;
  }
  function M() {
    return objectPathGetDefault.getObjectPathDefault(window, "globalConfig.common.env") === "staging";
  }
  function U() {
    return objectPathGetDefault.getObjectPathDefault(window, "globalConfig.common.env") === "boe";
  }
  function H() {
    return objectPathGetDefault.getObjectPathDefault(window, "globalConfig.common.env") === "pre_release";
  }
  function W() {
    return window.User && window.User.id === "6847336307744587777";
  }
  function Z() {
    return M() || W();
  }
  function Y() {
    return M() || U() || W();
  }
  function V() {
    return false;
  }
  function z() {
    let t = cookieUtilsHelper.getCookie("env").split(",");
    let e = "";
    for (let r = 0; r < t.length; r++) {
      let [n, o] = t[r].split("=");
      if (n === "pre") {
        e = o;
        break;
      }
    }
    return e;
  }
  function K() {
    return objectPathGetDefault.getObjectPathDefault(window, "docsLocation.hostname").split(".")[0] === "bytedance";
  }
  require.d(exports, {
    nearbyDriveApi: function () {
      return A;
    },
    driveStreamHost: function () {
      return D;
    },
    parseEnvCookie: function () {
      return z;
    },
    getGlobalConfig: function () {
      return i;
    },
    isBytedanceHost: function () {
      return K;
    },
    isLarkProduct: function () {
      return m;
    },
    getNearbyDriveApi: function () {
      return d;
    },
    isSpecialEnv: function () {
      return Y;
    },
    getMainDomain: function () {
      return k;
    },
    isLocalhostMode: function () {
      return S;
    },
    isFeishuProduct: function () {
      return T;
    },
    getUnitId: function () {
      return x;
    },
    getOverloadStatic: function () {
      return u;
    },
    getImGateway: function () {
      return f;
    },
    getDomainPool: function () {
      return p;
    },
    getStaticConfig: function () {
      return c;
    },
    getHelpCenterDomain: function () {
      return b;
    },
    getDriveApi: function () {
      return s;
    },
    isBoeEnv: function () {
      return U;
    },
    isStagingOrSpecial: function () {
      return Z;
    },
    getCommonConfig: function () {
      return g;
    },
    isSpecialUser: function () {
      return W;
    },
    isOnlineOrPre: function () {
      return v;
    },
    localGarrModules: function () {
      return L;
    },
    getParamsConfig: function () {
      return h;
    },
    getWsServers: function () {
      return P;
    },
    isStagingEnv: function () {
      return M;
    },
    isPreReleaseEnv: function () {
      return H;
    },
    alwaysFalse: function () {
      return V;
    },
    getApiHost: function () {
      return B;
    },
    getUrlMapper: function () {
      return w;
    },
    getLocalConfig: function () {
      return _;
    },
    isOnlineEnv: function () {
      return C;
    },
    getWindowValue: function () {
      return G;
    },
    protocolScheme: function () {
      return y;
    },
    getProduct: function () {
      return E;
    },
    isLocalhost: function () {
      return F;
    },
    getSpaceApi: function () {
      return l;
    }
  });
}