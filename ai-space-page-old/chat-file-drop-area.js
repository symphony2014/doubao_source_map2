// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'm' to 'FileDropArea'
// - Renamed export 'C' to 'DropAreaUI'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 12358.f77a465e.js
         * chunkId: 12358
         * moduleId: 92231
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  require("react-core-library-reexport") /*id: 634663*/;
  var chatRefsContext = require("chat-refs-context") /*id: 184894*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var fileTypeDetectionUtils = require("file-type-detection-utils") /*id: 393072*/;
  var s = require.p + "static/image/intro.12b8f8ef.png";
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let d = e => {
    let {
      children: t,
      containerRef: n
    } = e;
    let i = n.current;
    if (i === null) {
      return null;
    } else {
      return reactDomEntryWrapper.createPortal(t, i);
    }
  };
  let u = e => {
    let {
      onDrop: t,
      maxFileCount: n = 20,
      t: l,
      containerRef: o,
      allowedExtensions: a = fileTypeDetectionUtils.imageExtensions,
      desc: u,
      customStyleNode: p
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(d, {
      containerRef: o,
      children: reactJsxRuntimeCoreReexport.jsx("div", {
        className: "w-full h-full border-box flex items-center justify-center border-[0.5px] border-dashed border-[#0000004D] rounded-16 bg-[#FFFFFFcc]",
        style: {
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)"
        },
        onDrop: t,
        children: p || reactJsxRuntimeCoreReexport.jsxs("div", {
          className: "max-w-360 flex flex-col items-center",
          "data-testid": "file_drop_area",
          children: [reactJsxRuntimeCoreReexport.jsx("img", {
            src: xssContentSanitizer.sanitizeUrl(s, null, {
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
              filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$N-%lJNamw1$2xNNWFtRkhSakJNTTBKelp*Z*tjR0pwT$cxa%0xWjFXa2RHT%d*WE9-$k1WMD%yWWxoQ2RtSnRWblZr%0%xMll6Tktha3d5-khWalN*WXd%REph-0dKSFZ-%mFTRXAyWTBNe*FHTnRWbWhNTW14M$drZFdORXh1$W5wbFIwWj$Xak5XZWc9PQ"
            }),
            className: "w-140 h-120"
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: "mt-8 s-font-h2 text-[var(--s-color-text-static-black-primary)]",
            children: l("landing_creation_uploadfile")
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: "mt-4 s-font-small text-[var(--s-color-text-static-black-tertiary)] text-center",
            children: u || `${l("multifiles_exceed_limit", {
              postProcess: "sprintf",
              sprintf: [n]
            })}, ${l("multifiles_file_type", {
              postProcess: "sprintf",
              sprintf: [a.join(", ")]
            })}`
          })]
        })
      })
    });
  };
  function p(e) {
    let t = i18nTranslationUtils.useTranslationWithFallback();
    let {
      chatDropTargetRef: n
    } = chatRefsContext.useChatRefs();
    return reactJsxRuntimeCoreReexport.jsx(u, {
      ...e,
      t: t,
      containerRef: n
    });
  }
  require.d(exports, {
    FileDropArea: function () {
      return p;
    },
    DropAreaUI: function () {
      return u;
    }
  });
}