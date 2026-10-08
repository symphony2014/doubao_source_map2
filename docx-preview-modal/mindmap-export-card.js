// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'S' to 'MindmapExportCard'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 14702.d6c1bb8c.js
         * chunkId: 14702
         * moduleId: 244147
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var logoIconWhiteBgPath = require("logo-icon-white-bg-path") /*id: 685324*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let c = e => {
    let {
      children: t,
      className: n,
      i18nConfig: a,
      svgContainerRef: c,
      brandAreaRef: s,
      iconUrl: u
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: o("mindmapExportShadow-VryGUg", n),
      children: reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "mindmapExportCard-ZtynJi",
        ref: c,
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: "fixed inset-0",
          children: t
        }), reactJsxRuntimeCoreReexport.jsxs("div", {
          className: "footer-jED6LQ",
          ref: s,
          children: [reactJsxRuntimeCoreReexport.jsx("img", {
            src: xssContentSanitizer.sanitizeUrl(u || logoIconWhiteBgPath, null, {
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
              filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$J-%lJXRXBxW$$NNWFX%ll%bkJp-lZaNlkzaz$lb*x-T$doaWJsSnZX$k14T$d*$E1Xd*FXR%o1$2xkT2FH%khWbXRNTTA1N$d-az$hb%l5T$hka%1q$nNZbT$TZWt3e$$uQlpWMlI1$1Zjd2R*cFlhS*RpTTBvd1dsaEpkb%Z-Tld0-$dHZDFaRWhPTkZsW$NtNWtXRTA5"
            }),
            className: "rounded-full"
          }), reactJsxRuntimeCoreReexport.jsxs("div", {
            className: "brand-ZdmHII",
            children: [reactJsxRuntimeCoreReexport.jsx("div", {
              className: "name-LC2faq",
              children: a == null ? undefined : a.brandName
            }), reactJsxRuntimeCoreReexport.jsx("div", {
              className: "text-BJn1BX",
              children: a == null ? undefined : a.brandDesc
            })]
          })]
        })]
      })
    });
  };
  require.d(exports, {
    MindmapExportCard: function () {
      return c;
    }
  });
}