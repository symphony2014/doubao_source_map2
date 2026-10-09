// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'v' to 'Menu'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 70389.cef4ab9b.js
         * chunkId: 70389
         * moduleId: 821060
         */
module.exports = function (module, exports, require) {
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var composeClassNamesUtil = require("compose-class-names-util") /*id: 606502*/;
  var conditionalClassnames = require("conditional-classnames") /*id: 820269*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var udTypographyHeadlineStyle = require("ud-typography-headline-style") /*id: 109181*/;
  var arrayIterableSliceUtil = require("array-iterable-slice-util") /*id: 802480*/;
  var flattenReactChildrenUtil_1 = require("flatten-react-children-util_1") /*id: 697377*/;
  function f(e, t) {
    return flattenReactChildrenUtil_1.default(e).map(function (e, n) {
      if (reactCoreLibraryReexport.isValidElement(e)) {
        var r = e.key;
        var i = e.props?.eventKey ?? r;
        if (i == null) {
          i = `tmp_key-${[].concat(arrayIterableSliceUtil.sliceArrayIterable(t), [n]).join("-")}`;
        }
        var c = {
          key: i,
          eventKey: i
        };
        return reactCoreLibraryReexport.cloneElement(e, c);
      }
      return e;
    });
  }
  var iterableToArrayUtil_1_1 = require("iterable-to-array-util_1_1") /*id: 975753*/;
  var objectPropertyAssign = require("object-property-assign") /*id: 526210*/;
  var useCachedValueHook_1 = require("use-cached-value-hook_1") /*id: 825031*/;
  var shallowEqualUtil = require("shallow-equal-util") /*id: 181980*/;
  var h = ["children", "locked"];
  var b = reactCoreLibraryReexport.createContext(null);
  function y(e) {
    var t = e.children;
    var n = e.locked;
    var o = objectOmitHelper_1.omitWithSymbols(e, h);
    var r = reactCoreLibraryReexport.useContext(b);
    var i = useCachedValueHook_1.default(function () {
      var e;
      e = objectPropertyAssign.assignObject({}, r);
      Object.entries(o).forEach(function (t) {
        var n = iterableToArrayUtil_1_1.iterableToArray(t, 2);
        var o = n[0];
        var l = n[1];
        if (l !== undefined) {
          e[o] = l;
        }
      });
      return e;
    }, [r, o], function (e, t) {
      return !n && (e[0] !== t[0] || !shallowEqualUtil.shallowEqual(e[1], t[1]));
    });
    return reactCoreLibraryReexport.createElement(b.Provider, {
      value: i
    }, t);
  }
  var C = reactCoreLibraryReexport.createContext(null);
  function g() {
    return reactCoreLibraryReexport.useContext(C);
  }
  var Z = reactCoreLibraryReexport.createContext([]);
  function E(e) {
    var t = reactCoreLibraryReexport.useContext(Z);
    return reactCoreLibraryReexport.useMemo(function () {
      if (e !== undefined) {
        return [].concat(arrayIterableSliceUtil.sliceArrayIterable(t), [e]);
      } else {
        return t;
      }
    }, [t, e]);
  }
  var x = reactCoreLibraryReexport.createContext(null);
  var w = ["className", "title", "eventKey", "children"];
  var k = ["children"];
  function N(e) {
    var t = e.className;
    var n = e.title;
    e.eventKey;
    var r = e.children;
    var c = objectOmitHelper_1.omitWithSymbols(e, w);
    var u = reactCoreLibraryReexport.useContext(b).prefixCls;
    var s = `${u}-item-group`;
    return reactCoreLibraryReexport.createElement("li", objectAssignUtil.objectAssign({}, c, {
      onClick: function (e) {
        return e.stopPropagation();
      },
      className: conditionalClassnames.default(s, t)
    }), reactCoreLibraryReexport.createElement("div", {
      className: `${s}-title`,
      title: typeof n == "string" ? n : undefined
    }, n), reactCoreLibraryReexport.createElement("ul", {
      className: `${s}-list`
    }, r));
  }
  function M(e) {
    var t = e.children;
    var n = objectOmitHelper_1.omitWithSymbols(e, k);
    var o = f(t, E(n.eventKey));
    if (g()) {
      return o;
    } else {
      return reactCoreLibraryReexport.createElement(N, n, o);
    }
  }
  function S(e) {
    var t = e.className;
    var n = e.style;
    var o = reactCoreLibraryReexport.useContext(b).prefixCls;
    if (g()) {
      return null;
    } else {
      return reactCoreLibraryReexport.createElement("li", {
        className: conditionalClassnames.default(`${o}-item-divider`, t),
        style: n
      });
    }
  }
  var objectPropertySetter = require("object-property-setter") /*id: 84841*/;
  var rightBoldOutlinedIcon = require("right-bold-outlined-icon") /*id: 971784*/;
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  var useControlledStateHook_2 = require("use-controlled-state-hook_2") /*id: 900767*/;
  require("empty-module-stub_8_1") /*id: 958386*/;
  var responsiveOverflowList = require("responsive-overflow-list") /*id: 249548*/;
  var classCallCheckUtil = require("class-call-check-util") /*id: 822439*/;
  var classPropertyUtil = require("class-property-util") /*id: 801584*/;
  var setPrototypeInheritance = require("set-prototype-inheritance") /*id: 805158*/;
  var wrapNativeSuperHelper = require("wrap-native-super-helper") /*id: 694678*/;
  var keyboardKeyCodes_1_1 = require("keyboard-key-codes_1_1") /*id: 940513*/;
  var objectOmitKeysUtil = require("object-omit-keys-util") /*id: 354420*/;
  function V(e, t, n, o) {
    var l = reactCoreLibraryReexport.useContext(b);
    var r = l.activeKey;
    var i = l.onActive;
    var c = l.onInactive;
    var u = {
      active: r === e && e !== undefined
    };
    if (!t) {
      u.onMouseEnter = function (t) {
        if (n != null) {
          n({
            key: e,
            domEvent: t
          });
        }
        i(e);
      };
      u.onMouseLeave = function (t) {
        if (o != null) {
          o({
            key: e,
            domEvent: t
          });
        }
        c(e);
      };
    }
    return u;
  }
  var H = ["item"];
  function F(e) {
    var t = e.item;
    var n = objectOmitHelper_1.omitWithSymbols(e, H);
    Object.defineProperty(n, "item", {
      get: function () {
        return t;
      }
    });
    return n;
  }
  function j(e) {
    var t;
    var n = e.icon;
    var o = e.props;
    var l = e.children;
    return (typeof n == "function" ? reactCoreLibraryReexport.createElement(n, objectPropertyAssign.assignObject({}, o)) : n) || l || null;
  }
  var W = {
    itemPaddingX: 16,
    inlineIndent: 28
  };
  function B(e) {
    var t = reactCoreLibraryReexport.useContext(b);
    var n = t.mode;
    var o = t.rtl;
    var l = t.inlineIndent;
    if (n !== "inline") {
      return {};
    }
    var r = W.itemPaddingX + (e - 1) * l;
    if (o) {
      return {
        paddingRight: r
      };
    } else {
      return {
        paddingLeft: r
      };
    }
  }
  var U = reactCoreLibraryReexport.createContext(null);
  function q(e, t) {
    if (e === undefined) {
      return null;
    } else {
      return `${e}-${t}`;
    }
  }
  function X(e) {
    return q(reactCoreLibraryReexport.useContext(U), e);
  }
  var Y = ["title", "attribute", "elementRef"];
  var G = ["style", "className", "eventKey", "warnKey", "disabled", "itemIcon", "children", "role", "onMouseEnter", "onMouseLeave", "onClick", "onKeyDown", "onFocus"];
  var J = ["active"];
  var Q = function (e) {
    setPrototypeInheritance.setInheritance(n, e);
    var t = wrapNativeSuperHelper.wrapNativeSuper(n);
    function n() {
      classCallCheckUtil.classCallCheck(this, n);
      return t.apply(this, arguments);
    }
    classPropertyUtil.defineClassProps(n, [{
      key: "render",
      value: function () {
        var e = this.props;
        var t = e.title;
        var n = e.attribute;
        var r = e.elementRef;
        var i = objectOmitHelper_1.omitWithSymbols(e, Y);
        var c = objectOmitKeysUtil.default(i, ["eventKey"]);
        return reactCoreLibraryReexport.createElement(responsiveOverflowList.Overflow.Item, objectAssignUtil.objectAssign({}, n, {
          title: typeof t == "string" ? t : undefined
        }, c, {
          ref: r
        }));
      }
    }]);
    return n;
  }(reactCoreLibraryReexport.Component);
  function $(e) {
    var t;
    var n = e.style;
    var r = e.className;
    var c = e.eventKey;
    e.warnKey;
    var s = e.disabled;
    var f = e.itemIcon;
    var d = e.children;
    var v = e.role;
    var m = e.onMouseEnter;
    var h = e.onMouseLeave;
    var y = e.onClick;
    var C = e.onKeyDown;
    var g = e.onFocus;
    var Z = objectOmitHelper_1.omitWithSymbols(e, G);
    var x = X(c);
    var w = reactCoreLibraryReexport.useContext(b);
    var k = w.prefixCls;
    var N = w.onItemClick;
    var M = w.disabled;
    var S = w.overflowDisabled;
    var I = w.itemIcon;
    var K = w.selectedKeys;
    var O = w.onActive;
    var A = `${k}-item`;
    var L = reactCoreLibraryReexport.useRef();
    var R = reactCoreLibraryReexport.useRef();
    var D = !!M || !!s;
    var _ = E(c);
    function z(e) {
      return {
        key: c,
        keyPath: arrayIterableSliceUtil.sliceArrayIterable(_).reverse(),
        item: L.current,
        domEvent: e
      };
    }
    var H = V(c, D, m, h);
    var W = H.active;
    var U = objectOmitHelper_1.omitWithSymbols(H, J);
    var q = K.includes(c);
    var Y = B(_.length);
    var $ = {};
    if (e.role === "option") {
      $["aria-selected"] = q;
    }
    return reactCoreLibraryReexport.createElement(Q, objectAssignUtil.objectAssign({
      ref: L,
      elementRef: R,
      role: v === null ? "none" : v || "menuitem",
      tabIndex: s ? null : -1,
      "data-menu-id": S && x ? null : x
    }, Z, U, $, {
      component: "li",
      "aria-disabled": s,
      style: objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, Y), n),
      className: conditionalClassnames.default(A, (t = {}, objectPropertySetter.setObjectProperty(t, `${A}-active`, W), objectPropertySetter.setObjectProperty(t, `${A}-selected`, q), objectPropertySetter.setObjectProperty(t, `${A}-disabled`, D), t), r),
      onClick: function (e) {
        if (!D) {
          var t = z(e);
          if (y != null) {
            y(F(t));
          }
          N(t);
        }
      },
      onKeyDown: function (e) {
        if (C != null) {
          C(e);
        }
        if (e.which === keyboardKeyCodes_1_1.default.ENTER) {
          var t = z(e);
          if (y != null) {
            y(F(t));
          }
          N(t);
        }
      },
      onFocus: function (e) {
        O(c);
        if (g != null) {
          g(e);
        }
      }
    }), d, reactCoreLibraryReexport.createElement(j, {
      props: objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, e), {}, {
        isSelected: q
      }),
      icon: f || I
    }));
  }
  function ee(e) {
    var t = e.eventKey;
    var n = g();
    var o = E(t);
    reactCoreLibraryReexport.useEffect(function () {
      if (n) {
        n.registerPath(t, o);
        return function () {
          n.unregisterPath(t, o);
        };
      }
    }, [o]);
    if (n) {
      return null;
    } else {
      return reactCoreLibraryReexport.createElement($, e);
    }
  }
  function et(e) {
    var t = reactCoreLibraryReexport.useRef(e);
    t.current = e;
    var n = reactCoreLibraryReexport.useCallback(function () {
      var e;
      var n = arguments.length;
      var o = Array(n);
      var l = 0;
      for (; l < n; l++) {
        o[l] = arguments[l];
      }
      if ((e = t.current) === null || e === undefined) {
        return undefined;
      } else {
        return e.call.apply(e, [t].concat(o));
      }
    }, []);
    if (e) {
      return n;
    } else {
      return undefined;
    }
  }
  var en = ["className", "children"];
  var eo = reactCoreLibraryReexport.forwardRef(function (e, t) {
    var n = e.className;
    var r = e.children;
    var c = objectOmitHelper_1.omitWithSymbols(e, en);
    var u = reactCoreLibraryReexport.useContext(b);
    var s = u.prefixCls;
    var f = u.mode;
    return reactCoreLibraryReexport.createElement("ul", objectAssignUtil.objectAssign({
      className: conditionalClassnames.default(s, `${s}-sub`, `${s}-${f === "inline" ? "inline" : "vertical"}`, n)
    }, c, {
      "data-menu-list": true,
      ref: t
    }), r);
  });
  eo.displayName = "SubMenuList";
  var popupTriggerCore = require("popup-trigger-core") /*id: 956311*/;
  var delayedExecutionUtil = require("delayed-execution-util") /*id: 944867*/;
  var ei = {
    adjustX: 1,
    adjustY: 1
  };
  var ea = {
    topLeft: {
      points: ["bl", "tl"],
      overflow: ei,
      offset: [0, -7]
    },
    bottomLeft: {
      points: ["tl", "bl"],
      overflow: ei,
      offset: [0, 7]
    },
    leftTop: {
      points: ["tr", "tl"],
      overflow: ei,
      offset: [-4, 0]
    },
    rightTop: {
      points: ["tl", "tr"],
      overflow: ei,
      offset: [4, 0]
    }
  };
  var ec = {
    topLeft: {
      points: ["bl", "tl"],
      overflow: ei,
      offset: [0, -7]
    },
    bottomLeft: {
      points: ["tl", "bl"],
      overflow: ei,
      offset: [0, 7]
    },
    rightTop: {
      points: ["tr", "tl"],
      overflow: ei,
      offset: [-4, 0]
    },
    leftTop: {
      points: ["tl", "tr"],
      overflow: ei,
      offset: [4, 0]
    }
  };
  function eu(e, t, n) {
    return t || (n ? n[e] || n.other : undefined);
  }
  var es = {
    horizontal: "bottomLeft",
    vertical: "rightTop",
    "vertical-left": "rightTop",
    "vertical-right": "leftTop"
  };
  function ef(e) {
    var t = e.prefixCls;
    var n = e.visible;
    var o = e.children;
    var l = e.popup;
    var r = e.popupClassName;
    var c = e.popupOffset;
    var u = e.disabled;
    var s = e.mode;
    var f = e.onVisibleChange;
    var v = reactCoreLibraryReexport.useContext(b);
    var m = v.getPopupContainer;
    var h = v.rtl;
    var y = v.subMenuOpenDelay;
    var C = v.subMenuCloseDelay;
    var g = v.builtinPlacements;
    var Z = v.triggerSubMenuAction;
    var E = v.forceSubMenuRender;
    var x = v.motion;
    var w = v.defaultMotions;
    var k = reactCoreLibraryReexport.useState(false);
    var N = iterableToArrayUtil_1_1.iterableToArray(k, 2);
    var M = N[0];
    var S = N[1];
    var I = h ? objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, ec), g) : objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, ea), g);
    var K = es[s];
    var O = eu(s, x, w);
    var A = objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, O), {}, {
      leavedClassName: `${t}-hidden`,
      removeOnLeave: false,
      motionAppear: true
    });
    var L = reactCoreLibraryReexport.useRef();
    reactCoreLibraryReexport.useEffect(function () {
      L.current = delayedExecutionUtil.default(function () {
        S(n);
      });
      return function () {
        delayedExecutionUtil.default.cancel(L.current);
      };
    }, [n]);
    return reactCoreLibraryReexport.createElement(popupTriggerCore.Trigger, {
      prefixCls: t,
      popupClassName: conditionalClassnames.default(`${t}-popup`, objectPropertySetter.setObjectProperty({}, `${t}-rtl`, h), r),
      stretch: s === "horizontal" ? "minWidth" : undefined,
      getPopupContainer: m,
      builtinPlacements: I,
      popupPlacement: K,
      popupVisible: M,
      popup: l,
      popupAlign: c && {
        offset: c
      },
      action: u ? [] : Z && [Z],
      mouseEnterDelay: y,
      mouseLeaveDelay: C,
      onPopupVisibleChange: f,
      forceRender: E,
      popupMotion: A
    }, o);
  }
  var cssMotionAnimationUtil = require("css-motion-animation-util") /*id: 663888*/;
  function ep(e) {
    var t = e.id;
    var n = e.open;
    var l = e.keyPath;
    var r = e.children;
    var i = "inline";
    var c = reactCoreLibraryReexport.useContext(b);
    var u = c.prefixCls;
    var s = c.forceSubMenuRender;
    var f = c.motion;
    var v = c.defaultMotions;
    var m = c.mode;
    var h = reactCoreLibraryReexport.useRef(false);
    h.current = m === i;
    var C = reactCoreLibraryReexport.useState(!h.current);
    var g = iterableToArrayUtil_1_1.iterableToArray(C, 2);
    var Z = g[0];
    var E = g[1];
    var x = !!h.current && n;
    reactCoreLibraryReexport.useEffect(function () {
      if (h.current) {
        E(false);
      }
    }, [m]);
    var w = objectPropertyAssign.assignObject({}, eu(i, f, v));
    if (l.length > 1) {
      w.motionAppear = false;
    }
    var k = w.onVisibleChanged;
    w.onVisibleChanged = function (e) {
      if (!h.current && !e) {
        E(true);
      }
      if (k == null) {
        return undefined;
      } else {
        return k(e);
      }
    };
    if (Z) {
      return null;
    } else {
      return reactCoreLibraryReexport.createElement(y, {
        mode: i,
        locked: !h.current
      }, reactCoreLibraryReexport.createElement(cssMotionAnimationUtil.CSSMotion, objectAssignUtil.objectAssign({
        visible: x
      }, w, {
        forceRender: s,
        removeOnLeave: false,
        leavedClassName: `${u}-hidden`
      }), function (e) {
        var n = e.className;
        var o = e.style;
        return reactCoreLibraryReexport.createElement(eo, {
          id: t,
          className: n,
          style: o
        }, r);
      }));
    }
  }
  var ev = ["style", "className", "title", "eventKey", "warnKey", "disabled", "internalPopupClose", "children", "itemIcon", "expandIcon", "popupClassName", "popupOffset", "onClick", "onMouseEnter", "onMouseLeave", "onTitleClick", "onTitleMouseEnter", "onTitleMouseLeave"];
  var em = ["active"];
  function eh(e) {
    var t;
    var n = e.style;
    var r = e.className;
    var c = e.title;
    var u = e.eventKey;
    e.warnKey;
    var s = e.disabled;
    var f = e.internalPopupClose;
    var v = e.children;
    var m = e.itemIcon;
    var h = e.expandIcon;
    var C = e.popupClassName;
    var g = e.popupOffset;
    var Z = e.onClick;
    var w = e.onMouseEnter;
    var k = e.onMouseLeave;
    var N = e.onTitleClick;
    var M = e.onTitleMouseEnter;
    var S = e.onTitleMouseLeave;
    var I = objectOmitHelper_1.omitWithSymbols(e, ev);
    var K = X(u) || undefined;
    var O = reactCoreLibraryReexport.useContext(b);
    var L = O.prefixCls;
    var R = O.mode;
    var D = O.openKeys;
    var _ = O.disabled;
    var T = O.overflowDisabled;
    var z = O.activeKey;
    var H = O.selectedKeys;
    var W = O.itemIcon;
    var U = O.expandIcon;
    var q = O.onItemClick;
    var Y = O.onOpenChange;
    var G = O.onActive;
    var J = reactCoreLibraryReexport.useContext(x).isSubPathKey;
    var Q = E();
    var $ = `${L}-submenu`;
    var ee = !!_ || !!s;
    var en = reactCoreLibraryReexport.useRef(null);
    var el = reactCoreLibraryReexport.useRef(null);
    var er = h || U;
    var ei = D.includes(u);
    var ea = !T && ei;
    var ec = J(H, u);
    var eu = V(u, ee, M, S);
    var es = eu.active;
    var ed = objectOmitHelper_1.omitWithSymbols(eu, em);
    var eh = reactCoreLibraryReexport.useState(false);
    var eb = iterableToArrayUtil_1_1.iterableToArray(eh, 2);
    var ey = eb[0];
    var eC = eb[1];
    function eg(e) {
      if (!ee) {
        eC(e);
      }
    }
    var eZ = reactCoreLibraryReexport.useMemo(function () {
      return es || R !== "inline" && (ey || J([z], u));
    }, [R, es, z, ey, u, J]);
    var eE = B(Q.length);
    var ex = et(function (e) {
      if (Z != null) {
        Z(F(e));
      }
      q(e);
    });
    var ew = K && `${K}-popup`;
    var ek = reactCoreLibraryReexport.createElement("div", objectAssignUtil.objectAssign({
      role: "menuitem",
      style: eE,
      className: `${$}-title`,
      tabIndex: ee ? undefined : -1,
      ref: en,
      title: typeof c == "string" ? c : undefined,
      "data-menu-id": T && K ? null : K,
      "aria-expanded": ea,
      "aria-haspopup": true,
      "aria-controls": ew,
      "aria-disabled": ee,
      onClick: function (e) {
        if (!ee) {
          if (N != null) {
            N({
              key: u,
              domEvent: e
            });
          }
          if (R === "inline") {
            Y(u, !ei);
          }
        }
      },
      onFocus: function () {
        G(u);
      }
    }, ed), c, reactCoreLibraryReexport.createElement(j, {
      icon: R !== "horizontal" ? er : null,
      props: objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, e), {}, {
        isOpen: ea,
        isSubMenu: true
      })
    }, reactCoreLibraryReexport.createElement("i", {
      className: `${$}-arrow`
    })));
    var eN = reactCoreLibraryReexport.useRef(R);
    if (R !== "inline") {
      eN.current = Q.length > 1 ? "vertical" : R;
    }
    if (!T) {
      var eM = eN.current;
      ek = reactCoreLibraryReexport.createElement(ef, {
        mode: eM,
        prefixCls: $,
        visible: !f && ea && R !== "inline",
        popupClassName: C,
        popupOffset: g,
        popup: reactCoreLibraryReexport.createElement(y, {
          mode: eM === "horizontal" ? "vertical" : eM
        }, reactCoreLibraryReexport.createElement(eo, {
          id: ew || undefined,
          ref: el
        }, v)),
        disabled: ee,
        onVisibleChange: function (e) {
          if (R !== "inline") {
            Y(u, e);
          }
        }
      }, ek);
    }
    return reactCoreLibraryReexport.createElement(y, {
      onItemClick: ex,
      mode: R === "horizontal" ? "vertical" : R,
      itemIcon: m || W,
      expandIcon: er
    }, reactCoreLibraryReexport.createElement(responsiveOverflowList.Overflow.Item, objectAssignUtil.objectAssign({
      role: "none"
    }, I, {
      component: "li",
      style: n,
      className: conditionalClassnames.default($, `${$}-${R}`, r, (t = {}, objectPropertySetter.setObjectProperty(t, `${$}-open`, ea), objectPropertySetter.setObjectProperty(t, `${$}-active`, eZ), objectPropertySetter.setObjectProperty(t, `${$}-selected`, ec), objectPropertySetter.setObjectProperty(t, `${$}-disabled`, ee), t)),
      onMouseEnter: function (e) {
        eg(true);
        if (w != null) {
          w({
            key: u,
            domEvent: e
          });
        }
      },
      onMouseLeave: function (e) {
        eg(false);
        if (k != null) {
          k({
            key: u,
            domEvent: e
          });
        }
      }
    }), ek, !T && reactCoreLibraryReexport.createElement(ep, {
      id: ew,
      open: ea,
      keyPath: Q
    }, v)));
  }
  function eb(e) {
    var t;
    var n = e.eventKey;
    var o = e.children;
    var l = E(n);
    var r = f(o, l);
    var i = g();
    reactCoreLibraryReexport.useEffect(function () {
      if (i) {
        i.registerPath(n, l);
        return function () {
          i.unregisterPath(n, l);
        };
      }
    }, [l]);
    t = i ? r : reactCoreLibraryReexport.createElement(eh, e, r);
    return reactCoreLibraryReexport.createElement(Z.Provider, {
      value: l
    }, t);
  }
  var focusNodeListUtil = require("focus-node-list-util") /*id: 923622*/;
  var eC = keyboardKeyCodes_1_1.default.LEFT;
  var eg = keyboardKeyCodes_1_1.default.RIGHT;
  var eZ = keyboardKeyCodes_1_1.default.UP;
  var eE = keyboardKeyCodes_1_1.default.DOWN;
  var ex = keyboardKeyCodes_1_1.default.ENTER;
  var ew = keyboardKeyCodes_1_1.default.ESC;
  var ek = [eZ, eE, eC, eg];
  function eN(e, t, n, o = 1) {
    if (!e) {
      return null;
    }
    var l = focusNodeListUtil.getFocusNodeList(e, true).filter(function (e) {
      return t.has(e);
    });
    var r = l.length;
    var i = l.findIndex(function (e) {
      return n === e;
    });
    if (o < 0) {
      if (i === -1) {
        i = r - 1;
      } else {
        i -= 1;
      }
    } else if (o > 0) {
      i += 1;
    }
    return l[i = (i + r) % r];
  }
  var eM = Math.random().toFixed(5).toString().slice(2);
  var eS = 0;
  var eP = "__RC_UTIL_PATH_SPLIT__";
  function eI(e) {
    return e.join(eP);
  }
  var eK = "rc-menu-more";
  var reactContextUtilsHooks = require("react-context-utils-hooks") /*id: 618670*/;
  var eA = ["prefixCls", "style", "className", "tabIndex", "children", "direction", "id", "mode", "inlineCollapsed", "disabled", "disabledOverflow", "subMenuOpenDelay", "subMenuCloseDelay", "forceSubMenuRender", "defaultOpenKeys", "openKeys", "activeKey", "defaultActiveFirst", "selectable", "multiple", "defaultSelectedKeys", "selectedKeys", "onSelect", "onDeselect", "inlineIndent", "motion", "defaultMotions", "triggerSubMenuAction", "builtinPlacements", "itemIcon", "expandIcon", "overflowedIndicator", "getPopupContainer", "onClick", "onOpenChange", "onKeyDown", "openAnimation", "openTransitionName"];
  var eL = [];
  function eR(e) {
    var t;
    var n;
    var r;
    var c;
    var s;
    var v;
    var h;
    var b;
    var g;
    var Z;
    var E;
    var w;
    var k;
    var N;
    var M;
    var S;
    var I;
    var L;
    var R;
    var D;
    var _;
    var T;
    var z;
    var V;
    var H;
    var B;
    var X = reactContextUtilsHooks.useComponentClass("internal-menu");
    var Y = e.prefixCls;
    var G = Y === undefined ? X() : Y;
    var J = e.style;
    var Q = e.className;
    var $ = e.tabIndex;
    var en = e.children;
    var eo = e.direction;
    var el = e.id;
    var ei = e.mode;
    var ea = ei === undefined ? "vertical" : ei;
    var ec = e.inlineCollapsed;
    var eu = e.disabled;
    var es = e.disabledOverflow;
    var ef = e.subMenuOpenDelay;
    var ed = e.subMenuCloseDelay;
    var ep = e.forceSubMenuRender;
    var ev = e.defaultOpenKeys;
    var em = e.openKeys;
    var eh = e.activeKey;
    var ey = e.defaultActiveFirst;
    var eR = e.selectable;
    var eD = eR === undefined || eR;
    var e_ = e.multiple;
    var eT = e_ !== undefined && e_;
    var ez = e.defaultSelectedKeys;
    var eV = e.selectedKeys;
    var eH = e.onSelect;
    var eF = e.onDeselect;
    var ej = e.inlineIndent;
    var eW = ej === undefined ? W.inlineIndent : ej;
    var eB = e.motion;
    var eU = e.defaultMotions;
    var eq = e.triggerSubMenuAction;
    var eX = e.builtinPlacements;
    var eY = e.itemIcon;
    var eG = e.expandIcon;
    var eJ = e.overflowedIndicator;
    var eQ = eJ === undefined ? "..." : eJ;
    var e$ = e.getPopupContainer;
    var e0 = e.onClick;
    var e1 = e.onOpenChange;
    var e2 = e.onKeyDown;
    e.openAnimation;
    e.openTransitionName;
    var e3 = objectOmitHelper_1.omitWithSymbols(e, eA);
    var e6 = f(en, eL);
    var e9 = reactCoreLibraryReexport.useState(false);
    var e4 = iterableToArrayUtil_1_1.iterableToArray(e9, 2);
    var e8 = e4[0];
    var e7 = e4[1];
    var e5 = reactCoreLibraryReexport.useRef(null);
    t = useControlledStateHook_2.default(el, {
      value: el
    });
    r = (n = iterableToArrayUtil_1_1.iterableToArray(t, 2))[0];
    c = n[1];
    reactCoreLibraryReexport.useEffect(function () {
      eS += 1;
      var e = `${eM}-${eS}`;
      c(`rc-menu-uuid-${e}`);
    }, []);
    var te = r;
    var tt = eo === "rtl";
    var tn = useControlledStateHook_2.default(ev, {
      value: em,
      postState: function (e) {
        return e || eL;
      }
    });
    var to = iterableToArrayUtil_1_1.iterableToArray(tn, 2);
    var tl = to[0];
    var tr = to[1];
    function ti(e, t = false) {
      function n() {
        tr(e);
        if (e1 != null) {
          e1(e);
        }
      }
      if (t) {
        reactDomEntryWrapper.flushSync(n);
      } else {
        n();
      }
    }
    var ta = reactCoreLibraryReexport.useState(tl);
    var tc = iterableToArrayUtil_1_1.iterableToArray(ta, 2);
    var tu = tc[0];
    var ts = tc[1];
    var tf = reactCoreLibraryReexport.useRef(false);
    var td = reactCoreLibraryReexport.useMemo(function () {
      if ((ea === "inline" || ea === "vertical") && ec) {
        return ["vertical", ec];
      } else {
        return [ea, false];
      }
    }, [ea, ec]);
    var tp = iterableToArrayUtil_1_1.iterableToArray(td, 2);
    var tv = tp[0];
    var tm = tp[1];
    var th = tv === "inline";
    var tb = reactCoreLibraryReexport.useState(tv);
    var ty = iterableToArrayUtil_1_1.iterableToArray(tb, 2);
    var tC = ty[0];
    var tg = ty[1];
    var tZ = reactCoreLibraryReexport.useState(tm);
    var tE = iterableToArrayUtil_1_1.iterableToArray(tZ, 2);
    var tx = tE[0];
    var tw = tE[1];
    reactCoreLibraryReexport.useEffect(function () {
      tg(tv);
      tw(tm);
      if (!tf.current) {
        tf.current = true;
        return;
      }
      if (th) {
        tr(tu);
      } else {
        ti(eL);
      }
    }, [tv, tm]);
    var tk = reactCoreLibraryReexport.useState(0);
    var tN = iterableToArrayUtil_1_1.iterableToArray(tk, 2);
    var tM = tN[0];
    var tS = tN[1];
    var tP = tM >= e6.length - 1 || tC !== "horizontal" || es;
    reactCoreLibraryReexport.useEffect(function () {
      if (th) {
        ts(tl);
      }
    }, [tl]);
    s = reactCoreLibraryReexport.useState({});
    v = iterableToArrayUtil_1_1.iterableToArray(s, 2)[1];
    h = reactCoreLibraryReexport.useRef(new Map());
    b = reactCoreLibraryReexport.useRef(new Map());
    g = reactCoreLibraryReexport.useState([]);
    E = (Z = iterableToArrayUtil_1_1.iterableToArray(g, 2))[0];
    w = Z[1];
    k = reactCoreLibraryReexport.useRef(0);
    N = reactCoreLibraryReexport.useRef(false);
    M = function () {
      if (!N.current) {
        v({});
      }
    };
    S = reactCoreLibraryReexport.useCallback(function (e, t) {
      var n;
      var o = eI(t);
      b.current.set(o, e);
      h.current.set(e, o);
      k.current += 1;
      var l = k.current;
      n = function () {
        if (l === k.current) {
          M();
        }
      };
      Promise.resolve().then(n);
    }, []);
    I = reactCoreLibraryReexport.useCallback(function (e, t) {
      var n = eI(t);
      b.current.delete(n);
      h.current.delete(e);
    }, []);
    L = reactCoreLibraryReexport.useCallback(function (e) {
      w(e);
    }, []);
    R = reactCoreLibraryReexport.useCallback(function (e, t) {
      var n = (h.current.get(e) || "").split(eP);
      if (t && E.includes(n[0])) {
        n.unshift(eK);
      }
      return n;
    }, [E]);
    D = reactCoreLibraryReexport.useCallback(function (e, t) {
      return e.some(function (e) {
        return R(e, true).includes(t);
      });
    }, [R]);
    _ = reactCoreLibraryReexport.useCallback(function (e) {
      var t = `${h.current.get(e)}${eP}`;
      var n = new Set();
      arrayIterableSliceUtil.sliceArrayIterable(b.current.keys()).forEach(function (e) {
        if (e.startsWith(t)) {
          n.add(b.current.get(e));
        }
      });
      return n;
    }, []);
    reactCoreLibraryReexport.useEffect(function () {
      return function () {
        N.current = true;
      };
    }, []);
    var tI = {
      registerPath: S,
      unregisterPath: I,
      refreshOverflowKeys: L,
      isSubPathKey: D,
      getKeyPath: R,
      getKeys: function () {
        var e = arrayIterableSliceUtil.sliceArrayIterable(h.current.keys());
        if (E.length) {
          e.push(eK);
        }
        return e;
      },
      getSubPathKeys: _
    };
    var tK = tI.registerPath;
    var tO = tI.unregisterPath;
    var tA = tI.refreshOverflowKeys;
    var tL = tI.isSubPathKey;
    var tR = tI.getKeyPath;
    var tD = tI.getKeys;
    var t_ = tI.getSubPathKeys;
    var tT = reactCoreLibraryReexport.useMemo(function () {
      return {
        registerPath: tK,
        unregisterPath: tO
      };
    }, [tK, tO]);
    var tz = reactCoreLibraryReexport.useMemo(function () {
      return {
        isSubPathKey: tL
      };
    }, [tL]);
    reactCoreLibraryReexport.useEffect(function () {
      tA(tP ? eL : e6.slice(tM + 1).map(function (e) {
        return e.key;
      }));
    }, [tM, tP]);
    var tV = useControlledStateHook_2.default(eh || ey && e6[0]?.key, {
      value: eh
    });
    var tH = iterableToArrayUtil_1_1.iterableToArray(tV, 2);
    var tF = tH[0];
    var tj = tH[1];
    var tW = et(function (e) {
      tj(e);
    });
    var tB = et(function () {
      tj(undefined);
    });
    var tU = useControlledStateHook_2.default(ez || [], {
      value: eV,
      postState: function (e) {
        if (Array.isArray(e)) {
          return e;
        } else if (e == null) {
          return eL;
        } else {
          return [e];
        }
      }
    });
    var tq = iterableToArrayUtil_1_1.iterableToArray(tU, 2);
    var tX = tq[0];
    var tY = tq[1];
    function tG(e) {
      if (eD) {
        var t;
        var n = e.key;
        var o = tX.includes(n);
        tY(t = eT ? o ? tX.filter(function (e) {
          return e !== n;
        }) : [].concat(arrayIterableSliceUtil.sliceArrayIterable(tX), [n]) : [n]);
        var l = objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, e), {}, {
          selectedKeys: t
        });
        if (o) {
          if (eF != null) {
            eF(l);
          }
        } else if (eH != null) {
          eH(l);
        }
      }
      if (!eT && tl != null && tl.length && tC !== "inline") {
        ti(eL);
      }
    }
    var tJ = et(function (e) {
      if (e0 != null) {
        e0(F(e));
      }
      tG(e);
    });
    var tQ = et(function (e, t) {
      var n = (tl == null ? undefined : tl.filter(function (t) {
        return t !== e;
      })) || [];
      if (t) {
        n.push(e);
      } else if (tC !== "inline") {
        var o = t_(e);
        n = n.filter(function (e) {
          return !o.has(e);
        });
      }
      if (!shallowEqualUtil.shallowEqual(tl, n)) {
        ti(n, true);
      }
    });
    var t$ = et(e$);
    T = function (e, t) {
      var n = t ?? (tl == null || !tl.includes(e));
      tQ(e, n);
    };
    z = reactCoreLibraryReexport.useRef();
    (V = reactCoreLibraryReexport.useRef()).current = tF;
    H = function () {
      if (z.current) {
        delayedExecutionUtil.default.cancel(z.current);
      }
    };
    reactCoreLibraryReexport.useEffect(function () {
      return function () {
        H();
      };
    }, []);
    function t0(e) {
      var t = e.which;
      if ([].concat(ek, [ex, ew]).includes(t)) {
        var n;
        var o = new Set();
        var l = new Map();
        var r = new Map();
        function i() {
          o = new Set();
          l = new Map();
          r = new Map();
          tD().forEach(function (e) {
            var t = document.querySelector(`[data-menu-id='${q(te, e)}']`);
            if (t) {
              o.add(t);
              r.set(t, e);
              l.set(e, t);
            }
          });
          return o;
        }
        i();
        var a = function (e, t) {
          for (var n = e || document.activeElement; n;) {
            if (t.has(n)) {
              return n;
            }
            n = n.parentElement;
          }
          return null;
        }(l.get(tF), o);
        var c = r.get(a);
        if (c === undefined) {
          return;
        }
        var u = function (e, t, n, o) {
          var l;
          var r;
          var i;
          var c = "prev";
          var u = "next";
          var s = "children";
          var f = "parent";
          if (e === "inline" && o === ex) {
            return {
              inlineTrigger: true
            };
          }
          l = {};
          objectPropertySetter.setObjectProperty(l, eZ, c);
          objectPropertySetter.setObjectProperty(l, eE, u);
          var d = l;
          r = {};
          objectPropertySetter.setObjectProperty(r, eC, n ? u : c);
          objectPropertySetter.setObjectProperty(r, eg, n ? c : u);
          objectPropertySetter.setObjectProperty(r, eE, s);
          objectPropertySetter.setObjectProperty(r, ex, s);
          var p = r;
          i = {};
          objectPropertySetter.setObjectProperty(i, eZ, c);
          objectPropertySetter.setObjectProperty(i, eE, u);
          objectPropertySetter.setObjectProperty(i, ex, s);
          objectPropertySetter.setObjectProperty(i, ew, f);
          objectPropertySetter.setObjectProperty(i, eC, n ? s : f);
          objectPropertySetter.setObjectProperty(i, eg, n ? f : s);
          var v = i;
          switch ({
            inline: d,
            horizontal: p,
            vertical: v,
            inlineSub: d,
            horizontalSub: v,
            verticalSub: v
          }[`${e}${t ? "" : "Sub"}`]?.[o]) {
            case c:
              return {
                offset: -1,
                sibling: true
              };
            case u:
              return {
                offset: 1,
                sibling: true
              };
            case f:
              return {
                offset: -1,
                sibling: false
              };
            default:
              return {
                offset: 1,
                sibling: false
              };
          }
        }(tC, tR(c, true).length === 1, tt, t);
        if (!u) {
          return;
        }
        if (ek.includes(t)) {
          e.preventDefault();
        }
        function s(e) {
          if (e) {
            var t = e;
            var n = e.querySelector("a");
            if (n != null && n.getAttribute("href")) {
              t = n;
            }
            var o = r.get(e);
            tj(o);
            H();
            z.current = delayedExecutionUtil.default(function () {
              if (V.current === o) {
                t.focus();
              }
            });
          }
        }
        if (u.sibling || !a) {
          s(eN(a && tC !== "inline" ? function (e) {
            for (var t = e; t;) {
              if (t.getAttribute("data-menu-list")) {
                return t;
              }
              t = t.parentElement;
            }
            return null;
          }(a) : e5.current, o, a, u.offset));
        } else if (u.inlineTrigger) {
          T(c);
        } else if (u.offset && u.offset > 0) {
          T(c, true);
          H();
          z.current = delayedExecutionUtil.default(function () {
            i();
            var e = a.getAttribute("aria-controls");
            s(eN(document.getElementById(e), o));
          }, 5);
        } else if (u.offset && u.offset < 0) {
          var f = tR(c, true);
          var d = f[f.length - 2];
          var p = l.get(d);
          T(d, false);
          s(p);
        }
      }
      if (e2 != null) {
        e2(e);
      }
    }
    reactCoreLibraryReexport.useEffect(function () {
      e7(true);
    }, []);
    var t1 = tC !== "horizontal" || es ? e6 : e6.map(function (e, t) {
      return reactCoreLibraryReexport.createElement(y, {
        key: e.key,
        overflowDisabled: t > tM
      }, e);
    });
    var t2 = reactCoreLibraryReexport.createElement(responsiveOverflowList.Overflow, objectAssignUtil.objectAssign({
      id: el,
      ref: e5,
      prefixCls: `${G}-overflow`,
      component: "ul",
      itemComponent: ee,
      className: conditionalClassnames.default(G, `${G}-root`, `${G}-${tC}`, Q, (B = {}, objectPropertySetter.setObjectProperty(B, `${G}-inline-collapsed`, tx), objectPropertySetter.setObjectProperty(B, `${G}-rtl`, tt), B)),
      dir: eo,
      style: J,
      role: "menu",
      tabIndex: $ === undefined ? 0 : $,
      data: t1,
      renderRawItem: function (e) {
        return e;
      },
      renderRawRest: function (e) {
        var t = e.length;
        var n = t ? e6.slice(-t) : null;
        return reactCoreLibraryReexport.createElement(eb, {
          eventKey: eK,
          title: eQ,
          disabled: tP,
          internalPopupClose: t === 0
        }, n);
      },
      maxCount: tC !== "horizontal" || es ? responsiveOverflowList.Overflow.INVALIDATE : responsiveOverflowList.Overflow.RESPONSIVE,
      ssr: "full",
      "data-menu-list": true,
      onVisibleChange: function (e) {
        tS(e);
      },
      onKeyDown: t0
    }, e3));
    return reactCoreLibraryReexport.createElement(U.Provider, {
      value: te
    }, reactCoreLibraryReexport.createElement(y, {
      prefixCls: G,
      mode: tC,
      openKeys: tl,
      rtl: tt,
      disabled: eu,
      motion: e8 ? eB : undefined,
      defaultMotions: e8 ? eU : undefined,
      activeKey: tF,
      onActive: tW,
      onInactive: tB,
      selectedKeys: tX,
      inlineIndent: eW,
      subMenuOpenDelay: ef === undefined ? 0.1 : ef,
      subMenuCloseDelay: ed === undefined ? 0.1 : ed,
      forceSubMenuRender: ep,
      builtinPlacements: eX,
      triggerSubMenuAction: eq === undefined ? "hover" : eq,
      getPopupContainer: t$,
      itemIcon: eY,
      expandIcon: eG,
      onItemClick: tJ,
      onOpenChange: tQ
    }, reactCoreLibraryReexport.createElement(x.Provider, {
      value: tz
    }, t2), reactCoreLibraryReexport.createElement("div", {
      style: {
        display: "none"
      },
      "aria-hidden": true
    }, reactCoreLibraryReexport.createElement(C.Provider, {
      value: tT
    }, e6))));
  }
  eR.Item = ee;
  eR.SubMenu = eb;
  eR.ItemGroup = M;
  eR.Divider = S;
  require("module-no-op") /*id: 116324*/;
  var eD = reactCoreLibraryReexport.createContext(null);
  var e_ = reactCoreLibraryReexport.createContext({
    prefixCls: "",
    inlineCollapsed: false,
    textOverflow: true,
    firstLevel: true,
    showCheckmark: true,
    selectable: true
  });
  function eT() {
    return {
      height: 0,
      opacity: 0
    };
  }
  function ez(e) {
    return {
      height: e.scrollHeight,
      opacity: 1
    };
  }
  function eV(e) {
    return {
      height: e.offsetHeight
    };
  }
  function eH(e, t) {
    return t.propertyName === "height";
  }
  function eF(e, t) {
    var n = {};
    if (typeof e == "number") {
      n.subMenuOpenDelay = e / 1000;
    }
    if (typeof t == "number") {
      n.subMenuCloseDelay = t / 1000;
    }
    return n;
  }
  function ej(e) {
    return e.type?.isSubMenu;
  }
  var domElementWindowUtils = require("dom-element-window-utils") /*id: 655216*/;
  var objectOmitUtil_2 = require("object-omit-util_2") /*id: 644631*/;
  var vmContextProvider = require("vm-context-provider") /*id: 393771*/;
  var iconDownBoldOutlined = require("icon-down-bold-outlined") /*id: 851606*/;
  function eX() {
    var e = reactCoreLibraryReexport.useContext(e_);
    var t = e.mode;
    var n = e.prefixCls;
    if (t === "horizontal") {
      return reactCoreLibraryReexport.createElement("div", {
        className: `${n}-item__ink`
      });
    } else {
      return null;
    }
  }
  function eY() {
    var e = reactContextUtilsHooks.useLocale();
    return reactCoreLibraryReexport.createElement("span", null, e.global.more);
  }
  function eG() {
    var e = reactCoreLibraryReexport.useContext(e_).prefixCls;
    return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, reactCoreLibraryReexport.createElement(eY, null), reactCoreLibraryReexport.createElement(iconDownBoldOutlined.DownBoldOutlined, {
      className: `${e}-overflow-expandIcon`
    }), reactCoreLibraryReexport.createElement(eX, null));
  }
  function eJ(e) {
    var t;
    switch (e) {
      case "horizontal":
        t = [0, -10];
        break;
      case "vertical":
      case "inline":
        t = [8, -10];
        break;
      case "normal":
        t = [3, -4];
    }
    return t;
  }
  require("webcrack-module-shim") /*id: 992314*/;
  var docxToolboxId_1 = require("docx-toolbox-id_1") /*id: 748152*/;
  var uniqueIdentifier = require("unique-identifier") /*id: 461002*/;
  var translateOutlinedIcon_1 = require("translate-outlined-icon_1") /*id: 977617*/;
  var udTypographyBody0Style = require("ud-typography-body-0-style") /*id: 307052*/;
  var tooltipWrapperComponent_1 = require("tooltip-wrapper-component_1") /*id: 943532*/;
  var reactChildrenFlattenUtility = require("react-children-flatten-utility") /*id: 50392*/;
  var typographyTextComponent = require("typography-text-component") /*id: 701412*/;
  var e9 = {
    props: {
      lineHeight: "uodcvno",
      fontWeight: "u11adn32",
      fontSize: "u1bdmrri"
    }
  };
  function e4(e) {
    var t = e.showEllipsis;
    var n = e.title;
    var o = e.style;
    var l = reactCoreLibraryReexport.useContext(b).mode;
    var r = reactCoreLibraryReexport.useContext(e_).prefixCls;
    if (t) {
      return reactCoreLibraryReexport.createElement(typographyTextComponent.TypographyText, {
        as: "div",
        className: conditionalClassnames.default(`${r}-item-title-content`, `${r}-item-title-content-text-overflow`),
        style: o,
        sx: [e9],
        lineClamp: l === "vertical" || l === "inline" ? 2 : 1
      }, n);
    } else {
      return reactCoreLibraryReexport.createElement(typographyTextComponent.TypographyText, {
        as: "div",
        style: o,
        className: `${r}-item-title-content`,
        sx: [e9]
      }, n);
    }
  }
  var reactLayoutComponents = require("react-layout-components") /*id: 486166*/;
  var e7 = ["className", "children", "title", "icon", "textOverflow", "disabled"];
  function e5(e) {
    var t = e.isSelected;
    var n = reactCoreLibraryReexport.useContext(e_);
    var o = n.prefixCls;
    var l = n.mode;
    var i = n.inlineCollapsed;
    var c = n.showCheckmark;
    if (n.selectable && c && l === "normal" && !i) {
      return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, reactCoreLibraryReexport.createElement("span", {
        className: composeClassNamesUtil.composeClassNames({
          props: {
            width: docxToolboxId_1.docxToolboxId,
            flexShrink: uniqueIdentifier.uniqueId
          }
        })
      }), t && reactCoreLibraryReexport.createElement(translateOutlinedIcon_1.TranslateOutlinedIcon, {
        className: `${o}-item-suffix-icon`
      }));
    } else {
      return null;
    }
  }
  var te = ["title"];
  function tt(e) {
    var t;
    var n = e.mode;
    var l = e.inlineCollapsed;
    var r = e.className;
    var c = e.prefixCls;
    var u = e.expandIcon;
    var s = e.textOverflow;
    var f = s === undefined ? n !== "normal" : s;
    var d = e.getPopupContainer;
    var v = d === undefined ? function () {
      return document.body;
    } : d;
    var m = e.subMenuCloseDelay;
    var h = e.subMenuOpenDelay;
    var b = e.inlineIndent;
    var y = b === undefined ? W.inlineIndent : b;
    var C = e.showCheckmark;
    var g = C === undefined || C;
    var Z = e.onClick;
    var E = e.selectable;
    var x = e.builtinPlacements;
    var w = e.overflowedIndicator;
    var k = e.selectedKeys;
    var N = e.defaultSelectedKeys;
    var M = reactContextUtilsHooks.useRootPrefixCls();
    var S = reactCoreLibraryReexport.useContext(eD);
    var K = reactCoreLibraryReexport.useContext(vmContextProvider.vmContext);
    var O = reactCoreLibraryReexport.useMemo(function () {
      if (domElementWindowUtils.isNotNullOrUndefined(n)) {
        return n;
      } else if (K) {
        return "normal";
      } else {
        return "vertical";
      }
    }, [K, n]);
    var A = reactCoreLibraryReexport.useMemo(function () {
      var e;
      var t;
      if (x) {
        return x;
      } else {
        e = eJ(O);
        t = {
          targetOffset: [0, 0],
          ignoreShake: true,
          overflow: {
            adjustX: 1,
            adjustY: 1,
            alwaysByViewport: true
          }
        };
        return {
          topLeft: objectPropertyAssign.assignObject({
            points: ["bl", "tl"],
            offset: e
          }, t),
          bottomLeft: objectPropertyAssign.assignObject({
            points: ["tl", "bl"],
            offset: e
          }, t),
          leftTop: objectPropertyAssign.assignObject({
            points: ["tr", "tl"],
            offset: e
          }, t),
          rightTop: objectPropertyAssign.assignObject({
            points: ["tl", "tr"],
            offset: e
          }, t),
          left: objectPropertyAssign.assignObject({
            points: ["cr", "cl"],
            offset: e
          }, t),
          right: objectPropertyAssign.assignObject({
            points: ["cl", "cr"],
            offset: e
          }, t),
          top: objectPropertyAssign.assignObject({
            points: ["bc", "tc"],
            offset: e
          }, t),
          bottom: objectPropertyAssign.assignObject({
            points: ["tc", "bc"],
            offset: e
          }, t),
          topRight: objectPropertyAssign.assignObject({
            points: ["br", "tr"],
            offset: e
          }, t),
          bottomRight: objectPropertyAssign.assignObject({
            points: ["tr", "br"],
            offset: e
          }, t),
          rightBottom: objectPropertyAssign.assignObject({
            points: ["bl", "br"],
            offset: e
          }, t),
          leftBottom: objectPropertyAssign.assignObject({
            points: ["br", "bl"],
            offset: e
          }, t)
        };
      }
    }, [x, O]);
    var L = reactCoreLibraryReexport.useMemo(function () {
      if (domElementWindowUtils.isNotNullOrUndefined(E)) {
        return E;
      } else {
        return !!domElementWindowUtils.isNotNullOrUndefined(k) || !!domElementWindowUtils.isNotNullOrUndefined(N) || !K;
      }
    }, [N, K, E, k]);
    var R = reactContextUtilsHooks.useComponentClass(O === "normal" ? "menu-normal" : "menu");
    var D = c || R();
    var _ = S ? S.siderCollapsed : l !== undefined && l;
    var T = e.children;
    var z = reactCoreLibraryReexport.Children.toArray(T).find(ej);
    var V = conditionalClassnames.default(r, K == null ? undefined : K.className, (t = {}, objectPropertySetter.setObjectProperty(t, `${D}-inline-collapsed`, _), objectPropertySetter.setObjectProperty(t, `${D}-include-subMenu`, z), t), "ud-scrollbar");
    var H = O === "normal" ? "vertical" : O;
    return reactCoreLibraryReexport.createElement(e_.Provider, {
      value: reactCoreLibraryReexport.useMemo(function () {
        return {
          prefixCls: D,
          inlineCollapsed: _,
          mode: O,
          selectable: L,
          textOverflow: f,
          firstLevel: true,
          showCheckmark: g
        };
      }, [_, O, L, D, g, f])
    }, reactCoreLibraryReexport.createElement(eR, objectAssignUtil.objectAssign({
      builtinPlacements: A,
      getPopupContainer: v
    }, objectOmitUtil_2.omitProps(e, ["showCheckmark", "textOverflow"]), {
      overflowedIndicator: w ?? reactCoreLibraryReexport.createElement(eG, null),
      onClick: reactCoreLibraryReexport.useCallback(function (e) {
        if (domElementWindowUtils.isFunction(Z)) {
          Z(e);
        }
        if (domElementWindowUtils.isFunction(K == null ? undefined : K.onClick)) {
          if (K != null) {
            K.onClick(e);
          }
        }
      }, [K, Z]),
      mode: H,
      selectable: L,
      inlineCollapsed: _,
      className: V,
      prefixCls: D,
      direction: "ltr",
      expandIcon: function () {
        return reactCoreLibraryReexport.createElement("span", {
          className: `${D}-submenu-arrow`
        }, u || reactCoreLibraryReexport.createElement(rightBoldOutlinedIcon.RightBoldOutlined, {
          className: `${D}-submenu-arrow-icon`
        }));
      },
      defaultMotions: {
        horizontal: {
          motionName: `${M}-slide-up`
        },
        inline: {
          motionName: `${M}-motion-collapse`,
          onAppearStart: eT,
          onEnterStart: eT,
          onAppearActive: ez,
          onEnterActive: ez,
          onLeaveStart: eV,
          onLeaveActive: eT,
          onAppearEnd: eH,
          onEnterEnd: eH,
          onLeaveEnd: eH,
          motionDeadline: 500
        },
        other: {
          motionName: `${M}-zoom-big`
        }
      }
    }, eF(m, h), {
      inlineIndent: y
    })));
  }
  tt.Item = function (e) {
    var t;
    var n = e.className;
    var c = e.children;
    var u = e.title;
    var s = e.icon;
    var f = e.textOverflow;
    var d = e.disabled;
    var p = objectOmitHelper_1.omitWithSymbols(e, e7);
    var v = reactCoreLibraryReexport.useContext(e_);
    var m = v.prefixCls;
    var h = v.inlineCollapsed;
    var b = v.textOverflow;
    var y = v.firstLevel;
    var C = v.mode;
    var g = u;
    if (u === undefined) {
      g = y ? c : "";
    } else if (u === false) {
      g = "";
    }
    var Z = {
      title: g
    };
    if (!h) {
      Z.visible = false;
    }
    var E = reactChildrenFlattenUtility.flattenChildren(c).length;
    var x = conditionalClassnames.default(n, `${m}-item--root-${C}`, objectPropertySetter.setObjectProperty({}, `${m}-item-only-child`, (s ? E + 1 : E) === 1), composeClassNamesUtil.composeClassNames(C === "normal" && udTypographyBody0Style.udTypographyBody0));
    return reactCoreLibraryReexport.createElement(tooltipWrapperComponent_1.TooltipWrapper, objectAssignUtil.objectAssign({}, Z, {
      overlayClassName: `${m}-inline-collapsed-tooltip`,
      placement: "right"
    }), reactCoreLibraryReexport.createElement(ee, objectAssignUtil.objectAssign({}, p, {
      className: x,
      title: typeof u == "string" ? u : undefined,
      itemIcon: e5,
      disabled: d
    }), s && reactCoreLibraryReexport.createElement("div", {
      className: conditionalClassnames.default(`${m}-icon-wrap`, d && `${m}-icon-wrap-disabled`)
    }, s), (t = h && y) && !s && typeof c == "string" ? reactCoreLibraryReexport.createElement("div", {
      className: `${m}-inline-collapsed-noicon`
    }, c.charAt(0)) : reactCoreLibraryReexport.createElement(e4, {
      style: t ? {
        width: 0,
        overflow: "hidden"
      } : {},
      showEllipsis: !t && (f ?? b),
      title: c
    }), reactCoreLibraryReexport.createElement(reactLayoutComponents.EmptyInlineSpacer, null), reactCoreLibraryReexport.createElement(eX, null)));
  };
  tt.SubMenu = function (e) {
    var t = e.icon;
    var n = e.title;
    var l = e.className;
    var c = e.popupClassName;
    var u = e.children;
    var s = e.textOverflow;
    var f = e.disabled;
    var d = e.popupOffset;
    var v = reactCoreLibraryReexport.useContext(e_);
    var m = reactCoreLibraryReexport.useContext(b).mode;
    var h = v.inlineCollapsed;
    var y = v.textOverflow;
    var C = v.prefixCls;
    var g = v.mode;
    var Z = E();
    var x = conditionalClassnames.default(l, `${C}__submenu--root-${g}`, g === "normal" && composeClassNamesUtil.composeClassNames(udTypographyBody0Style.udTypographyBody0));
    var w = eJ(g === "normal" ? "normal" : m);
    var k = reactCoreLibraryReexport.Children.toArray(u).find(ej);
    var N = conditionalClassnames.default(C, objectPropertySetter.setObjectProperty({}, `${C}-submenu-popup-include-subMenu`, k), c, `${C}__submenu--root-${g}`);
    return reactCoreLibraryReexport.createElement(e_.Provider, {
      value: reactCoreLibraryReexport.useMemo(function () {
        return objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, v), {}, {
          firstLevel: false
        });
      }, [v])
    }, reactCoreLibraryReexport.createElement(eb, objectAssignUtil.objectAssign({}, objectOmitUtil_2.omitProps(e, ["icon", "textOverflow", "className"]), {
      popupOffset: d ?? w,
      title: reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, t && reactCoreLibraryReexport.createElement("div", {
        className: conditionalClassnames.default(`${C}-icon-wrap`, f && `${C}-icon-wrap-disabled`)
      }, t), !h || Z.length ? reactCoreLibraryReexport.createElement(e4, {
        showEllipsis: s ?? y,
        title: n
      }) : t ? null : typeof n == "string" ? reactCoreLibraryReexport.createElement("div", {
        className: `${C}-inline-collapsed-noicon`
      }, n.charAt(0)) : undefined, reactCoreLibraryReexport.createElement(reactLayoutComponents.EmptyInlineSpacer, null), reactCoreLibraryReexport.createElement(eX, null)),
      className: x,
      popupClassName: N
    })));
  };
  tt.Divider = S;
  tt.ItemGroup = function (e) {
    var t = e.title;
    var n = objectOmitHelper_1.omitWithSymbols(e, te);
    return reactCoreLibraryReexport.createElement(M, objectAssignUtil.objectAssign({
      title: reactCoreLibraryReexport.createElement("div", {
        className: conditionalClassnames.default(composeClassNamesUtil.composeClassNames(udTypographyHeadlineStyle.udTypographyHeadline))
      }, t)
    }, n));
  };
  tt.__UD_MENU = true;
  var tn = tt;
  require.d(exports, {
    Menu: function () {
      return tn;
    }
  });
}