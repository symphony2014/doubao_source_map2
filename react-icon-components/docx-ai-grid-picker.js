// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'GridDimensionPicker'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29028.eed859d0.js
         * chunkId: 29028
         * moduleId: 832681
         */
module.exports = function (module, exports, require) {
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var n = classnamesUtils;
  var debounceUtilWrapper = require("debounce-util-wrapper") /*id: 213804*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docxAiMenuConstants = require("docx-ai-menu-constants") /*id: 255694*/;
  var styledComponentsCore = require("styled-components-core") /*id: 842965*/;
  let u = styledComponentsCore.default.div`
  color: var(--text-title);
  background-color: var(--bg-float);
  -webkit-box-shadow: 0 6px 24px 0 rgb(31 35 41 / 10%);
  box-shadow: 0 6px 24px 0 rgb(31 35 41 / 10%);
  position: relative;
  border-radius: 6px;
  border: 1px solid var(--line-border-card);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  min-width: 20px;
  min-height: 20px;
  max-width: 314px;
`;
  let p = styledComponentsCore.default.div`
  line-height: 20px;
  margin: 12px 0;
  font-size: 12px;
  padding: 0 12px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  align-items: center;
  color: var(--text-caption);
`;
  let h = styledComponentsCore.default.span`
  color: var(--text-title);
  margin-left: 8px;
  flex: 0 0 36px;
  opacity: ${e => +!!e.visible};
`;
  styledComponentsCore.default.div`
  margin: 0px 12px 12px 12px;
  width: 288px;
  height: 288px;
  border-radius: 2px;
  border: 1px solid var(--line-border-card);
  overflow: hidden;
`;
  let m = styledComponentsCore.default.ul`
  display: flex;
  user-select: none;
  cursor: pointer;
  height: ${e => {
    let {
      height: r
    } = e;
    return `${r || 24}px`;
  }};
  margin-top: 6px;
  overflow: hidden;
  padding: 0;
  font-size: 0;
  &:first-of-type {
    margin-top: 12px;
  }
  &:last-of-type {
    margin-bottom: 12px;
  }
`;
  let f = styledComponentsCore.default.li`
  display: inline-block;
  list-style: none;
  flex: 1;
  width: ${24}px;
  height: ${e => {
    let {
      height: r
    } = e;
    return `${r || 24}px`;
  }};
  margin-right: 6px;
  background-color: var(--bg-base);
  border: 2px solid var(--N200);
  &:first-of-type {
    margin-left: 12px;
  }
  &:last-of-type {
    margin-right: 12px;
  }
  &.disabled {
    border: 2px solid var(--primary-fill-solid-02);
    background-color: var(--primary-fill-solid-02);
    cursor: not-allowed;
  }
  &.active {
    border: 2px solid var(--primary-content-loading);
    background-color: var(--primary-content-loading);
  }
`;
  let v = styledComponentsCore.default.div`
  margin: 0 12px 12px;
  border-radius: 2px;
  border: 1px solid var(--line-border-card);
  overflow: hidden;
  cursor: pointer;
  touch-action: none;
`;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function g(e, r, o) {
    var l;
    if ((r = typeof (l = function (e, r) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var o = e[Symbol.toPrimitive];
      if (o !== undefined) {
        var l = o.call(e, r || "default");
        if (typeof l != "object") {
          return l;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (r === "string" ? String : Number)(e);
    }(r, "string")) == "symbol" ? l : l + "") in e) {
      Object.defineProperty(e, r, {
        value: o,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[r] = o;
    }
    return e;
  }
  class b extends reactCoreLibraryReexport.Component {
    get boxItemHeight() {
      if (this.props.rowSize === 1) {
        return 80;
      } else {
        return 24;
      }
    }
    get disabled() {
      let {
        rowCount: e,
        colCount: r
      } = this.state;
      let {
        defaultRowCount: o = 0,
        defaultColCount: l = 0
      } = this.props;
      return e <= o && r <= l;
    }
    componentDidMount() {
      this.props.setMenuRef(this);
    }
    componentWillUnmount() {
      this.props.setMenuRef(null);
    }
    handleKeyDown(e) {
      if (!e.shiftKey && !e.ctrlKey && !e.metaKey && !e.altKey) {
        e.stopPropagation();
        e.preventDefault();
        if (e.keyCode === docxAiMenuConstants.keyCodes.LEFT && this.props.onSelfClose) {
          this.props.onSelfClose();
        }
      }
    }
    render() {
      let {
        rowSize: e = 9,
        colSize: r = 9,
        defaultRowCount: o = 0,
        defaultColCount: l = 0,
        getContentText: a
      } = this.props;
      let {
        rowCount: i,
        colCount: c
      } = this.state;
      let {
        boxItemHeight: s,
        disabled: d
      } = this;
      let g = [];
      let b = a ? a(c, i) : `${c} x ${i}`;
      for (let a = 0; a < e; a++) {
        let e = Array(r);
        g[a] = e;
        for (let u = 0; u < r; u++) {
          let r = a + 1;
          let p = u + 1;
          e[u] = reactJsxRuntimeCoreReexport.jsx(f, {
            "data-currentIndex": `${r}-${p}`,
            className: n({
              disabled: r <= o && p <= l,
              active: !d && r <= i && p <= c
            }),
            height: s,
            onPointerDown: () => this.calcInsertHighlightRect(r, p),
            onMouseEnter: () => this.calcInsertHighlightRect(r, p)
          }, a + u);
        }
      }
      return reactJsxRuntimeCoreReexport.jsxs(u, {
        children: [reactJsxRuntimeCoreReexport.jsxs(p, {
          children: [reactJsxRuntimeCoreReexport.jsx("span", {
            children: this.props.title
          }), reactJsxRuntimeCoreReexport.jsx(h, {
            className: "sheetbox-hd-content",
            visible: !d,
            children: b
          })]
        }), reactJsxRuntimeCoreReexport.jsx(v, {
          children: reactJsxRuntimeCoreReexport.jsx("div", {
            onMouseLeave: () => this.calcInsertHighlightRect(0, 0),
            onClick: this.handleClick,
            onTouchEnd: this.handleTouchToClick,
            onTouchMove: this.handleBoxTouchMove,
            children: g.map((e, r) => reactJsxRuntimeCoreReexport.jsx(m, {
              height: s,
              children: e
            }, r))
          })
        })]
      });
    }
    constructor(e) {
      super(e);
      g(this, "handleClick", () => {
        var e;
        var r;
        var o;
        var l;
        let {
          rowCount: n,
          colCount: a
        } = this.state;
        if (!this.disabled) {
          if ((e = (r = this.props).onClick) !== null && e !== undefined) {
            e.call(r);
          }
          this.props.onInsert(n, a);
          if ((o = (l = this.props).onClose) !== null && o !== undefined) {
            o.call(l);
          }
        }
      });
      g(this, "handleTouchToClick", e => {
        if (browserEnvironmentDetectionUtils.browserDetector.isIPad) {
          e.persist();
          e.nativeEvent.preventDefault();
          setTimeout(() => {
            var e;
            if ((e = this.handleClick) === null || e === undefined) {
              return undefined;
            } else {
              return e.call(this);
            }
          });
        } else {
          var r;
          if ((r = this.handleClick) !== null && r !== undefined) {
            r.call(this);
          }
        }
      });
      g(this, "handleBoxTouchMove", debounceUtilWrapper.createDebounce(e => {
        let r = e.touches[0];
        let o = document.elementFromPoint(r.clientX, r.clientY);
        let l = o == null ? undefined : o.getAttribute("data-currentIndex");
        if (l) {
          let [e, r] = l.split("-");
          this.calcInsertHighlightRect(Number(e), Number(r));
        }
      }, 200));
      g(this, "calcInsertHighlightRect", (e, r) => {
        this.setState({
          rowCount: e,
          colCount: r
        });
      });
      this.state = {
        rowCount: 0,
        colCount: 0
      };
    }
  }
  require.d(exports, {
    GridDimensionPicker: function () {
      return b;
    }
  });
}