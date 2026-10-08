// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'SA' to 'DownloadProgress'
// - Renamed export 't' to 'downloadFile'
// - Renamed export 'WV' to 'downloadZip'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-file.6fc25773.js
         * chunkId: 3449
         * moduleId: 82912
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var samanthaToastFactory = require("samantha-toast-factory") /*id: 697541*/;
  var progressIndicators = require("progress-indicators") /*id: 875397*/;
  var jszipLibraryCore = require("jszip-library-core") /*id: 867947*/;
  var l = jszipLibraryCore;
  class c {
    addFile(e, t) {
      try {
        if (!e || !t) {
          throw Error("文件名和内容不能为空");
        }
        this.zip.file(e, t);
      } catch (e) {
        throw e;
      }
    }
    async generateAndDownload(e = {}) {
      try {
        let {
          compressionLevel: t = 6,
          fileName: n = `archive-${new Date().getTime()}.zip`
        } = e;
        let i = await this.zip.generateAsync({
          type: "blob",
          compression: "DEFLATE",
          compressionOptions: {
            level: t
          }
        }, e => {});
        let o = URL.createObjectURL(i);
        let s = document.createElement("a");
        s.href = xssContentSanitizer.sanitizeUrl(o, null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*x-Wkd4aWJsRjJZek5L-Wt3e$RuWmlWek-yWW1rN%5tRllRWFJo%jBaM$drZDRiR05wTlRCak1rWj$Xak5XZWc9PQ"
        });
        s.download = n;
        s.click();
      } catch (e) {
        throw e;
      }
    }
    clear() {
      this.zip = new l();
    }
    constructor() {
      var e;
      var t;
      var n;
      t = undefined;
      if ((e = typeof (n = function (e, t) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var n = e[Symbol.toPrimitive];
        if (n !== undefined) {
          var r = n.call(e, t || "default");
          if (typeof r != "object") {
            return r;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t === "string" ? String : Number)(e);
      }(e = "zip", "string")) == "symbol" ? n : n + "") in this) {
        Object.defineProperty(this, e, {
          value: t,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = t;
      }
      this.zip = new l();
    }
  }
  var fileDownloadUtils = require("file-download-utils") /*id: 555717*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let h = (e, t) => {
    let n;
    if (e <= 0) {
      return 0;
    }
    if (t <= 0) {
      return 93;
    }
    let r = e / t;
    return Math.min(r < 1 ? Math.pow(r, 0.75) * 85 : 85 + (1 - 1 / (r * r)) * 15, 93);
  };
  let p = e => {
    let {
      estimateDuration: t
    } = e;
    let [n, r] = reactCoreLibraryReexport.useState(0);
    let o = reactCoreLibraryReexport.useRef(Date.now());
    reactCoreLibraryReexport.useEffect(() => {
      let e = setInterval(() => {
        r(h(Date.now() - o.current, t));
      }, 300);
      return () => {
        clearInterval(e);
      };
    }, []);
    return reactJsxRuntimeCoreReexport.jsx(progressIndicators.CircularProgress, {
      width: 20,
      strokeWidth: 2,
      value: Math.ceil(n || 0)
    });
  };
  async function f(e, t, n, i, s) {
    let a = e || `${Date.now()}`;
    let l = samanthaToastFactory.toastInstance.info({
      icon: reactJsxRuntimeCoreReexport.jsx(p, {
        estimateDuration: 12000
      }),
      content: i("web_ai_coding_canvas_downloading_tips", {
        s_artifacts_name: a
      }),
      duration: 0
    });
    try {
      var c;
      var h;
      let e = fileDownloadUtils.fileTypeMap[(t == null ? undefined : (c = t.trim()) === null || c === undefined ? undefined : c.toLocaleLowerCase()) || ""];
      if (!e) {
        let t = (((h = a.trim().split(".")) === null || h === undefined ? undefined : h.pop()) || "").toLowerCase();
        e = fileDownloadUtils.fileTypeMap[t];
      }
      let i = await fileDownloadUtils.fetchFileBlob(n);
      if (typeof i == "string") {
        i = new Blob([i], {
          type: "text/plain"
        });
      }
      e ||= {
        mime: "application/octet-stream",
        ext: `.${s}`
      };
      let o = URL.createObjectURL(i);
      let l = document.createElement("a");
      l.href = xssContentSanitizer.sanitizeUrl(o, null, {
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
        filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*x-Wkd4aWJsRjJZek5L-Wt3e$RuWmlXR%oyWW0x$2RX%kl%WFpT$0doM1lqTktNRlZJ%25a-%0wcHNZek5OZ*1*WE5Xd*FXR2QxWk$oT05*bFlTbT$r$0%wOQ"
      });
      l.download = a.trim().toLowerCase().endsWith(e.ext.toLowerCase()) ? a : `${a}${e.ext}`;
      l.click();
      URL.revokeObjectURL(o);
    } catch (t) {
      let e = samanthaToastFactory.toastInstance.error({
        content: i("image_toast_downloadFail")
      });
      setTimeout(() => samanthaToastFactory.toastInstance.close(e), 3000);
    } finally {
      samanthaToastFactory.toastInstance.close(l);
    }
  }
  async function g(e, t, n, r) {
    let i = e || `${Date.now()}`;
    let s = samanthaToastFactory.toastInstance.info({
      icon: reactJsxRuntimeCoreReexport.jsx(p, {
        estimateDuration: 12000
      }),
      content: n("web_ai_coding_canvas_downloading_tips", {
        s_artifacts_name: i
      }),
      duration: 0
    });
    try {
      let e = await fileDownloadUtils.fetchFileBlob(t);
      if (typeof e == "string") {
        e = new Blob([e], {
          type: "text/plain"
        });
      }
      let n = `.${r == null ? undefined : r.trim()}`;
      let o = i.trim().toLowerCase().endsWith(n) ? i : `${i}${n}`;
      let s = ".zip";
      let a = i.trim().toLowerCase().endsWith(s) ? i : `${i}${s}`;
      let l = new c();
      l.addFile(o, e);
      await l.generateAndDownload({
        fileName: a
      });
    } catch (t) {
      let e = samanthaToastFactory.toastInstance.error({
        content: n("image_toast_downloadFail")
      });
      setTimeout(() => samanthaToastFactory.toastInstance.close(e), 3000);
    } finally {
      samanthaToastFactory.toastInstance.close(s);
    }
  }
  require.d(exports, {
    DownloadProgress: function () {
      return p;
    },
    downloadFile: function () {
      return f;
    },
    downloadZip: function () {
      return g;
    }
  });
}