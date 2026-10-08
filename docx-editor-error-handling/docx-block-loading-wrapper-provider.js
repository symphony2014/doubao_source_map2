// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'registerBlockLoadingProviders'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 990627
         */
module.exports = function (module, exports, require) {
  var n;
  var o;
  var l;
  var s;
  var a;
  var c;
  var d;
  var u;
  var h;
  var f;
  var g;
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var themeColorConstants = require("theme-color-constants") /*id: 477577*/;
  var docxEditorBlockRenderer = require("docx-editor-block-renderer") /*id: 211843*/;
  var browserThemeManager = require("browser-theme-manager") /*id: 542418*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var k = classnamesUtils;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var docxBlockLoading = require("docx-block-loading") /*id: 973751*/;
  var docxFeatureFlags = require("docx-feature-flags") /*id: 939543*/;
  var blockLoadPerformanceTracker = require("block-load-performance-tracker") /*id: 446264*/;
  var docBlockAnalyticsConstants = require("doc-block-analytics-constants") /*id: 337105*/;
  var firstScreenEventHandlerUtils = require("first-screen-event-handler-utils") /*id: 712591*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var sheetErrorsAndConfig = require("sheet-errors-and-config") /*id: 89207*/;
  var adjustBlockSsrLayoutProvider = require("adjust-block-ssr-layout-provider") /*id: 523731*/;
  var blockRectServiceId = require("block-rect-service-id") /*id: 768934*/;
  var editorContextFacade = require("editor-context-facade") /*id: 788056*/;
  var schedulerProvidersAccessor = require("scheduler-providers-accessor") /*id: 102884*/;
  var docxSsrSchedulerConfig = require("docx-ssr-scheduler-config") /*id: 174298*/;
  var revisionExtensionServiceToken = require("revision-extension-service-token") /*id: 755911*/;
  var loadingIndicatorService = require("loading-indicator-service") /*id: 809257*/;
  var ssrRenderConstants = require("ssr-render-constants") /*id: 130734*/;
  let j = {
    [docBlockTypeConstants.blockTypeConstants.TASK_LIST]: [docBlockAnalyticsConstants.blockStateConstants.TTU],
    [docBlockTypeConstants.blockTypeConstants.ISV]: [docBlockAnalyticsConstants.blockStateConstants.TTV, docBlockAnalyticsConstants.blockStateConstants.TTU],
    [docBlockTypeConstants.blockTypeConstants.FILE]: [docBlockAnalyticsConstants.blockStateConstants.TTV, docBlockAnalyticsConstants.blockStateConstants.TTU],
    [docBlockTypeConstants.blockTypeConstants.IFRAME]: [docBlockAnalyticsConstants.blockStateConstants.TTU],
    [docBlockTypeConstants.blockTypeConstants.BITABLE]: [docBlockAnalyticsConstants.blockStateConstants.TTV, docBlockAnalyticsConstants.blockStateConstants.TTU],
    [docBlockTypeConstants.blockTypeConstants.WHITEBOARD]: [docBlockAnalyticsConstants.blockStateConstants.TTU],
    [docBlockTypeConstants.blockTypeConstants.SHEET]: [docBlockAnalyticsConstants.blockStateConstants.TTU]
  };
  let $ = e => {
    let i = reactCoreLibraryReexport.useRef(false);
    if (!i.current) {
      i.current = true;
      blockLoadPerformanceTracker.BlockLoadPerformanceTracker.reportBlockLoadStage({
        old_init: Date.now()
      }, e.id);
    }
  };
  var diHideLoadingManager = require("di-hide-loading-manager") /*id: 961599*/;
  let U = e => {};
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let V = new Set([docBlockTypeConstants.blockTypeConstants.TABLE]);
  let Z = [docBlockTypeConstants.blockTypeConstants.SHEET];
  let z = docxSsrSchedulerConfig.isSsrOptEnabled ? [docBlockTypeConstants.blockTypeConstants.WHITEBOARD] : [];
  function K(e, i, r) {
    let {
      getPlaceholderStyle: n,
      getContainerClassName: o,
      displayMode: l,
      getAlign: s,
      renderComponent: a,
      renderLoadingBySelf: c = false,
      autoNotifyRenderFinish: d,
      customLoadingComponent: u
    } = i;
    return i => {
      let h;
      let f;
      let {
        record: g,
        recursionProps: p,
        struct: S,
        model: N,
        blockId: O
      } = i;
      let [K, X] = reactCoreLibraryReexport.useState(false);
      let {
        blockManager: G
      } = i.recursionProps;
      let q = G.editorAPI.getService(schedulerProvidersAccessor.blockSchedulerProv);
      let [J, Y] = reactCoreLibraryReexport.useState(q == null ? undefined : q.getSSRContent(i.struct));
      let Q = `${ssrRenderConstants.ssrWrapperName}-${S.recordId}`;
      let ee = reactCoreLibraryReexport.useRef(null);
      let et = docxEditorBlockRenderer.useInjector(adjustBlockSsrLayoutProvider.adjustBlockSsrName, {
        optional: true
      });
      let {
        reportBlockLoadTime: ei,
        reportBlockProfile: er
      } = function (e) {
        let {
          model: i,
          blockManager: r
        } = e;
        $(i);
        return {
          reportBlockLoadTime: reactCoreLibraryReexport.useCallback((e, n) => {
            Promise.resolve().then(() => {
              firstScreenEventHandlerUtils.scheduleAnimationFrameOrTimeout(() => {
                var o;
                var l;
                if ((l = r.getBlockViewByBlockIdNotCheck(i.id)) !== null && l !== undefined && (o = l.beforeHideLoading) !== null && o !== undefined) {
                  o.call(l);
                }
                if (!function (e, i) {
                  let r = j[e];
                  if (r == null) {
                    return undefined;
                  } else {
                    return r.includes(i);
                  }
                }(i.type, e)) {
                  blockLoadPerformanceTracker.BlockLoadPerformanceTracker.reportBlockLoadStage(e, {
                    id: i.id,
                    time: isUndefinedCheck.isUndefined(n) ? Date.now() : n
                  });
                }
              });
            });
          }, [i.id, i.type]),
          reportBlockProfile: reactCoreLibraryReexport.useCallback(e => {
            Promise.resolve().then(() => {
              firstScreenEventHandlerUtils.scheduleAnimationFrameOrTimeout(() => {
                blockLoadPerformanceTracker.BlockLoadPerformanceTracker.recordBlockProfile(i.id, e);
              });
            });
          }, [i.id])
        };
      }({
        model: N,
        blockManager: G
      });
      let en = r && r(i);
      let eo = true;
      if (en && en.isShowLoading === false || c || [docBlockTypeConstants.blockTypeConstants.WHITEBOARD, docBlockTypeConstants.blockTypeConstants.FILE].includes(N.type) && (!J || !J.ssrData || i.displaymode === "inline") || G.layoutManager.scrollTargetTable === O) {
        eo = false;
      }
      let [el, es] = reactCoreLibraryReexport.useState(eo);
      let ea = reactCoreLibraryReexport.useRef(false);
      U(() => {
        if (el) {
          Y(q == null ? undefined : q.getSSRContent(i.struct));
        }
      });
      let ec = g.snapshot.loadingDisplayMode || l;
      if (N.type === "isv") {
        ec = docBlockTypeConstants.blockDisplayConstants.BLOCK;
      }
      if (n) {
        h = n(g.snapshot);
      }
      if (s) {
        f = s(g.snapshot);
      }
      let ed = reactCoreLibraryReexport.useCallback(() => {
        var e;
        var r;
        if ((e = G.editorAPI.getService(schedulerProvidersAccessor.docxSchedulerProv)) !== null && e !== undefined) {
          e.onBlockReady(i.struct.recordId);
        }
        if ((r = G.editorAPI.getService(revisionExtensionServiceToken.revisionExtSvcToken)) !== null && r !== undefined) {
          r.onBlockReady(i.struct.id);
        }
        if (q != null) {
          q.onBlockReady(i.struct.recordId);
        }
      }, [G.editorAPI, S.recordId, q]);
      let eu = reactCoreLibraryReexport.useCallback(() => {
        es(false);
      }, [es]);
      let eh = reactCoreLibraryReexport.useCallback(() => {
        es(false);
        ed();
      }, [es, ed, S, G]);
      let ef = reactCoreLibraryReexport.useCallback(() => {
        X(true);
      }, []);
      let eg = reactCoreLibraryReexport.useRef(null);
      let ep = reactCoreLibraryReexport.useRef(null);
      let em = V.has(S.type);
      let ev = Math.max(G.editorAPI.getService(blockRectServiceId.blockRectServiceId).getBlockRect(S.id).height || 0, 220);
      let eb = (u == null ? undefined : u({
        model: N
      })) || reactJsxRuntimeCoreReexport.jsx(docxBlockLoading.DocxBlockLoading, {
        style: h,
        align: f,
        displayMode: ec,
        showSkeleton: em,
        defaultHeight: ev
      });
      reactCoreLibraryReexport.useEffect(() => {
        let e = z.includes(N.type);
        let i = !loadingIndicatorService.showLoading || e;
        if (!J && !i) {
          Promise.resolve().then(async () => {
            if (!N.recordId || J || i) {
              return;
            }
            let e = await (q == null ? undefined : q.waitForStaticBlock(N.recordId));
            if (e == null ? undefined : e.ssrData) {
              Y(e);
              es(true);
            }
          });
        }
      }, [N.recordId, N.type, N.record.snapshot, J, el, q]);
      let ey = reactCoreLibraryReexport.useCallback(e => {
        if (!eg.current) {
          return;
        }
        let i = document.getElementById(Q) || ee.current;
        if (i) {
          i.remove();
          ee.current = null;
        }
        eg.current.style.height = "";
        if (e) {
          Y({
            ssrData: ""
          });
        }
      }, [N.recordId, Y]);
      let eS = reactCoreLibraryReexport.useCallback(e => {
        if (N.type === "sheet" && browserThemeManager.getThemeMode() === browserThemeManager.ThemeMode.LIGHT) {
          e.style.backgroundColor = themeColorConstants.colorWhite;
        }
      }, [N.type]);
      let ek = reactCoreLibraryReexport.useCallback((e, i) => {
        if (e && N.type === "sheet") {
          e.style.width = `${i.width}px`;
          e.style.height = `${i.height}px`;
        }
      }, [N.type]);
      reactCoreLibraryReexport.useLayoutEffect(() => {
        if (!el || !eg.current || !J || !J.ssrData || ea.current) {
          return;
        }
        if (J.isFallback || N.type === docBlockTypeConstants.blockTypeConstants.PENDING) {
          ey(true);
          ea.current = true;
          return;
        }
        if (N.type === "sheet" && !J.isCollectFromSSR && et != null) {
          et.observeSheet(eg, N.recordId, ssrRenderConstants.ssrWrapperName, e => {
            if (!e) {
              ey(true);
              return;
            }
            let i = document.getElementById(Q);
            if (!i || !eg.current) {
              return;
            }
            let {
              height: r
            } = i.getBoundingClientRect();
            eg.current.style.height = `${r}px`;
            eS(i);
            p.blockManager.layoutManager.notifyRenderFinish(O);
            ei(docBlockAnalyticsConstants.blockStateConstants.TTV);
          });
        }
        ea.current = true;
        if (N.type !== docBlockTypeConstants.blockTypeConstants.WHITEBOARD) {
          let e = function (e, i) {
            if (i.height) {
              return i.height;
            }
            if (i.dom) {
              return i.dom.getBoundingClientRect().height;
            }
            if (e === docBlockTypeConstants.blockTypeConstants.SHEET && i.ssrData) {
              let {
                ssrData: e
              } = i;
              let r = new DOMParser().parseFromString(e, "text/html").querySelector("svg");
              if (!r) {
                return;
              }
              let n = r.getAttribute("content-height") || "1080";
              return Math.min(sheetErrorsAndConfig.maxWidth1080, Number(n) - sheetErrorsAndConfig.layoutSize70) + sheetErrorsAndConfig.layoutSize5;
            }
          }(N.type, J);
          if (!e) {
            ey(true);
            return;
          }
          eg.current.style.height = `${e}px`;
        }
        let e = document.createElement("div");
        ee.current = e;
        e.classList.add(ssrRenderConstants.ssrWrapperName);
        e.id = Q;
        e.contentEditable = "false";
        eg.current.appendChild(e);
        e.innerHTML = xssContentSanitizer.sanitizeHtml(J.ssrData, null, {
          logType: "js.innerHTML",
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1sWTBaRWRXZFdNeWJIWmliazEy$1cxN*Rsa3ljM1Jp%npsb1drZHNk$nA1T1$Oa$J6bHFZ$EI0Z*xsWF$uQmli$04xWk$oT05*bFlTbT$r$0%wOQ"
        });
        if (N.type === docBlockTypeConstants.blockTypeConstants.WHITEBOARD && !J.isCollectFromSSR && et != null) {
          et.layoutBlock(N);
        }
        let i = !!J.width && !!J.height;
        let r = J.isCollectFromSSR ? i : !!J.height;
        er({
          has_block_ssr: !isUndefinedCheck.isUndefined(J.ssrData) && r,
          is_fallback: (J == null ? undefined : J.isFallback) || false
        });
        if (J.isCollectFromSSR) {
          if (!i) {
            return;
          }
          ek(e, {
            width: J.width,
            height: J.height
          });
          eS(e);
          p.blockManager.layoutManager.notifyRenderFinish(O);
          if (!J.isFallback) {
            let e = Z.includes(N.type) ? undefined : 0;
            ei(docBlockAnalyticsConstants.blockStateConstants.TTV, e);
          }
          return;
        }
      }, [el, J, N.recordId, ek, eS, N.type, O, ey, ei, p.blockManager.layoutManager]);
      reactCoreLibraryReexport.useLayoutEffect(() => {
        if (eg.current && !el && (K || N.type !== "sheet")) {
          (docxFeatureFlags.isAyEnabled() ? e => e() : firstScreenEventHandlerUtils.scheduleAnimationFrameOrTimeout)(() => {
            var e;
            ey();
            p.blockManager.layoutManager.notifyNodeHeightChange(O);
            if ((e = ep.current) !== null && e !== undefined) {
              e.disconnect();
            }
          });
        }
      }, [O, el, N.type, ey, K]);
      reactCoreLibraryReexport.useEffect(() => {
        if (!el) {
          ei(docBlockAnalyticsConstants.blockStateConstants.TTU);
        }
      }, [el, ei]);
      let [eE, eC] = reactCoreLibraryReexport.useState(eb);
      let e_ = reactCoreLibraryReexport.useRef({
        hasUpdated: false,
        wasFirstUpdate: false
      });
      let eR = reactCoreLibraryReexport.useCallback(e => {
        let i = e_.current;
        if (!i.hasUpdated) {
          i.hasUpdated = true;
          i.wasFirstUpdate = true;
          ed();
          ey(true);
        }
        es(true);
        blockLoadPerformanceTracker.BlockLoadPerformanceTracker.modifyBlockLoadRecord({
          id: N.id,
          isRetry: true
        });
        eC(e);
      }, [N.id, ed, ey]);
      let eI = reactCoreLibraryReexport.useRef(true);
      reactCoreLibraryReexport.useLayoutEffect(() => {
        if (d && !el) {
          p.blockManager.layoutManager.notifyRenderFinish(O);
        }
        let e = e_.current;
        if (e.wasFirstUpdate) {
          e.wasFirstUpdate = false;
          if (d) {
            p.blockManager.layoutManager.notifyRenderFinish(O);
          }
        }
        if (eI.current) {
          eI.current = false;
        } else {
          p.blockManager.layoutManager.notifyNodeHeightChange(O);
        }
      }, [el, eE, J]);
      reactCoreLibraryReexport.useEffect(() => {
        if (!el) {
          diHideLoadingManager.toggleHideLoading(O, G);
        }
      }, [el]);
      let eM = {};
      if (em && el && ec === docBlockTypeConstants.blockDisplayConstants.BLOCK && !(J == null ? undefined : J.ssrData)) {
        eM.height = ev;
        eM.maxHeight = ev;
        eM.minHeight = 220;
        eM.overflow = "hidden";
        if (S.type === docBlockTypeConstants.blockTypeConstants.TABLE) {
          eM.marginBottom = "-2px";
        }
      }
      return reactJsxRuntimeCoreReexport.jsxs("div", {
        className: k("docx-block-loading-container", {
          "docx-block-loading-container-block-loading": el && ec === docBlockTypeConstants.blockDisplayConstants.BLOCK && !(J == null ? undefined : J.ssrData)
        }, o ? o(N) : null),
        ref: eg,
        style: {
          ...eM
        },
        children: [!el || (J == null ? undefined : J.ssrData) ? null : eE, reactJsxRuntimeCoreReexport.jsx("div", {
          style: el && (J == null ? undefined : J.ssrData) ? {
            visibility: "hidden"
          } : undefined,
          children: a !== false && reactJsxRuntimeCoreReexport.jsx(e, {
            ...i,
            loadingComponent: eb,
            onBlockReady: eh,
            onSSRReady: eu,
            isShowLoading: el,
            onLoadingShow: () => es(true),
            onContentFlush: ef,
            updateOuterLoadingComponent: eR,
            blockSSRDom: J == null ? undefined : J.ssrData,
            isCollectFromSSR: J == null ? undefined : J.isCollectFromSSR
          })
        })]
      });
    };
  }
  class X extends editorContextFacade.EditorContextFacade {
    getWrapper(e, i) {
      return K(e, i);
    }
  }
  var providerNameConstants = require("provider-name-constants") /*id: 349632*/;
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  var debugBrowserConfig = require("debug-browser-config") /*id: 471456*/;
  var Y = debugBrowserConfig;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var docxBlockLoadingRetry = require("docx-block-loading-retry") /*id: 607364*/;
  var docxPaywallPermissions = require("docx-paywall-permissions") /*id: 430531*/;
  var lazyRecordClientvars = require("lazy-record-clientvars") /*id: 112384*/;
  var diProviderCollectEvent = require("di-provider-collect-event") /*id: 308105*/;
  var lazyRecordStatusToken = require("lazy-record-status-token") /*id: 931385*/;
  var renderEventConstants = require("render-event-constants") /*id: 189091*/;
  var renderFeatureConstants = require("render-feature-constants") /*id: 362509*/;
  var reduxStoreInitializer = require("redux-store-initializer") /*id: 75100*/;
  var docComponentStubConfig = require("doc-component-stub-config") /*id: 436674*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var boolDefaultGetterUtil = require("bool-default-getter-util") /*id: 855627*/;
  var docxTableLayoutUtils = require("docx-table-layout-utils") /*id: 163702*/;
  let eh = {
    [docBlockTypeConstants.blockTypeConstants.TABLE]: docxTableLayoutUtils.checkPendingStatus
  };
  let ef = {
    [docBlockTypeConstants.blockTypeConstants.TABLE]: (e, i, r) => {
      let {
        layoutManager: n
      } = e;
      let o = n.getActiveBlocks();
      let l = i.id;
      if (!o.has(l) || !i.active) {
        return;
      }
      let s = true;
      if (n.getReconciler().isInScrollPainting || !docxTableLayoutUtils.checkPendingStatus(i.children)) {
        s = false;
      }
      o.forEach(i => {
        if (i < 0) {
          return;
        }
        let r = e.getBlockModelByBlockIdNotCheck(i);
        if (r && r.parent && r.parent.id === l && r.type === docBlockTypeConstants.blockTypeConstants.PENDING) {
          s = false;
          return;
        }
      });
      if (s === true) {
        r();
      }
    }
  };
  function eg(e, i, r) {
    let n = ef[i.type];
    let [o, l] = reactCoreLibraryReexport.useState(!n);
    let s = reactCoreLibraryReexport.useRef(false);
    reactCoreLibraryReexport.useEffect(() => {
      if (o || !n || !i.active) {
        return;
      }
      let a = () => {
        if (!s.current) {
          n(e, i, () => {
            r();
            l(true);
            s.current = true;
          });
        }
      };
      n(e, i, () => {
        r();
        l(true);
      });
      e.addListener(renderEventConstants.paint, a);
      return () => {
        e.removeListener(renderEventConstants.paint, a);
      };
    }, []);
    return {
      blockReady: o
    };
  }
  (n = ep || {})[n.default = 0] = "default";
  n[n.succ = 1] = "succ";
  n[n.fail = 2] = "fail";
  var ep = n;
  (o = em || {})[o.init = 0] = "init";
  o[o.rendered = 1] = "rendered";
  o[o.done = 2] = "done";
  var em = o;
  let ev = [docBlockTypeConstants.blockTypeConstants.TABLE];
  let eb = Y("lazy-record:loading");
  u = dependencyInjectionContainer.Optional();
  l = (h = class extends X {
    getWrapper(e, i) {
      return K(i => {
        var r;
        let {
          onBlockReady: n,
          recordId: o,
          type: l,
          blockId: s
        } = i;
        let {
          lazyRecord: a
        } = this.editorContext;
        let {
          blockManager: c
        } = this;
        let [d, u] = reactCoreLibraryReexport.useState(ep.default);
        let [h, f] = reactCoreLibraryReexport.useState(!i.isShowLoading);
        let g = reactCoreLibraryReexport.useRef(h ? em.done : em.init);
        let p = reactCoreLibraryReexport.useRef(false);
        r = i.struct;
        let {
          isHitSsrReplaceAfterRenderFG: m,
          checkApplied: v
        } = {
          isHitSsrReplaceAfterRenderFG: reactCoreLibraryReexport.useMemo(() => boolDefaultGetterUtil.getDefaultBool(ssrRenderConstants.tableRenderHookName, false) || browserEnvironmentDetectionUtils.browserDetector.isIPadApp && docComponentStubConfig.checkClientFeature("ccm.docx.mobile_ipad_split_clientvar", false), []),
          checkApplied: reactCoreLibraryReexport.useCallback(e => {
            let i = eh[r.type];
            return !i || i(e);
          }, [r.type])
        };
        let {
          eventEmitter: b
        } = c;
        if (!a) {
          c.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent(lazyRecordClientvars.mergedRecordStates.IS_UNDEFINED, {
            type: l,
            recordId: platformDocUtils.p5T(o)
          });
        }
        let y = reactCoreLibraryReexport.useCallback(() => {
          g.current = em.done;
          eb("hide loading", o);
          blockLoadPerformanceTracker.BlockLoadPerformanceTracker.reportBlockLoadStage(docBlockAnalyticsConstants.blockStateConstants.DATA_READY, {
            id: s,
            time: new Date().getTime()
          });
          b.removeListener(renderFeatureConstants.descendantRenderKey, y, s);
          c.layoutManager.enableDescendantRender(s);
          f(true);
          if (n != null) {
            n();
          }
        }, [n, b, c, s, o]);
        reactCoreLibraryReexport.useEffect(() => {
          b.addListener(renderFeatureConstants.descendantRenderKey, y, s);
          return () => {
            if (!h) {
              b.removeListener(renderFeatureConstants.descendantRenderKey, y, s);
            }
          };
        }, [h, s, b, y]);
        let S = reactCoreLibraryReexport.useCallback((e, i) => {
          if (!e || !i) {
            return false;
          }
          let r = this.blockManager.getBlockModelsByRecordId(e)[0];
          while (r) {
            if (r.id === i) {
              return true;
            }
            r = r.parent;
          }
          return false;
        }, []);
        let {
          blockReady: k
        } = eg(this.blockManager, i.struct, y);
        let E = reactCoreLibraryReexport.useCallback(e => {
          if (e.taskId === o && g.current !== em.done) {
            g.current = em.rendered;
            let {
              layoutManager: i
            } = this.blockManager;
            if (i.isBlockActive(s) && k) {
              y();
              return;
            }
            if (S(e.hash, s)) {
              y();
            }
          }
        }, [y, o, s, k, S]);
        let _ = reactCoreLibraryReexport.useCallback(e => {
          if (g.current === em.rendered) {
            if (!e) {
              y();
              return;
            }
            let r = this.blockManager.getRecordByBlockId(e)?.id;
            if (r === o || S(r, e)) {
              y();
            }
          }
        }, []);
        let T = reactCoreLibraryReexport.useCallback(e => {
          var r;
          let {
            fetchFn: n,
            taskId: s,
            error: a
          } = e;
          if (s !== o || !ev.includes(l)) {
            return;
          }
          let c = reactJsxRuntimeCoreReexport.jsx(docxBlockLoadingRetry.DocxBlockLoadRetry, {
            displayMode: docBlockTypeConstants.blockDisplayConstants.BLOCK,
            onClickRetry: () => {
              var e;
              if ((e = i.updateOuterLoadingComponent) !== null && e !== undefined) {
                e.call(i, i.loadingComponent);
              }
              return n().then(() => u(ep.succ)).catch(e => {
                T({
                  error: e,
                  fetchFn: n,
                  taskId: s
                });
              });
            },
            blockError: {
              id: i.struct.id,
              type: i.struct.type,
              errorMessage: `fetch block error: ${JSON.stringify(a)}`
            }
          });
          u(ep.fail);
          if ((r = i.updateOuterLoadingComponent) !== null && r !== undefined) {
            r.call(i, c);
          }
        }, []);
        reactCoreLibraryReexport.useEffect(() => {
          var e;
          let i = (e = this.lazyRecordStatus) === null || e === undefined ? undefined : e.skippedBlockError$.subscribe(T);
          return () => {
            if (i != null) {
              i.unsubscribe();
            }
          };
        }, []);
        let B = () => {
          if (g.current === em.done) {
            return;
          }
          if (!p.current) {
            p.current = true;
            blockLoadPerformanceTracker.BlockLoadPerformanceTracker.reportBlockLoadStage(docBlockAnalyticsConstants.blockStateConstants.DATA_LOAD_START, {
              id: s,
              time: new Date().getTime()
            });
          }
          let e = this.blockManager.getBlockModelsByRecordId(o)[0];
          if (e && v(e.struct.children)) {
            y();
          }
        };
        reactCoreLibraryReexport.useEffect(() => {
          let {
            lazyRecordStatus: e
          } = this.blockManager;
          let r = a == null ? undefined : a.getTaskStatus(o);
          let n = docxPaywallPermissions.isPaywallNeeded(reduxStoreInitializer.reduxStore.getState());
          if (g.current === em.done || !a || (r == null ? undefined : r.isDone()) && !(r == null ? undefined : r.isFetchedErr()) || !docxFeatureFlags.isNotMobileOrL() && (e == null ? undefined : e.isSkipBlockDataApplied(o)) || !(e == null ? undefined : e.shouldShowLoading) && d !== ep.fail || a && a.isPreEditableEnable() && (e == null ? undefined : e.isFirstScreen) && (!m || v(i.struct.children) || n) || !c.layoutManager.isDescendantRenderDisabled(i.struct.id)) {
            y();
          } else if (r == null ? undefined : r.isFetchedErr()) {
            let e = a.retryInfoMap.get(o);
            if (e) {
              T(e);
            }
          }
        }, []);
        reactCoreLibraryReexport.useEffect(() => {
          if (g.current === em.done) {
            return;
          }
          let {
            lazyRecordStatus: e
          } = this;
          let i = [e == null ? undefined : e.taskFinish$.subscribe(E), e == null ? undefined : e.skippedBlockApplied$.subscribe(E), e == null ? undefined : e.applySliceAfter$.subscribe(B)];
          this.eventEmitter.on(lazyRecordClientvars.tableHideLoading, _);
          this.blockManager.addListener(renderEventConstants.enterViewport, _, s);
          return () => {
            i.forEach(e => e == null ? undefined : e.unsubscribe());
            this.eventEmitter.off(lazyRecordClientvars.tableHideLoading, _);
            this.blockManager.removeListener(renderEventConstants.enterViewport, _, s);
          };
        }, []);
        return reactJsxRuntimeCoreReexport.jsx(e, {
          ...i,
          canRenderChild: h
        });
      }, i, e => ({
        isShowLoading: this.blockManager.layoutManager.isDescendantRenderDisabled(e.struct.id)
      }));
    }
    constructor(...e) {
      var i;
      var r;
      super(...e);
      i = "lazyRecordStatus";
      if (r = f) {
        Object.defineProperty(this, i, {
          enumerable: r.enumerable,
          configurable: r.configurable,
          writable: r.writable,
          value: r.initializer ? r.initializer.call(this) : undefined
        });
      }
    }
  }).prototype;
  s = "lazyRecordStatus";
  a = [u, lazyRecordStatusToken.lazyRecordStatus];
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
  f = (d = a.slice().reverse().reduce(function (e, i) {
    return i(l, s, e) || e;
  }, d)).initializer === undefined ? (Object.defineProperty(l, s, d), null) : d;
  let ey = h;
  class eS extends editorContextFacade.EditorContextFacade {
    getAfterSlot() {
      return e => {
        reactCoreLibraryReexport.useLayoutEffect(() => {
          this.blockManager.layoutManager.notifyRenderFinish(e.blockId);
        }, [e.blockId]);
        return null;
      };
    }
  }
  var observableSubjectClass = require("observable-subject-class") /*id: 292580*/;
  var diProviderHideLoadingSubject = require("di-provider-hide-loading-subject") /*id: 822039*/;
  let eC = dependencyInjectionContainer.Provide(diProviderHideLoadingSubject.hideLoadingSubject)(g = class {
    toggleHideLoading(e) {
      let i = this.hideLoadingSubjectMap.get(e);
      if (i) {
        i.next(e);
      }
    }
    subHideLoading(e, i) {
      let r = new observableSubjectClass.Subject();
      r.subscribe(i);
      this.hideLoadingSubjectMap.set(e, r);
    }
    unSubHideLoading(e) {
      let i = this.hideLoadingSubjectMap.get(e);
      if (i) {
        this.hideLoadingSubjectMap.delete(e);
        i.unsubscribe();
      }
    }
    constructor() {
      var e;
      var i;
      var r;
      e = "hideLoadingSubjectMap";
      i = new Map();
      if ((e = typeof (r = function (e, i) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var r = e[Symbol.toPrimitive];
        if (r !== undefined) {
          var n = r.call(e, i || "default");
          if (typeof n != "object") {
            return n;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (i === "string" ? String : Number)(e);
      }(e, "string")) == "symbol" ? r : r + "") in this) {
        Object.defineProperty(this, e, {
          value: i,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = i;
      }
    }
  }) || g;
  function e_() {
    docxEditorCore.registerProviders([eC]);
    docxEditorCore.registerViewExt(providerNameConstants.blockLoadingProvider, X);
    docxEditorCore.registerViewExt(providerNameConstants.lazyRecordLoadingProvider, ey);
    docxEditorCore.registerViewExt(providerNameConstants.noLazyRecordLoadingProvider, eS);
  }
  require.d(exports, {
    registerBlockLoadingProviders: function () {
      return e_;
    }
  });
}