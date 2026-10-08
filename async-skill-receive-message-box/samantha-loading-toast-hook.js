// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'M' to 'useLoadingToast'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 170954
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var promiseAsyncUtilities = require("promise-async-utilities") /*id: 592307*/;
  var useOnUnmountHook = require("use-on-unmount-hook") /*id: 297204*/;
  var semiSpinComponent = require("semi-spin-component") /*id: 714437*/;
  var samanthaToastFactory = require("samantha-toast-factory") /*id: 697541*/;
  var s = {
    "loading-toast": "loading-toast-ezF7Ac"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let d = e => {
    let {
      text: t,
      closeWhenUnmount: n = true
    } = e;
    let d = reactCoreLibraryReexport.useRef(false);
    let u = reactCoreLibraryReexport.useRef();
    let _ = () => {
      if (u.current) {
        samanthaToastFactory.toastInstance.close(u.current);
        u.current = undefined;
      }
    };
    let m = async e => {
      d.current = e;
      if (e) {
        await promiseAsyncUtilities.createDelayedPromise(200);
        if (d.current) {
          u.current = samanthaToastFactory.toastInstance.info({
            icon: reactJsxRuntimeCoreReexport.jsx(semiSpinComponent.Spin, {
              size: "small",
              wrapperClassName: s["loading-toast"]
            }),
            content: t,
            duration: 0
          });
        }
      } else {
        _();
      }
    };
    useOnUnmountHook.useOnUnmount(() => {
      if (n) {
        _();
      }
    });
    return {
      loadingRef: d,
      setLoading: m
    };
  };
  require.d(exports, {
    useLoadingToast: function () {
      return d;
    }
  });
}