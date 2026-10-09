// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'AO' to 'getPlatformClasses'
// - Renamed export 'Yo' to 'getElementBounds'
// - Renamed export 'qK' to 'getCaretFromPoint'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 13032.fea06b08.js
         * chunkId: 13032
         * moduleId: 685116
         */
module.exports = function (module, exports, require) {
  var browserDetectUtils = require("browser-detect-utils") /*id: 749406*/;
  function o(e) {
    if (!(e instanceof Element)) {
      return {
        width: 0,
        height: 0,
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      };
    }
    var t = window.getComputedStyle(e);
    var n = (parseFloat(t.paddingLeft) || 0) + (parseFloat(t.paddingRight) || 0);
    var i = (parseFloat(t.paddingTop) || 0) + (parseFloat(t.paddingBottom) || 0);
    var t = e.getBoundingClientRect();
    return {
      width: e.clientWidth - n,
      height: e.clientHeight - i,
      left: t.left,
      right: t.right,
      top: t.top,
      bottom: t.bottom
    };
  }
  function r(e, t) {
    var n;
    var i;
    var o = null;
    if (document.caretPositionFromPoint) {
      if (o = document.caretPositionFromPoint(e, t)) {
        n = o.offsetNode;
        i = o.offset;
      }
    } else if (document.caretRangeFromPoint && (o = document.caretRangeFromPoint(e, t))) {
      n = o.startContainer;
      i = o.startOffset;
    }
    return {
      range: o,
      textNode: n,
      offset: i
    };
  }
  function s() {
    var e = "";
    if (!!browserDetectUtils.platformInfo.mobile && (!browserDetectUtils.platformInfo.isIPad || !!browserDetectUtils.platformInfo.isBytedanceApp)) {
      e += " editor-kit-mobile ";
      if (browserDetectUtils.platformInfo.isAndroid) {
        e += " android ";
      } else if (browserDetectUtils.platformInfo.isIOS) {
        e += " ios ";
      }
    }
    if (browserDetectUtils.platformInfo.isIPad) {
      e += " ipad ";
    }
    return e;
  }
  require.d(exports, {
    getPlatformClasses: function () {
      return s;
    },
    getElementBounds: function () {
      return o;
    },
    getCaretFromPoint: function () {
      return r;
    }
  });
}