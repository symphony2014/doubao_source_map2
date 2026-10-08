// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'v' to 'useEventListener'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: canvas-doc-panel.03616ed7.js
         * chunkId: 16287
         * moduleId: 55281
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactUseStableRef = require("react-use-stable-ref") /*id: 842231*/;
  let a = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
  let o = () => true;
  let s = () => false;
  var isBrowserEnv_2 = require("is-browser-env_2") /*id: 235295*/;
  let u = e => typeof e == "function" ? e : typeof e == "string" ? t => t.key === e : e ? o : s;
  let c = isBrowserEnv_2.isBrowser ? window : null;
  function d(e, t, n, o = {}) {
    let {
      event: s = "keydown",
      target: l = c,
      eventOptions: d
    } = o;
    let f = reactUseStableRef.useStableRef(t);
    (function (e) {
      var t = arguments.length;
      var n = Array(t > 1 ? t - 1 : 0);
      var o = 1;
      for (; o < t; o++) {
        n[o - 1] = arguments[o];
      }
      let s = function (e = false) {
        let t = reactCoreLibraryReexport.useRef(e);
        let n = reactCoreLibraryReexport.useCallback(() => t.current, []);
        reactCoreLibraryReexport.useEffect(() => {
          t.current = true;
          return () => {
            t.current = false;
          };
        }, []);
        return n;
      }();
      let l = reactUseStableRef.useStableRef(n[1]);
      let u = reactCoreLibraryReexport.useMemo(() => function () {
        var e = arguments.length;
        var t = Array(e);
        var n = 0;
        for (; n < e; n++) {
          t[n] = arguments[n];
        }
        if (s()) {
          if (typeof l.current == "function") {
            l.current.apply(this, t);
          } else if (typeof l.current.handleEvent == "function") {
            l.current.handleEvent.apply(this, t);
          }
        }
      }, []);
      reactCoreLibraryReexport.useEffect(() => {
        let t = e && a(e, "current") ? e.current : e;
        if (!t) {
          return;
        }
        let r = n.slice(2);
        (function (e) {
          var t;
          var n = arguments.length;
          var r = Array(n > 1 ? n - 1 : 0);
          var i = 1;
          for (; i < n; i++) {
            r[i - 1] = arguments[i];
          }
          if (e != null && (t = e.addEventListener) !== null && t !== undefined) {
            t.call(e, ...r);
          }
        })(t, n[0], u, ...r);
        return () => {
          (function (e) {
            var t;
            var n = arguments.length;
            var r = Array(n > 1 ? n - 1 : 0);
            var i = 1;
            for (; i < n; i++) {
              r[i - 1] = arguments[i];
            }
            if (e != null && (t = e.removeEventListener) !== null && t !== undefined) {
              t.call(e, ...r);
            }
          })(t, n[0], u, ...r);
        };
      }, [e, n[0]]);
    })(l, s, reactCoreLibraryReexport.useMemo(() => {
      let t = u(e);
      return function (e) {
        if (t(e)) {
          f.current.call(this, e);
        }
      };
    }, n), d);
  }
  require.d(exports, {
    useEventListener: function () {
      return d;
    }
  });
}