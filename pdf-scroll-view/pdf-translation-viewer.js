// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'H' to 'PdfTranslationViewer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: new-pdf-scroll-view.beafc32e.js
         * chunkId: 92089
         * moduleId: 896296
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var pdfjsDisplayCore = require("pdfjs-display-core") /*id: 74172*/;
  var pdfDocumentCore = require("pdf-document-core") /*id: 973937*/;
  var html2canvasCoreRenderer = require("html2canvas-core-renderer") /*id: 275377*/;
  var o = html2canvasCoreRenderer;
  var fileSaverUtility = require("file-saver-utility") /*id: 888334*/;
  var c = fileSaverUtility;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var d = classnamesUtils;
  var promiseAsyncUtilities = require("promise-async-utilities") /*id: 592307*/;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  var translationContextProvider = require("translation-context-provider") /*id: 849355*/;
  var reactContextProviderHook = require("react-context-provider-hook") /*id: 719110*/;
  var typographyWrapperModule = require("typography-wrapper-module") /*id: 954330*/;
  var semiSpinComponent = require("semi-spin-component") /*id: 714437*/;
  var x = "toast-Ehu1n2";
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let {
    Text: w
  } = typographyWrapperModule.TypographyWrapper;
  let y = e => {
    let {
      toast: t,
      onCancel: n
    } = e;
    let a = translationContextProvider.useTranslation();
    let l = reactCoreLibraryReexport.useRef("");
    let i = () => {
      if (n != null) {
        n();
      }
      t.close(l.current);
      l.current = "";
    };
    let o = e => {
      let {
        isProgress: t,
        progressPage: n,
        totalPage: r
      } = e;
      return reactJsxRuntimeCoreReexport.jsxs("span", {
        children: [t ? a("ai_reading_translationDownload_translating", {
          sprintf: [`${n}/${r}`]
        }) : a("ai_reading_translationDownload_exporting"), reactJsxRuntimeCoreReexport.jsx(w, {
          link: true,
          className: "cancel-E6yv39",
          onClick: i,
          children: a("ai_reading_cancel")
        })]
      });
    };
    let s = () => reactJsxRuntimeCoreReexport.jsx(w, {
      children: a("ai_reading_translationDownload_downloading")
    });
    return {
      updateProgress: e => {
        let {
          progressPage: n,
          totalPage: r
        } = e;
        t.info({
          className: x,
          id: l.current,
          icon: reactJsxRuntimeCoreReexport.jsx(semiSpinComponent.Spin, {
            size: "small"
          }),
          content: o({
            isProgress: true,
            progressPage: n,
            totalPage: r
          }),
          duration: 0,
          theme: "light",
          showClose: false
        });
      },
      startExporting: () => {
        t.info({
          className: x,
          id: l.current,
          icon: reactJsxRuntimeCoreReexport.jsx(semiSpinComponent.Spin, {
            size: "small"
          }),
          content: o({
            isProgress: false
          }),
          duration: 0,
          theme: "light",
          showClose: false
        });
      },
      startDownloading: () => {
        t.success({
          className: x,
          id: l.current,
          content: s(),
          duration: 0,
          theme: "light",
          showClose: false
        });
        setTimeout(() => {
          t.close(l.current);
          l.current = "";
        }, 3000);
      }
    };
  };
  var S = {
    "translate-page-wrap": "translate-page-wrap-cm2FPE",
    translatePageWrap: "translate-page-wrap-cm2FPE",
    "translate-page": "translate-page-S5fWWC",
    translatePage: "translate-page-S5fWWC",
    "translate-block": "translate-block-vdqrbR",
    translateBlock: "translate-block-vdqrbR",
    "translate-overlay": "translate-overlay-bH5_Wn",
    translateOverlay: "translate-overlay-bH5_Wn"
  };
  let N = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      pdfProxy: n,
      fileName: a,
      getTranslationOverlays: i,
      toast: o
    } = e;
    let s = reactCoreLibraryReexport.useRef(false);
    let u = reactCoreLibraryReexport.useRef(0);
    let d = translationContextProvider.useTranslation();
    let h = reactContextProviderHook.useContextValue();
    let m = y({
      toast: o,
      onCancel: () => {
        var e;
        s.current = true;
        if ((e = h.onCancelDownloadTranslation) !== null && e !== undefined) {
          e.call(h, {
            duration: Date.now() - u.current
          });
        }
      }
    });
    let [v, x] = reactCoreLibraryReexport.useState();
    let w = reactCoreLibraryReexport.useRef(null);
    let N = reactFunctionMemoHook.useMemoizedCallback(async () => {
      if (n) {
        var e;
        u.current = Date.now();
        s.current = false;
        let t = await pdfDocumentCore.PDFDocument.create();
        let r = n.numPages;
        for (let e = 1; e <= r; e++) {
          let a;
          if (s.current) {
            return;
          }
          m.updateProgress({
            progressPage: e,
            totalPage: r
          });
          let l = await i(e);
          if (s.current) {
            return;
          }
          let o = await n.getPage(e);
          let c = o.getViewport({
            scale: 3
          });
          let u = new Promise(e => a = e);
          x({
            pdfPage: o,
            viewport: c,
            overlaysInPage: l,
            onFinish() {
              if (a != null) {
                a({});
              }
            }
          });
          if (s.current) {
            return;
          }
          let d = await u.then(() => {
            var e;
            if ((e = w.current) === null || e === undefined) {
              return undefined;
            } else {
              return e.getCanvas();
            }
          });
          x(undefined);
          if (d) {
            if (s.current) {
              return;
            }
            let e = await new Promise(e => {
              d.toBlob(t => e(t), "image/png");
            });
            if (e) {
              if (s.current) {
                return;
              }
              let n = await e.arrayBuffer();
              let r = await t.embedPng(n);
              let a = {
                width: c.width / 3,
                height: c.height / 3
              };
              t.addPage([a.width, a.height]).drawImage(r, {
                x: 0,
                y: 0,
                width: a.width,
                height: a.height
              });
            }
          }
        }
        m.startExporting();
        let o = await t.save();
        m.startDownloading();
        if ((e = h.onExportTranslation) !== null && e !== undefined) {
          e.call(h);
        }
        c.saveAs(new Blob([o], {
          type: "application/pdf"
        }), `${(a == null ? undefined : a.replace(/\.[^.]+$/i, "")) || "download"}_${d("read_translate_tag_translated")}.pdf`);
      }
    });
    reactCoreLibraryReexport.useImperativeHandle(t, () => ({
      download: N
    }));
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: v ? reactJsxRuntimeCoreReexport.jsx("div", {
        className: S["translate-page-wrap"],
        children: reactJsxRuntimeCoreReexport.jsx(C, {
          ref: w,
          ...v
        })
      }) : null
    });
  });
  let C = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      viewport: n
    } = e;
    let [l, i] = reactCoreLibraryReexport.useState([]);
    let s = reactCoreLibraryReexport.useRef(null);
    let c = reactCoreLibraryReexport.useRef(null);
    reactCoreLibraryReexport.useImperativeHandle(t, () => ({
      getCanvas: () => c.current ? o(c.current, {
        logging: true,
        height: n.height,
        width: n.width,
        scale: 1,
        backgroundColor: null
      }) : Promise.resolve(undefined),
      clear() {
        i([]);
      }
    }));
    reactCoreLibraryReexport.useEffect(() => {
      async function t(e) {
        var t;
        let {
          pdfPage: n,
          viewport: r,
          overlaysInPage: l,
          onFinish: o
        } = e;
        let c = (t = s.current) === null || t === undefined ? undefined : t.getContext("2d");
        if (c) {
          let e = n.render({
            canvasContext: c,
            viewport: r,
            annotationMode: pdfjsDisplayCore.AnnotationMode.DISABLE
          }).promise;
          await Promise.race([e, promiseAsyncUtilities.createDelayedPromise(3000).then(() => false)]);
        }
        let u = l.map(() => {
          let e;
          let t = new Promise(t => e = t);
          return {
            resolve: e,
            promise: t
          };
        });
        i(l.map((e, t) => ({
          overlay: e,
          viewport: r,
          onFinish(e) {
            var n;
            var r;
            if ((r = u[t]) !== null && r !== undefined && (n = r.resolve) !== null && n !== undefined) {
              n.call(r, e);
            }
          }
        })));
        await Promise.all(u.map(e => {
          let {
            promise: t
          } = e;
          return Promise.race([t.then(() => true), promiseAsyncUtilities.createDelayedPromise(3000).then(() => false)]);
        }));
        o();
      }
      if (e) {
        t(e);
      }
    }, [e]);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      ref: c,
      className: S["translate-page"],
      style: {
        height: n.height,
        width: n.width,
        "--scale-factor": 3
      },
      children: [reactJsxRuntimeCoreReexport.jsx("canvas", {
        ref: s,
        className: S["page-canvas"],
        ...n
      }), l.map((e, t) => reactCoreLibraryReexport.createElement(T, {
        ...e,
        key: t
      }))]
    });
  });
  let T = e => {
    let {
      overlay: {
        area: t,
        content: n,
        overlayClassName: r
      }
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: d(S["translate-overlay"], r),
      style: {
        left: `${t[0] * 100}%`,
        top: `${t[1] * 100}%`,
        width: `${(t[2] - t[0]) * 100}%`,
        height: `${(t[3] - t[1]) * 100}%`
      },
      children: n
    });
  };
  require.d(exports, {
    PdfTranslationViewer: function () {
      return N;
    }
  });
}