// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'useCopyButton'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 10991.1ee21c16.js
         * chunkId: 10991
         * moduleId: 418998
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var samanthaToastFactory = require("samantha-toast-factory") /*id: 697541*/;
  var svgCheckIcon = require("svg-check-icon") /*id: 362340*/;
  var ringOutlinedIcon = require("ring-outlined-icon") /*id: 112124*/;
  exports.useCopyButton = e => {
    let {
      handle: t,
      toastContent: a
    } = e;
    let [o, l] = reactCoreLibraryReexport.useState(false);
    let [d, c] = reactCoreLibraryReexport.useState(false);
    let [u, h] = reactCoreLibraryReexport.useState(false);
    let p = reactCoreLibraryReexport.useRef(-1);
    let f = reactCoreLibraryReexport.useMemo(() => o ? svgCheckIcon.CheckIcon : ringOutlinedIcon.RingOutlinedIcon, [o, d]);
    reactCoreLibraryReexport.useEffect(() => {
      if (o) {
        p.current = Number(setTimeout(() => {
          l(false);
        }, 3000));
      }
    }, [o]);
    return {
      onCopyClick: async () => {
        c(true);
        await t();
        l(true);
        c(false);
        if (a) {
          samanthaToastFactory.toastInstance.success(a);
        }
      },
      onMouseLeave: () => {
        h(true);
      },
      onMouseEnter: () => {
        h(false);
        if (u) {
          l(false);
          clearTimeout(p.current);
        }
      },
      CopyIcon: f,
      checked: o
    };
  };
}