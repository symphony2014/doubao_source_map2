// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'd' to 'renderAgreementText'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 50418.2df2ac84.js
         * chunkId: 50418
         * moduleId: 134341
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var textFormatterComponent = require("text-formatter-component") /*id: 532796*/;
  var agreementModalCssClasses = require("agreement-modal-css-classes") /*id: 621711*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let _ = e => {
    let {
      className: n,
      replaceTextClassName: i,
      brandName: o,
      privacyPolicyLink: _,
      termsOfServiceLink: u,
      accountTermsOfServiceLink: h
    } = e;
    let m = {
      terms_of_service: {
        eventName: "click_login_home_protocol",
        url: u
      },
      privacy_policy: {
        eventName: "click_login_home_privacy",
        url: _
      },
      account_terms_of_service: {
        eventName: "click_login_home_account_term",
        url: h
      }
    };
    return reactJsxRuntimeCoreReexport.jsx(textFormatterComponent.textFormatter, {
      style: {
        width: "auto"
      },
      text: i18nTranslationUtils.i18nextTranslate("log_in_page_confirm_note_new_web", {
        postProcess: "sprintf",
        sprintf: [o]
      }),
      replacingMap: {
        terms_of_service: i18nTranslationUtils.i18nextTranslate("term_of_use"),
        privacy_policy: i18nTranslationUtils.i18nextTranslate("privacy_policy"),
        account_terms_of_service: i18nTranslationUtils.i18nextTranslate("account_terms_of_service_web", {
          brandName: o
        })
      },
      className: n ?? agreementModalCssClasses.agreementModalClasses.agreement,
      replaceTextClassName: a(i, agreementModalCssClasses.agreementModalClasses["agreement-link"], "login-modal-agreement-link"),
      onTextClick: (e, n) => {
        let {
          key: i
        } = e;
        if (!i) {
          return;
        }
        n.stopPropagation();
        let {
          eventName: o,
          url: a
        } = m[i];
        teaAnalyticsEventTracker.trackEvent(o);
        window.open(xssContentSanitizer.sanitizeUrl(a, null, {
          logType: "js.window.location",
          reportOnly: "false",
          blackConfig: "{}",
          configMode: "merge",
          isCloseSSRReport: false,
          bid: "flow_web",
          region: "cn",
          urlLimit: "-1",
          htmlLimit: "-1",
          isSaveValidUrl: false,
          isRuntimeLog: false,
          isDOMParser: true,
          escapeRule: "escape-report",
          reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
          scmBranch: "release_train_samantha_2026-03-09_1120843696898",
          scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
          scmVersion: "1.0.4.168",
          webpackPluginVersion: "3.4.5",
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*x-$*1wa%0xWjFaR%01ZW1OdFR-Wlpi$3cy$EZkT2RtSllRblpp-lZaM$pFaE5kb*x-Wkhs-$-xWjBXb*MxT%$3elFqRmpi$l-xWk$oT05*bFlTbT$r$0%wOQ"
        }));
      }
    });
  };
  require.d(exports, {
    renderAgreementText: function () {
      return _;
    }
  });
}