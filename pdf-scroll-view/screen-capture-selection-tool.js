// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'z' to 'ScreenCaptureTool'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: new-pdf-scroll-view.beafc32e.js
         * chunkId: 92089
         * moduleId: 901626
         */
module.exports = function (module, exports, require) {
  var r;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var onceFunctionFactory = require("once-function-factory") /*id: 80532*/;
  var numberClampUtil = require("number-clamp-util") /*id: 317214*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var c = classnamesUtils;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  (r = d || {}).leftTop = "lt";
  r.top = "t";
  r.rightTop = "rt";
  r.left = "l";
  r.right = "r";
  r.leftBottom = "lb";
  r.bottom = "b";
  r.rightBottom = "rb";
  var d = r;
  let h = [{
    left: 0,
    top: 0,
    pos: d.leftTop,
    cursor: "nwse-resize"
  }, {
    left: 50,
    top: 0,
    pos: d.top,
    cursor: "ns-resize"
  }, {
    left: 100,
    top: 0,
    pos: d.rightTop,
    cursor: "nesw-resize"
  }, {
    left: 0,
    top: 50,
    pos: d.left,
    cursor: "ew-resize"
  }, {
    left: 100,
    top: 50,
    pos: d.right,
    cursor: "ew-resize"
  }, {
    left: 0,
    top: 100,
    pos: d.leftBottom,
    cursor: "nesw-resize\t"
  }, {
    left: 50,
    top: 100,
    pos: d.bottom,
    cursor: "ns-resize"
  }, {
    left: 100,
    top: 100,
    pos: d.rightBottom,
    cursor: "nwse-resize\t"
  }];
  let p = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      className: n,
      onCaptureAreaUpdate: r = emptyExportFunction.emptyFunction,
      onStart: s = emptyExportFunction.emptyFunction,
      onStop: p = emptyExportFunction.emptyFunction
    } = e;
    let [f, g] = reactCoreLibraryReexport.useState({
      left: -100,
      top: -100,
      width: 0,
      height: 0
    });
    let m = e => {
      g(e);
      r(e);
    };
    let v = reactCoreLibraryReexport.useRef(null);
    let x = reactCoreLibraryReexport.useRef(null);
    let b = reactCoreLibraryReexport.useRef(null);
    reactCoreLibraryReexport.useImperativeHandle(t, () => ({
      container: v,
      cropArea: b
    }));
    reactCoreLibraryReexport.useEffect(() => {
      let e = v.current;
      let t = false;
      let n = false;
      let r = {
        left: -1,
        top: -1
      };
      let a = {
        left: -1,
        top: -1,
        height: 0,
        width: 0
      };
      let l = f;
      let c = "create";
      let u = null;
      let h = onceFunctionFactory.createOnce(s);
      let g = n => {
        n.stopPropagation();
        n.preventDefault();
        a = e.getBoundingClientRect();
        t = true;
        c = n.target.getAttribute("data-mode") || "";
        u = n.target.getAttribute("data-pos");
        r = {
          left: n.clientX - a.left,
          top: n.clientY - a.top
        };
        if (c === "adjust") {
          switch (u) {
            case d.leftTop:
              r = {
                left: l.left + l.width,
                top: l.top + l.height
              };
              break;
            case d.rightTop:
              r = {
                left: l.left,
                top: l.top + l.height
              };
              break;
            case d.leftBottom:
              r = {
                left: l.left + l.width,
                top: l.top
              };
              break;
            case d.rightBottom:
              r = {
                left: l.left,
                top: l.top
              };
              break;
            case d.left:
              r.left = l.left + l.width;
              break;
            case d.right:
              r.left = l.left;
              break;
            case d.top:
              r.top = l.top + l.height;
              break;
            case d.bottom:
              r.top = l.top;
          }
        }
        h = onceFunctionFactory.createOnce(s);
      };
      let w = e => {
        if (!t) {
          return;
        }
        e.stopPropagation();
        e.preventDefault();
        n = true;
        let {
          clientX: i,
          clientY: s
        } = e;
        let p = i - a.left;
        let f = s - a.top;
        if (c === "move") {
          let e = p - r.left;
          let t = f - r.top;
          r.left = p;
          r.top = f;
          l = {
            ...l,
            left: numberClampUtil.clampNumber(l.left + e, 0, a.width - l.width),
            top: numberClampUtil.clampNumber(l.top + t, 0, a.height - l.height)
          };
        } else if (c === "create" || c === "adjust" && [d.leftTop, d.leftBottom, d.rightBottom, d.rightTop].includes(u)) {
          let e = Math.abs(p - r.left);
          let t = Math.abs(f - r.top);
          l = {
            left: Math.min(p, r.left),
            top: Math.min(f, r.top),
            width: e,
            height: t
          };
        } else if (c === "adjust") {
          if ([d.left, d.right].includes(u)) {
            let e = Math.abs(p - r.left);
            let t = Math.min(p, r.left);
            l = {
              ...l,
              left: t,
              width: e
            };
          } else if ([d.bottom, d.top].includes(u)) {
            let e = Math.abs(f - r.top);
            let t = Math.min(f, r.top);
            l = {
              ...l,
              top: t,
              height: e
            };
          }
        }
        h();
        m(l);
      };
      let y = () => {
        if (t && n) {
          var e;
          p((e = b.current) === null || e === undefined ? undefined : e.getBoundingClientRect());
        }
        t = false;
        n = false;
        c = "";
      };
      let S = t => {
        t.stopPropagation();
        let {
          offsetX: n,
          offsetY: r
        } = t;
        let a = t.target === e;
        if (x.current) {
          if (a && (c === "create" || c === "")) {
            var l;
            var i;
            x.current.style.left = `${n + 4}px`;
            x.current.style.top = `${r + 4}px`;
            x.current.style.visibility = "visible";
            x.current.innerHTML = `${(l = t.offsetX) === null || l === undefined ? undefined : l.toLocaleString()}<br/>${(i = t.offsetY) === null || i === undefined ? undefined : i.toLocaleString()}`;
          } else {
            x.current.style.visibility = "hidden";
          }
        }
      };
      let N = () => {
        if (x.current) {
          x.current.style.visibility = "hidden";
        }
      };
      e.addEventListener("pointerdown", g);
      e.addEventListener("pointermove", w);
      e.addEventListener("pointerup", y);
      e.addEventListener("mousemove", S);
      e.addEventListener("mouseout", N);
      window.addEventListener("pointerup", y);
      window.addEventListener("mouseout", N);
      return () => {
        e.removeEventListener("pointerdown", g);
        e.removeEventListener("pointermove", w);
        e.removeEventListener("pointerup", y);
        e.removeEventListener("mousemove", S);
        e.removeEventListener("mouseout", N);
        window.removeEventListener("pointerup", y);
        window.removeEventListener("mouseout", N);
      };
    }, []);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      ref: v,
      className: c("container-auA1oB", n),
      "data-mode": "create",
      "data-testid": "resizable-selection-container",
      onMouseDown: e => e.stopPropagation(),
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        "data-mode": "move",
        className: "frame-h7mYXC",
        style: {
          ...f
        },
        ref: b,
        children: h.map(e => reactJsxRuntimeCoreReexport.jsx("i", {
          "data-mode": "adjust",
          "data-pos": e.pos,
          className: "anchor-bx_bqR",
          style: {
            left: `${e.left}%`,
            top: `${e.top}%`,
            cursor: e.cursor
          }
        }, e.pos + e.cursor))
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        ref: x,
        className: "coordinates-hSFnq2"
      })]
    });
  });
  var selectionHoverToolbar = require("selection-hover-toolbar") /*id: 74626*/;
  var g = {
    container: "container-bAvkBV",
    "float-bar-anchor": "float-bar-anchor-HyhCyb",
    floatBarAnchor: "float-bar-anchor-HyhCyb"
  };
  let m = e => {
    let {
      onScreenCapture: t,
      onClose: n,
      enableAskAIWithImage: r
    } = e;
    let [l, i] = reactCoreLibraryReexport.useState(false);
    let [o, s] = reactCoreLibraryReexport.useState({
      left: -100,
      top: -100,
      width: 0,
      height: 0
    });
    let c = reactCoreLibraryReexport.useRef(null);
    reactCoreLibraryReexport.useEffect(() => {
      document.addEventListener("keydown", d);
      return () => {
        document.removeEventListener("keydown", d);
      };
    }, []);
    let d = e => {
      if (e.key === "Escape") {
        if (n != null) {
          n();
        }
      }
    };
    let h = e => {
      s(e);
    };
    let m = async e => {
      var n;
      let r = (n = c.current) === null || n === undefined ? undefined : n.container.current;
      if (r) {
        await (t == null ? undefined : t({
          x: o.left,
          y: o.top,
          width: o.width,
          height: o.height
        }, r.getBoundingClientRect(), e));
      }
    };
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [reactJsxRuntimeCoreReexport.jsx(p, {
        onCaptureAreaUpdate: e => h(e),
        onStart: () => i(false),
        onStop: () => {
          i(true);
        },
        ref: c
      }), reactJsxRuntimeCoreReexport.jsx(selectionHoverToolbar.SelectionHoverToolbar, {
        visible: l,
        position: "bottom",
        className: g["bar-popover"],
        spacing: 10,
        onClose: n,
        onCopyImage: r ? () => m("copy") : undefined,
        onAskAI: () => m("askAI"),
        onSolveProblem: () => m("solveProblem"),
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: g["float-bar-anchor"],
          style: {
            ...o
          },
          onMouseDown: e => e.stopPropagation()
        })
      })]
    });
  };
  require.d(exports, {
    ScreenCaptureTool: function () {
      return m;
    }
  });
}