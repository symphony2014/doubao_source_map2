// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Di' to 'isSpecialEnv'
// - Renamed export 'TQ' to 'isLocalDev'
// - Renamed export 'XV' to 'isFromVideoCall'
// - Renamed export 'Zp' to 'commonEnvConfig'
// - Renamed export 'gA' to 'isBoeEnvironment'
// - Renamed export 'pK' to 'isE2eTesting'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 573139
         */
module.exports = function (module, exports, require) {
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var processBrowserShim = require("process-browser-shim") /*id: 488992*/;
  let l = false;
  let c = window.location.hostname.includes("feishu-boe.cn") || window.location.hostname.includes("feishu-boe.net");
  let u = l || c;
  if (l || c) {
    processBrowserShim.env.API_ENV;
  }
  let a = objectPathGetDefault.getObjectPathDefault(window, "globalConfig.common.env");
  let s = processBrowserShim.env.E2E === "true";
  ["cn", "va", "sg"].indexOf(objectPathGetDefault.getObjectPathDefault(window, "globalConfig.paramsConfig.unitID", {}));
  let d = (() => {
    let e = new URLSearchParams(window.location.search).get("from");
    return e && ["vc", "vcFollow"].includes(e);
  })();
  require.d(exports, {
    isSpecialEnv: function () {
      return u;
    },
    isLocalDev: function () {
      return l;
    },
    isFromVideoCall: function () {
      return d;
    },
    commonEnvConfig: function () {
      return a;
    },
    isBoeEnvironment: function () {
      return c;
    },
    isE2eTesting: function () {
      return s;
    }
  });
}