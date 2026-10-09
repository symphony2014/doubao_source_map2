// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'X' to 'UIButton'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 17202
         */
module.exports = function (module, exports, require) {
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var objectPropertySetter = require("object-property-setter") /*id: 84841*/;
  var iterableToArrayUtil_1_1 = require("iterable-to-array-util_1_1") /*id: 975753*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var conditionalClassnames = require("conditional-classnames") /*id: 820269*/;
  var svgSpinLoadingComponent = require("svg-spin-loading-component") /*id: 789464*/;
  var reactContextUtilsHooks = require("react-context-utils-hooks") /*id: 618670*/;
  var sizeAbbrevUtils = require("size-abbrev-utils") /*id: 464464*/;
  var mergeRefsUtil = require("merge-refs-util") /*id: 590380*/;
  var useDelayedLoadingHook = require("use-delayed-loading-hook") /*id: 261305*/;
  require("no-operation-module") /*id: 556570*/;
  var disableFormMarker = require("disable-form-marker") /*id: 563439*/;
  var v = ["prefixCls", "className", "children", "shape", "htmlType", "type", "size", "color", "selected", "loading", "delay", "icon", "endIcon", "block", "noMinWidth", "onClick", "danger", "info"];
  var y = new Set(["icon"]);
  var g = reactCoreLibraryReexport.forwardRef(function (t, e) {
    var n;
    var d;
    var g = t.prefixCls;
    var _ = t.className;
    var m = t.children;
    var b = t.shape;
    var E = t.htmlType;
    var w = t.type;
    var S = w === undefined ? "outlined" : w;
    var T = t.size;
    var I = t.color;
    var A = t.selected;
    var C = A !== undefined && A;
    var M = t.loading;
    var k = t.delay;
    var O = t.icon;
    var R = t.endIcon;
    var D = t.block;
    var N = t.noMinWidth;
    var x = t.onClick;
    var P = t.danger;
    var B = t.info;
    var L = objectOmitHelper_1.omitWithSymbols(t, v);
    var F = reactContextUtilsHooks.useComponentClass("button");
    var j = g || F();
    var U = useDelayedLoadingHook.useDelayedLoading({
      loading: M !== undefined && M,
      delay: k
    });
    var z = iterableToArrayUtil_1_1.iterableToArray(U, 1)[0];
    var H = reactContextUtilsHooks.useComponentSize();
    var V = reactCoreLibraryReexport.useRef();
    var Z = reactCoreLibraryReexport.useMemo(function () {
      return mergeRefsUtil.mergeRefs(e, V);
    }, [e, V]);
    var q = sizeAbbrevUtils.getSizeAbbrev(T || H || "medium");
    var W = S;
    if (S === "primary") {
      W = "filled";
    }
    if (S === "default") {
      W = "outlined";
    }
    var G = I === undefined ? "default" : I;
    if (G === "default" && P) {
      G = "danger";
    }
    if (G === "default" && B) {
      G = "primary";
    }
    var Y = conditionalClassnames.default(j, (d = {}, objectPropertySetter.setObjectProperty(d, F(`--${W}`), W), objectPropertySetter.setObjectProperty(d, F(`--${W}-${G}`), G), objectPropertySetter.setObjectProperty(d, F(`--${W}-${G}-loading`), z), objectPropertySetter.setObjectProperty(d, F(`--${W}-${G}-selected`), C), objectPropertySetter.setObjectProperty(d, F("--loading"), z), objectPropertySetter.setObjectProperty(d, F("--selected"), C), objectPropertySetter.setObjectProperty(d, F(`--${b}`), b), objectPropertySetter.setObjectProperty(d, F(`--${n = W, y.has(n) ? `${n}-size` : "size"}-${q}`), q), objectPropertySetter.setObjectProperty(d, F("--disabled"), L.disabled), objectPropertySetter.setObjectProperty(d, F("--block"), D !== undefined && D), objectPropertySetter.setObjectProperty(d, F("--autowidth"), N !== undefined && N), d), _);
    var K = O;
    var $ = R;
    if (K && m) {
      K = reactCoreLibraryReexport.createElement("span", {
        className: conditionalClassnames.default(F("__icon-inline"), F("__icon-inline-start"))
      }, K);
    }
    if ($ && m) {
      $ = reactCoreLibraryReexport.createElement("span", {
        className: conditionalClassnames.default(F("__icon-inline"), F("__icon-inline-end"))
      }, $);
    }
    if (z && !L.disabled) {
      K = reactCoreLibraryReexport.createElement("span", {
        className: conditionalClassnames.default(F("__loading-icon"), F("__icon-inline"), m && F("__icon-inline-start"))
      }, reactCoreLibraryReexport.createElement(svgSpinLoadingComponent.SvgSpinLoading, null));
    }
    var X = reactCoreLibraryReexport.useCallback(function (t) {
      if (z || L.disabled) {
        t.stopPropagation();
        t.preventDefault();
      } else if (x) {
        x(t);
      }
    }, [z, L.disabled, x]);
    if (L.href !== undefined) {
      return reactCoreLibraryReexport.createElement("a", objectAssignUtil.objectAssign({}, L, {
        ref: Z,
        onClick: X,
        className: Y
      }), K, m, $);
    } else {
      return reactCoreLibraryReexport.createElement("button", objectAssignUtil.objectAssign({}, L, {
        type: E === undefined ? "button" : E,
        ref: Z,
        onClick: X,
        className: Y
      }), K, m, $);
    }
  });
  var _ = disableFormMarker.defineDisableForm(g);
  _.__UD_BUTTON = true;
  require.d(exports, {
    UIButton: function () {
      return _;
    }
  });
}