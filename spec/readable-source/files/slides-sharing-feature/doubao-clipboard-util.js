// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'd' to 'copyDoubaoPptInfo'
// - Renamed export 'v' to 'copyToClipboard'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 10991.1ee21c16.js
         * chunkId: 10991
         * moduleId: 376593
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  let i = function (e = "") {
    let t = document.createElement("div");
    t.innerHTML = xssContentSanitizer.sanitizeHtml(e, null, {
      logType: "js.innerHTML",
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
      filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*x1$m5waFZ6$nNZek5OZEZre%9-%mpSemwx$2xjM%1HTj$PWHBq-l%xMlkwaFdl$nB%T1dwa%1qRjBZakkwZEdNeWFHa*pi$l-wWTBkR2RWcFhkM1paTWpsMFkw-z$k$nB-TlRCam$%bHZZakl4-k$4W$Fta*li$lp6$ERKT2RtSllRblpp-lZaM$pFaE5kb%15-%doamJW$jBX$mRPT%d*WE9-$k1NM$l3W$ZkN*$reH$$bnBa$0$wd$p*aE5Q%T09"
    });
    t.contentEditable = "true";
    t.style.position = "fixed";
    t.style.left = "-1000px";
    t.style.top = "-1000px";
    t.style.width = "100px";
    t.style.overflow = "hidden";
    return t;
  };
  let s = (e, t) => {
    let a = window.getSelection();
    if (!a) {
      return false;
    }
    let r = i(e);
    r.addEventListener("copy", a => {
      var r;
      var n;
      a.preventDefault();
      a.stopPropagation();
      if ((r = a.clipboardData) !== null && r !== undefined) {
        r.setData("text/html", e);
      }
      if (t) {
        if ((n = a.clipboardData) !== null && n !== undefined) {
          n.setData("text/plain", t);
        }
      }
    });
    document.body.appendChild(r);
    let n = document.createRange();
    n.selectNodeContents(r);
    a.removeAllRanges();
    a.addRange(n);
    let s = false;
    try {
      s = document.execCommand("copy");
    } catch (e) {
      s = false;
    }
    a.removeAllRanges();
    document.body.removeChild(r);
    return s;
  };
  let o = e => {
    let {
      link: t,
      title: a,
      password: r
    } = e;
    let i = isUndefinedCheck.isUndefined(r) ? t : `\u{8C46}\u{5305} AI PPT${a ? ` \u{300A}${a}\u{300B}` : ""}\u{FF1A}${t}  \u{5BC6}\u{7801}\u{FF1A}${r}`;
    s(`<pre>\u{8C46}\u{5305} AI PPT${a ? ` \u{300A}${a}\u{300B}` : ""}\u{FF1A}<a href="${t}">\u{94FE}\u{63A5}</a>${isUndefinedCheck.isUndefined(r) ? "" : `  \u{5BC6}\u{7801}\u{FF1A}${r}`}</pre>`, i);
  };
  require.d(exports, {
    copyDoubaoPptInfo: function () {
      return o;
    },
    copyToClipboard: function () {
      return s;
    }
  });
}