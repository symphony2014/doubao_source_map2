// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'v' to 'Menu'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 99771.2ba6bc81.js
         * chunkId: 99771
         * moduleId: 879406
         */
module.exports = function (module, exports, require) {
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var composeClassNamesUtil = require("compose-class-names-util") /*id: 606502*/;
  var conditionalClassnames = require("conditional-classnames") /*id: 820269*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var composeTypographyHeadlineClass = require("compose-typography-headline-class") /*id: 932304*/;
  var arrayIterableSliceUtil = require("array-iterable-slice-util") /*id: 802480*/;
  var flattenReactChildrenUtil_1 = require("flatten-react-children-util_1") /*id: 697377*/;
  function f(e, t) {
    return flattenReactChildrenUtil_1.default(e).map(function (e, n) {
      if (reactCoreLibraryReexport.isValidElement(e)) {
        var i = e.key;
        var u = e.props?.eventKey ?? i;
        if (u == null) {
          u = `tmp_key-${[].concat(arrayIterableSliceUtil.sliceArrayIterable(t), [n]).join("-")}`;
        }
        var l = {
          key: u,
          eventKey: u
        };
        return reactCoreLibraryReexport.cloneElement(e, l);
      }
      return e;
    });
  }
  var iterableToArrayUtil_1_1 = require("iterable-to-array-util_1_1") /*id: 975753*/;
  var objectPropertyAssign = require("object-property-assign") /*id: 526210*/;
  var useCachedValueHook_1 = require("use-cached-value-hook_1") /*id: 825031*/;
  var shallowEqualUtil = require("shallow-equal-util") /*id: 181980*/;
  var h = ["children", "locked"];
  var y = reactCoreLibraryReexport.createContext(null);
  function E(e) {
    var t = e.children;
    var n = e.locked;
    var r = objectOmitHelper_1.omitWithSymbols(e, h);
    var i = reactCoreLibraryReexport.useContext(y);
    var u = useCachedValueHook_1.default(function () {
      var e;
      e = objectPropertyAssign.assignObject({}, i);
      Object.entries(r).forEach(function (t) {
        var n = iterableToArrayUtil_1_1.iterableToArray(t, 2);
        var r = n[0];
        var o = n[1];
        if (o !== undefined) {
          e[r] = o;
        }
      });
      return e;
    }, [i, r], function (e, t) {
      return !n && (e[0] !== t[0] || !shallowEqualUtil.shallowEqual(e[1], t[1]));
    });
    return reactCoreLibraryReexport.createElement(y.Provider, {
      value: u
    }, t);
  }
  var g = reactCoreLibraryReexport.createContext(null);
  function b() {
    return reactCoreLibraryReexport.useContext(g);
  }
  var x = reactCoreLibraryReexport.createContext([]);
  function Z(e) {
    var t = reactCoreLibraryReexport.useContext(x);
    return reactCoreLibraryReexport.useMemo(function () {
      if (e !== undefined) {
        return [].concat(arrayIterableSliceUtil.sliceArrayIterable(t), [e]);
      } else {
        return t;
      }
    }, [t, e]);
  }
  var C = reactCoreLibraryReexport.createContext(null);
  var w = ["className", "title", "eventKey", "children"];
  var S = ["children"];
  function N(e) {
    var t = e.className;
    var n = e.title;
    e.eventKey;
    var i = e.children;
    var l = objectOmitHelper_1.omitWithSymbols(e, w);
    var c = reactCoreLibraryReexport.useContext(y).prefixCls;
    var s = `${c}-item-group`;
    return reactCoreLibraryReexport.createElement("li", objectAssignUtil.objectAssign({}, l, {
      onClick: function (e) {
        return e.stopPropagation();
      },
      className: conditionalClassnames.default(s, t)
    }), reactCoreLibraryReexport.createElement("div", {
      className: `${s}-title`,
      title: typeof n == "string" ? n : undefined
    }, n), reactCoreLibraryReexport.createElement("ul", {
      className: `${s}-list`
    }, i));
  }
  function R(e) {
    var t = e.children;
    var n = objectOmitHelper_1.omitWithSymbols(e, S);
    var r = f(t, Z(n.eventKey));
    if (b()) {
      return r;
    } else {
      return reactCoreLibraryReexport.createElement(N, n, r);
    }
  }
  function M(e) {
    var t = e.className;
    var n = e.style;
    var r = reactCoreLibraryReexport.useContext(y).prefixCls;
    if (b()) {
      return null;
    } else {
      return reactCoreLibraryReexport.createElement("li", {
        className: conditionalClassnames.default(`${r}-item-divider`, t),
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
  function F(e, t, n, r) {
    var o = reactCoreLibraryReexport.useContext(y);
    var i = o.activeKey;
    var u = o.onActive;
    var l = o.onInactive;
    var c = {
      active: i === e && e !== undefined
    };
    if (!t) {
      c.onMouseEnter = function (t) {
        if (n != null) {
          n({
            key: e,
            domEvent: t
          });
        }
        u(e);
      };
      c.onMouseLeave = function (t) {
        if (r != null) {
          r({
            key: e,
            domEvent: t
          });
        }
        l(e);
      };
    }
    return c;
  }
  var U = ["item"];
  function W(e) {
    var t = e.item;
    var n = objectOmitHelper_1.omitWithSymbols(e, U);
    Object.defineProperty(n, "item", {
      get: function () {
        return t;
      }
    });
    return n;
  }
  function B(e) {
    var t;
    var n = e.icon;
    var r = e.props;
    var o = e.children;
    return (typeof n == "function" ? reactCoreLibraryReexport.createElement(n, objectPropertyAssign.assignObject({}, r)) : n) || o || null;
  }
  var H = {
    itemPaddingX: 16,
    inlineIndent: 28
  };
  function j(e) {
    var t = reactCoreLibraryReexport.useContext(y);
    var n = t.mode;
    var r = t.rtl;
    var o = t.inlineIndent;
    if (n !== "inline") {
      return {};
    }
    var i = H.itemPaddingX + (e - 1) * o;
    if (r) {
      return {
        paddingRight: i
      };
    } else {
      return {
        paddingLeft: i
      };
    }
  }
  var V = reactCoreLibraryReexport.createContext(null);
  function Y(e, t) {
    if (e === undefined) {
      return null;
    } else {
      return `${e}-${t}`;
    }
  }
  function G(e) {
    return Y(reactCoreLibraryReexport.useContext(V), e);
  }
  var X = ["title", "attribute", "elementRef"];
  var q = ["style", "className", "eventKey", "warnKey", "disabled", "itemIcon", "children", "role", "onMouseEnter", "onMouseLeave", "onClick", "onKeyDown", "onFocus"];
  var J = ["active"];
  var $ = function (e) {
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
        var i = e.elementRef;
        var u = objectOmitHelper_1.omitWithSymbols(e, X);
        var l = objectOmitKeysUtil.default(u, ["eventKey"]);
        return reactCoreLibraryReexport.createElement(responsiveOverflowList.Overflow.Item, objectAssignUtil.objectAssign({}, n, {
          title: typeof t == "string" ? t : undefined
        }, l, {
          ref: i
        }));
      }
    }]);
    return n;
  }(reactCoreLibraryReexport.Component);
  function Q(e) {
    var t;
    var n = e.style;
    var i = e.className;
    var l = e.eventKey;
    e.warnKey;
    var s = e.disabled;
    var f = e.itemIcon;
    var d = e.children;
    var v = e.role;
    var m = e.onMouseEnter;
    var h = e.onMouseLeave;
    var E = e.onClick;
    var g = e.onKeyDown;
    var b = e.onFocus;
    var x = objectOmitHelper_1.omitWithSymbols(e, q);
    var C = G(l);
    var w = reactCoreLibraryReexport.useContext(y);
    var S = w.prefixCls;
    var N = w.onItemClick;
    var R = w.disabled;
    var M = w.overflowDisabled;
    var I = w.itemIcon;
    var A = w.selectedKeys;
    var P = w.onActive;
    var O = `${S}-item`;
    var k = reactCoreLibraryReexport.useRef();
    var T = reactCoreLibraryReexport.useRef();
    var L = !!R || !!s;
    var K = Z(l);
    function z(e) {
      return {
        key: l,
        keyPath: arrayIterableSliceUtil.sliceArrayIterable(K).reverse(),
        item: k.current,
        domEvent: e
      };
    }
    var U = F(l, L, m, h);
    var H = U.active;
    var V = objectOmitHelper_1.omitWithSymbols(U, J);
    var Y = A.includes(l);
    var X = j(K.length);
    var Q = {};
    if (e.role === "option") {
      Q["aria-selected"] = Y;
    }
    return reactCoreLibraryReexport.createElement($, objectAssignUtil.objectAssign({
      ref: k,
      elementRef: T,
      role: v === null ? "none" : v || "menuitem",
      tabIndex: s ? null : -1,
      "data-menu-id": M && C ? null : C
    }, x, V, Q, {
      component: "li",
      "aria-disabled": s,
      style: objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, X), n),
      className: conditionalClassnames.default(O, (t = {}, objectPropertySetter.setObjectProperty(t, `${O}-active`, H), objectPropertySetter.setObjectProperty(t, `${O}-selected`, Y), objectPropertySetter.setObjectProperty(t, `${O}-disabled`, L), t), i),
      onClick: function (e) {
        if (!L) {
          var t = z(e);
          if (E != null) {
            E(W(t));
          }
          N(t);
        }
      },
      onKeyDown: function (e) {
        if (g != null) {
          g(e);
        }
        if (e.which === keyboardKeyCodes_1_1.default.ENTER) {
          var t = z(e);
          if (E != null) {
            E(W(t));
          }
          N(t);
        }
      },
      onFocus: function (e) {
        P(l);
        if (b != null) {
          b(e);
        }
      }
    }), d, reactCoreLibraryReexport.createElement(B, {
      props: objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, e), {}, {
        isSelected: Y
      }),
      icon: f || I
    }));
  }
  function ee(e) {
    var t = e.eventKey;
    var n = b();
    var r = Z(t);
    reactCoreLibraryReexport.useEffect(function () {
      if (n) {
        n.registerPath(t, r);
        return function () {
          n.unregisterPath(t, r);
        };
      }
    }, [r]);
    if (n) {
      return null;
    } else {
      return reactCoreLibraryReexport.createElement(Q, e);
    }
  }
  function et(e) {
    var t = reactCoreLibraryReexport.useRef(e);
    t.current = e;
    var n = reactCoreLibraryReexport.useCallback(function () {
      var e;
      var n = arguments.length;
      var r = Array(n);
      var o = 0;
      for (; o < n; o++) {
        r[o] = arguments[o];
      }
      if ((e = t.current) === null || e === undefined) {
        return undefined;
      } else {
        return e.call.apply(e, [t].concat(r));
      }
    }, []);
    if (e) {
      return n;
    } else {
      return undefined;
    }
  }
  var en = ["className", "children"];
  var er = reactCoreLibraryReexport.forwardRef(function (e, t) {
    var n = e.className;
    var i = e.children;
    var l = objectOmitHelper_1.omitWithSymbols(e, en);
    var c = reactCoreLibraryReexport.useContext(y);
    var s = c.prefixCls;
    var f = c.mode;
    return reactCoreLibraryReexport.createElement("ul", objectAssignUtil.objectAssign({
      className: conditionalClassnames.default(s, `${s}-sub`, `${s}-${f === "inline" ? "inline" : "vertical"}`, n)
    }, l, {
      "data-menu-list": true,
      ref: t
    }), i);
  });
  er.displayName = "SubMenuList";
  var popupTriggerCore = require("popup-trigger-core") /*id: 956311*/;
  var delayedExecutionUtil = require("delayed-execution-util") /*id: 944867*/;
  var eu = {
    adjustX: 1,
    adjustY: 1
  };
  var ea = {
    topLeft: {
      points: ["bl", "tl"],
      overflow: eu,
      offset: [0, -7]
    },
    bottomLeft: {
      points: ["tl", "bl"],
      overflow: eu,
      offset: [0, 7]
    },
    leftTop: {
      points: ["tr", "tl"],
      overflow: eu,
      offset: [-4, 0]
    },
    rightTop: {
      points: ["tl", "tr"],
      overflow: eu,
      offset: [4, 0]
    }
  };
  var el = {
    topLeft: {
      points: ["bl", "tl"],
      overflow: eu,
      offset: [0, -7]
    },
    bottomLeft: {
      points: ["tl", "bl"],
      overflow: eu,
      offset: [0, 7]
    },
    rightTop: {
      points: ["tr", "tl"],
      overflow: eu,
      offset: [-4, 0]
    },
    leftTop: {
      points: ["tl", "tr"],
      overflow: eu,
      offset: [4, 0]
    }
  };
  function ec(e, t, n) {
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
    var r = e.children;
    var o = e.popup;
    var i = e.popupClassName;
    var l = e.popupOffset;
    var c = e.disabled;
    var s = e.mode;
    var f = e.onVisibleChange;
    var v = reactCoreLibraryReexport.useContext(y);
    var m = v.getPopupContainer;
    var h = v.rtl;
    var E = v.subMenuOpenDelay;
    var g = v.subMenuCloseDelay;
    var b = v.builtinPlacements;
    var x = v.triggerSubMenuAction;
    var Z = v.forceSubMenuRender;
    var C = v.motion;
    var w = v.defaultMotions;
    var S = reactCoreLibraryReexport.useState(false);
    var N = iterableToArrayUtil_1_1.iterableToArray(S, 2);
    var R = N[0];
    var M = N[1];
    var I = h ? objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, el), b) : objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, ea), b);
    var A = es[s];
    var P = ec(s, C, w);
    var O = objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, P), {}, {
      leavedClassName: `${t}-hidden`,
      removeOnLeave: false,
      motionAppear: true
    });
    var k = reactCoreLibraryReexport.useRef();
    reactCoreLibraryReexport.useEffect(function () {
      k.current = delayedExecutionUtil.default(function () {
        M(n);
      });
      return function () {
        delayedExecutionUtil.default.cancel(k.current);
      };
    }, [n]);
    return reactCoreLibraryReexport.createElement(popupTriggerCore.Trigger, {
      prefixCls: t,
      popupClassName: conditionalClassnames.default(`${t}-popup`, objectPropertySetter.setObjectProperty({}, `${t}-rtl`, h), i),
      stretch: s === "horizontal" ? "minWidth" : undefined,
      getPopupContainer: m,
      builtinPlacements: I,
      popupPlacement: A,
      popupVisible: R,
      popup: o,
      popupAlign: l && {
        offset: l
      },
      action: c ? [] : x && [x],
      mouseEnterDelay: E,
      mouseLeaveDelay: g,
      onPopupVisibleChange: f,
      forceRender: Z,
      popupMotion: O
    }, r);
  }
  var cssMotionAnimationUtil = require("css-motion-animation-util") /*id: 663888*/;
  function ep(e) {
    var t = e.id;
    var n = e.open;
    var o = e.keyPath;
    var i = e.children;
    var u = "inline";
    var l = reactCoreLibraryReexport.useContext(y);
    var c = l.prefixCls;
    var s = l.forceSubMenuRender;
    var f = l.motion;
    var v = l.defaultMotions;
    var m = l.mode;
    var h = reactCoreLibraryReexport.useRef(false);
    h.current = m === u;
    var g = reactCoreLibraryReexport.useState(!h.current);
    var b = iterableToArrayUtil_1_1.iterableToArray(g, 2);
    var x = b[0];
    var Z = b[1];
    var C = !!h.current && n;
    reactCoreLibraryReexport.useEffect(function () {
      if (h.current) {
        Z(false);
      }
    }, [m]);
    var w = objectPropertyAssign.assignObject({}, ec(u, f, v));
    if (o.length > 1) {
      w.motionAppear = false;
    }
    var S = w.onVisibleChanged;
    w.onVisibleChanged = function (e) {
      if (!h.current && !e) {
        Z(true);
      }
      if (S == null) {
        return undefined;
      } else {
        return S(e);
      }
    };
    if (x) {
      return null;
    } else {
      return reactCoreLibraryReexport.createElement(E, {
        mode: u,
        locked: !h.current
      }, reactCoreLibraryReexport.createElement(cssMotionAnimationUtil.CSSMotion, objectAssignUtil.objectAssign({
        visible: C
      }, w, {
        forceRender: s,
        removeOnLeave: false,
        leavedClassName: `${c}-hidden`
      }), function (e) {
        var n = e.className;
        var r = e.style;
        return reactCoreLibraryReexport.createElement(er, {
          id: t,
          className: n,
          style: r
        }, i);
      }));
    }
  }
  var ev = ["style", "className", "title", "eventKey", "warnKey", "disabled", "internalPopupClose", "children", "itemIcon", "expandIcon", "popupClassName", "popupOffset", "onClick", "onMouseEnter", "onMouseLeave", "onTitleClick", "onTitleMouseEnter", "onTitleMouseLeave"];
  var em = ["active"];
  function eh(e) {
    var t;
    var n = e.style;
    var i = e.className;
    var l = e.title;
    var c = e.eventKey;
    e.warnKey;
    var s = e.disabled;
    var f = e.internalPopupClose;
    var v = e.children;
    var m = e.itemIcon;
    var h = e.expandIcon;
    var g = e.popupClassName;
    var b = e.popupOffset;
    var x = e.onClick;
    var w = e.onMouseEnter;
    var S = e.onMouseLeave;
    var N = e.onTitleClick;
    var R = e.onTitleMouseEnter;
    var M = e.onTitleMouseLeave;
    var I = objectOmitHelper_1.omitWithSymbols(e, ev);
    var A = G(c) || undefined;
    var P = reactCoreLibraryReexport.useContext(y);
    var k = P.prefixCls;
    var T = P.mode;
    var L = P.openKeys;
    var K = P.disabled;
    var D = P.overflowDisabled;
    var z = P.activeKey;
    var U = P.selectedKeys;
    var H = P.itemIcon;
    var V = P.expandIcon;
    var Y = P.onItemClick;
    var X = P.onOpenChange;
    var q = P.onActive;
    var J = reactCoreLibraryReexport.useContext(C).isSubPathKey;
    var $ = Z();
    var Q = `${k}-submenu`;
    var ee = !!K || !!s;
    var en = reactCoreLibraryReexport.useRef(null);
    var eo = reactCoreLibraryReexport.useRef(null);
    var ei = h || V;
    var eu = L.includes(c);
    var ea = !D && eu;
    var el = J(U, c);
    var ec = F(c, ee, R, M);
    var es = ec.active;
    var ed = objectOmitHelper_1.omitWithSymbols(ec, em);
    var eh = reactCoreLibraryReexport.useState(false);
    var ey = iterableToArrayUtil_1_1.iterableToArray(eh, 2);
    var eE = ey[0];
    var eg = ey[1];
    function eb(e) {
      if (!ee) {
        eg(e);
      }
    }
    var ex = reactCoreLibraryReexport.useMemo(function () {
      return es || T !== "inline" && (eE || J([z], c));
    }, [T, es, z, eE, c, J]);
    var eZ = j($.length);
    var eC = et(function (e) {
      if (x != null) {
        x(W(e));
      }
      Y(e);
    });
    var ew = A && `${A}-popup`;
    var eS = reactCoreLibraryReexport.createElement("div", objectAssignUtil.objectAssign({
      role: "menuitem",
      style: eZ,
      className: `${Q}-title`,
      tabIndex: ee ? undefined : -1,
      ref: en,
      title: typeof l == "string" ? l : undefined,
      "data-menu-id": D && A ? null : A,
      "aria-expanded": ea,
      "aria-haspopup": true,
      "aria-controls": ew,
      "aria-disabled": ee,
      onClick: function (e) {
        if (!ee) {
          if (N != null) {
            N({
              key: c,
              domEvent: e
            });
          }
          if (T === "inline") {
            X(c, !eu);
          }
        }
      },
      onFocus: function () {
        q(c);
      }
    }, ed), l, reactCoreLibraryReexport.createElement(B, {
      icon: T !== "horizontal" ? ei : null,
      props: objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, e), {}, {
        isOpen: ea,
        isSubMenu: true
      })
    }, reactCoreLibraryReexport.createElement("i", {
      className: `${Q}-arrow`
    })));
    var eN = reactCoreLibraryReexport.useRef(T);
    if (T !== "inline") {
      eN.current = $.length > 1 ? "vertical" : T;
    }
    if (!D) {
      var eR = eN.current;
      eS = reactCoreLibraryReexport.createElement(ef, {
        mode: eR,
        prefixCls: Q,
        visible: !f && ea && T !== "inline",
        popupClassName: g,
        popupOffset: b,
        popup: reactCoreLibraryReexport.createElement(E, {
          mode: eR === "horizontal" ? "vertical" : eR
        }, reactCoreLibraryReexport.createElement(er, {
          id: ew || undefined,
          ref: eo
        }, v)),
        disabled: ee,
        onVisibleChange: function (e) {
          if (T !== "inline") {
            X(c, e);
          }
        }
      }, eS);
    }
    return reactCoreLibraryReexport.createElement(E, {
      onItemClick: eC,
      mode: T === "horizontal" ? "vertical" : T,
      itemIcon: m || H,
      expandIcon: ei
    }, reactCoreLibraryReexport.createElement(responsiveOverflowList.Overflow.Item, objectAssignUtil.objectAssign({
      role: "none"
    }, I, {
      component: "li",
      style: n,
      className: conditionalClassnames.default(Q, `${Q}-${T}`, i, (t = {}, objectPropertySetter.setObjectProperty(t, `${Q}-open`, ea), objectPropertySetter.setObjectProperty(t, `${Q}-active`, ex), objectPropertySetter.setObjectProperty(t, `${Q}-selected`, el), objectPropertySetter.setObjectProperty(t, `${Q}-disabled`, ee), t)),
      onMouseEnter: function (e) {
        eb(true);
        if (w != null) {
          w({
            key: c,
            domEvent: e
          });
        }
      },
      onMouseLeave: function (e) {
        eb(false);
        if (S != null) {
          S({
            key: c,
            domEvent: e
          });
        }
      }
    }), eS, !D && reactCoreLibraryReexport.createElement(ep, {
      id: ew,
      open: ea,
      keyPath: $
    }, v)));
  }
  function ey(e) {
    var t;
    var n = e.eventKey;
    var r = e.children;
    var o = Z(n);
    var i = f(r, o);
    var u = b();
    reactCoreLibraryReexport.useEffect(function () {
      if (u) {
        u.registerPath(n, o);
        return function () {
          u.unregisterPath(n, o);
        };
      }
    }, [o]);
    t = u ? i : reactCoreLibraryReexport.createElement(eh, e, i);
    return reactCoreLibraryReexport.createElement(x.Provider, {
      value: o
    }, t);
  }
  var focusNodeListUtil = require("focus-node-list-util") /*id: 923622*/;
  var eg = keyboardKeyCodes_1_1.default.LEFT;
  var eb = keyboardKeyCodes_1_1.default.RIGHT;
  var ex = keyboardKeyCodes_1_1.default.UP;
  var eZ = keyboardKeyCodes_1_1.default.DOWN;
  var eC = keyboardKeyCodes_1_1.default.ENTER;
  var ew = keyboardKeyCodes_1_1.default.ESC;
  var eS = [ex, eZ, eg, eb];
  function eN(e, t, n, r = 1) {
    if (!e) {
      return null;
    }
    var o = focusNodeListUtil.getFocusNodeList(e, true).filter(function (e) {
      return t.has(e);
    });
    var i = o.length;
    var u = o.findIndex(function (e) {
      return n === e;
    });
    if (r < 0) {
      if (u === -1) {
        u = i - 1;
      } else {
        u -= 1;
      }
    } else if (r > 0) {
      u += 1;
    }
    return o[u = (u + i) % i];
  }
  var eR = Math.random().toFixed(5).toString().slice(2);
  var eM = 0;
  var e_ = "__RC_UTIL_PATH_SPLIT__";
  function eI(e) {
    return e.join(e_);
  }
  var eA = "rc-menu-more";
  var uiConfigContextHooks = require("ui-config-context-hooks") /*id: 157*/;
  var eO = ["prefixCls", "style", "className", "tabIndex", "children", "direction", "id", "mode", "inlineCollapsed", "disabled", "disabledOverflow", "subMenuOpenDelay", "subMenuCloseDelay", "forceSubMenuRender", "defaultOpenKeys", "openKeys", "activeKey", "defaultActiveFirst", "selectable", "multiple", "defaultSelectedKeys", "selectedKeys", "onSelect", "onDeselect", "inlineIndent", "motion", "defaultMotions", "triggerSubMenuAction", "builtinPlacements", "itemIcon", "expandIcon", "overflowedIndicator", "getPopupContainer", "onClick", "onOpenChange", "onKeyDown", "openAnimation", "openTransitionName"];
  var ek = [];
  function eT(e) {
    var t;
    var n;
    var i;
    var l;
    var s;
    var v;
    var h;
    var y;
    var b;
    var x;
    var Z;
    var w;
    var S;
    var N;
    var R;
    var M;
    var I;
    var k;
    var T;
    var L;
    var K;
    var D;
    var z;
    var F;
    var U;
    var j;
    var G = uiConfigContextHooks.useClassName("internal-menu");
    var X = e.prefixCls;
    var q = X === undefined ? G() : X;
    var J = e.style;
    var $ = e.className;
    var Q = e.tabIndex;
    var en = e.children;
    var er = e.direction;
    var eo = e.id;
    var eu = e.mode;
    var ea = eu === undefined ? "vertical" : eu;
    var el = e.inlineCollapsed;
    var ec = e.disabled;
    var es = e.disabledOverflow;
    var ef = e.subMenuOpenDelay;
    var ed = e.subMenuCloseDelay;
    var ep = e.forceSubMenuRender;
    var ev = e.defaultOpenKeys;
    var em = e.openKeys;
    var eh = e.activeKey;
    var eE = e.defaultActiveFirst;
    var eT = e.selectable;
    var eL = eT === undefined || eT;
    var eK = e.multiple;
    var eD = eK !== undefined && eK;
    var ez = e.defaultSelectedKeys;
    var eF = e.selectedKeys;
    var eU = e.onSelect;
    var eW = e.onDeselect;
    var eB = e.inlineIndent;
    var eH = eB === undefined ? H.inlineIndent : eB;
    var ej = e.motion;
    var eV = e.defaultMotions;
    var eY = e.triggerSubMenuAction;
    var eG = e.builtinPlacements;
    var eX = e.itemIcon;
    var eq = e.expandIcon;
    var eJ = e.overflowedIndicator;
    var e$ = eJ === undefined ? "..." : eJ;
    var eQ = e.getPopupContainer;
    var e0 = e.onClick;
    var e1 = e.onOpenChange;
    var e6 = e.onKeyDown;
    e.openAnimation;
    e.openTransitionName;
    var e2 = objectOmitHelper_1.omitWithSymbols(e, eO);
    var e3 = f(en, ek);
    var e7 = reactCoreLibraryReexport.useState(false);
    var e9 = iterableToArrayUtil_1_1.iterableToArray(e7, 2);
    var e4 = e9[0];
    var e5 = e9[1];
    var e8 = reactCoreLibraryReexport.useRef(null);
    t = useControlledStateHook_2.default(eo, {
      value: eo
    });
    i = (n = iterableToArrayUtil_1_1.iterableToArray(t, 2))[0];
    l = n[1];
    reactCoreLibraryReexport.useEffect(function () {
      eM += 1;
      var e = `${eR}-${eM}`;
      l(`rc-menu-uuid-${e}`);
    }, []);
    var te = i;
    var tt = er === "rtl";
    var tn = useControlledStateHook_2.default(ev, {
      value: em,
      postState: function (e) {
        return e || ek;
      }
    });
    var tr = iterableToArrayUtil_1_1.iterableToArray(tn, 2);
    var to = tr[0];
    var ti = tr[1];
    function tu(e, t = false) {
      function n() {
        ti(e);
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
    var ta = reactCoreLibraryReexport.useState(to);
    var tl = iterableToArrayUtil_1_1.iterableToArray(ta, 2);
    var tc = tl[0];
    var ts = tl[1];
    var tf = reactCoreLibraryReexport.useRef(false);
    var td = reactCoreLibraryReexport.useMemo(function () {
      if ((ea === "inline" || ea === "vertical") && el) {
        return ["vertical", el];
      } else {
        return [ea, false];
      }
    }, [ea, el]);
    var tp = iterableToArrayUtil_1_1.iterableToArray(td, 2);
    var tv = tp[0];
    var tm = tp[1];
    var th = tv === "inline";
    var ty = reactCoreLibraryReexport.useState(tv);
    var tE = iterableToArrayUtil_1_1.iterableToArray(ty, 2);
    var tg = tE[0];
    var tb = tE[1];
    var tx = reactCoreLibraryReexport.useState(tm);
    var tZ = iterableToArrayUtil_1_1.iterableToArray(tx, 2);
    var tC = tZ[0];
    var tw = tZ[1];
    reactCoreLibraryReexport.useEffect(function () {
      tb(tv);
      tw(tm);
      if (!tf.current) {
        tf.current = true;
        return;
      }
      if (th) {
        ti(tc);
      } else {
        tu(ek);
      }
    }, [tv, tm]);
    var tS = reactCoreLibraryReexport.useState(0);
    var tN = iterableToArrayUtil_1_1.iterableToArray(tS, 2);
    var tR = tN[0];
    var tM = tN[1];
    var t_ = tR >= e3.length - 1 || tg !== "horizontal" || es;
    reactCoreLibraryReexport.useEffect(function () {
      if (th) {
        ts(to);
      }
    }, [to]);
    s = reactCoreLibraryReexport.useState({});
    v = iterableToArrayUtil_1_1.iterableToArray(s, 2)[1];
    h = reactCoreLibraryReexport.useRef(new Map());
    y = reactCoreLibraryReexport.useRef(new Map());
    b = reactCoreLibraryReexport.useState([]);
    Z = (x = iterableToArrayUtil_1_1.iterableToArray(b, 2))[0];
    w = x[1];
    S = reactCoreLibraryReexport.useRef(0);
    N = reactCoreLibraryReexport.useRef(false);
    R = function () {
      if (!N.current) {
        v({});
      }
    };
    M = reactCoreLibraryReexport.useCallback(function (e, t) {
      var n;
      var r = eI(t);
      y.current.set(r, e);
      h.current.set(e, r);
      S.current += 1;
      var o = S.current;
      n = function () {
        if (o === S.current) {
          R();
        }
      };
      Promise.resolve().then(n);
    }, []);
    I = reactCoreLibraryReexport.useCallback(function (e, t) {
      var n = eI(t);
      y.current.delete(n);
      h.current.delete(e);
    }, []);
    k = reactCoreLibraryReexport.useCallback(function (e) {
      w(e);
    }, []);
    T = reactCoreLibraryReexport.useCallback(function (e, t) {
      var n = (h.current.get(e) || "").split(e_);
      if (t && Z.includes(n[0])) {
        n.unshift(eA);
      }
      return n;
    }, [Z]);
    L = reactCoreLibraryReexport.useCallback(function (e, t) {
      return e.some(function (e) {
        return T(e, true).includes(t);
      });
    }, [T]);
    K = reactCoreLibraryReexport.useCallback(function (e) {
      var t = `${h.current.get(e)}${e_}`;
      var n = new Set();
      arrayIterableSliceUtil.sliceArrayIterable(y.current.keys()).forEach(function (e) {
        if (e.startsWith(t)) {
          n.add(y.current.get(e));
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
      registerPath: M,
      unregisterPath: I,
      refreshOverflowKeys: k,
      isSubPathKey: L,
      getKeyPath: T,
      getKeys: function () {
        var e = arrayIterableSliceUtil.sliceArrayIterable(h.current.keys());
        if (Z.length) {
          e.push(eA);
        }
        return e;
      },
      getSubPathKeys: K
    };
    var tA = tI.registerPath;
    var tP = tI.unregisterPath;
    var tO = tI.refreshOverflowKeys;
    var tk = tI.isSubPathKey;
    var tT = tI.getKeyPath;
    var tL = tI.getKeys;
    var tK = tI.getSubPathKeys;
    var tD = reactCoreLibraryReexport.useMemo(function () {
      return {
        registerPath: tA,
        unregisterPath: tP
      };
    }, [tA, tP]);
    var tz = reactCoreLibraryReexport.useMemo(function () {
      return {
        isSubPathKey: tk
      };
    }, [tk]);
    reactCoreLibraryReexport.useEffect(function () {
      tO(t_ ? ek : e3.slice(tR + 1).map(function (e) {
        return e.key;
      }));
    }, [tR, t_]);
    var tF = useControlledStateHook_2.default(eh || eE && e3[0]?.key, {
      value: eh
    });
    var tU = iterableToArrayUtil_1_1.iterableToArray(tF, 2);
    var tW = tU[0];
    var tB = tU[1];
    var tH = et(function (e) {
      tB(e);
    });
    var tj = et(function () {
      tB(undefined);
    });
    var tV = useControlledStateHook_2.default(ez || [], {
      value: eF,
      postState: function (e) {
        if (Array.isArray(e)) {
          return e;
        } else if (e == null) {
          return ek;
        } else {
          return [e];
        }
      }
    });
    var tY = iterableToArrayUtil_1_1.iterableToArray(tV, 2);
    var tG = tY[0];
    var tX = tY[1];
    function tq(e) {
      if (eL) {
        var t;
        var n = e.key;
        var r = tG.includes(n);
        tX(t = eD ? r ? tG.filter(function (e) {
          return e !== n;
        }) : [].concat(arrayIterableSliceUtil.sliceArrayIterable(tG), [n]) : [n]);
        var o = objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, e), {}, {
          selectedKeys: t
        });
        if (r) {
          if (eW != null) {
            eW(o);
          }
        } else if (eU != null) {
          eU(o);
        }
      }
      if (!eD && to != null && to.length && tg !== "inline") {
        tu(ek);
      }
    }
    var tJ = et(function (e) {
      if (e0 != null) {
        e0(W(e));
      }
      tq(e);
    });
    var t$ = et(function (e, t) {
      var n = (to == null ? undefined : to.filter(function (t) {
        return t !== e;
      })) || [];
      if (t) {
        n.push(e);
      } else if (tg !== "inline") {
        var r = tK(e);
        n = n.filter(function (e) {
          return !r.has(e);
        });
      }
      if (!shallowEqualUtil.shallowEqual(to, n)) {
        tu(n, true);
      }
    });
    var tQ = et(eQ);
    D = function (e, t) {
      var n = t ?? (to == null || !to.includes(e));
      t$(e, n);
    };
    z = reactCoreLibraryReexport.useRef();
    (F = reactCoreLibraryReexport.useRef()).current = tW;
    U = function () {
      if (z.current) {
        delayedExecutionUtil.default.cancel(z.current);
      }
    };
    reactCoreLibraryReexport.useEffect(function () {
      return function () {
        U();
      };
    }, []);
    function t0(e) {
      var t = e.which;
      if ([].concat(eS, [eC, ew]).includes(t)) {
        var n;
        var r = new Set();
        var o = new Map();
        var i = new Map();
        function u() {
          r = new Set();
          o = new Map();
          i = new Map();
          tL().forEach(function (e) {
            var t = document.querySelector(`[data-menu-id='${Y(te, e)}']`);
            if (t) {
              r.add(t);
              i.set(t, e);
              o.set(e, t);
            }
          });
          return r;
        }
        u();
        var a = function (e, t) {
          for (var n = e || document.activeElement; n;) {
            if (t.has(n)) {
              return n;
            }
            n = n.parentElement;
          }
          return null;
        }(o.get(tW), r);
        var l = i.get(a);
        if (l === undefined) {
          return;
        }
        var c = function (e, t, n, r) {
          var o;
          var i;
          var u;
          var l = "prev";
          var c = "next";
          var s = "children";
          var f = "parent";
          if (e === "inline" && r === eC) {
            return {
              inlineTrigger: true
            };
          }
          o = {};
          objectPropertySetter.setObjectProperty(o, ex, l);
          objectPropertySetter.setObjectProperty(o, eZ, c);
          var d = o;
          i = {};
          objectPropertySetter.setObjectProperty(i, eg, n ? c : l);
          objectPropertySetter.setObjectProperty(i, eb, n ? l : c);
          objectPropertySetter.setObjectProperty(i, eZ, s);
          objectPropertySetter.setObjectProperty(i, eC, s);
          var p = i;
          u = {};
          objectPropertySetter.setObjectProperty(u, ex, l);
          objectPropertySetter.setObjectProperty(u, eZ, c);
          objectPropertySetter.setObjectProperty(u, eC, s);
          objectPropertySetter.setObjectProperty(u, ew, f);
          objectPropertySetter.setObjectProperty(u, eg, n ? s : f);
          objectPropertySetter.setObjectProperty(u, eb, n ? f : s);
          var v = u;
          switch ({
            inline: d,
            horizontal: p,
            vertical: v,
            inlineSub: d,
            horizontalSub: v,
            verticalSub: v
          }[`${e}${t ? "" : "Sub"}`]?.[r]) {
            case l:
              return {
                offset: -1,
                sibling: true
              };
            case c:
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
        }(tg, tT(l, true).length === 1, tt, t);
        if (!c) {
          return;
        }
        if (eS.includes(t)) {
          e.preventDefault();
        }
        function s(e) {
          if (e) {
            var t = e;
            var n = e.querySelector("a");
            if (n != null && n.getAttribute("href")) {
              t = n;
            }
            var r = i.get(e);
            tB(r);
            U();
            z.current = delayedExecutionUtil.default(function () {
              if (F.current === r) {
                t.focus();
              }
            });
          }
        }
        if (c.sibling || !a) {
          s(eN(a && tg !== "inline" ? function (e) {
            for (var t = e; t;) {
              if (t.getAttribute("data-menu-list")) {
                return t;
              }
              t = t.parentElement;
            }
            return null;
          }(a) : e8.current, r, a, c.offset));
        } else if (c.inlineTrigger) {
          D(l);
        } else if (c.offset && c.offset > 0) {
          D(l, true);
          U();
          z.current = delayedExecutionUtil.default(function () {
            u();
            var e = a.getAttribute("aria-controls");
            s(eN(document.getElementById(e), r));
          }, 5);
        } else if (c.offset && c.offset < 0) {
          var f = tT(l, true);
          var d = f[f.length - 2];
          var p = o.get(d);
          D(d, false);
          s(p);
        }
      }
      if (e6 != null) {
        e6(e);
      }
    }
    reactCoreLibraryReexport.useEffect(function () {
      e5(true);
    }, []);
    var t1 = tg !== "horizontal" || es ? e3 : e3.map(function (e, t) {
      return reactCoreLibraryReexport.createElement(E, {
        key: e.key,
        overflowDisabled: t > tR
      }, e);
    });
    var t6 = reactCoreLibraryReexport.createElement(responsiveOverflowList.Overflow, objectAssignUtil.objectAssign({
      id: eo,
      ref: e8,
      prefixCls: `${q}-overflow`,
      component: "ul",
      itemComponent: ee,
      className: conditionalClassnames.default(q, `${q}-root`, `${q}-${tg}`, $, (j = {}, objectPropertySetter.setObjectProperty(j, `${q}-inline-collapsed`, tC), objectPropertySetter.setObjectProperty(j, `${q}-rtl`, tt), j)),
      dir: er,
      style: J,
      role: "menu",
      tabIndex: Q === undefined ? 0 : Q,
      data: t1,
      renderRawItem: function (e) {
        return e;
      },
      renderRawRest: function (e) {
        var t = e.length;
        var n = t ? e3.slice(-t) : null;
        return reactCoreLibraryReexport.createElement(ey, {
          eventKey: eA,
          title: e$,
          disabled: t_,
          internalPopupClose: t === 0
        }, n);
      },
      maxCount: tg !== "horizontal" || es ? responsiveOverflowList.Overflow.INVALIDATE : responsiveOverflowList.Overflow.RESPONSIVE,
      ssr: "full",
      "data-menu-list": true,
      onVisibleChange: function (e) {
        tM(e);
      },
      onKeyDown: t0
    }, e2));
    return reactCoreLibraryReexport.createElement(V.Provider, {
      value: te
    }, reactCoreLibraryReexport.createElement(E, {
      prefixCls: q,
      mode: tg,
      openKeys: to,
      rtl: tt,
      disabled: ec,
      motion: e4 ? ej : undefined,
      defaultMotions: e4 ? eV : undefined,
      activeKey: tW,
      onActive: tH,
      onInactive: tj,
      selectedKeys: tG,
      inlineIndent: eH,
      subMenuOpenDelay: ef === undefined ? 0.1 : ef,
      subMenuCloseDelay: ed === undefined ? 0.1 : ed,
      forceSubMenuRender: ep,
      builtinPlacements: eG,
      triggerSubMenuAction: eY === undefined ? "hover" : eY,
      getPopupContainer: tQ,
      itemIcon: eX,
      expandIcon: eq,
      onItemClick: tJ,
      onOpenChange: t$
    }, reactCoreLibraryReexport.createElement(C.Provider, {
      value: tz
    }, t6), reactCoreLibraryReexport.createElement("div", {
      style: {
        display: "none"
      },
      "aria-hidden": true
    }, reactCoreLibraryReexport.createElement(g.Provider, {
      value: tD
    }, e3))));
  }
  eT.Item = ee;
  eT.SubMenu = ey;
  eT.ItemGroup = R;
  eT.Divider = M;
  require("empty-module-export_4") /*id: 530821*/;
  var eL = reactCoreLibraryReexport.createContext(null);
  var eK = reactCoreLibraryReexport.createContext({
    prefixCls: "",
    inlineCollapsed: false,
    textOverflow: true,
    firstLevel: true,
    showCheckmark: true,
    selectable: true
  });
  function eD() {
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
  function eF(e) {
    return {
      height: e.offsetHeight
    };
  }
  function eU(e, t) {
    return t.propertyName === "height";
  }
  function eW(e, t) {
    var n = {};
    if (typeof e == "number") {
      n.subMenuOpenDelay = e / 1000;
    }
    if (typeof t == "number") {
      n.subMenuCloseDelay = t / 1000;
    }
    return n;
  }
  function eB(e) {
    return e.type?.isSubMenu;
  }
  var domTypeUtils_1 = require("dom-type-utils_1") /*id: 908793*/;
  var objectOmitUtil = require("object-omit-util") /*id: 379788*/;
  var createContextModule = require("create-context-module") /*id: 2998*/;
  var iconDownBoldOutlined = require("icon-down-bold-outlined") /*id: 851606*/;
  function eG() {
    var e = reactCoreLibraryReexport.useContext(eK);
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
  function eX() {
    var e = uiConfigContextHooks.useLocale();
    return reactCoreLibraryReexport.createElement("span", null, e.global.more);
  }
  function eq() {
    var e = reactCoreLibraryReexport.useContext(eK).prefixCls;
    return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, reactCoreLibraryReexport.createElement(eX, null), reactCoreLibraryReexport.createElement(iconDownBoldOutlined.DownBoldOutlined, {
      className: `${e}-overflow-expandIcon`
    }), reactCoreLibraryReexport.createElement(eG, null));
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
  require("empty-module-shim-init") /*id: 596430*/;
  var constantStringModule = require("constant-string-module") /*id: 237027*/;
  var udPickerPanelId_3 = require("ud-picker-panel-id_3") /*id: 291591*/;
  var translateOutlinedIcon_1 = require("translate-outlined-icon_1") /*id: 977617*/;
  var typographyBodyStyleConfig = require("typography-body-style-config") /*id: 607187*/;
  var tooltipComponentModule = require("tooltip-component-module") /*id: 91247*/;
  var reactChildrenFlatten = require("react-children-flatten") /*id: 96569*/;
  var typographyComponent_2 = require("typography-component_2") /*id: 728302*/;
  var e7 = {
    props: {
      lineHeight: "uodcvno",
      fontWeight: "u11adn32",
      fontSize: "u1bdmrri"
    }
  };
  function e9(e) {
    var t = e.showEllipsis;
    var n = e.title;
    var r = e.style;
    var o = reactCoreLibraryReexport.useContext(y).mode;
    var i = reactCoreLibraryReexport.useContext(eK).prefixCls;
    if (t) {
      return reactCoreLibraryReexport.createElement(typographyComponent_2.Typography, {
        as: "div",
        className: conditionalClassnames.default(`${i}-item-title-content`, `${i}-item-title-content-text-overflow`),
        style: r,
        sx: [e7],
        lineClamp: o === "vertical" || o === "inline" ? 2 : 1
      }, n);
    } else {
      return reactCoreLibraryReexport.createElement(typographyComponent_2.Typography, {
        as: "div",
        style: r,
        className: `${i}-item-title-content`,
        sx: [e7]
      }, n);
    }
  }
  var uiInlineLayoutComponents = require("ui-inline-layout-components") /*id: 135614*/;
  var e5 = ["className", "children", "title", "icon", "textOverflow", "disabled"];
  function e8(e) {
    var t = e.isSelected;
    var n = reactCoreLibraryReexport.useContext(eK);
    var r = n.prefixCls;
    var o = n.mode;
    var u = n.inlineCollapsed;
    var l = n.showCheckmark;
    if (n.selectable && l && o === "normal" && !u) {
      return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, reactCoreLibraryReexport.createElement("span", {
        className: composeClassNamesUtil.composeClassNames({
          props: {
            width: constantStringModule.getConstantValue,
            flexShrink: udPickerPanelId_3.panelId
          }
        })
      }), t && reactCoreLibraryReexport.createElement(translateOutlinedIcon_1.TranslateOutlinedIcon, {
        className: `${r}-item-suffix-icon`
      }));
    } else {
      return null;
    }
  }
  var te = ["title"];
  function tt(e) {
    var t;
    var n = e.mode;
    var o = e.inlineCollapsed;
    var i = e.className;
    var l = e.prefixCls;
    var c = e.expandIcon;
    var s = e.textOverflow;
    var f = s === undefined ? n !== "normal" : s;
    var d = e.getPopupContainer;
    var v = d === undefined ? function () {
      return document.body;
    } : d;
    var m = e.subMenuCloseDelay;
    var h = e.subMenuOpenDelay;
    var y = e.inlineIndent;
    var E = y === undefined ? H.inlineIndent : y;
    var g = e.showCheckmark;
    var b = g === undefined || g;
    var x = e.onClick;
    var Z = e.selectable;
    var C = e.builtinPlacements;
    var w = e.overflowedIndicator;
    var S = e.selectedKeys;
    var N = e.defaultSelectedKeys;
    var R = uiConfigContextHooks.usePrefixCls();
    var M = reactCoreLibraryReexport.useContext(eL);
    var A = reactCoreLibraryReexport.useContext(createContextModule.createContext);
    var P = reactCoreLibraryReexport.useMemo(function () {
      if (domTypeUtils_1.isDefined(n)) {
        return n;
      } else if (A) {
        return "normal";
      } else {
        return "vertical";
      }
    }, [A, n]);
    var O = reactCoreLibraryReexport.useMemo(function () {
      var e;
      var t;
      if (C) {
        return C;
      } else {
        e = eJ(P);
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
    }, [C, P]);
    var k = reactCoreLibraryReexport.useMemo(function () {
      if (domTypeUtils_1.isDefined(Z)) {
        return Z;
      } else {
        return !!domTypeUtils_1.isDefined(S) || !!domTypeUtils_1.isDefined(N) || !A;
      }
    }, [N, A, Z, S]);
    var T = uiConfigContextHooks.useClassName(P === "normal" ? "menu-normal" : "menu");
    var L = l || T();
    var K = M ? M.siderCollapsed : o !== undefined && o;
    var D = e.children;
    var z = reactCoreLibraryReexport.Children.toArray(D).find(eB);
    var F = conditionalClassnames.default(i, A == null ? undefined : A.className, (t = {}, objectPropertySetter.setObjectProperty(t, `${L}-inline-collapsed`, K), objectPropertySetter.setObjectProperty(t, `${L}-include-subMenu`, z), t), "ud-scrollbar");
    var U = P === "normal" ? "vertical" : P;
    return reactCoreLibraryReexport.createElement(eK.Provider, {
      value: reactCoreLibraryReexport.useMemo(function () {
        return {
          prefixCls: L,
          inlineCollapsed: K,
          mode: P,
          selectable: k,
          textOverflow: f,
          firstLevel: true,
          showCheckmark: b
        };
      }, [K, P, k, L, b, f])
    }, reactCoreLibraryReexport.createElement(eT, objectAssignUtil.objectAssign({
      builtinPlacements: O,
      getPopupContainer: v
    }, objectOmitUtil.omitObjectKeys(e, ["showCheckmark", "textOverflow"]), {
      overflowedIndicator: w ?? reactCoreLibraryReexport.createElement(eq, null),
      onClick: reactCoreLibraryReexport.useCallback(function (e) {
        if (domTypeUtils_1.isFunction(x)) {
          x(e);
        }
        if (domTypeUtils_1.isFunction(A == null ? undefined : A.onClick)) {
          if (A != null) {
            A.onClick(e);
          }
        }
      }, [A, x]),
      mode: U,
      selectable: k,
      inlineCollapsed: K,
      className: F,
      prefixCls: L,
      direction: "ltr",
      expandIcon: function () {
        return reactCoreLibraryReexport.createElement("span", {
          className: `${L}-submenu-arrow`
        }, c || reactCoreLibraryReexport.createElement(rightBoldOutlinedIcon.RightBoldOutlined, {
          className: `${L}-submenu-arrow-icon`
        }));
      },
      defaultMotions: {
        horizontal: {
          motionName: `${R}-slide-up`
        },
        inline: {
          motionName: `${R}-motion-collapse`,
          onAppearStart: eD,
          onEnterStart: eD,
          onAppearActive: ez,
          onEnterActive: ez,
          onLeaveStart: eF,
          onLeaveActive: eD,
          onAppearEnd: eU,
          onEnterEnd: eU,
          onLeaveEnd: eU,
          motionDeadline: 500
        },
        other: {
          motionName: `${R}-zoom-big`
        }
      }
    }, eW(m, h), {
      inlineIndent: E
    })));
  }
  tt.Item = function (e) {
    var t;
    var n = e.className;
    var l = e.children;
    var c = e.title;
    var s = e.icon;
    var f = e.textOverflow;
    var d = e.disabled;
    var p = objectOmitHelper_1.omitWithSymbols(e, e5);
    var v = reactCoreLibraryReexport.useContext(eK);
    var m = v.prefixCls;
    var h = v.inlineCollapsed;
    var y = v.textOverflow;
    var E = v.firstLevel;
    var g = v.mode;
    var b = c;
    if (c === undefined) {
      b = E ? l : "";
    } else if (c === false) {
      b = "";
    }
    var x = {
      title: b
    };
    if (!h) {
      x.visible = false;
    }
    var Z = reactChildrenFlatten.flattenChildren(l).length;
    var C = conditionalClassnames.default(n, `${m}-item--root-${g}`, objectPropertySetter.setObjectProperty({}, `${m}-item-only-child`, (s ? Z + 1 : Z) === 1), composeClassNamesUtil.composeClassNames(g === "normal" && typographyBodyStyleConfig.typographyBodyStyle));
    return reactCoreLibraryReexport.createElement(tooltipComponentModule.TooltipComponent, objectAssignUtil.objectAssign({}, x, {
      overlayClassName: `${m}-inline-collapsed-tooltip`,
      placement: "right"
    }), reactCoreLibraryReexport.createElement(ee, objectAssignUtil.objectAssign({}, p, {
      className: C,
      title: typeof c == "string" ? c : undefined,
      itemIcon: e8,
      disabled: d
    }), s && reactCoreLibraryReexport.createElement("div", {
      className: conditionalClassnames.default(`${m}-icon-wrap`, d && `${m}-icon-wrap-disabled`)
    }, s), (t = h && E) && !s && typeof l == "string" ? reactCoreLibraryReexport.createElement("div", {
      className: `${m}-inline-collapsed-noicon`
    }, l.charAt(0)) : reactCoreLibraryReexport.createElement(e9, {
      style: t ? {
        width: 0,
        overflow: "hidden"
      } : {},
      showEllipsis: !t && (f ?? y),
      title: l
    }), reactCoreLibraryReexport.createElement(uiInlineLayoutComponents.EmptyInlineElement, null), reactCoreLibraryReexport.createElement(eG, null)));
  };
  tt.SubMenu = function (e) {
    var t = e.icon;
    var n = e.title;
    var o = e.className;
    var l = e.popupClassName;
    var c = e.children;
    var s = e.textOverflow;
    var f = e.disabled;
    var d = e.popupOffset;
    var v = reactCoreLibraryReexport.useContext(eK);
    var m = reactCoreLibraryReexport.useContext(y).mode;
    var h = v.inlineCollapsed;
    var E = v.textOverflow;
    var g = v.prefixCls;
    var b = v.mode;
    var x = Z();
    var C = conditionalClassnames.default(o, `${g}__submenu--root-${b}`, b === "normal" && composeClassNamesUtil.composeClassNames(typographyBodyStyleConfig.typographyBodyStyle));
    var w = eJ(b === "normal" ? "normal" : m);
    var S = reactCoreLibraryReexport.Children.toArray(c).find(eB);
    var N = conditionalClassnames.default(g, objectPropertySetter.setObjectProperty({}, `${g}-submenu-popup-include-subMenu`, S), l, `${g}__submenu--root-${b}`);
    return reactCoreLibraryReexport.createElement(eK.Provider, {
      value: reactCoreLibraryReexport.useMemo(function () {
        return objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, v), {}, {
          firstLevel: false
        });
      }, [v])
    }, reactCoreLibraryReexport.createElement(ey, objectAssignUtil.objectAssign({}, objectOmitUtil.omitObjectKeys(e, ["icon", "textOverflow", "className"]), {
      popupOffset: d ?? w,
      title: reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, t && reactCoreLibraryReexport.createElement("div", {
        className: conditionalClassnames.default(`${g}-icon-wrap`, f && `${g}-icon-wrap-disabled`)
      }, t), !h || x.length ? reactCoreLibraryReexport.createElement(e9, {
        showEllipsis: s ?? E,
        title: n
      }) : t ? null : typeof n == "string" ? reactCoreLibraryReexport.createElement("div", {
        className: `${g}-inline-collapsed-noicon`
      }, n.charAt(0)) : undefined, reactCoreLibraryReexport.createElement(uiInlineLayoutComponents.EmptyInlineElement, null), reactCoreLibraryReexport.createElement(eG, null)),
      className: C,
      popupClassName: N
    })));
  };
  tt.Divider = M;
  tt.ItemGroup = function (e) {
    var t = e.title;
    var n = objectOmitHelper_1.omitWithSymbols(e, te);
    return reactCoreLibraryReexport.createElement(R, objectAssignUtil.objectAssign({
      title: reactCoreLibraryReexport.createElement("div", {
        className: conditionalClassnames.default(composeClassNamesUtil.composeClassNames(composeTypographyHeadlineClass.typographyHeadlineClass))
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