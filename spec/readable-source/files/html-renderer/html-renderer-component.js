// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'i' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'a' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'l' to 'semiSpinComponent'
// - Resolved require(714437) to 'semi-spin-component'
// - Renamed variable 's' to 'samanthaToastFactory'
// - Resolved require(697541) to 'samantha-toast-factory'
// - Renamed variable 'u' to 'warningIcon_1'
// - Resolved require(215884) to 'warning-icon_1'
// - Renamed variable 'c' to 'eventReportingService'
// - Resolved require(703133) to 'event-reporting-service'
// - Renamed variable 'd' to 'apiServicesCollection'
// - Resolved require(147875) to 'api-services-collection'
// - Renamed variable 'f' to 'htmlRendererSecurityUtil'
// - Resolved require(462061) to 'html-renderer-security-util'
// - Renamed variable 'h' to 'staticPreviewConfig'
// - Resolved require(88616) to 'static-preview-config'
// - Renamed variable 'w' to 'fileUrlRefreshHook'
// - Resolved require(875965) to 'file-url-refresh-hook'
// - Renamed variable 'E' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'R' to 'htmlRenderer'
// - Resolved require(865723) to 'html-renderer'
// - Renamed variable 'b' to 'htmlStreamStates'
// - Resolved require(377455) to 'html-stream-states'
// - Renamed variable 'y' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'zQ' to 'createEventReporter' (module 703133)
// - Updated imported property 'mH' to 'SamanthaApiService' (module 147875)
// - Updated imported property 'T' to 'useRefreshedFileUrls' (module 875965)
// - Updated imported property 'Q9' to 'generateShortHash' (module 462061)
// - Updated imported property 'dQ' to 'signDomains' (module 88616)
// - Updated imported property 'pJ' to 'toastInstance' (module 697541)
// - Updated imported property 'Z' to 'Spin' (module 714437)
// - Updated imported property 'Z' to 'WarningIcon' (module 215884)
// - Updated imported property 'Wy' to 'HtmlRenderer' (module 865723)
// - Updated imported property 'Lo' to 'streamingStates' (module 377455)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: html-renderer.e7a0387b.js
         * chunkId: 19906
         * moduleId: 773976
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var semiSpinComponent = require("semi-spin-component") /*id: 714437*/;
  var samanthaToastFactory = require("samantha-toast-factory") /*id: 697541*/;
  var warningIcon_1 = require("warning-icon_1") /*id: 215884*/;
  var eventReportingService = require("event-reporting-service") /*id: 703133*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var htmlRendererSecurityUtil = require("html-renderer-security-util") /*id: 462061*/;
  let m = e => {
    let {
      batchSize: r = 10,
      throttleMs: t = 500,
      processBatch: i
    } = e;
    let o = reactCoreLibraryReexport.useRef([]);
    let a = reactCoreLibraryReexport.useRef(null);
    let l = reactCoreLibraryReexport.useRef(true);
    reactCoreLibraryReexport.useEffect(() => () => {
      l.current = false;
      if (a.current) {
        clearTimeout(a.current);
      }
    }, []);
    let s = reactCoreLibraryReexport.useCallback(() => {
      if (!a.current) {
        a.current = setTimeout(async () => {
          if (!l.current) {
            return;
          }
          let e = o.current.splice(0, r);
          if (e.length > 0) {
            await i(e);
          }
          a.current = null;
          if (o.current.length > 0) {
            s();
          }
        }, t);
      }
    }, [r, t, i]);
    return {
      enqueue: reactCoreLibraryReexport.useCallback(function () {
        var e = arguments.length;
        var r = Array(e);
        var t = 0;
        for (; t < e; t++) {
          r[t] = arguments[t];
        }
        o.current.push(...r);
        s();
      }, [s])
    };
  };
  var staticPreviewConfig = require("static-preview-config") /*id: 88616*/;
  let p = {};
  var v = require.p + "static/image/html-image-reject.7023e418.jpeg";
  var fileUrlRefreshHook = require("file-url-refresh-hook") /*id: 875965*/;
  function g(e, r, t) {
    var n;
    if ((r = typeof (n = function (e, r) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var t = e[Symbol.toPrimitive];
      if (t !== undefined) {
        var n = t.call(e, r || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (r === "string" ? String : Number)(e);
    }(r, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, r, {
        value: t,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[r] = t;
    }
    return e;
  }
  class _ {
    constructor() {
      g(this, "promise", undefined);
      g(this, "resolve", undefined);
      g(this, "reject", undefined);
      this.promise = new Promise((e, r) => {
        this.resolve = e;
        this.reject = r;
      });
    }
  }
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var htmlRenderer = require("html-renderer") /*id: 865723*/;
  var htmlStreamStates = require("html-stream-states") /*id: 377455*/;
  var $ = {
    container: "container-VdIXha",
    "html-previewer": "html-previewer-lpxf0j",
    "hide-bg": "hide-bg-d6ypOV",
    loading: "loading-XoVpRZ",
    "error-wrapper": "error-wrapper-CLdO2x",
    "error-container": "error-container-XRTZ8E",
    "error-icon": "error-icon-pCtvxR",
    "error-text": "error-text-isukkn"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let T = reactCoreLibraryReexport.forwardRef(function (e, r) {
    let t;
    let {
      code: i,
      loading: g,
      onError: T,
      onSuccess: S,
      className: x,
      uniqueId: k,
      fullscreen: N = false,
      onPreviewSizeChanged: M,
      autoHeight: W = false,
      onPageScroll: L,
      hideScrollBarWhileStreaming: F = false
    } = e;
    let C = i18nTranslationUtils.useTranslationWithFallback();
    let A = reactCoreLibraryReexport.useRef(null);
    let j = reactCoreLibraryReexport.useRef();
    let P = reactCoreLibraryReexport.useRef();
    let I = reactCoreLibraryReexport.useRef();
    reactCoreLibraryReexport.useImperativeHandle(r, () => ({
      exportImage: () => {
        var e;
        j.current = new _();
        if ((e = A.current) !== null && e !== undefined) {
          e.dispatchExportImgAction();
        }
        return j.current.promise;
      },
      getImageAfterRender: () => {
        let e = false;
        P.current = new _();
        I.current = new _();
        I.current.promise.then(() => {
          var r;
          if (!e) {
            e = true;
            if ((r = A.current) !== null && r !== undefined) {
              r.dispatchExportImgAction();
            }
          }
        });
        return P.current.promise;
      }
    }));
    let {
      onNewImageFound: Z
    } = function (e) {
      let {
        uniqueId: r,
        previewerRef: t
      } = e;
      let i = reactCoreLibraryReexport.useMemo(() => v, []);
      let {
        enqueue: o
      } = m({
        batchSize: 10,
        processBatch: reactCoreLibraryReexport.useCallback(async e => {
          var n;
          var o;
          var a;
          var l;
          var s;
          var u;
          let f = eventReportingService.createEventReporter({
            eventName: "html_preview_sandbox_image_review",
            meta: {
              total: e.length,
              scene: "diagram"
            }
          });
          let m = /^data:image\/\w+;base64,(.+)/;
          let h = [];
          let v = [];
          e.forEach(e => {
            let [, {
              originalUrl: r
            }] = e;
            if (r.match(m)) {
              v.push(e);
            } else {
              h.push(e);
            }
          });
          try {
            let e = await apiServicesCollection.SamanthaApiService.ImageReview({
              message_id: r,
              image_urls: h.map(e => {
                let [, {
                  originalUrl: r
                }] = e;
                return r;
              }),
              image_base64s: v.map(e => {
                let [, {
                  originalUrl: n
                }] = e;
                return n.match(m)?.[1] ?? "";
              })
            });
            let u = {
              pass: 0,
              reject: 0
            };
            let c = {};
            if ((o = e.data) !== null && o !== undefined && (n = o.url_result) !== null && n !== undefined) {
              n.forEach((e, r) => {
                let {
                  err_code: t
                } = e;
                let [n, {
                  originalUrl: i
                }] = h[r];
                if (t === 0) {
                  u.pass += 1;
                } else {
                  u.reject += 1;
                }
                c[n] = {
                  originalUrl: i,
                  statusCode: t ?? 1
                };
              });
            }
            if ((l = e.data) !== null && l !== undefined && (a = l.base64_result) !== null && a !== undefined) {
              a.forEach((e, r) => {
                let {
                  err_code: t
                } = e;
                let [n, {
                  originalUrl: i
                }] = v[r];
                if (t === 0) {
                  u.pass += 1;
                } else {
                  u.reject += 1;
                }
                c[n] = {
                  originalUrl: i,
                  statusCode: t ?? 1
                };
              });
            }
            f.success({
              meta: u
            });
            Object.assign(p, c);
            if ((s = t.current) !== null && s !== undefined) {
              s.dispatchImageOverrideAction({
                images: Object.fromEntries(Object.entries(c).map(e => {
                  let [r, {
                    originalUrl: t,
                    statusCode: n
                  }] = e;
                  return [r, {
                    url: n === 0 ? t : i,
                    statusCode: n
                  }];
                }))
              });
            }
          } catch (r) {
            let e = {};
            h.forEach(r => {
              let [t, {
                originalUrl: n
              }] = r;
              e[t] = {
                originalUrl: n,
                statusCode: 1
              };
            });
            v.forEach(r => {
              let [t, {
                originalUrl: n
              }] = r;
              e[t] = {
                originalUrl: n,
                statusCode: 1
              };
            });
            f.error({
              reason: "get_image_review_result_error",
              error: r
            });
            if ((u = t.current) !== null && u !== undefined) {
              u.dispatchImageOverrideAction({
                images: Object.fromEntries(Object.entries(e).map(e => {
                  let [r, {
                    originalUrl: t,
                    statusCode: n
                  }] = e;
                  return [r, {
                    url: n === 0 ? t : i,
                    statusCode: n
                  }];
                }))
              });
            }
          }
        }, [])
      });
      let [a, l] = reactCoreLibraryReexport.useState([]);
      let {
        latestFileUrls: s
      } = fileUrlRefreshHook.useRefreshedFileUrls({
        fileUrls: a,
        enable: true
      });
      reactCoreLibraryReexport.useEffect(() => {
        if (s.length > 0) {
          var e;
          if ((e = t.current) !== null && e !== undefined) {
            e.dispatchImageOverrideAction({
              images: Object.fromEntries(s.map((e, r) => {
                let t = a[r];
                return [htmlRendererSecurityUtil.generateShortHash(t), {
                  url: e,
                  statusCode: +(e !== t)
                }];
              }))
            });
          }
        }
      }, [s, a]);
      return {
        onNewImageFound: reactCoreLibraryReexport.useCallback((e, r) => {
          if (staticPreviewConfig.signDomains.some(e => r.includes(e))) {
            l(e => [...e, r]);
          } else {
            o([e, {
              originalUrl: r,
              currentUrl: r
            }]);
          }
        }, [])
      };
    }({
      previewerRef: A,
      uniqueId: k
    });
    let {
      sendCodeRunStatus: O,
      sendPreviewErrorInfo: D
    } = {
      sendCodeRunStatus: reactCoreLibraryReexport.useCallback((e, r, t) => {
        teaAnalyticsEventTracker.trackEvent("code_run_status", {
          status: e ? "1" : "0",
          run_type: r,
          preview_error_info: r === "preview" ? e ? "" : t : "",
          error_info: r === "run" ? e ? "" : t : ""
        });
      }, []),
      sendPreviewErrorInfo: reactCoreLibraryReexport.useCallback(e => {
        let r = {
          status: "0",
          error_info: JSON.stringify(e)
        };
        teaAnalyticsEventTracker.trackEvent("preview_error_info", r);
      }, [])
    };
    let [B, H] = reactCoreLibraryReexport.useState(true);
    let [z, X] = reactCoreLibraryReexport.useState(true);
    let [U, J] = reactCoreLibraryReexport.useState(false);
    let [V, K] = reactCoreLibraryReexport.useState(0);
    let Q = reactCoreLibraryReexport.useRef(eventReportingService.createEventReporter({
      eventName: "html_preview_sandbox_load",
      meta: {
        scene: "diagram"
      }
    }));
    let G = reactCoreLibraryReexport.useCallback((e, r) => {
      var t;
      var n;
      H(false);
      if (e) {
        X(true);
      }
      let o = e ? "" : (r == null ? undefined : r.errorMsg) || "sandbox start timeout";
      O(e, "preview", o);
      let a = {
        ...r,
        source: i,
        language: "html",
        contentLen: i.length
      };
      if (e) {
        if ((t = Q.current) !== null && t !== undefined) {
          t.success({
            meta: a
          });
        }
      } else {
        J(true);
        if (T != null) {
          T(Error(o));
        }
        if ((n = Q.current) !== null && n !== undefined) {
          n.error({
            reason: o,
            meta: a
          });
        }
      }
    }, [i]);
    let q = reactCoreLibraryReexport.useCallback(() => {
      X(false);
    }, []);
    let Y = reactCoreLibraryReexport.useCallback(e => {
      var r;
      if (z) {
        if ((r = I.current) !== null && r !== undefined) {
          r.resolve("");
        }
        X(false);
        if (e) {
          if (S != null) {
            S();
          }
        } else {
          D(["page render timeout"]);
        }
      }
    }, [z]);
    let ee = reactCoreLibraryReexport.useCallback(e => {
      D(e);
    }, []);
    let er = reactCoreLibraryReexport.useCallback(() => {
      samanthaToastFactory.toastInstance.error({
        content: C("web_ai_coding_preview_link_tips"),
        duration: 2
      });
    }, []);
    let et = reactCoreLibraryReexport.useCallback(e => {
      samanthaToastFactory.toastInstance.warning({
        id: "html-previewer-notice",
        content: e,
        showClose: true,
        duration: 3,
        className: "html-previewer-toast-warning"
      });
    }, []);
    let en = reactCoreLibraryReexport.useCallback(() => {
      if (L != null) {
        L();
      }
    }, [L]);
    let ei = reactCoreLibraryReexport.useRef(null);
    let eo = function (e, r) {
      let {
        width: t,
        height: i,
        fullscreen: o,
        onSizeChanged: a
      } = r;
      let [l, s] = reactCoreLibraryReexport.useState();
      reactCoreLibraryReexport.useLayoutEffect(() => {
        if (!o && e.current) {
          let r = new ResizeObserver(e => {
            if (!e || e.length === 0) {
              return;
            }
            let {
              width: r
            } = e[0].contentRect;
            let n = r / t;
            let o = Math.floor(i * n);
            s({
              width: r,
              height: o,
              scale: n
            });
            if (a != null) {
              a({
                width: r,
                height: o
              });
            }
          });
          r.observe(e.current);
          return () => {
            r.disconnect();
          };
        }
      }, [o]);
      if (!o) {
        return l;
      }
    }(ei, {
      width: 1380,
      height: 820,
      fullscreen: N,
      onSizeChanged: W ? undefined : M
    });
    if (W) {
      t = V < 100 ? 100 : V;
    } else if (eo) {
      t = eo.height;
    }
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      ref: ei,
      className: o($.container, x),
      style: {
        height: t
      },
      children: [B || z ? reactJsxRuntimeCoreReexport.jsx("div", {
        className: $.loading,
        children: reactJsxRuntimeCoreReexport.jsx(semiSpinComponent.Spin, {
          size: "large"
        })
      }) : null, U ? reactJsxRuntimeCoreReexport.jsx("div", {
        className: $["error-wrapper"],
        children: reactJsxRuntimeCoreReexport.jsxs("div", {
          className: $["error-container"],
          children: [reactJsxRuntimeCoreReexport.jsx(warningIcon_1.WarningIcon, {
            className: $["error-icon"]
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: $["error-text"],
            children: C("reading_mindmap_toast_reAsk")
          })]
        })
      }) : null, reactJsxRuntimeCoreReexport.jsx(htmlRenderer.HtmlRenderer, {
        ref: A,
        context: {
          sourceCodeType: "html"
        },
        html: i,
        hideScrollBarWhileStreaming: F,
        isStreaming: g ? htmlStreamStates.streamingStates.Streaming : htmlStreamStates.streamingStates.StreamingEnd,
        autoHeight: W,
        onScreenShot: e => {
          var r;
          var t;
          if ((r = j.current) !== null && r !== undefined) {
            r.resolve(e.base64);
          }
          if ((t = P.current) !== null && t !== undefined) {
            t.resolve(e.base64);
          }
        },
        onContainerLoad: G,
        onPageFirstContentfulPaint: q,
        onPageLoad: Y,
        onPageError: ee,
        onNewImageFound: Z,
        onPageLinkNotice: er,
        onShowNotice: et,
        onBodyResize: e => {
          if (W) {
            K(e.height);
            if (M != null) {
              M({
                height: e.height
              });
            }
          }
        },
        onPageScroll: en,
        className: o($["html-previewer"], W && $["hide-bg"]),
        style: eo && !W ? {
          transform: `scale(${eo.scale})`,
          width: 1380,
          height: 820
        } : undefined
      })]
    });
  });
  require.r(exports);
  require.d(exports, {
    HTMLRenderer: function () {
      return T;
    }
  });
}