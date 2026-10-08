// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'd' to 'useScreenWidthObserver'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: template_search_popover.30dbc5de.js
         * chunkId: 75647
         * moduleId: 741639
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var docxEditorConstantsConfig = require("docx-editor-constants-config") /*id: 302915*/;
  var docComponentFeatureFlags = require("doc-component-feature-flags") /*id: 475581*/;
  var resizeObserverUtil = require("resize-observer-util") /*id: 976180*/;
  function a() {
    let [t, e] = reactCoreLibraryReexport.useState(false);
    let [n, a] = reactCoreLibraryReexport.useState(false);
    let u = reactCoreLibraryReexport.useRef(0);
    let c = (t, n) => {
      if (n) {
        let t = n.offsetWidth;
        u.current = t;
        if (t < docxEditorConstantsConfig.maxContentWidth) {
          e(true);
        } else {
          e(false);
        }
        if (t < 400 && docComponentFeatureFlags.isRoomsAgenda()) {
          a(true);
        } else {
          a(false);
        }
      }
    };
    reactCoreLibraryReexport.useEffect(() => {
      resizeObserverUtil.getResizeObserver().onResize(c);
      return () => {
        resizeObserverUtil.getResizeObserver().offResize(c);
      };
    }, []);
    return {
      isNarrowScreen: t,
      isRoomsNarrowScreen: n,
      containerWidth: u.current
    };
  }
  require.d(exports, {
    useScreenWidthObserver: function () {
      return a;
    }
  });
}