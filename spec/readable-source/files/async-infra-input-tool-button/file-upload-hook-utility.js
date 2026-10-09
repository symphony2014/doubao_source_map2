// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'a' to 'useFileUpload'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-tool-button.182dfecb.js
         * chunkId: 22819
         * moduleId: 185856
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let o = e => {
    let {
      onFilesChange: t,
      testId: n,
      fileTypes: o = [],
      multiple: l = false
    } = e;
    let s = reactCoreLibraryReexport.useRef(null);
    let c = () => void (s.current && (s.current.value = ""));
    let u = () => {
      var e;
      if ((e = s.current) === null || e === undefined) {
        return undefined;
      } else {
        return e.click();
      }
    };
    let d = reactCoreLibraryReexport.useMemo(() => o.map(e => `.${e}`).join(","), [o]);
    let p = reactFunctionMemoHook.useMemoizedCallback(e => {
      if (e != null) {
        e.stopPropagation();
      }
      c();
      u();
    });
    let h = reactFunctionMemoHook.useMemoizedCallback(e => {
      if (e.target.files) {
        if (t != null) {
          t([...e.target.files]);
        }
      }
    });
    let f = reactCoreLibraryReexport.useMemo(() => reactJsxRuntimeCoreReexport.jsx("input", {
      "data-testid": n || "",
      ref: s,
      className: "hidden",
      multiple: l,
      type: "file",
      accept: d,
      onChange: h
    }), [d, n]);
    reactCoreLibraryReexport.useEffect(() => {
      let e = e => {
        let {
          clipboardData: i
        } = e;
        if (i == null ? undefined : i.files?.length) {
          if (t != null) {
            t([...i.files]);
          }
          e.preventDefault();
        }
      };
      document.addEventListener("paste", e, true);
      return () => {
        document.removeEventListener("paste", e, true);
      };
    }, [t]);
    return {
      handleClickButton: p,
      inputElement: f
    };
  };
  require.d(exports, {
    useFileUpload: function () {
      return o;
    }
  });
}