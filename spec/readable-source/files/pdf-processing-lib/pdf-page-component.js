// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'PdfPage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 19054.be6844dd.js
         * chunkId: 19054
         * moduleId: 75002
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var propTypesFactoryWrapper = require("prop-types-factory-wrapper") /*id: 928010*/;
  var cancelablePromiseHelper = require("cancelable-promise-helper") /*id: 828977*/;
  var reactEventHandlerUtils = require("react-event-handler-utils") /*id: 894068*/;
  var classNamesUtil = require("class-names-util") /*id: 953283*/;
  function l() {
    var t = [];
    var e = 0;
    for (; e < arguments.length; e++) {
      t[e] = arguments[e];
    }
    var r = t.filter(Boolean);
    if (r.length <= 1) {
      return r[0] || null;
    } else {
      return function (t) {
        r.forEach(function (e) {
          if (typeof e == "function") {
            e(t);
          } else if (e) {
            e.current = t;
          }
        });
      };
    }
  }
  var invariantCheck = require("invariant-check") /*id: 415427*/;
  var emptyConstructorStub = require("empty-constructor-stub") /*id: 706041*/;
  var contextDefinition = require("context-definition") /*id: 616643*/;
  var reactPdfMessageComponent = require("react-pdf-message-component") /*id: 727672*/;
  var pdfJsCoreWrapper = require("pdf-js-core-wrapper") /*id: 60502*/;
  let p = {
    Document: null,
    DocumentFragment: null,
    Part: "group",
    Sect: "group",
    Div: "group",
    Aside: "note",
    NonStruct: "none",
    P: null,
    H: "heading",
    Title: null,
    FENote: "note",
    Sub: "group",
    Lbl: null,
    Span: null,
    Em: null,
    Strong: null,
    Link: "link",
    Annot: "note",
    Form: "form",
    Ruby: null,
    RB: null,
    RT: null,
    RP: null,
    Warichu: null,
    WT: null,
    WP: null,
    L: "list",
    LI: "listitem",
    LBody: null,
    Table: "table",
    TR: "row",
    TH: "columnheader",
    TD: "cell",
    THead: "columnheader",
    TBody: null,
    TFoot: null,
    Caption: null,
    Figure: "figure",
    Formula: null,
    Artifact: null
  };
  let g = /^H(\d+)$/;
  function m(t) {
    return t in p;
  }
  function v(t) {
    return "children" in t;
  }
  function y(t) {
    return !!v(t) && t.children.length === 1 && 0 in t.children && "id" in t.children[0];
  }
  function b(t) {
    let e = {};
    if (v(t)) {
      let {
        role: r
      } = t;
      let i = r.match(g);
      if (i) {
        e.role = "heading";
        e["aria-level"] = Number(i[1]);
      } else if (m(r)) {
        let t = p[r];
        if (t) {
          e.role = t;
        }
      }
    }
    return e;
  }
  function A(t) {
    let e = {};
    if (v(t)) {
      if (t.alt !== undefined) {
        e["aria-label"] = t.alt;
      }
      if (t.lang !== undefined) {
        e.lang = t.lang;
      }
      if (y(t)) {
        let [r] = t.children;
        if (r) {
          let t = A(r);
          return Object.assign(Object.assign({}, e), t);
        }
      }
    } else if ("id" in t) {
      e["aria-owns"] = t.id;
    }
    return e;
  }
  function S(t) {
    if (t) {
      return Object.assign(Object.assign({}, b(t)), A(t));
    } else {
      return null;
    }
  }
  function x({
    className: t,
    node: e
  }) {
    let r = reactCoreLibraryReexport.useMemo(() => S(e), [e]);
    let n = reactCoreLibraryReexport.useMemo(() => !v(e) || y(e) ? null : e.children.map((t, e) => reactCoreLibraryReexport.createElement(x, {
      key: e,
      node: t
    })), [e]);
    return reactCoreLibraryReexport.createElement("span", Object.assign({
      className: t
    }, r), n);
  }
  var appContextHook = require("app-context-hook") /*id: 892768*/;
  var usePromiseStateHook = require("use-promise-state-hook") /*id: 456252*/;
  var pdfRendererUtils = require("pdf-renderer-utils") /*id: 665248*/;
  function E() {
    let t = appContextHook.useAppContext();
    invariantCheck.invariant(t, "Unable to find Page context.");
    let {
      onGetStructTreeError: e,
      onGetStructTreeSuccess: r
    } = t;
    let [n, s] = usePromiseStateHook.usePromiseState();
    let {
      value: a,
      error: l
    } = n;
    let {
      customTextRenderer: u,
      page: d
    } = t;
    function f() {
      if (a && r) {
        r(a);
      }
    }
    function p() {
      if (l) {
        emptyConstructorStub(false, l.toString());
        if (e) {
          e(l);
        }
      }
    }
    function g() {
      s({
        type: "RESET"
      });
    }
    function m() {
      if (u || !d) {
        return;
      }
      let t = cancelablePromiseHelper.makeCancelable(d.getStructTree());
      let e = t;
      t.promise.then(t => {
        s({
          type: "RESOLVE",
          value: t
        });
      }).catch(t => {
        s({
          type: "REJECT",
          error: t
        });
      });
      return () => pdfRendererUtils.cancelRequest(e);
    }
    reactCoreLibraryReexport.useEffect(g, [s, d]);
    reactCoreLibraryReexport.useEffect(m, [u, d, s]);
    reactCoreLibraryReexport.useEffect(() => {
      if (a !== undefined) {
        if (a === false) {
          p();
          return;
        }
        f();
      }
    }, [a]);
    if (a) {
      return reactCoreLibraryReexport.createElement(x, {
        className: "react-pdf__Page__structTree structTree",
        node: a
      });
    } else {
      return null;
    }
  }
  let F = pdfJsCoreWrapper.pdfJsCore.AnnotationMode;
  function k(t) {
    let e = appContextHook.useAppContext();
    invariantCheck.invariant(e, "Unable to find Page context.");
    let {
      _className: r,
      canvasBackground: n,
      devicePixelRatio: o = pdfRendererUtils.getDevicePixelRatio(),
      onRenderError: s,
      onRenderSuccess: a,
      page: u,
      renderForms: d,
      renderTextLayer: f,
      rotate: p,
      scale: g
    } = Object.assign(Object.assign({}, e), t);
    let {
      canvasRef: m
    } = t;
    invariantCheck.invariant(u, "Attempted to render page canvas, but no page was specified.");
    let v = reactCoreLibraryReexport.useRef(null);
    function y() {
      if (u && a) {
        a(pdfRendererUtils.scalePageDimensions(u, g));
      }
    }
    function b(t) {
      if (!pdfRendererUtils.isRenderCancelled(t)) {
        emptyConstructorStub(false, t.toString());
        if (s) {
          s(t);
        }
      }
    }
    let A = reactCoreLibraryReexport.useMemo(() => u.getViewport({
      scale: g * o,
      rotation: p
    }), [o, u, p, g]);
    let S = reactCoreLibraryReexport.useMemo(() => u.getViewport({
      scale: g,
      rotation: p
    }), [u, p, g]);
    function x() {
      if (!u) {
        return;
      }
      u.cleanup();
      let {
        current: t
      } = v;
      if (!t) {
        return;
      }
      t.width = A.width;
      t.height = A.height;
      t.style.width = `${Math.floor(S.width)}px`;
      t.style.height = `${Math.floor(S.height)}px`;
      t.style.visibility = "hidden";
      let e = {
        annotationMode: d ? F.ENABLE_FORMS : F.ENABLE,
        canvasContext: t.getContext("2d", {
          alpha: false
        }),
        viewport: A
      };
      if (n) {
        e.background = n;
      }
      let r = u.render(e);
      let i = r;
      r.promise.then(() => {
        t.style.visibility = "";
        y();
      }).catch(b);
      return () => pdfRendererUtils.cancelRequest(i);
    }
    reactCoreLibraryReexport.useEffect(x, [n, v, o, u, d, A, S]);
    let C = reactCoreLibraryReexport.useCallback(() => {
      let {
        current: t
      } = v;
      if (t) {
        t.width = 0;
        t.height = 0;
      }
    }, [v]);
    reactCoreLibraryReexport.useEffect(() => C, [C]);
    return reactCoreLibraryReexport.createElement("canvas", {
      className: `${r}__canvas`,
      dir: "ltr",
      ref: l(m, v),
      style: {
        display: "block",
        userSelect: "none"
      }
    }, f ? reactCoreLibraryReexport.createElement(E, null) : null);
  }
  function P() {
    let t = appContextHook.useAppContext();
    invariantCheck.invariant(t, "Unable to find Page context.");
    let {
      _className: e,
      onRenderSuccess: r,
      onRenderError: n,
      page: s,
      rotate: a,
      scale: l
    } = t;
    invariantCheck.invariant(s, "Attempted to render page SVG, but no page was specified.");
    let [u, d] = usePromiseStateHook.usePromiseState();
    let {
      value: p,
      error: g
    } = u;
    function m() {
      if (s && r) {
        r(pdfRendererUtils.scalePageDimensions(s, l));
      }
    }
    function v() {
      if (!!g && !pdfRendererUtils.isRenderCancelled(g)) {
        emptyConstructorStub(false, g.toString());
        if (n) {
          n(g);
        }
      }
    }
    let y = reactCoreLibraryReexport.useMemo(() => s.getViewport({
      scale: l,
      rotation: a
    }), [s, a, l]);
    function b() {
      d({
        type: "RESET"
      });
    }
    function A() {
      if (!s) {
        return;
      }
      let t = cancelablePromiseHelper.makeCancelable(s.getOperatorList());
      t.promise.then(t => {
        new pdfJsCoreWrapper.pdfJsCore.SVGGraphics(s.commonObjs, s.objs).getSVG(t, y).then(t => {
          if (!(t instanceof SVGElement)) {
            throw Error("getSVG returned unexpected result.");
          }
          d({
            type: "RESOLVE",
            value: t
          });
        }).catch(t => {
          d({
            type: "REJECT",
            error: t
          });
        });
      }).catch(t => {
        d({
          type: "REJECT",
          error: t
        });
      });
      return () => pdfRendererUtils.cancelRequest(t);
    }
    function S(t) {
      if (!t || !p) {
        return;
      }
      if (!t.firstElementChild) {
        t.appendChild(p);
      }
      let {
        width: e,
        height: r
      } = y;
      p.setAttribute("width", `${e}`);
      p.setAttribute("height", `${r}`);
    }
    reactCoreLibraryReexport.useEffect(b, [s, d, y]);
    reactCoreLibraryReexport.useEffect(A, [s, d, y]);
    reactCoreLibraryReexport.useEffect(() => {
      if (p !== undefined) {
        if (p === false) {
          v();
          return;
        }
        m();
      }
    }, [p]);
    let {
      width: x,
      height: E
    } = y;
    return reactCoreLibraryReexport.createElement("div", {
      className: `${e}__svg`,
      ref: t => S(t),
      style: {
        display: "block",
        backgroundColor: "white",
        overflow: "hidden",
        width: x,
        height: E,
        userSelect: "none"
      }
    });
  }
  function R(t) {
    return "str" in t;
  }
  function M() {
    let t = appContextHook.useAppContext();
    invariantCheck.invariant(t, "Unable to find Page context.");
    let {
      customTextRenderer: e,
      onGetTextError: r,
      onGetTextSuccess: n,
      onRenderTextLayerError: s,
      onRenderTextLayerSuccess: l,
      page: u,
      pageIndex: d,
      pageNumber: p,
      rotate: g,
      scale: m
    } = t;
    invariantCheck.invariant(u, "Attempted to load page text content, but no page was specified.");
    let [v, y] = usePromiseStateHook.usePromiseState();
    let {
      value: b,
      error: A
    } = v;
    let S = reactCoreLibraryReexport.useRef(null);
    let x = reactCoreLibraryReexport.useRef();
    function E() {
      if (b && n) {
        n(b);
      }
    }
    function F() {
      if (A) {
        emptyConstructorStub(false, A.toString());
        if (r) {
          r(A);
        }
      }
    }
    function k() {
      y({
        type: "RESET"
      });
    }
    function P() {
      if (!u) {
        return;
      }
      let t = cancelablePromiseHelper.makeCancelable(u.getTextContent());
      let e = t;
      t.promise.then(t => {
        y({
          type: "RESOLVE",
          value: t
        });
      }).catch(t => {
        y({
          type: "REJECT",
          error: t
        });
      });
      return () => pdfRendererUtils.cancelRequest(e);
    }
    emptyConstructorStub(parseInt(window.getComputedStyle(document.body).getPropertyValue("--react-pdf-text-layer"), 10) === 1, "TextLayer styles not found. Read more: https://github.com/wojtekmaj/react-pdf#support-for-text-layer");
    reactCoreLibraryReexport.useEffect(k, [u, y]);
    reactCoreLibraryReexport.useEffect(P, [u, y]);
    reactCoreLibraryReexport.useEffect(() => {
      if (b !== undefined) {
        if (b === false) {
          F();
          return;
        }
        E();
      }
    }, [b]);
    let M = reactCoreLibraryReexport.useCallback(() => {
      if (l) {
        l();
      }
    }, [l]);
    let O = reactCoreLibraryReexport.useCallback(t => {
      emptyConstructorStub(false, t.toString());
      if (s) {
        s(t);
      }
    }, [s]);
    function D() {
      let t = x.current;
      if (t) {
        t.classList.add("active");
      }
    }
    function I() {
      let t = x.current;
      if (t) {
        t.classList.remove("active");
      }
    }
    let L = reactCoreLibraryReexport.useMemo(() => u.getViewport({
      scale: m,
      rotation: g
    }), [u, g, m]);
    function N() {
      if (!u || !b) {
        return;
      }
      let {
        current: t
      } = S;
      if (!t) {
        return;
      }
      t.innerHTML = "";
      let r = {
        container: t,
        textContentSource: u.streamTextContent({
          includeMarkedContent: true
        }),
        viewport: L
      };
      let i = pdfJsCoreWrapper.pdfJsCore.renderTextLayer(r);
      let n = i;
      i.promise.then(() => {
        let r = document.createElement("div");
        r.className = "endOfContent";
        t.append(r);
        x.current = r;
        let i = t.querySelectorAll("[role=\"presentation\"]");
        if (e) {
          let t = 0;
          b.items.forEach((r, n) => {
            if (!R(r)) {
              return;
            }
            let o = i[t];
            if (!o) {
              return;
            }
            let s = e(Object.assign({
              pageIndex: d,
              pageNumber: p,
              itemIndex: n
            }, r));
            o.innerHTML = s;
            t += r.str && r.hasEOL ? 2 : 1;
          });
        }
        M();
      }).catch(O);
      return () => pdfRendererUtils.cancelRequest(n);
    }
    reactCoreLibraryReexport.useLayoutEffect(N, [e, O, M, u, d, p, b, L]);
    return reactCoreLibraryReexport.createElement("div", {
      className: classNamesUtil.classNames_1("react-pdf__Page__textContent", "textLayer"),
      onMouseUp: I,
      onMouseDown: D,
      ref: S
    });
  }
  var usePatchContext = require("use-patch-context") /*id: 48138*/;
  function D() {
    let t = usePatchContext.usePatchContext();
    let e = appContextHook.useAppContext();
    invariantCheck.invariant(e, "Unable to find Page context.");
    let {
      imageResourcesPath: r,
      linkService: n,
      onGetAnnotationsError: s,
      onGetAnnotationsSuccess: l,
      onRenderAnnotationLayerError: u,
      onRenderAnnotationLayerSuccess: d,
      page: p,
      pdf: g,
      renderForms: m,
      rotate: v,
      scale: y = 1
    } = Object.assign(Object.assign({}, t), e);
    invariantCheck.invariant(g, "Attempted to load page annotations, but no document was specified. Wrap <Page /> in a <Document /> or pass explicit `pdf` prop.");
    invariantCheck.invariant(p, "Attempted to load page annotations, but no page was specified.");
    invariantCheck.invariant(n, "Attempted to load page annotations, but no linkService was specified.");
    let [b, A] = usePromiseStateHook.usePromiseState();
    let {
      value: S,
      error: x
    } = b;
    let E = reactCoreLibraryReexport.useRef(null);
    function F() {
      if (S && l) {
        l(S);
      }
    }
    function k() {
      if (x) {
        emptyConstructorStub(false, x.toString());
        if (s) {
          s(x);
        }
      }
    }
    function P() {
      A({
        type: "RESET"
      });
    }
    function R() {
      if (!p) {
        return;
      }
      let t = cancelablePromiseHelper.makeCancelable(p.getAnnotations());
      let e = t;
      t.promise.then(t => {
        A({
          type: "RESOLVE",
          value: t
        });
      }).catch(t => {
        A({
          type: "REJECT",
          error: t
        });
      });
      return () => {
        pdfRendererUtils.cancelRequest(e);
      };
    }
    function M() {
      if (d) {
        d();
      }
    }
    function D(t) {
      emptyConstructorStub(false, `${t}`);
      if (u) {
        u(t);
      }
    }
    emptyConstructorStub(parseInt(window.getComputedStyle(document.body).getPropertyValue("--react-pdf-annotation-layer"), 10) === 1, "AnnotationLayer styles not found. Read more: https://github.com/wojtekmaj/react-pdf#support-for-annotations");
    reactCoreLibraryReexport.useEffect(P, [A, p]);
    reactCoreLibraryReexport.useEffect(R, [A, p, m]);
    reactCoreLibraryReexport.useEffect(() => {
      if (S !== undefined) {
        if (S === false) {
          k();
          return;
        }
        F();
      }
    }, [S]);
    let I = reactCoreLibraryReexport.useMemo(() => p.getViewport({
      scale: y,
      rotation: v
    }), [p, v, y]);
    function L() {
      if (!g || !p || !n || !S) {
        return;
      }
      let {
        current: t
      } = E;
      if (!t) {
        return;
      }
      let e = I.clone({
        dontFlip: true
      });
      let i = {
        accessibilityManager: null,
        annotationCanvasMap: null,
        div: t,
        l10n: null,
        page: p,
        viewport: e
      };
      let o = {
        annotations: S,
        annotationStorage: g.annotationStorage,
        div: t,
        downloadManager: null,
        imageResourcesPath: r,
        linkService: n,
        page: p,
        renderForms: m,
        viewport: e
      };
      t.innerHTML = "";
      try {
        new pdfJsCoreWrapper.pdfJsCore.AnnotationLayer(i).render(o);
        M();
      } catch (t) {
        D(t);
      }
      return () => {};
    }
    reactCoreLibraryReexport.useEffect(L, [S, r, n, p, m, I]);
    return reactCoreLibraryReexport.createElement("div", {
      className: classNamesUtil.classNames_1("react-pdf__Page__annotations", "annotationLayer"),
      ref: E
    });
  }
  var pdfViewerPropTypes = require("pdf-viewer-prop-types") /*id: 669120*/;
  function L(t, e) {
    var r = {};
    for (var i in t) {
      if (Object.prototype.hasOwnProperty.call(t, i) && e.indexOf(i) < 0) {
        r[i] = t[i];
      }
    }
    if (t != null && typeof Object.getOwnPropertySymbols == "function") {
      var n = 0;
      var i = Object.getOwnPropertySymbols(t);
      for (; n < i.length; n++) {
        if (e.indexOf(i[n]) < 0 && Object.prototype.propertyIsEnumerable.call(t, i[n])) {
          r[i[n]] = t[i[n]];
        }
      }
    }
    return r;
  }
  let N = 1;
  let B = function (t) {
    let e = Object.assign(Object.assign({}, usePatchContext.usePatchContext()), t);
    let {
      _className: r = "react-pdf__Page",
      _enableRegisterUnregisterPage: n = true,
      canvasBackground: f,
      canvasRef: p,
      children: g,
      className: m,
      customRenderer: v,
      customTextRenderer: y,
      devicePixelRatio: b,
      error: A = "Failed to load the page.",
      height: S,
      inputRef: x,
      loading: w = "Loading page…",
      noData: E = "No page specified.",
      onGetAnnotationsError: F,
      onGetAnnotationsSuccess: R,
      onGetStructTreeError: I,
      onGetStructTreeSuccess: B,
      onGetTextError: j,
      onGetTextSuccess: _,
      onLoadError: U,
      onLoadSuccess: z,
      onRenderAnnotationLayerError: V,
      onRenderAnnotationLayerSuccess: W,
      onRenderError: G,
      onRenderSuccess: q,
      onRenderTextLayerError: H,
      onRenderTextLayerSuccess: K,
      pageIndex: X,
      pageNumber: Z,
      pdf: Y,
      registerPage: J,
      renderAnnotationLayer: Q = true,
      renderForms: $ = false,
      renderMode: tt = "canvas",
      renderTextLayer: te = true,
      rotate: tr,
      scale: ti = N,
      unregisterPage: tn,
      width: to
    } = e;
    let ts = L(e, ["_className", "_enableRegisterUnregisterPage", "canvasBackground", "canvasRef", "children", "className", "customRenderer", "customTextRenderer", "devicePixelRatio", "error", "height", "inputRef", "loading", "noData", "onGetAnnotationsError", "onGetAnnotationsSuccess", "onGetStructTreeError", "onGetStructTreeSuccess", "onGetTextError", "onGetTextSuccess", "onLoadError", "onLoadSuccess", "onRenderAnnotationLayerError", "onRenderAnnotationLayerSuccess", "onRenderError", "onRenderSuccess", "onRenderTextLayerError", "onRenderTextLayerSuccess", "pageIndex", "pageNumber", "pdf", "registerPage", "renderAnnotationLayer", "renderForms", "renderMode", "renderTextLayer", "rotate", "scale", "unregisterPage", "width"]);
    let [ta, tl] = usePromiseStateHook.usePromiseState();
    let {
      value: th,
      error: tc
    } = ta;
    let tu = reactCoreLibraryReexport.useRef(null);
    invariantCheck.invariant(Y, "Attempted to load a page, but no document was specified. Wrap <Page /> in a <Document /> or pass explicit `pdf` prop.");
    let td = pdfRendererUtils.isNotNullish(Z) ? Z - 1 : X ?? null;
    let tf = Z ?? (pdfRendererUtils.isNotNullish(X) ? X + 1 : null);
    let tp = tr ?? (th ? th.rotate : null);
    let tg = reactCoreLibraryReexport.useMemo(() => {
      if (!th) {
        return null;
      }
      let t = 1;
      let e = ti ?? N;
      if (to || S) {
        let e = th.getViewport({
          scale: 1,
          rotation: tp
        });
        if (to) {
          t = to / e.width;
        } else if (S) {
          t = S / e.height;
        }
      }
      return e * t;
    }, [S, th, tp, ti, to]);
    function tm() {
      return () => {
        if (pdfRendererUtils.isNotNullish(td) && n && tn) {
          tn(td);
        }
      };
    }
    function tv() {
      if (z) {
        if (!th || !tg) {
          return;
        }
        z(pdfRendererUtils.scalePageDimensions(th, tg));
      }
      if (n && J) {
        if (!pdfRendererUtils.isNotNullish(td) || !tu.current) {
          return;
        }
        J(td, tu.current);
      }
    }
    function ty() {
      if (tc) {
        emptyConstructorStub(false, tc.toString());
        if (U) {
          U(tc);
        }
      }
    }
    function tb() {
      tl({
        type: "RESET"
      });
    }
    function tA() {
      if (!Y || !tf) {
        return;
      }
      let t = cancelablePromiseHelper.makeCancelable(Y.getPage(tf));
      let e = t;
      t.promise.then(t => {
        tl({
          type: "RESOLVE",
          value: t
        });
      }).catch(t => {
        tl({
          type: "REJECT",
          error: t
        });
      });
      return () => pdfRendererUtils.cancelRequest(e);
    }
    reactCoreLibraryReexport.useEffect(tm, [n, Y, td, tn]);
    reactCoreLibraryReexport.useEffect(tb, [tl, Y, td]);
    reactCoreLibraryReexport.useEffect(tA, [tl, Y, td, tf, J]);
    reactCoreLibraryReexport.useEffect(() => {
      if (th !== undefined) {
        if (th === false) {
          ty();
          return;
        }
        tv();
      }
    }, [th, tg]);
    let tS = reactCoreLibraryReexport.useMemo(() => th && pdfRendererUtils.isNotNullish(td) && tf && pdfRendererUtils.isNotNullish(tp) && pdfRendererUtils.isNotNullish(tg) ? {
      _className: r,
      canvasBackground: f,
      customTextRenderer: y,
      devicePixelRatio: b,
      onGetAnnotationsError: F,
      onGetAnnotationsSuccess: R,
      onGetStructTreeError: I,
      onGetStructTreeSuccess: B,
      onGetTextError: j,
      onGetTextSuccess: _,
      onRenderAnnotationLayerError: V,
      onRenderAnnotationLayerSuccess: W,
      onRenderError: G,
      onRenderSuccess: q,
      onRenderTextLayerError: H,
      onRenderTextLayerSuccess: K,
      page: th,
      pageIndex: td,
      pageNumber: tf,
      renderForms: $,
      renderTextLayer: te,
      rotate: tp,
      scale: tg
    } : null, [r, f, y, b, F, R, I, B, j, _, V, W, G, q, H, K, th, td, tf, $, te, tp, tg]);
    let tx = reactCoreLibraryReexport.useMemo(() => reactEventHandlerUtils.wrapEventHandlers(ts, () => th ? tg ? pdfRendererUtils.scalePageDimensions(th, tg) : undefined : th), [ts, th, tg]);
    let tw = `${td}@${tg}/${tp}`;
    let tC = `${td}/${tp}`;
    function tT() {
      switch (tt) {
        case "custom":
          invariantCheck.invariant(v, "renderMode was set to \"custom\", but no customRenderer was passed.");
          return reactCoreLibraryReexport.createElement(v, {
            key: `${tw}_custom`
          });
        case "none":
          return null;
        case "svg":
          return reactCoreLibraryReexport.createElement(P, {
            key: `${tC}_svg`
          });
        default:
          return reactCoreLibraryReexport.createElement(k, {
            key: `${tw}_canvas`,
            canvasRef: p
          });
      }
    }
    function tE() {
      if (te) {
        return reactCoreLibraryReexport.createElement(M, {
          key: `${tw}_text`
        });
      } else {
        return null;
      }
    }
    function tF() {
      if (Q) {
        return reactCoreLibraryReexport.createElement(D, {
          key: `${tw}_annotations`
        });
      } else {
        return null;
      }
    }
    function tk() {
      return reactCoreLibraryReexport.createElement(contextDefinition.AppContext.Provider, {
        value: tS
      }, tT(), tE(), tF(), g);
    }
    function tP() {
      if (tf) {
        if (Y === null || th == null) {
          return reactCoreLibraryReexport.createElement(reactPdfMessageComponent.PdfMessage, {
            type: "loading"
          }, typeof w == "function" ? w() : w);
        } else if (Y === false || th === false) {
          return reactCoreLibraryReexport.createElement(reactPdfMessageComponent.PdfMessage, {
            type: "error"
          }, typeof A == "function" ? A() : A);
        } else {
          return tk();
        }
      } else {
        return reactCoreLibraryReexport.createElement(reactPdfMessageComponent.PdfMessage, {
          type: "no-data"
        }, typeof E == "function" ? E() : E);
      }
    }
    return reactCoreLibraryReexport.createElement("div", Object.assign({
      className: classNamesUtil.classNames_1(r, m),
      "data-page-number": tf,
      ref: l(x, tu),
      style: {
        "--scale-factor": `${tg}`,
        backgroundColor: f || "white",
        position: "relative",
        minWidth: "min-content",
        minHeight: "min-content"
      }
    }, tx), tP());
  };
  let j = propTypesFactoryWrapper.oneOfType([propTypesFactoryWrapper.func, propTypesFactoryWrapper.node]);
  B.propTypes = Object.assign(Object.assign({}, pdfViewerPropTypes.eventHandlerPropTypes), {
    canvasBackground: propTypesFactoryWrapper.string,
    canvasRef: pdfViewerPropTypes.refPropType,
    children: propTypesFactoryWrapper.node,
    className: pdfViewerPropTypes.pageIndexPropType,
    customRenderer: propTypesFactoryWrapper.func,
    customTextRenderer: propTypesFactoryWrapper.func,
    devicePixelRatio: propTypesFactoryWrapper.number,
    error: j,
    height: propTypesFactoryWrapper.number,
    imageResourcesPath: propTypesFactoryWrapper.string,
    inputRef: pdfViewerPropTypes.refPropType,
    loading: j,
    noData: j,
    onGetTextError: propTypesFactoryWrapper.func,
    onGetTextSuccess: propTypesFactoryWrapper.func,
    onLoadError: propTypesFactoryWrapper.func,
    onLoadSuccess: propTypesFactoryWrapper.func,
    onRenderError: propTypesFactoryWrapper.func,
    onRenderSuccess: propTypesFactoryWrapper.func,
    onRenderTextLayerError: propTypesFactoryWrapper.func,
    onRenderTextLayerSuccess: propTypesFactoryWrapper.func,
    pageIndex: pdfViewerPropTypes.validatePageIndex,
    pageNumber: pdfViewerPropTypes.pageNumberPropType,
    pdf: pdfViewerPropTypes.customRendererPropType,
    renderAnnotationLayer: propTypesFactoryWrapper.bool,
    renderForms: propTypesFactoryWrapper.bool,
    renderMode: pdfViewerPropTypes.rendererTypePropType,
    renderTextLayer: propTypesFactoryWrapper.bool,
    rotate: pdfViewerPropTypes.rotationPropType,
    scale: propTypesFactoryWrapper.number,
    width: propTypesFactoryWrapper.number
  });
  var _ = B;
  require.d(exports, {
    PdfPage: function () {
      return _;
    }
  });
}