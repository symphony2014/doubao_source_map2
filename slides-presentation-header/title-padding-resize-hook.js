// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'L' to 'useTitlePadding'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 99448.e1905545.js
         * chunkId: 99448
         * moduleId: 588998
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var debounceUtilWrapper = require("debounce-util-wrapper") /*id: 213804*/;
  var userAgentDeviceDetector = require("user-agent-device-detector") /*id: 161498*/;
  function a() {
    let e = reactCoreLibraryReexport.useRef(null);
    let [t, s] = reactCoreLibraryReexport.useState(undefined);
    reactCoreLibraryReexport.useEffect(() => {
      let {
        protocol: t
      } = window.location;
      if (t === "https:" || !userAgentDeviceDetector.isMac) {
        s(undefined);
        return;
      }
      let n = debounceUtilWrapper.createDebounce(() => {
        if (!e.current) {
          s(0);
          return;
        }
        let {
          width: t = 0
        } = e.current.getBoundingClientRect() || {};
        if (Math.abs(t - window.innerWidth) < 5) {
          s(65);
        } else {
          s(0);
        }
      }, 100);
      window.addEventListener("resize", n);
      let a = setTimeout(n, 100);
      return () => {
        clearTimeout(a);
        window.removeEventListener("resize", n);
      };
    }, []);
    return {
      titlePadding: t,
      wrapperRef: e
    };
  }
  require.d(exports, {
    useTitlePadding: function () {
      return a;
    }
  });
}