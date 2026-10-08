// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$A' to 'downloadFileViaBlob'
// - Renamed export 'Ph' to 'downloadBlobViaAnchor'
// - Renamed export 'eV' to 'downloadVideoAsMp4'
// - Renamed export 'lJ' to 'openUrlInHiddenIframe'
// - Renamed export 'oj' to 'downloadFileWithCallbacks'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 10691.328b6088.js
         * chunkId: 10691
         * moduleId: 552822
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var fileSaverUtility = require("file-saver-utility") /*id: 888334*/;
  var a = fileSaverUtility;
  let l = async (e, t, n, i, o, l, r) => {
    if (e) {
      try {
        if (r != null) {
          r();
        }
        let s = await fetch(e).then(e => {
          if (!e.ok) {
            throw Error(`download_fail,status\u{FF1A}${e.status}`);
          }
          return e.blob();
        }).catch(e => {
          if (o != null) {
            o(e);
          }
        });
        if (!s && o != null) {
          o(Error("download_fail_without_blob"));
        }
        let d = e.split("?")[0];
        let c = d.substring(d.lastIndexOf(".") + 1);
        let u = `${t || Date.now()}.${n && c === "image" ? n : c}`;
        if (l != null) {
          l();
        }
        a.saveAs(s || e, u);
        if (i != null) {
          i();
        }
      } catch (e) {
        if (o != null) {
          o(e);
        }
      }
    }
  };
  let r = async (e, t) => {
    if (!e) {
      return;
    }
    let n = await fetch(e).then(e => e.blob()).catch(e => {});
    a.saveAs(n || e, t);
  };
  let s = e => {
    if (!e) {
      return;
    }
    let t = document.createElement("iframe");
    t.style.display = "none";
    t.style.height = "0px";
    t.src = xssContentSanitizer.sanitizeUrl(e, null, {
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
      filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$J-%lJXRXBxW$$NNWFWbFl%bXhNTTFZd1lWZDRla3d6$*5sWm$%bHJZak5rZFdKSE9Xa*FRel$3WXpKR2$Wb3pWbm89"
    });
    document.body.appendChild(t);
    t.onload = () => {
      t.remove();
    };
  };
  let d = e => {
    let {
      bytes: t,
      fileName: n,
      mimeType: o
    } = e;
    let a = new Blob([t], {
      type: o
    });
    let l = document.createElement("a");
    l.href = xssContentSanitizer.sanitizeUrl(window.URL.createObjectURL(a), null, {
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
      filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$J-%lJXRXBxW$$NNWFWbFl%bXhNTTFZd1lWZDRla3d6$*5sWm$%bHJZak5rZFdKSE9Xa*FRel$3WXpKR2$Wb3pWbm89"
    });
    l.download = n;
    l.click();
  };
  let c = function (e, t = "video") {
    if (e) {
      return fetch(e).then(e => e.blob()).then(e => {
        let n = new File([e], t, {
          type: "video/mp4"
        });
        a.saveAs(n);
      }).catch(e => {});
    }
  };
  require.d(exports, {
    downloadFileViaBlob: function () {
      return r;
    },
    downloadBlobViaAnchor: function () {
      return d;
    },
    downloadVideoAsMp4: function () {
      return c;
    },
    openUrlInHiddenIframe: function () {
      return s;
    },
    downloadFileWithCallbacks: function () {
      return l;
    }
  });
}