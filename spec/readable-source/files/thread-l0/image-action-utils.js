// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'AY' to 'downloadImage'
// - Renamed export 'Fp' to 'getImageEditorProps'
// - Renamed export 'I2' to 'preloadImage'
// - Renamed export 'P$' to 'copyImageToClipboard'
// - Renamed export 'ft' to 'getFileExtension'
// - Renamed export 'p0' to 'getThumbImage'
// - Renamed export 'uV' to 'processImageData'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 10691.328b6088.js
         * chunkId: 10691
         * moduleId: 323276
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var chatPanelModes = require("chat-panel-modes") /*id: 690886*/;
  var imageEditModes = require("image-edit-modes") /*id: 494752*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var fileDownloadUtilities = require("file-download-utilities") /*id: 552822*/;
  var samanthaToastFactory = require("samantha-toast-factory") /*id: 697541*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  let c = e => {
    let {
      image_ori_raw: t,
      image_raw: n
    } = e || {};
    if (t == null ? undefined : t.url) {
      return t;
    } else {
      return n;
    }
  };
  let u = e => {
    let {
      image_thumb_raw: t,
      image_thumb_ori: n
    } = e || {};
    if (t == null ? undefined : t.url) {
      return t;
    } else {
      return n;
    }
  };
  let h = e => {
    let {
      image_preview: t,
      preview_img: n
    } = e || {};
    if (t == null ? undefined : t.url) {
      return t;
    } else {
      return n;
    }
  };
  let p = e => {
    let {
      image_ori: o,
      image_thumb: a,
      image_thumb_formats: l
    } = e;
    let r = u(e);
    let s = c(e);
    let d = h(e);
    let p = (d == null ? undefined : d.url) && d || (a == null ? undefined : a.url) && a || o;
    let v = (s == null ? undefined : s.url) && s || r;
    let m = (o == null ? undefined : o.url) ? o : a;
    let g = (a == null ? undefined : a.url) && a || r;
    let _ = (m == null ? undefined : m.format) || "jpeg";
    let f = (p == null ? undefined : p.width) || 0;
    let b = (p == null ? undefined : p.height) || 0;
    return {
      format: _,
      previewImage: p,
      downloadImage: m,
      thumbImage: g,
      width: f,
      height: b,
      otherFormat: (l == null ? undefined : l.avif?.url) && {
        webpSrc: l == null ? undefined : l.webp?.url,
        avifSrc: l == null ? undefined : l.avif?.url
      } || {
        webpSrc: undefined,
        avifSrc: undefined
      },
      originalImage: v
    };
  };
  let v = e => {
    let {
      imageSrc: t,
      format: n,
      fileName: i,
      t: o
    } = e;
    loggerServiceCore.defaultLogger.persist.log({
      eventName: "download_image_start",
      meta: {
        url: t,
        logTime: Date.now()
      }
    });
    samanthaToastFactory.toastInstance.info({
      content: o("image_toast_downloading"),
      showClose: false,
      theme: "light"
    });
    fileDownloadUtilities.downloadFileWithCallbacks(t, i, n, () => {
      loggerServiceCore.defaultLogger.persist.log({
        eventName: "download_image_success",
        meta: {
          url: t,
          logTime: Date.now()
        }
      });
    }, e => {
      samanthaToastFactory.toastInstance.error({
        content: o("image_toast_downloadFail"),
        showClose: false,
        theme: "light"
      });
      loggerServiceCore.defaultLogger.persist.log({
        eventName: "download_image_fail",
        error: e,
        meta: {
          url: t,
          logTime: Date.now()
        }
      });
    }, () => {
      loggerServiceCore.defaultLogger.persist.log({
        eventName: "download_image_save_start",
        meta: {
          url: t,
          logTime: Date.now()
        }
      });
    }, () => {
      loggerServiceCore.defaultLogger.persist.log({
        eventName: "download_image_fetch_start",
        meta: {
          url: t,
          logTime: Date.now()
        }
      });
    });
  };
  let m = e => {
    if (!e) {
      return;
    }
    let t = new Image();
    t.crossOrigin = "anonymous";
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
      filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*t6%214Wld*SnN%RmRzZEZsWFpHeE1NMD%1$1hrN%1X%khiSE5qZ$RreFpFZHNjMk41TlRCak1rWj$Xak5XZWc9PQ"
    });
  };
  let g = async e => {
    let {
      imageSrc: t
    } = e;
    if (!t) {
      throw Error("imageSrc is empty");
    }
    return new Promise((e, n) => {
      let o = new Image();
      o.crossOrigin = "anonymous";
      o.onload = () => {
        let t = document.createElement("canvas");
        t.width = o.width;
        t.height = o.height;
        let i = t.getContext("2d");
        if (!i) {
          return n(Error("canvas context is empty"));
        }
        i.drawImage(o, 0, 0);
        t.toBlob(t => {
          if (!t) {
            n(Error("blob is empty"));
            return;
          }
          let i = [new ClipboardItem({
            "image/png": t
          })];
          navigator.clipboard.write(i).then(e, n);
        });
      };
      o.onerror = () => {
        n(Error("image load fail"));
      };
      o.src = xssContentSanitizer.sanitizeUrl(t, null, {
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
        filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*t6%214Wld*SnN%RmRzZEZsWFpHeE1NMD%1$1hrN%1X%khiSE5qZ$RreFpFZHNjMk41TlRCak1rWj$Xak5XZWc9PQ"
      });
    });
  };
  let _ = e => {
    let {
      imageContent: i,
      conversationId: r = "",
      message: s,
      canvasLayoutState: d = chatPanelModes.PanelMode.CANVAS_ONLY,
      imageEditTool: c = imageEditModes.editModes.default
    } = e;
    return {
      conversationId: r,
      messageId: String(s == null ? undefined : s.message_id),
      canvasLayoutState: d,
      imageEditorProps: {
        image: i,
        skillId: (s == null ? undefined : s.skill?.skill_type) ? "3" : null,
        skillName: (s == null ? undefined : s.skill?.skill_type) ? "images_generation" : null,
        messageId: String(s == null ? undefined : s.message_id),
        initialEditTool: c,
        onClose: () => {
          chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(e => e == null ? undefined : e.closeCanvasPanel());
        }
      }
    };
  };
  let f = e => {
    let t = e.split("?")[0];
    return t.substring(t.lastIndexOf(".") + 1);
  };
  require.d(exports, {
    downloadImage: function () {
      return v;
    },
    getImageEditorProps: function () {
      return _;
    },
    preloadImage: function () {
      return m;
    },
    copyImageToClipboard: function () {
      return g;
    },
    getFileExtension: function () {
      return f;
    },
    getThumbImage: function () {
      return u;
    },
    processImageData: function () {
      return p;
    }
  });
}