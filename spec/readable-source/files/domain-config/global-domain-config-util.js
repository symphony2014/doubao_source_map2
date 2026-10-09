// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'globalConfigUtils'
// - Resolved require(115973) to 'global-config-utils'
// - Updated imported property 'k8' to 'getCommonConfig' (module 115973)
// - Updated imported property 'yj' to 'isLocalhost' (module 115973)
// - Updated imported property 'ki' to 'isLocalGarrModules' (module 115973)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 62370.016acb7d.js
         * chunkId: 62370
         * moduleId: 179334
         */
module.exports = function (module, exports, require) {
  var globalConfigUtils = require("global-config-utils") /*id: 115973*/;
  function a(r) {
    let e = globalConfigUtils.getCommonConfig();
    switch (r) {
      case "tea":
      case "slardar":
      case "sentry":
      case "domain":
      case "secLink":
      case "metrics":
        return e[r] || {};
      case "frontier":
        return e[r];
      case "mina":
        if (e && e.mina) {
          let {
            domain: r,
            pathName: t,
            appId: n,
            version: a
          } = e.mina;
          return {
            url: `https://${r}${t}`,
            appId: n,
            version: a
          };
        }
        return {};
      case "garrMina":
        if (globalConfigUtils.isLocalhost() && globalConfigUtils.isLocalGarrModules) {
          return {
            url: "/garr/modules/list",
            appId: 0,
            version: "0"
          };
        }
        if (e && e.garrMina) {
          let {
            domain: r,
            pathName: t,
            appId: n,
            version: a
          } = e.garrMina;
          return {
            url: `https://${r}${t}`,
            appId: n,
            version: a
          };
        }
        return {};
      default:
        return {};
    }
  }
  require.d(exports, {
    getDomainConfig: function () {
      return a;
    }
  });
}