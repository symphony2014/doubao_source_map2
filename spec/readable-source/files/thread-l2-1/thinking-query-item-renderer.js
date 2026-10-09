// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'G' to 'renderThinkingQueryItem'
// - Renamed export 't' to 'ThinkingQueryItemComponent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 348895
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var thinkingQueryItem = require("thinking-query-item") /*id: 860711*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var externalLinkSafetyTransformer = require("external-link-safety-transformer") /*id: 844886*/;
  var documentOutlinedIcon = require("document-outlined-icon") /*id: 700300*/;
  var threadIconConfig = require("thread-icon-config") /*id: 928349*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let d = e => {
    let {
      isBlockFinished: t,
      isBroken: n,
      blockContent: r
    } = e;
    let d = !t && n;
    let {
      summary: u,
      url: p,
      description: m
    } = r ?? {};
    if (!u || d) {
      return null;
    }
    let v = !!p && !!t;
    return reactJsxRuntimeCoreReexport.jsx(thinkingQueryItem.ThinkingQueryItem, {
      title: u,
      loading: !t,
      overrideDesc: t ? "" : m,
      prefixIcon: reactJsxRuntimeCoreReexport.jsx(documentOutlinedIcon.DocumentOutlined, {
        className: threadIconConfig.iconConfig.icon
      }),
      showSuffixIcon: v,
      hoverable: v,
      onClick: () => {
        if (p) {
          window.open(xssContentSanitizer.sanitizeUrl(externalLinkSafetyTransformer.ExternalLinkTransformer.transform(p), null, {
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1d0-$-xWjN%RmhL-kdNe$Zta*pi$T$2$EROT2$WbD$PW*Rp%0Zad$lW-zFla3d5T$d4ak0wNW9XakpWZ*xreWFHa*tRek-1$2xkT2JHRllXbXhN$np*c1l6Tk9hRm95$lhSWk1qbDFaRWRXZFdSRE1Xb*lSemxxW$hrNWMyRlhOWEph$0$sMFkyM$dhRnBI$m5sT$-wcHpZakpP-2t3e$RuWmlXR%oyWW0x$2RX%kRO$EJqTTJob1kyMWtN$04z%FQwPQ"
          }), "_blank");
        }
      }
    });
  };
  let u = e => {
    let {
      contentBlock: n,
      message: i
    } = e;
    let {
      is_finish: l
    } = n ?? {};
    let o = messageContentTypeAndStatusChecker.vlk(i);
    let a = (n == null ? undefined : n.content_obj) ?? {};
    return reactJsxRuntimeCoreReexport.jsx(d, {
      isBlockFinished: l,
      isBroken: o,
      blockContent: a
    });
  };
  require.d(exports, {
    renderThinkingQueryItem: function () {
      return u;
    },
    ThinkingQueryItemComponent: function () {
      return d;
    }
  });
}