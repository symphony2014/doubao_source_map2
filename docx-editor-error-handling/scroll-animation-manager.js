// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'J3' to 'stopScrollAnimation'
// - Renamed export 'Ud' to 'scrollToPosition'
// - Renamed export 'gp' to 'clearAllScrollAnimations'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 5545
         */
module.exports = function (module, exports, require) {
  require("docx-revision-feature-checkers") /*id: 964037*/;
  var scrollMetricsUtils = require("scroll-metrics-utils") /*id: 884985*/;
  var elementAnimationUtils = require("element-animation-utils") /*id: 518404*/;
  let l = [];
  function s(e, i) {
    let r = !(arguments.length > 2) || arguments[2] === undefined || arguments[2];
    let s = arguments.length > 3 ? arguments[3] : undefined;
    let a = arguments.length > 4 ? arguments[4] : undefined;
    let c = arguments.length > 5 ? arguments[5] : undefined;
    try {
      var d;
      var u;
      if (r) {
        let r = scrollMetricsUtils.getScrollTop(e);
        let u = Math.max(Math.abs(r - i) / 3, 222);
        if (c != null && (d = c.beforeScroll) !== null && d !== undefined) {
          d.call(c);
        }
        elementAnimationUtils.animateElement({
          ele: e,
          styles: {
            scrollTop: i
          },
          duration: Math.min(u, 444),
          complete: s,
          fail: () => a == null ? undefined : a("scroll animate fail")
        });
        l.push(e.toString());
      } else {
        if (c != null && (u = c.beforeScroll) !== null && u !== undefined) {
          u.call(c);
        }
        if (e instanceof HTMLElement) {
          e.scrollTop = i;
        } else if (e instanceof Document && e.scrollingElement) {
          e.scrollingElement.scrollTop = i;
        }
        if (s != null) {
          s();
        }
      }
    } catch (e) {
      if (a != null) {
        a(e.toString());
      }
    }
  }
  function a(e) {
    elementAnimationUtils.stopAnimation({
      ele: e
    });
  }
  let c = () => {
    l.forEach(e => elementAnimationUtils.clearAnimationRecord(e));
    l.length = 0;
  };
  require.d(exports, {
    stopScrollAnimation: function () {
      return a;
    },
    scrollToPosition: function () {
      return s;
    },
    clearAllScrollAnimations: function () {
      return c;
    }
  });
}