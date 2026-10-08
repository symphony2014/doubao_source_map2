// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A_' to 'applyStyles'
// - Renamed export 'Ew' to 'downloadImageAsBlob'
// - Renamed export 'IV' to 'removeClass'
// - Renamed export 'M5' to 'isPointInsideElement'
// - Renamed export 'NH' to 'addEventListener'
// - Renamed export 'Nx' to 'isEdgeWithinViewport'
// - Renamed export 'P$' to 'setAttribute'
// - Renamed export 'cn' to 'addClass'
// - Renamed export 'e4' to 'isImageOversized'
// - Renamed export 'f2' to 'isScrollAtEdge'
// - Renamed export 'f8' to 'isCtrlOrMetaKey'
// - Renamed export 'lO' to 'isInsideImageViewer'
// - Renamed export 'ys' to 'removeEventListener'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: image_viewer.6692a311.js
         * chunkId: 38626
         * moduleId: 541428
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var browserDetectionUtil = require("browser-detection-util") /*id: 178370*/;
  var a = browserDetectionUtil;
  var documentOverflowAndDimensionsUtils = require("document-overflow-and-dimensions-utils") /*id: 319019*/;
  var imageViewerConstantsConfig = require("image-viewer-constants-config") /*id: 655825*/;
  function h(e) {
    var i = arguments.length;
    var n = Array(i > 1 ? i - 1 : 0);
    var r = 1;
    for (; r < i; r++) {
      n[r - 1] = arguments[r];
    }
    e.classList.add(...n);
  }
  function c(e) {
    var i = arguments.length;
    var n = Array(i > 1 ? i - 1 : 0);
    var r = 1;
    for (; r < i; r++) {
      n[r - 1] = arguments[r];
    }
    e.classList.remove(...n);
  }
  function d(e, i, n) {
    e.setAttribute(i, n);
  }
  function m(e, i) {
    Object.assign(e.style, i);
  }
  function u(e, i, n, r) {
    e.addEventListener(i, n, r);
  }
  function g(e, i, n, r) {
    e.removeEventListener(i, n, r);
  }
  function f(e) {
    if (a.mac) {
      return e.metaKey;
    } else {
      return e.ctrlKey;
    }
  }
  function p(e, i) {
    let n = e.getBoundingClientRect();
    let {
      width: r,
      height: o
    } = documentOverflowAndDimensionsUtils.getDocumentDimensions();
    return {
      isBottomEdge: o - n.bottom >= 0,
      isTopEdge: n.top >= 0,
      isLeftEdge: n.left >= 0,
      isRightEdge: r - n.right >= 0
    };
  }
  function w(e, i) {
    let {
      isBottomEdge: n,
      isTopEdge: r,
      isLeftEdge: o,
      isRightEdge: a
    } = i;
    if (e.deltaY !== 0) {
      if (e.deltaY < 0) {
        return r;
      } else {
        return n;
      }
    } else {
      return e.deltaX === 0 || (e.deltaX < 0 ? o : a);
    }
  }
  function v(e, i) {
    let {
      top: n,
      right: r,
      bottom: o,
      left: a
    } = i.getBoundingClientRect();
    let {
      x: s,
      y: l
    } = e;
    return s >= a && l <= r && l >= n && l <= o;
  }
  function b(e) {
    let {
      name: i = "",
      container: n,
      imageInfo: r
    } = e;
    let {
      width: o,
      height: a
    } = n;
    let {
      left: s,
      top: l,
      element: h
    } = r;
    let c = document.createElement("canvas");
    c.width = o;
    c.height = a;
    let d = c.getContext("2d");
    if (h == null ? undefined : h.complete) {
      if (d != null) {
        d.drawImage(h, Number(`-${s}`), Number(`-${l}`));
      }
      c.toBlob(e => {
        if (e) {
          I(e, i);
        }
      });
      return;
    }
    if (h != null) {
      h.addEventListener("load", () => {
        if (d != null) {
          d.drawImage(h, Number(`-${s}`), Number(`-${l}`));
        }
        c.toBlob(e => {
          if (e) {
            I(e, i);
          }
        });
      });
    }
  }
  function I(e, i) {
    let n = URL.createObjectURL(e);
    let o = document.createElement("a", {
      fileInfo: {
        usePermission: false,
        suiteType: 22
      }
    });
    let a = new MouseEvent("click");
    o.download = i;
    o.href = xssContentSanitizer.sanitizeUrl(n, null, {
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
      filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1qRjJXa2hX-zFwW$R-WmhWekZv$2pK$mRH%nRiR3hrTWxaN$RETmFjRnBZWkd4amF%a3haRWRz-zJON%5%QmpNa1o1$2pO$2$nPT0"
    });
    o.dispatchEvent(a);
    URL.revokeObjectURL(n);
  }
  function R(e) {
    let {
      width: i,
      height: n
    } = e;
    let {
      height: r
    } = documentOverflowAndDimensionsUtils.getDocumentDimensions();
    return n / i > imageViewerConstantsConfig.maxZoomLevel && n >= r && i > imageViewerConstantsConfig.defaultHeight;
  }
  function y(e) {
    var i;
    return !!(e == null ? undefined : (i = e.closest) === null || i === undefined ? undefined : i.call(e, `.${imageViewerConstantsConfig.clsImageViewer}`));
  }
  require.d(exports, {
    applyStyles: function () {
      return m;
    },
    downloadImageAsBlob: function () {
      return b;
    },
    removeClass: function () {
      return c;
    },
    isPointInsideElement: function () {
      return v;
    },
    addEventListener: function () {
      return u;
    },
    isEdgeWithinViewport: function () {
      return p;
    },
    setAttribute: function () {
      return d;
    },
    addClass: function () {
      return h;
    },
    isImageOversized: function () {
      return R;
    },
    isScrollAtEdge: function () {
      return w;
    },
    isCtrlOrMetaKey: function () {
      return f;
    },
    isInsideImageViewer: function () {
      return y;
    },
    removeEventListener: function () {
      return g;
    }
  });
}