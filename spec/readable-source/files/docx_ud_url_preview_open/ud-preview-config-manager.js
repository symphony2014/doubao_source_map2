// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D5' to 'initConfig'
// - Renamed export 'H3' to 'getTeaDomain'
// - Renamed export 'ge' to 'getDomain'
// - Renamed export 'gp' to 'getDynamicImageCfg'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_ud_url_preview_open.ff701428.js
         * chunkId: 31314
         * moduleId: 266905
         */
module.exports = function (module, exports, require) {
  let n;
  var udGlobalErrorDispatch = require("ud-global-error-dispatch") /*id: 439316*/;
  async function o(e) {
    n ||= e;
  }
  function s(e) {
    if (!n) {
      let e = Error("[getDomain]call config.init first");
      udGlobalErrorDispatch.dispatchGlobalError(e);
      throw e;
    }
    return n.getDomain(e);
  }
  let l = (e = "eu_nc-cdn") => {
    if (!n) {
      let e = Error("[getDynamicImageSetting]call config.init first");
      udGlobalErrorDispatch.dispatchGlobalError(e);
      throw e;
    }
    return n.getDynamicImageSetting(e);
  };
  let a = () => {
    if (!n) {
      let e = Error("[getTeaDomain]call config.init first");
      udGlobalErrorDispatch.dispatchGlobalError(e);
      throw e;
    }
    return n.getTeaDomain();
  };
  require.d(exports, {
    initConfig: function () {
      return o;
    },
    getTeaDomain: function () {
      return a;
    },
    getDomain: function () {
      return s;
    },
    getDynamicImageCfg: function () {
      return l;
    }
  });
}