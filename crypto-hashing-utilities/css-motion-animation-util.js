// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'CSSMotion'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 35713.652e82fe.js
         * chunkId: 35713
         * moduleId: 663888
         */
module.exports = function (module, exports, require) {
  var r;
  var o;
  var i;
  var objectPropertySetter = require("object-property-setter") /*id: 84841*/;
  var objectPropertyAssign = require("object-property-assign") /*id: 526210*/;
  var iterableToArrayUtil_1_1 = require("iterable-to-array-util_1_1") /*id: 975753*/;
  var typeofHelper = require("typeof-helper") /*id: 56852*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var getDomNodeUtil = require("get-dom-node-util") /*id: 285330*/;
  var reactRefUtils = require("react-ref-utils") /*id: 624373*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var h = classnamesUtils;
  var isBrowserEnv_1 = require("is-browser-env_1") /*id: 902231*/;
  function m(e, t) {
    var n = {};
    n[e.toLowerCase()] = t.toLowerCase();
    n[`Webkit${e}`] = `webkit${t}`;
    n[`Moz${e}`] = `moz${t}`;
    n[`ms${e}`] = `MS${t}`;
    n[`O${e}`] = `o${t.toLowerCase()}`;
    return n;
  }
  r = isBrowserEnv_1.isBrowser();
  o = typeof window != "undefined" ? window : {};
  i = {
    animationend: m("Animation", "AnimationEnd"),
    transitionend: m("Transition", "TransitionEnd")
  };
  if (r) {
    if (!("AnimationEvent" in o)) {
      delete i.animationend.animation;
    }
    if (!("TransitionEvent" in o)) {
      delete i.transitionend.transition;
    }
  }
  var g = i;
  var y = {};
  if (isBrowserEnv_1.isBrowser()) {
    y = document.createElement("div").style;
  }
  var w = {};
  function b(e) {
    if (w[e]) {
      return w[e];
    }
    var t = g[e];
    if (t) {
      var n = Object.keys(t);
      var r = n.length;
      var o = 0;
      for (; o < r; o += 1) {
        var i = n[o];
        if (Object.prototype.hasOwnProperty.call(t, i) && i in y) {
          w[e] = t[i];
          return w[e];
        }
      }
    }
    return "";
  }
  var x = b("animationend");
  var E = b("transitionend");
  var k = !!x && !!E;
  var Z = x || "animationend";
  var C = E || "transitionend";
  function T(e, t) {
    if (e) {
      if (typeofHelper.getType(e) === "object") {
        return e[t.replace(/-\w/g, function (e) {
          return e[1].toUpperCase();
        })];
      } else {
        return `${e}-${t}`;
      }
    } else {
      return null;
    }
  }
  var P = "none";
  var M = "appear";
  var O = "enter";
  var S = "leave";
  var L = "none";
  var D = "prepare";
  var R = "start";
  var N = "active";
  var useSafeStateHook = require("use-safe-state-hook") /*id: 154306*/;
  var j = isBrowserEnv_1.isBrowser() ? reactCoreLibraryReexport.useLayoutEffect : reactCoreLibraryReexport.useEffect;
  var frameDelayScheduler = require("frame-delay-scheduler") /*id: 967206*/;
  function H() {
    var e = reactCoreLibraryReexport.useRef(null);
    function t() {
      frameDelayScheduler.scheduleDelayed.cancel(e.current);
    }
    reactCoreLibraryReexport.useEffect(function () {
      return function () {
        t();
      };
    }, []);
    return [function n(r, o = 2) {
      t();
      var i = frameDelayScheduler.scheduleDelayed(function () {
        if (o <= 1) {
          r({
            isCanceled: function () {
              return i !== e.current;
            }
          });
        } else {
          n(r, o - 1);
        }
      });
      e.current = i;
    }, t];
  }
  var V = [D, R, N, "end"];
  function I(e) {
    return e === N || e === "end";
  }
  function W(e, t) {
    var n = useSafeStateHook.useSafeState(L);
    var r = iterableToArrayUtil_1_1.iterableToArray(n, 2);
    var o = r[0];
    var i = r[1];
    var u = H();
    var a = iterableToArrayUtil_1_1.iterableToArray(u, 2);
    var s = a[0];
    var f = a[1];
    j(function () {
      if (o !== L && o !== "end") {
        var e = V.indexOf(o);
        var n = V[e + 1];
        var r = t(o);
        if (r === false) {
          i(n, true);
        } else {
          s(function (e) {
            function t() {
              if (!e.isCanceled()) {
                i(n, true);
              }
            }
            if (r === true) {
              t();
            } else {
              Promise.resolve(r).then(t);
            }
          });
        }
      }
    }, [e, o]);
    reactCoreLibraryReexport.useEffect(function () {
      return function () {
        f();
      };
    }, []);
    return [function () {
      i(D, true);
    }, o];
  }
  function F(e) {
    var t = reactCoreLibraryReexport.useRef();
    var n = reactCoreLibraryReexport.useRef(e);
    n.current = e;
    var r = reactCoreLibraryReexport.useCallback(function (e) {
      n.current(e);
    }, []);
    function o(e) {
      if (e) {
        e.removeEventListener(C, r);
        e.removeEventListener(Z, r);
      }
    }
    reactCoreLibraryReexport.useEffect(function () {
      return function () {
        o(t.current);
      };
    }, []);
    return [function (e) {
      if (t.current && t.current !== e) {
        o(t.current);
      }
      if (e && e !== t.current) {
        e.addEventListener(C, r);
        e.addEventListener(Z, r);
        t.current = e;
      }
    }, o];
  }
  var classCallCheckUtil = require("class-call-check-util") /*id: 822439*/;
  var classPropertyUtil = require("class-property-util") /*id: 801584*/;
  var setPrototypeInheritance = require("set-prototype-inheritance") /*id: 805158*/;
  var wrapNativeSuperHelper = require("wrap-native-super-helper") /*id: 694678*/;
  var U = function (e) {
    setPrototypeInheritance.setInheritance(n, e);
    var t = wrapNativeSuperHelper.wrapNativeSuper(n);
    function n() {
      classCallCheckUtil.classCallCheck(this, n);
      return t.apply(this, arguments);
    }
    classPropertyUtil.defineClassProps(n, [{
      key: "render",
      value: function () {
        return this.props.children;
      }
    }]);
    return n;
  }(reactCoreLibraryReexport.Component);
  var q = function (e) {
    var t = e;
    function n(e) {
      return !!e.motionName && !!t;
    }
    if (typeofHelper.getType(e) === "object") {
      t = e.transitionSupport;
    }
    var r = reactCoreLibraryReexport.forwardRef(function (e, t) {
      var r;
      var o;
      var i;
      var s = e.visible;
      var d = s === undefined || s;
      var v = e.removeOnLeave;
      var m = e.forceRender;
      var g = e.children;
      var y = e.motionName;
      var w = e.leavedClassName;
      var b = e.eventProps;
      var x = n(e);
      var E = reactCoreLibraryReexport.useRef();
      var k = reactCoreLibraryReexport.useRef();
      var Z = function (e, t, n, r) {
        var o = r.motionEnter;
        var i = o === undefined || o;
        var s = r.motionAppear;
        var f = s === undefined || s;
        var p = r.motionLeave;
        var d = p === undefined || p;
        var h = r.motionDeadline;
        var v = r.motionLeaveImmediately;
        var m = r.onAppearPrepare;
        var g = r.onEnterPrepare;
        var y = r.onLeavePrepare;
        var w = r.onAppearStart;
        var b = r.onEnterStart;
        var x = r.onLeaveStart;
        var E = r.onAppearActive;
        var k = r.onEnterActive;
        var Z = r.onLeaveActive;
        var C = r.onAppearEnd;
        var T = r.onEnterEnd;
        var L = r.onLeaveEnd;
        var _ = r.onVisibleChanged;
        var H = useSafeStateHook.useSafeState();
        var V = iterableToArrayUtil_1_1.iterableToArray(H, 2);
        var B = V[0];
        var z = V[1];
        var Y = useSafeStateHook.useSafeState(P);
        var X = iterableToArrayUtil_1_1.iterableToArray(Y, 2);
        var U = X[0];
        var q = X[1];
        var G = useSafeStateHook.useSafeState(null);
        var K = iterableToArrayUtil_1_1.iterableToArray(G, 2);
        var Q = K[0];
        var $ = K[1];
        var J = reactCoreLibraryReexport.useRef(false);
        var ee = reactCoreLibraryReexport.useRef(null);
        var et = reactCoreLibraryReexport.useRef(false);
        function en(e) {
          var t;
          var r = n();
          if (!e || e.deadline || e.target === r) {
            var o = et.current;
            if (U === M && o) {
              t = C == null ? undefined : C(r, e);
            } else if (U === O && o) {
              t = T == null ? undefined : T(r, e);
            } else if (U === S && o) {
              t = L == null ? undefined : L(r, e);
            }
            if (U !== P && o && t !== false) {
              q(P, true);
              $(null, true);
            }
          }
        }
        var er = F(en);
        var eo = iterableToArrayUtil_1_1.iterableToArray(er, 1)[0];
        var ei = reactCoreLibraryReexport.useMemo(function () {
          var e;
          var t;
          var n;
          switch (U) {
            case M:
              e = {};
              objectPropertySetter.setObjectProperty(e, D, m);
              objectPropertySetter.setObjectProperty(e, R, w);
              objectPropertySetter.setObjectProperty(e, N, E);
              return e;
            case O:
              t = {};
              objectPropertySetter.setObjectProperty(t, D, g);
              objectPropertySetter.setObjectProperty(t, R, b);
              objectPropertySetter.setObjectProperty(t, N, k);
              return t;
            case S:
              n = {};
              objectPropertySetter.setObjectProperty(n, D, y);
              objectPropertySetter.setObjectProperty(n, R, x);
              objectPropertySetter.setObjectProperty(n, N, Z);
              return n;
            default:
              return {};
          }
        }, [U]);
        var eu = W(U, function (e) {
          if (e === D) {
            var t;
            var r = ei[D];
            return !!r && r(n());
          }
          if (es in ei) {
            $(((t = ei[es]) === null || t === undefined ? undefined : t.call(ei, n(), null)) || null);
          }
          if (es === N) {
            eo(n());
            if (h > 0) {
              clearTimeout(ee.current);
              ee.current = setTimeout(function () {
                en({
                  deadline: true
                });
              }, h);
            }
          }
          return true;
        });
        var ea = iterableToArrayUtil_1_1.iterableToArray(eu, 2);
        var ec = ea[0];
        var es = ea[1];
        var el = I(es);
        et.current = el;
        j(function () {
          z(t);
          var n;
          var r = J.current;
          J.current = true;
          if (e) {
            if (!r && t && f) {
              n = M;
            }
            if (r && t && i) {
              n = O;
            }
            if (r && !t && d || !r && v && !t && d) {
              n = S;
            }
            if (n) {
              q(n);
              ec();
            }
          }
        }, [t]);
        reactCoreLibraryReexport.useEffect(function () {
          if (U === M && !f || U === O && !i || U === S && !d) {
            q(P);
          }
        }, [f, i, d]);
        reactCoreLibraryReexport.useEffect(function () {
          return function () {
            J.current = false;
            clearTimeout(ee.current);
          };
        }, []);
        reactCoreLibraryReexport.useEffect(function () {
          if (B !== undefined && U === P) {
            if (_ != null) {
              _(B);
            }
          }
        }, [B, U]);
        var ef = Q;
        if (ei[D] && es === R) {
          ef = objectPropertyAssign.assignObject({
            transition: "none"
          }, ef);
        }
        return [U, es, ef, B ?? t];
      }(x, d, function () {
        try {
          if (E.current instanceof HTMLElement) {
            return E.current;
          } else {
            return getDomNodeUtil.getDOMNode(k.current);
          }
        } catch (e) {
          return null;
        }
      }, e);
      var C = iterableToArrayUtil_1_1.iterableToArray(Z, 4);
      var L = C[0];
      var _ = C[1];
      var H = C[2];
      var V = C[3];
      var B = reactCoreLibraryReexport.useRef(V);
      if (V) {
        B.current = true;
      }
      var z = reactCoreLibraryReexport.useCallback(function (e) {
        E.current = e;
        reactRefUtils.assignRef(t, e);
      }, []);
      var Y = objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, b), {}, {
        visible: d
      });
      if (g) {
        if (L !== P && n(e)) {
          if (_ === D) {
            i = "prepare";
          } else if (I(_)) {
            i = "active";
          } else if (_ === R) {
            i = "start";
          }
          r = g(objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, Y), {}, {
            className: h(T(y, L), (o = {}, objectPropertySetter.setObjectProperty(o, T(y, `${L}-${i}`), i), objectPropertySetter.setObjectProperty(o, y, typeof y == "string"), o)),
            style: H
          }), z);
        } else {
          r = V ? g(objectPropertyAssign.assignObject({}, Y), z) : v !== undefined && !v && B.current ? g(objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, Y), {}, {
            className: w
          }), z) : m ? g(objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, Y), {}, {
            style: {
              display: "none"
            }
          }), z) : null;
        }
      } else {
        r = null;
      }
      return reactCoreLibraryReexport.createElement(U, {
        ref: k
      }, r);
    });
    r.displayName = "CSSMotion";
    return r;
  }(k);
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var Q = "keep";
  var $ = "remove";
  var J = "removed";
  function ee(e) {
    var t;
    t = e && typeofHelper.getType(e) === "object" && "key" in e ? e : {
      key: e
    };
    return objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, t), {}, {
      key: String(t.key)
    });
  }
  function et(e = []) {
    return e.map(ee);
  }
  var en = ["component", "children", "onVisibleChanged"];
  var er = ["status"];
  var eo = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
  (function (e, t = q) {
    (function (e) {
      setPrototypeInheritance.setInheritance(r, e);
      var n = wrapNativeSuperHelper.wrapNativeSuper(r);
      function r() {
        var e;
        classCallCheckUtil.classCallCheck(this, r);
        var t = arguments.length;
        var o = Array(t);
        var i = 0;
        for (; i < t; i++) {
          o[i] = arguments[i];
        }
        (e = n.call.apply(n, [this].concat(o))).state = {
          keyEntities: []
        };
        e.removeKey = function (t) {
          e.setState(function (e) {
            return {
              keyEntities: e.keyEntities.map(function (e) {
                if (e.key !== t) {
                  return e;
                } else {
                  return objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, e), {}, {
                    status: J
                  });
                }
              })
            };
          });
        };
        return e;
      }
      classPropertyUtil.defineClassProps(r, [{
        key: "render",
        value: function () {
          var e = this;
          var n = this.state.keyEntities;
          var r = this.props;
          var o = r.component;
          var i = r.children;
          var u = r.onVisibleChanged;
          var a = objectOmitHelper_1.omitWithSymbols(r, en);
          var c = o || reactCoreLibraryReexport.Fragment;
          var s = {};
          eo.forEach(function (e) {
            s[e] = a[e];
            delete a[e];
          });
          delete a.keys;
          return reactCoreLibraryReexport.createElement(c, a, n.map(function (n) {
            var r = n.status;
            var o = objectOmitHelper_1.omitWithSymbols(n, er);
            return reactCoreLibraryReexport.createElement(t, objectAssignUtil.objectAssign({}, s, {
              key: o.key,
              visible: r === "add" || r === Q,
              eventProps: o,
              onVisibleChanged: function (t) {
                if (u != null) {
                  u(t, {
                    key: o.key
                  });
                }
                if (!t) {
                  e.removeKey(o.key);
                }
              }
            }), i);
          }));
        }
      }], [{
        key: "getDerivedStateFromProps",
        value: function (e, t) {
          var n = e.keys;
          var r = t.keyEntities;
          return {
            keyEntities: function (e = [], t = []) {
              var n = [];
              var r = 0;
              var o = t.length;
              var i = et(e);
              var u = et(t);
              i.forEach(function (e) {
                var t = false;
                var i = r;
                for (; i < o; i += 1) {
                  var c = u[i];
                  if (c.key === e.key) {
                    if (r < i) {
                      n = n.concat(u.slice(r, i).map(function (e) {
                        return objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, e), {}, {
                          status: "add"
                        });
                      }));
                      r = i;
                    }
                    n.push(objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, c), {}, {
                      status: Q
                    }));
                    r += 1;
                    t = true;
                    break;
                  }
                }
                if (!t) {
                  n.push(objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, e), {}, {
                    status: $
                  }));
                }
              });
              if (r < o) {
                n = n.concat(u.slice(r).map(function (e) {
                  return objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, e), {}, {
                    status: "add"
                  });
                }));
              }
              var c = {};
              n.forEach(function (e) {
                var t = e.key;
                c[t] = (c[t] || 0) + 1;
              });
              Object.keys(c).filter(function (e) {
                return c[e] > 1;
              }).forEach(function (e) {
                (n = n.filter(function (t) {
                  var n = t.key;
                  var r = t.status;
                  return n !== e || r !== $;
                })).forEach(function (t) {
                  if (t.key === e) {
                    t.status = Q;
                  }
                });
              });
              return n;
            }(r, et(n)).filter(function (e) {
              var t = r.find(function (t) {
                var n = t.key;
                return e.key === n;
              });
              return !t || t.status !== J || e.status !== $;
            })
          };
        }
      }]);
      return r;
    })(reactCoreLibraryReexport.Component).defaultProps = {
      component: "div"
    };
  })(k);
  var ei = q;
  require.d(exports, {
    CSSMotion: function () {
      return ei;
    }
  });
}