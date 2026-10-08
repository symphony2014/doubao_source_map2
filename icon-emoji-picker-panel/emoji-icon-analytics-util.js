// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Lw' to 'IconActionTypes'
// - Renamed export 'Vd' to 'trackIconSuccess'
// - Renamed export 'Yy' to 'EmojiTabTypes'
// - Renamed export 'hk' to 'trackIconError'
// - Renamed export 'lz' to 'trackEmojiPanelView'
// - Renamed export 'sB' to 'trackEmojiPanelClick'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 47996.8a642cb0.js
         * chunkId: 47996
         * moduleId: 642105
         */
module.exports = function (module, exports, require) {
  var o;
  var r;
  var i;
  var a;
  var c;
  var u;
  var componentBizTeaCollector = require("component-biz-tea-collector") /*id: 568420*/;
  var componentErrorUtils_1 = require("component-error-utils_1") /*id: 655368*/;
  var suiteIconAnalytics = require("suite-icon-analytics") /*id: 318832*/;
  function _() {
    componentBizTeaCollector.collectComponentBizEvent(a.CCM_DOCS_EMOJI_CHOOSE_PANEL_VIEW);
  }
  function f(e, t = {}) {
    componentBizTeaCollector.collectComponentBizEvent(a.CCM_DOCS_EMOJI_CHOOSE_PANEL_CLICK, Object.assign({
      click: e
    }, t));
  }
  function p(e = 0) {
    suiteIconAnalytics.collectIconEvent({
      action: suiteIconAnalytics.IconEventTypes.UPDATE_ICON,
      status: componentErrorUtils_1.StatusCodes.SUCCESS,
      statusCode: 200,
      code: e
    });
  }
  function m(e, t = "") {
    suiteIconAnalytics.collectIconEvent(Object.assign({
      action: suiteIconAnalytics.IconEventTypes.UPDATE_ICON
    }, componentErrorUtils_1.createErrorInfo(e, t)));
  }
  (o = a ||= {}).CCM_DOCS_EMOJI_CHOOSE_PANEL_VIEW = "ccm_docs_emoji_choose_panel_view";
  o.CCM_DOCS_EMOJI_CHOOSE_PANEL_CLICK = "ccm_docs_emoji_choose_panel_click";
  (r = c ||= {}).EMOJI = "emoji";
  r.EMOJI_TAB = "emoji_tab";
  r.ICON_TAB = "icon_tab";
  r.REMOVE_EMOJI = "remove_emoji";
  (i = u ||= {}).icon = "icon";
  i.recover = "recover";
  i.color = "color";
  i.save = "save";
  require.d(exports, {
    IconActionTypes: function () {
      return u;
    },
    trackIconSuccess: function () {
      return p;
    },
    EmojiTabTypes: function () {
      return c;
    },
    trackIconError: function () {
      return m;
    },
    trackEmojiPanelView: function () {
      return _;
    },
    trackEmojiPanelClick: function () {
      return f;
    }
  });
}