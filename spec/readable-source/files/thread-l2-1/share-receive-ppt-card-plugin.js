// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatPptCardSymbol'
// - Resolved require(774446) to 'chat-ppt-card-symbol'
// - Renamed variable 'l' to 'xssContentSanitizer'
// - Resolved require(508971) to 'xss-content-sanitizer'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'r' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'o' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'a' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 's' to 'samanthaToastFactory'
// - Resolved require(697541) to 'samantha-toast-factory'
// - Renamed variable 'c' to 'rtlChatSparkleIcon'
// - Resolved require(944755) to 'rtl-chat-sparkle-icon'
// - Renamed variable 'd' to 'pptCardStyles'
// - Resolved require(149738) to 'ppt-card-styles'
// - Renamed variable 'u' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'Z' to 'pptCardStyles' (module 149738)
// - Updated imported property 'pJ' to 'toastInstance' (module 697541)
// - Updated imported property 'C' to 'sanitizeUrl' (module 508971)
// - Updated imported property 'Z' to 'RtlChatSparkleIcon' (module 944755)
// - Updated imported property 'W' to 'receivePptCardId' (module 774446)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 884734
         */
module.exports = function (module, exports, require) {
  var chatPptCardSymbol = require("chat-ppt-card-symbol") /*id: 774446*/;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  require("react-core-library-reexport") /*id: 634663*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var samanthaToastFactory = require("samantha-toast-factory") /*id: 697541*/;
  var rtlChatSparkleIcon = require("rtl-chat-sparkle-icon") /*id: 944755*/;
  var pptCardStyles = require("ppt-card-styles") /*id: 149738*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let p = e => {
    let {
      message: m
    } = e;
    let v = i18nTranslationUtils.useTranslationWithFallback();
    if (!messageContentTypeAndStatusChecker.C3X(m)) {
      return null;
    }
    let f = m == null ? undefined : m.content_obj?.status;
    let h = f === chatAppEnums.AiPPTDetailStatusEnum.Success;
    let g = f === chatAppEnums.AiPPTDetailStatusEnum.Error || f === chatAppEnums.AiPPTDetailStatusEnum.Cancel;
    let _ = f === chatAppEnums.AiPPTDetailStatusEnum.Delete;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: pptCardStyles.pptCardStyles["ppt-card-container"],
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: pptCardStyles.pptCardStyles.intro,
        children: v("skill_aippt_pptCard_leading_content")
      }), reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
        children: (h || _) && reactJsxRuntimeCoreReexport.jsxs("div", {
          className: pptCardStyles.pptCardStyles["ppt-card"],
          onClick: () => {
            if (_) {
              samanthaToastFactory.toastInstance.error({
                content: v("skill_aippt_pptCard_status_deleted_click_toast"),
                showClose: false,
                theme: "light"
              });
              return;
            }
            window.open(xssContentSanitizer.sanitizeUrl(m == null ? undefined : m.content_obj?.share_url, null, {
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
              filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBX$Epv-%dSRE1Xb*hXRzkwWTBoQ01Fd3p%bmxaZ$RscFlWaHZkRmt5T1hSalJ6bDFXb*MxT%$3elNteFpNbFp3Wkcx$mRHTklRakJN$jA1MlltN$NiR0p1$$haak1ta*9ZMjFWZFdSS$Rq%lpXRXB1WkZoTlBRPT0"
            }));
          },
          children: [reactJsxRuntimeCoreReexport.jsxs("div", {
            className: pptCardStyles.pptCardStyles.top,
            children: [reactJsxRuntimeCoreReexport.jsx(rtlChatSparkleIcon.RtlChatSparkleIcon, {
              className: "text-18"
            }), reactJsxRuntimeCoreReexport.jsx("div", {
              className: pptCardStyles.pptCardStyles.title,
              children: m == null ? undefined : m.content_obj?.title
            })]
          }), reactJsxRuntimeCoreReexport.jsx("img", {
            className: pptCardStyles.pptCardStyles.img,
            src: xssContentSanitizer.sanitizeUrl(m == null ? undefined : m.content_obj?.cover_url, null, {
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
              filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBX$Epv-%dSRE1Xb*hXRzkwWTBoQ01Fd3p%bmxaZ$RscFlWaHZkRmt5T1hSalJ6bDFXb*MxT%$3elNteFpNbFp3Wkcx$mRHTklRakJN$jA1MlltN$NiR0p1$$haak1ta*9ZMjFWZFdSS$Rq%lpXRXB1WkZoTlBRPT0"
            })
          })]
        })
      }), reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
        children: g && reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
          children: [reactJsxRuntimeCoreReexport.jsxs("div", {
            className: pptCardStyles.pptCardStyles.failed,
            children: [reactJsxRuntimeCoreReexport.jsx(rtlChatSparkleIcon.RtlChatSparkleIcon, {
              className: "text-18 text-s-color-text-disable"
            }), reactJsxRuntimeCoreReexport.jsx("div", {
              className: pptCardStyles.pptCardStyles["failed-text"],
              children: m == null ? undefined : m.content_obj?.title
            })]
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: pptCardStyles.pptCardStyles["error-text"],
            children: v("skill_aippt_pptCard_status_generation_failed")
          })]
        })
      })]
    });
  };
  function m(e, t, n) {
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
  class v {
    constructor() {
      m(this, "pluginIdentifier", chatPptCardSymbol.receivePptCardId);
      m(this, "Content", p);
    }
  }
  require.r(exports);
  require.d(exports, {
    ShareReceivePPTCardPlugin: function () {
      return v;
    }
  });
}