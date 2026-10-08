// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'q' to 'PdfImageScrollView'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: new-pdf-scroll-view.beafc32e.js
         * chunkId: 92089
         * moduleId: 552013
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var pdfScrollView = require("pdf-scroll-view") /*id: 407457*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let o = e => {
    let {
      images: t = [],
      onChange: n,
      onClickItem: o
    } = e;
    let [s, c] = reactCoreLibraryReexport.useState(0);
    return reactJsxRuntimeCoreReexport.jsx(pdfScrollView.PdfScrollView, {
      className: "container-nKfRjT",
      dataSource: t,
      defaultValue: 0,
      value: s,
      onChange: e => {
        if (n != null) {
          n(e);
        }
        c(e);
      },
      direction: "horizontal",
      renderItem: e => reactJsxRuntimeCoreReexport.jsx("img", {
        "data-testid": "container_inner_image_page",
        className: "image-STuUiv",
        src: xssContentSanitizer.sanitizeUrl(e.src, null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*x0-kRaT$dFcHNX$mRSZ*1NelNtcE1Na3B3Wldre*FtSXlNW*RpTWpWc1ltN$Nla3d6%W10-WF%RjZX$E5LZ*1KS*Qz%mti$3hzWkhrNWFtSXlNW*RpTWpWc1ltN$Nla3d5T1R*a1IzaHdZbTFWZEdOS$Nte*ti$3hzWkhre*QxcEhXWFJo$np*b1dqSlZkR0pI-khwa1F6bHdZbTFT-kdWRE5%QmpNMmhvWTIxa01XTjNQ$DA9"
        }),
        onClick: () => o == null ? undefined : o(e)
      }),
      renderText: e => e.page,
      itemKey: e => t.indexOf(e)
    });
  };
  require.d(exports, {
    PdfImageScrollView: function () {
      return o;
    }
  });
}