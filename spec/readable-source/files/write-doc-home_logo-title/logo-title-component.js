// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'xssContentSanitizer'
// - Resolved require(508971) to 'xss-content-sanitizer'
// - Renamed variable '_' to 'brandAvatarComponent'
// - Resolved require(951505) to 'brand-avatar-component'
// - Renamed variable 't' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'a' to 'semiTooltipWrapper'
// - Resolved require(905177) to 'semi-tooltip-wrapper'
// - Renamed variable 'l' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'C' to 'sanitizeUrl' (module 508971)
// - Updated imported property 's' to 'SemiTooltip' (module 905177)
// - Updated imported property 'O' to 'BrandAvatar' (module 951505)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: write-doc-home_logo-title.9ae826aa.js
         * chunkId: 89190
         * moduleId: 234291
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var brandAvatarComponent = require("brand-avatar-component") /*id: 951505*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var semiTooltipWrapper = require("semi-tooltip-wrapper") /*id: 905177*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let s = e => {
    let {
      onClick: i,
      showTooltip: o = true
    } = e;
    let s = i18nTranslationUtils.useTranslationWithFallback();
    let c = () => {
      if (i) {
        if (i != null) {
          i();
        }
        return;
      }
      location.href = xssContentSanitizer.sanitizeUrl(location.origin, null, {
        logType: "js.href/src",
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
        filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBX$Epv-%dSRE1Xb*hXRzkwWkROS2NH%khWWFpqTTBwc$RESktjR1ZwT$dwa%1qRjNZakkx-kdKd$$-WmtNMHB3Wk$k$mR*a3lhR2hr%Xp*dldsZEdhMXBZ%1haa$J6bH$Zbmt4T%d*W$$uTmF$emx3WW0x%2JH$kRO$EJqTTJob1kyMWtN$04z%FQwPQ"
      });
    };
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "logo-title-ZgOTZt",
      children: [o ? reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
        position: "bottom",
        content: s("doc_mainPage_doubaoDocs_tooltip"),
        trigger: "hover",
        children: reactJsxRuntimeCoreReexport.jsx(brandAvatarComponent.BrandAvatar, {
          size: 24,
          theme: "white-bg",
          onClick: c
        })
      }) : reactJsxRuntimeCoreReexport.jsx(brandAvatarComponent.BrandAvatar, {
        size: 24,
        theme: "white-bg",
        onClick: c
      }), reactJsxRuntimeCoreReexport.jsx("p", {
        className: "ml-8",
        children: s("doc_mainPage_doubaoDocs")
      })]
    });
  };
  require.d(exports, {
    LogoTitle: function () {
      return s;
    }
  });
}