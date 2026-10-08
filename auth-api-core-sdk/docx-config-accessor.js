// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D5' to 'initConfig'
// - Renamed export 'H3' to 'getTeaDomain'
// - Renamed export 'IK' to 'getDocCustomIconConfig'
// - Renamed export 'Pk' to 'getFsUnitTpl'
// - Renamed export 'cr' to 'isFeatureEnabled'
// - Renamed export 'ge' to 'getDomain'
// - Renamed export 'gp' to 'getDynamicImageSetting'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72263.e97f8103.js
         * chunkId: 72263
         * moduleId: 195932
         */
module.exports = function (module, exports, require) {
  let n;
  var globalErrorDispatcher = require("global-error-dispatcher") /*id: 663923*/;
  async function o(e) {
    n ||= e;
  }
  function a(e) {
    if (!n) {
      let e = Error("[isFeatureEnabled]call config.init first");
      globalErrorDispatcher.dispatchGlobalError(e);
      throw e;
    }
    return n.isFeatureEnabled(e);
  }
  function s(e) {
    if (!n) {
      let e = Error("[getDomain]call config.init first");
      globalErrorDispatcher.dispatchGlobalError(e);
      throw e;
    }
    return n.getDomain(e);
  }
  function c(e = "eu_nc") {
    if (!n) {
      let e = Error("[getFsUnitTpl]call config.init first");
      globalErrorDispatcher.dispatchGlobalError(e);
      throw e;
    }
    return n.getFsUnitTpl(e);
  }
  let u = (e = "eu_nc-cdn") => {
    if (!n) {
      let e = Error("[getDynamicImageSetting]call config.init first");
      globalErrorDispatcher.dispatchGlobalError(e);
      throw e;
    }
    return n.getDynamicImageSetting(e);
  };
  let l = () => {
    if (!n) {
      let e = Error("[getTeaDomain]call config.init first");
      globalErrorDispatcher.dispatchGlobalError(e);
      throw e;
    }
    return n.getTeaDomain();
  };
  let f = async () => {
    if (!n) {
      let e = Error("[getDocCustomIconConfig]call config.init first");
      globalErrorDispatcher.dispatchGlobalError(e);
      throw e;
    }
    return await n.getDocCustomIconConfig();
  };
  require.d(exports, {
    initConfig: function () {
      return o;
    },
    getTeaDomain: function () {
      return l;
    },
    getDocCustomIconConfig: function () {
      return f;
    },
    getFsUnitTpl: function () {
      return c;
    },
    isFeatureEnabled: function () {
      return a;
    },
    getDomain: function () {
      return s;
    },
    getDynamicImageSetting: function () {
      return u;
    }
  });
}