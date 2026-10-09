// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'u' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 63647.7faa45fb.js
         * chunkId: 63647
         * moduleId: 832640
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let s = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let r = reactCoreLibraryReexport.useRef(null);
    reactCoreLibraryReexport.useImperativeHandle(t, () => ({
      setText(e) {
        if (r.current) {
          r.current.innerText = e;
        }
      },
      getTextWidth() {
        return r.current?.offsetWidth;
      }
    }));
    return reactJsxRuntimeCoreReexport.jsx("span", {
      className: "text-d4I9eR",
      ref: r
    });
  });
  require.r(exports);
  require.d(exports, {
    TextareaWidthMeasure: function () {
      return s;
    }
  });
}