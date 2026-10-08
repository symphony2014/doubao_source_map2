// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$' to 'reportIconError'
// - Renamed export 'u' to 'IconErrorCodes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: biz-suite-custom-icon.62641073.js
         * chunkId: 44969
         * moduleId: 235919
         */
module.exports = function (module, exports, require) {
  var r;
  var c;
  var suiteIconAnalytics = require("suite-icon-analytics") /*id: 318832*/;
  var componentErrorUtils_1 = require("component-error-utils_1") /*id: 655368*/;
  function o(e = {}) {
    suiteIconAnalytics.collectIconEvent(Object.assign({
      action: suiteIconAnalytics.IconEventTypes.ICON_VIEW,
      status: componentErrorUtils_1.StatusCodes.FAIL
    }, e));
  }
  (r = c ||= {}).EMOJI_NOT_SUPPORTED = "emoji_not_supported";
  r.IAMGE_LOAD_ERROR = "image_load_error";
  r.NO_ICON_KEY = "no_icon_key";
  r.INVALID_KEY = "invalid_key";
  r.ICON_INFO_PARSE_ERROR = "icon_info_parse_error";
  require.d(exports, {
    reportIconError: function () {
      return o;
    },
    IconErrorCodes: function () {
      return c;
    }
  });
}