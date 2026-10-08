// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'l' to 'CloseIconButton'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 10991.1ee21c16.js
         * chunkId: 10991
         * moduleId: 195712
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classNamesMergeUtil = require("class-names-merge-util") /*id: 67381*/;
  var closeIconComponent_1 = require("close-icon-component_1") /*id: 315885*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let o = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      className: a,
      ...r
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("button", {
      ref: t,
      className: classNamesMergeUtil.mergeClassNames(`
            relative inline-flex size-[14px] shrink-0 cursor-pointer
            items-center justify-center rounded-full bg-dbx-neutral-300
            text-dbx-static-white transition-colors duration-200 outline-none
            before:absolute before:inset-[-4px] before:content-[""]
            hover:bg-dbx-neutral-500
            focus-visible:outline-solid
          `, a),
      ...r,
      children: reactJsxRuntimeCoreReexport.jsx(closeIconComponent_1.CloseIcon, {
        className: "size-[10px] shrink-0"
      })
    });
  });
  require.d(exports, {
    CloseIconButton: function () {
      return o;
    }
  });
}