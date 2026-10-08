// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'CQ' to 'addTimestampToUrl'
// - Renamed export 'Xi' to 'isDesktopTimestampReference'
// - Renamed export 'q2' to 'openTimestampedUrl'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80498.c69c3e39.js
         * chunkId: 80498
         * moduleId: 98217
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var chatMessageTypes = require("chat-message-types") /*id: 243788*/;
  let a = e => e.type === chatMessageTypes.MetaType.DesktopTimeStampReference;
  let o = (e, t) => {
    let r = new URL(e);
    r.searchParams.set("t", t.toString());
    return r.toString();
  };
  let s = (e, t) => {
    let r = o(e, t);
    window.open(xssContentSanitizer.sanitizeUrl(r, null, {
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
      filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1d4bFN*RjBX$Epv-%dSRE1Xb*hXRzkwWk$kc2R*cFl%akJa$np*M1RETk9l$mw1T1hka$N*Wn$Z$mMxZWt3e%1Xe*pNMD$v$2pK$mRsa3lhR2hr%Xp*N$dsZE9iR0ZZ$214T$Z6RnNZek5P-%Zve$Z-%lpi$*sw$ERO-WN*cEhWblpN$0ZKd1lsZFdlb$JI%m5SalF6bHFZakl4ZDJJe%5Xe*libEo2$ERO$01HRlhlSHBN-mxKNldWaEtib$JZ$FQwPQ"
    }));
  };
  require.d(exports, {
    addTimestampToUrl: function () {
      return o;
    },
    isDesktopTimestampReference: function () {
      return a;
    },
    openTimestampedUrl: function () {
      return s;
    }
  });
}