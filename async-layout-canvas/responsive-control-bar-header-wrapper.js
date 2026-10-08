// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'RT' to 'ResponsiveControlBarHeader'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-layout-canvas.ea59bc0c.js
         * chunkId: 78042
         * moduleId: 550014
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var s = classnamesUtils;
  var asyncSkillReceiveHook = require("async-skill-receive-hook") /*id: 463729*/;
  var reactUseChangedRef = require("react-use-changed-ref") /*id: 284850*/;
  var functionInvoker = require("function-invoker") /*id: 144910*/;
  var controlBarLayout = require("control-bar-layout") /*id: 23865*/;
  var arrayIsArrayUtil = require("array-is-array-util") /*id: 447761*/;
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var throttledOrderByUtil = require("throttled-order-by-util") /*id: 363890*/;
  var getOwnKeys = require("get-own-keys") /*id: 362947*/;
  var collectionOrderByUtil_1 = require("collection-order-by-util_1") /*id: 848677*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  let y = e => {
    let t = {};
    let a = e.map(e => {
      let {
        zone: a,
        modifier: i
      } = e;
      if (!(a in t)) {
        t[a] = [];
      }
      if (arrayIsArrayUtil.isArray(i)) {
        t[a].push(...i);
      } else if (isFunctionUtil_1.isFunction(i)) {
        let r = i(t[a]);
        t[a] = r;
        return {
          ...e,
          modifier: r
        };
      }
      return e;
    });
    return throttledOrderByUtil.throttledOrderBy(a, "zone");
  };
  let f = (e, t) => {
    let a = {};
    for (let t of e) {
      let {
        zone: e,
        modifier: i
      } = t;
      if (!(e in a)) {
        a[e] = [];
      }
      a[e].push(...i);
    }
    return throttledOrderByUtil.throttledOrderBy(getOwnKeys.getOwnKeys(a).map(e => Number(e)).filter(e => t === "left" ? e <= -50 : t === "right" ? e >= 50 : t === "center" && e > -50 && e < 50)).map(e => a[e]).filter(e => e.length > 0).flat().filter((e, t, a) => e.type !== "divider" || t !== 0 && t !== a.length - 1 && a[t - 1].type !== "divider");
  };
  let x = (e, t, a) => {
    let r = a;
    let o = false;
    let s = [...e];
    let n = new Map();
    collectionOrderByUtil_1.orderBy(t, e => e.priority, "asc").forEach(e => {
      let t = s.findIndex(t => t.key === e.key);
      let l = s[t];
      if (!l) {
        return;
      }
      let c = () => {
        if (isUndefinedCheck.isUndefined(e.renderSize) && !e.keep) {
          s.splice(t, 1);
        }
      };
      if (r <= 0 || o) {
        c();
        return;
      }
      let d = l.getWidth({
        renderSize: e.renderSize,
        restWidth: r
      });
      n.set(l.key, d);
      let p = [...n.values()].reduce((e, t) => e + t, 0);
      if (a > p) {
        r = a - p;
        l.modifier.forEach(t => {
          if (t.type === "custom" && reactCoreLibraryReexport.isValidElement(t.element)) {
            t.element = reactCoreLibraryReexport.cloneElement(t.element, {
              renderSize: e.renderSize
            });
          }
        });
      } else {
        o = true;
        c();
        return;
      }
    });
    return s;
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let _ = e => {
    let {
      className: t,
      leftClassName: a,
      style: o,
      plugins: p = [],
      bottomBorder: u,
      strategies: m = []
    } = e;
    let g = reactCoreLibraryReexport.useRef(null);
    let [k, h] = reactCoreLibraryReexport.useState(10000);
    let {
      run: _
    } = asyncSkillReceiveHook.useSkillReceive(e => {
      h(e[0].contentRect.width);
    }, {
      wait: 100,
      leading: true,
      trailing: true
    });
    reactCoreLibraryReexport.useEffect(() => {
      if (!g.current) {
        return;
      }
      let e = new ResizeObserver(_);
      e.observe(g.current);
      return () => {
        e.disconnect();
      };
    }, [g]);
    let b = reactUseChangedRef.useChangedRef(p, deepEqualUtil_1.deepEqual);
    let w = reactUseChangedRef.useChangedRef(m, deepEqualUtil_1.deepEqual);
    let S = reactCoreLibraryReexport.useMemo(() => x(y(b), w, k - 40 - 20), [b, w, k]);
    let j = functionInvoker.invoke(() => f(S, "left"));
    let M = functionInvoker.invoke(() => f(S, "right"));
    let R = functionInvoker.invoke(() => f(S, "center"));
    return reactJsxRuntimeCoreReexport.jsx(controlBarLayout.ControlBarLayout, {
      ref: g,
      "data-testid": "doc_header_bar",
      className: s("container-r1jrM5", t),
      leftClassName: a,
      style: o,
      iconSize: "larger-icon",
      spacing: 8,
      bottomBorder: u,
      newIcon: true,
      left: j,
      right: M,
      center: R
    });
  };
  require.d(exports, {
    ResponsiveControlBarHeader: function () {
      return _;
    }
  });
}