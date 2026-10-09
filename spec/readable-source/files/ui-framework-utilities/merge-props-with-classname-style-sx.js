// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'z' to 'mergeProps'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 57660.2fb4f2ee.js
         * chunkId: 57660
         * moduleId: 473517
         */
module.exports = function (module, exports, require) {
  var objectPropertyAssign = require("object-property-assign") /*id: 526210*/;
  var conditionalClassnames = require("conditional-classnames") /*id: 820269*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  function a(e, n) {
    return objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, e), {}, {
      className: conditionalClassnames.default(n.className, e.className),
      style: reactCoreLibraryReexport.useMemo(function () {
        return objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, n.style), e.style);
      }, [n.style, e.style]),
      sx: reactCoreLibraryReexport.useMemo(function () {
        return [n.sx, e.sx];
      }, [n.sx, e.sx])
    });
  }
  require.d(exports, {
    mergeProps: function () {
      return a;
    }
  });
}