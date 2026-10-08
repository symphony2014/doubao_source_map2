// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B' to 'withPresentationZoom'
// - Renamed export 'e' to 'ZoomableDiv'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 782308
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docBlockZoomUtils = require("doc-block-zoom-utils") /*id: 735944*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let a = e => reactCoreLibraryReexport.forwardRef((i, r) => {
    let a = reactCoreLibraryReexport.useRef(null);
    let {
      isPresentationMode: c,
      ...d
    } = i;
    reactCoreLibraryReexport.useEffect(() => r ? typeof r == "function" ? (r(a.current), () => {
      r(null);
    }) : (r.current = a.current, () => {
      r.current = null;
    }) : undefined, [r]);
    reactCoreLibraryReexport.useEffect(() => {
      if (!c || browserEnvironmentDetectionUtils.browserDetector.firefox) {
        return;
      }
      let e = a.current;
      if (!e) {
        return;
      }
      let i = e.getBoundingClientRect.bind(e);
      e.getBoundingClientRect = () => {
        let e = i();
        let r = docBlockZoomUtils.getDefaultLineHeight();
        return new DOMRect(r * e.x, r * e.y, r * e.width, r * e.height);
      };
      return () => {
        e.getBoundingClientRect = i;
      };
    }, [c]);
    if (typeof e == "string") {
      return reactCoreLibraryReexport.createElement(e, {
        ...d,
        ref: a
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx(e, {
        ...d,
        ref: a
      });
    }
  });
  let c = a("div");
  require.d(exports, {
    withPresentationZoom: function () {
      return a;
    },
    ZoomableDiv: function () {
      return c;
    }
  });
}