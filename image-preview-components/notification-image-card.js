// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'I' to 'NotificationCard'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 23478.18df2811.js
         * chunkId: 23478
         * moduleId: 304870
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var semiImageComponent = require("semi-image-component") /*id: 87078*/;
  var rtlCloseIcon = require("rtl-close-icon") /*id: 851909*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let d = e => {
    let {
      title: t,
      wrapperClassName: i,
      imageUrl: a,
      description: d,
      footerNode: h,
      customNode: c,
      onClose: u,
      imageClass: p,
      descriptionClassName: m
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: o("flex flex-col justify-center items-center gap-8 w-280 p-[var(--s-radius-m,16px)] rounded-s-radius-s bg-[var(--s-color-bg-float)]", i),
      children: [c, reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "flex items-center gap-8 self-stretch",
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: "s-font-small-em text-s-color-text-secondary line-clamp-1 grow",
          children: t
        }), u ? reactJsxRuntimeCoreReexport.jsx("div", {
          className: "flex justify-center items-center w-22 h-22 hover:rounded-s-radius-xxss hover:bg-[var(--s-color-bg-trans,rgba(0,0,0,0.04))]",
          children: reactJsxRuntimeCoreReexport.jsx(rtlCloseIcon.RtlCloseIcon, {
            className: "text-14 cursor-pointer text-s-color-text-quaternary",
            onClick: u,
            "data-testid": "notification-popover-content-close-icon"
          })
        }) : null]
      }), reactJsxRuntimeCoreReexport.jsx(semiImageComponent.SemiImage, {
        src: xssContentSanitizer.sanitizeUrl(a, null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*x1$m5waFZ6$nNZek5OZEZre%9-%mpSemwx$2xjM%1HTj$PWHBq-l%xMlkwaFdl$nB%T1hWa%0xSndXbTFz-WxsW$$uQmlNalIwWTBjNWQySXpXbXhq-$R*c$lqSTFNRnB-TlRCT%1teDFXa2RXTk$4d$$uc*xSMFo1$2pO$2$nPT0"
        }),
        preview: false,
        width: 248,
        className: o("!rounded-s-radius-xs min-h-160 h-full", p)
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: o("s-font-xs text-s-color-text-tertiary", m),
        children: d
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: "mt-8 w-full",
        children: h
      })]
    });
  };
  require.d(exports, {
    NotificationCard: function () {
      return d;
    }
  });
}