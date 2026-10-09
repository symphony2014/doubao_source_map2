// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'V' to 'ThreadIconTitle'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 869438
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let s = reactCoreLibraryReexport.memo(e => {
    let {
      title: t,
      icon: n
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: o("flex w-fit items-center gap-5"),
      children: [n && reactJsxRuntimeCoreReexport.jsx("img", {
        className: "h-24 w-24",
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*95$m5W-$dFcHdXW*t4ZEZwW$RucFpWMlJz$EROT2$WbD$PW*Rp%0Zad$lW-zFla3d5T$d4ak0wNW9XakpWZEdKdE9Xd*F$emw1$2xkT2JHRllXbXhN$jJSc1ltM$dl$0Z-$FhSa1J6bDJZa014ZFdJe$$teE1Naz%yWW01%2JHSn$$WFZr%0%0MFdWaEtib$JZ$FQwPQ"
        }),
        alt: ""
      }), reactJsxRuntimeCoreReexport.jsx("span", {
        className: "text-16 text-s-color-text-secondary",
        children: t
      })]
    });
  });
  require.d(exports, {
    ThreadIconTitle: function () {
      return s;
    }
  });
}