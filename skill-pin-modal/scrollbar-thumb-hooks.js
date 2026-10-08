// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D' to 'useScrollbarThumb'
// - Renamed export 's' to 'useScrollVisibility'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: skill-pin-modal.533b7e90.js
         * chunkId: 13221
         * moduleId: 775173
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  var useDebouncedCallbackHook_1 = require("use-debounced-callback-hook_1") /*id: 366474*/;
  var scrollbarThumbStyles = require("scrollbar-thumb-styles") /*id: 972537*/;
  let l = () => {
    let [e, t] = reactCoreLibraryReexport.useState(false);
    let n = reactCoreLibraryReexport.useMemo(() => debounceUtil_1_1.debounce(() => t(false), 300, {
      leading: false,
      trailing: true
    }), []);
    let o = reactCoreLibraryReexport.useCallback(() => {
      if (!e) {
        t(true);
      }
      n();
    }, [e]);
    return {
      className: e ? scrollbarThumbStyles.scrollbarThumbStyles["show-scrollbar-thumb"] : "",
      onScroll: o
    };
  };
  let a = e => {
    let {
      onVisibleChange: t
    } = e;
    let n = reactCoreLibraryReexport.useRef(false);
    let r = e => {
      if (e !== n.current) {
        n.current = e;
        if (t != null) {
          t(e);
        }
      }
    };
    let {
      run: s
    } = useDebouncedCallbackHook_1.useDebouncedCallback(() => {
      r(false);
    }, {
      wait: 300,
      leading: false,
      trailing: true
    });
    return {
      onScroll: () => {
        if (!n.current) {
          r(true);
        }
        s();
      }
    };
  };
  require.d(exports, {
    useScrollbarThumb: function () {
      return l;
    },
    useScrollVisibility: function () {
      return a;
    }
  });
}