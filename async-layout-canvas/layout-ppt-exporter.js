// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'R' to 'exportPpt'
// - Renamed export 'a' to 'ExportType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-layout-canvas.ea59bc0c.js
         * chunkId: 78042
         * moduleId: 433821
         */
module.exports = function (module, exports, require) {
  var i;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var trimStringBySubstring = require("trim-string-by-substring") /*id: 285645*/;
  var commonParamsBuilder = require("common-params-builder") /*id: 665781*/;
  (i = {})[i.ExportPDF = 1] = "ExportPDF";
  i[i.ExportPPT = 2] = "ExportPPT";
  i[i.ExportHTMLZIP = 3] = "ExportHTMLZIP";
  let n = i;
  let l = async (e, t, a) => {
    let i = {
      ...commonParamsBuilder.getCommonParams(),
      artifact_code_id: e,
      version: t,
      op_type: a
    };
    let n = `/samantha/supertask/ppt_export?${new URLSearchParams(i).toString()}`;
    let l = await fetch(n);
    if (!l.ok) {
      throw Error("export ppt failed");
    }
    let c = await l.blob();
    let d = URL.createObjectURL(c);
    let p = "";
    let u = l.headers.get("Content-Disposition");
    if (u) {
      let e = u.split(";").map(trimStringBySubstring.trimStringBySubstring).find(e => e.startsWith("filename=") || e.startsWith("filename*="));
      if (e) {
        let t = e.match(/^filename\*?=(?:UTF-8'')?(.+)$/);
        if (t == null ? undefined : t[1]) {
          p = decodeURIComponent(t[1]);
        }
      }
    }
    let m = document.createElement("a");
    m.href = xssContentSanitizer.sanitizeUrl(d, null, {
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
      filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*x-Wkd4aWJsRjJZek5L-Wt3elRte*pibHB3$1RK$2$rd3lSbkJN$0$KM1pFTT$iR1ZJ%W5aamJsRjJZ$mMx-TFwW$oz$mtTRT$vWTIxa01XTjNQ$DA9"
    });
    m.download = p;
    m.click();
    m.remove();
    URL.revokeObjectURL(d);
  };
  require.d(exports, {
    exportPpt: function () {
      return l;
    },
    ExportType: function () {
      return n;
    }
  });
}