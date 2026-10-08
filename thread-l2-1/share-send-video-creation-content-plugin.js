// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'sendVideoCreationSymbol'
// - Resolved require(232332) to 'send-video-creation-symbol'
// - Renamed variable 'l' to 'xssContentSanitizer'
// - Resolved require(508971) to 'xss-content-sanitizer'
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'o' to 'deepEqualUtil_1'
// - Resolved require(702050) to 'deep-equal-util_1'
// - Renamed variable 'a' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'c' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'd' to 'fileUrlRefreshHook'
// - Resolved require(875965) to 'file-url-refresh-hook'
// - Renamed variable 'u' to 'messageContentUtils'
// - Resolved require(976464) to 'message-content-utils'
// - Renamed variable 'p' to 'skillMessageBoxDataExtractor'
// - Resolved require(179396) to 'skill-message-box-data-extractor'
// - Renamed variable 'm' to 'imageBoxGridComponent'
// - Resolved require(750824) to 'image-box-grid-component'
// - Renamed variable 'v' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'f' to 'messagingConstants'
// - Resolved require(292449) to 'messaging-constants'
// - Renamed variable 'h' to 'safeJsonUtils'
// - Resolved require(384606) to 'safe-json-utils'
// - Renamed variable 'g' to 'reactUseChangedRef'
// - Resolved require(284850) to 'react-use-changed-ref'
// - Renamed variable '_' to 'alertCircleRtlIcon'
// - Resolved require(397758) to 'alert-circle-rtl-icon'
// - Renamed variable 'b' to 'cssClassNameMapping'
// - Resolved require(891700) to 'css-class-name-mapping'
// - Renamed variable 'k' to 'skillMessageBoxRenderer'
// - Resolved require(173602) to 'skill-message-box-renderer'
// - Renamed variable 'y' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'R' to 'safeParse' (module 384606)
// - Updated imported property 'm9' to 'reviewState' (module 292449)
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'D' to 'useChangedRef' (module 284850)
// - Updated imported property 'A' to 'extractSkillBoxData' (module 179396)
// - Updated imported property 'UD' to 'formatMessage' (module 976464)
// - Updated imported property 'Z' to 'deepEqual' (module 702050)
// - Updated imported property 'T' to 'useRefreshedFileUrls' (module 875965)
// - Updated imported property 'Z' to 'classNameMapping' (module 891700)
// - Updated imported property 'Z' to 'AlertCircleIcon' (module 397758)
// - Updated imported property 'C' to 'sanitizeUrl' (module 508971)
// - Updated imported property 'E' to 'ImageBoxGrid' (module 750824)
// - Updated imported property 'KD' to 'skillMessageContent' (module 173602)
// - Updated imported property 'x' to 'sendVideoContent' (module 232332)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 573561
         */
module.exports = function (module, exports, require) {
  var sendVideoCreationSymbol = require("send-video-creation-symbol") /*id: 232332*/;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var s = classnamesUtils;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var fileUrlRefreshHook = require("file-url-refresh-hook") /*id: 875965*/;
  var messageContentUtils = require("message-content-utils") /*id: 976464*/;
  var skillMessageBoxDataExtractor = require("skill-message-box-data-extractor") /*id: 179396*/;
  var imageBoxGridComponent = require("image-box-grid-component") /*id: 750824*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var messagingConstants = require("messaging-constants") /*id: 292449*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var reactUseChangedRef = require("react-use-changed-ref") /*id: 284850*/;
  var alertCircleRtlIcon = require("alert-circle-rtl-icon") /*id: 397758*/;
  var cssClassNameMapping = require("css-class-name-mapping") /*id: 891700*/;
  var skillMessageBoxRenderer = require("skill-message-box-renderer") /*id: 173602*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let x = e => {
    let {
      message: a
    } = e;
    let x = [];
    let w = safeJsonUtils.safeParse(a == null ? undefined : a.ext?.samantha_context, {});
    let S = (w == null ? undefined : w.query_context) ?? {};
    if (messageContentTypeAndStatusChecker.EkH(a) && (a == null ? undefined : a.content_obj)) {
      let e = a.attachments;
      if (e) {
        x = e.map(e => {
          var i;
          return {
            url: e.url || "",
            refer_types: e.extra?.refer_types || "",
            review_state: (S == null ? undefined : (i = S.ref_images) === null || i === undefined ? undefined : i[0]?.review_status) || (e == null ? undefined : e.file_review_state) || messagingConstants.reviewState.ReviewState_Processing
          };
        });
      }
    }
    let R = i18nTranslationUtils.useTranslationWithFallback();
    let {
      skillTagArr: $,
      messageTextContent: C
    } = reactUseChangedRef.useChangedRef((() => {
      if (!a) {
        return null;
      }
      let e = skillMessageBoxDataExtractor.extractSkillBoxData(a);
      let t = [e == null ? undefined : e.template, e == null ? undefined : e.tone, e == null ? undefined : e.length, e == null ? undefined : e.language, e == null ? undefined : e.style];
      let n = messageContentUtils.formatMessage(a, false, R("chat_unsupported_message_type"));
      let i = R("skill_video_message_prefix");
      return {
        skillData: e,
        skillTagArr: t,
        messageTextContent: n = (n == null ? undefined : n.includes(i)) ? n : `${i}${n ? "：" : ""}${n}`
      };
    })(), deepEqualUtil_1.deepEqual) ?? {};
    let T = reactCoreLibraryReexport.useMemo(() => (x == null ? undefined : x.map(e => e.url || "")) || [], [x]);
    let {
      latestFileUrls: j
    } = fileUrlRefreshHook.useRefreshedFileUrls({
      fileUrls: T
    });
    let N = x && x.length > 1;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "flex flex-col items-end",
      children: [x && x.length === 1 && reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
        children: x[0].review_state === messagingConstants.reviewState.ReviewState_NotCompliant ? reactJsxRuntimeCoreReexport.jsxs("div", {
          className: cssClassNameMapping.classNameMapping["ref-img-not-safety"],
          children: [reactJsxRuntimeCoreReexport.jsx(alertCircleRtlIcon.AlertCircleIcon, {
            className: "p-4 text-24 text-s-color-text-quaternary"
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: cssClassNameMapping.classNameMapping["not-safety-text"],
            children: R("msg_error_image_notCompliant")
          })]
        }) : reactJsxRuntimeCoreReexport.jsx("img", {
          src: xssContentSanitizer.sanitizeUrl(j[0], null, {
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBX$Epv-%dSRE1Xb*hXRzkwWkcxc2ExcFhPSFpqTTBwc$RESktjR1ZwT$dwa%1qRjNZakkx-kdKd$$ucE1NMD$zWW0x%mRH%nRiR3Rh$npoMFl6SjBjR0pIZDNSa$-xWjZZekpH-mxw$E1Xc*lNal$3$2xjM%1Fd3p%bTla$0$wc1RHN$Nlb$ZI%m5s-%0xWj-"
          }),
          className: cssClassNameMapping.classNameMapping["ref-single-image"]
        }, x[0].url)
      }), N && reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "flex flex-col items-end",
        children: [reactJsxRuntimeCoreReexport.jsx(imageBoxGridComponent.ImageBoxGrid, {
          gridColumns: Math.min(x.length, 3),
          imgList: j,
          className: "mb-8 w-auto!",
          children: (e, t) => reactJsxRuntimeCoreReexport.jsx("div", {
            children: x[t].review_state === messagingConstants.reviewState.ReviewState_NotCompliant ? reactJsxRuntimeCoreReexport.jsxs("div", {
              className: s([cssClassNameMapping.classNameMapping["ref-img-not-safety"], cssClassNameMapping.classNameMapping["is-multiple"]]),
              children: [reactJsxRuntimeCoreReexport.jsx(alertCircleRtlIcon.AlertCircleIcon, {
                className: "p-4 text-24 text-s-color-text-quaternary"
              }), reactJsxRuntimeCoreReexport.jsx("div", {
                className: cssClassNameMapping.classNameMapping["not-safety-text"],
                children: R("msg_error_image_notCompliant")
              })]
            }) : reactJsxRuntimeCoreReexport.jsx("img", {
              src: xssContentSanitizer.sanitizeUrl(j[t], null, {
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
                filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBX$Epv-%dSRE1Xb*hXRzkwWkcxc2ExcFhPSFpqTTBwc$RESktjR1ZwT$dwa%1qRjNZakkx-kdKd$$ucE1NMD$zWW0x%mRH%nRiR3Rh$npoMFl6SjBjR0pIZDNSa$-xWjZZekpH-mxw$E1Xc*lNal$3$2xjM%1Fd3p%bTla$0$wc1RHN$Nlb$ZI%m5s-%0xWj-"
              }),
              className: cssClassNameMapping.classNameMapping["ref-multi-image"]
            }, x[t].url)
          }, e)
        }), reactJsxRuntimeCoreReexport.jsx(skillMessageBoxRenderer.skillMessageContent, {
          skillTagArr: $,
          isNarrow: false,
          content: C ?? ""
        })]
      }), !N && reactJsxRuntimeCoreReexport.jsx(skillMessageBoxRenderer.skillMessageContent, {
        skillTagArr: $,
        isNarrow: false,
        content: C ?? ""
      })]
    });
  };
  function w(e, t, n) {
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
  class S {
    constructor() {
      w(this, "Content", x);
      w(this, "pluginIdentifier", sendVideoCreationSymbol.sendVideoContent);
    }
  }
  require.r(exports);
  require.d(exports, {
    ShareSendVideoCreationContentPlugin: function () {
      return S;
    }
  });
}