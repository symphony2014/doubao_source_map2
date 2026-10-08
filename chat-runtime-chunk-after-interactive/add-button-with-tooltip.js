// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'b' to 'AddButton'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-chat-input.dc86588e.js
         * chunkId: 1779
         * moduleId: 538250
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var plusCircleRtlIcon = require("plus-circle-rtl-icon") /*id: 973157*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let l = reactCoreLibraryReexport.lazy(async () => ({
    default: await Promise.all([require.e("ui-avatar-typography-tag") /*id: 71518*/, require.e("form-validation-utils") /*id: 80045*/, require.e("semi-ui-form-controls") /*id: 35606*/]).then(require.bind(require, "samantha-ui-components") /*id: 844464*/).then(e => e.SamanthaTooltip)
  }));
  function u(e) {
    let {
      onClick: t,
      className: n,
      tooltipContent: r,
      enableTooltip: u = true,
      ...c
    } = e;
    let d = reactJsxRuntimeCoreReexport.jsx("div", {
      className: o("container-svXYmE", n),
      onClick: t,
      ...c,
      children: reactJsxRuntimeCoreReexport.jsx(plusCircleRtlIcon.PlusCircleIcon, {
        className: "icon-TUP5xX"
      })
    });
    if (u) {
      return reactJsxRuntimeCoreReexport.jsx(reactCoreLibraryReexport.Suspense, {
        fallback: d,
        children: reactJsxRuntimeCoreReexport.jsx(l, {
          content: r,
          className: o({
            "!hidden": !r
          }, "text-11 leading-14"),
          children: d
        })
      });
    } else {
      return d;
    }
  }
  require.d(exports, {
    AddButton: function () {
      return u;
    }
  });
}