// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'zy' to 'TextLinkRenderer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 527379
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var l = classnamesUtils;
  var linkComponentHandler = require("link-component-handler") /*id: 94706*/;
  var externalLinkSafetyTransformer = require("external-link-safety-transformer") /*id: 844886*/;
  var textLinkParser = require("text-link-parser") /*id: 266843*/;
  let d = e => e.match(/https?:\/\//) ? e : `https://${e}`;
  var u = {
    container: "container-QQkdo4",
    "harmony-link": "harmony-link-vGrtKg"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let h = e => {
    let {
      className: t,
      style: n,
      linkClassName: o,
      text: h = "",
      linkDisabled: m,
      ...f
    } = e;
    let g = reactCoreLibraryReexport.useMemo(() => textLinkParser.parseTextLinks(h), [h]);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      ...f,
      className: l(u.container, t),
      style: n,
      children: g.map((e, t) => e.type === textLinkParser.tokenTypes.text ? reactJsxRuntimeCoreReexport.jsx(reactCoreLibraryReexport.Fragment, {
        children: e.text
      }, t) : e.type === textLinkParser.tokenTypes.link ? m ? reactJsxRuntimeCoreReexport.jsx("a", {
        className: u["harmony-link"],
        href: "javascript:void(0);",
        onClick: e => e.preventDefault(),
        children: e.url
      }, t) : reactJsxRuntimeCoreReexport.jsx(linkComponentHandler.Link, {
        className: o,
        href: xssContentSanitizer.sanitizeUrl(externalLinkSafetyTransformer.ExternalLinkTransformer.transform(d(e.url)), null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$J-%lJXRXBxW$$NNWFX%ll%bkJp-lZaNlkzaz$i$0pIT1ROT$-wNTJZb*hDZ*1KdFZu$mtTRTEw$2tk$2QyTnRWbXBa$0ZKc1drTT$lb%50$FhaWk1qbDBZM*M1ZFZwWE5%Qmpl$*xvWkZo%2RtSkhiSFZoZ$RFd1dsa*9NRXd5-khW-$IxWTB%Rz$TZW1WSFJub*FNM$o2"
        }),
        children: e.url
      }, t) : undefined)
    });
  };
  require.d(exports, {
    TextLinkRenderer: function () {
      return h;
    }
  });
}