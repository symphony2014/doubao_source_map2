// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'xssContentSanitizer'
// - Resolved require(508971) to 'xss-content-sanitizer'
// - Renamed variable 'o' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 's' to 'receiveMessageBoxStatus'
// - Resolved require(682494) to 'receive-message-box-status'
// - Renamed variable 'a' to 'chatTooltipWrapper'
// - Resolved require(355361) to 'chat-tooltip-wrapper'
// - Renamed variable 'l' to 'useMergedContextHook'
// - Resolved require(203934) to 'use-merged-context-hook'
// - Renamed variable 'h' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'c' to 'reactTooltipComponent'
// - Resolved require(228812) to 'react-tooltip-component'
// - Renamed variable 'u' to 'semiProgressComponent'
// - Resolved require(821198) to 'semi-progress-component'
// - Renamed variable 'p' to 'alertCircleRtlIcon'
// - Resolved require(397758) to 'alert-circle-rtl-icon'
// - Renamed variable 'm' to 'closeRtlIconComponent'
// - Resolved require(513666) to 'close-rtl-icon-component'
// - Renamed variable 'g' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'y' to 'samanthaImagePreviewGallery'
// - Resolved require(927160) to 'samantha-image-preview-gallery'
// - Renamed variable '$' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'T' to 'infraUtilFunctions'
// - Resolved require(385226) to 'infra-util-functions'
// - Renamed variable 'E' to 'mdBoxLazyComponentsModule'
// - Resolved require(857296) to 'md-box-lazy-components-module'
// - Updated imported property 'Z' to 'CloseRtlIcon' (module 513666)
// - Updated imported property 'Z' to 'TooltipComponent' (module 228812)
// - Updated imported property 'C' to 'sanitizeUrl' (module 508971)
// - Updated imported property 'Z' to 'Progress' (module 821198)
// - Updated imported property 'Z' to 'AlertCircleIcon' (module 397758)
// - Updated imported property 'O' to 'messageBoxStatus' (module 682494)
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 't' to 'ChatTooltip' (module 355361)
// - Updated imported property 'x$' to 'useMergedContext' (module 203934)
// - Updated imported property 'k7' to 'lazyImageComponent' (module 857296)
// - Updated imported property 'Av' to 'isDefined' (module 385226)
// - Updated imported property 'h' to 'ImagePreviewGallery' (module 927160)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat-input-attachment-image-area.f8b391c1.js
         * chunkId: 60410
         * moduleId: 690985
         */
module.exports = function (module, exports, require) {
  var n;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var receiveMessageBoxStatus = require("receive-message-box-status") /*id: 682494*/;
  var chatTooltipWrapper = require("chat-tooltip-wrapper") /*id: 355361*/;
  var useMergedContextHook = require("use-merged-context-hook") /*id: 203934*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var d = classnamesUtils;
  var reactTooltipComponent = require("react-tooltip-component") /*id: 228812*/;
  var semiProgressComponent = require("semi-progress-component") /*id: 821198*/;
  var alertCircleRtlIcon = require("alert-circle-rtl-icon") /*id: 397758*/;
  var closeRtlIconComponent = require("close-rtl-icon-component") /*id: 513666*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function f(e) {
    let {
      className: t,
      onClick: i
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: d("container-YEkRod", t),
      onClick: i,
      children: reactJsxRuntimeCoreReexport.jsx(closeRtlIconComponent.CloseRtlIcon, {
        className: "icon-pRUcfR"
      })
    });
  }
  var b = {
    container: "container-A6iRE0",
    "content-wrapper": "content-wrapper-RtCN8S",
    "image-container": "image-container-rwRHYU",
    "loading-overlay": "loading-overlay-eK5bop",
    "error-overlay": "error-overlay-cWDksr",
    "progress-text": "progress-text-w08aWP",
    "error-icon": "error-icon-hvyNSQ",
    "delete-btn": "delete-btn-tqMY9m",
    "auto-hide": "auto-hide-Yo3Juw"
  };
  (n = {}).Success = "Success";
  n.Loading = "Loading";
  n.Failed = "Failed";
  let v = n;
  function w(e) {
    let {
      url: t,
      status: i = v.Success,
      progressPercent: n = 100,
      errorTooltipText: s = "Click to try again",
      containerClassName: a,
      injectedComponents: l,
      showDeleteAlways: h = false,
      onClickRetry: m,
      onClickImage: w,
      onClickDeleteBtn: y,
      renderImageNode: $
    } = e;
    let {
      Tooltip: T = reactTooltipComponent.TooltipComponent
    } = l || {};
    let E = i === v.Loading;
    let _ = i === v.Failed;
    let S = Math.floor(n);
    let x = reactCoreLibraryReexport.useMemo(() => reactJsxRuntimeCoreReexport.jsx("span", {
      className: b["progress-text"],
      children: `${S}%`
    }), [S]);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: d(b.container, a),
      children: [reactJsxRuntimeCoreReexport.jsxs("div", {
        className: b["content-wrapper"],
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: b["image-container"],
          onClick: () => w == null ? undefined : w(t),
          children: $ ? $(t) : reactJsxRuntimeCoreReexport.jsx("img", {
            src: xssContentSanitizer.sanitizeUrl(t, null, {
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
              filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$J-%lJXRXBxW$$NNWFX%ll%bkJp-lZaNlkzaz$lb*x-T$doaWJsSnZX$k14T$d*$E1Xd*FXR%o1$2xkT2FH%khWbXRNTTA1N$d-az$hb%l5T$hka%1q$nNZbT$TZWt3e$duTmlNMk4w$1RKb2FH%kRNWEJp-mtJeFpFTT$hR1JJ$W1oWk1taDBXb*MxT%$4W*JI%lpWMlJz$EZkS2Rt$kRPWEJp-lZKc1p$TTFNR016-%doamJX%XhZM2M5%FE9PQ"
            }),
            alt: "image"
          })
        }), E && reactJsxRuntimeCoreReexport.jsx("div", {
          className: b["loading-overlay"],
          children: reactJsxRuntimeCoreReexport.jsx(semiProgressComponent.Progress, {
            percent: S,
            width: 40,
            strokeWidth: 2,
            showInfo: true,
            format: () => x,
            orbitStroke: "var(--s-color-text-invert-tertiary, rgba(255, 255, 255, 0.55))",
            stroke: "var(--s-color-text-invert-primary, #fff)",
            type: "circle",
            "aria-label": "upload progress percent"
          })
        }), _ && reactJsxRuntimeCoreReexport.jsx(T, {
          content: s,
          children: reactJsxRuntimeCoreReexport.jsx("div", {
            className: b["error-overlay"],
            onClick: () => {
              if (m != null) {
                m();
              }
            },
            children: reactJsxRuntimeCoreReexport.jsx(alertCircleRtlIcon.AlertCircleIcon, {
              className: b["error-icon"]
            })
          })
        })]
      }), reactJsxRuntimeCoreReexport.jsx(f, {
        className: d(b["delete-btn"], !h && b["auto-hide"]),
        onClick: y
      })]
    });
  }
  var samanthaImagePreviewGallery = require("samantha-image-preview-gallery") /*id: 927160*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var infraUtilFunctions = require("infra-util-functions") /*id: 385226*/;
  var mdBoxLazyComponentsModule = require("md-box-lazy-components-module") /*id: 857296*/;
  let _ = {
    [receiveMessageBoxStatus.messageBoxStatus.Normal]: v.Success,
    [receiveMessageBoxStatus.messageBoxStatus.Retry]: v.Failed,
    [receiveMessageBoxStatus.messageBoxStatus.Uploading]: v.Loading
  };
  function S(e) {
    let {
      attachmentStates: t,
      renderAttachmentImageBox: i,
      renderImageNode: n,
      onClickImage: s,
      onRetryAttachment: h,
      onDeleteAttachment: d
    } = e;
    let c = i18nTranslationUtils.useTranslationWithFallback();
    let [u, p] = reactCoreLibraryReexport.useState(false);
    let [m, f] = reactCoreLibraryReexport.useState(0);
    let {
      Tooltip: b = chatTooltipWrapper.ChatTooltip
    } = useMergedContextHook.useMergedContext();
    let v = i ?? (e => reactJsxRuntimeCoreReexport.jsx(w, {
      ...e
    }));
    let S = n ?? (e => reactJsxRuntimeCoreReexport.jsx(mdBoxLazyComponentsModule.lazyImageComponent, {
      src: xssContentSanitizer.sanitizeUrl(e, null, {
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
        filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$N-%lJNamw1$2xNNWFtRkhSakJNTW5od1dXa3hhb%ZI%mpCT$-yeDFZM*hXT%$3elRubFpl$*xwW$ZodmR*a3lPWFJq%npsM$ds-zFNR041T1doa1N*Sm9X$EpvZEZwWE5%Qk1WMFo1$2xkRmRsa3lPWFJq%npsM$ds-zFNR041T1doa1N*Sm9X$EpvZEZwWE5%Qk1WMngw$1Zka2JFeFhSbmxh$jBWMllW-zFhMXBZWjNWa1NFNDBX$mhL-m1SW$R%MD0"
      }),
      imageOptions: {
        squareContainer: true,
        objectFit: "cover",
        draggable: false,
        width: 54,
        height: 54
      },
      errorClassName: "bg-[var(--neutral-transparent-2)]"
    }, e));
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "flex gap-8 flex-wrap",
      children: [t.map((e, t) => {
        var n;
        var r;
        return reactJsxRuntimeCoreReexport.jsx(reactCoreLibraryReexport.Fragment, {
          children: v({
            url: ((r = e.imageList) === null || r === undefined ? undefined : (n = r[0]) === null || n === undefined ? undefined : n.image_ori?.url) || "",
            status: _[e.status],
            progressPercent: e.uploadPercent,
            errorTooltipText: c("files_parse_click_retry"),
            injectedComponents: {
              Tooltip: b
            },
            onClickImage: s || (() => {
              p(true);
              f(t);
            }),
            onClickRetry: () => {
              h(t);
            },
            onClickDeleteBtn: e => {
              d(t);
              e.stopPropagation();
            },
            renderImageNode: S
          })
        }, e.localKey);
      }).filter(infraUtilFunctions.isDefined), reactJsxRuntimeCoreReexport.jsx(samanthaImagePreviewGallery.ImagePreviewGallery, {
        visible: u,
        onVisibleChange: p,
        src: xssContentSanitizer.sanitizeUrl(t.map(e => {
          var i;
          var n;
          if ((n = e.imageList) === null || n === undefined) {
            return undefined;
          } else if ((i = n[0]) === null || i === undefined) {
            return undefined;
          } else {
            return i.image_ori?.url;
          }
        }).filter(infraUtilFunctions.isDefined), null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$N-%lJNamw1$2xNNWFtRkhSakJNTW5od1dXa3hhb%ZI%mpCT$-yeDFZM*hXT%$3elRubFpl$*xwW$ZodmR*a3lPWFJq%npsM$ds-zFNR041T1doa1N*Sm9X$EpvZEZwWE5%Qk1WMFo1$2xkRmRsa3lPWFJq%npsM$ds-zFNR041T1doa1N*Sm9X$EpvZEZwWE5%Qk1WMngw$1Zka2JFeFhSbmxh$jBWMllW-zFhMXBZWjNWa1NFNDBX$mhL-m1SW$R%MD0"
        }),
        currentIndex: m,
        onChange: f
      })]
    });
  }
  require.r(exports);
  require.d(exports, {
    AttachmentImageArea: function () {
      return S;
    }
  });
}