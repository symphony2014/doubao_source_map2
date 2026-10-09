// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Us' to 'IconEventTypes'
// - Renamed export 'ng' to 'collectSuiteIconEvent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_send_to_chat.7c9030fe.js
         * chunkId: 82045
         * moduleId: 153583
         */
module.exports = function (module, exports, require) {
  var i;
  var n;
  var teaSdkComponentBizEventCollector = require("tea-sdk-component-biz-event-collector") /*id: 61668*/;
  var componentErrorUtils = require("component-error-utils") /*id: 631657*/;
  function s(e = {}) {
    teaSdkComponentBizEventCollector.collectEvent(componentErrorUtils.ComponentName, Object.assign({
      module: "suiteIcon"
    }, e));
  }
  (i = n ||= {}).ICON_VIEW = "icon_view";
  i.UPDATE_ICON = "update_icon";
  require.d(exports, {
    IconEventTypes: function () {
      return n;
    },
    collectSuiteIconEvent: function () {
      return s;
    }
  });
}