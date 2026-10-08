// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'ResizeObserver'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11464.7f88d9c4.js
         * chunkId: 11464
         * moduleId: 248893
         */
module.exports = function (module, exports, require) {
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactFragmentCheckUtil = require("react-fragment-check-util") /*id: 996784*/;
  require("dev-warning-util") /*id: 802089*/;
  var objectPropertyAssign = require("object-property-assign") /*id: 526210*/;
  var typeofHelper = require("typeof-helper") /*id: 56852*/;
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  function u(e) {
    return e instanceof HTMLElement || e instanceof SVGElement;
  }
  function h(e) {
    var t;
    var n = e && typeofHelper.getType(e) === "object" && u(e.nativeElement) ? e.nativeElement : u(e) ? e : null;
    return n || (e instanceof reactCoreLibraryReexport.Component ? (t = reactDomEntryWrapper.findDOMNode) === null || t === undefined ? undefined : t.call(reactDomEntryWrapper, e) : null);
  }
  var reactRefUtils_1 = require("react-ref-utils_1") /*id: 761909*/;
  var d = reactCoreLibraryReexport.createContext(null);
  var resizeObserverPolyfill_1 = require("resize-observer-polyfill_1") /*id: 767395*/;
  var v = new Map();
  var g = new resizeObserverPolyfill_1.ResizeObserver(function (e) {
    e.forEach(function (e) {
      var t;
      var n = e.target;
      if ((t = v.get(n)) !== null && t !== undefined) {
        t.forEach(function (e) {
          return e(n);
        });
      }
    });
  });
  var classCallCheckUtil = require("class-call-check-util") /*id: 822439*/;
  var classPropertyUtil = require("class-property-util") /*id: 801584*/;
  var setPrototypeInheritance = require("set-prototype-inheritance") /*id: 805158*/;
  var wrapNativeSuperHelper = require("wrap-native-super-helper") /*id: 694678*/;
  var b = function (e) {
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
  var w = reactCoreLibraryReexport.forwardRef(function (e, t) {
    var n = e.children;
    var i = e.disabled;
    var o = reactCoreLibraryReexport.useRef(null);
    var l = reactCoreLibraryReexport.useRef(null);
    var u = reactCoreLibraryReexport.useContext(d);
    var f = typeof n == "function";
    var p = f ? n(o) : n;
    var y = reactCoreLibraryReexport.useRef({
      width: -1,
      height: -1,
      offsetWidth: -1,
      offsetHeight: -1
    });
    var L = !f && reactCoreLibraryReexport.isValidElement(p) && reactRefUtils_1.hasElementRef(p);
    var m = L ? reactRefUtils_1.getElementRef(p) : null;
    var w = reactRefUtils_1.useMergedRef(m, o);
    function R() {
      return h(o.current) || (o.current && typeofHelper.getType(o.current) === "object" ? h(o.current?.nativeElement) : null) || h(l.current);
    }
    reactCoreLibraryReexport.useImperativeHandle(t, function () {
      return R();
    });
    var x = reactCoreLibraryReexport.useRef(e);
    x.current = e;
    var S = reactCoreLibraryReexport.useCallback(function (e) {
      var t = x.current;
      var n = t.onResize;
      var i = t.data;
      var r = e.getBoundingClientRect();
      var o = r.width;
      var a = r.height;
      var l = e.offsetWidth;
      var h = e.offsetHeight;
      var c = Math.floor(o);
      var d = Math.floor(a);
      if (y.current.width !== c || y.current.height !== d || y.current.offsetWidth !== l || y.current.offsetHeight !== h) {
        var f = {
          width: c,
          height: d,
          offsetWidth: l,
          offsetHeight: h
        };
        y.current = f;
        var v = l === Math.round(o) ? o : l;
        var g = h === Math.round(a) ? a : h;
        var p = objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, f), {}, {
          offsetWidth: v,
          offsetHeight: g
        });
        if (u != null) {
          u(p, e, i);
        }
        if (n) {
          Promise.resolve().then(function () {
            n(p, e);
          });
        }
      }
    }, []);
    reactCoreLibraryReexport.useEffect(function () {
      var e = R();
      if (e && !i) {
        if (!v.has(e)) {
          v.set(e, new Set());
          g.observe(e);
        }
        v.get(e).add(S);
      }
      return function () {
        if (v.has(e)) {
          v.get(e).delete(S);
          if (!v.get(e).size) {
            g.unobserve(e);
            v.delete(e);
          }
        }
      };
    }, [o.current, i]);
    return reactCoreLibraryReexport.createElement(b, {
      ref: l
    }, L ? reactCoreLibraryReexport.cloneElement(p, {
      ref: w
    }) : p);
  });
  var R = reactCoreLibraryReexport.forwardRef(function (e, t) {
    var n = e.children;
    return (typeof n == "function" ? [n] : function e(t, n = {}) {
      var i = [];
      reactCoreLibraryReexport.Children.forEach(t, function (t) {
        if (t != null || n.keepEmpty) {
          if (Array.isArray(t)) {
            i = i.concat(e(t));
          } else if (reactFragmentCheckUtil.isReactFragment(t) && t.props) {
            i = i.concat(e(t.props.children, n));
          } else {
            i.push(t);
          }
        }
      });
      return i;
    }(n)).map(function (n, o) {
      var s = (n == null ? undefined : n.key) || `rc-observer-key-${o}`;
      return reactCoreLibraryReexport.createElement(w, objectAssignUtil.objectAssign({}, e, {
        key: s,
        ref: o === 0 ? t : undefined
      }), n);
    });
  });
  R.Collection = function (e) {
    var t = e.children;
    var n = e.onBatchResize;
    var i = reactCoreLibraryReexport.useRef(0);
    var o = reactCoreLibraryReexport.useRef([]);
    var s = reactCoreLibraryReexport.useContext(d);
    var a = reactCoreLibraryReexport.useCallback(function (e, t, r) {
      i.current += 1;
      var a = i.current;
      o.current.push({
        size: e,
        element: t,
        data: r
      });
      Promise.resolve().then(function () {
        if (a === i.current) {
          if (n != null) {
            n(o.current);
          }
          o.current = [];
        }
      });
      if (s != null) {
        s(e, t, r);
      }
    }, [n, s]);
    return reactCoreLibraryReexport.createElement(d.Provider, {
      value: a
    }, t);
  };
  var x = R;
  require.d(exports, {
    ResizeObserver: function () {
      return x;
    }
  });
}