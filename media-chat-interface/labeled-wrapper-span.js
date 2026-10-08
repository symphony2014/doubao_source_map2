// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'a' to 'LabeledWrapperSpan'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: sync-input-engine-infra-interactive.075fd8a3.js
         * chunkId: 49765
         * moduleId: 629142
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var a = {
    container: "container-YafRKs",
    hoverable: "hoverable-U4zH4h"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let l = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      children: n,
      className: r,
      hoverable: i = false,
      useV3: l = false,
      ...u
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("span", {
      "data-testid": "labeled_wrapper_span",
      ...u,
      className: o(l ? "px-6 inline-block h-22 items-center rounded-dbx-md bg-dbx-fill-trans-20 text-dbx-text-primary text-16 leading-22 mx-3" : a.container, r, {
        [l ? "hover:cursor-pointer hover:bg-dbx-fill-trans-20-hover" : a.hoverable]: i
      }),
      ref: t,
      suppressContentEditableWarning: true,
      children: n
    });
  });
  require.d(exports, {
    LabeledWrapperSpan: function () {
      return l;
    }
  });
}