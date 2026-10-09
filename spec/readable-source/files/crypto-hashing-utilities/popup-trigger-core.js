// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'Trigger'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 35713.652e82fe.js
         * chunkId: 35713
         * moduleId: 956311
         */
module.exports = function (module, exports, require) {
  var r;
  var objectPropertyAssign = require("object-property-assign") /*id: 526210*/;
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var classCallCheckUtil = require("class-call-check-util") /*id: 822439*/;
  var classPropertyUtil = require("class-property-util") /*id: 801584*/;
  var assertThisInitialized = require("assert-this-initialized") /*id: 876127*/;
  var setPrototypeInheritance = require("set-prototype-inheritance") /*id: 805158*/;
  var wrapNativeSuperHelper = require("wrap-native-super-helper") /*id: 694678*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  var frameDelayScheduler = require("frame-delay-scheduler") /*id: 967206*/;
  function h(e, t) {
    return !!e && e.contains(t);
  }
  var getDomNodeUtil = require("get-dom-node-util") /*id: 285330*/;
  var reactRefUtils = require("react-ref-utils") /*id: 624373*/;
  function g(e, t, n, r) {
    var o = reactDomEntryWrapper.unstable_batchedUpdates ? function (e) {
      reactDomEntryWrapper.unstable_batchedUpdates(n, e);
    } : n;
    if (e.addEventListener) {
      e.addEventListener(t, o, r);
    }
    return {
      remove: function () {
        if (e.removeEventListener) {
          e.removeEventListener(t, o);
        }
      }
    };
  }
  var isBrowserEnv_1 = require("is-browser-env_1") /*id: 902231*/;
  var w = reactCoreLibraryReexport.forwardRef(function (e, t) {
    var n = e.didUpdate;
    var r = e.getContainer;
    var o = e.children;
    var i = reactCoreLibraryReexport.useRef();
    var u = reactCoreLibraryReexport.useRef();
    reactCoreLibraryReexport.useImperativeHandle(t, function () {
      return {};
    });
    var a = reactCoreLibraryReexport.useRef(false);
    if (!a.current && isBrowserEnv_1.isBrowser()) {
      u.current = r();
      i.current = u.current.parentNode;
      a.current = true;
    }
    reactCoreLibraryReexport.useEffect(function () {
      if (n != null) {
        n(e);
      }
    });
    reactCoreLibraryReexport.useEffect(function () {
      if (u.current.parentNode === null && i.current !== null) {
        i.current.appendChild(u.current);
      }
      return function () {
        var e;
        var t;
        if ((e = u.current) !== null && e !== undefined && (t = e.parentNode) !== null && t !== undefined) {
          t.removeChild(u.current);
        }
      };
    }, []);
    if (u.current) {
      return reactDomEntryWrapper.createPortal(o, u.current);
    } else {
      return null;
    }
  });
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var x = classnamesUtils;
  var iterableToArrayUtil_1_1 = require("iterable-to-array-util_1_1") /*id: 975753*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  function Z() {
    if (typeof navigator == "undefined" || typeof window == "undefined") {
      return false;
    }
    var e = navigator.userAgent || navigator.vendor || window.opera;
    return !!/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || !!/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(e == null ? undefined : e.substr(0, 4));
  }
  var cssMotionAnimationUtil = require("css-motion-animation-util") /*id: 663888*/;
  function T(e) {
    var t = e.prefixCls;
    var n = e.motion;
    var r = e.animation;
    var o = e.transitionName;
    return n || (r ? {
      motionName: `${t}-${r}`
    } : o ? {
      motionName: o
    } : null);
  }
  function P(e) {
    var t = e.prefixCls;
    var n = e.visible;
    var r = e.zIndex;
    var u = e.mask;
    var a = e.maskMotion;
    var c = e.maskAnimation;
    var s = e.maskTransitionName;
    if (!u) {
      return null;
    }
    var l = {};
    if (a || s || c) {
      l = objectPropertyAssign.assignObject({
        motionAppear: true
      }, T({
        motion: a,
        prefixCls: t,
        transitionName: s,
        animation: c
      }));
    }
    return reactCoreLibraryReexport.createElement(cssMotionAnimationUtil.CSSMotion, objectAssignUtil.objectAssign({}, l, {
      visible: n,
      removeOnLeave: true
    }), function (e) {
      var n = e.className;
      return reactCoreLibraryReexport.createElement("div", {
        style: {
          zIndex: r
        },
        className: x(`${t}-mask`, n)
      });
    });
  }
  var typeofHelper = require("typeof-helper") /*id: 56852*/;
  function O(e) {
    if (!e) {
      return false;
    }
    if (e.offsetParent) {
      return true;
    }
    if (e.getBBox) {
      var t = e.getBBox();
      if (t.width || t.height) {
        return true;
      }
    }
    if (e.getBoundingClientRect) {
      var n = e.getBoundingClientRect();
      if (n.width || n.height) {
        return true;
      }
    }
    return false;
  }
  var domElementAlignUtil = require("dom-element-align-util") /*id: 984082*/;
  var resizeObserverPolyfill_1 = require("resize-observer-polyfill_1") /*id: 767395*/;
  function D(e, t) {
    var n = null;
    var r = null;
    var o = new resizeObserverPolyfill_1.ResizeObserver(function (e) {
      var o = iterableToArrayUtil_1_1.iterableToArray(e, 1)[0].target;
      if (document.documentElement.contains(o)) {
        var i = o.getBoundingClientRect();
        var u = i.width;
        var a = i.height;
        var c = Math.floor(u);
        var s = Math.floor(a);
        if (n !== c || r !== s) {
          Promise.resolve().then(function () {
            t({
              width: c,
              height: s
            });
          });
        }
        n = c;
        r = s;
      }
    });
    if (e) {
      o.observe(e);
    }
    return function () {
      o.disconnect();
    };
  }
  function R(e, t) {
    var n = reactCoreLibraryReexport.useRef(false);
    var r = reactCoreLibraryReexport.useRef(null);
    function o() {
      window.clearTimeout(r.current);
    }
    return [function i(u) {
      if (n.current && u !== true) {
        o();
        r.current = window.setTimeout(function () {
          n.current = false;
          i();
        }, t);
      } else {
        if (e() === false) {
          return;
        }
        n.current = true;
        o();
        r.current = window.setTimeout(function () {
          n.current = false;
        }, t);
      }
    }, function () {
      n.current = false;
      o();
    }];
  }
  function N(e) {
    if (typeof e != "function") {
      return null;
    } else {
      return e();
    }
  }
  function A(e) {
    if (typeofHelper.getType(e) === "object" && e) {
      return e;
    } else {
      return null;
    }
  }
  var j = reactCoreLibraryReexport.forwardRef(function (e, t) {
    var n = e.children;
    var r = e.disabled;
    var o = e.target;
    var i = e.align;
    var u = e.onAlign;
    var a = e.monitorWindowResize;
    var c = e.monitorBufferTime;
    var s = reactCoreLibraryReexport.useRef({});
    var l = reactCoreLibraryReexport.useRef();
    var p = reactCoreLibraryReexport.Children.only(n);
    var d = reactCoreLibraryReexport.useRef({});
    d.current.disabled = r;
    d.current.target = o;
    d.current.onAlign = u;
    var v = R(function () {
      var e = d.current;
      var t = e.disabled;
      var n = e.target;
      var r = e.onAlign;
      if (!t && n) {
        var o;
        var u = l.current;
        var a = N(n);
        var c = A(n);
        s.current.element = a;
        s.current.point = c;
        var f = document.activeElement;
        if (a && O(a)) {
          o = domElementAlignUtil.alignElement(u, a, i);
        } else if (c) {
          o = domElementAlignUtil.alignToEvent(u, c, i);
        }
        if (f !== document.activeElement && h(u, f) && typeof f.focus == "function") {
          f.focus();
        }
        if (r && o) {
          r(u, o);
        }
        return true;
      }
      return false;
    }, c === undefined ? 0 : c);
    var y = iterableToArrayUtil_1_1.iterableToArray(v, 2);
    var w = y[0];
    var b = y[1];
    var x = reactCoreLibraryReexport.useRef({
      cancel: function () {}
    });
    var k = reactCoreLibraryReexport.useRef({
      cancel: function () {}
    });
    reactCoreLibraryReexport.useEffect(function () {
      var e;
      var t = N(o);
      var n = A(o);
      if (l.current !== k.current.element) {
        k.current.cancel();
        k.current.element = l.current;
        k.current.cancel = D(l.current, w);
      }
      if (s.current.element !== t || (e = s.current.point) !== n && (!e || !n || ("pageX" in n && "pageY" in n ? e.pageX !== n.pageX || e.pageY !== n.pageY : !("clientX" in n) || !("clientY" in n) || e.clientX !== n.clientX || e.clientY !== n.clientY))) {
        w();
        if (x.current.element !== t) {
          x.current.cancel();
          x.current.element = t;
          x.current.cancel = D(t, w);
        }
      }
    });
    reactCoreLibraryReexport.useEffect(function () {
      if (r) {
        b();
      } else {
        w();
      }
    }, [r]);
    var Z = reactCoreLibraryReexport.useRef(null);
    reactCoreLibraryReexport.useEffect(function () {
      if (a) {
        Z.current ||= g(window, "resize", w);
      } else if (Z.current) {
        Z.current.remove();
        Z.current = null;
      }
    }, [a]);
    reactCoreLibraryReexport.useEffect(function () {
      return function () {
        x.current.cancel();
        k.current.cancel();
        if (Z.current) {
          Z.current.remove();
        }
        b();
      };
    }, []);
    reactCoreLibraryReexport.useImperativeHandle(t, function () {
      return {
        forceAlign: function () {
          return w(true);
        }
      };
    });
    if (reactCoreLibraryReexport.isValidElement(p)) {
      p = reactCoreLibraryReexport.cloneElement(p, {
        ref: reactRefUtils.mergeRefs(p.ref, l)
      });
    }
    return p;
  });
  j.displayName = "Align";
  var _ = isBrowserEnv_1.isBrowser() ? reactCoreLibraryReexport.useLayoutEffect : reactCoreLibraryReexport.useEffect;
  var regeneratorRuntimePolyfill = require("regenerator-runtime-polyfill") /*id: 352802*/;
  var V = regeneratorRuntimePolyfill;
  var asyncToGeneratorHelper = require("async-to-generator-helper") /*id: 409129*/;
  var useSafeStateHook = require("use-safe-state-hook") /*id: 154306*/;
  var F = ["measure", "align", null, "motion"];
  function B(e, t) {
    var n = useSafeStateHook.useSafeState(null);
    var r = iterableToArrayUtil_1_1.iterableToArray(n, 2);
    var o = r[0];
    var i = r[1];
    var u = reactCoreLibraryReexport.useRef();
    function a() {
      frameDelayScheduler.scheduleDelayed.cancel(u.current);
    }
    reactCoreLibraryReexport.useEffect(function () {
      i("measure", true);
    }, [e]);
    reactCoreLibraryReexport.useEffect(function () {
      if (o === "measure") {
        t();
      }
      if (o) {
        u.current = frameDelayScheduler.scheduleDelayed(asyncToGeneratorHelper.asyncToGenerator(V.mark(function e() {
          var t;
          var n;
          return V.wrap(function (e) {
            while (true) {
              switch (e.prev = e.next) {
                case 0:
                  t = F.indexOf(o);
                  if ((n = F[t + 1]) && t !== -1) {
                    i(n, true);
                  }
                case 3:
                case "end":
                  return e.stop();
              }
            }
          }, e);
        })));
      }
    }, [o]);
    reactCoreLibraryReexport.useEffect(function () {
      return function () {
        a();
      };
    }, []);
    return [o, function (e) {
      a();
      u.current = frameDelayScheduler.scheduleDelayed(function () {
        i(function (e) {
          switch (o) {
            case "align":
              return "motion";
            case "motion":
              return "stable";
          }
          return e;
        }, true);
        if (e != null) {
          e();
        }
      });
    }];
  }
  function z(e) {
    var t = reactCoreLibraryReexport.useState({
      width: 0,
      height: 0
    });
    var n = iterableToArrayUtil_1_1.iterableToArray(t, 2);
    var r = n[0];
    var o = n[1];
    return [reactCoreLibraryReexport.useMemo(function () {
      var t = {};
      if (e) {
        var n = r.width;
        var o = r.height;
        if (e.indexOf("height") !== -1 && o) {
          t.height = o;
        } else if (e.indexOf("minHeight") !== -1 && o) {
          t.minHeight = o;
        }
        if (e.indexOf("width") !== -1 && n) {
          t.width = n;
        } else if (e.indexOf("minWidth") !== -1 && n) {
          t.minWidth = n;
        }
      }
      return t;
    }, [e, r]), function (e) {
      o({
        width: e.offsetWidth,
        height: e.offsetHeight
      });
    }];
  }
  var Y = reactCoreLibraryReexport.forwardRef(function (e, t) {
    var n = e.visible;
    var r = e.prefixCls;
    var u = e.className;
    var a = e.style;
    var c = e.children;
    var s = e.zIndex;
    var l = e.stretch;
    var p = e.destroyPopupOnHide;
    var d = e.forceRender;
    var h = e.align;
    var v = e.point;
    var m = e.getRootDomNode;
    var g = e.getClassNameFromAlign;
    var y = e.onAlign;
    var w = e.onMouseEnter;
    var b = e.onMouseLeave;
    var k = e.onMouseDown;
    var Z = e.onTouchStart;
    var P = reactCoreLibraryReexport.useRef();
    var M = reactCoreLibraryReexport.useRef();
    var O = reactCoreLibraryReexport.useState();
    var S = iterableToArrayUtil_1_1.iterableToArray(O, 2);
    var L = S[0];
    var D = S[1];
    var R = z(l);
    var N = iterableToArrayUtil_1_1.iterableToArray(R, 2);
    var A = N[0];
    var H = N[1];
    var V = B(n, function () {
      if (l) {
        H(m());
      }
    });
    var I = iterableToArrayUtil_1_1.iterableToArray(V, 2);
    var W = I[0];
    var F = I[1];
    var Y = reactCoreLibraryReexport.useState(null);
    var X = iterableToArrayUtil_1_1.iterableToArray(Y, 2);
    var U = X[0];
    var q = X[1];
    var G = reactCoreLibraryReexport.useRef();
    function K() {
      var e;
      if ((e = P.current) !== null && e !== undefined) {
        e.forceAlign();
      }
    }
    function Q(e, t) {
      var n = g(t);
      if (L !== n) {
        D(n);
      }
      q(t);
      if (W === "align") {
        if (y != null) {
          y(e, t);
        }
      }
    }
    _(function () {
      if (U && W === "align") {
        if (L !== g(U)) {
          K();
        } else {
          F(function () {
            var e;
            if ((e = G.current) !== null && e !== undefined) {
              e.call(G);
            }
          });
        }
      }
    }, [U]);
    var $ = objectPropertyAssign.assignObject({}, T(e));
    function J() {
      return new Promise(function (e) {
        G.current = e;
      });
    }
    ["onAppearEnd", "onEnterEnd", "onLeaveEnd"].forEach(function (e) {
      var t = $[e];
      $[e] = function (e, n) {
        F();
        if (t == null) {
          return undefined;
        } else {
          return t(e, n);
        }
      };
    });
    reactCoreLibraryReexport.useEffect(function () {
      if (!$.motionName && W === "motion") {
        F();
      }
    }, [$.motionName, W]);
    reactCoreLibraryReexport.useImperativeHandle(t, function () {
      return {
        forceAlign: K,
        getElement: function () {
          return M.current;
        }
      };
    });
    var ee = objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, A), {}, {
      zIndex: s,
      opacity: W !== "motion" && W !== "stable" && n ? 0 : undefined,
      pointerEvents: W === "stable" ? undefined : "none"
    }, a);
    var et = true;
    if ((h == null ? undefined : h.points) && (W === "align" || W === "stable")) {
      et = false;
    }
    var en = c;
    if (reactCoreLibraryReexport.Children.count(c) > 1) {
      en = reactCoreLibraryReexport.createElement("div", {
        className: `${r}-content`
      }, c);
    }
    return reactCoreLibraryReexport.createElement(cssMotionAnimationUtil.CSSMotion, objectAssignUtil.objectAssign({
      visible: n,
      ref: M,
      leavedClassName: `${r}-hidden`
    }, $, {
      onAppearPrepare: J,
      onEnterPrepare: J,
      removeOnLeave: p,
      forceRender: d
    }), function (e, t) {
      var n = e.className;
      var i = e.style;
      var a = x(r, u, L, n);
      return reactCoreLibraryReexport.createElement(j, {
        target: v || m,
        key: "popup",
        ref: P,
        monitorWindowResize: true,
        disabled: et,
        align: h,
        onAlign: Q
      }, reactCoreLibraryReexport.createElement("div", {
        ref: t,
        className: a,
        onMouseEnter: w,
        onMouseLeave: b,
        onMouseDownCapture: k,
        onTouchStartCapture: Z,
        style: objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, i), ee)
      }, en));
    });
  });
  Y.displayName = "PopupInner";
  var X = reactCoreLibraryReexport.forwardRef(function (e, t) {
    var n = e.prefixCls;
    var r = e.visible;
    var u = e.zIndex;
    var a = e.children;
    var c = e.mobile;
    var s = (c = c === undefined ? {} : c).popupClassName;
    var l = c.popupStyle;
    var p = c.popupMotion;
    var d = c.popupRender;
    var h = reactCoreLibraryReexport.useRef();
    reactCoreLibraryReexport.useImperativeHandle(t, function () {
      return {
        forceAlign: function () {},
        getElement: function () {
          return h.current;
        }
      };
    });
    var v = objectPropertyAssign.assignObject({
      zIndex: u
    }, l);
    var m = a;
    if (reactCoreLibraryReexport.Children.count(a) > 1) {
      m = reactCoreLibraryReexport.createElement("div", {
        className: `${n}-content`
      }, a);
    }
    if (d) {
      m = d(m);
    }
    return reactCoreLibraryReexport.createElement(cssMotionAnimationUtil.CSSMotion, objectAssignUtil.objectAssign({
      visible: r,
      ref: h,
      removeOnLeave: true
    }, p === undefined ? {} : p), function (e, t) {
      var r = e.className;
      var i = e.style;
      var u = x(n, s, r);
      return reactCoreLibraryReexport.createElement("div", {
        ref: t,
        className: u,
        style: objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, i), v)
      }, m);
    });
  });
  X.displayName = "MobilePopupInner";
  var U = ["visible", "mobile"];
  var q = reactCoreLibraryReexport.forwardRef(function (e, t) {
    var n = e.visible;
    var r = e.mobile;
    var u = objectOmitHelper_1.omitWithSymbols(e, U);
    var a = reactCoreLibraryReexport.useState(n);
    var c = iterableToArrayUtil_1_1.iterableToArray(a, 2);
    var s = c[0];
    var l = c[1];
    var p = reactCoreLibraryReexport.useState(false);
    var d = iterableToArrayUtil_1_1.iterableToArray(p, 2);
    var h = d[0];
    var v = d[1];
    var m = objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, u), {}, {
      visible: s
    });
    reactCoreLibraryReexport.useEffect(function () {
      l(n);
      if (n && r) {
        v(Z());
      }
    }, [n, r]);
    var g = h ? reactCoreLibraryReexport.createElement(X, objectAssignUtil.objectAssign({}, m, {
      mobile: r,
      ref: t
    })) : reactCoreLibraryReexport.createElement(Y, objectAssignUtil.objectAssign({}, m, {
      ref: t
    }));
    return reactCoreLibraryReexport.createElement("div", null, reactCoreLibraryReexport.createElement(P, m), g);
  });
  q.displayName = "Popup";
  var G = reactCoreLibraryReexport.createContext(null);
  function K() {}
  var Q = ["onClick", "onMouseDown", "onTouchStart", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur", "onContextMenu"];
  (r = function (e) {
    setPrototypeInheritance.setInheritance(n, e);
    var t = wrapNativeSuperHelper.wrapNativeSuper(n);
    function n(e) {
      var r;
      var o;
      classCallCheckUtil.classCallCheck(this, n);
      (r = t.call(this, e)).popupRef = reactCoreLibraryReexport.createRef();
      r.triggerRef = reactCoreLibraryReexport.createRef();
      r.portalContainer = undefined;
      r.attachId = undefined;
      r.clickOutsideHandler = undefined;
      r.touchOutsideHandler = undefined;
      r.contextMenuOutsideHandler1 = undefined;
      r.contextMenuOutsideHandler2 = undefined;
      r.mouseDownTimeout = undefined;
      r.focusTime = undefined;
      r.preClickTime = undefined;
      r.preTouchTime = undefined;
      r.delayTimer = undefined;
      r.hasPopupMouseDown = undefined;
      r.onMouseEnter = function (e) {
        var t = r.props.mouseEnterDelay;
        r.fireEvents("onMouseEnter", e);
        r.delaySetPopupVisible(true, t, t ? null : e);
      };
      r.onMouseMove = function (e) {
        r.fireEvents("onMouseMove", e);
        r.setPoint(e);
      };
      r.onMouseLeave = function (e) {
        r.fireEvents("onMouseLeave", e);
        r.delaySetPopupVisible(false, r.props.mouseLeaveDelay);
      };
      r.onPopupMouseEnter = function () {
        r.clearDelayTimer();
      };
      r.onPopupMouseLeave = function (e) {
        var t;
        if (!e.relatedTarget || !!e.relatedTarget.setTimeout || !h((t = r.popupRef.current) === null || t === undefined ? undefined : t.getElement(), e.relatedTarget)) {
          r.delaySetPopupVisible(false, r.props.mouseLeaveDelay);
        }
      };
      r.onFocus = function (e) {
        r.fireEvents("onFocus", e);
        r.clearDelayTimer();
        if (r.isFocusToShow()) {
          r.focusTime = Date.now();
          r.delaySetPopupVisible(true, r.props.focusDelay);
        }
      };
      r.onMouseDown = function (e) {
        r.fireEvents("onMouseDown", e);
        r.preClickTime = Date.now();
      };
      r.onTouchStart = function (e) {
        r.fireEvents("onTouchStart", e);
        r.preTouchTime = Date.now();
      };
      r.onBlur = function (e) {
        r.fireEvents("onBlur", e);
        r.clearDelayTimer();
        if (r.isBlurToHide()) {
          r.delaySetPopupVisible(false, r.props.blurDelay);
        }
      };
      r.onContextMenu = function (e) {
        e.preventDefault();
        r.fireEvents("onContextMenu", e);
        r.setPopupVisible(true, e);
      };
      r.onContextMenuClose = function () {
        if (r.isContextMenuToShow()) {
          r.close();
        }
      };
      r.onClick = function (e) {
        r.fireEvents("onClick", e);
        if (r.focusTime) {
          var t;
          if (r.preClickTime && r.preTouchTime) {
            t = Math.min(r.preClickTime, r.preTouchTime);
          } else if (r.preClickTime) {
            t = r.preClickTime;
          } else if (r.preTouchTime) {
            t = r.preTouchTime;
          }
          if (Math.abs(t - r.focusTime) < 20) {
            return;
          }
          r.focusTime = 0;
        }
        r.preClickTime = 0;
        r.preTouchTime = 0;
        if (r.isClickToShow() && (r.isClickToHide() || r.isBlurToHide()) && e && e.preventDefault) {
          e.preventDefault();
        }
        var n = !r.state.popupVisible;
        if (r.isClickToHide() && !n || n && r.isClickToShow()) {
          r.setPopupVisible(!r.state.popupVisible, e);
        }
      };
      r.onPopupMouseDown = function (e) {
        r.hasPopupMouseDown = true;
        clearTimeout(r.mouseDownTimeout);
        r.mouseDownTimeout = window.setTimeout(function () {
          r.hasPopupMouseDown = false;
        }, 0);
        if (r.context) {
          r.context.onPopupMouseDown(e);
        }
      };
      r.onDocumentClick = function (e) {
        if (!r.props.mask || r.props.maskClosable) {
          var t = e.target;
          var n = r.getRootDomNode();
          var o = r.getPopupDomNode();
          if ((!h(n, t) || r.isContextMenuOnly()) && !h(o, t) && !r.hasPopupMouseDown) {
            r.close();
          }
        }
      };
      r.getRootDomNode = function () {
        var e = r.props.getTriggerDOMNode;
        if (e) {
          return e(r.triggerRef.current);
        }
        try {
          var t = getDomNodeUtil.getDOMNode(r.triggerRef.current);
          if (t) {
            return t;
          }
        } catch (e) {}
        return reactDomEntryWrapper.findDOMNode(assertThisInitialized.assertThisInit(r));
      };
      r.getPopupClassNameFromAlign = function (e) {
        var t = [];
        var n = r.props;
        var o = n.popupPlacement;
        var i = n.builtinPlacements;
        var u = n.prefixCls;
        var a = n.alignPoint;
        var c = n.getPopupClassNameFromAlign;
        if (o && i) {
          t.push(function (e, t, n, r) {
            var o = n.points;
            var i = Object.keys(e);
            var u = 0;
            for (; u < i.length; u += 1) {
              var a;
              var c = i[u];
              a = e[c].points;
              if (r ? a[0] === o[0] : a[0] === o[0] && a[1] === o[1]) {
                return `${t}-placement-${c}`;
              }
            }
            return "";
          }(i, u, e, a));
        }
        if (c) {
          t.push(c(e));
        }
        return t.join(" ");
      };
      r.getComponent = function () {
        var e = r.props;
        var t = e.prefixCls;
        var n = e.destroyPopupOnHide;
        var o = e.popupClassName;
        var u = e.onPopupAlign;
        var a = e.popupMotion;
        var c = e.popupAnimation;
        var s = e.popupTransitionName;
        var l = e.popupStyle;
        var p = e.mask;
        var d = e.maskAnimation;
        var h = e.maskTransitionName;
        var v = e.maskMotion;
        var m = e.zIndex;
        var g = e.popup;
        var y = e.stretch;
        var w = e.alignPoint;
        var b = e.mobile;
        var x = e.forceRender;
        var E = r.state;
        var k = E.popupVisible;
        var Z = E.point;
        var C = r.getPopupAlign();
        var T = {};
        if (r.isMouseEnterToShow()) {
          T.onMouseEnter = r.onPopupMouseEnter;
        }
        if (r.isMouseLeaveToHide()) {
          T.onMouseLeave = r.onPopupMouseLeave;
        }
        T.onMouseDown = r.onPopupMouseDown;
        T.onTouchStart = r.onPopupMouseDown;
        return reactCoreLibraryReexport.createElement(q, objectAssignUtil.objectAssign({
          prefixCls: t,
          destroyPopupOnHide: n,
          visible: k,
          point: w && Z,
          className: o,
          align: C,
          onAlign: u,
          animation: c,
          getClassNameFromAlign: r.getPopupClassNameFromAlign
        }, T, {
          stretch: y,
          getRootDomNode: r.getRootDomNode,
          style: l,
          mask: p,
          zIndex: m,
          transitionName: s,
          maskAnimation: d,
          maskTransitionName: h,
          maskMotion: v,
          ref: r.popupRef,
          motion: a,
          mobile: b,
          forceRender: x
        }), typeof g == "function" ? g() : g);
      };
      r.attachParent = function (e) {
        frameDelayScheduler.scheduleDelayed.cancel(r.attachId);
        var t;
        var n = r.props;
        var o = n.getPopupContainer;
        var i = n.getDocument;
        var u = r.getRootDomNode();
        if (o) {
          if (u || o.length === 0) {
            t = o(u);
          }
        } else {
          t = i(r.getRootDomNode()).body;
        }
        if (t) {
          t.appendChild(e);
        } else {
          r.attachId = frameDelayScheduler.scheduleDelayed(function () {
            r.attachParent(e);
          });
        }
      };
      r.getContainer = function () {
        if (!r.portalContainer) {
          var e = r.props.getDocument(r.getRootDomNode()).createElement("div");
          e.style.position = "absolute";
          e.style.top = "0";
          e.style.left = "0";
          e.style.width = "100%";
          r.portalContainer = e;
        }
        r.attachParent(r.portalContainer);
        return r.portalContainer;
      };
      r.setPoint = function (e) {
        if (r.props.alignPoint && e) {
          r.setState({
            point: {
              pageX: e.pageX,
              pageY: e.pageY
            }
          });
        }
      };
      r.handlePortalUpdate = function () {
        if (r.state.prevPopupVisible !== r.state.popupVisible) {
          r.props.afterPopupVisibleChange(r.state.popupVisible);
        }
      };
      r.triggerContextValue = {
        onPopupMouseDown: r.onPopupMouseDown
      };
      o = "popupVisible" in e ? !!e.popupVisible : !!e.defaultPopupVisible;
      r.state = {
        prevPopupVisible: o,
        popupVisible: o
      };
      Q.forEach(function (e) {
        r[`fire${e}`] = function (t) {
          r.fireEvents(e, t);
        };
      });
      return r;
    }
    classPropertyUtil.defineClassProps(n, [{
      key: "componentDidMount",
      value: function () {
        this.componentDidUpdate();
      }
    }, {
      key: "componentDidUpdate",
      value: function () {
        var e;
        var t = this.props;
        if (this.state.popupVisible) {
          if (!this.clickOutsideHandler && (this.isClickToHide() || this.isContextMenuToShow())) {
            e = t.getDocument(this.getRootDomNode());
            this.clickOutsideHandler = g(e, "mousedown", this.onDocumentClick);
          }
          if (!this.touchOutsideHandler) {
            e = e || t.getDocument(this.getRootDomNode());
            this.touchOutsideHandler = g(e, "touchstart", this.onDocumentClick);
          }
          if (!this.contextMenuOutsideHandler1 && this.isContextMenuToShow()) {
            e = e || t.getDocument(this.getRootDomNode());
            this.contextMenuOutsideHandler1 = g(e, "scroll", this.onContextMenuClose);
          }
          if (!this.contextMenuOutsideHandler2 && this.isContextMenuToShow()) {
            this.contextMenuOutsideHandler2 = g(window, "blur", this.onContextMenuClose);
          }
          return;
        }
        this.clearOutsideHandler();
      }
    }, {
      key: "componentWillUnmount",
      value: function () {
        this.clearDelayTimer();
        this.clearOutsideHandler();
        clearTimeout(this.mouseDownTimeout);
        frameDelayScheduler.scheduleDelayed.cancel(this.attachId);
      }
    }, {
      key: "getPopupDomNode",
      value: function () {
        var e;
        return ((e = this.popupRef.current) === null || e === undefined ? undefined : e.getElement()) || null;
      }
    }, {
      key: "getPopupAlign",
      value: function () {
        var e;
        var t = this.props;
        var n = t.popupPlacement;
        var r = t.popupAlign;
        var i = t.builtinPlacements;
        if (n && i) {
          e = i[n] || {};
          return objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, e), r);
        } else {
          return r;
        }
      }
    }, {
      key: "setPopupVisible",
      value: function (e, t) {
        var n = this.props.alignPoint;
        var r = this.state.popupVisible;
        this.clearDelayTimer();
        if (r !== e) {
          if (!("popupVisible" in this.props)) {
            this.setState({
              popupVisible: e,
              prevPopupVisible: r
            });
          }
          this.props.onPopupVisibleChange(e);
        }
        if (n && t && e) {
          this.setPoint(t);
        }
      }
    }, {
      key: "delaySetPopupVisible",
      value: function (e, t, n) {
        var r = this;
        var o = t * 1000;
        this.clearDelayTimer();
        if (o) {
          var i = n ? {
            pageX: n.pageX,
            pageY: n.pageY
          } : null;
          this.delayTimer = window.setTimeout(function () {
            r.setPopupVisible(e, i);
            r.clearDelayTimer();
          }, o);
        } else {
          this.setPopupVisible(e, n);
        }
      }
    }, {
      key: "clearDelayTimer",
      value: function () {
        if (this.delayTimer) {
          clearTimeout(this.delayTimer);
          this.delayTimer = null;
        }
      }
    }, {
      key: "clearOutsideHandler",
      value: function () {
        if (this.clickOutsideHandler) {
          this.clickOutsideHandler.remove();
          this.clickOutsideHandler = null;
        }
        if (this.contextMenuOutsideHandler1) {
          this.contextMenuOutsideHandler1.remove();
          this.contextMenuOutsideHandler1 = null;
        }
        if (this.contextMenuOutsideHandler2) {
          this.contextMenuOutsideHandler2.remove();
          this.contextMenuOutsideHandler2 = null;
        }
        if (this.touchOutsideHandler) {
          this.touchOutsideHandler.remove();
          this.touchOutsideHandler = null;
        }
      }
    }, {
      key: "createTwoChains",
      value: function (e) {
        var t = this.props.children.props;
        var n = this.props;
        if (t[e] && n[e]) {
          return this[`fire${e}`];
        } else {
          return t[e] || n[e];
        }
      }
    }, {
      key: "isClickToShow",
      value: function () {
        var e = this.props;
        var t = e.action;
        var n = e.showAction;
        return t.indexOf("click") !== -1 || n.indexOf("click") !== -1;
      }
    }, {
      key: "isContextMenuOnly",
      value: function () {
        var e = this.props.action;
        return e === "contextMenu" || e.length === 1 && e[0] === "contextMenu";
      }
    }, {
      key: "isContextMenuToShow",
      value: function () {
        var e = this.props;
        var t = e.action;
        var n = e.showAction;
        return t.indexOf("contextMenu") !== -1 || n.indexOf("contextMenu") !== -1;
      }
    }, {
      key: "isClickToHide",
      value: function () {
        var e = this.props;
        var t = e.action;
        var n = e.hideAction;
        return t.indexOf("click") !== -1 || n.indexOf("click") !== -1;
      }
    }, {
      key: "isMouseEnterToShow",
      value: function () {
        var e = this.props;
        var t = e.action;
        var n = e.showAction;
        return t.indexOf("hover") !== -1 || n.indexOf("mouseEnter") !== -1;
      }
    }, {
      key: "isMouseLeaveToHide",
      value: function () {
        var e = this.props;
        var t = e.action;
        var n = e.hideAction;
        return t.indexOf("hover") !== -1 || n.indexOf("mouseLeave") !== -1;
      }
    }, {
      key: "isFocusToShow",
      value: function () {
        var e = this.props;
        var t = e.action;
        var n = e.showAction;
        return t.indexOf("focus") !== -1 || n.indexOf("focus") !== -1;
      }
    }, {
      key: "isBlurToHide",
      value: function () {
        var e = this.props;
        var t = e.action;
        var n = e.hideAction;
        return t.indexOf("focus") !== -1 || n.indexOf("blur") !== -1;
      }
    }, {
      key: "forcePopupAlign",
      value: function () {
        if (this.state.popupVisible) {
          var e;
          if ((e = this.popupRef.current) !== null && e !== undefined) {
            e.forceAlign();
          }
        }
      }
    }, {
      key: "fireEvents",
      value: function (e, t) {
        var n = this.props.children.props[e];
        if (n) {
          n(t);
        }
        var r = this.props[e];
        if (r) {
          r(t);
        }
      }
    }, {
      key: "close",
      value: function () {
        this.setPopupVisible(false);
      }
    }, {
      key: "render",
      value: function () {
        var e;
        var t = this.state.popupVisible;
        var n = this.props;
        var r = n.children;
        var i = n.forceRender;
        var u = n.alignPoint;
        var a = n.className;
        var c = n.autoDestroy;
        var s = reactCoreLibraryReexport.Children.only(r);
        var l = {
          key: "trigger"
        };
        if (this.isContextMenuToShow()) {
          l.onContextMenu = this.onContextMenu;
        } else {
          l.onContextMenu = this.createTwoChains("onContextMenu");
        }
        if (this.isClickToHide() || this.isClickToShow()) {
          l.onClick = this.onClick;
          l.onMouseDown = this.onMouseDown;
          l.onTouchStart = this.onTouchStart;
        } else {
          l.onClick = this.createTwoChains("onClick");
          l.onMouseDown = this.createTwoChains("onMouseDown");
          l.onTouchStart = this.createTwoChains("onTouchStart");
        }
        if (this.isMouseEnterToShow()) {
          l.onMouseEnter = this.onMouseEnter;
          if (u) {
            l.onMouseMove = this.onMouseMove;
          }
        } else {
          l.onMouseEnter = this.createTwoChains("onMouseEnter");
        }
        if (this.isMouseLeaveToHide()) {
          l.onMouseLeave = this.onMouseLeave;
        } else {
          l.onMouseLeave = this.createTwoChains("onMouseLeave");
        }
        if (this.isFocusToShow() || this.isBlurToHide()) {
          l.onFocus = this.onFocus;
          l.onBlur = this.onBlur;
        } else {
          l.onFocus = this.createTwoChains("onFocus");
          l.onBlur = this.createTwoChains("onBlur");
        }
        var p = x(s && s.props && s.props.className, a);
        if (p) {
          l.className = p;
        }
        var d = objectPropertyAssign.assignObject({}, l);
        if (reactRefUtils.isClassComponent(s)) {
          d.ref = reactRefUtils.mergeRefs(this.triggerRef, s.ref);
        }
        var h = reactCoreLibraryReexport.cloneElement(s, d);
        if (t || this.popupRef.current || i) {
          e = reactCoreLibraryReexport.createElement(w, {
            key: "portal",
            getContainer: this.getContainer,
            didUpdate: this.handlePortalUpdate
          }, this.getComponent());
        }
        if (!t && c) {
          e = null;
        }
        return reactCoreLibraryReexport.createElement(G.Provider, {
          value: this.triggerContextValue
        }, h, e);
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function (e, t) {
        var n = e.popupVisible;
        var r = {};
        if (n !== undefined && t.popupVisible !== n) {
          r.popupVisible = n;
          r.prevPopupVisible = t.popupVisible;
        }
        return r;
      }
    }]);
    return n;
  }(reactCoreLibraryReexport.Component)).contextType = G;
  r.defaultProps = {
    prefixCls: "rc-trigger-popup",
    getPopupClassNameFromAlign: function () {
      return "";
    },
    getDocument: function (e) {
      if (e) {
        return e.ownerDocument;
      } else {
        return window.document;
      }
    },
    onPopupVisibleChange: K,
    afterPopupVisibleChange: K,
    onPopupAlign: K,
    popupClassName: "",
    mouseEnterDelay: 0,
    mouseLeaveDelay: 0.1,
    focusDelay: 0,
    blurDelay: 0.15,
    popupStyle: {},
    destroyPopupOnHide: false,
    popupAlign: {},
    defaultPopupVisible: false,
    mask: false,
    maskClosable: true,
    action: [],
    showAction: [],
    hideAction: [],
    autoDestroy: false
  };
  var $ = r;
  require.d(exports, {
    Trigger: function () {
      return $;
    }
  });
}