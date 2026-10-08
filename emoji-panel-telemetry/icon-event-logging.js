// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'E' to 'suiteIconErrorUtils_1'
// - Resolved require(590435) to 'suite-icon-error-utils_1'
// - Renamed variable 's' to 'teaSdkComponentBizEventCollector'
// - Resolved require(61668) to 'tea-sdk-component-biz-event-collector'
// - Renamed variable 'u' to 'componentErrorUtils'
// - Resolved require(631657) to 'component-error-utils'
// - Renamed variable 'r' to 'suiteIconEventCollector'
// - Resolved require(153583) to 'suite-icon-event-collector'
// - Updated imported property '$' to 'reportIconError' (module 590435)
// - Updated imported property 'u' to 'IconErrorCodes' (module 590435)
// - Updated imported property 'ng' to 'collectSuiteIconEvent' (module 153583)
// - Updated imported property 'Us' to 'IconEventTypes' (module 153583)
// - Updated imported property 'Q_' to 'StatusCodes' (module 631657)
// - Updated imported property 'JU' to 'createErrorInfo' (module 631657)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 27816.5bded768.js
         * chunkId: 27816
         * moduleId: 944421
         */
module.exports = function (module, exports, require) {
  var _;
  var c;
  var t;
  var i;
  var C;
  var O;
  var suiteIconErrorUtils_1 = require("suite-icon-error-utils_1") /*id: 590435*/;
  var teaSdkComponentBizEventCollector = require("tea-sdk-component-biz-event-collector") /*id: 61668*/;
  var componentErrorUtils = require("component-error-utils") /*id: 631657*/;
  var suiteIconEventCollector = require("suite-icon-event-collector") /*id: 153583*/;
  function l() {
    teaSdkComponentBizEventCollector.collectEvent(i.CCM_DOCS_EMOJI_CHOOSE_PANEL_VIEW);
  }
  function a(n, o = {}) {
    teaSdkComponentBizEventCollector.collectEvent(i.CCM_DOCS_EMOJI_CHOOSE_PANEL_CLICK, Object.assign({
      click: n
    }, o));
  }
  function I(n = 0) {
    suiteIconEventCollector.collectSuiteIconEvent({
      action: suiteIconEventCollector.IconEventTypes.UPDATE_ICON,
      status: componentErrorUtils.StatusCodes.SUCCESS,
      statusCode: 200,
      code: n
    });
  }
  function f(n, o = "") {
    suiteIconEventCollector.collectSuiteIconEvent(Object.assign({
      action: suiteIconEventCollector.IconEventTypes.UPDATE_ICON
    }, componentErrorUtils.createErrorInfo(n, o)));
  }
  (_ = i ||= {}).CCM_DOCS_EMOJI_CHOOSE_PANEL_VIEW = "ccm_docs_emoji_choose_panel_view";
  _.CCM_DOCS_EMOJI_CHOOSE_PANEL_CLICK = "ccm_docs_emoji_choose_panel_click";
  (c = C ||= {}).EMOJI = "emoji";
  c.EMOJI_TAB = "emoji_tab";
  c.ICON_TAB = "icon_tab";
  c.REMOVE_EMOJI = "remove_emoji";
  (t = O ||= {}).icon = "icon";
  t.recover = "recover";
  t.color = "color";
  t.save = "save";
  require.r(exports);
  require.d(exports, {
    logIconViewFail: function () {
      return suiteIconErrorUtils_1.reportIconError;
    },
    BaseClickType: function () {
      return O;
    },
    logChoosePanelView: function () {
      return l;
    },
    logChoosePanelClick: function () {
      return a;
    },
    logIconUpdateFail: function () {
      return f;
    },
    PanelClickType: function () {
      return C;
    },
    IconViewFailReason: function () {
      return suiteIconErrorUtils_1.IconErrorCodes;
    },
    logIconUpdateSuccess: function () {
      return I;
    }
  });
}