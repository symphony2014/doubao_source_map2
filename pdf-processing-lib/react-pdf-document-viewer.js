// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'PdfDocument'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 19054.be6844dd.js
         * chunkId: 19054
         * moduleId: 353428
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var propTypesFactoryWrapper = require("prop-types-factory-wrapper") /*id: 928010*/;
  var reactEventHandlerUtils = require("react-event-handler-utils") /*id: 894068*/;
  var cancelablePromiseHelper = require("cancelable-promise-helper") /*id: 828977*/;
  var classNamesUtil = require("class-names-util") /*id: 953283*/;
  var invariantCheck = require("invariant-check") /*id: 415427*/;
  var emptyConstructorStub = require("empty-constructor-stub") /*id: 706041*/;
  var deepEqualUtil_1_1 = require("deep-equal-util_1_1") /*id: 961361*/;
  var pdfJsCoreWrapper = require("pdf-js-core-wrapper") /*id: 60502*/;
  var reactContextProvider_1 = require("react-context-provider_1") /*id: 450434*/;
  var reactPdfMessageComponent = require("react-pdf-message-component") /*id: 727672*/;
  var pdfViewerController = require("pdf-viewer-controller") /*id: 153449*/;
  var g = {
    NEED_PASSWORD: 1,
    INCORRECT_PASSWORD: 2
  };
  var pdfRendererUtils = require("pdf-renderer-utils") /*id: 665248*/;
  var usePromiseStateHook = require("use-promise-state-hook") /*id: 456252*/;
  var pdfViewerPropTypes = require("pdf-viewer-prop-types") /*id: 669120*/;
  function b(t, e, r, i) {
    function n(t) {
      if (t instanceof r) {
        return t;
      } else {
        return new r(function (e) {
          e(t);
        });
      }
    }
    return new (r ||= Promise)(function (r, o) {
      function s(t) {
        try {
          l(i.next(t));
        } catch (t) {
          o(t);
        }
      }
      function a(t) {
        try {
          l(i.throw(t));
        } catch (t) {
          o(t);
        }
      }
      function l(t) {
        if (t.done) {
          r(t.value);
        } else {
          n(t.value).then(s, a);
        }
      }
      l((i = i.apply(t, e || [])).next());
    });
  }
  function A(t, e) {
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
  let {
    PDFDataRangeTransport: S
  } = pdfJsCoreWrapper.pdfJsCore;
  let x = (t, e) => {
    switch (e) {
      case g.NEED_PASSWORD:
        t(prompt("Enter the password to open this PDF file."));
        break;
      case g.INCORRECT_PASSWORD:
        t(prompt("Invalid password. Please try again."));
    }
  };
  function w(t) {
    return typeof t == "object" && t !== null && ("data" in t || "range" in t || "url" in t);
  }
  let C = reactCoreLibraryReexport.forwardRef(function (t, e) {
    var {
      children: r,
      className: n,
      error: g = "Failed to load PDF file.",
      externalLinkRel: y,
      externalLinkTarget: C,
      file: T,
      inputRef: E,
      imageResourcesPath: F,
      loading: k = "Loading PDF…",
      noData: P = "No PDF file specified.",
      onItemClick: R,
      onLoadError: M,
      onLoadProgress: O,
      onLoadSuccess: D,
      onPassword: I = x,
      onSourceError: L,
      onSourceSuccess: N,
      options: B,
      renderMode: j,
      rotate: _
    } = t;
    var U = A(t, ["children", "className", "error", "externalLinkRel", "externalLinkTarget", "file", "inputRef", "imageResourcesPath", "loading", "noData", "onItemClick", "onLoadError", "onLoadProgress", "onLoadSuccess", "onPassword", "onSourceError", "onSourceSuccess", "options", "renderMode", "rotate"]);
    let [z, V] = usePromiseStateHook.usePromiseState();
    let {
      value: W,
      error: G
    } = z;
    let [q, H] = usePromiseStateHook.usePromiseState();
    let {
      value: K,
      error: X
    } = q;
    let Z = reactCoreLibraryReexport.useRef(new pdfViewerController.PdfViewerController());
    let Y = reactCoreLibraryReexport.useRef([]);
    let J = reactCoreLibraryReexport.useRef();
    let Q = reactCoreLibraryReexport.useRef();
    reactCoreLibraryReexport.useEffect(() => {
      if (T && T !== J.current && w(T)) {
        emptyConstructorStub(!deepEqualUtil_1_1.deepEqual(T, J.current), "File prop passed to <Document /> changed, but it's equal to previous one. This might result in unnecessary reloads. Consider memoizing the value passed to \"file\" prop.");
        J.current = T;
      }
    }, [T]);
    reactCoreLibraryReexport.useEffect(() => {
      if (B && B !== Q.current) {
        emptyConstructorStub(!deepEqualUtil_1_1.deepEqual(B, Q.current), "Options prop passed to <Document /> changed, but it's equal to previous one. This might result in unnecessary reloads. Consider memoizing the value passed to \"options\" prop.");
        Q.current = B;
      }
    }, [B]);
    let $ = reactCoreLibraryReexport.useRef({
      scrollPageIntoView: t => {
        let {
          dest: e,
          pageNumber: r,
          pageIndex: i = r - 1
        } = t;
        if (R) {
          R({
            dest: e,
            pageIndex: i,
            pageNumber: r
          });
          return;
        }
        let n = Y.current[i];
        if (n) {
          n.scrollIntoView();
          return;
        }
        emptyConstructorStub(false, `An internal link leading to page ${r} was clicked, but neither <Document> was provided with onItemClick nor it was able to find the page within itself. Either provide onItemClick to <Document> and handle navigating by yourself or ensure that all pages are rendered within <Document>.`);
      }
    });
    function tt() {
      if (N) {
        N();
      }
    }
    function te() {
      if (G) {
        emptyConstructorStub(false, G.toString());
        if (L) {
          L(G);
        }
      }
    }
    function tr() {
      V({
        type: "RESET"
      });
    }
    reactCoreLibraryReexport.useImperativeHandle(e, () => ({
      linkService: Z,
      pages: Y,
      viewer: $
    }), []);
    reactCoreLibraryReexport.useEffect(tr, [T, V]);
    let ti = reactCoreLibraryReexport.useCallback(() => b(this, undefined, undefined, function* () {
      if (!T) {
        return null;
      }
      if (typeof T == "string") {
        if (pdfRendererUtils.isDataUri(T)) {
          return {
            data: pdfRendererUtils.decodeDataUri(T)
          };
        } else {
          pdfRendererUtils.checkPdfProtocol();
          return {
            url: T
          };
        }
      }
      if (T instanceof S) {
        return {
          range: T
        };
      }
      if (pdfRendererUtils.isArrayBuffer(T)) {
        return {
          data: T
        };
      }
      if (pdfRendererUtils.isBrowser && pdfRendererUtils.isBlob(T)) {
        return {
          data: yield pdfRendererUtils.readFileAsBuffer(T)
        };
      }
      invariantCheck.invariant(typeof T == "object", "Invalid parameter in file, need either Uint8Array, string or a parameter object");
      invariantCheck.invariant(w(T), "Invalid parameter object: need either .data, .range or .url");
      if ("url" in T && typeof T.url == "string") {
        if (pdfRendererUtils.isDataUri(T.url)) {
          let {
            url: t
          } = T;
          let e = A(T, ["url"]);
          return Object.assign({
            data: pdfRendererUtils.decodeDataUri(t)
          }, e);
        }
        pdfRendererUtils.checkPdfProtocol();
      }
      return T;
    }), [T]);
    function tn() {
      if (K) {
        if (D) {
          D(K);
        }
        Y.current = Array(K.numPages);
        Z.current.setDocument(K);
      }
    }
    function to() {
      if (X) {
        emptyConstructorStub(false, X.toString());
        if (M) {
          M(X);
        }
      }
    }
    function ts() {
      H({
        type: "RESET"
      });
    }
    function ta() {
      if (!W) {
        return;
      }
      let t = Object.assign(Object.assign({}, B), {
        isEvalSupported: false
      });
      let e = Object.assign(Object.assign({}, W), t);
      let r = pdfJsCoreWrapper.pdfJsCore.getDocument(e);
      if (O) {
        r.onProgress = O;
      }
      if (I) {
        r.onPassword = I;
      }
      let i = r;
      i.promise.then(t => {
        H({
          type: "RESOLVE",
          value: t
        });
      }).catch(t => {
        if (!i.destroyed) {
          H({
            type: "REJECT",
            error: t
          });
        }
      });
      return () => {
        i.destroy();
      };
    }
    function tl() {
      Z.current.setViewer($.current);
      Z.current.setExternalLinkRel(y);
      Z.current.setExternalLinkTarget(C);
    }
    function th(t, e) {
      Y.current[t] = e;
    }
    function tc(t) {
      delete Y.current[t];
    }
    reactCoreLibraryReexport.useEffect(() => {
      let t = cancelablePromiseHelper.makeCancelable(ti());
      t.promise.then(t => {
        V({
          type: "RESOLVE",
          value: t
        });
      }).catch(t => {
        V({
          type: "REJECT",
          error: t
        });
      });
      return () => {
        pdfRendererUtils.cancelRequest(t);
      };
    }, [ti, V]);
    reactCoreLibraryReexport.useEffect(() => {
      if (W !== undefined) {
        if (W === false) {
          te();
          return;
        }
        tt();
      }
    }, [W]);
    reactCoreLibraryReexport.useEffect(ts, [H, W]);
    reactCoreLibraryReexport.useEffect(ta, [B, H, W]);
    reactCoreLibraryReexport.useEffect(() => {
      if (K !== undefined) {
        if (K === false) {
          to();
          return;
        }
        tn();
      }
    }, [K]);
    reactCoreLibraryReexport.useEffect(tl, [y, C]);
    let tu = reactCoreLibraryReexport.useMemo(() => ({
      imageResourcesPath: F,
      linkService: Z.current,
      onItemClick: R,
      pdf: K,
      registerPage: th,
      renderMode: j,
      rotate: _,
      unregisterPage: tc
    }), [F, R, K, j, _]);
    let td = reactCoreLibraryReexport.useMemo(() => reactEventHandlerUtils.wrapEventHandlers(U, () => K), [U, K]);
    function tf() {
      return reactCoreLibraryReexport.createElement(reactContextProvider_1.PatchContext.Provider, {
        value: tu
      }, r);
    }
    function tp() {
      if (T) {
        if (K == null) {
          return reactCoreLibraryReexport.createElement(reactPdfMessageComponent.PdfMessage, {
            type: "loading"
          }, typeof k == "function" ? k() : k);
        } else if (K === false) {
          return reactCoreLibraryReexport.createElement(reactPdfMessageComponent.PdfMessage, {
            type: "error"
          }, typeof g == "function" ? g() : g);
        } else {
          return tf();
        }
      } else {
        return reactCoreLibraryReexport.createElement(reactPdfMessageComponent.PdfMessage, {
          type: "no-data"
        }, typeof P == "function" ? P() : P);
      }
    }
    return reactCoreLibraryReexport.createElement("div", Object.assign({
      className: classNamesUtil.classNames_1("react-pdf__Document", n),
      ref: E,
      style: {
        "--scale-factor": "1"
      }
    }, td), tp());
  });
  let T = propTypesFactoryWrapper.oneOfType([propTypesFactoryWrapper.func, propTypesFactoryWrapper.node]);
  C.propTypes = Object.assign(Object.assign({}, pdfViewerPropTypes.eventHandlerPropTypes), {
    children: propTypesFactoryWrapper.node,
    className: pdfViewerPropTypes.pageIndexPropType,
    error: T,
    externalLinkRel: propTypesFactoryWrapper.string,
    externalLinkTarget: propTypesFactoryWrapper.oneOf(["_self", "_blank", "_parent", "_top"]),
    file: pdfViewerPropTypes.pdfSourcePropType,
    imageResourcesPath: propTypesFactoryWrapper.string,
    inputRef: pdfViewerPropTypes.refPropType,
    loading: T,
    noData: T,
    onItemClick: propTypesFactoryWrapper.func,
    onLoadError: propTypesFactoryWrapper.func,
    onLoadProgress: propTypesFactoryWrapper.func,
    onLoadSuccess: propTypesFactoryWrapper.func,
    onPassword: propTypesFactoryWrapper.func,
    onSourceError: propTypesFactoryWrapper.func,
    onSourceSuccess: propTypesFactoryWrapper.func,
    options: propTypesFactoryWrapper.shape({
      canvasFactory: propTypesFactoryWrapper.any,
      canvasMaxAreaInBytes: propTypesFactoryWrapper.number,
      cMapPacked: propTypesFactoryWrapper.bool,
      CMapReaderFactory: propTypesFactoryWrapper.any,
      cMapUrl: propTypesFactoryWrapper.string,
      disableAutoFetch: propTypesFactoryWrapper.bool,
      disableFontFace: propTypesFactoryWrapper.bool,
      disableRange: propTypesFactoryWrapper.bool,
      disableStream: propTypesFactoryWrapper.bool,
      docBaseUrl: propTypesFactoryWrapper.string,
      enableXfa: propTypesFactoryWrapper.bool,
      filterFactory: propTypesFactoryWrapper.any,
      fontExtraProperties: propTypesFactoryWrapper.bool,
      httpHeaders: propTypesFactoryWrapper.object,
      isEvalSupported: propTypesFactoryWrapper.bool,
      isOffscreenCanvasSupported: propTypesFactoryWrapper.bool,
      length: propTypesFactoryWrapper.number,
      maxImageSize: propTypesFactoryWrapper.number,
      ownerDocument: propTypesFactoryWrapper.any,
      password: propTypesFactoryWrapper.string,
      pdfBug: propTypesFactoryWrapper.bool,
      rangeChunkSize: propTypesFactoryWrapper.number,
      StandardFontDataFactory: propTypesFactoryWrapper.any,
      standardFontDataUrl: propTypesFactoryWrapper.string,
      stopAtErrors: propTypesFactoryWrapper.bool,
      useSystemFonts: propTypesFactoryWrapper.bool,
      useWorkerFetch: propTypesFactoryWrapper.bool,
      verbosity: propTypesFactoryWrapper.number,
      withCredentials: propTypesFactoryWrapper.bool,
      worker: propTypesFactoryWrapper.any
    }),
    rotate: propTypesFactoryWrapper.number
  });
  var E = C;
  require.d(exports, {
    PdfDocument: function () {
      return E;
    }
  });
}