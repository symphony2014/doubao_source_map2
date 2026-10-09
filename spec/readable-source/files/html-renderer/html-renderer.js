// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Wy' to 'HtmlRenderer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: html-renderer.e7a0387b.js
         * chunkId: 19906
         * moduleId: 865723
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var uuidGeneratorUtil = require("uuid-generator-util") /*id: 641535*/;
  var debounceUtilWrapper = require("debounce-util-wrapper") /*id: 213804*/;
  var cryptoMd5Core = require("crypto-md5-core") /*id: 252278*/;
  var s = cryptoMd5Core;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var c = classnamesUtils;
  var htmlRendererSecurityUtil = require("html-renderer-security-util") /*id: 462061*/;
  let f = e => e.replace(/\n+$/, "");
  function m() {
    let e;
    let r;
    return {
      promise: new Promise((t, n) => {
        e = t;
        r = n;
      }),
      resolve: e,
      reject: r
    };
  }
  var htmlStreamStates = require("html-stream-states") /*id: 377455*/;
  let p = () => {
    let e = reactCoreLibraryReexport.useRef(null);
    let r = reactCoreLibraryReexport.useRef(false);
    reactCoreLibraryReexport.useEffect(() => {
      let t = e.current;
      if (t) {
        let e = () => {
          r.current = true;
        };
        let n = () => {
          r.current = false;
        };
        let i = () => {
          if (r.current) {
            let e = new MouseEvent("pointerdown", {
              bubbles: true,
              cancelable: true
            });
            let r = new MouseEvent("pointerup", {
              bubbles: true,
              cancelable: true
            });
            t.dispatchEvent(e);
            t.dispatchEvent(r);
            let n = new MouseEvent("mousedown", {
              bubbles: true,
              cancelable: true
            });
            let i = new MouseEvent("mouseup", {
              bubbles: true,
              cancelable: true
            });
            t.dispatchEvent(n);
            t.dispatchEvent(i);
          }
        };
        t.addEventListener("mouseenter", e);
        t.addEventListener("mouseleave", n);
        window.addEventListener("blur", i);
        return () => {
          t.removeEventListener("mouseenter", e);
          t.removeEventListener("mouseleave", n);
          window.removeEventListener("blur", i);
        };
      }
    }, []);
    return e;
  };
  var appConstantsMap = require("app-constants-map") /*id: 696878*/;
  var staticPreviewConfig = require("static-preview-config") /*id: 88616*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let _ = reactCoreLibraryReexport.forwardRef((e, r) => {
    let {
      html: t,
      context: l = {
        sourceCodeType: "html"
      },
      isStreaming: u = htmlStreamStates.streamingStates.NoStreaming,
      className: _,
      isHtmlEditing: E = false,
      isResetHtmlEditingState: R,
      onPageFirstPaint: b,
      onPageFirstContentfulPaint: $,
      onPageLoad: y,
      onGenerateImages: T,
      onSaveHTML: S,
      onSaveReactStaticText: x,
      onSaveReactImage: k,
      onSaveReactImages: N,
      onPreProcessHTML: M = e => e,
      onNewImageFound: W,
      onPageLinkNotice: L,
      onShowNotice: F,
      onTrackEvent: C,
      onUploadImage: A,
      autoHeight: j = false,
      hideScrollBarWhileStreaming: P = false
    } = e;
    let I = reactCoreLibraryReexport.useRef(u);
    I.current = u;
    let {
      sourceCodeType: Z = "html"
    } = l;
    let O = p();
    let D = reactCoreLibraryReexport.useRef(null);
    let B = reactCoreLibraryReexport.useRef(uuidGeneratorUtil.generateUuid());
    let H = reactCoreLibraryReexport.useRef(m());
    let z = reactCoreLibraryReexport.useCallback((e, r, t) => {
      let {
        data: n
      } = e;
      if (r === (n == null ? undefined : n.action)) {
        t(n == null ? undefined : n.payload);
      }
    }, []);
    let X = reactCoreLibraryReexport.useCallback((e, r) => {
      let n = D.current?.contentWindow;
      if (n) {
        H.current.promise.then(() => {
          n.postMessage({
            action: e,
            payload: r,
            channelId: B.current
          }, "*");
        });
      }
    }, []);
    let {
      registerEditEvent: U
    } = function (e) {
      let {
        isResetHtmlEditingState: r = false,
        isHtmlEditing: t,
        dispatch: n,
        subscribeIframeAction: o,
        onEdit: a
      } = e;
      reactCoreLibraryReexport.useEffect(() => {
        if (t) {
          if (a != null) {
            a();
          }
        }
        n(appConstantsMap.editorConstants.HTML_EDITABLE, {
          editable: t
        });
      }, [t, n, a]);
      reactCoreLibraryReexport.useEffect(() => {
        if (r) {
          n(appConstantsMap.editorConstants.RESET_EDITING_STATE);
        }
      }, [r, n]);
      return {
        registerEditEvent: reactCoreLibraryReexport.useCallback(e => {
          o(e, appConstantsMap.systemEvents.TRACK_EVENT, () => {});
        }, [o])
      };
    }({
      dispatch: X,
      subscribeIframeAction: z,
      isResetHtmlEditingState: R,
      isHtmlEditing: E,
      onTrackEvent: C,
      onEdit: () => {
        if (!V.current) {
          V.current = J(G.current);
          X(appConstantsMap.editorConstants.HTML, {
            html: V.current,
            isStreaming: false,
            context: l
          });
        }
      }
    });
    let J = reactCoreLibraryReexport.useCallback(e => {
      let r = M(htmlRendererSecurityUtil.addSourceLocationAttrs(e));
      return htmlRendererSecurityUtil.addTrackingKeyAttrs(r);
    }, []);
    let V = reactCoreLibraryReexport.useRef("");
    let K = reactCoreLibraryReexport.useMemo(() => u ? "" : J(t), [t, u]);
    V.current = K;
    let Q = reactCoreLibraryReexport.useMemo(() => s(K).toString(), [K]);
    let G = reactCoreLibraryReexport.useRef("");
    G.current = t;
    if (P && u) {
      let e = "<style>html { scrollbar-width: none; }</style>";
      let r = /<html\b[^>]*>/i;
      if (r.test(t)) {
        G.current = t.replace(r, r => `${r}${e}`);
      } else {
        G.current = `${e}${t}`;
      }
    }
    let q = reactCoreLibraryReexport.useRef(0);
    let Y = reactCoreLibraryReexport.useMemo(() => debounceUtilWrapper.createDebounce(() => {
      let e = f(G.current).length;
      if (e > q.current) {
        let r = G.current.slice(q.current, e);
        X(appConstantsMap.editorConstants.HTML_CHUNK, {
          html: r,
          completed: htmlStreamStates.streamingStates.StreamingEnd === I.current
        });
        q.current = e;
      }
    }, 300, {
      leading: false,
      trailing: true
    }), []);
    reactCoreLibraryReexport.useEffect(() => {
      if (en.current && u) {
        Y();
        if (u === htmlStreamStates.streamingStates.StreamingEnd) {
          es();
        }
      }
    }, [t, u]);
    reactCoreLibraryReexport.useImperativeHandle(r, () => ({
      dispatchImageOverrideAction: e => {
        X(appConstantsMap.editorConstants.IMAGE_OVERRIDE, e);
      },
      dispatchChangeImageStatusAction: e => {
        X(appConstantsMap.editorConstants.CHANGE_IMAGE_STATUS, e);
      },
      dispatchResponseUploadImageAction: e => {
        X(appConstantsMap.editorConstants.RESPONSE_UPLOAD_IMAGE, e);
      },
      dispatchExportImgAction: () => {
        X(appConstantsMap.editorConstants.REQUEST_EXPORT_IMG);
      }
    }));
    let ee = reactCoreLibraryReexport.useRef(0);
    let er = reactCoreLibraryReexport.useRef([]);
    let et = reactCoreLibraryReexport.useRef(false);
    let en = reactCoreLibraryReexport.useRef(false);
    let ei = reactCoreLibraryReexport.useRef();
    let eo = reactCoreLibraryReexport.useRef();
    let ea = reactCoreLibraryReexport.useRef();
    reactCoreLibraryReexport.useEffect(() => {
      en.current = false;
      et.current = false;
      if (ei.current) {
        clearTimeout(ei.current);
      }
      if (eo.current) {
        clearTimeout(eo.current);
      }
      if (ea.current) {
        clearTimeout(ea.current);
      }
    }, [Q]);
    let el = reactCoreLibraryReexport.useCallback(() => {
      if (er.current.length > 0) {
        var r;
        if ((r = e.onPageError) !== null && r !== undefined) {
          r.call(e, er.current);
        }
      }
    }, []);
    let es = reactCoreLibraryReexport.useCallback(() => {
      ei.current = window.setTimeout(() => {
        if (en.current && !et.current) {
          if (!et.current) {
            var r;
            if ((r = e.onPageLoad) !== null && r !== undefined) {
              r.call(e, false);
            }
          }
          el();
          clearTimeout(ei.current);
        }
      }, 12000);
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      er.current = [];
      ee.current = 0;
      let r = () => {
        var t;
        var i;
        if (!en.current) {
          if (ee.current < 1) {
            ee.current += 1;
            if (D.current) {
              en.current = false;
              D.current.src = xssContentSanitizer.sanitizeUrl(`${staticPreviewConfig.previewBaseUrl}?${j ? "need_resize_observer=1&need_scroll_notice=1&" : ""}retry=${Date.now()}&channelId=${B.current}`, null, {
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
                filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$N-%lJNamw1$2xNNWFtRkhSakJNTTBKelp*Z*tjR0pwT$cxa%0xWjFXa2RHT%d*WE9-$k1WMD%yWWxoQ2RtSnRWblZr%0%xMll6Tktha3d5T$d4ak0wNW9XakpWZ*xre%9Xd*F$emx2Wk$je*MweFl%bWhp-lZKcFlqTm5kb%Z-Tld0-$dHZDFaRWhPTkZsW$NtNWtXRTA5"
              });
              clearTimeout(eo.current);
              eo.current = window.setTimeout(r, 10000);
            } else {
              if ((t = e.onContainerLoad) !== null && t !== undefined) {
                t.call(e, false, {
                  errorMsg: "iframe dom not found"
                });
              }
              clearTimeout(eo.current);
            }
          } else {
            if ((i = e.onContainerLoad) !== null && i !== undefined) {
              i.call(e, false, {
                errorMsg: "sandbox load timeout"
              });
            }
            clearTimeout(eo.current);
          }
        }
      };
      eo.current = window.setTimeout(r, 10000);
      if (!I.current || I.current === htmlStreamStates.streamingStates.StreamingEnd) {
        es();
      }
      return () => {
        el();
        if (ei.current) {
          clearTimeout(ei.current);
        }
        if (eo.current) {
          clearTimeout(eo.current);
        }
        if (ea.current) {
          clearTimeout(ea.current);
        }
        en.current = false;
      };
    }, []);
    let eu = reactCoreLibraryReexport.useCallback(r => {
      if (r.target === D.current) {
        var t;
        if ((t = e.onContainerLoad) !== null && t !== undefined) {
          t.call(e, false, {
            errorMsg: r.message,
            url: staticPreviewConfig.previewBaseUrl
          });
        }
      }
    }, []);
    let ec = reactCoreLibraryReexport.useCallback(() => {
      if (eo.current) {
        clearTimeout(eo.current);
      }
      ea.current = window.setTimeout(() => {
        var r;
        if (!en.current) {
          if ((r = e.onContainerLoad) !== null && r !== undefined) {
            r.call(e, false, {
              errorMsg: `url=${staticPreviewConfig.previewBaseUrl} load error`,
              url: staticPreviewConfig.previewBaseUrl
            });
          }
        }
      }, 2000);
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      let r = D.current;
      if (!r) {
        return;
      }
      let t = Date.now();
      let i = n => {
        if (n.data.channelId === B.current) {
          z(n, appConstantsMap.systemEvents.DAEMON_LOADED, () => {
            var n;
            var i;
            H.current.resolve(undefined);
            let o = Date.now();
            if (r != null && (n = r.contentWindow) !== null && n !== undefined) {
              n.focus();
            }
            en.current = true;
            clearTimeout(eo.current);
            if ((i = e.onContainerLoad) !== null && i !== undefined) {
              i.call(e, true, {
                duration: o - t
              });
            }
            let a = !!I.current;
            X(appConstantsMap.editorConstants.HTML, {
              html: K,
              isStreaming: a,
              context: l
            });
            if (a) {
              Y();
            }
          });
          z(n, appConstantsMap.systemEvents.RENDERER_PERFORMANCE_FP, () => {
            if (b != null) {
              b();
            }
          });
          z(n, appConstantsMap.systemEvents.RENDERER_PERFORMANCE_FCP, () => {
            if ($ != null) {
              $();
            }
          });
          z(n, appConstantsMap.systemEvents.RENDERER_PAGE_LOAD, () => {
            if (y != null) {
              y(true);
            }
            et.current = true;
          });
          z(n, appConstantsMap.systemEvents.RENDERER_PAGE_ERROR, e => {
            er.current.push(e);
          });
          z(n, appConstantsMap.systemEvents.TRACK_EVENT, e => {
            let {
              eventName: r,
              params: t
            } = e || {};
            if (r) {
              if (C != null) {
                C(r, t);
              }
            }
          });
          z(n, appConstantsMap.systemEvents.REQUEST_LLM_IMAGE, async e => {
            let {
              value: r,
              searchMode: t
            } = e;
            let n = await (T == null ? undefined : T(r, t));
            X(appConstantsMap.editorConstants.RESPONSE_LLM_IMAGE, {
              searchMode: t,
              ...n
            });
          });
          z(n, appConstantsMap.systemEvents.REQUEST_ASK_AI, r => {
            var t;
            let {
              value: n,
              refHtml: i,
              line: o,
              column: a
            } = r;
            let l = {
              userInput: n,
              referenceCodeSnippet: htmlRendererSecurityUtil.removeTrackingAttrs(i),
              line: o,
              column: a
            };
            if ((t = e.onAskAI) !== null && t !== undefined) {
              t.call(e, l);
            }
          });
          z(n, appConstantsMap.systemEvents.SHOW_NOTICE, e => {
            let {
              message: r
            } = e;
            if (F != null) {
              F(r);
            }
          });
          z(n, appConstantsMap.systemEvents.REPLACE_STATIC_TEXT, e => {
            let {
              key: r,
              value: t,
              line: n,
              column: i,
              staticContent: o
            } = e;
            if (Z === "react") {
              if (x != null) {
                x({
                  line: n,
                  column: i,
                  value: t,
                  previousValue: o.text
                });
              }
            } else {
              let e = htmlRendererSecurityUtil.updateElementTextContent(G.current, r, t);
              if (G.current !== e) {
                G.current = e;
                if (S != null) {
                  S(G.current);
                }
              }
            }
          });
          z(n, appConstantsMap.systemEvents.REPLACE_IMAGE_URL, e => {
            let {
              key: r,
              value: t,
              line: n,
              column: i,
              staticContent: o
            } = e;
            if (Z === "react") {
              if (k != null) {
                k({
                  line: n,
                  column: i,
                  value: t,
                  previousValue: o.src
                });
              }
            } else {
              let e = htmlRendererSecurityUtil.updateElementSrcTrack(G.current, r, t);
              if (G.current !== e) {
                G.current = e;
                if (S != null) {
                  S(G.current);
                }
              }
            }
          });
          z(n, appConstantsMap.systemEvents.REPLACE_ALL_IMAGE_URL, e => {
            let {
              images: r
            } = e;
            if (Z === "react") {
              if (N != null) {
                N(r);
              }
            } else {
              let e = htmlRendererSecurityUtil.updateMultipleElementSrc(G.current, r);
              if (G.current !== e) {
                G.current = e;
                if (S != null) {
                  S(G.current);
                }
              }
            }
          });
          z(n, appConstantsMap.systemEvents.RENDERER_PAGE_LINK_NOTICE, () => {
            if (L != null) {
              L();
            }
          });
          z(n, appConstantsMap.systemEvents.NEW_IMAGE_FOUND, e => {
            let {
              key: r,
              src: t,
              attributes: n
            } = e;
            if (W != null) {
              W(r, t, n);
            }
          });
          z(n, appConstantsMap.systemEvents.REQUEST_UPLOAD_IMAGE, e => {
            let {
              image: r
            } = e;
            if (A != null) {
              A(r);
            }
          });
          z(n, appConstantsMap.systemEvents.RESPONSE_EXPORT_IMG, r => {
            var t;
            if ((t = e.onScreenShot) !== null && t !== undefined) {
              t.call(e, r);
            }
          });
          z(n, appConstantsMap.systemEvents.BODY_RESIZE, r => {
            var t;
            let {
              height: n
            } = r;
            if ((t = e.onBodyResize) !== null && t !== undefined) {
              t.call(e, {
                height: Math.max(n, 100)
              });
            }
          });
          z(n, appConstantsMap.systemEvents.RENDERER_PAGE_SCROLL_NOTICE, () => {
            var r;
            if ((r = e.onPageScroll) !== null && r !== undefined) {
              r.call(e);
            }
          });
          U(n);
        }
      };
      window.addEventListener("message", i);
      if (r != null) {
        r.addEventListener("load", ec);
      }
      if (r != null) {
        r.addEventListener("error", eu);
      }
      r.src = xssContentSanitizer.sanitizeUrl(`${staticPreviewConfig.previewBaseUrl}?${j ? "need_resize_observer=1&need_scroll_notice=1&" : ""}retry=${Date.now()}&channelId=${B.current}`, null, {
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
        filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$N-%lJNamw1$2xNNWFtRkhSakJNTTBKelp*Z*tjR0pwT$cxa%0xWjFXa2RHT%d*WE9-$k1WMD%yWWxoQ2RtSnRWblZr%0%xMll6Tktha3d5T$d4ak0wNW9XakpWZ*xre%9Xd*F$emx2Wk$je*MweFl%bWhp-lZKcFlqTm5kb%Z-Tld0-$dHZDFaRWhPTkZsW$NtNWtXRTA5"
      });
      return () => {
        window.removeEventListener("message", i);
        r.removeEventListener("load", ec);
        r.removeEventListener("error", eu);
      };
    }, [X, K, z, U]);
    let ed = reactCoreLibraryReexport.useMemo(() => {
      H.current.promise.catch(() => {});
      H.current.reject();
      H.current = m();
      return reactJsxRuntimeCoreReexport.jsx("iframe", {
        ref: D,
        sandbox: "allow-scripts allow-same-origin allow-downloads allow-popups allow-forms allow-top-navigation-by-user-activation allow-top-navigation-to-custom-protocols"
      }, Q);
    }, [Q]);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: c("html-previewer-wrapper", _),
      children: reactJsxRuntimeCoreReexport.jsx("div", {
        className: c("html-previewer"),
        ref: O,
        children: ed
      })
    });
  });
  require.d(exports, {
    HtmlRenderer: function () {
      return _;
    }
  });
}