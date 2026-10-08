// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'E' to 'FocusLockWrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ud_picker_panel.f0d55fc1.js
         * chunkId: 11294
         * moduleId: 343751
         */
module.exports = function (module, exports, require) {
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var arrayIterableSliceUtil = require("array-iterable-slice-util") /*id: 802480*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactFocusLockComponent = require("react-focus-lock-component") /*id: 195701*/;
  var domElementEventUtils = require("dom-element-event-utils") /*id: 791124*/;
  var focusDomElementUtil = require("focus-dom-element-util") /*id: 59854*/;
  var domElementUtils_1 = require("dom-element-utils_1") /*id: 846713*/;
  var f = ["initialFocusRef", "finalFocusRef", "restoreFocus", "children", "isDisabled", "autoFocus", "persistentFocus", "lockFocusAcrossFrames", "enableFocusLock", "shards"];
  function d(e) {
    var t = window.setImmediate;
    if (t !== undefined) {
      t(e);
    } else {
      setTimeout(e, 1);
    }
  }
  var m = {
    preventScroll: true
  };
  var _ = reactCoreLibraryReexport.forwardRef(function (e, t) {
    var n = e.initialFocusRef;
    var _ = e.finalFocusRef;
    var p = e.restoreFocus;
    var E = e.children;
    var C = e.isDisabled;
    var h = e.autoFocus;
    var v = e.persistentFocus;
    var R = e.lockFocusAcrossFrames;
    var T = e.enableFocusLock;
    var g = e.shards;
    var N = objectOmitHelper_1.omitWithSymbols(e, f);
    var A = reactCoreLibraryReexport.useCallback(function (e) {
      if ([e].every(function (e) {
        return !domElementUtils_1.containsNode(domElementEventUtils.resolveDomElement(e), document.activeElement);
      }) && n) {
        focusDomElementUtil.focusElement(n);
      }
      var t = document.activeElement;
      if (t) {
        d(function () {
          focusDomElementUtil.focusElement(t);
        });
      }
    }, [n]);
    var O = reactCoreLibraryReexport.useCallback(function () {
      if (_) {
        focusDomElementUtil.focusElement(_, m);
        d(function () {
          focusDomElementUtil.focusElement(_, m);
        });
      }
    }, [_]);
    var L = T ? g : [document.body].concat(arrayIterableSliceUtil.sliceArrayIterable(g ?? []));
    return reactCoreLibraryReexport.createElement(reactFocusLockComponent.FocusLock, objectAssignUtil.objectAssign({
      ref: t,
      crossFrame: R,
      persistentFocus: v,
      autoFocus: h,
      disabled: C,
      onActivation: A,
      returnFocus: !_ && !!p && m,
      shards: L,
      onDeactivation: O
    }, N), E);
  });
  require.d(exports, {
    FocusLockWrapper: function () {
      return _;
    }
  });
}