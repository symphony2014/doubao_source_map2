// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'RH' to 'isSsrEnabled'
// - Renamed export 'Vr' to 'trackSsrEvent'
// - Renamed export 'gB' to 'getSsrConfig'
// - Renamed export 'mJ' to 'isSsrOptEnabled'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 174298
         */
module.exports = function (module, exports, require) {
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docxEventCollector = require("docx-event-collector") /*id: 477626*/;
  var boolDefaultGetterUtil = require("bool-default-getter-util") /*id: 855627*/;
  let a = () => true;
  let s = !browserEnvironmentDetectionUtils.browserDetector.isMobile && objectPathGetDefault.getObjectPathDefault(platformDocUtils.H8b(), ["docx_block_ssr_optimize", "whitebaord_and_base_non_first_screen_ssr_enable"], false);
  function d() {
    let e = {
      max_con_req_num: 1,
      max_con_block_count: 1,
      max_req_num: 20,
      block_types: [],
      limit_info: {
        bitable: 5000,
        whiteboard: 5000
      }
    };
    e = Object.assign(e, boolDefaultGetterUtil.getDefaultBool("docx_block_ssr_config", e));
    if (s) {
      e.block_types = ["sheet", "whiteboard", "bitable"];
    }
    return e;
  }
  function f(e, n) {
    let r = {
      behavior: e,
      ...(n || {})
    };
    docxEventCollector.wrappedCollector("block_ssr_scheduler_dev", r);
  }
  require.d(exports, {
    isSsrEnabled: function () {
      return a;
    },
    trackSsrEvent: function () {
      return f;
    },
    getSsrConfig: function () {
      return d;
    },
    isSsrOptEnabled: function () {
      return s;
    }
  });
}