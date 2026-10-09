// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Y' to 'Radio'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_index_delay.3c55e6b1.js
         * chunkId: 82165
         * moduleId: 848808
         */
module.exports = function (module, exports, require) {
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var objectPropertySetter = require("object-property-setter") /*id: 84841*/;
  var iterableToArrayUtil_1_1 = require("iterable-to-array-util_1_1") /*id: 975753*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var flowDocShortcutId_1 = require("flow-doc-shortcut-id_1") /*id: 778900*/;
  var constantStringExport_2 = require("constant-string-export_2") /*id: 399771*/;
  var docxIndexDelayHash = require("docx-index-delay-hash") /*id: 122079*/;
  var moduleVersionIdentifier = require("module-version-identifier") /*id: 502209*/;
  var constantStringExport = require("constant-string-export") /*id: 199729*/;
  var docxIndexDelayConstant_1 = require("docx-index-delay-constant_1") /*id: 169158*/;
  var docxToolboxConstant_1 = require("docx-toolbox-constant_1") /*id: 522456*/;
  var docxIndexDelayConstant = require("docx-index-delay-constant") /*id: 163022*/;
  var docxToolboxConst = require("docx-toolbox-const") /*id: 993553*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var conditionalClassnames = require("conditional-classnames") /*id: 820269*/;
  var composeClassNamesUtil = require("compose-class-names-util") /*id: 606502*/;
  var udTypographyBody0Style = require("ud-typography-body-0-style") /*id: 307052*/;
  var fontWeightAliasModule = require("font-weight-alias-module") /*id: 939210*/;
  var typographyBody2ClassComposer = require("typography-body-2-class-composer") /*id: 50795*/;
  var docxLayoutDisplayConfig = require("docx-layout-display-config") /*id: 17845*/;
  var x = reactCoreLibraryReexport.createContext(null);
  var A = x.Provider;
  function b() {
    return reactCoreLibraryReexport.useContext(x);
  }
  var reactContextUtilsHooks = require("react-context-utils-hooks") /*id: 618670*/;
  var domElementWindowUtils = require("dom-element-window-utils") /*id: 655216*/;
  var objectOmitUtil_2 = require("object-omit-util_2") /*id: 644631*/;
  var useControlledState = require("use-controlled-state") /*id: 80507*/;
  var typographyTextComponent = require("typography-text-component") /*id: 701412*/;
  require("module-no-op") /*id: 116324*/;
  var S = ["prefixCls", "className", "role", "checked", "style", "onChange", "onMouseEnter", "onMouseLeave", "children", "value", "disabled", "name", "defaultChecked", "error", "optionType"];
  var w = reactCoreLibraryReexport.forwardRef(function (e, i) {
    var r;
    var x;
    var A;
    var w;
    var N = e.prefixCls;
    var R = e.className;
    var P = e.role;
    var B = e.checked;
    var O = e.style;
    var j = e.onChange;
    var Z = e.onMouseEnter;
    var W = e.onMouseLeave;
    var z = e.children;
    var $ = e.value;
    var U = e.disabled;
    var H = e.name;
    var V = e.defaultChecked;
    var q = e.error;
    var G = e.optionType;
    var Q = objectOmitHelper_1.omitWithSymbols(e, S);
    var J = b();
    var X = reactCoreLibraryReexport.useRef(null);
    var K = reactContextUtilsHooks.useComponentClass("radio", N);
    var Y = K();
    var ee = (G === undefined ? "default" : G) === "button";
    var et = useControlledState.useControlledState(!!V, J ? J.value === $ : !!B, {
      isControlledOverride: !!J || "checked" in e
    });
    var ei = iterableToArrayUtil_1_1.iterableToArray(et, 2);
    var er = ei[0];
    var eo = ei[1];
    reactCoreLibraryReexport.useImperativeHandle(i, function () {
      return X.current;
    });
    var ea = U;
    var en = H;
    var es = q;
    if (J) {
      ea = U || J.disabled;
      en = J.name;
      es = q || J.error;
    }
    if ((J == null ? undefined : J.size) === "small") {
      x = {
        props: {
          paddingTop: docxIndexDelayConstant_1.delayConstant,
          paddingRight: docxToolboxConstant_1.toolboxConstant,
          paddingBottom: docxIndexDelayConstant.delayConstant,
          paddingLeft: docxToolboxConst.docxKey
        }
      };
    } else if ((J == null ? undefined : J.size) === "medium") {
      x = {
        props: {
          paddingTop: "uki1upk",
          paddingRight: docxToolboxConstant_1.toolboxConstant,
          paddingBottom: "uv0v7sg",
          paddingLeft: docxToolboxConst.docxKey
        }
      };
    } else if ((J == null ? undefined : J.size) === "large") {
      x = {
        props: {
          paddingTop: "u1uy2zfd",
          paddingRight: moduleVersionIdentifier.versionId,
          paddingBottom: "u1ubz44k",
          paddingLeft: constantStringExport.constantString
        }
      };
    }
    var eu = conditionalClassnames.default(`${Y}__wrapper`, (r = {}, objectPropertySetter.setObjectProperty(r, `${Y}__wrapper--checked`, er), objectPropertySetter.setObjectProperty(r, `${Y}__wrapper--disable`, ea), objectPropertySetter.setObjectProperty(r, `${Y}--error`, es), r), R, composeClassNamesUtil.composeClassNames(udTypographyBody0Style.udTypographyBody0, ee && er && fontWeightAliasModule.fontWeightAlias, ee && x));
    if ((J == null ? undefined : J.size) === "small") {
      A = typographyBody2ClassComposer.typographyBody2Class;
    } else if ((J == null ? undefined : J.size) === "medium") {
      A = udTypographyBody0Style.udTypographyBody0;
    } else if ((J == null ? undefined : J.size) === "large") {
      A = udTypographyBody0Style.udTypographyBody0;
    }
    w = [docxLayoutDisplayConfig.layoutDisplayConfig];
    if (ee) {
      w.push(A, {
        props: {
          maxWidth: docxIndexDelayHash.docxDelayClass
        }
      });
    } else {
      w.push({
        props: {
          marginLeft: flowDocShortcutId_1.flowDocShortcutId,
          overflowWrap: constantStringExport_2.constantId
        }
      });
    }
    var el = w;
    return reactCoreLibraryReexport.createElement("label", {
      className: eu,
      style: O,
      onMouseEnter: Z,
      onMouseLeave: W
    }, reactCoreLibraryReexport.createElement("span", {
      className: Y
    }, reactCoreLibraryReexport.createElement("input", objectAssignUtil.objectAssign({
      ref: X,
      className: conditionalClassnames.default(K("__input")),
      type: "radio",
      role: P === undefined ? "radio" : P,
      checked: er,
      onChange: function (e) {
        var i = {
          target: {
            type: "radio",
            checked: e.target.checked,
            value: $
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
        if (J && domElementWindowUtils.isFunction(J.onChange)) {
          J.onChange(i);
        } else {
          eo(e.target.checked);
          if (domElementWindowUtils.isFunction(j)) {
            j(i);
          }
        }
      },
      "aria-checked": er,
      disabled: ea,
      name: en
    }, objectOmitUtil_2.omitProps(Q, ["error"]))), reactCoreLibraryReexport.createElement("span", {
      className: K("__wallpaper")
    }), reactCoreLibraryReexport.createElement("span", {
      className: K("__checked-ink")
    })), z ? reactCoreLibraryReexport.createElement(typographyTextComponent.TypographyText, {
      variant: "plain",
      className: conditionalClassnames.default(K("__label-content"), ea && K("__label-content-disabled")),
      as: "span",
      lineClamp: ee ? 1 : undefined,
      sx: el
    }, z) : null);
  });
  var arrayIterableSliceUtil = require("array-iterable-slice-util") /*id: 802480*/;
  var sizeAbbrevUtils = require("size-abbrev-utils") /*id: 464464*/;
  var P = reactCoreLibraryReexport.forwardRef(function (e, i) {
    var r;
    var o;
    var s;
    var u;
    var l;
    var c = e.className;
    var _ = e.options;
    var d = e.direction;
    var p = d === undefined ? "horizontal" : d;
    var m = e.disabled;
    var D = e.children;
    var h = e.size;
    var y = e.style;
    var k = e.id;
    var M = e.onMouseEnter;
    var g = e.onMouseLeave;
    var v = e.prefixCls;
    var x = reactContextUtilsHooks.useComponentSize();
    var b = h ?? x;
    var E = reactContextUtilsHooks.useComponentClass("radio-group", v);
    var I = reactContextUtilsHooks.useComponentClass("radio-button", v)();
    var S = useControlledState.useControlledState(e.defaultValue, e.value, {
      isControlledOverride: "value" in e
    });
    var P = iterableToArrayUtil_1_1.iterableToArray(S, 2);
    var B = P[0];
    var O = P[1];
    r = e.optionType;
    o = reactCoreLibraryReexport.useState(new Map());
    u = (s = iterableToArrayUtil_1_1.iterableToArray(o, 2))[0];
    l = s[1];
    var j = {
      registerBOT: reactCoreLibraryReexport.useCallback(function (e) {
        l(function (i) {
          return new Map([].concat(arrayIterableSliceUtil.sliceArrayIterable(i.entries()), [[e, "button"]]));
        });
      }, []),
      unregisterBOT: reactCoreLibraryReexport.useCallback(function (e) {
        l(function (i) {
          i.delete(e);
          return new Map(arrayIterableSliceUtil.sliceArrayIterable(i.entries()));
        });
      }, []),
      optionType: u.size ? "button" : r === undefined ? "default" : r
    };
    var Z = j.registerBOT;
    var W = j.unregisterBOT;
    var z = j.optionType;
    return reactCoreLibraryReexport.createElement(A, {
      value: {
        onChange: function (i) {
          var r = i.target.value;
          if (r !== undefined) {
            O(r);
            var o = e.onChange;
            if (domElementWindowUtils.isFunction(o) && r !== B) {
              o(r, i);
            }
          }
        },
        value: B,
        disabled: e.disabled,
        name: e.name,
        error: e.error,
        registerBOT: Z,
        unregisterBOT: W,
        size: b
      }
    }, function () {
      var e = D;
      if (_ && _.length > 0) {
        var r = z === "button" ? I : undefined;
        e = _.map(function (e) {
          if (typeof e == "string") {
            return reactCoreLibraryReexport.createElement(w, {
              key: e,
              disabled: m,
              value: e,
              checked: B === e,
              prefixCls: r,
              optionType: z
            }, e);
          } else {
            return reactCoreLibraryReexport.createElement(w, {
              key: `radio-option-${e.value}`,
              disabled: e.disabled || m,
              value: e.value,
              checked: B === e.value,
              style: e.style,
              className: e.className,
              prefixCls: r,
              optionType: z
            }, e.label);
          }
        });
      }
      var o = sizeAbbrevUtils.getStandardAbbrev(b);
      var n = conditionalClassnames.default(E(), z === "button" && E("-button"), E("--mode-solid"), E(`--direction-${p}`), objectPropertySetter.setObjectProperty({}, E(`--size-${o}`), o), c);
      return reactCoreLibraryReexport.createElement("div", {
        className: n,
        style: y,
        onMouseEnter: M,
        onMouseLeave: g,
        id: k,
        ref: i
      }, e);
    }());
  });
  var B = reactCoreLibraryReexport.memo(P);
  var assertNotNullish = require("assert-not-nullish") /*id: 244023*/;
  var j = reactCoreLibraryReexport.forwardRef(function (e, i) {
    var r = b();
    var a = r == null ? undefined : r.registerBOT;
    var n = r == null ? undefined : r.unregisterBOT;
    var s = reactContextUtilsHooks.useComponentClass("radio-button");
    var u = objectAssignUtil.objectAssign({}, (assertNotNullish.assertNotNullish(e), e));
    if (r) {
      u.checked = e.value === r.value;
      u.disabled = e.disabled || r.disabled;
    }
    reactCoreLibraryReexport.useLayoutEffect(function () {
      if (domElementWindowUtils.isNotNullOrUndefined(e.value)) {
        var i = e.value;
        if (a != null) {
          a(i);
        }
        return function () {
          if (n != null) {
            n(i);
          }
        };
      }
    }, [e.value, a, n]);
    return reactCoreLibraryReexport.createElement(w, objectAssignUtil.objectAssign({
      prefixCls: s()
    }, u, {
      optionType: "button",
      ref: i
    }));
  });
  var Z = w;
  Z.Button = j;
  Z.Group = B;
  require.d(exports, {
    Radio: function () {
      return Z;
    }
  });
}