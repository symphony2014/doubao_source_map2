// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'E' to 'FocusLockWrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 57660.2fb4f2ee.js
         * chunkId: 57660
         * moduleId: 422052
         */
module.exports = function (module, exports, require) {
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var arrayIterableSliceUtil = require("array-iterable-slice-util") /*id: 802480*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactFocusLockComponent = require("react-focus-lock-component") /*id: 195701*/;
  var documentOutsideClickHandler = require("document-outside-click-handler") /*id: 780877*/;
  var focusDomElementWithOptions = require("focus-dom-element-with-options") /*id: 110652*/;
  var domElementUtils = require("dom-element-utils") /*id: 431931*/;
  var f = ["initialFocusRef", "finalFocusRef", "restoreFocus", "children", "isDisabled", "autoFocus", "persistentFocus", "lockFocusAcrossFrames", "enableFocusLock", "shards"];
  function d(e) {
    var n = window.setImmediate;
    if (n !== undefined) {
      n(e);
    } else {
      setTimeout(e, 1);
    }
  }
  var p = {
    preventScroll: true
  };
  var v = reactCoreLibraryReexport.forwardRef(function (e, n) {
    var t = e.initialFocusRef;
    var v = e.finalFocusRef;
    var m = e.restoreFocus;
    var h = e.children;
    var y = e.isDisabled;
    var Z = e.autoFocus;
    var g = e.persistentFocus;
    var x = e.lockFocusAcrossFrames;
    var E = e.enableFocusLock;
    var b = e.shards;
    var w = objectOmitHelper_1.omitWithSymbols(e, f);
    var C = reactCoreLibraryReexport.useCallback(function (e) {
      if ([e].every(function (e) {
        return !domElementUtils.containsElement(documentOutsideClickHandler.getContextElement(e), document.activeElement);
      }) && t) {
        focusDomElementWithOptions.focusElement(t);
      }
      var n = document.activeElement;
      if (n) {
        d(function () {
          focusDomElementWithOptions.focusElement(n);
        });
      }
    }, [t]);
    var R = reactCoreLibraryReexport.useCallback(function () {
      if (v) {
        focusDomElementWithOptions.focusElement(v, p);
        d(function () {
          focusDomElementWithOptions.focusElement(v, p);
        });
      }
    }, [v]);
    var A = E ? b : [document.body].concat(arrayIterableSliceUtil.sliceArrayIterable(b ?? []));
    return reactCoreLibraryReexport.createElement(reactFocusLockComponent.FocusLock, objectAssignUtil.objectAssign({
      ref: n,
      crossFrame: x,
      persistentFocus: g,
      autoFocus: Z,
      disabled: y,
      onActivation: C,
      returnFocus: !v && !!m && p,
      shards: A,
      onDeactivation: R
    }, w), h);
  });
  require.d(exports, {
    FocusLockWrapper: function () {
      return v;
    }
  });
}