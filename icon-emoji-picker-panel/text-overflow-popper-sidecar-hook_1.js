// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'p' to 'useTextOverflowPopperSidecar'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 20536.778f9caf.js
         * chunkId: 20536
         * moduleId: 479931
         */
module.exports = function (module, exports, require) {
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactContextSelector = require("react-context-selector") /*id: 65860*/;
  var uiGlobalConfigContext = require("ui-global-config-context") /*id: 698735*/;
  var tooltipComponentModule = require("tooltip-component-module") /*id: 91247*/;
  var l = ["title"];
  function s(e) {
    var t = e.title;
    var n = objectOmitHelper_1.omitWithSymbols(e, l);
    return reactCoreLibraryReexport.createElement(tooltipComponentModule.TooltipComponent, objectAssignUtil.objectAssign({
      title: t,
      checkOverflow: true
    }, n));
  }
  function f() {
    return reactContextSelector.useContextSelector(uiGlobalConfigContext.UiGlobalConfigContext, function (e) {
      return e.textOverflowPopperSidecar;
    }) ?? s;
  }
  require.d(exports, {
    useTextOverflowPopperSidecar: function () {
      return f;
    }
  });
}