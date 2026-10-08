// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'useOverlayRect'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: template_search_popover.30dbc5de.js
         * chunkId: 75647
         * moduleId: 878464
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var screenWidthObserverHook = require("screen-width-observer-hook") /*id: 741639*/;
  var overlayUiConstants = require("overlay-ui-constants") /*id: 645442*/;
  var uiLayoutPositionUtils = require("ui-layout-position-utils") /*id: 274647*/;
  var docxOverlayPositionSync = require("docx-overlay-position-sync") /*id: 662835*/;
  var reactViewportSizeHook = require("react-viewport-size-hook") /*id: 887539*/;
  let l = (t, e, n, i) => {
    let [o, s] = n;
    let a = i ? 6 : 12;
    if (browserEnvironmentDetectionUtils.browserDetector.ios || browserEnvironmentDetectionUtils.browserDetector.isWebKit) {
      return new DOMRect(t.x + a + o, Math.max(t.y, 0) + 12 + s, t.width - a * 2 - o * 2, (t.y > 0 ? Math.min(t.height, e.height - t.y) : e.height) - 24 - s * 2);
    } else {
      return new DOMRect(t.x + a + o, t.y + 12 + s, t.width - a * 2 - o * 2, t.height - 24 - s * 2);
    }
  };
  function h(t, e, n, r = [0, 0]) {
    let {
      isNarrowScreen: h
    } = screenWidthObserverHook.useScreenWidthObserver();
    let f = docxOverlayPositionSync.useOverlayPosition(t, e, n);
    let d = reactViewportSizeHook.useViewportSize(n);
    let [m, v] = reactCoreLibraryReexport.useState(() => l(f, d, r, h));
    reactCoreLibraryReexport.useEffect(() => {
      v(t => {
        let e = n ? l(f, d, r, h) : overlayUiConstants.defaultRect;
        if (uiLayoutPositionUtils.compareRects(t, e)) {
          return t;
        } else {
          return e;
        }
      });
    }, [f, d, r, n]);
    return m;
  }
  require.d(exports, {
    useOverlayRect: function () {
      return h;
    }
  });
}