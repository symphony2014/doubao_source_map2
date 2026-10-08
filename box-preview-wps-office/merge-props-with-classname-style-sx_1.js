// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'z' to 'mergeProps'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ud_picker_panel.f0d55fc1.js
         * chunkId: 11294
         * moduleId: 905758
         */
module.exports = function (module, exports, require) {
  var objectPropertyAssign = require("object-property-assign") /*id: 526210*/;
  var conditionalClassnames = require("conditional-classnames") /*id: 820269*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  function a(e, t) {
    return objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, e), {}, {
      className: conditionalClassnames.default(t.className, e.className),
      style: reactCoreLibraryReexport.useMemo(function () {
        return objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, t.style), e.style);
      }, [t.style, e.style]),
      sx: reactCoreLibraryReexport.useMemo(function () {
        return [t.sx, e.sx];
      }, [t.sx, e.sx])
    });
  }
  require.d(exports, {
    mergeProps: function () {
      return a;
    }
  });
}