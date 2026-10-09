// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'b' to 'renderVideoToolCalls'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 975350
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var externalLinkSafetyTransformer = require("external-link-safety-transformer") /*id: 844886*/;
  var thinkingBoxToolCall = require("thinking-box-tool-call") /*id: 114415*/;
  require("react-core-library-reexport") /*id: 634663*/;
  var rtlIconFactory = require("rtl-icon-factory") /*id: 682145*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var s = rtlIconFactory.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "currentColor",
      d: "M18 18.25v-1.955l3.02 2.028c1.333.75 2.98-.213 2.98-1.743V7.42c0-1.53-1.647-2.493-2.98-1.743L18 7.705V5.75c0-1.243-.895-2.25-2-2.25H2c-1.105 0-2 1.007-2 2.25v12.5c0 1.243.895 2.25 2 2.25h14c1.105 0 2-1.007 2-2.25M16 5.5v13H2v-13zm6 11.08L18 14v-4l4-2.58z"
    })
  }), {}));
  let c = e => {
    var t;
    let {
      contentBlock: n
    } = e;
    let o = (t = n == null ? undefined : n.is_finish) === null || t === undefined || t;
    let {
      summary: c,
      items: d
    } = (n == null ? undefined : n.content_obj) || {};
    let u = e => {
      window.open(xssContentSanitizer.sanitizeUrl(externalLinkSafetyTransformer.ExternalLinkTransformer.transform(e == null ? undefined : e.main_site_url), null, {
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
        filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1d0-$-xWjN%RmhL-kdNe$Zta*pi$T$2$EROT2$WbD$PW*Rp%0Zad$lW-zFla3d5T$d4ak0wNW9XakpWZ*xreWFHa*tRek-1$2xkT2JHRllXbXhN$np*c1l6Tk9hRm95$lhSWk1qbDFaRWRXZFdSRE1Xb*lSemxxW$hrNW$WcFh%bXho$0Zwc1R*a*FjRnBI$m5aT$dFSj$Xb*hh-0ZwW$kz%lpiW*gy$1RKemRtRlhO$3Rh$0dkM$pFaE9ORmxZ%201a1dFMDk"
      }), "_blank");
    };
    if (d && c && (d == null ? undefined : d.length) !== 0) {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        children: d.map(e => reactJsxRuntimeCoreReexport.jsx(thinkingBoxToolCall.ToolCallRenderer, {
          data: {
            id: e.id,
            type: "tool-call",
            name: e.video_captions,
            leadingIcon: reactJsxRuntimeCoreReexport.jsx(s, {
              className: "text-12"
            }),
            clickable: true,
            status: o ? "finished" : "running",
            onToolClick: () => u(e)
          }
        }))
      });
    } else {
      return null;
    }
  };
  require.d(exports, {
    renderVideoToolCalls: function () {
      return c;
    }
  });
}