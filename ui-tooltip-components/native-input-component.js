// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'K' to 'useInputFocus'
// - Renamed export 'Z' to 'NativeInput'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 20536.778f9caf.js
         * chunkId: 20536
         * moduleId: 256053
         */
module.exports = function (module, exports, require) {
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var conditionalClassnames = require("conditional-classnames") /*id: 820269*/;
  var mergeReactRefs = require("merge-react-refs") /*id: 686702*/;
  var uiConfigContextHooks = require("ui-config-context-hooks") /*id: 157*/;
  var reactRefEffectUtils = require("react-ref-effect-utils") /*id: 355121*/;
  var sxEnhancedReactCreateElement_1 = require("sx-enhanced-react-create-element_1") /*id: 606167*/;
  var f = ["className", "onFocusChange", "autoFocus"];
  function d(e) {
    var t = e.inputRef;
    var n = e.onFocusChange;
    var o = e.autoFocus;
    reactCoreLibraryReexport.useEffect(function () {
      var e = t.current;
      if (e) {
        function o(e) {
          if (n != null) {
            n(false, e);
          }
        }
        function r(e) {
          if (n != null) {
            n(true, e);
          }
        }
        e.addEventListener("focus", r);
        e.addEventListener("blur", o);
        return function () {
          e.removeEventListener("focus", r);
          e.removeEventListener("blur", o);
        };
      }
    }, [t, n]);
    reactRefEffectUtils.useEffectOnce(function () {
      if (o) {
        var e;
        if ((e = t.current) !== null && e !== undefined) {
          e.focus();
        }
      }
    });
  }
  var p = reactCoreLibraryReexport.forwardRef(function (e, t) {
    var n = e.className;
    var l = e.onFocusChange;
    var p = e.autoFocus;
    var v = objectOmitHelper_1.omitWithSymbols(e, f);
    var m = conditionalClassnames.default(n, uiConfigContextHooks.useClassName("native-input")());
    var g = reactCoreLibraryReexport.useRef(null);
    var h = reactCoreLibraryReexport.useMemo(function () {
      return mergeReactRefs.mergeRefs(t, g);
    }, [t]);
    d({
      inputRef: g,
      onFocusChange: l,
      autoFocus: !!p
    });
    return sxEnhancedReactCreateElement_1.createElementWithSx("input", objectAssignUtil.objectAssign({
      ref: h,
      className: m
    }, v));
  });
  require.d(exports, {
    useInputFocus: function () {
      return d;
    },
    NativeInput: function () {
      return p;
    }
  });
}