// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'p' to 'useTextOverflowPopperSidecar'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 438136
         */
module.exports = function (module, exports, require) {
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactContextSelector = require("react-context-selector") /*id: 65860*/;
  var enUsLocaleContext = require("en-us-locale-context") /*id: 812811*/;
  var tooltipWrapperComponent_1 = require("tooltip-wrapper-component_1") /*id: 943532*/;
  var s = ["title"];
  function d(e) {
    var n = e.title;
    var r = objectOmitHelper_1.omitWithSymbols(e, s);
    return reactCoreLibraryReexport.createElement(tooltipWrapperComponent_1.TooltipWrapper, objectAssignUtil.objectAssign({
      title: n,
      checkOverflow: true
    }, r));
  }
  function h() {
    return reactContextSelector.useContextSelector(enUsLocaleContext.EnUsLocaleContext, function (e) {
      return e.textOverflowPopperSidecar;
    }) ?? d;
  }
  require.d(exports, {
    useTextOverflowPopperSidecar: function () {
      return h;
    }
  });
}