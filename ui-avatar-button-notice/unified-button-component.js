// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'zx' to 'UnifiedButton'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 64757.47c6d48d.js
         * chunkId: 64757
         * moduleId: 488299
         */
module.exports = function (module, exports, require) {
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var uiButtonComponent = require("ui-button-component") /*id: 875840*/;
  var iconButtonComponent = require("icon-button-component") /*id: 259693*/;
  var s = reactCoreLibraryReexport.forwardRef(function (e, n) {
    if (e.type === "icon") {
      return reactCoreLibraryReexport.createElement(iconButtonComponent.IconButton, objectAssignUtil.objectAssign({}, iconButtonComponent.omitButtonProps(e), {
        size: e.size,
        ref: n
      }));
    } else {
      return reactCoreLibraryReexport.createElement(uiButtonComponent.Button, objectAssignUtil.objectAssign({}, e, {
        ref: n
      }));
    }
  });
  s.__UD_BUTTON = true;
  require.d(exports, {
    UnifiedButton: function () {
      return s;
    }
  });
}