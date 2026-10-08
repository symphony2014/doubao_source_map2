// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$f' to 'isVideoType'
// - Renamed export 'VP' to 'extractVideoFrame'
// - Renamed export 'p2' to 'getImageSize'
// - Renamed export 'tw' to 'fileToDataURL'
// - Renamed export 'ug' to 'base64ToBlob'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ai-space-old.e5490b46.js
         * chunkId: 2262
         * moduleId: 759863
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  let a = e => new Promise((t, i) => {
    let n = new FileReader();
    n.readAsDataURL(e);
    n.onload = function () {
      var e;
      t(((e = n.result) === null || e === undefined ? undefined : e.toString()) ?? "");
    };
    n.onerror = function (e) {
      i(e);
    };
  });
  let r = function (e) {
    let i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 512;
    let a = atob(e.split(",")[1] ?? e);
    let r = [];
    for (let e = 0; e < a.length; e += n) {
      let t = a.slice(e, e + n);
      let i = Array(t.length);
      for (let e = 0; e < t.length; e++) {
        i[e] = t.charCodeAt(e);
      }
      let o = new Uint8Array(i);
      r.push(o);
    }
    return new Blob(r, {
      type: i
    });
  };
  let o = function (e, t = 0) {
    return new Promise(i => {
      let a = document.createElement("video");
      a.setAttribute("src", xssContentSanitizer.sanitizeUrl(URL.createObjectURL(e), null, {
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
        filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$J-%lJXRXBxW$$NNWFWbFl%bXhNTTFZd1lWZDRla3d6$*5sWm$%bDBXb*RT-0Zs$E5%QmpNa1o1$2pO$2$nPT0"
      }));
      a.load();
      a.addEventListener("error", e => {
        i(null);
      });
      a.addEventListener("loadedmetadata", () => {
        if (a.duration < t) {
          i(null);
          return;
        }
        setTimeout(() => {
          a.currentTime = t;
        }, 200);
        a.addEventListener("seeked", () => {
          let e = document.createElement("canvas");
          e.width = a.videoWidth;
          e.height = a.videoHeight;
          let t = e.getContext("2d");
          if (!t) {
            i(null);
            return;
          }
          t.drawImage(a, 0, 0, e.width, e.height);
          t.canvas.toBlob(e => {
            i(e);
          }, "image/jpeg", 0.75);
        });
      });
    });
  };
  let l = e => e.startsWith("video/");
  let s = function (e, t = 5000) {
    return new Promise((i, a) => {
      let r = false;
      let o = false;
      let l = new Image();
      l.onload = function () {
        if (!o) {
          r = true;
          i({
            width: l.naturalWidth,
            height: l.naturalHeight
          });
        }
      };
      l.src = xssContentSanitizer.sanitizeUrl(e, null, {
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
        filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$J-%lJXRXBxW$$NNWFWbFl%bXhNTTFZd1lWZDRla3d6$*5sWm$%bDBXb*RT-0Zs$E5%QmpNa1o1$2pO$2$nPT0"
      });
      setTimeout(() => {
        o = true;
        if (!r) {
          a(Error(`Get size of image timeout for ${t}ms.`));
        }
      }, t);
    });
  };
  require.d(exports, {
    isVideoType: function () {
      return l;
    },
    extractVideoFrame: function () {
      return o;
    },
    getImageSize: function () {
      return s;
    },
    fileToDataURL: function () {
      return a;
    },
    base64ToBlob: function () {
      return r;
    }
  });
}