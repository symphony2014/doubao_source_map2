// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'h' to 'IconButton'
// - Renamed export 's' to 'omitButtonProps'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 64757.47c6d48d.js
         * chunkId: 64757
         * moduleId: 259693
         */
module.exports = function (module, exports, require) {
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var objectPropertyAssign = require("object-property-assign") /*id: 526210*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var uiButtonComponent = require("ui-button-component") /*id: 875840*/;
  var objectOmitUtil = require("object-omit-util") /*id: 379788*/;
  require("empty-module-export-shim") /*id: 229202*/;
  var disableableFormMarker = require("disableable-form-marker") /*id: 33990*/;
  var u = function () {
    var e = arguments.length;
    var n = Array(e);
    var r = 0;
    for (; r < e; r++) {
      n[r] = arguments[r];
    }
    return n;
  }("children", "type", "size", "endIcon", "block", "noMinWidth");
  function d(e) {
    return objectOmitUtil.omitObjectKeys(e, u);
  }
  var f = disableableFormMarker.disableableMarker(reactCoreLibraryReexport.forwardRef(function (e, n) {
    var r = e.style;
    var s = e.size;
    var c = objectPropertyAssign.assignObject({}, r === undefined ? {} : r);
    var u = s;
    if (typeof s == "number") {
      c = objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, c), {}, {
        fontSize: `${e.size}px`
      });
      u = undefined;
    }
    return reactCoreLibraryReexport.createElement(uiButtonComponent.Button, objectAssignUtil.objectAssign({}, e, {
      size: u,
      style: c,
      type: "icon",
      ref: n
    }));
  }));
  require.d(exports, {
    IconButton: function () {
      return f;
    },
    omitButtonProps: function () {
      return d;
    }
  });
}