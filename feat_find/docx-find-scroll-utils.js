// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'C' to 'scrollToFindResult'
// - Renamed export 'e' to 'getCoverHeight'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_find.9ec97f72.js
         * chunkId: 50944
         * moduleId: 514447
         */
module.exports = function (module, exports, require) {
  var docxCaptionConfig = require("docx-caption-config") /*id: 338988*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var elementAnimationUtils = require("element-animation-utils") /*id: 518404*/;
  var scrollMetricsUtils = require("scroll-metrics-utils") /*id: 884985*/;
  var docxFindReplaceConfig = require("docx-find-replace-config") /*id: 106059*/;
  var docFindRectUtilities = require("doc-find-rect-utilities") /*id: 122406*/;
  function s(e) {
    return !!e.getRecord(e.getRootRecordId()).snapshot.cover && document.querySelector(`.${docxCaptionConfig.wrapperClass}`)?.clientHeight || 0;
  }
  function u(e) {
    let o;
    let r;
    let i;
    let s;
    let {
      scrollContainer: u,
      startTop: f,
      endBottom: h,
      left: g,
      right: k,
      horizonScrollContainer: b
    } = e;
    let {
      isMobile: v
    } = browserEnvironmentDetectionUtils.browserDetector;
    if (v) {
      i = "html, body";
      o = window.scrollY;
      r = window._currentViewHeight ?? window.innerHeight;
      s = docxFindReplaceConfig.maxCommentLength;
    } else {
      i = u;
      o = scrollMetricsUtils.getScrollTop(i);
      r = scrollMetricsUtils.getVisibleHeight(i);
      s = docxFindReplaceConfig.highlightDelay;
    }
    let m = o + s;
    let y = o + r;
    let B = [];
    if (v || f <= m || h >= y) {
      let e = docFindRectUtilities.roundNumber(f) - s;
      if (Math.max(e -= v ? r / 3 : 0, 0) !== o) {
        let r = e - o;
        let n = i === "html, body" ? document.querySelector(i) : i;
        if (Math.abs(r) > 900) {
          let r = e + (o < e ? -300 : 300);
          n.scrollTo(0, r);
        }
        new Promise(o => {
          elementAnimationUtils.animateElement({
            ele: n,
            styles: {
              scrollTop: e
            },
            duration: 250,
            complete: o
          });
        });
      }
    }
    if (b && k !== undefined && g !== undefined) {
      let e;
      let {
        width: o
      } = b.getBoundingClientRect();
      let {
        scrollLeft: r,
        offsetLeft: i
      } = b;
      let n = k - g;
      g -= i;
      k -= i;
      if (n >= o) {
        e = g;
      } else if (k <= r || g >= o + r) {
        e = g;
      } else {
        if (k >= r + o) {
          e = k - n;
        }
        if (g < r) {
          e = g;
        }
      }
      if (e !== undefined) {
        B.push(new Promise(o => {
          $(b).animate({
            scrollLeft: e
          }, 250, "swing", o);
        }));
      }
    }
    return Promise.all(B);
  }
  require.d(exports, {
    scrollToFindResult: function () {
      return u;
    },
    getCoverHeight: function () {
      return s;
    }
  });
}