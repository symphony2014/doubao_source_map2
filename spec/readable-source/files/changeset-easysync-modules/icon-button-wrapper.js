// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'h' to 'IconButton'
// - Renamed export 's' to 'omitButtonProps'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 359015
         */
module.exports = function (module, exports, require) {
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var objectPropertyAssign = require("object-property-assign") /*id: 526210*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var uiButtonComponent_1 = require("ui-button-component_1") /*id: 17202*/;
  var objectOmitUtil_2 = require("object-omit-util_2") /*id: 644631*/;
  require("no-operation-module") /*id: 556570*/;
  var disableFormMarker = require("disable-form-marker") /*id: 563439*/;
  var c = function () {
    var t = arguments.length;
    var e = Array(t);
    var n = 0;
    for (; n < t; n++) {
      e[n] = arguments[n];
    }
    return e;
  }("children", "type", "size", "endIcon", "block", "noMinWidth");
  function l(t) {
    return objectOmitUtil_2.omitProps(t, c);
  }
  var p = disableFormMarker.defineDisableForm(reactCoreLibraryReexport.forwardRef(function (t, e) {
    var n = t.style;
    var a = t.size;
    var u = objectPropertyAssign.assignObject({}, n === undefined ? {} : n);
    var c = a;
    if (typeof a == "number") {
      u = objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, u), {}, {
        fontSize: `${t.size}px`
      });
      c = undefined;
    }
    return reactCoreLibraryReexport.createElement(uiButtonComponent_1.UIButton, objectAssignUtil.objectAssign({}, t, {
      size: c,
      style: u,
      type: "icon",
      ref: e
    }));
  }));
  require.d(exports, {
    IconButton: function () {
      return p;
    },
    omitButtonProps: function () {
      return l;
    }
  });
}