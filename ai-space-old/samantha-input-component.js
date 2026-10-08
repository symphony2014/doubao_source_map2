// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'K' to 'SamanthaInput'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-after-interactive-ai-creation-guidance.67ffc317.js
         * chunkId: 15933
         * moduleId: 214717
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var semiInputComponent = require("semi-input-component") /*id: 410861*/;
  var s = {
    "samantha-input": "samantha-input-oqUBN1",
    samanthaInput: "samantha-input-oqUBN1"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let c = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      type: n = "primary",
      size: r = "medium",
      ...i
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(semiInputComponent.InputComponent, {
      ref: t,
      ...i,
      type: "primary",
      size: "default",
      className: o(s["samantha-input"], s[n], s[r], i.className),
      children: e.children
    });
  });
  require.d(exports, {
    SamanthaInput: function () {
      return c;
    }
  });
}