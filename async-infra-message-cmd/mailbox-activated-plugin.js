// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'r' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'o' to 'modalDialogComponent'
// - Resolved require(903195) to 'modal-dialog-component'
// - Renamed variable 's' to 'infoCircleIconRtl'
// - Resolved require(30576) to 'info-circle-icon-rtl'
// - Renamed variable 'a' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'l' to 'mailboxActivatedPluginId'
// - Resolved require(389435) to 'mailbox-activated-plugin-id'
// - Renamed variable 'u' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'm' to 'mailboxActivatedId' (module 389435)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'Z' to 'Modal' (module 903195)
// - Updated imported property 'X9' to 'i18nextTranslate' (module 852399)
// - Updated imported property 'Z' to 'InfoCircleIcon' (module 30576)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-cmd.e5ad8e66.js
         * chunkId: 94882
         * moduleId: 161637
         */
module.exports = function (module, exports, require) {
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var modalDialogComponent = require("modal-dialog-component") /*id: 903195*/;
  var infoCircleIconRtl = require("info-circle-icon-rtl") /*id: 30576*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var mailboxActivatedPluginId = require("mailbox-activated-plugin-id") /*id: 389435*/;
  var c = {
    securityEncryptedNotifyModal: "security-encrypted-notify-modal-feZ4NG"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function d(e, t, n) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var i = n.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  class p {
    constructor() {
      d(this, "pluginIdentifier", mailboxActivatedPluginId.mailboxActivatedId);
      d(this, "handleCmd", e => {
        if (e.data.version === "1.0") {
          loggerServiceCore.defaultLogger.persist.info({
            message: "Cmd: MailboxActivated"
          });
          if (document.visibilityState === "visible") {
            modalDialogComponent.Modal.destroyAll();
            modalDialogComponent.Modal.info({
              className: c.securityEncryptedNotifyModal,
              title: i18nTranslationUtils.i18nextTranslate("settings_encryption_popupTitle_encryptionOn"),
              content: i18nTranslationUtils.i18nextTranslate("settings_encryption_popupDesc_encryptionOn"),
              okText: i18nTranslationUtils.i18nextTranslate("settings_encryption_popupBtn_ok"),
              centered: true,
              icon: reactJsxRuntimeCoreReexport.jsx(infoCircleIconRtl.InfoCircleIcon, {}),
              footerFill: true,
              closable: false,
              hasCancel: false,
              onOk: () => {
                modalDialogComponent.Modal.destroyAll();
                teaAnalyticsEventTracker.trackEvent("privacy_mode_popup_click");
              }
            });
            teaAnalyticsEventTracker.trackEvent("privacy_mode_popup_show");
          }
        }
      });
    }
  }
  require.r(exports);
  require.d(exports, {
    MailboxActivatedMessageCmdPlugin: function () {
      return p;
    }
  });
}