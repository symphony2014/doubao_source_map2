// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'X' to 'Checkbox'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58832.6d7372bc.js
         * chunkId: 58832
         * moduleId: 529491
         */
module.exports = function (module, exports, require) {
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var objectPropertySetter = require("object-property-setter") /*id: 84841*/;
  var iterableToArrayUtil_1_1 = require("iterable-to-array-util_1_1") /*id: 975753*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var conditionalClassnames = require("conditional-classnames") /*id: 820269*/;
  var composeClassNamesUtil = require("compose-class-names-util") /*id: 606502*/;
  var uiConfigContextHooks = require("ui-config-context-hooks") /*id: 157*/;
  var c = reactCoreLibraryReexport.forwardRef(function (e, t) {
    return reactCoreLibraryReexport.createElement("svg", objectAssignUtil.objectAssign({
      width: 12,
      height: 12,
      fill: "none",
      ref: t
    }, e), reactCoreLibraryReexport.createElement("path", {
      d: "M9.589 2.903l.808.809a.35.35 0 010 .495L5.18 9.425a.35.35 0 01-.495 0l-2.981-2.98a.35.35 0 010-.496l.808-.808a.35.35 0 01.495 0l1.925 1.925 4.163-4.163a.35.35 0 01.495 0z",
      fill: "currentColor"
    }));
  });
  var p = reactCoreLibraryReexport.forwardRef(function (e, t) {
    return reactCoreLibraryReexport.createElement("svg", objectAssignUtil.objectAssign({
      width: 12,
      height: 12,
      fill: "none",
      ref: t
    }, e), reactCoreLibraryReexport.createElement("path", {
      d: "M2 5.4c0-.22.18-.4.4-.4h7.2c.22 0 .4.18.4.4v1.2a.4.4 0 01-.4.4H2.4a.4.4 0 01-.4-.4V5.4z",
      fill: "currentColor"
    }));
  });
  var h = reactCoreLibraryReexport.createContext(null);
  var f = h.Provider;
  var objectOmitUtil = require("object-omit-util") /*id: 379788*/;
  var domTypeUtils_1 = require("dom-type-utils_1") /*id: 908793*/;
  var useControlledStateHook_1 = require("use-controlled-state-hook_1") /*id: 837560*/;
  var reactRefEffectUtils = require("react-ref-effect-utils") /*id: 355121*/;
  var disableableFormMarker = require("disableable-form-marker") /*id: 33990*/;
  var typographyBodyStyleConfig = require("typography-body-style-config") /*id: 607187*/;
  require("empty-module-export_4") /*id: 530821*/;
  var S = ["className", "style", "checked", "defaultChecked", "indeterminate", "onChange", "onCheckChange", "onMouseEnter", "onMouseLeave", "role", "children", "value", "disabled", "name", "error"];
  var O = reactCoreLibraryReexport.forwardRef(function (e, t) {
    var i;
    var f;
    var b;
    var O = e.className;
    var _ = e.style;
    var T = e.checked;
    var w = e.defaultChecked;
    var k = e.indeterminate;
    var R = e.onChange;
    var A = e.onCheckChange;
    var P = e.onMouseEnter;
    var I = e.onMouseLeave;
    var N = e.role;
    var x = e.children;
    var C = e.value;
    var L = e.disabled;
    var M = e.name;
    var D = e.error;
    var H = objectOmitHelper_1.omitWithSymbols(e, S);
    var B = reactCoreLibraryReexport.useRef(null);
    var j = uiConfigContextHooks.usePrefixCls();
    var U = uiConfigContextHooks.useClassName("checkbox");
    var F = reactCoreLibraryReexport.useContext(h);
    var W = useControlledStateHook_1.useControlledState(!!w, F ? !!((f = F.value) === null || f === undefined ? undefined : f.includes(C)) : !!T, {
      isControlledOverride: !!F || "checked" in e
    });
    var z = iterableToArrayUtil_1_1.iterableToArray(W, 2);
    var q = z[0];
    var V = z[1];
    reactCoreLibraryReexport.useImperativeHandle(t, function () {
      return B.current;
    });
    var Z = reactCoreLibraryReexport.useCallback(function () {
      if (k !== undefined && B.current) {
        B.current.indeterminate = k;
      }
    }, [k]);
    reactRefEffectUtils.useLayoutEffect(function () {
      Z();
    }, [Z]);
    var J = L;
    var G = M;
    var K = D;
    if (F) {
      J = L || F.disabled;
      G = F.name;
      K = D || F.error;
    }
    var Y = conditionalClassnames.default(`${j}__checkbox__wrapper`, (b = {}, objectPropertySetter.setObjectProperty(b, conditionalClassnames.default(`${j}__checkbox--error`), K), objectPropertySetter.setObjectProperty(b, conditionalClassnames.default(`${j}__checkbox--disabled`), J), b), composeClassNamesUtil.composeClassNames(typographyBodyStyleConfig.typographyBodyStyle), O);
    return reactCoreLibraryReexport.createElement("label", {
      className: Y,
      style: _,
      onMouseEnter: P,
      onMouseLeave: I
    }, reactCoreLibraryReexport.createElement("span", {
      className: U()
    }, reactCoreLibraryReexport.createElement("input", objectAssignUtil.objectAssign({}, objectOmitUtil.omitObjectKeys(H, ["error"]), {
      name: G,
      disabled: J,
      ref: B,
      type: "checkbox",
      className: conditionalClassnames.default(U("__input"), J && U("__input-disabled")),
      checked: q,
      onChange: function (e) {
        Z();
        var t = {
          target: {
            type: "checkbox",
            checked: e.target.checked,
            value: C
          },
          stopPropagation: function () {
            e.stopPropagation();
          },
          preventDefault: function () {
            e.preventDefault();
          },
          nativeEvent: e.nativeEvent,
          reactEvent: e
        };
        V(e.target.checked, function () {
          if (F != null && F.onChange) {
            F.onChange(t);
          }
          if (domTypeUtils_1.isFunction(R)) {
            R(t);
          }
          if (domTypeUtils_1.isFunction(A)) {
            A(e.target.checked);
          }
        });
      },
      role: N === undefined ? "checkbox" : N,
      "aria-checked": k || (i = B.current) !== null && i !== undefined && i.indeterminate ? "mixed" : q
    })), reactCoreLibraryReexport.createElement("span", {
      className: U("__wallpaper")
    }, reactCoreLibraryReexport.createElement(c, {
      className: conditionalClassnames.default(U("__checked-svg"), q && !k && U("__checked-svg-shown"))
    }), reactCoreLibraryReexport.createElement(p, {
      className: conditionalClassnames.default(U("__indeterminate-svg"), k && U("__indeterminate-svg-shown"))
    }))), x ? reactCoreLibraryReexport.createElement("span", {
      className: conditionalClassnames.default(U("__label-content"), J && U("__label-content-disabled"))
    }, x) : null);
  });
  var _ = disableableFormMarker.disableableMarker(O);
  _.__UD_CHECKBOX = true;
  var arrayIterableSliceUtil = require("array-iterable-slice-util") /*id: 802480*/;
  var w = reactCoreLibraryReexport.forwardRef(function (e, t) {
    var i;
    var r;
    var n;
    var o;
    var u;
    var c;
    var p;
    var h;
    var y;
    var m;
    var E = uiConfigContextHooks.useClassName("checkbox-group");
    var S = useControlledStateHook_1.useControlledState(e.defaultValue, e.value ?? [], {
      isControlledOverride: "value" in e
    });
    var O = iterableToArrayUtil_1_1.iterableToArray(S, 2);
    var w = O[0];
    var k = O[1];
    function R(t) {
      if (domTypeUtils_1.isFunction(e.onChange)) {
        e.onChange(t);
      }
      if (!("value" in e)) {
        k(t);
      }
    }
    function A(e) {
      if (w == null) {
        return undefined;
      } else {
        return w.includes(e);
      }
    }
    return reactCoreLibraryReexport.createElement(f, {
      value: {
        onChange: function (e) {
          var t = e.target.value;
          if (t !== undefined) {
            if (w) {
              var i = arrayIterableSliceUtil.sliceArrayIterable(w);
              var r = w.indexOf(t);
              if (r === -1) {
                i.push(t);
              } else {
                i.splice(r, 1);
              }
              R(i);
            } else {
              R([t]);
            }
          }
        },
        value: w,
        name: e.name,
        disabled: e.disabled,
        error: e.error
      }
    }, (i = e.className, r = e.options, n = e.disabled, o = e.children, u = e.style, c = e.error, p = e.onMouseEnter, h = e.onMouseLeave, y = o, r && r.length > 0 && (y = r.map(function (e) {
      if (typeof e == "string") {
        return reactCoreLibraryReexport.createElement(_, {
          key: e,
          disabled: n,
          value: e,
          checked: A(e),
          error: c
        }, e);
      } else {
        return reactCoreLibraryReexport.createElement(_, {
          key: `checkobx-option-${e.value}`,
          disabled: e.disabled || n,
          value: e.value,
          checked: A(e.value),
          style: e.style,
          className: e.className,
          error: e.error || c
        }, e.label);
      }
    })), m = conditionalClassnames.default(E(), i), reactCoreLibraryReexport.createElement("div", {
      className: m,
      style: u,
      onMouseEnter: p,
      onMouseLeave: h,
      ref: t
    }, y)));
  });
  var k = reactCoreLibraryReexport.memo(w);
  var R = _;
  R.Group = k;
  require.d(exports, {
    Checkbox: function () {
      return R;
    }
  });
}