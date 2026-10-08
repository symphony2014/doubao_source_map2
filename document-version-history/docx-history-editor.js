// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'V' to 'HistoryEditor'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24105.f3de81f0.js
         * chunkId: 24105
         * moduleId: 136181
         */
module.exports = function (module, exports, require) {
  var o;
  var n;
  var l;
  var s;
  var a;
  var c;
  var d;
  var u;
  var h;
  var f;
  var g;
  var m;
  var p;
  var y;
  var b;
  var v;
  var _;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var x = classnamesUtils;
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var reduxStoreInitializer = require("redux-store-initializer") /*id: 75100*/;
  var warningLightColorfulIcon = require("warning-light-colorful-icon") /*id: 665192*/;
  var docxBlockErrorBoundary = require("docx-block-error-boundary") /*id: 649744*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  class T extends docxBlockErrorBoundary.BlockErrorBoundary {
    render() {
      if (this.props.record.snapshot._error) {
        return reactJsxRuntimeCoreReexport.jsxs("div", {
          className: "history-error-boundary-tip",
          children: [reactJsxRuntimeCoreReexport.jsx(warningLightColorfulIcon.WarningLightIcon, {}), reactJsxRuntimeCoreReexport.jsx("span", {
            className: "history-error-boundary-tip-text",
            children: t("CreationDoc_DocX_UnableToLoadName_Toast")
          })]
        });
      } else {
        return super.render();
      }
    }
  }
  var docBlockConstants_1 = require("doc-block-constants_1") /*id: 329056*/;
  var docxEditorEventConstantsAndManager_1 = require("docx-editor-event-constants-and-manager_1") /*id: 851701*/;
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  let P = (e, r, i) => {
    let o = (e, r) => {
      let i = e.getLayoutInfo(r);
      if (i) {
        return i.top;
      } else {
        return null;
      }
    };
    let n = o(e, r);
    let l = o(e, i);
    return !!n && !!l && !!(n > l);
  };
  var docxEventCollectorWrapper = require("docx-event-collector-wrapper") /*id: 954913*/;
  var renderEventConstants = require("render-event-constants") /*id: 189091*/;
  function B(e) {
    let {
      className: r,
      title: i,
      style: o,
      focus: n,
      hover: l,
      focusFirst: s,
      position: a
    } = e;
    let c = reactCoreLibraryReexport.useRef(null);
    let [d, u] = reactCoreLibraryReexport.useState(false);
    let [h, f] = reactCoreLibraryReexport.useState(null);
    let g = l || n;
    reactCoreLibraryReexport.useEffect(() => {
      if (g && c.current) {
        let e = c.current;
        let r = e.parentElement;
        let i = e.getBoundingClientRect();
        let o = r.getBoundingClientRect();
        if (i.right > o.right) {
          f(i.right - o.right);
        }
        u(true);
      } else if (!g) {
        u(false);
      }
    }, [g]);
    let m = {
      ...(o || {})
    };
    if (m.left && h !== null) {
      m.left = m.left - h;
    }
    return reactJsxRuntimeCoreReexport.jsx("span", {
      className: x("history-author-popover", r, a, {
        hover: l,
        focus: n,
        "focus-first": s,
        ready: d
      }),
      style: m,
      ref: c,
      children: i
    });
  }
  function H(e) {
    var r;
    var i;
    var o;
    var n;
    var l;
    var s;
    let {
      title: a,
      style: c,
      scroller: d,
      position: u = ["top", "left"],
      popoverClassName: h,
      blockManager: f,
      blockId: g,
      ...m
    } = e;
    let p = 0;
    let y = reactCoreLibraryReexport.useCallback(() => {
      let e = document.createElement("div");
      e.classList.add("history-author-popover-container");
      return e;
    }, []);
    let [b] = reactCoreLibraryReexport.useState(y());
    let v = reactCoreLibraryReexport.useRef(null);
    let [_, C] = reactCoreLibraryReexport.useState();
    let [I, E] = reactCoreLibraryReexport.useState();
    let [S, O] = reactCoreLibraryReexport.useState();
    let [, T] = reactCoreLibraryReexport.useState(p);
    let R = reactCoreLibraryReexport.useMemo(() => debounceUtil_1_1.debounce(e => {
      C(e);
      if (e) {
        docxEventCollectorWrapper.wrapEventCollector("ccm_docs_history_page_click", {
          click: "click_hover_change_detail",
          target: "none"
        });
      }
    }, 10), []);
    reactCoreLibraryReexport.useEffect(() => () => R.cancel(), [R]);
    let H = reactCoreLibraryReexport.useCallback(e => {
      var r;
      var i;
      let o = e.target;
      if (((r = o.closest) === null || r === undefined ? undefined : r.call(o, ".history-diff-text-highlight")) || ((i = o.closest) === null || i === undefined ? undefined : i.call(o, ".history-author-popover-wrapper")) !== v.current) {
        R(false);
        return;
      }
      e.stopPropagation();
      R(true);
    }, [R]);
    let F = reactCoreLibraryReexport.useCallback(e => {
      if (!e.target.classList.contains("history-diff-text-highlight")) {
        e.stopPropagation();
        R(false);
      }
    }, [R]);
    let Z = e => {
      let {
        layoutRecalculatedNodes: r
      } = e;
      if (f && g) {
        for (let e = 0; e < r.length; e++) {
          if (P(f.layoutManager, g, r[e])) {
            T(++p);
            return;
          }
        }
      }
    };
    r = b;
    i = d;
    reactCoreLibraryReexport.useEffect(() => {
      let e = i || document.body;
      e.appendChild(r);
      return () => {
        e.removeChild(r);
      };
    }, [r, i]);
    (function (e, r, i) {
      let o = reactCoreLibraryReexport.useCallback(o => {
        let {
          changeId: n,
          isFirstDiff: l
        } = o;
        if (e["data-history-change-id"] === n) {
          r(true);
          i(l);
        }
      }, [e]);
      let n = reactCoreLibraryReexport.useCallback(o => {
        let {
          changeId: n
        } = o;
        if (e["data-history-change-id"] === n) {
          r(false);
          i(false);
        }
      }, [e]);
      reactCoreLibraryReexport.useEffect(() => {
        docxEditorEventConstantsAndManager_1.loadingEventEmitter.on(docxEditorEventConstantsAndManager_1.focusEventConstants.FOCUS, o);
        docxEditorEventConstantsAndManager_1.loadingEventEmitter.on(docxEditorEventConstantsAndManager_1.focusEventConstants.UNFOCUS, n);
        return () => {
          docxEditorEventConstantsAndManager_1.loadingEventEmitter.off(docxEditorEventConstantsAndManager_1.focusEventConstants.FOCUS, o);
          docxEditorEventConstantsAndManager_1.loadingEventEmitter.off(docxEditorEventConstantsAndManager_1.focusEventConstants.UNFOCUS, n);
        };
      }, [o, n]);
    })(e, E, O);
    let {
      offsetLeft: U,
      offsetRight: V,
      offsetTop: Y,
      offsetBottom: G,
      maxWidth: W
    } = function (e, r, i) {
      let o;
      let n;
      let l;
      let s;
      let a;
      if (e) {
        let c;
        let d = r.getBoundingClientRect();
        if (i.includes("top")) {
          c = e.children[0].getBoundingClientRect();
        } else {
          let {
            length: r
          } = e.children;
          c = e.children[r - 1].getBoundingClientRect();
        }
        if (i.includes("left")) {
          o = c.left - d.left;
          a = d.width - o;
        } else {
          n = d.right - c.right;
          a = d.width - n;
        }
        if (i.includes("top")) {
          l = c.top - d.top;
        } else {
          s = d.bottom - c.bottom;
        }
      }
      return {
        offsetLeft: o,
        offsetRight: n,
        offsetTop: l,
        offsetBottom: s,
        maxWidth: a
      };
    }(v.current, b, u);
    o = f;
    n = _;
    l = g;
    s = R;
    reactCoreLibraryReexport.useEffect(() => {
      if (o && l && n) {
        let e = () => {
          s(false);
        };
        o.eventEmitter.addListener(renderEventConstants.leaveBuffer, e, l);
        return () => {
          o.eventEmitter.removeListener(renderEventConstants.leaveBuffer, e, l);
        };
      }
    }, [n, o, l]);
    let z = () => T(++p);
    reactCoreLibraryReexport.useEffect(() => {
      if (f != null) {
        f.eventEmitter.addListener(renderEventConstants.viewportLocked, z);
      }
      if (f != null) {
        f.eventEmitter.addListener(renderEventConstants.postLayoutEvent, Z);
      }
      if (f != null) {
        f.addListener(renderEventConstants.enterBuffer, z, g);
      }
      return () => {
        if (f != null) {
          f.eventEmitter.removeListener(renderEventConstants.viewportLocked, z);
        }
        if (f != null) {
          f.eventEmitter.removeListener(renderEventConstants.postLayoutEvent, Z);
        }
        if (f != null) {
          f.removeListener(renderEventConstants.enterBuffer, z, g);
        }
      };
    }, []);
    let $ = g && (f == null ? undefined : f.layoutManager.isBlockActive(g)) ? reactJsxRuntimeCoreReexport.jsx(B, {
      className: h,
      style: {
        ...c,
        left: U,
        right: V,
        top: Y,
        bottom: G,
        maxWidth: W,
        backgroundColor: c == null ? undefined : c.backgroundColor
      },
      focus: I,
      hover: _,
      focusFirst: S,
      title: a,
      position: u
    }) : null;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      ...m,
      className: x(`history-author-popover-wrapper ${e.className ? e.className : ""}`, {
        focus: I,
        mobile: browserEnvironmentDetectionUtils.browserDetector.isMobile
      }),
      onMouseOver: H,
      onMouseOut: F,
      ref: v,
      children: [e.children, reactDomEntryWrapper.createPortal($, b)]
    });
  }
  function F(e) {
    let {
      style: r
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: "history-diff-add-wrapper",
      style: {
        ...r
      },
      children: e.children
    });
  }
  function Z(e) {
    let {
      style: r
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "history-diff-cover-add-wrapper",
      children: [e.children, reactJsxRuntimeCoreReexport.jsx("div", {
        className: "history-diff-cover-add-wrapper-mask",
        style: {
          ...r
        }
      })]
    });
  }
  var flowDocCloseIcon = require("flow-doc-close-icon") /*id: 863001*/;
  function V(e) {
    let {
      style: r,
      type: i = "block"
    } = e;
    let o = i === "text";
    let n = x("history-diff-delete-wrapper", `history-${i}`, {
      "textual-block": o
    });
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: n,
      style: {
        ...r,
        backgroundColor: o ? r == null ? undefined : r.backgroundColor : undefined
      },
      children: [o ? e.children : reactJsxRuntimeCoreReexport.jsx("div", {
        className: "history-diff-delete-opacity-mask",
        children: e.children
      }), !o && reactJsxRuntimeCoreReexport.jsx("div", {
        className: "history-diff-delete-mask",
        style: {
          backgroundColor: r == null ? undefined : r.backgroundColor
        },
        children: reactJsxRuntimeCoreReexport.jsx("span", {
          className: "history-diff-delete-mask-icon",
          children: reactJsxRuntimeCoreReexport.jsx(flowDocCloseIcon.CloseIcon, {
            style: {
              fill: r == null ? undefined : r.color
            }
          })
        })
      }, "delete-mask")]
    });
  }
  function Y(e, r, i) {
    var o;
    if ((r = typeof (o = function (e, r) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var o = i.call(e, r || "default");
        if (typeof o != "object") {
          return o;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (r === "string" ? String : Number)(e);
    }(r, "string")) == "symbol" ? o : o + "") in e) {
      Object.defineProperty(e, r, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[r] = i;
    }
    return e;
  }
  let G = {
    [docBlockConstants_1.editTypeConstants.add]: Z,
    [docBlockConstants_1.editTypeConstants.change]: Z,
    [docBlockConstants_1.editTypeConstants.del]: V
  };
  var docxHistoryConstants = require("docx-history-constants") /*id: 995012*/;
  var docBlockModelClass = require("doc-block-model-class") /*id: 672640*/;
  class $ extends docBlockModelClass.DocBlockModel {}
  n = "type";
  l = docxHistoryConstants.HistoryDragConsts.HISTROY_DRAG_PLACEHOLDER;
  if ((n = typeof (o = function (e, r) {
    if (typeof e != "object" || !e) {
      return e;
    }
    var i = e[Symbol.toPrimitive];
    if (i !== undefined) {
      var o = i.call(e, r || "default");
      if (typeof o != "object") {
        return o;
      }
      throw TypeError("@@toPrimitive must return a primitive value.");
    }
    return (r === "string" ? String : Number)(e);
  }(n, "string")) == "symbol" ? o : o + "") in $) {
    Object.defineProperty($, n, {
      value: l,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    $[n] = l;
  }
  var blockMaskManagerBaseClass = require("block-mask-manager-base-class") /*id: 471875*/;
  var q = e => reactJsxRuntimeCoreReexport.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 80,
    height: 80,
    fill: "none",
    viewBox: "0 0 80 80",
    ...e,
    children: [reactJsxRuntimeCoreReexport.jsx("mask", {
      id: "history-drag-placeholder_svg__a",
      width: 80,
      height: 80,
      x: 0,
      y: 0,
      "mask-type": "alpha",
      maskUnits: "userSpaceOnUse",
      children: reactJsxRuntimeCoreReexport.jsx("path", {
        fill: "#C4C4C4",
        d: "M0 0h80v80H0z"
      })
    }), reactJsxRuntimeCoreReexport.jsxs("g", {
      mask: "url(#history-drag-placeholder_svg__a)",
      children: [reactJsxRuntimeCoreReexport.jsx("path", {
        fill: "#D7DAE0",
        d: "M2 12h41v48H2z"
      }), reactJsxRuntimeCoreReexport.jsx("path", {
        fill: "#fff",
        d: "M9 18h41v48H9z"
      }), reactJsxRuntimeCoreReexport.jsx("path", {
        stroke: "#2B2F36",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M19 68.564s1.243-11.779 9.112-11.343C35.982 57.658 37.64 69 37.64 69S43.5 37 53 36"
      }), reactJsxRuntimeCoreReexport.jsx("path", {
        fill: "#FFC60A",
        fillRule: "evenodd",
        d: "M55.88 18.388 48 24.544l6.157 7.88 7.88-6.156zM65.336 11l-7.88 6.157 6.157 7.88 7.88-6.157zm-9.948 23 7.88-6.156 6.157 7.88-7.88 6.157zm17.336-13.544-7.88 6.157 6.157 7.88 7.88-6.157z",
        clipRule: "evenodd"
      }), reactJsxRuntimeCoreReexport.jsx("rect", {
        width: 27,
        height: 1,
        x: 13,
        y: 25,
        fill: "#2B2F36",
        rx: 0.5
      }), reactJsxRuntimeCoreReexport.jsx("rect", {
        width: 27,
        height: 1,
        x: 13,
        y: 28,
        fill: "#2B2F36",
        rx: 0.5
      }), reactJsxRuntimeCoreReexport.jsx("rect", {
        width: 27,
        height: 1,
        x: 13,
        y: 31,
        fill: "#2B2F36",
        rx: 0.5
      })]
    })]
  });
  class Q extends reactCoreLibraryReexport.PureComponent {
    render() {
      return reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "history-drag-placeholder-wrapper",
        children: [reactJsxRuntimeCoreReexport.jsx(q, {}), reactJsxRuntimeCoreReexport.jsxs("span", {
          className: "history-drag-placeholder-wrapper-content",
          children: [t("CreationDoc_DocX_History_Drag_Desc1"), reactJsxRuntimeCoreReexport.jsx("a", {
            className: "history-jump",
            onClick: this.props.onClickAnchor,
            children: t("CreationDoc_DocX_History_Drag_Desc2")
          })]
        })]
      });
    }
  }
  class K extends blockMaskManagerBaseClass.BlockMaskManagerBase {
    render() {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: "placeholder-block-image-wrapper",
        children: reactJsxRuntimeCoreReexport.jsx(Q, {
          onClickAnchor: this.handleAnchor
        })
      });
    }
    constructor(...e) {
      var r;
      var i;
      var o;
      super(...e);
      r = "handleAnchor";
      i = () => {
        let e = this.snapshot.draggedTarget;
        if (e) {
          this.viewport.scrollToRecord(e, async () => {
            var r;
            let i = this.blockManager.getBlockViewsByRecordId(e)[0];
            if (i != null && (r = i.hostElement) !== null && r !== undefined) {
              r.scrollIntoView({
                behavior: "auto",
                block: "center"
              });
            }
          });
        }
      };
      if ((r = typeof (o = function (e, r) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var i = e[Symbol.toPrimitive];
        if (i !== undefined) {
          var o = i.call(e, r || "default");
          if (typeof o != "object") {
            return o;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (r === "string" ? String : Number)(e);
      }(r, "string")) == "symbol" ? o : o + "") in this) {
        Object.defineProperty(this, r, {
          value: i,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[r] = i;
      }
    }
  }
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  var asyncTickHelper = require("async-tick-helper") /*id: 954555*/;
  var clientVarProviderAccess = require("client-var-provider-access") /*id: 503677*/;
  function er(e, r, i) {
    var o;
    if ((r = typeof (o = function (e, r) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var o = i.call(e, r || "default");
        if (typeof o != "object") {
          return o;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (r === "string" ? String : Number)(e);
    }(r, "string")) == "symbol" ? o : o + "") in e) {
      Object.defineProperty(e, r, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[r] = i;
    }
    return e;
  }
  s = (h = class {
    init() {
      let {
        api: e
      } = this;
      this.subs.push(e.lifecycle.editorDidInit$.subscribe(this.onEditorInit));
    }
    destroy() {
      this.subs.forEach(e => e.unsubscribe());
    }
    async initClientVar() {
      await this.initFullClientvars();
    }
    async initFullClientvars() {
      await asyncTickHelper.waitForTick();
      let e = this.api.getService(clientVarProviderAccess.getClientProvider);
      let r = this.api.getService(docxEditorCore.CONFIG_TOKEN).get("clientVar");
      e.applyClientVar(r, e => {
        this.api.dataService.registerRecords(e);
      });
    }
    constructor() {
      var e;
      if (e = f) {
        Object.defineProperty(this, "api", {
          enumerable: e.enumerable,
          configurable: e.configurable,
          writable: e.writable,
          value: e.initializer ? e.initializer.call(this) : undefined
        });
      }
      er(this, "subs", []);
      er(this, "onEditorInit", async () => {
        await this.initClientVar();
      });
    }
  }).prototype;
  a = [docxEditorCore.EDITOR_API_TOKEN];
  d = {};
  Object.keys(c = {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }).forEach(function (e) {
    d[e] = c[e];
  });
  d.enumerable = !!d.enumerable;
  d.configurable = !!d.configurable;
  if ("value" in d || d.initializer) {
    d.writable = true;
  }
  f = (d = a.slice().reverse().reduce(function (e, r) {
    return r(s, "api", e) || e;
  }, d)).initializer === undefined ? (Object.defineProperty(s, "api", d), null) : d;
  let ei = h;
  var compatibleEditorContext_1 = require("compatible-editor-context_1") /*id: 2711*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var dividerBlockContainerCheck = require("divider-block-container-check") /*id: 511660*/;
  var docxPreviewCheck = require("docx-preview-check") /*id: 275819*/;
  var gridBlockGapCheck = require("grid-block-gap-check") /*id: 512165*/;
  var isOutsideIframeContainer = require("is-outside-iframe-container") /*id: 123375*/;
  var imageBlockContainerCheck = require("image-block-container-check") /*id: 169320*/;
  var elementEmptyCheckUtil = require("element-empty-check-util") /*id: 599693*/;
  var blockRectServiceId = require("block-rect-service-id") /*id: 768934*/;
  var blockManagerToken = require("block-manager-token") /*id: 109058*/;
  var eventEmitterProviderNameExport = require("event-emitter-provider-name-export") /*id: 889973*/;
  var selectionEventDriverAndManager = require("selection-event-driver-and-manager") /*id: 282246*/;
  var compatBrowserSelectionService_1 = require("compat-browser-selection-service_1") /*id: 22128*/;
  var docxBlockViewWidthManager = require("docx-block-view-width-manager") /*id: 145137*/;
  var docxEditorLayoutSelectorBase = require("docx-editor-layout-selector-base") /*id: 710348*/;
  var foldProviderAccessor = require("fold-provider-accessor") /*id: 786534*/;
  var docxHeadingOrderManager = require("docx-heading-order-manager") /*id: 703122*/;
  var docxLayoutChangeEventManager = require("docx-layout-change-event-manager") /*id: 319980*/;
  var layoutItemChangeManager = require("layout-item-change-manager") /*id: 988323*/;
  var orderedBlockManager = require("ordered-block-manager") /*id: 107278*/;
  var viewportScrollManager = require("viewport-scroll-manager") /*id: 546823*/;
  function eE(e, r, i, o) {
    if (i) {
      Object.defineProperty(e, r, {
        enumerable: i.enumerable,
        configurable: i.configurable,
        writable: i.writable,
        value: i.initializer ? i.initializer.call(o) : undefined
      });
    }
  }
  function eS(e, r, i) {
    var o;
    if ((r = typeof (o = function (e, r) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var o = i.call(e, r || "default");
        if (typeof o != "object") {
          return o;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (r === "string" ? String : Number)(e);
    }(r, "string")) == "symbol" ? o : o + "") in e) {
      Object.defineProperty(e, r, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[r] = i;
    }
    return e;
  }
  function eO(e, r, i, o, n) {
    var l = {};
    Object.keys(o).forEach(function (e) {
      l[e] = o[e];
    });
    l.enumerable = !!l.enumerable;
    l.configurable = !!l.configurable;
    if ("value" in l || l.initializer) {
      l.writable = true;
    }
    l = i.slice().reverse().reduce(function (i, o) {
      return o(e, r, i) || i;
    }, l);
    if (n && l.initializer !== undefined) {
      l.value = l.initializer ? l.initializer.call(n) : undefined;
      l.initializer = undefined;
    }
    if (l.initializer === undefined) {
      Object.defineProperty(e, r, l);
      return null;
    } else {
      return l;
    }
  }
  m = eO((g = class {
    init(e) {
      var r;
      let {
        getIsMobileEditMode: i,
        contentRef: o
      } = e;
      this.getIsMobileEditMode = i;
      let {
        config: n,
        blockManager: l,
        eventEmitter: s
      } = this;
      let a = n.get("container");
      this.blockViewportAdapter = new docxEditorLayoutSelectorBase.createLayoutSelector({
        blockManager: l
      });
      this.selectionAPI.init({
        getContentContainer: () => a,
        boundaryAreaContainer: n.get("boundary"),
        pasteBoundary: a,
        selectionAreaContainer: document.body,
        unSelectableType: docBlockTypeConstants.selectionViewTypes
      }, this.fold);
      this.setupSelectionAPI();
      this.viewport = new viewportScrollManager.ViewportScrollManager({
        container: n.get("boundary"),
        selectionAPI: this.selectionAPI,
        fold: this.fold,
        rect: this.rect,
        blockManager: l,
        eventEmitter: s
      });
      this.headingModule = new docxHeadingOrderManager.HeadingOrderManager({
        blockManager: this.blockManager,
        eventEmitter: this.eventEmitter,
        env: orderedBlockManager.RenderEnvEnum.HISTORY
      });
      this.autoExpandCellModule = new docxBlockViewWidthManager.DocxBlockViewWidthManager(this.blockManager);
      this.layout = new docxLayoutChangeEventManager.DocxLayoutChangeEventManager({
        catalogue: new layoutItemChangeManager.LayoutItemChangeManager(),
        content: new layoutItemChangeManager.LayoutItemChangeManager(o),
        comment: new layoutItemChangeManager.LayoutItemChangeManager(),
        editor: new layoutItemChangeManager.LayoutItemChangeManager(() => a)
      });
      if ((r = e.onContextInit) !== null && r !== undefined) {
        r.call(e, this);
      }
    }
    get isMobileEditMode() {
      var e;
      var r;
      return (r = (e = this.getIsMobileEditMode) === null || e === undefined ? undefined : e.call(this)) !== null && r !== undefined && r;
    }
    get boundary() {
      return this.config.get("boundary");
    }
    get scroller() {
      return this.config.get("scroller");
    }
    get container() {
      return this.config.get("container");
    }
    get editable() {
      return this.config.get("editable");
    }
    get editPermission() {
      return this.config.get("editPermission");
    }
    get copyable() {
      return this.config.get("copyable");
    }
    get exportable() {
      return this.config.get("exportable");
    }
    toPlainObject() {
      return {
        selectionAPI: this.selectionAPI,
        blockManager: this.blockManager,
        boundary: this.boundary,
        fold: this.fold,
        editable: this.editable,
        editPermission: this.editPermission,
        isHistory: this.config.get("isHistory"),
        isMobileEditMode: this.isMobileEditMode,
        copyable: this.copyable,
        exportable: this.exportable,
        scroller: this.scroller,
        rect: this.rect,
        layout: this.layout,
        viewport: this.viewport,
        eventEmitter: this.eventEmitter,
        container: this.container,
        tokenFromWiki: this.config.get("tokenFromWiki"),
        blockViewportAdapter: this.blockViewportAdapter,
        headingModule: this.headingModule
      };
    }
    destroy() {
      var e;
      this.viewport.destroy();
      this.blockViewportAdapter.destroy();
      this.headingModule.destroy();
      this.autoExpandCellModule.destroy();
      if ((e = this.layout) !== null && e !== undefined) {
        e.destroy();
      }
    }
    onServiceDispose() {
      this.destroy();
    }
    setupSelectionAPI() {
      this.selectionAPI.register(selectionEventDriverAndManager.EventDriverEvents.startTargetFilter, elementEmptyCheckUtil.isEmptyElement);
      this.selectionAPI.register(selectionEventDriverAndManager.EventDriverEvents.startTargetFilter, imageBlockContainerCheck.isOutsideImageBlock);
      this.selectionAPI.register(selectionEventDriverAndManager.EventDriverEvents.startTargetFilter, isOutsideIframeContainer.isOutsideIframe);
      this.selectionAPI.register(selectionEventDriverAndManager.EventDriverEvents.startTargetFilter, docxPreviewCheck.isNotPreview);
      this.selectionAPI.register(selectionEventDriverAndManager.EventDriverEvents.startTargetFilter, gridBlockGapCheck.isOutsideGridGap);
      this.selectionAPI.register(selectionEventDriverAndManager.EventDriverEvents.startTargetFilter, dividerBlockContainerCheck.isOutsideDivider);
    }
    constructor() {
      eS(this, "getIsMobileEditMode", undefined);
      eE(this, "fold", m, this);
      eS(this, "autoExpandCellModule", undefined);
      eS(this, "blockViewportAdapter", undefined);
      eS(this, "viewport", undefined);
      eS(this, "headingModule", undefined);
      eS(this, "layout", undefined);
      eE(this, "selectionAPI", p, this);
      eE(this, "config", y, this);
      eE(this, "blockManager", b, this);
      eE(this, "rect", v, this);
      eE(this, "eventEmitter", _, this);
    }
  }).prototype, "fold", [foldProviderAccessor.foldProvider], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  });
  p = eO(g.prototype, "selectionAPI", [compatBrowserSelectionService_1.selectionServiceKey], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  });
  y = eO(g.prototype, "config", [docxEditorCore.CONFIG_TOKEN], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  });
  b = eO(g.prototype, "blockManager", [blockManagerToken.blockManagerToken], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  });
  v = eO(g.prototype, "rect", [blockRectServiceId.blockRectServiceId], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  });
  _ = eO(g.prototype, "eventEmitter", [eventEmitterProviderNameExport.eventEmitterProviderName], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  });
  let ew = g;
  var docxWidthControlModeSlot = require("docx-width-control-mode-slot") /*id: 804339*/;
  var docxEditorContextFacade = require("docx-editor-context-facade") /*id: 919954*/;
  var docxAutoSelectProvider = require("docx-auto-select-provider") /*id: 799573*/;
  var autoSelectProviderWrapper = require("auto-select-provider-wrapper") /*id: 408018*/;
  var getBlockBackgroundColorProvider = require("get-block-background-color-provider") /*id: 381597*/;
  var registerBackgroundMaskEffect = require("register-background-mask-effect") /*id: 470077*/;
  var docxBlockContainerProvider = require("docx-block-container-provider") /*id: 577766*/;
  var docxBlockContainerPlugin = require("docx-block-container-plugin") /*id: 11239*/;
  var providerNameConstants = require("provider-name-constants") /*id: 349632*/;
  var docxBlockLoadingWrapperProvider = require("docx-block-loading-wrapper-provider") /*id: 990627*/;
  var diProviderHideLoadingSubject = require("di-provider-hide-loading-subject") /*id: 822039*/;
  var resourceBlockProviderName = require("resource-block-provider-name") /*id: 242875*/;
  var docShortcutComponent = require("doc-shortcut-component") /*id: 1988*/;
  var docxBlockRevisionProvider = require("docx-block-revision-provider") /*id: 728098*/;
  var docxBlockRevisionRenderer = require("docx-block-revision-renderer") /*id: 337358*/;
  var docxScrollableConstants = require("docx-scrollable-constants") /*id: 451992*/;
  var docxScrollableViewProvider = require("docx-scrollable-view-provider") /*id: 144031*/;
  var zeroSpaceProviderName = require("zero-space-provider-name") /*id: 715309*/;
  var zeroSpaceProviderRegistration = require("zero-space-provider-registration") /*id: 865694*/;
  var e$ = require("docx-stage-mod-trigger-wrapper") /*id: 492872*/.triggerDocxStageModWrapper;
  var historyDiffProviderNames = require("history-diff-provider-names") /*id: 818901*/;
  var docxEditorProviderRegistry = require("docx-editor-provider-registry") /*id: 513130*/;
  var docxCalloutBlockRegister = require("docx-callout-block-register") /*id: 992089*/;
  var eK = require("docx-code-block-init") /*id: 368262*/.initDocxCodeBlocks;
  var blockMaskUpdaterProviderRegistration = require("block-mask-updater-provider-registration") /*id: 727919*/;
  var blockMaskUpdaterProvider = require("block-mask-updater-provider") /*id: 406318*/;
  var docxCaptionSlotDefinition = require("docx-caption-slot-definition") /*id: 591389*/;
  var docxCaptionModuleRegistrar = require("docx-caption-module-registrar") /*id: 141732*/;
  var docxDividerBlockViewModel = require("docx-divider-block-view-model") /*id: 261652*/;
  var docxFallbackBlockViewModelRegistration = require("docx-fallback-block-view-model-registration") /*id: 547277*/;
  var fallbackServiceName = require("fallback-service-name") /*id: 947937*/;
  var docxViewConfigConstants = require("docx-view-config-constants") /*id: 725976*/;
  var e8 = require("docx-file-block-initializer") /*id: 972540*/.initializeDocxFileBlock;
  var vcMutedProviderName = require("vc-muted-provider-name") /*id: 120758*/;
  var docxGridColumnViewRegistration = require("docx-grid-column-view-registration") /*id: 111546*/;
  var gridLayoutManager = require("grid-layout-manager") /*id: 433020*/;
  var gridColumnLayoutNodeConfigProvider = require("grid-column-layout-node-config-provider") /*id: 323347*/;
  var historyDiffHighlightRenderer = require("history-diff-highlight-renderer") /*id: 349705*/;
  var editorPluginListBuilder = require("editor-plugin-list-builder") /*id: 980558*/;
  function to() {
    return [...editorPluginListBuilder.getEditorPluginList(), [historyDiffHighlightRenderer.HistoryDiffHighlight]];
  }
  var docxEditorProviderAggregator = require("docx-editor-provider-aggregator") /*id: 754913*/;
  var registerHeadingBlocks = require("register-heading-blocks") /*id: 824975*/;
  let ts = docxEditorCore.getProviderName("history-diff-iframe-highlight");
  var docxImageEditorPlugin = require("docx-image-editor-plugin") /*id: 165800*/;
  var imageDataCacheStorageToken = require("image-data-cache-storage-token") /*id: 328701*/;
  var imageManagerProviderName = require("image-manager-provider-name") /*id: 852709*/;
  var imageOperationServiceProvider = require("image-operation-service-provider") /*id: 713630*/;
  var docxEditorProviderCollections = require("docx-editor-provider-collections") /*id: 494060*/;
  var docxProviderNameCollectors = require("docx-provider-name-collectors") /*id: 391564*/;
  var docListBlockRegistration = require("doc-list-block-registration") /*id: 93973*/;
  var docxEditorProviderUtils = require("docx-editor-provider-utils") /*id: 993415*/;
  var docxPageBlockComponent = require("docx-page-block-component") /*id: 181612*/;
  var docxPendingBlockViewModel = require("docx-pending-block-view-model") /*id: 218962*/;
  var pendingClientVarProvider = require("pending-client-var-provider") /*id: 835547*/;
  var docxEditorProviderGetters = require("docx-editor-provider-getters") /*id: 983353*/;
  var docxQuoteBlockCore = require("docx-quote-block-core") /*id: 485216*/;
  let tk = docxEditorCore.getProviderName("history-diff-page-highlight");
  var getTextHighlightProviderName = require("get-text-highlight-provider-name") /*id: 318467*/;
  var tx = require("docx-sheet-init-handler") /*id: 884808*/.initDocxSheetEditor;
  var sheetBlockdepLoaderProvider = require("sheet-blockdep-loader-provider") /*id: 16546*/;
  let tE = docxEditorCore.getProviderName("history-block-loading");
  let tS = docxEditorCore.getProviderName("history-diff-table-highlight");
  let tO = docxEditorCore.getProviderName("history-diff-table-cell-highlight");
  var viewModeConstants = require("view-mode-constants") /*id: 204949*/;
  var tableLayoutConstants_1 = require("table-layout-constants_1") /*id: 673543*/;
  var docxTableBlockView = require("docx-table-block-view") /*id: 541604*/;
  var tableLayoutConfiguration = require("table-layout-configuration") /*id: 647875*/;
  var diTableCellChildrenCompensation = require("di-table-cell-children-compensation") /*id: 832809*/;
  var cellMinWidthTableUiService = require("cell-min-width-table-ui-service") /*id: 992311*/;
  var cellSelectionTableService = require("cell-selection-table-service") /*id: 386469*/;
  var tableBasicTableUiToken = require("table-basic-table-ui-token") /*id: 470778*/;
  var tableVisibleWidthProvider = require("table-visible-width-provider") /*id: 528584*/;
  var tableWillDeleteCellProvider = require("table-will-delete-cell-provider") /*id: 473045*/;
  var tableHeaderClickSignalHandler = require("table-header-click-signal-handler") /*id: 114441*/;
  var tableHeaderSelectingSignal = require("table-header-selecting-signal") /*id: 361769*/;
  var tableCellDeleteSignalModule = require("table-cell-delete-signal-module") /*id: 473863*/;
  var textBlockWrapperComponent = require("text-block-wrapper-component") /*id: 36029*/;
  var mentionSharePanelProvider = require("mention-share-panel-provider") /*id: 868039*/;
  var docxMentionManagerProvider = require("docx-mention-manager-provider") /*id: 532747*/;
  var mentionUserServiceProvider = require("mention-user-service-provider") /*id: 326879*/;
  var historyDiffHighlightProvider = require("history-diff-highlight-provider") /*id: 929313*/;
  var docxEditorKitRegistration = require("docx-editor-kit-registration") /*id: 730751*/;
  var contentStateServiceProvider = require("content-state-service-provider") /*id: 280621*/;
  var editorKitProviderName = require("editor-kit-provider-name") /*id: 799939*/;
  var smartCorrectionServiceToken = require("smart-correction-service-token") /*id: 381585*/;
  var docxTextualDependencyConsts = require("docx-textual-dependency-consts") /*id: 698399*/;
  var buttonTriggerSignalModule = require("button-trigger-signal-module") /*id: 717887*/;
  var docxImageRenderer = require("docx-image-renderer") /*id: 172826*/;
  var docxInlineBlockRenderers = require("docx-inline-block-renderers") /*id: 381474*/;
  var viewTypeConstants = require("view-type-constants") /*id: 676077*/;
  var docBlockViewModelRegister = require("doc-block-view-model-register") /*id: 20984*/;
  var linkServiceProvider = require("link-service-provider") /*id: 880405*/;
  var docxEditorProviderRegistration = require("docx-editor-provider-registration") /*id: 191302*/;
  var syncedCommentServiceProvider = require("synced-comment-service-provider") /*id: 961839*/;
  var docxStageTriggerRegistry = require("docx-stage-trigger-registry") /*id: 561647*/;
  var attachmentPermissionServiceProvider = require("attachment-permission-service-provider") /*id: 557872*/;
  var attachmentPermissionService = require("attachment-permission-service") /*id: 275142*/;
  var docxBlockRectService = require("docx-block-rect-service") /*id: 284142*/;
  var blockRectGetterToken = require("block-rect-getter-token") /*id: 346455*/;
  var blockRectServiceProvider = require("block-rect-service-provider") /*id: 688428*/;
  var blockVisibilityProviderRegistration = require("block-visibility-provider-registration") /*id: 540392*/;
  var blockVisibilityProviderName = require("block-visibility-provider-name") /*id: 46719*/;
  var docxClickRootService = require("docx-click-root-service") /*id: 544042*/;
  var clickRootServiceProvider = require("click-root-service-provider") /*id: 398284*/;
  var clientVarProviderRegistration = require("client-var-provider-registration") /*id: 239121*/;
  var clientVarProviderName = require("client-var-provider-name") /*id: 399717*/;
  var clipboardServiceProvider = require("clipboard-service-provider") /*id: 417317*/;
  var docxClipboardServiceProvider = require("docx-clipboard-service-provider") /*id: 219252*/;
  var codeFoldResizeConstants = require("code-fold-resize-constants") /*id: 637342*/;
  var docxEditorStageModuleTrigger = require("docx-editor-stage-module-trigger") /*id: 74788*/;
  var docxEditorEventCollector = require("docx-editor-event-collector") /*id: 654559*/;
  var diProviderCollectEvent = require("di-provider-collect-event") /*id: 308105*/;
  var commentEventsProviderRegistration = require("comment-events-provider-registration") /*id: 200004*/;
  var commentEventsProviderName = require("comment-events-provider-name") /*id: 751145*/;
  var docxBlockManagerProvider = require("docx-block-manager-provider") /*id: 903870*/;
  var blockManagerProviderName = require("block-manager-provider-name") /*id: 443647*/;
  var compatibleEditorContext = require("compatible-editor-context") /*id: 6849*/;
  var docxEventEmitterProvider = require("docx-event-emitter-provider") /*id: 748577*/;
  var eventEmitterProviderName = require("event-emitter-provider-name") /*id: 354872*/;
  var editCheckerProvider = require("edit-checker-provider") /*id: 884051*/;
  var embedObjectPermissionInit = require("embed-object-permission-init") /*id: 191114*/;
  var embedObjectProviderName = require("embed-object-provider-name") /*id: 129397*/;
  var docxFeatureStatusProvider = require("docx-feature-status-provider") /*id: 273435*/;
  var featStatusServiceProvider = require("feat-status-service-provider") /*id: 663703*/;
  var hookServiceDiConstants = require("hook-service-di-constants") /*id: 565865*/;
  var docxHookProviderRegistry = require("docx-hook-provider-registry") /*id: 584868*/;
  var imageViewerManagerProvider = require("image-viewer-manager-provider") /*id: 347257*/;
  var registerDelayToFirstScreenMarker = require("register-delay-to-first-screen-marker") /*id: 893396*/;
  var eventBreakRuleToken = require("event-break-rule-token") /*id: 727603*/;
  var lazyConsumerServiceProvider = require("lazy-consumer-service-provider") /*id: 897591*/;
  var lazyConsumerToken = require("lazy-consumer-token") /*id: 103465*/;
  var loadableBlockFetcherServiceProvider = require("loadable-block-fetcher-service-provider") /*id: 974946*/;
  var loadableBlockFetcherProvider = require("loadable-block-fetcher-provider") /*id: 289910*/;
  var docxTaskSchedulerInit = require("docx-task-scheduler-init") /*id: 857011*/;
  var docxResourceSchedulerProvider = require("docx-resource-scheduler-provider") /*id: 54859*/;
  var loadableBlockSchedulerProvider = require("loadable-block-scheduler-provider") /*id: 809759*/;
  var docxTextHighlightProviderRegistration = require("docx-text-highlight-provider-registration") /*id: 346133*/;
  var localTextHighlightProvider = require("local-text-highlight-provider") /*id: 790796*/;
  var docxMainLayoutManager = require("docx-main-layout-manager") /*id: 267392*/;
  var mainLayoutManagerProvider = require("main-layout-manager-provider") /*id: 351995*/;
  var mentionDocManagerProvider = require("mention-doc-manager-provider") /*id: 675739*/;
  var mentionDocDataUpdateProvider = require("mention-doc-data-update-provider") /*id: 387558*/;
  var mentionDocManagerToken_1 = require("mention-doc-manager-token_1") /*id: 303079*/;
  var docxModuleSettingProvider = require("docx-module-setting-provider") /*id: 984704*/;
  var moduleSettingProviderToken = require("module-setting-provider-token") /*id: 609239*/;
  var docxErrorOopsServiceRegistrar = require("docx-error-oops-service-registrar") /*id: 275561*/;
  var blockOopsServiceProvider = require("block-oops-service-provider") /*id: 574532*/;
  var pageOopsServiceProvider = require("page-oops-service-provider") /*id: 695060*/;
  var docxEditorFirstScreenMarker = require("docx-editor-first-screen-marker") /*id: 597227*/;
  var docxRelationServiceProvider = require("docx-relation-service-provider") /*id: 269500*/;
  var relationServiceProviderName = require("relation-service-provider-name") /*id: 233471*/;
  var docxEditorSelectionService = require("docx-editor-selection-service") /*id: 168159*/;
  var compatBrowserSelectionService = require("compat-browser-selection-service") /*id: 833280*/;
  var selectionServiceProviderName = require("selection-service-provider-name") /*id: 572319*/;
  var docxStructureQueryProvider = require("docx-structure-query-provider") /*id: 775478*/;
  var blockQueryProviderName = require("block-query-provider-name") /*id: 856405*/;
  var structureQueryProvider = require("structure-query-provider") /*id: 388568*/;
  var syncedRefBlockManagerToken = require("synced-ref-block-manager-token") /*id: 549332*/;
  var docxEditorTriggerRegistration = require("docx-editor-trigger-registration") /*id: 143150*/;
  var syncedRefBlockSelProvider = require("synced-ref-block-sel-provider") /*id: 121370*/;
  var dynamicExtensionTriggerRegistrar = require("dynamic-extension-trigger-registrar") /*id: 245241*/;
  var dynamicModuleBootstrapTrigger = require("dynamic-module-bootstrap-trigger") /*id: 773092*/;
  var docxIdleResourceController = require("docx-idle-resource-controller") /*id: 554688*/;
  var flowCommentService = require("flow-comment-service") /*id: 956967*/;
  var flowCommentServiceToken = require("flow-comment-service-token") /*id: 397738*/;
  var docxFlowCommentService = require("docx-flow-comment-service") /*id: 433297*/;
  var flowRevisionServiceName = require("flow-revision-service-name") /*id: 934786*/;
  var docxFoldProviderName = require("docx-fold-provider-name") /*id: 207215*/;
  var docxFoldViewExtension = require("docx-fold-view-extension") /*id: 450933*/;
  var foldProviderRegistration = require("fold-provider-registration") /*id: 406359*/;
  var docEditorConstants_1 = require("doc-editor-constants_1") /*id: 2607*/;
  var headingOrderExtensionInit = require("heading-order-extension-init") /*id: 120392*/;
  var docUpgradeConfigConstants = require("doc-upgrade-config-constants") /*id: 12463*/;
  var editorContextFacade = require("editor-context-facade") /*id: 788056*/;
  var docBlockEditUtils = require("doc-block-edit-utils") /*id: 546333*/;
  var userColorConfigManager = require("user-color-config-manager") /*id: 155242*/;
  class im extends editorContextFacade.EditorContextFacade {
    getAfterSlot() {
      return e => {
        let [r, i] = reactCoreLibraryReexport.useState();
        let [o, n] = reactCoreLibraryReexport.useState();
        let [l, s] = reactCoreLibraryReexport.useState();
        let [a, c] = reactCoreLibraryReexport.useState();
        let [d, u] = reactCoreLibraryReexport.useState();
        let [h, f] = reactCoreLibraryReexport.useState();
        let [g, m] = reactCoreLibraryReexport.useState();
        let {
          blockManager: p,
          scroller: y
        } = this;
        reactCoreLibraryReexport.useEffect(() => {
          let r = p.getBlockViewByBlockId(e.blockId);
          m(r);
          let {
            snapshot: o
          } = r.props.record;
          let l = o[docBlockConstants_1.editTypeConstants.change];
          let a = docBlockEditUtils.validateBlockProps(l == null ? undefined : l.from, l == null ? undefined : l.to, docBlockConstants_1.blockAttributeKeys);
          if (!a) {
            return;
          }
          i(!!a);
          u(a);
          f(o.type);
          let d = String(o.user_id);
          if (!d) {
            return;
          }
          let {
            backgroundColor: h,
            textColor: g,
            name: y
          } = userColorConfigManager.userConfigManager.getUserInfoById(d);
          let b = y;
          if (docUpgradeConfigConstants.isUpgradeToDocx && userColorConfigManager.userConfigManager.displaySystemName) {
            b = userColorConfigManager.userConfigManager.getSystemDisplayName();
          }
          n(docBlockConstants_1.getEditTypeLabel(docBlockConstants_1.editTypeConstants.change, b));
          s(h);
          c(g);
        }, [e.blockId]);
        if (g && r) {
          return reactJsxRuntimeCoreReexport.jsx(H, {
            className: "history-diff-alignable history-diff-mark slot",
            "data-history-change-id": g.props.recordId,
            title: o,
            style: {
              backgroundColor: a
            },
            scroller: y,
            blockManager: p,
            blockId: e.blockId,
            children: reactJsxRuntimeCoreReexport.jsx("div", {
              className: "history-diff-alignable-highlight",
              "data-block-type": h,
              "data-change-type": d,
              style: {
                backgroundColor: l,
                borderBottom: `2px solid ${a}`
              }
            })
          });
        } else {
          return null;
        }
      };
    }
  }
  let ip = [docBlockTypeConstants.blockTypeConstants.SHEET, docBlockTypeConstants.blockTypeConstants.BITABLE, docBlockTypeConstants.blockTypeConstants.BASE_REFER, docBlockTypeConstants.blockTypeConstants.JIRA_FILTER, docBlockTypeConstants.blockTypeConstants.MEEGO];
  class iy extends editorContextFacade.EditorContextFacade {
    getWrapper(e) {
      return r => {
        let i = docBlockEditUtils.getEditType(r.record.snapshot);
        let o = r.record.snapshot.type;
        if (i == null) {
          return reactJsxRuntimeCoreReexport.jsx(e, {
            ...r
          });
        }
        if (i === docBlockConstants_1.editTypeConstants.change) {
          let i = r.record.snapshot[docBlockConstants_1.editTypeConstants.change]?.from;
          let o = r.record.snapshot[docBlockConstants_1.editTypeConstants.change]?.to;
          if (docBlockEditUtils.validateBlockProps(i, o, docBlockConstants_1.blockAttributeKeys)) {
            return reactJsxRuntimeCoreReexport.jsx(e, {
              ...r
            });
          }
        }
        let s = String(r.record.snapshot.user_id);
        if (!s) {
          return reactJsxRuntimeCoreReexport.jsx(e, {
            ...r
          });
        }
        let {
          backgroundColor: a,
          textColor: c,
          name: d
        } = userColorConfigManager.userConfigManager.getUserInfoById(s);
        let u = d;
        if (docUpgradeConfigConstants.isUpgradeToDocx && userColorConfigManager.userConfigManager.displaySystemName) {
          u = userColorConfigManager.userConfigManager.getSystemDisplayName();
        }
        let h = docBlockConstants_1.getEditTypeLabel(i, u);
        let f = (() => {
          let n = {
            backgroundColor: a,
            color: c
          };
          if ([docBlockConstants_1.editTypeConstants.add, docBlockConstants_1.editTypeConstants.change].includes(i) || docBlockEditUtils.isMediaBlockDlp(r.record.snapshot)) {
            return reactJsxRuntimeCoreReexport.jsx(F, {
              style: n,
              children: reactJsxRuntimeCoreReexport.jsx(e, {
                ...r,
                historyStyle: n
              })
            });
          }
          if ([docBlockConstants_1.editTypeConstants.del].includes(i)) {
            if (r.record.snapshot.isDragged) {
              return reactJsxRuntimeCoreReexport.jsx(F, {
                style: n,
                children: reactJsxRuntimeCoreReexport.jsx(e, {
                  ...r,
                  historyStyle: n
                })
              });
            }
            let i = docBlockConstants_1.supportedBlockTypes.has(o);
            let {
              children: l
            } = this.blockManager.getBlockModelByBlockId(r.blockId);
            if (l.length === 1 && [docBlockTypeConstants.blockTypeConstants.GRID_COLUMN].includes(o)) {
              let [e] = l;
              i = docBlockConstants_1.supportedBlockTypes.has(e.record.snapshot.type);
            }
            if (ip.includes(o)) {
              return reactJsxRuntimeCoreReexport.jsx("div", {
                className: "history-diff-delete-opacity-mask",
                children: reactJsxRuntimeCoreReexport.jsx(e, {
                  ...r,
                  isDeleteHistory: true,
                  style: n
                })
              });
            } else {
              return reactJsxRuntimeCoreReexport.jsx(V, {
                type: i ? "text" : "block",
                style: n,
                children: reactJsxRuntimeCoreReexport.jsx(e, {
                  ...r
                })
              });
            }
          }
          return reactJsxRuntimeCoreReexport.jsx(e, {
            ...r
          });
        })();
        return reactJsxRuntimeCoreReexport.jsx(H, {
          className: "history-diff-mark",
          "data-history-change-id": r.recordId,
          title: h,
          style: {
            backgroundColor: c
          },
          scroller: this.scroller,
          blockManager: this.blockManager,
          blockId: r.blockId,
          children: f
        });
      };
    }
  }
  class ib extends iy {
    getWrapper(e) {
      return r => {
        let i = super.getWrapper(e);
        if (r.record.snapshot.type !== docBlockTypeConstants.blockTypeConstants.IFRAME || !(r.record.snapshot.iframe || {}).is_modified) {
          return i(r);
        }
        let o = docBlockEditUtils.getEditType(r.record.snapshot);
        if (o == null) {
          return reactJsxRuntimeCoreReexport.jsx(e, {
            ...r
          });
        }
        if (o === docBlockConstants_1.editTypeConstants.change) {
          let i = r.record.snapshot[docBlockConstants_1.editTypeConstants.change]?.from;
          let o = r.record.snapshot[docBlockConstants_1.editTypeConstants.change]?.to;
          if (docBlockEditUtils.validateBlockProps(i, o, docBlockConstants_1.blockAttributeKeys)) {
            return reactJsxRuntimeCoreReexport.jsx(e, {
              ...r
            });
          }
        }
        let s = String(r.record.snapshot.user_id);
        if (!s) {
          return reactJsxRuntimeCoreReexport.jsx(e, {
            ...r
          });
        }
        let {
          backgroundColor: a,
          textColor: c,
          name: d
        } = userColorConfigManager.userConfigManager.getUserInfoById(s);
        let u = d;
        if (docUpgradeConfigConstants.isUpgradeToDocx && userColorConfigManager.userConfigManager.displaySystemName) {
          u = userColorConfigManager.userConfigManager.getSystemDisplayName();
        }
        let h = docBlockConstants_1.getEditTypeLabel(o, u);
        let f = {
          backgroundColor: a,
          color: c
        };
        let g = [docBlockConstants_1.editTypeConstants.add, docBlockConstants_1.editTypeConstants.change].includes(o) ? reactJsxRuntimeCoreReexport.jsx(F, {
          style: f
        }) : [docBlockConstants_1.editTypeConstants.del].includes(o) ? r.record.snapshot.isDragged ? reactJsxRuntimeCoreReexport.jsx(F, {
          style: f
        }) : reactJsxRuntimeCoreReexport.jsx(V, {
          type: "block",
          style: f
        }) : null;
        let m = reactJsxRuntimeCoreReexport.jsx(H, {
          className: "history-diff-mark history-diff-resize-iframe",
          "data-history-change-id": r.recordId,
          title: h,
          style: {
            backgroundColor: c
          },
          scroller: this.scroller,
          blockManager: this.blockManager,
          blockId: r.blockId,
          children: g
        });
        return reactJsxRuntimeCoreReexport.jsx(e, {
          ...r,
          diffElement: m
        });
      };
    }
  }
  class iv extends editorContextFacade.EditorContextFacade {
    getEffect() {
      return e => {
        let {
          scroller: r
        } = e.recursionProps;
        let {
          snapshot: i
        } = e.record;
        let o = i.user_id;
        let n = i[docBlockConstants_1.editTypeConstants.change];
        if (n) {
          let i = userColorConfigManager.userConfigManager.getUserInfoById(o);
          let l = i.name;
          if (docUpgradeConfigConstants.isUpgradeToDocx && userColorConfigManager.userConfigManager.displaySystemName) {
            l = userColorConfigManager.userConfigManager.getSystemDisplayName();
          }
          docxEditorEventConstantsAndManager_1.globalEventEmitter.emit(docxEditorEventConstantsAndManager_1.uiEventConstants.SEND_COVER_INFO, {
            userInfo: {
              ...i,
              name: l
            },
            change: n,
            recordId: e.recordId,
            scroller: r
          });
        }
      };
    }
  }
  class i_ extends editorContextFacade.EditorContextFacade {
    getEffect() {
      return e => {
        reactCoreLibraryReexport.useLayoutEffect(() => {
          this.blockManager.layoutManager.notifyRenderFinish(e.blockId);
        }, [e.blockId]);
        return null;
      };
    }
  }
  var cellChangeCalculator = require("cell-change-calculator") /*id: 199925*/;
  class iC extends iy {
    getWrapper(e) {
      return r => {
        let i = r.struct.snapshot.type;
        if (i !== docBlockTypeConstants.blockTypeConstants.CELL) {
          return reactJsxRuntimeCoreReexport.jsx(e, {
            ...r
          });
        }
        let o = r.struct.snapshot;
        let n = o.parent_id;
        let l = this.blockManager.getRecord(n).snapshot;
        let s = docBlockEditUtils.getEditType(o);
        let a = docBlockEditUtils.getEditType(l);
        if (!s && a !== docBlockConstants_1.editTypeConstants.change) {
          return reactJsxRuntimeCoreReexport.jsx(e, {
            ...r
          });
        }
        let {
          changedCellBlockIds: c,
          isAddCell: d,
          isDelCell: u
        } = cellChangeCalculator.calculateCellChanges(l[docBlockConstants_1.editTypeConstants.change]);
        if (!s && !d && !u || !s && c.indexOf(r.record.id) === -1) {
          return reactJsxRuntimeCoreReexport.jsx(e, {
            ...r
          });
        }
        let {
          author: h
        } = o;
        if (!s && !h) {
          return reactJsxRuntimeCoreReexport.jsx(e, {
            ...r
          });
        }
        let {
          backgroundColor: f,
          textColor: g,
          name: m
        } = userColorConfigManager.userConfigManager.getUserInfoById(h);
        let p = m;
        if (docUpgradeConfigConstants.isUpgradeToDocx && userColorConfigManager.userConfigManager.displaySystemName) {
          p = userColorConfigManager.userConfigManager.getSystemDisplayName();
        }
        let y = d ? docBlockConstants_1.editTypeConstants.add : u ? docBlockConstants_1.editTypeConstants.del : docBlockConstants_1.editTypeConstants.change;
        let b = docBlockConstants_1.getEditTypeLabel(y, p);
        let v = (() => {
          if (d) {
            return reactJsxRuntimeCoreReexport.jsx(F, {
              style: {
                backgroundColor: f,
                color: g,
                margin: 0,
                borderRadius: "initial"
              },
              children: reactJsxRuntimeCoreReexport.jsx(e, {
                ...r
              })
            });
          }
          if (u) {
            let o = true;
            let {
              children: n
            } = this.blockManager.getBlockModelByBlockId(r.blockId);
            if (n.length === 1 && [docBlockTypeConstants.blockTypeConstants.GRID_COLUMN].includes(i)) {
              let [e] = n;
              o = docBlockConstants_1.supportedBlockTypes.has(e.record.snapshot.type);
            }
            return reactJsxRuntimeCoreReexport.jsx(V, {
              type: o ? "text" : "block",
              style: {
                backgroundColor: f,
                color: g,
                margin: 0,
                borderRadius: "initial"
              },
              children: reactJsxRuntimeCoreReexport.jsx(e, {
                ...r
              })
            });
          }
          if (s) {
            return reactJsxRuntimeCoreReexport.jsx(F, {
              style: {
                backgroundColor: f,
                color: g,
                margin: 0,
                borderRadius: "initial"
              },
              children: reactJsxRuntimeCoreReexport.jsx(e, {
                ...r
              })
            });
          } else {
            return reactJsxRuntimeCoreReexport.jsx(e, {
              ...r
            });
          }
        })();
        return reactJsxRuntimeCoreReexport.jsx(H, {
          className: "history-diff-mark",
          "data-history-change-id": r.recordId,
          title: b,
          style: {
            backgroundColor: g
          },
          scroller: this.scroller,
          blockManager: this.blockManager,
          blockId: r.blockId,
          children: v
        });
      };
    }
  }
  class ix extends iy {
    getWrapper(e) {
      return r => {
        let i = super.getWrapper(e);
        if (r.record.snapshot.type !== docBlockTypeConstants.blockTypeConstants.TABLE || docBlockEditUtils.getEditType(r.record.snapshot) !== docBlockConstants_1.editTypeConstants.change) {
          return i(r);
        }
        let {
          isAddCell: o,
          isDelCell: n
        } = cellChangeCalculator.calculateCellChanges(r.record.snapshot[docBlockConstants_1.editTypeConstants.change]);
        if (o || n) {
          return reactJsxRuntimeCoreReexport.jsx(e, {
            ...r
          });
        } else {
          return i(r);
        }
      };
    }
  }
  let iI = e => {
    let r = reactCoreLibraryReexport.useRef(true);
    let i = reactCoreLibraryReexport.useRef();
    if (r.current) {
      i.current = e();
    }
    r.current = false;
    reactCoreLibraryReexport.useEffect(() => () => {
      var e;
      if ((e = i.current) !== null && e !== undefined) {
        e.call(i);
      }
    }, []);
  };
  function iE(e) {
    let r = e.closest(".history-diff-text-highlight");
    return !!r && r.dataset.historyChangeId;
  }
  let iS = [{
    rule: e => {
      var r;
      return e && ((r = e.classList) === null || r === undefined ? undefined : r.contains("history-block-fold-controller"));
    },
    find: e => {
      var i;
      let o = (i = e.parentElement) === null || i === undefined ? undefined : i.parentElement?.childNodes;
      if (!o) {
        return false;
      }
      let n = [...o].find(e => e.classList.contains("history-diff-text-highlight"));
      return !!n && n.dataset.historyChangeId;
    }
  }];
  let iO = e => {
    for (let r of iS) {
      if (r.rule(e)) {
        return r.find;
      }
    }
    return iE;
  };
  class iw extends editorContextFacade.EditorContextFacade {
    getWrapper(e) {
      return r => {
        let i = 0;
        let o = reactCoreLibraryReexport.useRef(null);
        let [n, l] = reactCoreLibraryReexport.useState([]);
        let [, s] = reactCoreLibraryReexport.useState(i);
        let a = reactCoreLibraryReexport.useRef([]);
        let c = reactCoreLibraryReexport.useRef(null);
        let d = reactCoreLibraryReexport.useRef([]);
        let u = () => {
          if (a.current.length > 0) {
            let e = a.current.filter(e => {
              let {
                hover: r,
                focus: i,
                focusFirst: o
              } = e;
              return r || i || o;
            });
            d.current.forEach(r => {
              e.forEach(e => {
                let {
                  blockId: o
                } = e;
                if (P(this.blockManager.layoutManager, o, r)) {
                  s(++i);
                }
              });
            });
            d.current = [];
          }
        };
        let h = reactCoreLibraryReexport.useCallback(e => {
          let r = e ?? c.current;
          if (r) {
            l(e => {
              let i = e.findIndex(e => e.changeId === r);
              if (i < 0) {
                return e;
              }
              let o = e[i];
              o.hover = false;
              this.blockManager.eventEmitter.removeListener(renderEventConstants.leaveBuffer, h, o.blockId);
              c.current = null;
              return [...e];
            });
          }
        }, []);
        let f = reactCoreLibraryReexport.useCallback(e => {
          let r = iO(e.target);
          let i = e.target instanceof HTMLElement && r(e.target);
          if (!i) {
            return;
          }
          let o = n.findIndex(e => e.changeId === i);
          if (o < 0) {
            return;
          }
          let s = n[o];
          s.hover = true;
          this.blockManager.eventEmitter.addListener(renderEventConstants.leaveBuffer, h, s.blockId);
          c.current = i;
          l([...n]);
        }, [n]);
        let g = reactCoreLibraryReexport.useCallback(e => {
          let r = iO(e.target);
          let i = e.target instanceof HTMLElement && r(e.target);
          if (i && i !== (e.relatedTarget instanceof HTMLElement && r(e.relatedTarget))) {
            e.stopPropagation();
            h(i);
          }
        }, [n]);
        let m = reactCoreLibraryReexport.useCallback(e => {
          let {
            detail: r
          } = e;
          let {
            authorId: i,
            changeId: o,
            editType: n,
            setFocus: s,
            editor: c,
            start: d,
            end: h,
            blockId: f,
            extra: g
          } = r;
          let m = a.current.findIndex(e => {
            let {
              changeId: r
            } = e;
            return o === r;
          });
          let p = userColorConfigManager.userConfigManager.getUserInfoById(i);
          let y = p.name;
          if (docUpgradeConfigConstants.isUpgradeToDocx && userColorConfigManager.userConfigManager.displaySystemName) {
            y = userColorConfigManager.userConfigManager.getSystemDisplayName();
          }
          let b = {
            authorId: i,
            changeId: o,
            title: docBlockConstants_1.getEditTypeLabel(n, y),
            start: d,
            end: h,
            editor: c,
            userInfo: p,
            setFocus: [s],
            blockId: f,
            extra: g
          };
          if (m > -1) {
            let e = a.current[m];
            e.setFocus.push(s);
            a.current[m] = {
              ...b,
              start: e.start,
              setFocus: e.setFocus
            };
            l([...a.current]);
            u();
            return;
          }
          a.current = [...a.current, b];
          l([...a.current]);
          u();
        }, []);
        let p = reactCoreLibraryReexport.useCallback(e => {
          let {
            changeId: r,
            isFirstDiff: i
          } = e;
          let o = n.findIndex(e => e.changeId === r);
          if (!(o < 0)) {
            n[o].focus = true;
            n[o].focusFirst = i;
            n[o].setFocus.forEach(e => e(true, i));
            n[o].editor.once("paint", () => {
              l([...n]);
            });
          }
        }, [n]);
        let y = reactCoreLibraryReexport.useCallback(e => {
          let {
            changeId: r
          } = e;
          let i = n.findIndex(e => e.changeId === r);
          if (!(i < 0)) {
            n[i].focus = false;
            n[i].focusFirst = false;
            n[i].setFocus.forEach(e => e(false));
            n[i].editor.once("paint", () => {
              l([...n]);
            });
          }
        }, [n]);
        iI(() => {
          docxEditorEventConstantsAndManager_1.globalEventEmitter.on(docxEditorEventConstantsAndManager_1.historyDiffTextHighlightEvent, m);
          return () => {
            docxEditorEventConstantsAndManager_1.globalEventEmitter.off(docxEditorEventConstantsAndManager_1.historyDiffTextHighlightEvent, m);
          };
        });
        reactCoreLibraryReexport.useEffect(() => {
          docxEditorEventConstantsAndManager_1.loadingEventEmitter.on(docxEditorEventConstantsAndManager_1.focusEventConstants.FOCUS, p);
          docxEditorEventConstantsAndManager_1.loadingEventEmitter.on(docxEditorEventConstantsAndManager_1.focusEventConstants.UNFOCUS, y);
          return () => {
            docxEditorEventConstantsAndManager_1.loadingEventEmitter.off(docxEditorEventConstantsAndManager_1.focusEventConstants.FOCUS, p);
            docxEditorEventConstantsAndManager_1.loadingEventEmitter.off(docxEditorEventConstantsAndManager_1.focusEventConstants.UNFOCUS, y);
          };
        }, [m, p, y]);
        let b = e => {
          let {
            layoutRecalculatedNodes: r
          } = e;
          d.current = Array.from(new Set([...d.current, ...r]));
          u();
        };
        let v = () => s(++i);
        reactCoreLibraryReexport.useEffect(() => {
          this.blockManager.eventEmitter.addListener(renderEventConstants.viewportLocked, () => v);
          this.blockManager.eventEmitter.addListener(renderEventConstants.postLayoutEvent, b);
          return () => {
            this.blockManager.eventEmitter.removeListener(renderEventConstants.viewportLocked, () => v);
            this.blockManager.eventEmitter.removeListener(renderEventConstants.postLayoutEvent, b);
          };
        }, []);
        reactCoreLibraryReexport.useEffect(() => {
          let r = n.filter(e => e.focus)[0]?.blockId;
          if (r) {
            this.blockManager.addListener(renderEventConstants.enterBuffer, v, r);
          }
          return () => {
            if (r) {
              this.blockManager.removeListener(renderEventConstants.enterBuffer, v, r);
            }
          };
        }, [n]);
        let _ = n.filter(e => {
          let {
            hover: r,
            focus: i,
            focusFirst: o
          } = e;
          return r || i || o;
        }).map(e => {
          let {
            userInfo: r,
            title: i,
            hover: n,
            focus: l,
            focusFirst: s,
            start: a,
            editor: c,
            changeId: d,
            blockId: u,
            extra: h
          } = e;
          if (!o.current || !this.blockManager.layoutManager.isBlockActive(u)) {
            return null;
          }
          let f = {
            top: 0,
            left: 0
          };
          if (l || n) {
            c.rectModule.clearCache();
            f = c.rectModule.getRawRangeRect({
              start: a,
              end: a
            });
          }
          let g = o.current.getBoundingClientRect();
          let m = f.left - g.left;
          if (h == null ? undefined : h.additionalOffset) {
            m -= h.additionalOffset;
          }
          let p = f.top - g.top;
          let y = g.width - m + g.left;
          let b = {
            style: {
              top: p,
              left: m,
              maxWidth: y,
              backgroundColor: r.textColor
            },
            title: i,
            hover: n,
            focus: l,
            focusFirst: s
          };
          return reactJsxRuntimeCoreReexport.jsx(B, {
            ...b
          }, d);
        });
        return reactJsxRuntimeCoreReexport.jsxs("div", {
          className: "history-diff-text-highlight-extension",
          ref: o,
          onMouseOver: f,
          onMouseOut: g,
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            className: "history-diff-text-highlight-extension-popovers",
            children: _
          }), reactJsxRuntimeCoreReexport.jsx(e, {
            ...r
          })]
        });
      };
    }
  }
  var orderedBlockConstants = require("ordered-block-constants") /*id: 976830*/;
  var orderedBlockOrderManager = require("ordered-block-order-manager") /*id: 886188*/;
  var revisionConnectorServiceToken = require("revision-connector-service-token") /*id: 762963*/;
  var revisionServiceProvider = require("revision-service-provider") /*id: 493533*/;
  var docxRevisionExtensionInit = require("docx-revision-extension-init") /*id: 606712*/;
  var diProviderRevisionBaseService = require("di-provider-revision-base-service") /*id: 951946*/;
  var revisionExtensionServiceToken = require("revision-extension-service-token") /*id: 755911*/;
  var docxRevisionSignals = require("docx-revision-signals") /*id: 196153*/;
  var layoutManagerProviderName = require("layout-manager-provider-name") /*id: 474937*/;
  var layoutNodeBuilderProvider = require("layout-node-builder-provider") /*id: 163942*/;
  var layoutNodeChangesContext = require("layout-node-changes-context") /*id: 666088*/;
  var docxVirtualLayoutManagerProvider = require("docx-virtual-layout-manager-provider") /*id: 338375*/;
  let iZ = "base";
  let iU = "editable";
  let iV = undefined;
  let iY = [{
    n: "activecomment",
    s: docxStageTriggerRegistry.registerDocxStages,
    m: [[iZ, {
      k: 331,
      t: 0,
      a: true,
      y: iV,
      p: [syncedCommentServiceProvider.syncedActiveCommentService],
      e: [],
      d: [[353], [450]],
      l: () => require.e("module_activecomment") /*id: 88485*/.then(require.bind(require, "synced-active-comment-service-provider") /*id: 230374*/)
    }]]
  }, {
    n: "block-mask",
    m: [[iZ, {
      k: 111,
      t: 0,
      a: false,
      y: blockMaskUpdaterProviderRegistration.registerBlockMaskUpdaterProvider,
      p: [blockMaskUpdaterProvider.blockMaskUpdaterName],
      e: [],
      d: [[358], []]
    }]]
  }, {
    n: "block/bookmark",
    s: e$,
    bt: [docBlockTypeConstants.blockTypeConstants.BOOKMARK],
    m: [[iZ, {
      k: 71,
      t: 2,
      a: true,
      y: iV,
      p: [],
      e: [],
      d: [[358, 326, 353, 10], [111]],
      l: () => require.e("module_block_bookmark") /*id: 70225*/.then(require.bind(require, "docx-bookmark-view-registration") /*id: 17626*/)
    }]]
  }, {
    n: "block/callout",
    bt: [docBlockTypeConstants.blockTypeConstants.CALLOUT],
    m: [[iZ, {
      k: 84,
      t: 2,
      a: false,
      y: function () {
        docxCalloutBlockRegister.registerCalloutView([...docxEditorProviderRegistry.getHistoryDiffProviders(), ...docxEditorProviderRegistry.getZeroSpaceProviders(), docxBlockContainerProvider.blockContainerName, historyDiffProviderNames.historyDiffAlignableHighlightProvider]);
      },
      p: [],
      e: [],
      d: [[358, 353, 10, 385], [111]]
    }]]
  }, {
    n: "block/code",
    s: eK,
    bt: ["code"],
    m: [[iZ, {
      k: 105,
      t: 2,
      a: true,
      y: iV,
      p: [],
      e: [],
      d: [[341, 353, 10, 385, 406, 384, 388, 358, 326, 371, 449], [351, 411, 111, 277, 349, 438, 390]],
      l: () => Promise.all([require.e("virtual-list-module") /*id: 11464*/, require.e("menu-component-chunk") /*id: 70389*/, require.e("code-block-fold-highlight") /*id: 22007*/, require.e("module_block_code") /*id: 39855*/]).then(require.bind(require, "docx-code-block-handler") /*id: 316850*/)
    }]]
  }, {
    n: "block/divider",
    bt: [docBlockTypeConstants.blockTypeConstants.DIVIDER],
    m: [[iZ, {
      k: 123,
      t: 2,
      a: false,
      y: function () {
        docxDividerBlockViewModel.registerDividerViewModel([...docxEditorProviderRegistry.getHistoryDiffProviders(), ...docxEditorProviderRegistry.getZeroSpaceProviders(), docxAutoSelectProvider.autoSelectProvider]);
      },
      p: [],
      e: [],
      d: [[358, 10], [111]]
    }]]
  }, {
    n: "block/fallback",
    bt: [docBlockTypeConstants.blockTypeConstants.FALLBACK],
    m: [[iZ, {
      k: 130,
      t: 2,
      a: false,
      y: function () {
        docxFallbackBlockViewModelRegistration.registerFallbackBlockViewModel([...docxEditorProviderRegistry.getHistoryDiffProviders()]);
      },
      p: [fallbackServiceName.fallbackServiceName, layoutNodeBuilderProvider.layoutNodeBuilder],
      e: [],
      d: [[358, 385, 457, 10], [111]]
    }]]
  }, {
    n: "block/file",
    s: e8,
    bt: [docxViewConfigConstants.viewTypeFile],
    m: [[iZ, {
      k: 132,
      t: 2,
      a: true,
      y: iV,
      p: [layoutNodeBuilderProvider.layoutNodeBuilder, vcMutedProviderName.vcMutedProviderName],
      e: [],
      d: [[358, 449, 10, 353, 384], [338, 111]],
      l: () => Promise.all([require.e("video-player-xgplayer") /*id: 2348*/, require.e("media-source-playback-engine") /*id: 36277*/, require.e("xgplayer-media-player") /*id: 12575*/, require.e("media-player-i18n-download") /*id: 64826*/, require.e("hls-video-player") /*id: 92744*/, require.e("module_block_file") /*id: 12558*/]).then(require.bind(require, "docx-editor-providers-setup") /*id: 884384*/)
    }]]
  }, {
    n: "block/grid",
    bt: [docBlockTypeConstants.blockTypeConstants.GRID, docBlockTypeConstants.blockTypeConstants.GRID_COLUMN],
    m: [[iZ, {
      k: 139,
      t: 2,
      a: false,
      y: function () {
        docxGridColumnViewRegistration.registerGridBlock([...docxEditorProviderRegistry.getHistoryDiffProviders()]);
        docxGridColumnViewRegistration.registerGridColumnBlock([...docxEditorProviderRegistry.getHistoryDiffProviders()]);
      },
      p: [editCheckerProvider.editCheckerProvider, gridLayoutManager.GridLayoutManager, gridColumnLayoutNodeConfigProvider.GridColumnLayoutNodeConfigProvider, layoutNodeBuilderProvider.layoutNodeBuilder],
      e: [],
      d: [[358, 353, 406, 10], [111]]
    }]]
  }, {
    n: "block/heading",
    bt: ["heading1", "heading2", "heading3", "heading4", "heading5", "heading6", "heading7", "heading8", "heading9", "headingn"],
    m: [[iZ, {
      k: 145,
      t: 2,
      a: false,
      y: function () {
        let e = to();
        let r = docxEditorProviderAggregator.getAnchorProvidersWithHeading();
        registerHeadingBlocks.registerHeadingBlocks(e, r);
      },
      p: [editCheckerProvider.editCheckerProvider],
      e: [],
      d: [[353, 406, 326, 371, 449, 358, 10], [438, 390, 277, 111]]
    }]]
  }, {
    n: "block/image",
    bt: [docBlockTypeConstants.blockTypeConstants.IMAGE],
    m: [[iZ, {
      k: 160,
      t: 2,
      a: false,
      y: function () {
        docxImageEditorPlugin.initImageEditor([...docxEditorProviderRegistry.getHistoryDiffProviders(), ...docxEditorProviderRegistry.getZeroSpaceProviders(), [docxAutoSelectProvider.autoSelectProvider, {
          isEffectiveInPart: true
        }], ...docxEditorProviderRegistry.getResourceBlockProviders()]);
      },
      p: [layoutNodeBuilderProvider.layoutNodeBuilder, imageManagerProviderName.imageManagerName, imageDataCacheStorageToken.imageDataCacheToken, imageOperationServiceProvider.imageOpServiceName, eventBreakRuleToken.eventBreakRuleToken],
      e: [],
      d: [[353, 358, 439, 385, 338, 391, 10], [111]]
    }]]
  }, {
    n: "block/list",
    bt: ["ordered", "bullet"],
    m: [[iZ, {
      k: 168,
      t: 2,
      a: false,
      y: function () {
        let e = to();
        let r = docxProviderNameCollectors.getFoldReminderHighlightProviderNamesWithOrdered();
        let i = docxEditorProviderCollections.getFoldReminderHighlightProviderNames();
        docListBlockRegistration.registerOrderedList(e, r);
        docListBlockRegistration.registerBulletList(e, i);
      },
      p: [editCheckerProvider.editCheckerProvider],
      e: [],
      d: [[353, 406, 326, 371, 449, 358, 10], [438, 390, 277, 111]]
    }]]
  }, {
    n: "block/mermaid",
    bt: ["mermaid"],
    m: [[iZ, {
      k: 175,
      t: 2,
      a: true,
      y: iV,
      p: [],
      e: [],
      d: [[406, 10, 358], [111]],
      l: () => Promise.all([require.e("d3-interpolation-utils") /*id: 89990*/, require.e("d3-axis-svg-geometry") /*id: 41069*/, require.e("core-utilities-config") /*id: 51747*/, require.e("markdown-diagram-utils") /*id: 54999*/, require.e("roughjs-shape-renderer") /*id: 68615*/, require.e("menu-component-chunk") /*id: 70389*/, require.e("js-yaml-core-library") /*id: 23945*/, require.e("module_block_mermaid") /*id: 71036*/]).then(require.bind(require, "register-mermaid-view-model-providers") /*id: 606117*/)
    }]]
  }, {
    n: "block/page",
    bt: ["page"],
    m: [[iZ, {
      k: 193,
      t: 2,
      a: false,
      y: function () {
        let e = to();
        let r = docxEditorProviderUtils.getHighlightNames();
        docxPageBlockComponent.initPageBlock(e, r);
      },
      p: [editCheckerProvider.editCheckerProvider, layoutNodeBuilderProvider.layoutNodeBuilder],
      e: [],
      d: [[353, 406, 326, 371, 449, 358, 10, 395, 385], [438, 390, 277, 111]]
    }]]
  }, {
    n: "block/pending",
    bt: [docBlockTypeConstants.blockTypeConstants.PENDING],
    m: [[iZ, {
      k: 199,
      t: 2,
      a: false,
      y: docxPendingBlockViewModel.registerPendingBlockViewModel,
      p: [pendingClientVarProvider.pendingClientVarId, layoutNodeBuilderProvider.layoutNodeBuilder],
      e: [],
      d: [[358, 395, 348, 10], [111]]
    }]]
  }, {
    n: "block/quote",
    bt: ["quote", "quote_container"],
    m: [[iZ, {
      k: 210,
      t: 2,
      a: false,
      y: function () {
        let e = to();
        let r = docxEditorProviderGetters.getHistoryDiffProviders();
        let i = docxEditorProviderGetters.getHistoryDiffZeroSpaceProviders();
        docxQuoteBlockCore.initQuotePdfFooter(e, r);
        docxQuoteBlockCore.registerQuoteBlock(i);
      },
      p: [editCheckerProvider.editCheckerProvider],
      e: [],
      d: [[353, 406, 326, 371, 449, 358, 10], [438, 390, 277, 111]]
    }]]
  }, {
    n: "block/root",
    bt: ["root"],
    m: [[iZ, {
      k: 216,
      t: 2,
      a: false,
      y: function () {
        docxEditorCore.updateGlobalExts([tk, getTextHighlightProviderName.getProviderName]);
      },
      p: [],
      e: [],
      d: [[], []]
    }]]
  }, {
    n: "block/sheet",
    s: tx,
    bt: [docBlockTypeConstants.blockTypeConstants.SHEET],
    m: [[iZ, {
      k: 225,
      t: 2,
      a: true,
      y: iV,
      p: [sheetBlockdepLoaderProvider.sheetBlockdepLoader, layoutNodeBuilderProvider.layoutNodeBuilder, eventBreakRuleToken.eventBreakRuleToken],
      e: [],
      d: [[353, 358, 10, 409, 406, 276, 384], [111]],
      l: () => require.e("module_block_sheet") /*id: 93700*/.then(require.bind(require, "sheet-block-provider-registration-module") /*id: 949150*/)
    }]]
  }, {
    n: "block/table",
    bt: [docBlockTypeConstants.blockTypeConstants.TABLE, docBlockTypeConstants.blockTypeConstants.CELL],
    m: [[iZ, {
      k: 245,
      t: 2,
      a: false,
      y: function () {
        let e = {
          ...tableLayoutConfiguration.tableLayoutConfig.scrollableOptions,
          ...tableLayoutConfiguration.tableLayoutConfig.historyScrollableOptions,
          appMode: viewModeConstants.viewModes.HISTORY
        };
        docxTableBlockView.registerTableBlock([...docxEditorProviderRegistry.getZeroSpaceProviders(), docxEditorProviderRegistry.getScrollProviderConfig(docBlockTypeConstants.tableTypeConstants.TABLE, e), tS, tE, ...docxEditorProviderRegistry.getBlockRevisionProviders()], {
          scrollerContainerClass: tableLayoutConstants_1.containerConstants.HISTORY
        });
        docxTableBlockView.registerCellBlock([tO]);
      },
      p: [diTableCellChildrenCompensation.tableCellChildrenKey, layoutNodeBuilderProvider.layoutNodeBuilder, tableBasicTableUiToken.tableBasicTableToken, cellMinWidthTableUiService.cellMinWidthTableId, cellSelectionTableService.cellSelectionToken, tableVisibleWidthProvider.tableWidthProvider, tableWillDeleteCellProvider.tableWillDelCellId, tableHeaderClickSignalHandler.tableHeaderClickSignal, tableHeaderClickSignalHandler.tableHeaderClickSignalValue, tableHeaderSelectingSignal.setTableHeaderSelect, tableHeaderSelectingSignal.tableHeaderSelecting, tableCellDeleteSignalModule.getTableWillDeleteCellSignal, tableCellDeleteSignalModule.setTableWillDeleteCellSignal],
      e: [],
      d: [[358, 353, 406, 439, 10, 341], [111]]
    }]]
  }, {
    n: "block/text",
    bt: ["text"],
    m: [[iZ, {
      k: 268,
      t: 2,
      a: false,
      y: function () {
        let e = to();
        let r = docxEditorProviderCollections.getFoldReminderHighlightProviderNames();
        textBlockWrapperComponent.registerTextBlock(e, r);
      },
      p: [],
      e: [],
      d: [[353, 406, 326, 371, 449, 358, 10], [438, 390, 277, 111]]
    }]]
  }, {
    n: "block/textual",
    m: [[iZ, {
      k: 277,
      t: 4,
      a: false,
      y: docxEditorKitRegistration.registerDocxEditorKit,
      p: [contentStateServiceProvider.contentStateService, editorKitProviderName.editorKitProviderName, docxTextualDependencyConsts.textualDepProvider, smartCorrectionServiceToken.smartCorrectionToken, buttonTriggerSignalModule.setSignal, buttonTriggerSignalModule.signalName],
      e: [[mentionSharePanelProvider.mentionProviderName, 16]],
      d: [[10], []]
    }], [iU, {
      k: 278,
      t: 0,
      a: true,
      y: iV,
      p: [],
      e: [],
      d: [[], [277]],
      et: "editable_required",
      l: () => require.e("page_editable_required_resource") /*id: 33591*/.then(require.bind(require, "docx-editor-init-resources") /*id: 244440*/)
    }]]
  }, {
    n: "block/todo",
    bt: ["todo"],
    m: [[iZ, {
      k: 282,
      t: 2,
      a: false,
      y: function () {
        let e = [...editorPluginListBuilder.getEditorPluginList(), [docxInlineBlockRenderers.TodoLineThroughRenderer], [historyDiffHighlightRenderer.HistoryDiffHighlight]];
        let r = docxEditorProviderCollections.getFoldReminderHighlightProviderNames();
        docxImageRenderer.DocxImageRenderer(e, r);
      },
      p: [editCheckerProvider.editCheckerProvider],
      e: [],
      d: [[406, 10, 353, 449, 326, 371], [277, 358, 111, 276, 438, 390]]
    }]]
  }, {
    n: "block/view",
    bt: [viewTypeConstants.viewTypeName],
    m: [[iZ, {
      k: 296,
      t: 2,
      a: false,
      y: function () {
        docBlockViewModelRegister.registerBlockViewModel([...docxEditorProviderRegistry.getHistoryDiffProviders()]);
      },
      p: [],
      e: [],
      d: [[358, 353, 10], [111]]
    }]]
  }, {
    n: "caption",
    m: [[iZ, {
      k: 112,
      t: 4,
      a: false,
      y: docxCaptionModuleRegistrar.registerCaptionModule,
      p: [],
      e: [[docxCaptionSlotDefinition.getCaptionProvider, 4]],
      d: [[277, 358, 406, 10], []]
    }], [iU, {
      k: 113,
      t: 0,
      a: true,
      y: iV,
      p: [],
      e: [],
      d: [[277, 112], []],
      et: "editable_required",
      l: () => require.e("page_editable_required_resource") /*id: 33591*/.then(require.bind(require, "docx-caption-module-init") /*id: 827088*/)
    }]]
  }, {
    n: "dynamic-extension-trigger",
    s: dynamicExtensionTriggerRegistrar.registerDynamicExtensionTrigger,
    m: []
  }, {
    n: "dynamic-trigger",
    s: dynamicModuleBootstrapTrigger.registerDynamicBootstrapTrigger,
    m: []
  }, {
    n: "extensions/autoselect",
    m: [[iZ, {
      k: 30,
      t: 4,
      a: false,
      y: autoSelectProviderWrapper.registerAutoSelectProvider,
      p: [],
      e: [[docxAutoSelectProvider.autoSelectProvider, 16]],
      d: [[10], []]
    }]]
  }, {
    n: "extensions/block-background-color",
    m: [[iZ, {
      k: 33,
      t: 4,
      a: false,
      y: registerBackgroundMaskEffect.registerBackgroundMaskEffect,
      p: [],
      e: [[getBlockBackgroundColorProvider.blockBackgroundColorProviderName, 8]],
      d: [[10], []]
    }]]
  }, {
    n: "extensions/block-container",
    m: [[iZ, {
      k: 35,
      t: 4,
      a: false,
      y: docxBlockContainerPlugin.BlockContainerPlugin,
      p: [],
      e: [[docxBlockContainerProvider.blockContainerName, 16]],
      d: [[10], []]
    }]]
  }, {
    n: "extensions/block-loading",
    m: [[iZ, {
      k: 37,
      t: 4,
      a: false,
      y: docxBlockLoadingWrapperProvider.registerBlockLoadingProviders,
      p: [diProviderHideLoadingSubject.hideLoadingSubject],
      e: [[providerNameConstants.blockLoadingProvider, 16], [providerNameConstants.lazyRecordLoadingProvider, 16], [providerNameConstants.noLazyRecordLoadingProvider, 2]],
      d: [[341, 449, 10, 353], [385]]
    }]]
  }, {
    n: "extensions/resource-block",
    m: [[iZ, {
      k: 51,
      t: 4,
      a: false,
      y: docShortcutComponent.DocShortcutComponent,
      p: [],
      e: [[resourceBlockProviderName.resourceBlockName, 16]],
      d: [[10], []]
    }]]
  }, {
    n: "extensions/revision",
    m: [[iZ, {
      k: 52,
      t: 4,
      a: false,
      y: docxBlockRevisionRenderer.registerBlockRevisionRenderer,
      p: [],
      e: [[docxBlockRevisionProvider.blockRevisionName, 18]],
      d: [[449, 10], []]
    }]]
  }, {
    n: "extensions/scrollable",
    m: [[iZ, {
      k: 54,
      t: 4,
      a: false,
      y: docxScrollableViewProvider.registerScrollableView,
      p: [],
      e: [[docxScrollableConstants.scrollProviderName, 16]],
      d: [[10, 353], []]
    }]]
  }, {
    n: "extensions/zero-space",
    m: [[iZ, {
      k: 63,
      t: 4,
      a: false,
      y: zeroSpaceProviderRegistration.registerZeroSpaceProvider,
      p: [],
      e: [[zeroSpaceProviderName.zeroSpaceProviderName, 3]],
      d: [[10], []]
    }]]
  }, {
    n: "fold",
    m: [[iZ, {
      k: 442,
      t: 0,
      a: false,
      y: foldProviderRegistration.registerFoldProvider,
      p: [foldProviderAccessor.foldProvider],
      e: [],
      d: [[359], []]
    }]]
  }, {
    n: "fold/extension",
    m: [[iZ, {
      k: 441,
      t: 4,
      a: false,
      y: docxFoldViewExtension.DocxFoldExtension,
      p: [blockQueryProviderName.blockQueryProvider],
      e: [[docxFoldProviderName.foldProviderName, 2]],
      d: [[442, 353, 10], []]
    }]]
  }, {
    n: "history-placeholder",
    bt: [docxHistoryConstants.HistoryDragConsts.HISTROY_DRAG_PLACEHOLDER],
    m: [[iZ, {
      k: 6,
      t: 2,
      a: false,
      y: function () {
        docxEditorCore.registerViewModel($, {
          viewCreator: K
        });
      },
      p: [],
      e: [],
      d: [[358, 10], [111]]
    }]]
  }, {
    n: "infra/block-rect",
    m: [[iZ, {
      k: 341,
      t: 0,
      a: false,
      y: docxBlockRectService.registerBlockRect,
      p: [blockRectServiceProvider.blockRectServiceId, blockRectGetterToken.blockRectGetterName],
      e: [],
      d: [[358, 457], []]
    }]]
  }, {
    n: "infra/block-visibility",
    m: [[iZ, {
      k: 345,
      t: 0,
      a: false,
      y: blockVisibilityProviderRegistration.registerBlockVisibilityProvider,
      p: [blockVisibilityProviderName.blockVisibilityProvider],
      e: [],
      d: [[10], []]
    }]]
  }, {
    n: "infra/bootstrap-history",
    m: [[iZ, {
      k: 7,
      t: 0,
      a: false,
      y: function () {
        docxEditorCore.onInitHook(() => {
          let e = dependencyInjectionContainer.instantiate(ei);
          e.init();
          return () => {
            e.destroy();
          };
        });
      },
      p: [],
      e: [],
      d: [[348], []]
    }]]
  }, {
    n: "infra/click-root",
    m: [[iZ, {
      k: 346,
      t: 0,
      a: false,
      y: docxClickRootService.initClickRootSvc,
      p: [clickRootServiceProvider.clickRootService],
      e: [],
      d: [[406], []]
    }]]
  }, {
    n: "infra/client-var",
    m: [[iZ, {
      k: 348,
      t: 0,
      a: false,
      y: clientVarProviderRegistration.registerClientVarProvider,
      p: [clientVarProviderName.clientVarProvider],
      e: [],
      d: [[], []]
    }]]
  }, {
    n: "infra/clipboard",
    m: [[iZ, {
      k: 349,
      t: 0,
      a: false,
      y: docxClipboardServiceProvider.registerClipboardServiceProvider,
      p: [clipboardServiceProvider.clipboardServiceId],
      e: [],
      d: [[372, 358, 406], [391]]
    }], [iU, {
      k: 350,
      t: 0,
      a: true,
      y: iV,
      p: [],
      e: [],
      d: [[358, 376, 391, 406, 353, 449, 160, 349], [438]],
      et: "editable_delay",
      l: () => Promise.all([require.e("editor-core-selection") /*id: 13032*/, require.e("moment-locales-bundle") /*id: 85547*/, require.e("emotion-focus-utils") /*id: 21069*/, require.e("app-constants-and-enums") /*id: 86326*/, require.e("ui-framework-utilities") /*id: 57660*/, require.e("virtual-scrolling-reconciler") /*id: 85844*/, require.e("delta-and-changeset-operations") /*id: 46252*/, require.e("menu-component-chunk") /*id: 70389*/, require.e("renderer-slate-core") /*id: 18653*/, require.e("vendor-utilities-bundle") /*id: 40789*/, require.e("vendor-react-core") /*id: 75828*/, require.e("doc-editor-utilities") /*id: 92677*/, require.e("docx-block-error-handling") /*id: 29302*/, require.e("editor-inline-embeds") /*id: 76856*/, require.e("docx-block-management") /*id: 83252*/, require.e("docx-editor-clipboard") /*id: 7245*/, require.e("docx-editor-core") /*id: 8716*/, require.e("webpack-modules-ui-components") /*id: 32240*/, require.e("page_editable_delay_resource") /*id: 68859*/]).then(require.bind(require, "clipboard-paste-hooks-registrar") /*id: 30294*/)
    }]]
  }, {
    n: "infra/code-fold",
    s: docxEditorStageModuleTrigger.registerStageModule,
    m: [[iZ, {
      k: 351,
      t: 0,
      a: true,
      y: iV,
      p: [codeFoldResizeConstants.foldServiceName, codeFoldResizeConstants.resizeServiceName],
      e: [],
      d: [[277, 358, 406, 353], []],
      l: () => require.e("module_infra_code-fold") /*id: 50513*/.then(require.bind(require, "code-fold-shortcut-manager") /*id: 948854*/)
    }]]
  }, {
    n: "infra/collect-event",
    m: [[iZ, {
      k: 353,
      t: 0,
      a: false,
      y: docxEditorEventCollector.initEventCollector,
      p: [diProviderCollectEvent.collectEventName],
      e: [],
      d: [[], []]
    }]]
  }, {
    n: "infra/comment-events",
    m: [[iZ, {
      k: 356,
      t: 0,
      a: false,
      y: commentEventsProviderRegistration.registerCommentEventsProvider,
      p: [commentEventsProviderName.commentEventsToken],
      e: [],
      d: [[358], []]
    }]]
  }, {
    n: "infra/compatible-block-manager",
    m: [[iZ, {
      k: 358,
      t: 0,
      a: false,
      y: docxBlockManagerProvider.BlockManager,
      p: [blockManagerProviderName.blockManagerToken],
      e: [],
      d: [[406, 457, 409, 359, 348], []]
    }]]
  }, {
    n: "infra/compatible-editor-context",
    m: [[iZ, {
      k: 10,
      t: 0,
      a: false,
      y: function (e) {
        docxEditorCore.registerProviders([{
          provide: compatibleEditorContext_1.compatibleContext,
          useClass: ew
        }]);
        docxEditorCore.onInitHook(() => {
          dependencyInjectionContainer.get(compatibleEditorContext_1.compatibleContext).init(e);
        });
      },
      p: [compatibleEditorContext.compatibleContext],
      e: [],
      d: [[341, 358, 359, 406, 442, 353, 409, 348, 380], [438]]
    }]]
  }, {
    n: "infra/compatible-event-emitter",
    m: [[iZ, {
      k: 359,
      t: 0,
      a: false,
      y: docxEventEmitterProvider.eventEmitterProvider,
      p: [eventEmitterProviderName.eventEmitterProviderName],
      e: [],
      d: [[], []]
    }]]
  }, {
    n: "infra/embed-object",
    m: [[iZ, {
      k: 371,
      t: 0,
      a: false,
      y: embedObjectPermissionInit.initEmbedPermission,
      p: [embedObjectProviderName.embedObjectName],
      e: [],
      d: [[], []]
    }]]
  }, {
    n: "infra/feat-status",
    m: [[iZ, {
      k: 372,
      t: 0,
      a: false,
      y: docxFeatureStatusProvider.registerFeatStatus,
      p: [featStatusServiceProvider.featStatusProvider],
      e: [],
      d: [[], []]
    }]]
  }, {
    n: "infra/hook-service",
    m: [[iZ, {
      k: 376,
      t: 0,
      a: false,
      y: docxHookProviderRegistry.registerHookProviders,
      p: [hookServiceDiConstants.hookServiceToken],
      e: [],
      d: [[], []]
    }]]
  }, {
    n: "infra/image-viewer",
    s: registerDelayToFirstScreenMarker.registerDelayToFirstScreenMarker,
    m: [[iZ, {
      k: 377,
      t: 0,
      a: true,
      y: iV,
      p: [imageViewerManagerProvider.imageViewerManager],
      e: [],
      d: [[358, 10], []],
      l: () => require.e("module_infra_image-viewer") /*id: 81891*/.then(require.bind(require, "image-viewer-manager-provider_1") /*id: 441648*/)
    }]]
  }, {
    n: "infra/lazy-consumer",
    m: [[iZ, {
      k: 380,
      t: 0,
      a: false,
      y: lazyConsumerServiceProvider.registerLazyConsumerService,
      p: [lazyConsumerToken.lazyConsumerToken],
      e: [],
      d: [[359, 457], []]
    }]]
  }, {
    n: "infra/loadable-block-fetcher",
    m: [[iZ, {
      k: 384,
      t: 0,
      a: false,
      y: loadableBlockFetcherServiceProvider.registerLoadableBlockFetcherService,
      p: [loadableBlockFetcherProvider.loadableBlockToken],
      e: [],
      d: [[359, 457], []]
    }]]
  }, {
    n: "infra/loadable-block-scheduler",
    m: [[iZ, {
      k: 385,
      t: 0,
      a: false,
      y: docxTaskSchedulerInit.initDocxScheduler,
      p: [docxResourceSchedulerProvider.docxSchedulerProv, loadableBlockSchedulerProvider.schedulerProvider],
      e: [],
      d: [[353, 358, 359, 457], []]
    }]]
  }, {
    n: "infra/local-text-highlight",
    m: [[iZ, {
      k: 388,
      t: 4,
      a: false,
      y: docxTextHighlightProviderRegistration.registerTextHighlightProvider,
      p: [localTextHighlightProvider.localHighlightToken],
      e: [[getTextHighlightProviderName.getProviderName, 2]],
      d: [[10, 277, 358], []]
    }]]
  }, {
    n: "infra/main-layout-manager",
    m: [[iZ, {
      k: 389,
      t: 0,
      a: false,
      y: docxMainLayoutManager.initMainLayoutManager,
      p: [mainLayoutManagerProvider.mainLayoutManager],
      e: [],
      d: [[], []]
    }]]
  }, {
    n: "infra/mention-doc-manager",
    m: [[iZ, {
      k: 390,
      t: 0,
      a: false,
      y: mentionDocManagerProvider.registerMentionDocManager,
      p: [mentionDocManagerToken_1.mentionDocMgrToken, mentionDocDataUpdateProvider.mentionDocDataToken],
      e: [],
      d: [[], []]
    }]]
  }, {
    n: "infra/module-setting-service",
    m: [[iZ, {
      k: 391,
      t: 0,
      a: false,
      y: docxModuleSettingProvider.settingProvider,
      p: [moduleSettingProviderToken.moduleSettingToken],
      e: [],
      d: [[], []]
    }]]
  }, {
    n: "infra/oops",
    m: [[iZ, {
      k: 395,
      t: 0,
      a: false,
      y: docxErrorOopsServiceRegistrar.registerDocxErrorOopsServices,
      p: [pageOopsServiceProvider.pageOopsProvider, blockOopsServiceProvider.blockOopsServiceId],
      e: [],
      d: [[353, 406], []]
    }]]
  }, {
    n: "infra/print",
    s: docxEditorFirstScreenMarker.initFirstScreenMarker,
    m: [[iZ, {
      k: 399,
      t: 0,
      a: true,
      y: iV,
      p: [],
      e: [],
      d: [[358, 372, 376, 391], []],
      l: () => require.e("module_infra_print") /*id: 73563*/.then(require.bind(require, "docx-editor-print-hook-registrar") /*id: 313522*/)
    }]]
  }, {
    n: "infra/relation-manager",
    m: [[iZ, {
      k: 400,
      t: 0,
      a: false,
      y: docxRelationServiceProvider.registerRelationService,
      p: [relationServiceProviderName.relationServiceProviderName],
      e: [],
      d: [[358, 409, 353], []]
    }]]
  }, {
    n: "infra/selection",
    m: [[iZ, {
      k: 406,
      t: 0,
      a: false,
      y: docxEditorSelectionService.initSelectionProvider,
      p: [selectionServiceProviderName.selectionServiceKey, compatBrowserSelectionService.compatBrowserSvc],
      e: [],
      d: [[353], []]
    }]]
  }, {
    n: "infra/structure-query",
    m: [[iZ, {
      k: 409,
      t: 0,
      a: false,
      y: docxStructureQueryProvider.initStructureQuery,
      p: [structureQueryProvider.structureQueryToken],
      e: [],
      d: [[], []]
    }]]
  }, {
    n: "link",
    m: [[iZ, {
      k: 326,
      t: 0,
      a: false,
      y: docxEditorProviderRegistration.registerDocxEditorProviders,
      p: [linkServiceProvider.linkServiceProvider],
      e: [],
      d: [[353], []]
    }]]
  }, {
    n: "modules/flow-comment",
    m: [[iZ, {
      k: 438,
      t: 0,
      a: false,
      y: flowCommentService.initCommentService,
      p: [flowCommentServiceToken.commentServiceToken],
      e: [],
      d: [[356, 442, 406, 359, 358, 341, 353], []]
    }]]
  }, {
    n: "modules/flow-revision",
    m: [[iZ, {
      k: 439,
      t: 0,
      a: false,
      y: docxFlowCommentService.registerFlowCommentService,
      p: [flowRevisionServiceName.revisionServiceName],
      e: [],
      d: [[442, 406, 359, 358, 348, 341, 353], [438]]
    }]]
  }, {
    n: "modules/heading",
    m: [[iZ, {
      k: 443,
      t: 4,
      a: false,
      y: headingOrderExtensionInit.initHeadingOrder,
      p: [],
      e: [[docEditorConstants_1.headingProvider, 16]],
      d: [[10], []]
    }]]
  }, {
    n: "modules/history",
    m: [[iZ, {
      k: 444,
      t: 4,
      a: false,
      y: function () {
        docxEditorCore.registerViewExt(tE, i_);
        docxEditorCore.registerViewExt(historyDiffProviderNames.historyDiffAlignableHighlightProvider, im);
        docxEditorCore.registerViewExt(historyDiffProviderNames.historyDiffBlockHighlightProvider, iy);
        docxEditorCore.registerViewExt(tk, iv);
        docxEditorCore.registerViewExt(historyDiffHighlightProvider.diffHighlightName, iw);
        docxEditorCore.registerViewExt(tS, ix);
        docxEditorCore.registerViewExt(tO, iC);
        docxEditorCore.registerViewExt(ts, ib);
      },
      p: [],
      e: [[tE, 8], [historyDiffProviderNames.historyDiffAlignableHighlightProvider, 2], [historyDiffProviderNames.historyDiffBlockHighlightProvider, 16], [tk, 8], [historyDiffHighlightProvider.diffHighlightName, 16], [tS, 16], [tO, 16], [ts, 16]],
      d: [[10], []]
    }]]
  }, {
    n: "modules/ordered",
    m: [[iZ, {
      k: 446,
      t: 4,
      a: false,
      y: orderedBlockOrderManager.registerOrderedBlockExtensions,
      p: [],
      e: [[orderedBlockConstants.orderedProviderName, 16], [orderedBlockConstants.orderedMonitorName, 8]],
      d: [[10], []]
    }]]
  }, {
    n: "renderer",
    m: [[iZ, {
      k: 457,
      t: 1,
      a: false,
      y: docxVirtualLayoutManagerProvider.registerVirtualLayoutManager,
      p: [layoutManagerProviderName.layoutManagerToken, layoutNodeChangesContext.layoutNodeChanges],
      e: [],
      d: [[359, 389, 406, 442], []]
    }]]
  }, {
    n: "revision",
    m: [[iZ, {
      k: 449,
      t: 0,
      a: false,
      y: docxRevisionExtensionInit.initRevisionExt,
      p: [diProviderRevisionBaseService.revisionBaseService, revisionExtensionServiceToken.revisionExtSvcToken, docxRevisionSignals.setRevisionExt, docxRevisionSignals.getRevisionExt],
      e: [],
      d: [[400, 358], []]
    }], [iU, {
      k: 450,
      t: 0,
      a: true,
      y: iV,
      p: [revisionConnectorServiceToken.revisionConnectorToken, revisionServiceProvider.revisionServiceId, docxRevisionSignals.setRevisionStatus, docxRevisionSignals.getRevisionStatus, docxRevisionSignals.setRevisionStatus2, docxRevisionSignals.getRevisionStatus2, docxRevisionSignals.setActivateRev, docxRevisionSignals.getActivateRev, docxRevisionSignals.setDeactivateRev, docxRevisionSignals.getDeactivateRev, docxRevisionSignals.setRevisionData, docxRevisionSignals.getRevisionData, docxRevisionSignals.setRevisionEdit, docxRevisionSignals.getRevisionEdit],
      e: [],
      d: [[10, 400, 358, 341, 348, 380, 406, 449], [351, 438, 353]],
      et: "editable-revision",
      l: () => require.e("page_editable-revision_resource") /*id: 57653*/.then(require.bind(require, "docx-revision-service-init") /*id: 662957*/)
    }]]
  }, {
    n: "stage-trigger",
    s: docxIdleResourceController.registerIdleTrigger,
    m: []
  }, {
    n: "width-mode-control",
    m: [[iZ, {
      k: 28,
      t: 4,
      a: false,
      y: docxEditorContextFacade.EditorContext,
      p: [],
      e: [[docxWidthControlModeSlot.widthModeProvider, 4]],
      d: [[10], []]
    }]]
  }, {
    n: "infra/synced-reference-block-manager",
    s: docxEditorTriggerRegistration.registerDocxTrigger,
    m: [[iZ, {
      k: 411,
      t: 0,
      a: true,
      y: iV,
      p: [syncedRefBlockManagerToken.syncedRefBlockToken, syncedRefBlockSelProvider.syncedRefBlockKey],
      e: [],
      d: [[277, 358, 406, 457, 385, 353, 442], [380]],
      l: () => Promise.all([require.e("delta-and-changeset-operations") /*id: 46252*/, require.e("docx-ssr-collab-manager") /*id: 9960*/, require.e("module_infra_synced-reference-block-manager") /*id: 15277*/]).then(require.bind(require, "synced-ref-block-manager_1") /*id: 149783*/)
    }]]
  }, {
    n: "attachment-permission",
    m: [[iZ, {
      k: 338,
      t: 0,
      a: false,
      y: attachmentPermissionServiceProvider.registerAttachmentPermissionService,
      p: [attachmentPermissionService.attachmentPermSvc],
      e: [],
      d: [[353, 358], []]
    }]]
  }, {
    n: "mention-user-module",
    m: [[iZ, {
      k: 276,
      t: 0,
      a: false,
      y: docxMentionManagerProvider.registerMentionUserProvider,
      p: [mentionUserServiceProvider.mentionUserSvcKey],
      e: [],
      d: [[400, 359, 353], [358]]
    }]]
  }];
  let iG = [359, 389, 353, 406, 442, 457, 409, 348, 358, 338, 111, 341, 356, 438, 380, 10, 385, 84, 123, 130, 139, 326, 390, 371, 400, 449, 277, 145, 439, 391, 160, 168, 395, 193, 199, 210, 216, 245, 268, 276, 282, 296, 112, 30, 33, 35, 37, 51, 52, 54, 63, 441, 6, 345, 7, 346, 372, 349, 376, 384, 388, 443, 444, 446, 28];
  let iW = [{
    name: "clipboard-paste",
    async: true,
    merge: true,
    configs: [{
      l: () => Promise.all([require.e("delta-and-changeset-operations") /*id: 46252*/, require.e("vendor-utilities-bundle") /*id: 40789*/, require.e("docx-editor-clipboard") /*id: 7245*/, require.e("feat_clipboard-paste") /*id: 90580*/]).then(require.bind(require, "clipboard-paste-code-handler") /*id: 887184*/),
      mk: 349
    }, {
      l: () => Promise.all([require.e("delta-and-changeset-operations") /*id: 46252*/, require.e("vendor-utilities-bundle") /*id: 40789*/, require.e("docx-editor-clipboard") /*id: 7245*/, require.e("feat_clipboard-paste") /*id: 90580*/]).then(require.bind(require, "docx-paste-file-handler") /*id: 177294*/),
      mk: 349
    }, {
      l: () => Promise.all([require.e("delta-and-changeset-operations") /*id: 46252*/, require.e("vendor-utilities-bundle") /*id: 40789*/, require.e("docx-editor-clipboard") /*id: 7245*/, require.e("feat_clipboard-paste") /*id: 90580*/]).then(require.bind(require, "paste-grid-data-handler") /*id: 439785*/),
      mk: 349
    }, {
      l: () => Promise.all([require.e("delta-and-changeset-operations") /*id: 46252*/, require.e("vendor-utilities-bundle") /*id: 40789*/, require.e("docx-editor-clipboard") /*id: 7245*/, require.e("feat_clipboard-paste") /*id: 90580*/]).then(require.bind(require, "image-paste-block-handler") /*id: 821882*/),
      mk: 349
    }, {
      l: () => Promise.all([require.e("delta-and-changeset-operations") /*id: 46252*/, require.e("vendor-utilities-bundle") /*id: 40789*/, require.e("docx-editor-clipboard") /*id: 7245*/, require.e("feat_clipboard-paste") /*id: 90580*/]).then(require.bind(require, "clipboard-paste-lifecycle-config") /*id: 659410*/),
      mk: 349
    }, {
      l: () => Promise.all([require.e("delta-and-changeset-operations") /*id: 46252*/, require.e("vendor-utilities-bundle") /*id: 40789*/, require.e("docx-editor-clipboard") /*id: 7245*/, require.e("feat_clipboard-paste") /*id: 90580*/]).then(require.bind(require, "clipboard-paste-preprocess-hooks") /*id: 87310*/),
      mk: 349
    }, {
      l: () => Promise.all([require.e("delta-and-changeset-operations") /*id: 46252*/, require.e("vendor-utilities-bundle") /*id: 40789*/, require.e("docx-editor-clipboard") /*id: 7245*/, require.e("feat_clipboard-paste") /*id: 90580*/]).then(require.bind(require, "transform-into-quote-container") /*id: 810341*/),
      mk: 349
    }, {
      l: () => Promise.all([require.e("delta-and-changeset-operations") /*id: 46252*/, require.e("vendor-utilities-bundle") /*id: 40789*/, require.e("docx-editor-clipboard") /*id: 7245*/, require.e("feat_clipboard-paste") /*id: 90580*/]).then(require.bind(require, "clipboard-paste-data-handlers_1") /*id: 988936*/),
      mk: 349
    }, {
      l: () => Promise.all([require.e("delta-and-changeset-operations") /*id: 46252*/, require.e("vendor-utilities-bundle") /*id: 40789*/, require.e("docx-editor-clipboard") /*id: 7245*/, require.e("feat_clipboard-paste") /*id: 90580*/]).then(require.bind(require, "clipboard-paste-sheet-filter-plugin") /*id: 804456*/),
      mk: 349
    }, {
      l: () => Promise.all([require.e("delta-and-changeset-operations") /*id: 46252*/, require.e("vendor-utilities-bundle") /*id: 40789*/, require.e("docx-editor-clipboard") /*id: 7245*/, require.e("feat_clipboard-paste") /*id: 90580*/]).then(require.bind(require, "docx-table-paste-handler-hooks") /*id: 554895*/),
      mk: 349
    }, {
      l: () => Promise.all([require.e("delta-and-changeset-operations") /*id: 46252*/, require.e("vendor-utilities-bundle") /*id: 40789*/, require.e("docx-editor-clipboard") /*id: 7245*/, require.e("feat_clipboard-paste") /*id: 90580*/]).then(require.bind(require, "clipboard-paste-hooks-config") /*id: 832707*/),
      mk: 349
    }, {
      l: () => Promise.all([require.e("delta-and-changeset-operations") /*id: 46252*/, require.e("vendor-utilities-bundle") /*id: 40789*/, require.e("docx-editor-clipboard") /*id: 7245*/, require.e("feat_clipboard-paste") /*id: 90580*/]).then(require.bind(require, "clipboard-selection-handler") /*id: 609893*/),
      mk: 349
    }, {
      l: () => Promise.all([require.e("delta-and-changeset-operations") /*id: 46252*/, require.e("vendor-utilities-bundle") /*id: 40789*/, require.e("docx-editor-clipboard") /*id: 7245*/, require.e("feat_clipboard-paste") /*id: 90580*/]).then(require.bind(require, "clipboard-paste-revision-hooks") /*id: 751599*/),
      mk: 349
    }, {
      l: () => Promise.all([require.e("delta-and-changeset-operations") /*id: 46252*/, require.e("vendor-utilities-bundle") /*id: 40789*/, require.e("docx-editor-clipboard") /*id: 7245*/, require.e("feat_clipboard-paste") /*id: 90580*/]).then(require.bind(require, "clipboard-paste-handler") /*id: 190991*/),
      mk: 349
    }]
  }, {
    name: "clipboard-copy",
    async: true,
    merge: true,
    configs: [{
      l: () => require.e("feat_clipboard-copy") /*id: 78903*/.then(require.bind(require, "clipboard-copy-file-handler") /*id: 503088*/),
      mk: 349
    }, {
      l: () => require.e("feat_clipboard-copy") /*id: 78903*/.then(require.bind(require, "clipboard-copy-image-block") /*id: 736036*/),
      mk: 349
    }, {
      l: () => require.e("feat_clipboard-copy") /*id: 78903*/.then(require.bind(require, "doc-block-clipboard-copy") /*id: 175287*/),
      mk: 349
    }]
  }, {
    name: "print",
    async: true,
    merge: true,
    configs: [{
      l: () => require.e("feat_print") /*id: 99126*/.then(require.bind(require, "code-block-print-config") /*id: 318182*/),
      mk: 399
    }, {
      l: () => require.e("feat_print") /*id: 99126*/.then(require.bind(require, "print-preview-iframe-handler") /*id: 194974*/),
      mk: 399
    }, {
      l: () => require.e("feat_print") /*id: 99126*/.then(require.bind(require, "docx-print-image-config") /*id: 92175*/),
      mk: 399
    }, {
      l: () => require.e("feat_print") /*id: 99126*/.then(require.bind(require, "docx-print-info-hook") /*id: 954584*/),
      mk: 399
    }, {
      l: () => require.e("feat_print") /*id: 99126*/.then(require.bind(require, "docx-sheet-screenshot-plugin") /*id: 122362*/),
      mk: 399
    }, {
      l: () => require.e("feat_print") /*id: 99126*/.then(require.bind(require, "print-docx-table-hook") /*id: 275408*/),
      mk: 399
    }]
  }];
  var docxEditorContainerComponent = require("docx-editor-container-component") /*id: 942070*/;
  var docxScrollPerformanceCollector = require("docx-scroll-performance-collector") /*id: 255986*/;
  var devicePageConstants = require("device-page-constants") /*id: 53073*/;
  var coverImageUrlUtils = require("cover-image-url-utils") /*id: 604470*/;
  var docxWidthModeConstants = require("docx-width-mode-constants") /*id: 194078*/;
  var docxViewModeDetector = require("docx-view-mode-detector") /*id: 44270*/;
  var docxTableLayoutUtils = require("docx-table-layout-utils") /*id: 163702*/;
  var syncUrlBlockUtils = require("sync-url-block-utils") /*id: 299195*/;
  var syncedBlockReferenceUtils = require("synced-block-reference-utils") /*id: 279191*/;
  var mindmapBlockdepLoaderToken = require("mindmap-blockdep-loader-token") /*id: 426720*/;
  var clientVarLazyConsumerRegistry = require("client-var-lazy-consumer-registry") /*id: 365600*/;
  var editorCommands = require("editor-commands") /*id: 361547*/;
  var docxEditorBlockMetadataUtils = require("docx-editor-block-metadata-utils") /*id: 501598*/;
  var docApiConstants = require("doc-api-constants") /*id: 499049*/;
  var docxClientVarsService = require("docx-client-vars-service") /*id: 595324*/;
  var reduxProviderLogic = require("redux-provider-logic") /*id: 93342*/;
  var docxWidthModeConfig = require("docx-width-mode-config") /*id: 106194*/;
  var selectionRectangleUtility = require("selection-rectangle-utility") /*id: 91539*/;
  var sophonFgStorageConfig = require("sophon-fg-storage-config") /*id: 592593*/;
  var docxEditorConstantsConfig = require("docx-editor-constants-config") /*id: 302915*/;
  var docCoverViewComponent = require("doc-cover-view-component") /*id: 149090*/;
  function oo(e, r, i) {
    var o;
    if ((r = typeof (o = function (e, r) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var o = i.call(e, r || "default");
        if (typeof o != "object") {
          return o;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (r === "string" ? String : Number)(e);
    }(r, "string")) == "symbol" ? o : o + "") in e) {
      Object.defineProperty(e, r, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[r] = i;
    }
    return e;
  }
  require("empty-module-wrapper_1") /*id: 660033*/;
  u = docCoverViewComponent.DocCoverView;
  let on = class extends reactCoreLibraryReexport.Component {
    componentDidMount() {
      docxEditorEventConstantsAndManager_1.globalEventEmitter.on(docxEditorEventConstantsAndManager_1.uiEventConstants.SEND_COVER_INFO, this.listenCoverInfo);
    }
    componentWillUnmount() {
      docxEditorEventConstantsAndManager_1.globalEventEmitter.off(docxEditorEventConstantsAndManager_1.uiEventConstants.SEND_COVER_INFO, this.listenCoverInfo);
    }
    renderContent() {
      let {
        editType: e,
        userInfo: r,
        recordId: i
      } = this.state;
      if (!e || !r) {
        return reactJsxRuntimeCoreReexport.jsx(u, {
          ...this.props
        });
      }
      let {
        coverColor: o,
        backgroundColor: n,
        textColor: l,
        name: s
      } = r;
      let a = {
        className: "history-diff-mark slot",
        "data-history-change-id": i,
        title: docBlockConstants_1.getEditTypeLabel(e, s),
        style: {
          backgroundColor: l
        },
        scroller: this.scroller,
        position: ["bottom", "left"],
        popoverClassName: "cover"
      };
      let c = G[e];
      let d = {
        type: "cover",
        style: {
          border: e !== docBlockConstants_1.editTypeConstants.del ? `4px solid ${o}` : undefined,
          color: l,
          backgroundColor: e === docBlockConstants_1.editTypeConstants.del ? n : undefined
        }
      };
      return reactJsxRuntimeCoreReexport.jsx(H, {
        ...a,
        children: reactJsxRuntimeCoreReexport.jsx(c, {
          ...d,
          children: reactJsxRuntimeCoreReexport.jsx(u, {
            ...this.props
          })
        })
      });
    }
    render() {
      return this.renderContent();
    }
    constructor(...e) {
      super(...e);
      Y(this, "state", {
        editType: null,
        userInfo: null,
        recordId: ""
      });
      Y(this, "scroller", undefined);
      Y(this, "listenCoverInfo", e => {
        let {
          userInfo: a,
          change: c,
          recordId: d,
          scroller: u
        } = e;
        this.scroller = u;
        let h = !c.from?.cover && c.to?.cover ? docBlockConstants_1.editTypeConstants.add : c.from?.cover && !c.to?.cover ? docBlockConstants_1.editTypeConstants.del : c.from?.cover && c.to?.cover ? docBlockConstants_1.editTypeConstants.change : null;
        this.setState({
          editType: h,
          userInfo: a,
          recordId: d
        });
      });
    }
  };
  class ol extends reactCoreLibraryReexport.Component {
    get editorContext() {
      var e;
      var r;
      if ((r = this.editor) === null || r === undefined) {
        return undefined;
      } else if ((e = r.editor) === null || e === undefined) {
        return undefined;
      } else {
        return e.api.getService(compatibleEditorContext_1.compatibleContext);
      }
    }
    get blockManager() {
      return this.editor?.blockManager;
    }
    get eventEmitter() {
      return this.blockManager?.eventEmitter;
    }
    get selectionAPI() {
      return this.editorContext?.selectionAPI;
    }
    get viewport() {
      return this.editorContext?.viewport;
    }
    get fold() {
      return this.editorContext?.fold;
    }
    get rect() {
      return this.editorContext?.rect;
    }
    get blockViewportAdapter() {
      return this.editorContext?.blockViewportAdapter;
    }
    get autoExpandCellModule() {
      return this.editorContext?.autoExpandCellModule;
    }
    getSnapshotBeforeUpdate() {
      if (this.blockManager) {
        this.blockManager.dispatch(docxEditorConstantsConfig.beforePageUpdate);
      }
      return null;
    }
    componentDidMount() {
      window.HistoryEditor = this;
    }
    componentDidUpdate(e) {
      var i;
      var o;
      let n = (i = this.editor) === null || i === undefined ? undefined : i.editor?.api;
      if (n) {
        let {
          copyable: e
        } = this.props;
        n.config.update({
          copyable: e,
          editable: false
        });
      }
      if (e.minHeight !== this.props.minHeight) {
        this.setMinHeight(this.props.minHeight);
      }
      if (e.clientVar !== this.props.clientVar) {
        if (this.historyContainer.current) {
          this.historyContainer.current.scrollTop = 0;
        }
        if ((o = this.eventEmitter) !== null && o !== undefined) {
          o.emit(editorCommands.editorCommands.RefreshEditor, e.token);
        }
      }
      if (this.shouldUpdateHighlightPlay(e)) {
        this.setHighlightTargetInDom();
      }
    }
    componentWillUnmount() {
      window.HistoryEditor = null;
      this.container = null;
      delete window.fold;
    }
    shouldUpdateHighlightPlay(e) {
      return e.historyChangeTarget !== this.props.historyChangeTarget;
    }
    async setHighlightTargetInDom() {
      var r;
      var i;
      var o;
      var n;
      let l = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
      let {
        historyChangeTarget: s
      } = this.props;
      if (!s) {
        this.preHistoryChangeTarget = null;
        return;
      }
      if (this.preHistoryChangeTarget?.type === "external") {
        let {
          recordId: e
        } = this.preHistoryChangeTarget;
        if ((o = this.blockManager) !== null && o !== undefined) {
          o.getBlockViewsByRecordId(e).map(e => {
            var r;
            var i;
            if ((r = (i = e.model).clearHighlightHistory) === null || r === undefined) {
              return undefined;
            } else {
              return r.call(i);
            }
          });
        }
      }
      let [a] = ((r = this.blockManager) === null || r === undefined ? undefined : r.getBlockIdsByRecordId(s.recordId)) || [];
      if (!a) {
        if (!l) {
          await this.scrollToParentBlock(s.recordId);
        }
        return;
      }
      let c = ((i = this.blockManager) === null || i === undefined ? undefined : i.getBlockModelByBlockId(a)) || null;
      let d = [];
      while (c) {
        if ((n = this.blockManager) !== null && n !== undefined) {
          n.dispatch(renderEventConstants.activeNodeActions.ADD, c.id);
        }
        d.push(c.id);
        c = c.parent;
      }
      await this.scrollToTargetBlockAndHightlight(a, s, d);
      d.forEach(e => {
        var r;
        if ((r = this.blockManager) !== null && r !== undefined) {
          r.dispatch(renderEventConstants.activeNodeActions.REMOVE, e);
        }
      });
      this.preHistoryChangeTarget = s;
    }
    findParentBlock(e) {
      try {
        var r;
        var i;
        var o;
        let n;
        let l = (r = this.blockManager) === null || r === undefined ? undefined : r.getRecord(e);
        while (l) {
          let e = l.snapshot.parent_id;
          [n] = ((i = this.blockManager) === null || i === undefined ? undefined : i.getBlockIdsByRecordId(e)) || [];
          if (n) {
            break;
          }
          l = (o = this.blockManager) === null || o === undefined ? undefined : o.getRecord(e);
        }
        return n;
      } catch (e) {
        return;
      }
    }
    scrollToParentBlock(e) {
      var r;
      let i = this.findParentBlock(e);
      if (i) {
        if ((r = this.viewport) !== null && r !== undefined) {
          r.scrollToBlock(i, async e => {
            var r;
            let n = (r = this.blockManager) === null || r === undefined ? undefined : r.getBlockViewByBlockIdNotCheck(i);
            let l = n == null ? undefined : n.hostElement;
            if (l) {
              l.scrollIntoView({
                behavior: "auto",
                block: "center"
              });
            } else {
              let r = e + (document.querySelector(".docx-history-container .doc-cover-image-wrapper")?.clientHeight || 0);
              if (this.scroller) {
                this.scroller.scrollTop = r;
              }
            }
            setTimeout(() => this.setHighlightTargetInDom(true));
          }, browserEnvironmentDetectionUtils.browserDetector.isMobile);
        }
      }
    }
    async scrollToTargetBlockAndHightlight(e, r, i) {
      var o;
      await ((o = this.viewport) === null || o === undefined ? undefined : o.scrollToBlock(e, async o => {
        var n;
        var l;
        var a;
        var c;
        var d;
        let h;
        let f = (n = this.blockManager) === null || n === undefined ? undefined : n.getBlockViewByBlockIdNotCheck(e);
        let g = f == null ? undefined : f.hostElement;
        if ((r == null ? undefined : r.type) === "external") {
          this.clearHighlightDom();
          if (g != null) {
            g.scrollIntoView({
              behavior: "auto",
              block: "center"
            });
          }
          let r = (a = this.rect) === null || a === undefined ? undefined : a.getBlockRect(e);
          if ((c = (d = f.model).highlightHistory) !== null && c !== undefined) {
            c.call(d, r.top);
          }
          return;
        }
        if (r.id.startsWith("change_id_")) {
          h = g == null ? undefined : g.querySelector(`.history-diff-mark[data-history-change-id="${r.id}"]`);
        } else {
          if ((f == null ? undefined : f.type) === "table") {
            h = g;
          }
          h ||= g == null ? undefined : g.querySelector(`.history-diff-mark.slot[data-history-change-id="${r.id}"]`);
          h ||= g == null ? undefined : g.querySelector(`.history-diff-mark[data-history-change-id="${r.id}"]`);
          h ||= document.querySelector(`.docx-history-content > .history-cover-wrapper .history-diff-mark[data-history-change-id="${r.id}"]`);
        }
        let m = () => {
          setTimeout(() => {
            if (h) {
              this.resetTargetDomPosition(h);
            }
            this.clearHighlightDom();
            docxEditorEventConstantsAndManager_1.loadingEventEmitter.emit(docxEditorEventConstantsAndManager_1.focusEventConstants.FOCUS, {
              changeId: r.id,
              isFirstDiff: true
            });
            r.siblings.forEach(e => {
              docxEditorEventConstantsAndManager_1.loadingEventEmitter.emit(docxEditorEventConstantsAndManager_1.focusEventConstants.FOCUS, {
                changeId: e
              });
            });
            this.setHighlightDom([r.id, ...r.siblings]);
          }, 200);
        };
        if (h != null) {
          h.scrollIntoView({
            behavior: "auto",
            block: "center"
          });
        }
        if ((l = this.blockManager) !== null && l !== undefined) {
          l.layoutManager.setAnchorNode(e);
        }
        if (!h || !document.contains(h) || h.clientHeight > (this.scroller?.clientHeight || 0) * 0.7) {
          try {
            docxEventCollectorWrapper.wrapEventCollector("docx_history_dev", {
              action: "jump_target_change_failed",
              data: JSON.stringify({
                activatedNodes: i.map(e => docxEditorBlockMetadataUtils.getBlockPathInfo(e, this.blockManager))
              })
            });
          } catch (e) {
            docxEventCollectorWrapper.wrapEventCollector("docx_history_dev", {
              action: "get_block_view_error",
              data: JSON.stringify({
                message: e.message,
                stack: e.stack
              })
            });
          }
          let e = o + (document.querySelector(".docx-history-container .doc-cover-image-wrapper")?.clientHeight || 0);
          if (this.scroller) {
            this.scroller.scrollTop = e;
          }
        }
        let p = () => {
          let r = selectionRectangleUtility.getSelectionRectangle(this.selectionAPI, this.rect) || this.rect.getBlockRect(e);
          docxTableLayoutUtils.scrollTableHorizontal(this.blockManager, e, r);
        };
        if (!browserEnvironmentDetectionUtils.browserDetector.isMobile) {
          m();
          return Promise.resolve();
        }
        setTimeout(() => {
          p();
          m();
          return Promise.resolve();
        }, 100);
      }, browserEnvironmentDetectionUtils.browserDetector.isMobile));
    }
    setHighlightDom(e) {
      this.highlightChangeIds = e;
    }
    clearHighlightDom() {
      this.highlightChangeIds.forEach(e => {
        docxEditorEventConstantsAndManager_1.loadingEventEmitter.emit(docxEditorEventConstantsAndManager_1.focusEventConstants.UNFOCUS, {
          changeId: e
        });
      });
      this.highlightChangeIds = [];
    }
    resetTargetDomPosition(e) {
      let {
        container: r
      } = this;
      if (!r || !e) {
        return;
      }
      let i = this._getScroller(r).getBoundingClientRect();
      if (e.getBoundingClientRect().bottom - docxEditorConstantsConfig.borderRadiusBase < i.top) {
        e.scrollIntoView({
          behavior: "auto",
          block: "center"
        });
      }
    }
    setMinHeight(e) {
      let r = sophonFgStorageConfig.getSophonFgConfig.enable_page_min_height;
      let {
        blockManager: i
      } = this;
      if (i && r) {
        let {
          rootBlockId: r
        } = i;
        let o = i.getBlockViewByBlockId(r);
        if (o && o.hostElement) {
          o.hostElement.setAttribute("style", `min-height: ${e}px`);
        }
      }
    }
    renderHistoryCoverImage() {
      var r;
      if (syncUrlBlockUtils.isSyncingActive()) {
        return;
      }
      let i = this.props.clientVar.block_map[this.props.clientVar.id];
      let o = i == null ? undefined : i.data.cover;
      let n = i == null ? undefined : (r = i.data.__edit_change) === null || r === undefined ? undefined : r.from?.cover;
      let l = coverImageUrlUtils.buildCoverImageData(o || n);
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: "history-cover-wrapper",
        children: reactJsxRuntimeCoreReexport.jsx(on, {
          isHistory: true,
          coverInfo: l,
          scrollContainer: this.scroller,
          isEditable: false
        })
      });
    }
    render() {
      let e = !browserEnvironmentDetectionUtils.browserDetector.isMobile && docxWidthModeConfig.isNotMobile();
      let r = x(syncedBlockReferenceUtils.getSyncedBorderUi(), syncedBlockReferenceUtils.getSyncedOverflowUi(), [this.historyContainerName, this.props.className, "uneditable", e && "docx-width-mode"]);
      let i = docxWidthModeConfig.getWidthMode(this.props.clientVar, browserEnvironmentDetectionUtils.browserDetector.isFeed, browserEnvironmentDetectionUtils.browserDetector.isMobile);
      let o = x(["docx-history-content-item", e && docxWidthModeConstants.widthClassNames[i], {
        mobile: browserEnvironmentDetectionUtils.browserDetector.isMobile,
        "full-width": !e && i === docxWidthModeConstants.sizeModes.FULL,
        "docx-width-mode": e
      }]);
      if (this.state.refreshing) {
        return null;
      } else {
        return reactJsxRuntimeCoreReexport.jsxs("div", {
          className: r,
          ref: this.historyContainer,
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            className: "history-docx-popup-container"
          }), this.renderHistoryCoverImage(), reactJsxRuntimeCoreReexport.jsx(reduxProviderLogic.contextProvider, {
            store: reduxStoreInitializer.reduxStore,
            children: e => {
              this.reactReduxContext = e;
              return reactJsxRuntimeCoreReexport.jsx(docxEditorContainerComponent.DocxEditorContainer, {
                className: o,
                getDocxEditorOptions: this.getDocxEditorOptions,
                onMount: this.handleMount,
                onUnmount: this.handleUnmount
              });
            }
          })]
        });
      }
    }
    constructor(...e) {
      super(...e);
      oo(this, "editor", null);
      oo(this, "scroller", null);
      oo(this, "historyContainerName", docxHistoryConstants.historyContentClass);
      oo(this, "historyContainer", reactCoreLibraryReexport.createRef());
      oo(this, "preHistoryChangeTarget", null);
      oo(this, "reactReduxContext", undefined);
      oo(this, "scrollFpsCollector", undefined);
      oo(this, "state", {
        refreshing: false
      });
      oo(this, "container", null);
      oo(this, "highlightChangeIds", []);
      oo(this, "handleMount", e => {
        var i;
        var o;
        let {
          onMount: n
        } = this.props;
        this.editor = e;
        if (this.blockManager) {
          docxEditorCore.onServiceReady(this.blockManager.editorAPI, mindmapBlockdepLoaderToken.mindmapBlockdepId, e => e.getDepLoader(this.scroller).preloadBridge(true));
          if ((i = this.props.historyExternalChangeManager) !== null && i !== undefined) {
            i.injectBlockManager(this.blockManager);
          }
          if ((o = this.fold) !== null && o !== undefined) {
            o.forceShowAllFoldedBlock();
          }
        }
        if (n != null) {
          n();
        }
        let {
          container: l
        } = e;
        let {
          scroller: s
        } = this;
        let a = this.editorContext?.blockManager;
        if (s && l && a) {
          this.scrollFpsCollector = new docxScrollPerformanceCollector.ScrollPerfCollector({
            scroller: s,
            container: l,
            blockManager: a,
            scrollFromDocxMode: devicePageConstants.pageTypes.HISTORY
          });
        }
      });
      oo(this, "handleUnmount", () => {
        this.editor = null;
        let {
          onUnmount: e
        } = this.props;
        if (e != null) {
          e();
        }
        if (this.scrollFpsCollector) {
          this.scrollFpsCollector.destroy();
        }
      });
      oo(this, "refreshEditor", e => {
        if (e === this.props.clientVar.id) {
          docxClientVarsService.clearClientVarsCache(`${e}-${docApiConstants.referenceTypes.REFERENCE_ALL}`);
          this.setState({
            refreshing: true
          }, () => {
            this.setState({
              refreshing: false
            });
          });
        }
      });
      oo(this, "_getScroller", e => {
        let r = this.historyContainerName;
        if (!r) {
          return e;
        }
        if (typeof r == "string") {
          let i = `.${r}`;
          return e.closest(i) || e;
        }
        return e;
      });
      oo(this, "getDocxEditorOptions", e => {
        this.container = e;
        this.scroller = this._getScroller(e);
        let i = new clientVarLazyConsumerRegistry.ClientVarLazyConsumerRegistry({
          rootRecordId: this.props.token,
          isPreview: true
        });
        let o = {
          hostBusiness: this.props.hostBusiness,
          token: this.props.token,
          rootRecordId: this.props.token,
          boundary: this.scroller,
          editable: false,
          copyable: this.props.copyable,
          scroller: this.scroller,
          isHistory: true,
          container: e,
          editPermission: false,
          reactReduxContext: this.reactReduxContext,
          isPreview: true,
          messageBlockOptions: {
            version: this.props.clientVar.structure_version || 0,
            historyPageInfo: this.props.historyItem?.page_info
          },
          appMode: docxViewModeDetector.viewModeConstants.HISTORY,
          dataHelper: i,
          clientVar: this.props.clientVar
        };
        let n = {
          BlockContextProvider: e => {
            let {
              children: r
            } = e;
            return reduxProviderLogic.reduxProvider(this.reactReduxContext, r);
          },
          layoutConfig: {
            scroller: this.scroller,
            errorFrom: "history"
          },
          ErrorBoundary: T
        };
        return {
          name: "history",
          dataProvider: i.dataProvider,
          dataHelper: i,
          onEditorCreate(e) {
            e.api.lifecycle.editorDidDestroy$.subscribe(() => {
              i.destroy();
            });
          },
          config: o,
          modules: iY,
          features: iW,
          preprocessedInitialModules: iG,
          moduleOptions: {
            "infra/compatible-editor-context": {
              contentRef: () => this.historyContainer.current,
              getIsMobileEditMode: () => false,
              onContextInit: e => {
                let {
                  eventEmitter: r
                } = e;
                if (r != null) {
                  r.on(editorCommands.editorCommands.RefreshEditor, this.refreshEditor);
                }
              },
              onContextDestroy: e => {
                let {
                  eventEmitter: r
                } = e;
                r.off(editorCommands.editorCommands.RefreshEditor, this.refreshEditor);
              }
            },
            renderer: n
          }
        };
      });
    }
  }
  require.d(exports, {
    HistoryEditor: function () {
      return ol;
    }
  });
}