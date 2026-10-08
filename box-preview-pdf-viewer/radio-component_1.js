// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Y' to 'Radio'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: box-preview-pdf-viewer.a091068e.js
         * chunkId: 55505
         * moduleId: 83143
         */
module.exports = function (module, exports, require) {
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var objectPropertySetter = require("object-property-setter") /*id: 84841*/;
  var iterableToArrayUtil_1_1 = require("iterable-to-array-util_1_1") /*id: 975753*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var moduleIdConstant_2 = require("module-id-constant_2") /*id: 721597*/;
  var constantIdentifier_3 = require("constant-identifier_3") /*id: 994116*/;
  var internalIdentifierCode = require("internal-identifier-code") /*id: 229779*/;
  var moduleIdentifierConstant = require("module-identifier-constant") /*id: 397617*/;
  var staticStringValue = require("static-string-value") /*id: 199335*/;
  var moduleConstantExport = require("module-constant-export") /*id: 185429*/;
  var constantStringExport_4 = require("constant-string-export_4") /*id: 987822*/;
  var moduleIdConstant = require("module-id-constant") /*id: 162389*/;
  var userIdModule = require("user-id-module") /*id: 259597*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var conditionalClassnames = require("conditional-classnames") /*id: 820269*/;
  var composeClassNamesUtil = require("compose-class-names-util") /*id: 606502*/;
  var typographyBodyStyleConfig = require("typography-body-style-config") /*id: 607187*/;
  var udFontMediumStyle = require("ud-font-medium-style") /*id: 757909*/;
  var udTypographyBody2 = require("ud-typography-body-2") /*id: 144525*/;
  var composedPickerPanelStyles = require("composed-picker-panel-styles") /*id: 288721*/;
  var P = reactCoreLibraryReexport.createContext(null);
  var E = P.Provider;
  function T() {
    return reactCoreLibraryReexport.useContext(P);
  }
  var uiConfigContextHooks = require("ui-config-context-hooks") /*id: 157*/;
  var domTypeUtils_1 = require("dom-type-utils_1") /*id: 908793*/;
  var objectOmitUtil = require("object-omit-util") /*id: 379788*/;
  var useControlledStateHook_1 = require("use-controlled-state-hook_1") /*id: 837560*/;
  var typographyComponent_2 = require("typography-component_2") /*id: 728302*/;
  require("empty-module-export_4") /*id: 530821*/;
  var R = ["prefixCls", "className", "role", "checked", "style", "onChange", "onMouseEnter", "onMouseLeave", "children", "value", "disabled", "name", "defaultChecked", "error", "optionType"];
  var M = reactCoreLibraryReexport.forwardRef(function (e, t) {
    var i;
    var P;
    var E;
    var M;
    var O = e.prefixCls;
    var D = e.className;
    var k = e.role;
    var L = e.checked;
    var F = e.style;
    var j = e.onChange;
    var Z = e.onMouseEnter;
    var B = e.onMouseLeave;
    var V = e.children;
    var z = e.value;
    var H = e.disabled;
    var W = e.name;
    var $ = e.defaultChecked;
    var G = e.error;
    var U = e.optionType;
    var q = objectOmitHelper_1.omitWithSymbols(e, R);
    var Q = T();
    var J = reactCoreLibraryReexport.useRef(null);
    var Y = uiConfigContextHooks.useClassName("radio", O);
    var K = Y();
    var X = (U === undefined ? "default" : U) === "button";
    var ee = useControlledStateHook_1.useControlledState(!!$, Q ? Q.value === z : !!L, {
      isControlledOverride: !!Q || "checked" in e
    });
    var et = iterableToArrayUtil_1_1.iterableToArray(ee, 2);
    var ei = et[0];
    var en = et[1];
    reactCoreLibraryReexport.useImperativeHandle(t, function () {
      return J.current;
    });
    var er = H;
    var eo = W;
    var es = G;
    if (Q) {
      er = H || Q.disabled;
      eo = Q.name;
      es = G || Q.error;
    }
    if ((Q == null ? undefined : Q.size) === "small") {
      P = {
        props: {
          paddingTop: moduleConstantExport.moduleIdentifier,
          paddingRight: constantStringExport_4.constantString,
          paddingBottom: moduleIdConstant.moduleIdConstant,
          paddingLeft: userIdModule.userId
        }
      };
    } else if ((Q == null ? undefined : Q.size) === "medium") {
      P = {
        props: {
          paddingTop: "uki1upk",
          paddingRight: constantStringExport_4.constantString,
          paddingBottom: "uv0v7sg",
          paddingLeft: userIdModule.userId
        }
      };
    } else if ((Q == null ? undefined : Q.size) === "large") {
      P = {
        props: {
          paddingTop: "u1uy2zfd",
          paddingRight: moduleIdentifierConstant.moduleIdentifier,
          paddingBottom: "u1ubz44k",
          paddingLeft: staticStringValue.staticString
        }
      };
    }
    var ea = conditionalClassnames.default(`${K}__wrapper`, (i = {}, objectPropertySetter.setObjectProperty(i, `${K}__wrapper--checked`, ei), objectPropertySetter.setObjectProperty(i, `${K}__wrapper--disable`, er), objectPropertySetter.setObjectProperty(i, `${K}--error`, es), i), D, composeClassNamesUtil.composeClassNames(typographyBodyStyleConfig.typographyBodyStyle, X && ei && udFontMediumStyle.udFontMedium, X && P));
    if ((Q == null ? undefined : Q.size) === "small") {
      E = udTypographyBody2.udTypographyBody2;
    } else if ((Q == null ? undefined : Q.size) === "medium") {
      E = typographyBodyStyleConfig.typographyBodyStyle;
    } else if ((Q == null ? undefined : Q.size) === "large") {
      E = typographyBodyStyleConfig.typographyBodyStyle;
    }
    M = [composedPickerPanelStyles.pickerPanelStyles];
    if (X) {
      M.push(E, {
        props: {
          maxWidth: internalIdentifierCode.identifierCode
        }
      });
    } else {
      M.push({
        props: {
          marginLeft: moduleIdConstant_2.moduleId,
          overflowWrap: constantIdentifier_3.constantIdentifier
        }
      });
    }
    var el = M;
    return reactCoreLibraryReexport.createElement("label", {
      className: ea,
      style: F,
      onMouseEnter: Z,
      onMouseLeave: B
    }, reactCoreLibraryReexport.createElement("span", {
      className: K
    }, reactCoreLibraryReexport.createElement("input", objectAssignUtil.objectAssign({
      ref: J,
      className: conditionalClassnames.default(Y("__input")),
      type: "radio",
      role: k === undefined ? "radio" : k,
      checked: ei,
      onChange: function (e) {
        var t = {
          target: {
            type: "radio",
            checked: e.target.checked,
            value: z
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
        if (Q && domTypeUtils_1.isFunction(Q.onChange)) {
          Q.onChange(t);
        } else {
          en(e.target.checked);
          if (domTypeUtils_1.isFunction(j)) {
            j(t);
          }
        }
      },
      "aria-checked": ei,
      disabled: er,
      name: eo
    }, objectOmitUtil.omitObjectKeys(q, ["error"]))), reactCoreLibraryReexport.createElement("span", {
      className: Y("__wallpaper")
    }), reactCoreLibraryReexport.createElement("span", {
      className: Y("__checked-ink")
    })), V ? reactCoreLibraryReexport.createElement(typographyComponent_2.Typography, {
      variant: "plain",
      className: conditionalClassnames.default(Y("__label-content"), er && Y("__label-content-disabled")),
      as: "span",
      lineClamp: X ? 1 : undefined,
      sx: el
    }, V) : null);
  });
  var arrayIterableSliceUtil = require("array-iterable-slice-util") /*id: 802480*/;
  var sizeConvertUtils = require("size-convert-utils") /*id: 293585*/;
  var k = reactCoreLibraryReexport.forwardRef(function (e, t) {
    var i;
    var n;
    var s;
    var a;
    var l;
    var c = e.className;
    var d = e.options;
    var u = e.direction;
    var h = u === undefined ? "horizontal" : u;
    var p = e.disabled;
    var f = e.children;
    var m = e.size;
    var b = e.style;
    var x = e.id;
    var y = e.onMouseEnter;
    var w = e.onMouseLeave;
    var C = e.prefixCls;
    var P = uiConfigContextHooks.useComponentSize();
    var T = m ?? P;
    var A = uiConfigContextHooks.useClassName("radio-group", C);
    var N = uiConfigContextHooks.useClassName("radio-button", C)();
    var R = useControlledStateHook_1.useControlledState(e.defaultValue, e.value, {
      isControlledOverride: "value" in e
    });
    var k = iterableToArrayUtil_1_1.iterableToArray(R, 2);
    var L = k[0];
    var F = k[1];
    i = e.optionType;
    n = reactCoreLibraryReexport.useState(new Map());
    a = (s = iterableToArrayUtil_1_1.iterableToArray(n, 2))[0];
    l = s[1];
    var j = {
      registerBOT: reactCoreLibraryReexport.useCallback(function (e) {
        l(function (t) {
          return new Map([].concat(arrayIterableSliceUtil.sliceArrayIterable(t.entries()), [[e, "button"]]));
        });
      }, []),
      unregisterBOT: reactCoreLibraryReexport.useCallback(function (e) {
        l(function (t) {
          t.delete(e);
          return new Map(arrayIterableSliceUtil.sliceArrayIterable(t.entries()));
        });
      }, []),
      optionType: a.size ? "button" : i === undefined ? "default" : i
    };
    var Z = j.registerBOT;
    var B = j.unregisterBOT;
    var V = j.optionType;
    return reactCoreLibraryReexport.createElement(E, {
      value: {
        onChange: function (t) {
          var i = t.target.value;
          if (i !== undefined) {
            F(i);
            var n = e.onChange;
            if (domTypeUtils_1.isFunction(n) && i !== L) {
              n(i, t);
            }
          }
        },
        value: L,
        disabled: e.disabled,
        name: e.name,
        error: e.error,
        registerBOT: Z,
        unregisterBOT: B,
        size: T
      }
    }, function () {
      var e = f;
      if (d && d.length > 0) {
        var i = V === "button" ? N : undefined;
        e = d.map(function (e) {
          if (typeof e == "string") {
            return reactCoreLibraryReexport.createElement(M, {
              key: e,
              disabled: p,
              value: e,
              checked: L === e,
              prefixCls: i,
              optionType: V
            }, e);
          } else {
            return reactCoreLibraryReexport.createElement(M, {
              key: `radio-option-${e.value}`,
              disabled: e.disabled || p,
              value: e.value,
              checked: L === e.value,
              style: e.style,
              className: e.className,
              prefixCls: i,
              optionType: V
            }, e.label);
          }
        });
      }
      var n = sizeConvertUtils.getSizeCode(T);
      var o = conditionalClassnames.default(A(), V === "button" && A("-button"), A("--mode-solid"), A(`--direction-${h}`), objectPropertySetter.setObjectProperty({}, A(`--size-${n}`), n), c);
      return reactCoreLibraryReexport.createElement("div", {
        className: o,
        style: b,
        onMouseEnter: y,
        onMouseLeave: w,
        id: x,
        ref: t
      }, e);
    }());
  });
  var L = reactCoreLibraryReexport.memo(k);
  var assertNotNullish = require("assert-not-nullish") /*id: 244023*/;
  var j = reactCoreLibraryReexport.forwardRef(function (e, t) {
    var i = T();
    var r = i == null ? undefined : i.registerBOT;
    var o = i == null ? undefined : i.unregisterBOT;
    var s = uiConfigContextHooks.useClassName("radio-button");
    var a = objectAssignUtil.objectAssign({}, (assertNotNullish.assertNotNullish(e), e));
    if (i) {
      a.checked = e.value === i.value;
      a.disabled = e.disabled || i.disabled;
    }
    reactCoreLibraryReexport.useLayoutEffect(function () {
      if (domTypeUtils_1.isDefined(e.value)) {
        var t = e.value;
        if (r != null) {
          r(t);
        }
        return function () {
          if (o != null) {
            o(t);
          }
        };
      }
    }, [e.value, r, o]);
    return reactCoreLibraryReexport.createElement(M, objectAssignUtil.objectAssign({
      prefixCls: s()
    }, a, {
      optionType: "button",
      ref: t
    }));
  });
  var Z = M;
  Z.Button = j;
  Z.Group = L;
  require.d(exports, {
    Radio: function () {
      return Z;
    }
  });
}