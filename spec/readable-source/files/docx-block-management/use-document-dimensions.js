// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'S' to 'useDocumentDimensions'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: template_search_popover.30dbc5de.js
         * chunkId: 75647
         * moduleId: 692822
         */
module.exports = function (module, exports, require) {
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var documentOverflowAndDimensionsUtils = require("document-overflow-and-dimensions-utils") /*id: 319019*/;
  function s(t) {
    let [e, n] = reactCoreLibraryReexport.useState(documentOverflowAndDimensionsUtils.getDocumentDimensions);
    reactCoreLibraryReexport.useEffect(() => {
      if (t) {
        let t = () => {
          n(t => {
            let e = documentOverflowAndDimensionsUtils.getDocumentDimensions();
            if (deepEqualUtil_1.deepEqual(e, t)) {
              return t;
            } else {
              return e;
            }
          });
        };
        window.addEventListener("resize", t);
        return () => {
          window.removeEventListener("resize", t);
        };
      }
    }, [t]);
    return e;
  }
  require.d(exports, {
    useDocumentDimensions: function () {
      return s;
    }
  });
}