// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'useResizeObserver'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 912520
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  function r(e, t, n) {
    if (e[t]) {
      if (e[t][0]) {
        return e[t][0][n];
      } else {
        return e[t][n];
      }
    } else if (t === "contentBoxSize") {
      return e.contentRect[n === "inlineSize" ? "width" : "height"];
    } else {
      return undefined;
    }
  }
  function o(e = {}) {
    var t;
    var n;
    var o;
    var l;
    var a;
    var s;
    var c = e.onResize;
    var d = reactCoreLibraryReexport.useRef(undefined);
    d.current = c;
    var u = e.round || Math.round;
    var p = reactCoreLibraryReexport.useRef();
    var h = reactCoreLibraryReexport.useState({
      width: undefined,
      height: undefined
    });
    var m = h[0];
    var f = h[1];
    var g = reactCoreLibraryReexport.useRef(false);
    reactCoreLibraryReexport.useEffect(function () {
      g.current = false;
      return function () {
        g.current = true;
      };
    }, []);
    var v = reactCoreLibraryReexport.useRef({
      width: undefined,
      height: undefined
    });
    t = reactCoreLibraryReexport.useCallback(function (t) {
      if (!p.current || p.current.box !== e.box || p.current.round !== u) {
        p.current = {
          box: e.box,
          round: u,
          instance: new ResizeObserver(function (t) {
            var n = t[0];
            var i = e.box === "border-box" ? "borderBoxSize" : e.box === "device-pixel-content-box" ? "devicePixelContentBoxSize" : "contentBoxSize";
            var o = r(n, i, "inlineSize");
            var l = r(n, i, "blockSize");
            var a = o ? u(o) : undefined;
            var s = l ? u(l) : undefined;
            if (v.current.width !== a || v.current.height !== s) {
              var c = {
                width: a,
                height: s
              };
              v.current.width = a;
              v.current.height = s;
              if (d.current) {
                d.current(c);
              } else if (!g.current) {
                f(c);
              }
            }
          })
        };
      }
      p.current.instance.observe(t, {
        box: e.box
      });
      return function () {
        if (p.current) {
          p.current.instance.unobserve(t);
        }
      };
    }, [e.box, u]);
    n = e.ref;
    o = reactCoreLibraryReexport.useRef(null);
    (l = reactCoreLibraryReexport.useRef(null)).current = n;
    a = reactCoreLibraryReexport.useRef(null);
    reactCoreLibraryReexport.useEffect(function () {
      s();
    });
    s = reactCoreLibraryReexport.useCallback(function () {
      var e = a.current;
      var n = l.current;
      var i = e || (n ? n instanceof Element ? n : n.current : null);
      if (!o.current || o.current.element !== i || o.current.subscriber !== t) {
        if (o.current && o.current.cleanup) {
          o.current.cleanup();
        }
        o.current = {
          element: i,
          subscriber: t,
          cleanup: i ? t(i) : undefined
        };
      }
    }, [t]);
    reactCoreLibraryReexport.useEffect(function () {
      return function () {
        if (o.current && o.current.cleanup) {
          o.current.cleanup();
          o.current = null;
        }
      };
    }, []);
    var b = reactCoreLibraryReexport.useCallback(function (e) {
      a.current = e;
      s();
    }, [s]);
    return reactCoreLibraryReexport.useMemo(function () {
      return {
        ref: b,
        width: m.width,
        height: m.height
      };
    }, [b, m.width, m.height]);
  }
  require.d(exports, {
    useResizeObserver: function () {
      return o;
    }
  });
}