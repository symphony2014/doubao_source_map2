// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'a' to 'markdownRendererComponentWrapper'
// - Resolved require(880688) to 'markdown-renderer-component-wrapper'
// - Renamed variable 'e' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 76341.f064f373.js
         * chunkId: 76341
         * moduleId: 885968
         */
module.exports = function (module, exports, require) {
  var markdownRendererComponentWrapper = require("markdown-renderer-component-wrapper") /*id: 880688*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  exports.default = t => {
    let {
      message: _
    } = t;
    let o = (_ == null ? undefined : _.content_obj?.text) || "";
    return reactJsxRuntimeCoreReexport.jsx(markdownRendererComponentWrapper.MdBoxLazy, {
      markDown: o,
      theme: "samantha",
      autoFixSyntax: {
        autoFixEnding: false
      },
      forceBrInterSpacing: true
    });
  };
  require.r(exports);
}