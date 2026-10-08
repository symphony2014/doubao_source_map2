// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'EW' to 'useFocusGuard'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 16352.bcbc6b55.js
         * chunkId: 16352
         * moduleId: 441896
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var r = 0;
  function i() {
    reactCoreLibraryReexport.useEffect(() => {
      let n = document.querySelectorAll("[data-radix-focus-guard]");
      document.body.insertAdjacentElement("afterbegin", n[0] ?? s());
      document.body.insertAdjacentElement("beforeend", n[1] ?? s());
      r++;
      return () => {
        if (r === 1) {
          document.querySelectorAll("[data-radix-focus-guard]").forEach(e => e.remove());
        }
        r--;
      };
    }, []);
  }
  function s() {
    let e = document.createElement("span");
    e.setAttribute("data-radix-focus-guard", "");
    e.tabIndex = 0;
    e.style.outline = "none";
    e.style.opacity = "0";
    e.style.position = "fixed";
    e.style.pointerEvents = "none";
    return e;
  }
  require.d(exports, {
    useFocusGuard: function () {
      return i;
    }
  });
}