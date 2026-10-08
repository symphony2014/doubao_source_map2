// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'BP' to 'isRevisionCardEnabled'
// - Renamed export 'CN' to 'isMobileRevisionEnabled'
// - Renamed export 'Gy' to 'isMobileRevisionCardEnabled'
// - Renamed export 'LT' to 'isRevisionSwitchEnabled'
// - Renamed export 'gl' to 'isRevisionEnabled'
// - Renamed export 'tC' to 'isRevisionCardForceEnabled'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 964037
         */
module.exports = function (module, exports, require) {
  var docxConfigManager = require("docx-config-manager") /*id: 981333*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var offlineStatusSelectorsUtils = require("offline-status-selectors-utils") /*id: 564613*/;
  var userEnvironmentUtils = require("user-environment-utils") /*id: 107339*/;
  var boolDefaultGetterUtil = require("bool-default-getter-util") /*id: 855627*/;
  var syncUrlBlockUtils = require("sync-url-block-utils") /*id: 299195*/;
  let s = () => boolDefaultGetterUtil.getDefaultBool("ccm.docx.all.revision_switch_enable", false) && !docxConfigManager.docxConfigManager.isEmbedDocx;
  let d = () => {
    let {
      isPcTemplate: e,
      isLarkFeed: n,
      isInVC: r,
      isOpendoc: o,
      isAnnouncement: u,
      isMeetingNote: d
    } = browserEnvironmentDetectionUtils.browserDetector;
    return (e || n && !d && !u) && s() && !r && !o && !userEnvironmentUtils.isAnonymousAccess() && !syncUrlBlockUtils.isSyncingActive() && (!offlineStatusSelectorsUtils.isWindowOffline() || !offlineStatusSelectorsUtils.isDocxOfflineDisabled());
  };
  let f = () => browserEnvironmentDetectionUtils.browserDetector.isMobile && boolDefaultGetterUtil.getDefaultBool("ccm.docx.mobile.mobile_revision_switch_enable", false);
  let h = () => boolDefaultGetterUtil.getDefaultBool("ccm.docx.all.mobile_revision_card_enable", false);
  let _ = () => browserEnvironmentDetectionUtils.browserDetector.isFeishuRooms || boolDefaultGetterUtil.getDefaultBool("ccm.docx.all.revision_card_enable", true);
  let p = () => boolDefaultGetterUtil.getDefaultBool("ccm.docx.all.block_format_revision_enable", false);
  let g = () => browserEnvironmentDetectionUtils.browserDetector.isFeishuRooms || boolDefaultGetterUtil.getDefaultBool("ccm.all.revision.check_revision_optimization", false);
  require.d(exports, {
    isRevisionCardEnabled: function () {
      return p;
    },
    isMobileRevisionEnabled: function () {
      return f;
    },
    isMobileRevisionCardEnabled: function () {
      return d;
    },
    isRevisionSwitchEnabled: function () {
      return _;
    },
    isRevisionEnabled: function () {
      return g;
    },
    isRevisionCardForceEnabled: function () {
      return h;
    }
  });
}