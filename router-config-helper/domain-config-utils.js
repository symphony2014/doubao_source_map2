// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'O' to 'isDomainValid'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 15236.8a9a9ca2.js
         * chunkId: 15236
         * moduleId: 460454
         */
module.exports = function (module, exports, require) {
  var globalConfigHelper = require("global-config-helper") /*id: 96848*/;
  function o(t) {
    let e = globalConfigHelper.getDomainPool();
    return RegExp(`^(https?:\\/\\/)?([^/]+\\.)?(${e.map(t => `(${t})`.replace(/\./g, "\\.")).join("|")})($|\\/)`).test(t);
  }
  function a(t) {
    let e = globalConfigHelper.getCommonConfig();
    switch (t) {
      case "tea":
      case "slardar":
      case "sentry":
      case "domain":
      case "secLink":
      case "metrics":
        return e[t] || {};
      case "frontier":
        return e[t];
      case "mina":
        if (e && e.mina) {
          let {
            domain: t,
            pathName: r,
            appId: n,
            version: o
          } = e.mina;
          return {
            url: `https://${t}${r}`,
            appId: n,
            version: o
          };
        }
        return {};
      case "garrMina":
        if (globalConfigHelper.isLocalhost() && globalConfigHelper.localGarrModules) {
          return {
            url: "/garr/modules/list",
            appId: 0,
            version: "0"
          };
        }
        if (e && e.garrMina) {
          let {
            domain: t,
            pathName: r,
            appId: n,
            version: o
          } = e.garrMina;
          return {
            url: `https://${t}${r}`,
            appId: n,
            version: o
          };
        }
        return {};
      default:
        return {};
    }
  }
  require.d(exports, {
    isDomainValid: function () {
      return o;
    },
    getDomainConfig: function () {
      return a;
    }
  });
}