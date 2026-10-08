// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Q' to 'ThreadImageItem'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 367969
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var r = classnamesUtils;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var messagingConstants = require("messaging-constants") /*id: 292449*/;
  var alertCircleRtlIcon = require("alert-circle-rtl-icon") /*id: 397758*/;
  var threadMessageStyles = require("thread-message-styles") /*id: 717766*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let u = e => {
    let {
      className: t,
      url: n,
      reviewState: l,
      isMultiple: u,
      onMouseEnter: p,
      onClick: m,
      ...v
    } = e;
    let f = i18nTranslationUtils.useTranslationWithFallback();
    if (l === messagingConstants.reviewState.ReviewState_NotCompliant) {
      return reactJsxRuntimeCoreReexport.jsxs("div", {
        className: r(t, threadMessageStyles.threadClasses["ref-img-not-safety"], u ? threadMessageStyles.threadClasses["is-multiple"] : undefined),
        children: [reactJsxRuntimeCoreReexport.jsx(alertCircleRtlIcon.AlertCircleIcon, {
          className: "text-32 text-s-color-text-quaternary"
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: threadMessageStyles.threadClasses["not-safety-text"],
          children: f("msg_error_image_notCompliant")
        })]
      });
    } else if (u) {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: r(t, threadMessageStyles.threadClasses["ref-multi-image"]),
        style: {
          cursor: m ? "pointer" : undefined,
          backgroundImage: `url(${n})`
        },
        ...v,
        onMouseEnter: p,
        onClick: m
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx("img", {
        className: r(t, threadMessageStyles.threadClasses["ref-single-image"]),
        style: {
          cursor: m ? "pointer" : undefined
        },
        src: xssContentSanitizer.sanitizeUrl(n, null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*95$m5W-$dFcHdXW*t4ZEZwW$RucFpWMlJz$EROT2$WbD$PW*Rp%0Zad$lW-zFla3d5T$d4ak0wNW9XakpWZEZsdE9%%k1NMD$zWW0x%mRHSXllR3RN$0Zwb1kyMXNhRmx0Z%d4T$dFNXlZ$mQ0-zB4WFRuWmlibEpzWW01%mRsa3lPWFJq%npsM$ds-zFNR041T1hs-$-xbDBZ$mN4-%Zve$Z-%mpi$lox$2tk$2$$d3liSFZh%jFZMFRHN$Nlb$ZI%m5s-%0xWj-"
        }),
        ...v,
        onMouseEnter: p,
        onClick: m
      });
    }
  };
  require.d(exports, {
    ThreadImageItem: function () {
      return u;
    }
  });
}