// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$5' to 'fetchFileText'
// - Renamed export 'JI' to 'getCachedFileUrl'
// - Renamed export 'Sv' to 'downloadFile'
// - Renamed export 'eU' to 'resolveMimeType'
// - Renamed export 'g8' to 'downloadFromUrl'
// - Renamed export 'gP' to 'fileTypeMap'
// - Renamed export 'kT' to 'fetchFileBlob'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 27661.f1334209.js
         * chunkId: 27661
         * moduleId: 555717
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var fileUrlCacheManager = require("file-url-cache-manager") /*id: 655022*/;
  let l = {
    markdown: {
      mime: "text/markdown",
      ext: ".md"
    },
    file: {
      mime: "application/zip",
      ext: ".zip"
    },
    zip: {
      mime: "application/zip",
      ext: ".zip"
    },
    html: {
      mime: "text/html",
      ext: ".html"
    },
    pdf: {
      mime: "application/pdf",
      ext: ".pdf"
    },
    mp3: {
      mime: "audio/mpeg",
      ext: ".mp3"
    },
    wav: {
      mime: "audio/mpeg",
      ext: ".wav"
    },
    mp4: {
      mime: "video/mp4",
      ext: ".mp4"
    },
    video: {
      mime: "video/mp4",
      ext: ".mp4"
    },
    doc: {
      mime: "application/msword",
      ext: ".doc"
    },
    docx: {
      mime: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ext: ".docx"
    },
    ppt: {
      mime: "application/vnd.ms-powerpoint",
      ext: ".ppt"
    },
    pptx: {
      mime: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      ext: ".pptx"
    },
    xlsx: {
      mime: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      ext: ".xlsx"
    },
    csv: {
      mime: "text/csv",
      ext: ".csv"
    }
  };
  function i(e, o) {
    let t = l[o];
    if (!t) {
      let o = (e.trim().split(".").pop() || "").toLowerCase();
      if (!(t = l[o]) && o) {
        return {
          mime: "text/plain",
          ext: `.${o}`
        };
      }
    }
    return t || {
      mime: "text/plain",
      ext: ".txt"
    };
  }
  function a(e, o, t) {
    let n;
    if (!t) {
      return;
    }
    let l = i(e, o);
    n = typeof t == "string" ? new Blob([t], {
      type: l.mime
    }) : t;
    let a = URL.createObjectURL(n);
    let s = document.createElement("a");
    s.href = xssContentSanitizer.sanitizeUrl(a, null, {
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
      filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*x-Wkd4aWJsRjJZek5L-Wt3e$RuWmlWek-yWW1rNWJXRlhlR3hN$0ZZd1lWZDRla3h1$W5wWldFcH$aRmhO%FE9PQ"
    });
    s.download = e.trim().toLowerCase().endsWith(l.ext.toLowerCase()) ? e : `${e}${l.ext}`;
    s.click();
    URL.revokeObjectURL(a);
  }
  async function s(e) {
    let [o] = await fileUrlCacheManager.getFileUrls([e], "file");
    if (!o) {
      throw Error("token url not found");
    }
    return await fetch(o).then(e => e.blob());
  }
  async function c(e) {
    let [o] = await fileUrlCacheManager.getFileUrls([e], "file");
    if (!o) {
      throw Error("token url not found");
    }
    return await fetch(o).then(e => e.text());
  }
  async function _(e, o, t) {
    a(e, o, await s(t));
  }
  let C = new Map();
  async function p(e) {
    let o = C.get(e);
    if (o) {
      return o;
    }
    let t = fileUrlCacheManager.getFileUrls([e], "file").then(o => {
      let t = (o == null ? undefined : o[0]) || "";
      if (!t) {
        C.delete(e);
      }
      return t;
    }).catch(o => {
      C.delete(e);
      throw o;
    });
    C.set(e, t);
    return t;
  }
  require.d(exports, {
    fetchFileText: function () {
      return c;
    },
    getCachedFileUrl: function () {
      return p;
    },
    downloadFile: function () {
      return a;
    },
    resolveMimeType: function () {
      return i;
    },
    downloadFromUrl: function () {
      return _;
    },
    fileTypeMap: function () {
      return l;
    },
    fetchFileBlob: function () {
      return s;
    }
  });
}