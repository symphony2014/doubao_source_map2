// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'X' to 'Button'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 64757.47c6d48d.js
         * chunkId: 64757
         * moduleId: 875840
         */
module.exports = function (module, exports, require) {
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var objectPropertySetter = require("object-property-setter") /*id: 84841*/;
  var iterableToArrayUtil_1_1 = require("iterable-to-array-util_1_1") /*id: 975753*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var conditionalClassnames = require("conditional-classnames") /*id: 820269*/;
  var svgSpinLoadingIcon = require("svg-spin-loading-icon") /*id: 705191*/;
  var uiConfigContextHooks = require("ui-config-context-hooks") /*id: 157*/;
  var sizeConvertUtils = require("size-convert-utils") /*id: 293585*/;
  var mergeReactRefs = require("merge-react-refs") /*id: 686702*/;
  var loadingDelayHook = require("loading-delay-hook") /*id: 242703*/;
  require("empty-module-export-shim") /*id: 229202*/;
  var disableableFormMarker = require("disableable-form-marker") /*id: 33990*/;
  var v = ["prefixCls", "className", "children", "shape", "htmlType", "type", "size", "color", "selected", "loading", "delay", "icon", "endIcon", "block", "noMinWidth", "onClick", "danger", "info"];
  var g = new Set(["icon"]);
  var y = reactCoreLibraryReexport.forwardRef(function (e, n) {
    var r;
    var p;
    var y = e.prefixCls;
    var b = e.className;
    var _ = e.children;
    var w = e.shape;
    var x = e.htmlType;
    var k = e.type;
    var $ = k === undefined ? "outlined" : k;
    var E = e.size;
    var S = e.color;
    var R = e.selected;
    var Z = R !== undefined && R;
    var T = e.loading;
    var C = e.delay;
    var N = e.icon;
    var M = e.endIcon;
    var j = e.block;
    var P = e.noMinWidth;
    var W = e.onClick;
    var O = e.danger;
    var F = e.info;
    var I = objectOmitHelper_1.omitWithSymbols(e, v);
    var D = uiConfigContextHooks.useClassName("button");
    var B = y || D();
    var z = loadingDelayHook.useLoadingDelay({
      loading: T !== undefined && T,
      delay: C
    });
    var L = iterableToArrayUtil_1_1.iterableToArray(z, 1)[0];
    var A = uiConfigContextHooks.useComponentSize();
    var H = reactCoreLibraryReexport.useRef();
    var J = reactCoreLibraryReexport.useMemo(function () {
      return mergeReactRefs.mergeRefs(n, H);
    }, [n, H]);
    var X = sizeConvertUtils.convertSize(E || A || "medium");
    var K = $;
    if ($ === "primary") {
      K = "filled";
    }
    if ($ === "default") {
      K = "outlined";
    }
    var U = S === undefined ? "default" : S;
    if (U === "default" && O) {
      U = "danger";
    }
    if (U === "default" && F) {
      U = "primary";
    }
    var V = conditionalClassnames.default(B, (p = {}, objectPropertySetter.setObjectProperty(p, D(`--${K}`), K), objectPropertySetter.setObjectProperty(p, D(`--${K}-${U}`), U), objectPropertySetter.setObjectProperty(p, D(`--${K}-${U}-loading`), L), objectPropertySetter.setObjectProperty(p, D(`--${K}-${U}-selected`), Z), objectPropertySetter.setObjectProperty(p, D("--loading"), L), objectPropertySetter.setObjectProperty(p, D("--selected"), Z), objectPropertySetter.setObjectProperty(p, D(`--${w}`), w), objectPropertySetter.setObjectProperty(p, D(`--${r = K, g.has(r) ? `${r}-size` : "size"}-${X}`), X), objectPropertySetter.setObjectProperty(p, D("--disabled"), I.disabled), objectPropertySetter.setObjectProperty(p, D("--block"), j !== undefined && j), objectPropertySetter.setObjectProperty(p, D("--autowidth"), P !== undefined && P), p), b);
    var Y = N;
    var q = M;
    if (Y && _) {
      Y = reactCoreLibraryReexport.createElement("span", {
        className: conditionalClassnames.default(D("__icon-inline"), D("__icon-inline-start"))
      }, Y);
    }
    if (q && _) {
      q = reactCoreLibraryReexport.createElement("span", {
        className: conditionalClassnames.default(D("__icon-inline"), D("__icon-inline-end"))
      }, q);
    }
    if (L && !I.disabled) {
      Y = reactCoreLibraryReexport.createElement("span", {
        className: conditionalClassnames.default(D("__loading-icon"), D("__icon-inline"), _ && D("__icon-inline-start"))
      }, reactCoreLibraryReexport.createElement(svgSpinLoadingIcon.SpinLoadingIcon, null));
    }
    var G = reactCoreLibraryReexport.useCallback(function (e) {
      if (L || I.disabled) {
        e.stopPropagation();
        e.preventDefault();
      } else if (W) {
        W(e);
      }
    }, [L, I.disabled, W]);
    if (I.href !== undefined) {
      return reactCoreLibraryReexport.createElement("a", objectAssignUtil.objectAssign({}, I, {
        ref: J,
        onClick: G,
        className: V
      }), Y, _, q);
    } else {
      return reactCoreLibraryReexport.createElement("button", objectAssignUtil.objectAssign({}, I, {
        type: x === undefined ? "button" : x,
        ref: J,
        onClick: G,
        className: V
      }), Y, _, q);
    }
  });
  var b = disableableFormMarker.disableableMarker(y);
  b.__UD_BUTTON = true;
  require.d(exports, {
    Button: function () {
      return b;
    }
  });
}