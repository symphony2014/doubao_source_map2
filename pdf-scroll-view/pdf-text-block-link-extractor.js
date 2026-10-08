// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D' to 'extractTextBlockLinks'
// - Renamed export 'k' to 'isValidBounds'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: new-pdf-scroll-view.beafc32e.js
         * chunkId: 92089
         * moduleId: 514874
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var pdfBoundsUtils = require("pdf-bounds-utils") /*id: 309227*/;
  let l = function (e = []) {
    let t = [];
    for (let l of e) {
      let {
        page_id: e = 0
      } = l;
      for (let i of l.text_blocks ?? []) {
        let {
          url: n,
          norm_box: l
        } = i;
        if (n && l) {
          let i = (l.x1 || 0) - (l.x0 || 0);
          let o = (l.y1 || 0) - (l.y0 || 0);
          if (i > 0.15 && o > 0.15) {
            t.push({
              page: e + 1,
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
                filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*x0-kRaT$dFcHNX$mRSZ*1NelNtcE1Na3B3Wldre*FtSXlNW*RpTWpWc1ltN$Nla3d6%W10-WF%RjZX$E5LZ*1KS*Qz%mti$3hzWkhrN%1X%khiSE5qZ$Rsd1lsZEdibHB%T$haa1d*SnpZ$mMx-k$4d$$ucFpXRXB1WkZoTlBRPT0"
              }),
              area: pdfBoundsUtils.extractCoordinates(l)
            });
          }
        }
      }
    }
    return t;
  };
  let i = e => {
    if (!e) {
      return false;
    }
    let t = (e.x1 || 0) - (e.x0 || 0);
    let n = (e.y1 || 0) - (e.y0 || 0);
    return t > 0.15 && n > 0.15;
  };
  require.d(exports, {
    extractTextBlockLinks: function () {
      return l;
    },
    isValidBounds: function () {
      return i;
    }
  });
}