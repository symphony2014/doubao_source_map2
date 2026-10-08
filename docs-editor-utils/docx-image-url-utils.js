// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'GM' to 'canvasToDataURL'
// - Renamed export 'GD' to 'base64ToUint8Array'
// - Renamed export 'iT' to 'dataURLToFile'
// - Renamed export 'Fu' to 'isGifImage'
// - Renamed export 'bW' to 'getImageUrl'
// - Renamed export 'iK' to 'getImageSize'
// - Renamed export 'dY' to 'isBase64Image'
// - Renamed export 'Jd' to 'buildImageUrl'
// - Renamed export 'Y$' to 'serializeParams'
// - Renamed export 'po' to 'loadImage'
// - Renamed export 'mS' to 'isLargeGif'
// - Renamed export 'wc' to 'logOfflineEvent'
// - Renamed export 'Iz' to 'getDocxImageUrl'
// - Renamed export 'ki' to 'isImageStreamUrl'
// - Renamed export 'vH' to 'shouldUseOriginalImage'
// - Renamed export 'V9' to 'detectMimeTypeFromBytes'
// - Renamed export 'hb' to 'normalizeUrlProtocol'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 219802
         */
module.exports = function (module, exports, require) {
  var o;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var runtimeEnvFlags = require("runtime-env-flags") /*id: 573139*/;
  window.location.origin;
  window.location.origin;
  window.location.host;
  window.location.origin;
  window.location.origin;
  window.location.host;
  let u = !runtimeEnvFlags.isBoeEnvironment;
  if (u) {
    window.location.origin;
  }
  if (u) {
    window.location.origin;
  }
  if (u) {
    window.location.host;
  }
  window.location.origin;
  window.location.origin;
  window.location.host;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var offlineStatusSelectorsUtils = require("offline-status-selectors-utils") /*id: 564613*/;
  var docTokenHelperUtils = require("doc-token-helper-utils") /*id: 740758*/;
  var docApiConstants = require("doc-api-constants") /*id: 499049*/;
  var docxEventCollector = require("docx-event-collector") /*id: 477626*/;
  var docxEditorConstants = require("docx-editor-constants") /*id: 708986*/;
  var docxOfflineImageFlags = require("docx-offline-image-flags") /*id: 332375*/;
  require("doc-url-processing-utilities") /*id: 330118*/;
  var urlQueryParameterManipulator = require("url-query-parameter-manipulator") /*id: 551064*/;
  (o = {}).EQUAL = "equal";
  o.ALLOW_DOWN = "allow_down";
  o.NEAR = "near";
  o.ALLOW_UP = "allow_up";
  o.ALLOW_UP_DEFAULT = "allow_up_default";
  let E = o;
  let m = /\/api\/box\/stream\/download\/(?:v\d+\/)?(all|cover|preview)\/(\w*)/;
  function b(e) {
    return !!e && m.test(e);
  }
  function v(e) {
    return Object.keys(e).filter(n => e[n] !== undefined).map(n => `${n}=${encodeURIComponent(`${e[n]}`)}`).join("&");
  }
  let T = browserEnvironmentDetectionUtils.browserDetector.isMobile && !browserEnvironmentDetectionUtils.browserDetector.isH5 && !browserEnvironmentDetectionUtils.browserDetector.isOpendoc;
  function C(e) {
    let {
      fileId: n,
      recordId: r,
      width: o,
      height: i,
      scale: l,
      imageType: c,
      forceCover: u = false,
      coverSize: a = 1280,
      size: s
    } = e;
    if (!n) {
      return "";
    }
    let d = I(n, r, {
      policy: E.EQUAL,
      fallback_source: 1,
      width: a,
      height: a,
      imageType: c
    });
    if (u) {
      return d;
    }
    if (T) {
      var f;
      var h;
      var _;
      let e = I(n, r);
      f = e;
      h = o;
      _ = i;
      f = urlQueryParameterManipulator.setQueryParameter(f, "width", `${h}`);
      e = f = urlQueryParameterManipulator.setQueryParameter(f, "height", `${_}`);
      e = urlQueryParameterManipulator.setQueryParameter(e, "type", "image");
      e = urlQueryParameterManipulator.setQueryParameter(e, "scale", `${l}`);
      if (c && T) {
        e = urlQueryParameterManipulator.setQueryParameter(e, "contentType", c.split("/")[1] || "");
      }
      return e;
    }
    if (A({
      width: o,
      height: i,
      mimeType: c,
      size: s
    })) {
      return I(n, r);
    } else {
      return d;
    }
  }
  function k(e, n) {
    return {
      mountPoint: {
        type: docApiConstants.fileTypes.IMAGE,
        token: e
      },
      coverOptions: n
    };
  }
  function I(e, n, r) {
    let o = k(n, r);
    let i = platformDocUtils.Jdx(e, o);
    if (runtimeEnvFlags.isLocalDev && i) {
      let e = new URL(i);
      i = `${location.origin}${e.pathname}${e.search}`;
    }
    return function (e, n, r, o) {
      if (browserEnvironmentDetectionUtils.browserDetector.ios) {
        return e.replace(/https?:/, location.protocol);
      }
      if (docxOfflineImageFlags.isImageShowEnabled && offlineStatusSelectorsUtils.isDocxOfflineDisabled()) {
        let i = docTokenHelperUtils.resolveDocToken();
        if (o) {
          e = urlQueryParameterManipulator.setQueryParameter(e, "mime_type", encodeURIComponent(o));
        }
        e = urlQueryParameterManipulator.setQueryParameter(e, "obj_type", "22");
        e = urlQueryParameterManipulator.setQueryParameter(e, "obj_token", i);
        F("load_image", r);
        return `cache-resource://sdk/image?biz=ccm&key=${n}&origin_url=${encodeURIComponent(e)}`;
      }
      return e;
    }(i, e, n, r == null ? undefined : r.imageType);
  }
  function R(e, n) {
    let r = k(n);
    return y(platformDocUtils.Izo(e, r));
  }
  function y(e) {
    if (browserEnvironmentDetectionUtils.browserDetector.ios) {
      return e.replace(/https?:/, location.protocol);
    } else {
      return e;
    }
  }
  function O(e) {
    return e === "image/gif";
  }
  function S(e) {
    let {
      width: n,
      height: r,
      mimeType: o,
      size: i
    } = e;
    return !!O(o) && (!!(i > docxEditorConstants.maxFileSize) || !!(n * r > 2073600));
  }
  function A(e) {
    let {
      width: n,
      height: r,
      mimeType: o,
      size: i
    } = e;
    if (O(o)) {
      return !S({
        width: n,
        height: r,
        mimeType: o,
        size: i
      });
    } else {
      return r > 1280 && n * 1280 / r < 730;
    }
  }
  function L(e) {
    let n = e.slice(0, 4);
    n = new Uint8Array(n);
    let r = [];
    for (let e = 0; e < n.byteLength; e++) {
      r.push(n[e].toString(16));
    }
    return function (e) {
      switch (e) {
        case "89504E47":
          return "image/png";
        case "47494638":
          return "image/gif";
        case "424DC001":
          return "image/bmp";
        case "FFD8FFDB":
        case "FFD8FFE0":
        case "FFD8FFE1":
        case "FFD8FFE2":
        case "FFD8FFE3":
        case "FFD8FFE8":
          return "image/jpeg";
        case "52494646":
          return "image/webp";
        default:
          return "";
      }
    }(r.join("").toUpperCase());
  }
  function N(e = "") {
    let n = atob(e);
    let r = n.length;
    let o = new Uint8Array(r);
    for (let e = 0; e < r; e++) {
      o[e] = n.charCodeAt(e);
    }
    return o;
  }
  function B(e) {
    return /^data:image\/[\w+-]*;base64,/.test(e);
  }
  function D(e) {
    let n = document.createElement("canvas");
    let {
      width: r,
      height: o
    } = e;
    n.width = r;
    n.height = o;
    n.getContext("2d").drawImage(e, 0, 0, r, o);
    return n.toDataURL("image/png");
  }
  let w = (e, n) => new Promise((r, o) => {
    let l = new Image();
    if (n) {
      l.crossOrigin = "anonymous";
    }
    l.addEventListener("load", () => {
      r(l);
    });
    l.addEventListener("error", () => {
      o(Error("Failed to load image"));
    });
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
      filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1rNTJZb*N4Z*1KcE9XOWFWM2gz$2xoS2$rd3liSFJa$jJSc1R*Z*9iR0pJ%W14amF%$XdZekpHZ$ZvelZubz0"
    });
  });
  function M(e) {
    return new Promise((n, r) => {
      let o = new Image();
      o.onload = () => {
        n({
          isSuccess: true,
          imageSize: {
            width: o.width,
            height: o.height
          }
        });
      };
      o.onerror = () => {
        n({
          isSuccess: false,
          imageSize: {
            width: 0,
            height: 0
          }
        });
      };
      o.src = xssContentSanitizer.sanitizeUrl(e, null, {
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
        filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1rNTJZb*N4Z*1KcE9XOWFWM2gz$2xoS2$rd3liSFJa$jJSc1R*Z*9iR0pJ%W14amF%$XdZekpHZ$ZvelZubz0"
      });
    });
  }
  function P(e) {
    let n = e.split(",");
    let r = n[0].match(/:(.*?);/)[1];
    let o = r.split("/")[1];
    let i = atob(n[1]);
    let l = i.length;
    let c = new Uint8Array(l);
    while (l--) {
      c[l] = i.charCodeAt(l);
    }
    return new File([c], `filename.${o}`, {
      type: r
    });
  }
  function F(e, n, r) {
    let o = {
      action: e,
      recordId: platformDocUtils.p5T(n)
    };
    if (r !== undefined) {
      o.isCacheExist = r;
    }
    docxEventCollector.docEventCollector("docx_offline", o);
  }
  require.d(exports, {
    canvasToDataURL: function () {
      return D;
    },
    base64ToUint8Array: function () {
      return N;
    },
    dataURLToFile: function () {
      return P;
    },
    isGifImage: function () {
      return O;
    },
    getImageUrl: function () {
      return C;
    },
    getImageSize: function () {
      return M;
    },
    isBase64Image: function () {
      return B;
    },
    buildImageUrl: function () {
      return I;
    },
    serializeParams: function () {
      return v;
    },
    loadImage: function () {
      return w;
    },
    isLargeGif: function () {
      return S;
    },
    logOfflineEvent: function () {
      return F;
    },
    getDocxImageUrl: function () {
      return R;
    },
    isImageStreamUrl: function () {
      return b;
    },
    shouldUseOriginalImage: function () {
      return A;
    },
    detectMimeTypeFromBytes: function () {
      return L;
    },
    normalizeUrlProtocol: function () {
      return y;
    }
  });
}