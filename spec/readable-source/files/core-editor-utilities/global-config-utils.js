// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'KH' to 'isLarkProduct'
// - Renamed export 'PE' to 'getMainDomain'
// - Renamed export 'Rv' to 'isFeishuProduct'
// - Renamed export 'WG' to 'isBoeEnvironment'
// - Renamed export 'k8' to 'getCommonConfig'
// - Renamed export 'ki' to 'isLocalGarrModules'
// - Renamed export 'r8' to 'isDisabled'
// - Renamed export 'yj' to 'isLocalhost'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 47773.5f26e624.js
         * chunkId: 47773
         * moduleId: 115973
         */
module.exports = function (module, exports, require) {
  var hashLocationProxy = require("hash-location-proxy") /*id: 753923*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  function a() {
    return objectPathGetDefault.getObjectPathDefault(window, "globalConfig.common", {});
  }
  function i() {
    return objectPathGetDefault.getObjectPathDefault(window, "globalConfig.common.product");
  }
  function c() {
    return i() === "lark";
  }
  function s() {
    return i() === "feishu";
  }
  function l() {
    return objectPathGetDefault.getObjectPathDefault(window, "globalConfig.common.mainDomain");
  }
  let u = objectPathGetDefault.getObjectPathDefault(window, "globalConfig.space_api[0]");
  let d = objectPathGetDefault.getObjectPathDefault(window, "globalConfig.drive_api[0]");
  objectPathGetDefault.getObjectPathDefault(window, "globalConfig.nearby_drive_api[0]");
  objectPathGetDefault.getObjectPathDefault(window, "globalConfig.frontier");
  if (objectPathGetDefault.getObjectPathDefault(window, "globalConfig.common.env") !== "staging") {
    w();
  }
  u = hashLocationProxy.default.host;
  let f = m();
  let g = h("docsLocation.protocol");
  let b = /^https?:$/.test(g) ? g : "https:";
  if (f) {
    u = h("docsLocation.host", "");
    d = h("docsLocation.host", "");
  }
  (function () {
    let e = h("local.apiHost", "");
  })();
  (function () {
    let e = h("local.driveStreamApiHost", "");
  })();
  let p = h("local.localGarrModules", false);
  function h(e, t) {
    if (typeof window != "undefined") {
      if (e) {
        return objectPathGetDefault.getObjectPathDefault(window, e, t);
      } else {
        return window;
      }
    } else {
      return "";
    }
  }
  function m() {
    return !!h("local.localhost") || h("docsLocation.hostname", "").indexOf("localhost") > -1;
  }
  function w() {
    return objectPathGetDefault.getObjectPathDefault(window, "globalConfig.common.env") === "boe";
  }
  function E() {
    return false;
  }
  require.d(exports, {
    isLarkProduct: function () {
      return c;
    },
    getMainDomain: function () {
      return l;
    },
    isFeishuProduct: function () {
      return s;
    },
    isBoeEnvironment: function () {
      return w;
    },
    getCommonConfig: function () {
      return a;
    },
    isLocalGarrModules: function () {
      return p;
    },
    isDisabled: function () {
      return E;
    },
    isLocalhost: function () {
      return m;
    }
  });
}