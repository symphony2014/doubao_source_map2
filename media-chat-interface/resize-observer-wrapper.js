// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D' to 'ResizeObserverWrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: skill-pin-modal.533b7e90.js
         * chunkId: 13221
         * moduleId: 887176
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var resizeObserverPolyfill_2 = require("resize-observer-polyfill_2") /*id: 129887*/;
  var skillPinModalCallback = require("skill-pin-modal-callback") /*id: 381053*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  window.ResizeObserver ||= resizeObserverPolyfill_2.ResizeObserver;
  let a = {
    offsetHeight: 0,
    offsetWidth: 0,
    height: 0,
    width: 0
  };
  let c = e => {
    let {
      children: t,
      onResize: n,
      selector: o,
      directly: c = false,
      box: d
    } = e;
    let u = reactCoreLibraryReexport.useRef(null);
    let h = reactCoreLibraryReexport.useRef(null);
    let p = reactCoreLibraryReexport.useRef(null);
    let m = reactCoreLibraryReexport.useRef(null);
    let f = reactCoreLibraryReexport.useRef(null);
    let g = skillPinModalCallback.useSkillPinCallback(n);
    let b = reactCoreLibraryReexport.useRef();
    let y = e => {
      f.current = e;
      if (c) {
        let {
          width: t,
          height: n
        } = e.getBoundingClientRect();
        let {
          offsetWidth: i,
          offsetHeight: r
        } = e;
        let o = {
          width: t,
          height: n,
          offsetWidth: i,
          offsetHeight: r
        };
        if (g != null) {
          g({
            current: o,
            previous: b.current,
            target: e,
            targetStandBy: h.current
          });
        }
        b.current = o;
      }
      let t = new ResizeObserver(t => {
        let n = t.find(t => t.target === e);
        if (!n) {
          return;
        }
        let {
          offsetWidth: i,
          offsetHeight: r
        } = n.target;
        let {
          contentRect: {
            width: o,
            height: s
          }
        } = n;
        let l = {
          width: o,
          height: s,
          offsetWidth: i,
          offsetHeight: r
        };
        if (g != null) {
          g({
            current: l,
            previous: b.current,
            target: e,
            targetStandBy: h.current
          });
        }
        b.current = l;
      });
      t.observe(e, {
        box: d
      });
      p.current = t;
    };
    let v = (e, t) => {
      let n = new MutationObserver(() => {
        let i = e.querySelector(t);
        if (i) {
          y(i);
          n.disconnect();
        }
      });
      n.observe(e, {
        attributes: false,
        childList: true,
        subtree: true
      });
      m.current = n;
    };
    reactCoreLibraryReexport.useLayoutEffect(() => {
      if (g && u.current) {
        if (isUndefinedCheck.isUndefined(o)) {
          y(u.current);
        } else {
          v(u.current, o);
        }
        return () => {
          var e;
          var t;
          if (f.current) {
            if (g != null) {
              g({
                current: a,
                previous: b.current,
                target: f.current,
                targetStandBy: h.current
              });
            }
          }
          if ((e = p.current) !== null && e !== undefined) {
            e.disconnect();
          }
          if ((t = m.current) !== null && t !== undefined) {
            t.disconnect();
          }
        };
      }
    }, [g]);
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: t(u, h)
    });
  };
  require.d(exports, {
    ResizeObserverWrapper: function () {
      return c;
    }
  });
}