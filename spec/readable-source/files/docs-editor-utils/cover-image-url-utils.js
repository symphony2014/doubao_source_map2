// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'BL' to 'getCoverImageUrl'
// - Renamed export 'Gu' to 'isValidCoverSource'
// - Renamed export 'VR' to 'getCoverImageUrlFromSource'
// - Renamed export 'mX' to 'buildCoverImageData'
// - Renamed export '_L' to 'getCoverThumbnailUrl'
// - Renamed export 'aM' to 'getCoverSourceValue'
// - Renamed export 'ye' to 'getCoverSourceKey'
// - Renamed export 'lI' to 'getCoverPreviewUrl'
// - Renamed export 'yk' to 'coverImageApiPath'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 604470
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docxImageUrlUtils = require("docx-image-url-utils") /*id: 219802*/;
  var coverSourceType = require("cover-source-type") /*id: 650732*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  let a = "/api/box/stream/download/v2/cover";
  function s(e) {
    if (!e) {
      return "";
    }
    let {
      type: n,
      token: r,
      mime_type: o
    } = e;
    if (n === coverSourceType.coverSourceType.Other) {
      return "";
    } else {
      return h(r, o);
    }
  }
  function d(e) {
    if (!e) {
      return "";
    }
    let {
      type: n,
      token: r,
      url: o,
      mime_type: i
    } = e;
    if (n === coverSourceType.coverSourceType.Other) {
      return o;
    } else {
      return f(r, i);
    }
  }
  function f(e, n) {
    if (!e) {
      return "";
    }
    let r = new URL(platformDocUtils.Xa5(`/api/box/stream/download/preview/${e}/`, "drive_api"));
    r.searchParams.append("preview_type", "16");
    if (browserEnvironmentDetectionUtils.browserDetector.isMobile) {
      r.searchParams.append("type", "image");
    }
    if (browserEnvironmentDetectionUtils.browserDetector.isMobile) {
      r.searchParams.append("useOrigin", "1");
    }
    if (n && browserEnvironmentDetectionUtils.browserDetector.isMobile) {
      r.searchParams.append("contentType", n.split("/")[1] || "");
    }
    let o = r.toString();
    return docxImageUrlUtils.normalizeUrlProtocol(o);
  }
  function h(e, n, r = 360) {
    if (!e) {
      return "";
    }
    let o = {
      width: r,
      height: r,
      policy: "near"
    };
    if (n && browserEnvironmentDetectionUtils.browserDetector.isMobile) {
      o.contentType = n.split("/")[1] || "";
    }
    let c = platformDocUtils.Xa5(`${a}/${e}?${docxImageUrlUtils.serializeParams(o)}`, "drive_api");
    return docxImageUrlUtils.normalizeUrlProtocol(c);
  }
  let _ = e => !!e && !!e.type;
  let p = e => _(e) ? {
    type: e.type,
    offset_ratio_x: e.offset_ratio_x,
    offset_ratio_y: e.offset_ratio_y,
    [g(e.type)]: E(e),
    src: xssContentSanitizer.sanitizeUrl(d(e), null, {
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
      filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1qRjJXa2hX-zFwW$R-WlpNamt5$2xoSmRt%ll$bkJp%0%xM$pFaE9hR050WkR*amR6MDk"
    }),
    lightSrc: s(e),
    mime_type: e.mime_type,
    status: e.status
  } : null;
  function g(e) {
    if (e === coverSourceType.coverSourceType.Preset || e === coverSourceType.coverSourceType.Customize) {
      return "token";
    } else {
      return "url";
    }
  }
  function E(e) {
    let {
      type: n,
      token: r,
      url: o
    } = e;
    if (n === coverSourceType.coverSourceType.Preset || n === coverSourceType.coverSourceType.Customize) {
      return r;
    } else {
      return o;
    }
  }
  require.d(exports, {
    getCoverImageUrl: function () {
      return d;
    },
    isValidCoverSource: function () {
      return _;
    },
    getCoverImageUrlFromSource: function () {
      return s;
    },
    buildCoverImageData: function () {
      return p;
    },
    getCoverThumbnailUrl: function () {
      return h;
    },
    getCoverSourceValue: function () {
      return E;
    },
    getCoverSourceKey: function () {
      return g;
    },
    getCoverPreviewUrl: function () {
      return f;
    },
    coverImageApiPath: function () {
      return a;
    }
  });
}