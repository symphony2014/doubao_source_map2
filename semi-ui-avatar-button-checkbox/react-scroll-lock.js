// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'BodyScrollLock'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 16352.bcbc6b55.js
         * chunkId: 16352
         * moduleId: 184007
         */
module.exports = function (module, exports, require) {
  var o;
  var typescriptRuntimeHelpers = require("typescript-runtime-helpers") /*id: 4100*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var scrollBarConstants = require("scroll-bar-constants") /*id: 314373*/;
  var useRefSyncHook = require("use-ref-sync-hook") /*id: 205347*/;
  var a = require("sidecar-medium-factory") /*id: 561894*/.createSidecar();
  function c() {}
  var u = reactCoreLibraryReexport.forwardRef(function (e, t) {
    var n = reactCoreLibraryReexport.useRef(null);
    var o = reactCoreLibraryReexport.useState({
      onScrollCapture: c,
      onWheelCapture: c,
      onTouchMoveCapture: c
    });
    var s = o[0];
    var u = o[1];
    var d = e.forwardProps;
    var p = e.children;
    var f = e.className;
    var h = e.removeScrollBar;
    var m = e.enabled;
    var g = e.shards;
    var y = e.sideCar;
    var v = e.noRelative;
    var b = e.noIsolation;
    var E = e.inert;
    var O = e.allowPinchZoom;
    var w = e.as;
    var C = e.gapMode;
    var x = typescriptRuntimeHelpers.objectRest(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]);
    var j = useRefSyncHook.useRefSync([n, t]);
    var S = typescriptRuntimeHelpers.objectAssign(typescriptRuntimeHelpers.objectAssign({}, x), s);
    return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, m && reactCoreLibraryReexport.createElement(y, {
      sideCar: a,
      removeScrollBar: h,
      shards: g,
      noRelative: v,
      noIsolation: b,
      inert: E,
      setCallbacks: u,
      allowPinchZoom: !!O,
      lockRef: n,
      gapMode: C
    }), d ? reactCoreLibraryReexport.cloneElement(reactCoreLibraryReexport.Children.only(p), typescriptRuntimeHelpers.objectAssign(typescriptRuntimeHelpers.objectAssign({}, S), {
      ref: j
    })) : reactCoreLibraryReexport.createElement(w === undefined ? "div" : w, typescriptRuntimeHelpers.objectAssign({}, S, {
      className: f,
      ref: j
    }), p));
  });
  u.defaultProps = {
    enabled: true,
    removeScrollBar: true,
    inert: false
  };
  u.classNames = {
    fullWidth: scrollBarConstants.widthBeforeScroll,
    zeroRight: scrollBarConstants.scrollBarPosition
  };
  function d(e) {
    var t = e.sideCar;
    var n = typescriptRuntimeHelpers.objectRest(e, ["sideCar"]);
    if (!t) {
      throw Error("Sidecar: please provide `sideCar` property to import the right car");
    }
    var o = t.read();
    if (!o) {
      throw Error("Sidecar medium not found");
    }
    return reactCoreLibraryReexport.createElement(o, typescriptRuntimeHelpers.objectAssign({}, n));
  }
  d.isSideCarExport = true;
  var bodyScrollLockManager = require("body-scroll-lock-manager") /*id: 336717*/;
  var reactStyleInjector = require("react-style-injector") /*id: 989764*/;
  var h = false;
  if (typeof window != "undefined") {
    try {
      var m = Object.defineProperty({}, "passive", {
        get: function () {
          h = true;
          return true;
        }
      });
      window.addEventListener("test", m, m);
      window.removeEventListener("test", m, m);
    } catch (e) {
      h = false;
    }
  }
  var g = !!h && {
    passive: false
  };
  function y(e, t) {
    if (!(e instanceof Element)) {
      return false;
    }
    var n = window.getComputedStyle(e);
    return n[t] !== "hidden" && (n.overflowY !== n.overflowX || e.tagName === "TEXTAREA" || n[t] !== "visible");
  }
  function v(e, t) {
    var n = t.ownerDocument;
    var o = t;
    do {
      if (typeof ShadowRoot != "undefined" && o instanceof ShadowRoot) {
        o = o.host;
      }
      if (b(e, o)) {
        var r = E(e, o);
        if (r[1] > r[2]) {
          return true;
        }
      }
      o = o.parentNode;
    } while (o && o !== n.body);
    return false;
  }
  function b(e, t) {
    if (e === "v") {
      return y(t, "overflowY");
    } else {
      return y(t, "overflowX");
    }
  }
  function E(e, t) {
    if (e === "v") {
      return [t.scrollTop, t.scrollHeight, t.clientHeight];
    } else {
      return [t.scrollLeft, t.scrollWidth, t.clientWidth];
    }
  }
  function O(e, t, n, o, r) {
    var i;
    i = window.getComputedStyle(t).direction;
    var s = e === "h" && i === "rtl" ? -1 : 1;
    var l = s * o;
    var a = n.target;
    var c = t.contains(a);
    var u = false;
    var d = l > 0;
    var p = 0;
    var f = 0;
    do {
      if (!a) {
        break;
      }
      var h = E(e, a);
      var m = h[0];
      var g = h[1] - h[2] - s * m;
      if ((m || g) && b(e, a)) {
        p += g;
        f += m;
      }
      var y = a.parentNode;
      a = y && y.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? y.host : y;
    } while (!c && a !== document.body || c && (t.contains(a) || t === a));
    if (d && (r && Math.abs(p) < 1 || !r && l > p)) {
      u = true;
    } else if (!d && (r && Math.abs(f) < 1 || !r && -l > f)) {
      u = true;
    }
    return u;
  }
  function w(e) {
    if ("changedTouches" in e) {
      return [e.changedTouches[0].clientX, e.changedTouches[0].clientY];
    } else {
      return [0, 0];
    }
  }
  function C(e) {
    return [e.deltaX, e.deltaY];
  }
  function x(e) {
    if (e && "current" in e) {
      return e.current;
    } else {
      return e;
    }
  }
  var j = 0;
  var S = [];
  o = function (e) {
    var t = reactCoreLibraryReexport.useRef([]);
    var n = reactCoreLibraryReexport.useRef([0, 0]);
    var o = reactCoreLibraryReexport.useRef();
    var s = reactCoreLibraryReexport.useState(j++)[0];
    var l = reactCoreLibraryReexport.useState(reactStyleInjector.styleInjector)[0];
    var a = reactCoreLibraryReexport.useRef(e);
    reactCoreLibraryReexport.useEffect(function () {
      a.current = e;
    }, [e]);
    reactCoreLibraryReexport.useEffect(function () {
      if (e.inert) {
        document.body.classList.add(`block-interactivity-${s}`);
        var t = typescriptRuntimeHelpers.arraySpread([e.lockRef.current], (e.shards || []).map(x), true).filter(Boolean);
        t.forEach(function (e) {
          return e.classList.add(`allow-interactivity-${s}`);
        });
        return function () {
          document.body.classList.remove(`block-interactivity-${s}`);
          t.forEach(function (e) {
            return e.classList.remove(`allow-interactivity-${s}`);
          });
        };
      }
    }, [e.inert, e.lockRef.current, e.shards]);
    var c = reactCoreLibraryReexport.useCallback(function (e, t) {
      if ("touches" in e && e.touches.length === 2 || e.type === "wheel" && e.ctrlKey) {
        return !a.current.allowPinchZoom;
      }
      var r;
      var i = w(e);
      var s = n.current;
      var l = "deltaX" in e ? e.deltaX : s[0] - i[0];
      var c = "deltaY" in e ? e.deltaY : s[1] - i[1];
      var u = e.target;
      var d = Math.abs(l) > Math.abs(c) ? "h" : "v";
      if ("touches" in e && d === "h" && u.type === "range") {
        return false;
      }
      var p = v(d, u);
      if (!p) {
        return true;
      }
      if (p) {
        r = d;
      } else {
        r = d === "v" ? "h" : "v";
        p = v(d, u);
      }
      if (!p) {
        return false;
      }
      if (!o.current && "changedTouches" in e && (l || c)) {
        o.current = r;
      }
      if (!r) {
        return true;
      }
      var f = o.current || r;
      return O(f, t, e, f === "h" ? l : c, true);
    }, []);
    var u = reactCoreLibraryReexport.useCallback(function (e) {
      if (S.length && S[S.length - 1] === l) {
        var n = "deltaY" in e ? C(e) : w(e);
        var o = t.current.filter(function (t) {
          var o;
          return t.name === e.type && (t.target === e.target || e.target === t.shadowParent) && (o = t.delta)[0] === n[0] && o[1] === n[1];
        })[0];
        if (o && o.should) {
          if (e.cancelable) {
            e.preventDefault();
          }
          return;
        }
        if (!o) {
          var r = (a.current.shards || []).map(x).filter(Boolean).filter(function (t) {
            return t.contains(e.target);
          });
          if ((r.length > 0 ? c(e, r[0]) : !a.current.noIsolation) && e.cancelable) {
            e.preventDefault();
          }
        }
      }
    }, []);
    var d = reactCoreLibraryReexport.useCallback(function (e, n, o, r) {
      var i = {
        name: e,
        delta: n,
        target: o,
        should: r,
        shadowParent: function (e) {
          for (var t = null; e !== null;) {
            if (e instanceof ShadowRoot) {
              t = e.host;
              e = e.host;
            }
            e = e.parentNode;
          }
          return t;
        }(o)
      };
      t.current.push(i);
      setTimeout(function () {
        t.current = t.current.filter(function (e) {
          return e !== i;
        });
      }, 1);
    }, []);
    var h = reactCoreLibraryReexport.useCallback(function (e) {
      n.current = w(e);
      o.current = undefined;
    }, []);
    var m = reactCoreLibraryReexport.useCallback(function (t) {
      d(t.type, C(t), t.target, c(t, e.lockRef.current));
    }, []);
    var y = reactCoreLibraryReexport.useCallback(function (t) {
      d(t.type, w(t), t.target, c(t, e.lockRef.current));
    }, []);
    reactCoreLibraryReexport.useEffect(function () {
      S.push(l);
      e.setCallbacks({
        onScrollCapture: m,
        onWheelCapture: m,
        onTouchMoveCapture: y
      });
      document.addEventListener("wheel", u, g);
      document.addEventListener("touchmove", u, g);
      document.addEventListener("touchstart", h, g);
      return function () {
        S = S.filter(function (e) {
          return e !== l;
        });
        document.removeEventListener("wheel", u, g);
        document.removeEventListener("touchmove", u, g);
        document.removeEventListener("touchstart", h, g);
      };
    }, []);
    var b = e.removeScrollBar;
    var E = e.inert;
    return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, E ? reactCoreLibraryReexport.createElement(l, {
      styles: `
  .block-interactivity-${s} {pointer-events: none;}
  .allow-interactivity-${s} {pointer-events: all;}
`
    }) : null, b ? reactCoreLibraryReexport.createElement(bodyScrollLockManager.BodyScrollLock, {
      noRelative: e.noRelative,
      gapMode: e.gapMode
    }) : null);
  };
  a.useMedium(o);
  var D = d;
  var N = reactCoreLibraryReexport.forwardRef(function (e, t) {
    return reactCoreLibraryReexport.createElement(u, typescriptRuntimeHelpers.objectAssign({}, e, {
      ref: t,
      sideCar: D
    }));
  });
  N.classNames = u.classNames;
  var k = N;
  require.d(exports, {
    BodyScrollLock: function () {
      return k;
    }
  });
}