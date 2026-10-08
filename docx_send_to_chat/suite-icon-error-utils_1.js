// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$' to 'reportIconError'
// - Renamed export 'u' to 'IconErrorCodes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_send_to_chat.7c9030fe.js
         * chunkId: 82045
         * moduleId: 590435
         */
module.exports = function (module, exports, require) {
  var i;
  var n;
  var suiteIconEventCollector = require("suite-icon-event-collector") /*id: 153583*/;
  var componentErrorUtils = require("component-error-utils") /*id: 631657*/;
  function s(e = {}) {
    suiteIconEventCollector.collectSuiteIconEvent(Object.assign({
      action: suiteIconEventCollector.IconEventTypes.ICON_VIEW,
      status: componentErrorUtils.StatusCodes.FAIL
    }, e));
  }
  (i = n ||= {}).EMOJI_NOT_SUPPORTED = "emoji_not_supported";
  i.IAMGE_LOAD_ERROR = "image_load_error";
  i.NO_ICON_KEY = "no_icon_key";
  i.INVALID_KEY = "invalid_key";
  i.ICON_INFO_PARSE_ERROR = "icon_info_parse_error";
  require.d(exports, {
    reportIconError: function () {
      return s;
    },
    IconErrorCodes: function () {
      return n;
    }
  });
}