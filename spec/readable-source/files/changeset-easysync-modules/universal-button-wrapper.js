// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'zx' to 'UniversalButton'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 299462
         */
module.exports = function (module, exports, require) {
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var uiButtonComponent_1 = require("ui-button-component_1") /*id: 17202*/;
  var iconButtonWrapper = require("icon-button-wrapper") /*id: 359015*/;
  var a = reactCoreLibraryReexport.forwardRef(function (t, e) {
    if (t.type === "icon") {
      return reactCoreLibraryReexport.createElement(iconButtonWrapper.IconButton, objectAssignUtil.objectAssign({}, iconButtonWrapper.omitButtonProps(t), {
        size: t.size,
        ref: e
      }));
    } else {
      return reactCoreLibraryReexport.createElement(uiButtonComponent_1.UIButton, objectAssignUtil.objectAssign({}, t, {
        ref: e
      }));
    }
  });
  a.__UD_BUTTON = true;
  require.d(exports, {
    UniversalButton: function () {
      return a;
    }
  });
}