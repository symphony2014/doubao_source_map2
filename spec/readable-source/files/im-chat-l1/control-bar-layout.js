// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Fv' to 'ControlBarLayout'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-message-node.b65fce36.js
         * chunkId: 44236
         * moduleId: 23865
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var l = classnamesUtils;
  var twoColumnLayoutWithResize = require("two-column-layout-with-resize") /*id: 180797*/;
  var debounceUtilWrapper = require("debounce-util-wrapper") /*id: 213804*/;
  var arrayFindLastIndexUtil = require("array-find-last-index-util") /*id: 832584*/;
  var useLatestRef_1 = require("use-latest-ref_1") /*id: 335903*/;
  let d = e => {
    let t = [];
    let n = [];
    e.forEach(e => {
      if (e.type === "divider") {
        if (n.length > 0) {
          t.push(n);
          n = [];
        }
      } else {
        n.push(e);
      }
    });
    if (n.length > 0) {
      t.push(n);
    }
    return t;
  };
  let u = (e, t, n) => {
    let r = e.findIndex(e => e.some(e => !e.hideText));
    if (r !== -1) {
      e[r].forEach(e => {
        let r = t.indexOf(e);
        e.hideText = true;
        if (!n.current.includes(r)) {
          n.current.push(r);
        }
      });
      return [...t];
    } else {
      return t;
    }
  };
  let f = (e, t) => {
    if (t.current.length > 0) {
      let n = t.current[t.current.length - 1];
      let r = n;
      while (r >= 0 && t.current.includes(r)) {
        r--;
      }
      r++;
      for (let t = r; t <= n; t++) {
        e[t].hideText = false;
      }
      t.current = t.current.filter(e => e < r);
      return [...e];
    }
    return e;
  };
  var controlBarActionListComponent = require("control-bar-action-list-component") /*id: 716645*/;
  var v = {
    container: "container-sFlx0N",
    content: "content-IxWLqJ",
    "bottom-border": "bottom-border-aBF34I",
    bottomBorder: "bottom-border-aBF34I"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let h = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      className: n,
      style: i,
      leftClassName: h,
      centerClassName: m,
      rightClassName: g,
      centerContentClassName: x,
      left: b,
      center: y,
      right: w,
      iconSize: k,
      spacing: S,
      bottomBorder: j = true,
      enableOnboarding: R = true,
      newIcon: C,
      autoCalcLayout: N = false,
      syncSideWidths: T = true,
      ...I
    } = e;
    let E = reactCoreLibraryReexport.useRef(null);
    let A = reactCoreLibraryReexport.useRef(null);
    reactCoreLibraryReexport.useImperativeHandle(t, () => A.current);
    let {
      leftRef: Z,
      rightRef: P,
      leftCalc: F,
      rightCalc: M
    } = function (e, t, n, i) {
      let l = reactCoreLibraryReexport.useRef(null);
      let o = reactCoreLibraryReexport.useRef(null);
      let [p, v] = reactCoreLibraryReexport.useState(e || []);
      let _ = useLatestRef_1.useLatestRef(p);
      let [h, m] = reactCoreLibraryReexport.useState(t || []);
      let g = useLatestRef_1.useLatestRef(h);
      let x = reactCoreLibraryReexport.useRef([]);
      let b = reactCoreLibraryReexport.useRef([]);
      reactCoreLibraryReexport.useEffect(() => {
        v((e == null ? undefined : e.map((e, t) => ({
          ...e,
          hideText: x.current.includes(t)
        }))) || []);
      }, [e]);
      reactCoreLibraryReexport.useEffect(() => {
        m((t == null ? undefined : t.map((e, t) => ({
          ...e,
          hideText: b.current.includes(t)
        }))) || []);
      }, [t]);
      reactCoreLibraryReexport.useEffect(() => {
        let e = debounceUtilWrapper.createDebounce(() => {
          if (!n || !l.current || !o.current) {
            return;
          }
          let e = l.current.getBoundingClientRect();
          let t = o.current.getBoundingClientRect().left - e.right;
          let r = d(g.current);
          if (t < 20) {
            m(u(r, g.current, b));
            if (r.every(e => e.every(e => e.hideText))) {
              let e = arrayFindLastIndexUtil.findLastIndex(_.current, e => !e.hideText && e.type !== "divider");
              if (e > -1) {
                let t = [..._.current];
                t[e].hideText = true;
                x.current = [...x.current, e];
                v(t);
              }
            }
          } else if (t > 180) {
            if (x.current.length > 0) {
              let e = [..._.current];
              e[x.current[x.current.length - 1]].hideText = false;
              x.current = x.current.slice(0, -1);
              v(e);
            } else if (b.current.length > 0) {
              m(f(g.current, b));
            }
          }
        }, 200);
        let t = new ResizeObserver(e);
        if (i.current) {
          t.observe(i.current);
        }
        return () => {
          e.cancel();
          t.disconnect();
        };
      }, [h, p, n, i]);
      return {
        leftRef: l,
        rightRef: o,
        leftCalc: p,
        rightCalc: h,
        leftHideIndexes: x,
        rightHideIndexes: b
      };
    }(b || [], w || [], N, A);
    return reactJsxRuntimeCoreReexport.jsx(twoColumnLayoutWithResize.TwoColumnLayout, {
      ...I,
      syncSideWidths: T,
      "data-onboarding-id": R ? "header_control_bar" : undefined,
      ref: A,
      className: l(v.container, n, {
        [v["bottom-border"]]: j
      }),
      style: i,
      leftClassName: h,
      left: reactJsxRuntimeCoreReexport.jsx("div", {
        className: h,
        ref: Z,
        children: reactJsxRuntimeCoreReexport.jsx(controlBarActionListComponent.ControlBarActionList, {
          className: h,
          iconSize: k,
          spacing: S,
          items: N ? F : b,
          newIcon: C
        })
      }),
      content: reactJsxRuntimeCoreReexport.jsx("div", {
        className: l(v.content, m),
        ref: E,
        children: reactJsxRuntimeCoreReexport.jsx(controlBarActionListComponent.ControlBarActionList, {
          className: x,
          iconSize: k,
          spacing: S,
          items: y,
          newIcon: C
        })
      }),
      right: reactJsxRuntimeCoreReexport.jsx("div", {
        className: l(v.right, g),
        ref: P,
        children: reactJsxRuntimeCoreReexport.jsx(controlBarActionListComponent.ControlBarActionList, {
          iconSize: k,
          spacing: S,
          items: N ? M : w,
          newIcon: C
        })
      })
    });
  });
  require.d(exports, {
    ControlBarLayout: function () {
      return h;
    }
  });
}