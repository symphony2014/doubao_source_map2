// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'N' to 'HtmlPreviewer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: canvas-code-modal.217f8b76.js
         * chunkId: 54360
         * moduleId: 885772
         */
module.exports = function (module, exports, require) {
  var n;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var collectionPartitionFactory = require("collection-partition-factory") /*id: 505294*/;
  var throttledArgStringifyUtil = require("throttled-arg-stringify-util") /*id: 15104*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  var resourceUrlSigner = require("resource-url-signer") /*id: 869102*/;
  var samanthaCodeAssistantImageService = require("samantha-code-assistant-image-service") /*id: 954528*/;
  var fileUrlRefreshHook = require("file-url-refresh-hook") /*id: 875965*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var semiSpinComponent = require("semi-spin-component") /*id: 714437*/;
  var samanthaToastFactory = require("samantha-toast-factory") /*id: 697541*/;
  var eventReportingService = require("event-reporting-service") /*id: 703133*/;
  var htmlParserCore = require("html-parser-core") /*id: 948150*/;
  var cssTreeCoreParser = require("css-tree-core-parser") /*id: 364414*/;
  var cryptoMd5Core = require("crypto-md5-core") /*id: 252278*/;
  var E = cryptoMd5Core;
  let w = "data-doubao-key";
  function R(e) {
    return E(e).toString().substring(0, 8);
  }
  function S(e, t) {
    let r = cssTreeCoreParser.parse(e, {
      parseValue: true,
      parseCustomProperty: true
    });
    let n = ["background", "background-image"];
    cssTreeCoreParser.walk(r, {
      visit: "Declaration",
      enter(e) {
        if (n.includes(e.property)) {
          let r = new cssTreeCoreParser.lexer();
          if (e.value.type === "Value") {
            e.value.children.forEach(e => {
              if (e.type === "Url") {
                let n = t(e.value);
                r.appendData({
                  type: "Function",
                  name: "var",
                  children: new cssTreeCoreParser.lexer().appendData({
                    type: "Identifier",
                    name: `--image-${n}`
                  })
                });
              } else if (e.type === "Function" && ["url", "image"].includes(e.name)) {
                let n = "";
                cssTreeCoreParser.walk(e, {
                  visit: "String",
                  enter(e) {
                    n = e.value;
                  }
                });
                if (n) {
                  let e = t(n);
                  r.appendData({
                    type: "Function",
                    name: "var",
                    children: new cssTreeCoreParser.lexer().appendData({
                      type: "Identifier",
                      name: `--image-${e}`
                    })
                  });
                }
              } else {
                r.appendData(e);
              }
            });
            e.value.children = r;
          }
        }
      }
    });
    return cssTreeCoreParser.generate(r);
  }
  function _(e, t, r) {
    let n = new DOMParser().parseFromString(e, "text/html").body.querySelector(`[${w}="${t}"]`);
    return (n == null ? undefined : n.getAttribute(r)) || "";
  }
  function O(e) {
    return !e.startsWith("http://") && !e.startsWith("https://");
  }
  function x(e, t) {
    try {
      return new URL(e).hostname.endsWith(t);
    } catch {
      return false;
    }
  }
  let P = {};
  var threadLayer2Constants = require("thread-layer2-constants") /*id: 768761*/;
  let D = e => {
    let {
      batchSize: t = 10,
      throttleMs: r = 500,
      processBatch: n
    } = e;
    let o = reactCoreLibraryReexport.useRef([]);
    let i = reactCoreLibraryReexport.useRef(null);
    let s = reactCoreLibraryReexport.useRef(true);
    reactCoreLibraryReexport.useEffect(() => () => {
      s.current = false;
      if (i.current) {
        clearTimeout(i.current);
      }
    }, []);
    let l = reactCoreLibraryReexport.useCallback(() => {
      if (!i.current) {
        i.current = setTimeout(async () => {
          if (!s.current) {
            return;
          }
          let e = o.current.splice(0, t);
          if (e.length > 0) {
            await n(e);
          }
          i.current = null;
          if (o.current.length > 0) {
            l();
          }
        }, r);
      }
    }, [t, r, n]);
    return {
      enqueue: reactCoreLibraryReexport.useCallback(function () {
        var e = arguments.length;
        var t = Array(e);
        var r = 0;
        for (; r < e; r++) {
          t[r] = arguments[r];
        }
        o.current.push(...t);
        l();
      }, [l])
    };
  };
  var canvasLoadErrorResultPage = require("canvas-load-error-result-page") /*id: 781022*/;
  var codeCanvasComponent = require("code-canvas-component") /*id: 832030*/;
  var aiGenerateLabel = require("ai-generate-label") /*id: 162855*/;
  var A = require.p + "static/image/html-image-reject.7023e418.jpeg";
  var T = require.p + "static/image/html-image-loading.870bba3c.gif";
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var canvasCodeModalConstants = require("canvas-code-modal-constants") /*id: 798496*/;
  var uidPathUtils = require("uid-path-utils") /*id: 368151*/;
  var deferredPromiseFactory = require("deferred-promise-factory") /*id: 783660*/;
  let H = () => {
    let e = reactCoreLibraryReexport.useRef(null);
    let t = reactCoreLibraryReexport.useRef(false);
    reactCoreLibraryReexport.useEffect(() => {
      let r = e.current;
      if (r) {
        let e = () => {
          t.current = true;
        };
        let n = () => {
          t.current = false;
        };
        let a = () => {
          if (t.current) {
            let e = new MouseEvent("pointerdown", {
              bubbles: true,
              cancelable: true
            });
            let t = new MouseEvent("pointerup", {
              bubbles: true,
              cancelable: true
            });
            r.dispatchEvent(e);
            r.dispatchEvent(t);
            let n = new MouseEvent("mousedown", {
              bubbles: true,
              cancelable: true
            });
            let a = new MouseEvent("mouseup", {
              bubbles: true,
              cancelable: true
            });
            r.dispatchEvent(n);
            r.dispatchEvent(a);
          }
        };
        r.addEventListener("mouseenter", e);
        r.addEventListener("mouseleave", n);
        window.addEventListener("blur", a);
        return () => {
          r.removeEventListener("mouseenter", e);
          r.removeEventListener("mouseleave", n);
          window.removeEventListener("blur", a);
        };
      }
    }, []);
    return e;
  };
  let W = e => {
    let {
      iframeElementRef: t
    } = e;
    let r = reactCoreLibraryReexport.useRef(deferredPromiseFactory.createDeferredPromise());
    let n = reactFunctionMemoHook.useMemoizedCallback((e, t, r) => {
      let {
        data: n
      } = e;
      if (t === (n == null ? undefined : n.action)) {
        r(n == null ? undefined : n.payload);
      }
    });
    let o = reactFunctionMemoHook.useMemoizedCallback((e, n) => {
      r.current.promise.then(() => {
        var r;
        var a;
        if ((a = t.current) !== null && a !== undefined && (r = a.contentWindow) !== null && r !== undefined) {
          r.postMessage({
            action: e,
            payload: n
          }, "*");
        }
      });
    });
    return {
      sandboxMessageQueueRef: r,
      subscribeAction: n,
      dispatchAction: o
    };
  };
  var useLatestRef_1 = require("use-latest-ref_1") /*id: 335903*/;
  (n = F || {}).INIT = "init";
  n.LOADING = "loading";
  n.LOADED = "loaded";
  n.ERROR = "error";
  var F = n;
  let U = e => {
    let {
      onReady: t,
      onError: r,
      onTrackEvent: n
    } = e;
    let [o, i] = reactCoreLibraryReexport.useState("init");
    let s = useLatestRef_1.useLatestRef(o);
    let l = reactCoreLibraryReexport.useRef();
    let u = reactCoreLibraryReexport.useCallback(() => {
      if (s.current === F.ERROR) {
        if (n != null) {
          n("sandbox_ready_after_timeout");
        }
      }
      i(F.LOADED);
      if (t != null) {
        t();
      }
    }, [t, n]);
    let c = reactCoreLibraryReexport.useCallback(e => {
      if (r != null) {
        r(e);
      }
    }, [r]);
    let d = reactCoreLibraryReexport.useCallback(() => {
      if (l.current) {
        clearTimeout(l.current);
      }
    }, []);
    let p = reactCoreLibraryReexport.useCallback(() => {
      d();
      l.current = setTimeout(() => {
        if (s.current === F.LOADING) {
          i(F.ERROR);
          if (r != null) {
            r({
              message: "sandbox load timeout"
            });
          }
        }
      }, 10000);
    }, [r]);
    return {
      onDaemonLoaded: u,
      onIframeError: c,
      onIframeMount: reactCoreLibraryReexport.useCallback(() => {
        i(F.LOADING);
        p();
      }, [p])
    };
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let B = {
    locale: "zh",
    sourceCodeType: "html"
  };
  let V = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      html: r,
      htmlPath: n,
      context: o = B,
      isHtmlEditing: i = false,
      htmlEditingversion: s = "1",
      isResetHtmlEditingState: l,
      onSandboxLoad: u,
      onSandboxError: c,
      onPageFirstPaint: d,
      onPageFirstContentfulPaint: p,
      onPageLoad: f,
      onGenerateImages: h,
      onSaveHTML: m,
      onSaveReactStaticText: g,
      onSaveReactImage: v,
      onSaveReactImages: y,
      onPreProcessHTML: E = e => e,
      onNewImageFound: R,
      onPageLinkNotice: S,
      onShowNotice: O,
      onTrackEvent: x,
      onUploadImage: P,
      onRequestResource: D,
      onGetHTMLByFilePath: N,
      onRendererError: j,
      onBlankScreen: M,
      onJumpToSourceCode: A,
      onExitVisualEdit: T
    } = e;
    let $ = {
      ...B,
      ...o
    };
    let {
      sourceCodeType: F = "html"
    } = $;
    let V = H();
    let X = reactCoreLibraryReexport.useRef(null);
    let {
      sandboxMessageQueueRef: G,
      subscribeAction: Q,
      dispatchAction: q
    } = W({
      iframeElementRef: X
    });
    let Y = reactCoreLibraryReexport.useCallback(e => {
      if (c != null) {
        c(e);
      }
    }, [c]);
    let {
      onDaemonLoaded: J,
      onIframeError: K,
      onIframeMount: ee
    } = U({
      onReady: reactCoreLibraryReexport.useCallback(() => {
        if (u != null) {
          u();
        }
      }, [u]),
      onError: Y,
      onTrackEvent: x
    });
    let {
      registerEditEvent: et
    } = function (e) {
      let {
        isResetHtmlEditingState: t = false,
        isHtmlEditing: r,
        htmlEditingversion: n,
        dispatch: o,
        subscribeIframeAction: i
      } = e;
      reactCoreLibraryReexport.useEffect(() => {
        o(canvasCodeModalConstants.htmlEventConstants.HTML_EDITABLE, {
          editable: r,
          version: n
        });
      }, [r, n, o]);
      reactCoreLibraryReexport.useEffect(() => {
        if (t) {
          o(canvasCodeModalConstants.htmlEventConstants.RESET_EDITING_STATE);
        }
      }, [t, o]);
      return {
        registerEditEvent: reactCoreLibraryReexport.useCallback(e => {
          i(e, canvasCodeModalConstants.rendererEventConstants.TRACK_EVENT, () => {});
        }, [i])
      };
    }({
      dispatch: q,
      subscribeIframeAction: Q,
      isResetHtmlEditingState: l,
      isHtmlEditing: i,
      htmlEditingversion: s,
      onTrackEvent: x
    });
    let er = reactCoreLibraryReexport.useCallback((e, t, r) => function (e) {
      let t = new DOMParser().parseFromString(e, "text/html");
      let r = 0;
      Array.from(t.body.children).forEach(function e(t) {
        t.setAttribute(w, String(r++));
        Array.from(t.children).forEach(e);
      });
      return t.documentElement.outerHTML;
    }(E(function (e, t, r) {
      let n = htmlParserCore.parse(e, {
        sourceCodeLocationInfo: true
      });
      (function e(n) {
        if (n.childNodes) {
          n.childNodes.forEach(e);
        }
        if (n.sourceCodeLocation && n.nodeName !== "#text") {
          n.attrs ||= [];
          n.attrs.push({
            name: "data-doubao-line",
            value: String(n.sourceCodeLocation.startLine)
          });
          if (r == null ? undefined : r.isAddEndLine) {
            n.attrs.push({
              name: "data-doubao-end-line",
              value: String(n.sourceCodeLocation.endLine)
            });
          }
          n.attrs.push({
            name: "data-doubao-column",
            value: String(n.sourceCodeLocation.startCol)
          });
          if (t) {
            n.attrs.push({
              name: "data-doubao-relative-path",
              value: String(t)
            });
          }
        }
      })(n);
      return htmlParserCore.serialize(n);
    }(e, t, r))), []);
    let en = reactCoreLibraryReexport.useMemo(() => r ? er(r) : "", [r]);
    let ea = reactCoreLibraryReexport.useCallback(e => {
      if (e.path.endsWith(".html") && e.body) {
        let {
          path: t
        } = uidPathUtils.parseUidPath(e.path);
        return {
          ...e,
          body: er(e.body, t)
        };
      }
      return e;
    }, []);
    let eo = reactCoreLibraryReexport.useCallback(e => {
      if (e) {
        let r = D == null ? undefined : D(e)?.[0];
        return [r ? ea(r) : undefined];
      }
      let r = D == null ? undefined : D();
      if (r == null) {
        return undefined;
      } else {
        return r.map(e => ea(e));
      }
    }, [D]);
    let ei = reactCoreLibraryReexport.useRef(r);
    let es = reactCoreLibraryReexport.useRef(en);
    let el = reactCoreLibraryReexport.useRef(n);
    reactCoreLibraryReexport.useEffect(() => {
      ei.current = r;
    }, [r]);
    reactCoreLibraryReexport.useEffect(() => {
      es.current = en;
    }, [en]);
    reactCoreLibraryReexport.useEffect(() => {
      el.current = n;
    }, [n]);
    reactCoreLibraryReexport.useImperativeHandle(t, () => ({
      dispatchImageOverrideAction: e => {
        q(canvasCodeModalConstants.htmlEventConstants.IMAGE_OVERRIDE, e);
      },
      dispatchResponseUploadImageAction: e => {
        q(canvasCodeModalConstants.htmlEventConstants.RESPONSE_UPLOAD_IMAGE, e);
      },
      dispatchRefreshHtmlAction: e => {
        let t;
        let r;
        if ((e == null ? undefined : e.html) || (e == null ? undefined : e.htmlPath)) {
          t = e.html ? er(e.html) : undefined;
          r = e == null ? undefined : e.htmlPath;
        } else {
          t = es.current;
          r = el.current;
        }
        q(canvasCodeModalConstants.htmlEventConstants.REFRESH_HTML, {
          ...e,
          html: t,
          htmlPath: r
        });
      },
      dispatchUpdateResourceAction: e => {
        var t;
        q(canvasCodeModalConstants.htmlEventConstants.UPDATE_RESOURCE, {
          ...e,
          resources: (t = e.resources) === null || t === undefined ? undefined : t.map(e => ea(e))
        });
      }
    }));
    reactCoreLibraryReexport.useEffect(() => {
      ee();
    }, [ee]);
    let eu = reactCoreLibraryReexport.useRef([]);
    let ec = reactCoreLibraryReexport.useRef(false);
    reactCoreLibraryReexport.useEffect(() => {
      ec.current = false;
    }, [en]);
    let ed = reactCoreLibraryReexport.useCallback(() => {
      var e;
      var t;
      G.current.resolve(undefined);
      if ((t = X.current) !== null && t !== undefined && (e = t.contentWindow) !== null && e !== undefined) {
        e.focus();
      }
      J();
      if (r) {
        q(canvasCodeModalConstants.htmlEventConstants.HTML, {
          html: es.current,
          context: $
        });
      } else {
        q(canvasCodeModalConstants.htmlEventConstants.HTML_PATH, {
          htmlPath: el.current,
          context: $
        });
      }
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      let t = X.current;
      if (!t) {
        return;
      }
      let r = t => {
        Q(t, canvasCodeModalConstants.rendererEventConstants.DAEMON_LOADED, ed);
        Q(t, canvasCodeModalConstants.rendererEventConstants.RENDERER_PERFORMANCE_FP, () => {
          if (d != null) {
            d();
          }
        });
        Q(t, canvasCodeModalConstants.rendererEventConstants.RENDERER_PERFORMANCE_FCP, () => {
          if (p != null) {
            p();
          }
        });
        Q(t, canvasCodeModalConstants.rendererEventConstants.RENDERER_PAGE_LOAD, () => {
          if (f != null) {
            f(true);
          }
          ec.current = true;
        });
        Q(t, canvasCodeModalConstants.rendererEventConstants.RENDERER_PAGE_ERROR, e => {
          eu.current.push(e);
        });
        Q(t, canvasCodeModalConstants.rendererEventConstants.TRACK_EVENT, e => {
          let {
            eventName: t,
            params: r
          } = e || {};
          if (t) {
            if (x != null) {
              x(t, r);
            }
          }
        });
        Q(t, canvasCodeModalConstants.rendererEventConstants.REQUEST_LLM_IMAGE, async e => {
          let {
            value: t,
            searchMode: r
          } = e;
          let n = await (h == null ? undefined : h(t, r));
          q(canvasCodeModalConstants.htmlEventConstants.RESPONSE_LLM_IMAGE, {
            searchMode: r,
            ...n
          });
        });
        Q(t, canvasCodeModalConstants.rendererEventConstants.REQUEST_ASK_AI, t => {
          var r;
          let {
            value: n,
            refHtml: a,
            line: o,
            column: i,
            filePath: s
          } = t;
          let l = {
            userInput: n,
            referenceCodeSnippet: function (e) {
              let t = new DOMParser().parseFromString(e, "text/html");
              let r = t.querySelectorAll(`[${w}]`);
              if (r.length === 0) {
                return e;
              } else {
                r.forEach(e => {
                  e.removeAttribute(w);
                  e.classList.remove("editing-breathing-bg");
                  if (e.classList.length === 0) {
                    e.removeAttribute("class");
                  }
                });
                return t.body.innerHTML;
              }
            }(a),
            line: o,
            column: i,
            filePath: s
          };
          if ((r = e.onAskAI) !== null && r !== undefined) {
            r.call(e, l);
          }
        });
        Q(t, canvasCodeModalConstants.rendererEventConstants.SHOW_NOTICE, e => {
          let {
            message: t
          } = e;
          if (O != null) {
            O(t);
          }
        });
        Q(t, canvasCodeModalConstants.rendererEventConstants.RENDERER_PAGE_ERROR, e => {
          let t = JSON.parse(e);
          if ((t == null ? undefined : t.message) === "js_error") {
            if (j != null) {
              j(t);
            }
          } else if ((t == null ? undefined : t.message) === "blank_screen") {
            if (M != null) {
              M(t);
            }
          }
        });
        Q(t, canvasCodeModalConstants.rendererEventConstants.REPLACE_STATIC_TEXT, e => {
          let {
            key: t,
            value: r,
            line: n,
            column: a,
            filePath: o,
            staticContent: i
          } = e;
          if (F === "react") {
            if (g != null) {
              g({
                line: n,
                column: a,
                value: r,
                previousValue: i.text
              });
            }
          } else {
            let e = o ? N == null ? undefined : N(o) : ei.current;
            if (!e) {
              return;
            }
            let n = function (e, t, r) {
              let n = new DOMParser().parseFromString(e, "text/html");
              let a = 0;
              Array.from(n.body.children).forEach(function e(n) {
                if (String(a++) === t) {
                  n.textContent = r;
                }
                Array.from(n.children).forEach(e);
              });
              return n.documentElement.outerHTML;
            }(e, t, r);
            if (e !== n) {
              ei.current = n;
              if (m != null) {
                m(ei.current, o);
              }
            }
          }
        });
        Q(t, canvasCodeModalConstants.rendererEventConstants.REPLACE_STYLE, e => {
          let {
            key: t,
            filePath: r,
            property: n,
            value: a,
            important: o
          } = e;
          if (F === "react") ;else {
            let e = r ? N == null ? undefined : N(r) : ei.current;
            if (!e) {
              return;
            }
            let i = function (e, t, r, n, a = false) {
              let o = new DOMParser().parseFromString(e, "text/html");
              let i = 0;
              Array.from(o.body.children).forEach(function e(o) {
                if (String(i++) === t) {
                  if (a) {
                    o.style.setProperty(n, r, "important");
                  } else {
                    o.style[n] = r;
                  }
                }
                Array.from(o.children).forEach(e);
              });
              return o.documentElement.outerHTML;
            }(e, t, a, n, o);
            if (e !== i) {
              ei.current = i;
              if (m != null) {
                m(ei.current, r);
              }
            }
          }
        });
        Q(t, canvasCodeModalConstants.rendererEventConstants.REPLACE_IMAGE_URL, e => {
          let {
            key: t,
            value: r,
            line: n,
            column: a,
            filePath: o,
            staticContent: i
          } = e;
          if (F === "react") {
            if (v != null) {
              v({
                line: n,
                column: a,
                value: r,
                previousValue: i.src
              });
            }
          } else {
            let e = o ? N == null ? undefined : N(o) : ei.current;
            if (!e) {
              return;
            }
            let n = function (e, t, r) {
              let n = new DOMParser().parseFromString(e, "text/html");
              let a = 0;
              Array.from(n.body.children).forEach(function e(n) {
                if (String(a++) === t) {
                  n.src = r;
                }
                Array.from(n.children).forEach(e);
              });
              return n.documentElement.outerHTML;
            }(e, t, r);
            if (e !== n) {
              ei.current = n;
              if (m != null) {
                m(ei.current, o);
              }
            }
          }
        });
        Q(t, canvasCodeModalConstants.rendererEventConstants.REPLACE_ALL_IMAGE_URL, e => {
          let {
            images: t,
            filePath: r
          } = e;
          if (F === "react") {
            if (y != null) {
              y(t);
            }
          } else {
            let e = r ? N == null ? undefined : N(r) : ei.current;
            if (!e) {
              return;
            }
            let n = function (e, t) {
              let r = new DOMParser().parseFromString(e, "text/html");
              let n = 0;
              Array.from(r.body.children).forEach(function e(r) {
                let a = String(n++);
                if (t[a]) {
                  r.src = t[a];
                }
                Array.from(r.children).forEach(e);
              });
              return r.documentElement.outerHTML;
            }(e, t);
            if (e !== n) {
              ei.current = n;
              if (m != null) {
                m(ei.current, r);
              }
            }
          }
        });
        Q(t, canvasCodeModalConstants.rendererEventConstants.RENDERER_PAGE_LINK_NOTICE, () => {
          if (S != null) {
            S();
          }
        });
        Q(t, canvasCodeModalConstants.rendererEventConstants.NEW_IMAGE_FOUND, e => {
          let {
            key: t,
            src: r,
            attributes: n
          } = e;
          if (R != null) {
            R(t, r, n);
          }
        });
        Q(t, canvasCodeModalConstants.rendererEventConstants.REQUEST_UPLOAD_IMAGE, e => {
          let {
            image: t
          } = e;
          if (P != null) {
            P(t);
          }
        });
        Q(t, canvasCodeModalConstants.rendererEventConstants.REQUEST_RESOURCE, e => {
          let {
            taskId: r,
            path: n
          } = e;
          let a = eo(n)?.[0];
          if (a) {
            q(canvasCodeModalConstants.htmlEventConstants.RESPONSE_RESOURCE, {
              resource: a,
              path: n,
              taskId: r
            });
          }
        });
        Q(t, canvasCodeModalConstants.rendererEventConstants.RENDERER_PAGE_JUMP_TO_SOURCE_CODE, e => {
          let {
            key: t,
            filePath: r
          } = e;
          let n = r ? N == null ? undefined : N(r) : ei.current;
          if (n) {
            let e = er(n, r, {
              isAddEndLine: true
            });
            let a = _(e, t, "data-doubao-line");
            let o = _(e, t, "data-doubao-end-line");
            if (A != null) {
              A(a, o, r);
            }
          }
        });
        Q(t, canvasCodeModalConstants.rendererEventConstants.RENDERER_PAGE_EXIT_VISUAL_EDIT, () => {
          if (T != null) {
            T();
          }
        });
        et(t);
      };
      window.addEventListener("message", r);
      if (t != null) {
        t.addEventListener("error", K);
      }
      t.src = xssContentSanitizer.sanitizeUrl(threadLayer2Constants.previewBaseUrl, null, {
        logType: "js.href/src",
        reportOnly: "false",
        blackConfig: "{}",
        configMode: "merge",
        isCloseSSRReport: false,
        bid: "flow_web",
        region: "cn",
        urlLimit: "-1",
        htmlLimit: "-1",
        isSaveValidUrl: false,
        isRuntimeLog: false,
        isDOMParser: true,
        escapeRule: "escape-report",
        reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
        scmBranch: "release_train_samantha_2026-03-09_1120843696898",
        scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
        scmVersion: "1.0.4.168",
        webpackPluginVersion: "3.4.5",
        filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBX$Epv-%dSRE1Xb*hXRzkw$1RJNWEyRlhO$z$NTTA1N$d-az$h$0ZZ-jNSWk1qbDBZM*M1ZFZwWE5%Qmpl$*xx$1ZjM%1sbFl%WFJa$0$vd1lWZ*FhRmt6$W5wT%1rNTJZb*N4Z*1KcE9-Z*pi$ll5W$Zk$00xcFlTWFpo%0ZKMFlrTXhlb*x-Tld0WmJ%azB%REpvT%dKW*Qz%mpNa1ox$2tkS2Rt$kRNWEJh-mtwb1lsZFZk$1JJ$*pSWldFcH$aRmhO%FE9PQ"
      });
      return () => {
        window.removeEventListener("message", r);
        t.removeEventListener("error", K);
      };
    }, [q, Q, et]);
    let ep = reactCoreLibraryReexport.useMemo(() => {
      G.current.promise.catch(() => {});
      G.current.reject();
      G.current = deferredPromiseFactory.createDeferredPromise();
      return reactJsxRuntimeCoreReexport.jsx("iframe", {
        ref: X,
        sandbox: "allow-scripts allow-same-origin allow-forms allow-modals allow-downloads allow-popups allow-top-navigation-by-user-activation allow-top-navigation-to-custom-protocols"
      });
    }, []);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: "html-previewer-wrapper",
      children: reactJsxRuntimeCoreReexport.jsx("div", {
        className: "html-previewer",
        ref: V,
        children: ep
      })
    });
  });
  var X = {
    loading: "loading-DzhrQz"
  };
  let G = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      source: n,
      sourceCodeType: b,
      htmlEntry: v,
      htmlEntryPath: y,
      isInCanvas: E = true,
      title: w,
      context: _,
      uniqueId: k,
      artifactId: z,
      resourceId: L,
      version: I,
      resourceVersion: H,
      language: W,
      contentLen: $,
      loadingTip: F,
      renderLoading: U,
      renderResultPage: B,
      isEditing: G,
      editingVersion: Q,
      isReceivedNewMessage: q,
      onSandboxLoaded: Y,
      onSaveHTML: J,
      onSaveReactStaticText: K,
      onSaveReactImage: ee,
      onSaveReactImages: et,
      onRequestResource: er,
      onGetHTMLByFilePath: en,
      onRendererError: ea,
      onBlankScreen: eo,
      onJumpToSourceCode: ei,
      onExitVisualEdit: es,
      onTrackEvent: el,
      virtualizationEditorConfig: eu,
      showDefaultAIGenerateTag: ec = true
    } = e;
    let ed = i18nTranslationUtils.useTranslationWithFallback();
    let ep = reactCoreLibraryReexport.useRef(null);
    let [ef, eh] = reactCoreLibraryReexport.useState(0);
    let [em, eg] = reactCoreLibraryReexport.useState(true);
    let [eb, ev] = reactCoreLibraryReexport.useState(false);
    let [ey, eE] = reactCoreLibraryReexport.useState(false);
    let ew = reactCoreLibraryReexport.useMemo(() => em || ey, [em, ey]);
    reactCoreLibraryReexport.useEffect(() => {
      if (Y != null) {
        Y(!ew && eb);
      }
    }, [ew, eb]);
    let eR = reactCoreLibraryReexport.useMemo(() => T, []);
    let eS = reactCoreLibraryReexport.useMemo(() => A, []);
    let {
      enqueue: e_
    } = D({
      batchSize: 10,
      processBatch: reactCoreLibraryReexport.useCallback(e => {
        let t = eventReportingService.createEventReporter({
          eventName: "html_preview_sandbox_image_review",
          meta: {
            total: e.length
          }
        });
        let r = /^data:image\/\w+;base64,(.+)/;
        let n = [];
        let a = [];
        e.forEach(e => {
          let [, {
            originalUrl: t
          }] = e;
          if (t.match(r)) {
            a.push(e);
          } else {
            n.push(e);
          }
        });
        return apiServicesCollection.SamanthaApiService.ImageReview({
          message_id: k,
          image_urls: n.map(e => {
            let [, {
              originalUrl: t
            }] = e;
            return t;
          }),
          image_base64s: a.map(e => {
            let [, {
              originalUrl: a
            }] = e;
            return a.match(r)?.[1] ?? "";
          })
        }).then(e => {
          var r;
          var o;
          var i;
          var s;
          var l;
          let u = {
            pass: 0,
            reject: 0
          };
          let c = {};
          if ((o = e.data) !== null && o !== undefined && (r = o.url_result) !== null && r !== undefined) {
            r.forEach((e, t) => {
              let {
                err_code: r
              } = e;
              let [a, {
                originalUrl: o
              }] = n[t];
              if (r === 0) {
                u.pass += 1;
              } else {
                u.reject += 1;
              }
              c[a] = {
                originalUrl: o,
                statusCode: r ?? 1
              };
            });
          }
          if ((s = e.data) !== null && s !== undefined && (i = s.base64_result) !== null && i !== undefined) {
            i.forEach((e, t) => {
              let {
                err_code: r
              } = e;
              let [n, {
                originalUrl: o
              }] = a[t];
              if (r === 0) {
                u.pass += 1;
              } else {
                u.reject += 1;
              }
              c[n] = {
                originalUrl: o,
                statusCode: r ?? 1
              };
            });
          }
          t.success({
            meta: u
          });
          Object.assign(P, c);
          if ((l = ep.current) !== null && l !== undefined) {
            l.dispatchImageOverrideAction({
              images: Object.fromEntries(Object.entries(c).map(e => {
                let [t, {
                  originalUrl: r,
                  statusCode: n
                }] = e;
                return [t, {
                  url: n === 0 ? r : eS,
                  statusCode: n
                }];
              }))
            });
          }
        }).catch(e => {
          var r;
          let o = {};
          n.forEach(e => {
            let [t, {
              originalUrl: r
            }] = e;
            o[t] = {
              originalUrl: r,
              statusCode: 1
            };
          });
          a.forEach(e => {
            let [t, {
              originalUrl: r
            }] = e;
            o[t] = {
              originalUrl: r,
              statusCode: 1
            };
          });
          t.error({
            reason: "get_image_review_result_error",
            error: e
          });
          if ((r = ep.current) !== null && r !== undefined) {
            r.dispatchImageOverrideAction({
              images: Object.fromEntries(Object.entries(o).map(e => {
                let [t, {
                  originalUrl: r,
                  statusCode: n
                }] = e;
                return [t, {
                  url: n === 0 ? r : eS,
                  statusCode: n
                }];
              }))
            });
          }
        });
      }, [])
    });
    let [eO, ex] = reactCoreLibraryReexport.useState([]);
    let [eP, eC] = reactCoreLibraryReexport.useMemo(() => collectionPartitionFactory.partitionCollection(eO, e => threadLayer2Constants.allowedDomains.some(t => x(e, t))), [eO]);
    let eD = reactCoreLibraryReexport.useCallback(e => {
      let {
        html: t,
        imageUrls: r
      } = function (e, t) {
        var r;
        let n = new DOMParser().parseFromString(e, "text/html");
        let a = new Map();
        let o = (e, r) => {
          let n = R(e);
          let o = t(e);
          a.set(n, {
            originalUrl: e,
            currentUrl: o,
            attributes: r
          });
          return {
            md5: n,
            newUrl: o
          };
        };
        n.querySelectorAll("img").forEach(e => {
          let t = e.getAttribute("src");
          if (t) {
            let {
              md5: r,
              newUrl: n
            } = o(t, {
              alt: e.alt
            });
            e.dataset.key = r;
            e.dataset.reviewStatus = "-1";
            e.dataset.src = t;
            e.src = n;
          }
        });
        let i = e => o(e).md5;
        n.querySelectorAll("style").forEach(e => {
          if (e.attributes.getNamedItem("type")?.nodeValue !== "text/tailwindcss") {
            e.innerHTML = S(e.innerHTML, i);
          }
        });
        n.querySelectorAll("*").forEach(e => {
          let t = e.getAttribute("style");
          if (t) {
            e.setAttribute("style", S(t, i));
          }
        });
        let s = document.createElement("style");
        s.innerHTML = `${r = Object.fromEntries([...a.entries()].map(e => {
          let [t, r] = e;
          return [t, r.currentUrl];
        })), `:root {
    ${Object.entries(r).map(e => {
          let [t, r] = e;
          return `  --image-${t}: url(${r});`;
        }).join("\n")}
    }`}
  img[data-key]:not([data-review-status='0']) { object-fit: cover !important; }
  `;
        n.head.appendChild(s);
        return {
          html: n.documentElement.outerHTML,
          imageUrls: a
        };
      }(e, e => {
        if (threadLayer2Constants.allowedDomains.some(t => x(e, t)) || threadLayer2Constants.svgMimeTypes.some(t => e.startsWith(t)) || O(e)) {
          return e;
        }
        let t = P[R(e)];
        if (t) {
          if (t.statusCode === 0) {
            return e;
          } else {
            return eS;
          }
        } else {
          return eR;
        }
      });
      let n = [...r.entries()].map(e => {
        let [, {
          originalUrl: t
        }] = e;
        return t;
      });
      ex(e => throttledArgStringifyUtil.throttledStringify(e, n));
      e_(...[...r.entries()].filter(e => {
        let [, {
          originalUrl: t
        }] = e;
        return !threadLayer2Constants.allowedDomains.some(e => x(t, e)) && !threadLayer2Constants.svgMimeTypes.some(e => t.startsWith(e)) && !O(t) && !P[R(t)];
      }));
      return t;
    }, []);
    let {
      latestFileUrls: eN
    } = fileUrlRefreshHook.useRefreshedFileUrls({
      fileUrls: eP,
      enable: true
    });
    let ej = resourceUrlSigner.useSignedUrls(eC);
    let eM = reactCoreLibraryReexport.useMemo(() => {
      let e = [...eN, ...ej.map(e => {
        let {
          newUrl: t
        } = e;
        return t;
      })];
      let t = [...eP, ...ej.map(e => {
        let {
          oldUrl: t
        } = e;
        return t;
      })];
      return Object.fromEntries(e.map((e, r) => {
        let n = t[r];
        return [R(n), {
          url: e,
          statusCode: +(e !== n)
        }];
      }));
    }, [ej, eN]);
    let eA = reactCoreLibraryReexport.useCallback(e => {
      if (!isEmptyUtil.isEmpty(e)) {
        var t;
        if ((t = ep.current) !== null && t !== undefined) {
          t.dispatchImageOverrideAction({
            images: e
          });
        }
      }
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      eA(eM);
    }, [eA, eM]);
    let eT = reactFunctionMemoHook.useMemoizedCallback((e, t) => {
      if (threadLayer2Constants.allowedDomains.some(e => x(t, e)) || threadLayer2Constants.svgMimeTypes.some(e => t.startsWith(e)) || O(t)) {
        ex(e => {
          let r = R(t);
          let n = eM[r];
          if (n) {
            eA({
              [r]: n
            });
            return e;
          } else {
            return throttledArgStringifyUtil.throttledStringify(e, [t]);
          }
        });
      } else {
        e_([e, {
          originalUrl: t,
          currentUrl: t
        }]);
      }
    });
    let ek = reactCoreLibraryReexport.useCallback(() => {
      samanthaToastFactory.toastInstance.error({
        content: ed("web_ai_coding_preview_link_tips"),
        duration: 2
      });
    }, []);
    let ez = reactCoreLibraryReexport.useCallback(e => {
      samanthaToastFactory.toastInstance.warning({
        id: "html-previewer-notice",
        content: e,
        showClose: true,
        duration: 3,
        className: "html-previewer-toast-warning"
      });
    }, []);
    let eL = reactCoreLibraryReexport.useCallback(e => {
      let {
        u8arr: t,
        mime: r
      } = function (e) {
        let r = e.split(",");
        let n = r[0].match(/:(.*?);/)?.[1];
        let a = atob(r[1]);
        let o = a.length;
        let i = new Uint8Array(o);
        while (o--) {
          i[o] = a.charCodeAt(o);
        }
        return {
          u8arr: i,
          mime: n
        };
      }(e);
      let n = new Blob([t], {
        type: r
      });
      samanthaCodeAssistantImageService.uploadImageToCodeAssistant({
        blob: n
      }).then(e => {
        var t;
        if ((t = ep.current) !== null && t !== undefined) {
          t.dispatchResponseUploadImageAction({
            image: {
              url: e.src,
              status: 2
            }
          });
        }
      }).catch(() => {
        var e;
        if ((e = ep.current) !== null && e !== undefined) {
          e.dispatchResponseUploadImageAction({
            image: {
              status: 3
            }
          });
        }
      });
    }, []);
    let eI = reactCoreLibraryReexport.useRef(false);
    reactCoreLibraryReexport.useEffect(() => {
      if (!eI.current && (v || y)) {
        eI.current = true;
      }
    }, [v, y]);
    let eH = reactCoreLibraryReexport.useRef(eventReportingService.createEventReporter({
      eventName: "html_preview_sandbox_load"
    }));
    let eW = reactCoreLibraryReexport.useRef(false);
    let e$ = reactCoreLibraryReexport.useRef(Date.now());
    let eF = reactFunctionMemoHook.useMemoizedCallback(() => ({
      source: n,
      artifactId: z,
      resourceId: L,
      version: I,
      resourceVersion: H,
      title: w,
      language: W,
      contentLen: $,
      duration: Date.now() - e$.current
    }));
    let eU = reactCoreLibraryReexport.useCallback(() => {
      var e;
      eg(false);
      ev(true);
      eE(true);
      if (el != null) {
        el("code_run_status", {
          is_run_success: true,
          run_type: "preview"
        });
      }
      let t = eF();
      let r = eW.current;
      if (r) {
        t.loadedAfterTimeout = r;
      }
      if ((e = eH.current) !== null && e !== undefined) {
        e.success({
          meta: t
        });
      }
    }, [eF, el]);
    let eZ = reactCoreLibraryReexport.useCallback(e => {
      var t;
      eg(false);
      ev(false);
      if (e.message === "sandbox load timeout") {
        eW.current = true;
      }
      if (el != null) {
        el("code_run_status", {
          is_run_success: false,
          run_type: "preview",
          error_info: e.message
        });
      }
      let r = eF();
      if ((t = eH.current) !== null && t !== undefined) {
        t.error({
          meta: r,
          reason: e.message
        });
      }
    }, [eF, el]);
    let eB = reactCoreLibraryReexport.useCallback(() => {
      eE(false);
      if (Y != null) {
        Y(true);
      }
    }, []);
    let eV = reactCoreLibraryReexport.useCallback(e => {
      if (el != null) {
        el("preview_error_info", {
          errors: e
        });
      }
    }, [el]);
    let eX = reactCoreLibraryReexport.useCallback(e => {
      eE(false);
      if (!e) {
        eV(["page render timeout"]);
      }
    }, [eV]);
    let eG = reactCoreLibraryReexport.useCallback(() => {
      eg(true);
      ev(false);
      eE(false);
      eh(e => e + 1);
      eW.current = false;
      e$.current = Date.now();
    }, []);
    let eQ = reactCoreLibraryReexport.useCallback(e => {
      var t;
      var r;
      if ((r = ep.current) !== null && r !== undefined && (t = r.dispatchRefreshHtmlAction) !== null && t !== undefined) {
        t.call(r, e);
      }
      setTimeout(() => {
        eA(eM);
      }, 1000);
    }, [ep, eA, eM]);
    reactCoreLibraryReexport.useImperativeHandle(t, () => {
      return {
        dispatchRefreshHtmlAction: eQ,
        dispatchUpdateResourceAction: ep.current?.dispatchUpdateResourceAction
      };
    }, [eQ, ep.current?.dispatchUpdateResourceAction]);
    let eq = reactCoreLibraryReexport.useMemo(() => B ? B({
      status: "warning",
      description: ed("web_ai_coding_canvas_load_fail_tips"),
      onRetry: eG
    }) : reactJsxRuntimeCoreReexport.jsx(canvasLoadErrorResultPage.CanvasErrorResultPage, {
      status: "warning",
      description: ed("web_ai_coding_canvas_load_fail_tips"),
      onRetry: eG
    }), [B]);
    let eY = reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [ew && reactJsxRuntimeCoreReexport.jsx("div", {
        className: X.loading,
        children: U || reactJsxRuntimeCoreReexport.jsx(semiSpinComponent.Spin, {
          tip: F,
          size: "large"
        })
      }), !em && !eb && reactJsxRuntimeCoreReexport.jsx("div", {
        className: "absolute inset-0 bg-dbx-bg-body-web",
        children: eq
      }), v || y ? reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [reactJsxRuntimeCoreReexport.jsx(V, {
          ref: ep,
          html: v,
          htmlPath: y,
          context: {
            ..._,
            sourceCodeType: b
          },
          isHtmlEditing: G,
          htmlEditingversion: Q,
          isResetHtmlEditingState: q,
          onSandboxLoad: eU,
          onSandboxError: eZ,
          onPageFirstPaint: eB,
          onPageLoad: eX,
          onPageError: eV,
          onAskAI: eu == null ? undefined : eu.askAI,
          onGenerateImages: eu == null ? undefined : eu.generateImages,
          onSaveHTML: J,
          onSaveReactStaticText: K,
          onSaveReactImage: ee,
          onSaveReactImages: et,
          onPreProcessHTML: eD,
          onNewImageFound: eT,
          onPageLinkNotice: ek,
          onShowNotice: ez,
          onTrackEvent: el,
          onUploadImage: eL,
          onRequestResource: er,
          onGetHTMLByFilePath: en,
          onRendererError: ea,
          onBlankScreen: eo,
          onJumpToSourceCode: ei,
          onExitVisualEdit: es
        }, ef), ec && reactJsxRuntimeCoreReexport.jsx(aiGenerateLabel.AiGenerateLabel, {})]
      }) : null]
    });
    if (E) {
      return reactJsxRuntimeCoreReexport.jsx(codeCanvasComponent.Canvas.Body, {
        children: eY
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: "h-full w-full",
        children: eY
      });
    }
  });
  let Q = reactCoreLibraryReexport.memo(G);
  require.d(exports, {
    HtmlPreviewer: function () {
      return Q;
    }
  });
}