// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'useSelectionChange'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 92677.dc8034b0.js
         * chunkId: 92677
         * moduleId: 472242
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var docxFeatureFlags = require("docx-feature-flags") /*id: 939543*/;
  function s(e) {
    let [n, r] = reactCoreLibraryReexport.useState(false);
    let s = reactCoreLibraryReexport.useRef(false);
    let l = docxFeatureFlags.isMobileMemoryLeakFixV3();
    reactCoreLibraryReexport.useEffect(() => {
      let e = () => {
        r(true);
      };
      let n = () => {
        if (!l || !s.current) {
          document.addEventListener("selectionchange", e);
          s.current = true;
        }
      };
      let i = () => {
        if (!l || s.current) {
          document.removeEventListener("selectionchange", e);
          r(false);
          s.current = false;
        }
      };
      document.addEventListener("touchmove", n);
      document.addEventListener("touchend", i);
      return () => {
        document.removeEventListener("touchmove", n);
        document.removeEventListener("touchend", i);
        if (l) {
          document.removeEventListener("selectionchange", e);
        }
      };
    }, [e]);
    return n;
  }
  require.d(exports, {
    useSelectionChange: function () {
      return s;
    }
  });
}