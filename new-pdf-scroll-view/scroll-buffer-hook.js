// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'q' to 'useScrollBuffer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: new-pdf-scroll-view.beafc32e.js
         * chunkId: 92089
         * moduleId: 746813
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var dataProcessor = require("data-processor") /*id: 395538*/;
  var throttledOrderByUtil = require("throttled-order-by-util") /*id: 363890*/;
  let s = (e, t, n) => Math.max(Math.min(e, n), t);
  let c = e => {
    let {
      maxBuffer: t,
      minBuffer: n,
      length: r,
      inViewIndexes: l,
      currentRange: i
    } = e;
    if (!l.filter(e => e >= 0 && e < r).length) {
      return;
    }
    let o = Math.min(...l);
    let c = Math.max(...l);
    if (isUndefinedCheck.isUndefined(i)) {
      return [s(o - t, 0, r), s(c + t, 0, r)];
    }
    let [u, d] = i;
    if (d - c < n) {
      d = s(c + t, 0, r);
    }
    if (d - c > t) {
      d = s(c + n, 0, r);
    }
    if (o - u < n) {
      u = s(o - t, 0, r);
    }
    if (o - u > t) {
      u = s(o - n, 0, r);
    }
    return [u, d];
  };
  let u = e => {
    let {
      maxBuffer: t = 30,
      minBuffer: n = 20,
      translateMaxBuffer: a = 2,
      translateMinBuffer: s = 1,
      allKeys: u
    } = e;
    let d = reactCoreLibraryReexport.useRef([]);
    let [h, p] = reactCoreLibraryReexport.useState();
    let [f, g] = reactCoreLibraryReexport.useState();
    let m = () => {
      if (!d.current.length) {
        return;
      }
      let e = c({
        maxBuffer: t,
        minBuffer: n,
        length: u.length,
        inViewIndexes: d.current.map(e => u.indexOf(e)),
        currentRange: h
      });
      if (!deepEqualUtil_1.deepEqual(e, h)) {
        p(e);
      }
      let r = c({
        maxBuffer: a,
        minBuffer: s,
        length: u.length,
        inViewIndexes: d.current.map(e => u.indexOf(e)),
        currentRange: f
      });
      if (!deepEqualUtil_1.deepEqual(r, f)) {
        g(r);
      }
    };
    return {
      onEnter: e => {
        d.current = dataProcessor.processData(throttledOrderByUtil.throttledOrderBy([...d.current, e], e => u.indexOf(e)));
        m();
      },
      onLeave: e => {
        d.current = d.current.filter(t => t !== e);
        m();
      },
      renderKeys: h ? u.slice(...h) : [],
      translateKeys: f ? u.slice(...f) : []
    };
  };
  require.d(exports, {
    useScrollBuffer: function () {
      return u;
    }
  });
}