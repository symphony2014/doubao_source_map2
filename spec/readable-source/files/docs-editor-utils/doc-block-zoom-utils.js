// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'L6' to 'getZoomedBoundingClientRect'
// - Renamed export 'UQ' to 'isPresentationMode'
// - Renamed export 'at' to 'calculateElementZoom'
// - Renamed export 'jE' to 'getPresentationZoomConfig'
// - Renamed export 'rb' to 'getDefaultLineHeight'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 735944
         */
module.exports = function (module, exports, require) {
  var versionCompareUtil = require("version-compare-util") /*id: 147266*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  let c = browserEnvironmentDetectionUtils.browserDetector.isChrome && versionCompareUtil.compareVersions(`${browserEnvironmentDetectionUtils.browserDetector.version}`, "128");
  function u() {
    return docBlockTypeConstants.defaultLineHeight;
  }
  function a(e) {
    return !!e.closest(`.${docBlockTypeConstants.presentationZoomStyle}`) || !!e.closest(".presentation-mode-mask .page-block-header");
  }
  function s(e, n = false) {
    let r = 1;
    let o = e;
    while (o && o.tagName.toLowerCase() !== "html") {
      let e = window.getComputedStyle(o).zoom;
      if (n && browserEnvironmentDetectionUtils.browserDetector.firefox && o.hasAttribute("data-zoom")) {
        e = o.getAttribute("data-zoom");
      }
      r *= parseFloat(e) || 1;
      o = o.parentElement;
    }
    return r;
  }
  function d(e) {
    let n = e.getBoundingClientRect();
    let r = u();
    if (c) {
      return n;
    } else if (a(e) && !browserEnvironmentDetectionUtils.browserDetector.firefox) {
      return new DOMRect(r * n.x, r * n.y, r * n.width, r * n.height);
    } else {
      return n;
    }
  }
  function f(e) {
    let {
      isPresentationMode: n
    } = e.recursionProps;
    let {
      type: r
    } = e.struct;
    if (n) {
      let n = s(e.hostElementRef.current);
      if ([docBlockTypeConstants.blockTypeConstants.SHEET, docBlockTypeConstants.blockTypeConstants.BITABLE, docBlockTypeConstants.blockTypeConstants.BASE_REFER, docBlockTypeConstants.blockTypeConstants.JIRA_FILTER].includes(r)) {
        return {
          hostElementZoom: n,
          scrollContainerZoom: 1
        };
      }
      if (r === docBlockTypeConstants.blockTypeConstants.TABLE) {
        return {
          hostElementZoom: n,
          scrollContainerZoom: u()
        };
      }
    }
    return {
      hostElementZoom: 1,
      scrollContainerZoom: 1
    };
  }
  require.d(exports, {
    getZoomedBoundingClientRect: function () {
      return d;
    },
    isPresentationMode: function () {
      return a;
    },
    calculateElementZoom: function () {
      return s;
    },
    getPresentationZoomConfig: function () {
      return f;
    },
    getDefaultLineHeight: function () {
      return u;
    }
  });
}