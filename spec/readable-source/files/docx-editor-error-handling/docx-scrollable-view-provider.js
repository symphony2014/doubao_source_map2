// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'registerScrollableView'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 144031
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var docxScrollableConstants = require("docx-scrollable-constants") /*id: 451992*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var s = classnamesUtils;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactReduxCore = require("react-redux-core") /*id: 509563*/;
  var viewModeConstants = require("view-mode-constants") /*id: 204949*/;
  var docxEditorConstantsConfig = require("docx-editor-constants-config") /*id: 302915*/;
  var docxFeatureFlags = require("docx-feature-flags") /*id: 939543*/;
  var useDebounceCallbackHook_1 = require("use-debounce-callback-hook_1") /*id: 682959*/;
  var useStableCallbackHook = require("use-stable-callback-hook") /*id: 600393*/;
  var docxViewStateUtil = require("docx-view-state-util") /*id: 596609*/;
  var debugLoggerFactory = require("debug-logger-factory") /*id: 102743*/;
  let v = debugLoggerFactory.createEnabledLogger("scrollable:use-item-rerender");
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  let y = debugLoggerFactory.createEnabledLogger("scrollable:use-sub-scroll");
  let S = e => {
    let {
      logId: i,
      hookInstance: r,
      scrollModel: n
    } = e;
    let [o, l] = reactCoreLibraryReexport.useState(undefined);
    let [, s] = reactCoreLibraryReexport.useState(undefined);
    let c = useStableCallbackHook.useStableCallback((e, r) => {
      if (!deepEqualUtil_1.deepEqual(o, e)) {
        n.setSubScrollState(e);
        y(i, "%s.updateSubScrollState: %o", r, e);
        l(e);
      }
    });
    let d = useStableCallbackHook.useStableCallback(e => {
      if (n.viewType !== e) {
        y(i, "updateViewType: %o", e);
        n.setViewType(e);
        s(e);
      }
    });
    reactCoreLibraryReexport.useEffect(() => {
      let e = [r.onSubScroll(e => c(e, "subScroll")), r.onSubViewChange(e => {
        let {
          width: i,
          viewType: r
        } = e;
        c(n.getSubScrollStateByWidth(i), "subViewChange");
        if (r) {
          d(r);
        }
      }, true)];
      return () => {
        e.forEach(e => e());
      };
    }, [r, c, d, n, i]);
  };
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docBlockZoomUtils = require("doc-block-zoom-utils") /*id: 735944*/;
  var editorContextFacade = require("editor-context-facade") /*id: 788056*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  var layoutEventTypes = require("layout-event-types") /*id: 580889*/;
  var editorUiConstants = require("editor-ui-constants") /*id: 455663*/;
  var screenWidthObserverHook = require("screen-width-observer-hook") /*id: 741639*/;
  var docxPanelWidthSelector = require("docx-panel-width-selector") /*id: 458985*/;
  var renderEventConstants = require("render-event-constants") /*id: 189091*/;
  var reduxStoreInitializer = require("redux-store-initializer") /*id: 75100*/;
  var docComponentFeatureFlags = require("doc-component-feature-flags") /*id: 475581*/;
  var docxHistoryConstants = require("docx-history-constants") /*id: 995012*/;
  var presentationModeDetectionUtils = require("presentation-mode-detection-utils") /*id: 659285*/;
  var viewStateTypeConstants = require("view-state-type-constants") /*id: 739915*/;
  var diProviderCollectEvent = require("di-provider-collect-event") /*id: 308105*/;
  var syncedBlockFeatureFlags = require("synced-block-feature-flags") /*id: 711756*/;
  var docBlockNestingCalc = require("doc-block-nesting-calc") /*id: 311122*/;
  var numericConstantsMap = require("numeric-constants-map") /*id: 65456*/;
  var docxScrollbarConfigPresets = require("docx-scrollbar-config-presets") /*id: 105735*/;
  var isDocxViewEditorOpen = require("is-docx-view-editor-open") /*id: 763739*/;
  var docxSelectorsExport = require("docx-selectors-export") /*id: 254026*/;
  var docxWidthModeConfig = require("docx-width-mode-config") /*id: 106194*/;
  var docTokenHelperUtils = require("doc-token-helper-utils") /*id: 740758*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  let Z = debugLoggerFactory.createLogger("scrollable:helper");
  let z = debugLoggerFactory.createEnabledLogger("scrollable:helper");
  let K = docTokenHelperUtils.getDocStore();
  let X = docxWidthModeConfig.isNotMobile();
  function G(e, i, r) {
    let {
      leftMargin: n
    } = r;
    let o = Math.round(Math.max(i - e - n, 0));
    Z("wrapperOffset=%s=round(max(0, %s-%s-%s))", o, i, e, n);
    return o;
  }
  function q(e, i) {
    let {
      appMode: n,
      blockManager: o
    } = e;
    if (!syncedBlockFeatureFlags.isSyncedBlockScrollable() && o.editorAPI.config.get("isSyncedReferenceBlock")) {
      return {
        isKeepBoundary: true,
        indentWidth: 0
      };
    }
    let {
      indentWidth: l,
      relativeToRootOrSynced: s
    } = docBlockNestingCalc.getBlockNestingInfo(i);
    let a = n === viewModeConstants.viewModes.HISTORY;
    let c = i.parent?.type !== docBlockTypeConstants.blockTypeConstants.PAGE;
    return {
      isKeepBoundary: a ? c : !s,
      indentWidth: l
    };
  }
  let J = docxFeatureFlags.isUpEnabled();
  class Y {
    get isDocxWidthModePhase1() {
      return X;
    }
    getIsDocInline() {
      var i;
      var r;
      let n = reduxStoreInitializer.reduxStore === null || reduxStoreInitializer.reduxStore === undefined ? undefined : reduxStoreInitializer.reduxStore.getState();
      return (r = n == null ? undefined : (i = n.appState) === null || i === undefined ? undefined : i.flowSetting?.enableDocInline) !== null && r !== undefined && r;
    }
    getElementScrollbarWidth(e) {
      return e.offsetWidth - e.clientWidth;
    }
    getWrapperOffset(e, i) {
      if (!this.layout || this.getIsDocInline()) {
        return 0;
      }
      let {
        left: r
      } = this.getRootBoundaryRect();
      let {
        left: n
      } = this.layout.editor.getHostRect();
      let o = K.getState();
      let l = isDocxViewEditorOpen.isDocxViewEditorOpen(o);
      let {
        leftMargin: s
      } = this.getMargin({
        isViewEditor: l,
        isNarrowScreen: e,
        isRoomsNarrowScreen: i
      });
      let a = this.options.appMode === viewModeConstants.viewModes.MAIN_PC;
      if (J && a) {
        let e = docxEditorEventConstantsAndManager.globalEditorState.editorLeft;
        if (e) {
          return e - s;
        } else {
          return G(r, n, {
            leftMargin: s
          });
        }
      }
      return G(r, n, {
        leftMargin: s
      });
    }
    getMargin(e) {
      if (this.getIsDocInline()) {
        return docxScrollbarConfigPresets.zeroMarginScrollCfg;
      }
      let {
        hasRightPanel: i,
        isViewEditor: r,
        isNarrowScreen: n,
        isRoomsNarrowScreen: o
      } = e;
      let l = this.options.appMode === viewModeConstants.viewModes.HISTORY;
      let s = this.options.appMode === viewModeConstants.viewModes.SHORTCUT;
      if (docComponentFeatureFlags.isContentMarginOn()) {
        return {
          leftMargin: docComponentFeatureFlags.getContentMargin("left"),
          rightMargin: docComponentFeatureFlags.getContentMargin("right")
        };
      }
      let {
        leftMargin: a,
        rightMargin: c
      } = (() => s ? docxScrollbarConfigPresets.minIconScrollConfig : this.isDocxWidthModePhase1 ? o ? docxScrollbarConfigPresets.smallIconScrollCfg : n ? docxScrollbarConfigPresets.sidebarScrollConfig : docxScrollbarConfigPresets.headerScrollConfig : docxScrollbarConfigPresets.feedHeaderScrollCfg)();
      if (this.isDocxWidthModePhase1 && !browserEnvironmentDetectionUtils.browserEnv.isFeed && r && !l) {
        a = docxEditorConstantsConfig.headerHeight + docxEditorConstantsConfig.toolbarHeight;
      }
      if (!this.isDocxWidthModePhase1 && browserEnvironmentDetectionUtils.browserEnv.isFeed && i) {
        c = numericConstantsMap.constValue32;
        a = docxEditorConstantsConfig.headerHeight;
      }
      if (this.isDocxWidthModePhase1 && l) {
        let e = document.querySelector(`.${docxHistoryConstants.historyContentClass}`);
        if (e) {
          c += e.offsetWidth - e.clientWidth;
        }
      }
      return {
        leftMargin: a,
        rightMargin: c
      };
    }
    calcLayout(e, i, r, n, o, l, s, a) {
      let c;
      let d;
      let {
        hostElementZoom: u,
        scrollContainerZoom: h
      } = o;
      let f = n * u;
      if (i) {
        c = f;
        d = 0;
      } else {
        c = e === viewStateTypeConstants.viewTypes.PAGINATION ? Math.min(f, presentationModeDetectionUtils.getPresentationViewportSize().width) : this.getContainerWidth(l, s);
        d = this.getWrapperOffset(l, s) + r;
      }
      let g = c / h;
      let p = d / h;
      z(a, "calcLayout(isKeepBoundary=%s, presentationModeType=%s, indentWidth=%s): containerWidth=%s(%s/%s), wrapperOffset=%s", i, e, r, g, c, h, p);
      return {
        scrollContainerWidth: g,
        scrollWrapperOffset: p
      };
    }
    getRootElement() {
      return document.querySelector(this.options.rootSelector);
    }
    getRootBoundaryRect() {
      return this.getRootElement().getBoundingClientRect();
    }
    getRightPanelWidth(e) {
      let {
        isShowHelpPanel: i,
        isShowComment: r,
        isShowSuggestionSideBar: n
      } = e;
      let {
        options: o,
        layout: l
      } = this;
      let {
        appMode: s
      } = o;
      return (s === viewModeConstants.viewModes.HISTORY ? () => browserEnvironmentDetectionUtils.browserEnv.isMobile ? 0 : docxEditorConstantsConfig.elementOffsetValue : () => {
        if (!l) {
          return 0;
        }
        let o = r && l.comment.getHostRectCache()?.width || 0;
        return Math.max(o, i ? docxEditorConstantsConfig.minPanelWidth : 0, n ? docxEditorConstantsConfig.maxBlockWidth : 0);
      })();
    }
    constructor(e, i, r) {
      var n;
      var o;
      var l;
      this.options = e;
      this.layout = i;
      this.blockManager = r;
      n = "getContainerWidth";
      o = (e, i) => {
        let r = this.getRootElement();
        let n = this.options.appMode === viewModeConstants.viewModes.PRESENTATION ? r.clientWidth : r.getBoundingClientRect().width;
        let o = this.getElementScrollbarWidth(r);
        let l = K.getState();
        let s = !this.options.noCommentPanel && docxSelectorsExport.isCommentPanelShown(l);
        let a = isDocxViewEditorOpen.isDocxViewEditorOpen(l);
        let c = docxSelectorsExport.isHelpPanelShown(l);
        let h = docxSelectorsExport.isSuggestionSidebarShown(l);
        let f = this.getRightPanelWidth({
          isShowComment: s,
          isShowHelpPanel: c,
          isShowSuggestionSideBar: h,
          containerWidth: n,
          isViewEditor: a
        });
        let g = s || c || h;
        let {
          leftMargin: p,
          rightMargin: m
        } = this.getMargin({
          isViewEditor: a,
          hasRightPanel: g,
          isNarrowScreen: e,
          isRoomsNarrowScreen: i
        });
        if (this.isDocxWidthModePhase1 && browserEnvironmentDetectionUtils.browserEnv.isFeed && g) {
          f -= docxEditorConstantsConfig.historyLimit;
        }
        return function (e, i, r) {
          let {
            rootWidth: n,
            rightPanelWidth: o,
            scrollbarWidth: l
          } = e;
          let [s, a] = [i.leftMargin, i.rightMargin];
          let c = n - s - a - o - l;
          Z("containerWidth=%s(%s-%s-%s-%s-%s)", c, n, s, a, o, l);
          if (browserEnvironmentDetectionUtils.browserEnv.isNonIPadMobile && (c < docxEditorConstantsConfig.editPermissionValue || o !== 0)) {
            if (r != null) {
              r.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("doc_bug_track_dev", {
                action: "calc_scrollable_container_width",
                info: JSON.stringify({
                  containerWidth: c,
                  rootWidth: n,
                  rightPanelWidth: o,
                  scrollbarWidth: l
                })
              });
            }
          }
          return Math.max(c, docxEditorConstantsConfig.editPermissionValue);
        }({
          rootWidth: n,
          rightPanelWidth: f,
          scrollbarWidth: o
        }, {
          leftMargin: p,
          rightMargin: m
        }, this.blockManager);
      };
      if ((n = typeof (l = function (e, i) {
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
      }(n, "string")) == "symbol" ? l : l + "") in this) {
        Object.defineProperty(this, n, {
          value: o,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[n] = o;
      }
    }
  }
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  let ee = {
    transition: "left 0.2s ease-out, width 0.2s ease-out",
    willChange: "left, width"
  };
  let et = debugLoggerFactory.createEnabledLogger("scrollable:index");
  let ei = docxFeatureFlags.isUpEnabled();
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  let en = debugLoggerFactory.createEnabledLogger("scrollable:useScrollTo");
  let eo = e => {
    let {
      ctx: i
    } = e;
    let {
      scrollManage: r,
      blockManager: n,
      blockId: o,
      logId: l
    } = i;
    let {
      hookInstance: s,
      scrollModel: c
    } = r;
    let [, d] = reactCoreLibraryReexport.useState(0);
    let u = reactCoreLibraryReexport.useRef();
    let h = useStableCallbackHook.useStableCallback((e, i) => {
      let r = c.clampMainScrollLeft(e);
      if (isUndefinedCheck.isUndefined(r)) {
        en(l, "%s: skip, not ready", i);
        return;
      }
      if (c.mainScrollLeft !== r) {
        c.setMainRawScrollLeft(r);
        d(r);
      }
    });
    let f = useStableCallbackHook.useStableCallback((e, i) => {
      let r = c.getMainScrollLeftAfterScroll(e);
      if (!isUndefinedCheck.isUndefined(r)) {
        u.current = i;
        en(l, "%s.executeScroll to %s, distance=%o", i, r, e);
        h(r, `${i}.executeScroll`);
      }
    });
    reactCoreLibraryReexport.useEffect(() => {
      let e = [s.registerScroll(f)];
      let i = () => r.resyncScroll("enterbuffer");
      n.addListener(renderEventConstants.enterBuffer, i, o);
      return () => {
        u.current = undefined;
        e.forEach(e => e());
        n.removeListener(renderEventConstants.enterBuffer, i, o);
      };
    }, [o, n, f, r, s, l]);
    reactCoreLibraryReexport.useEffect(() => {
      let e = c.mainScrollStatus;
      if (e) {
        s.emitScroll(e, u.current);
      }
    }, [s, c.mainScrollLeft, c]);
    return {
      mainScrollLeft: c.mainScrollLeft
    };
  };
  var tableLayoutConstants_1 = require("table-layout-constants_1") /*id: 673543*/;
  let es = debugLoggerFactory.createLogger("scrollable:useMouseHover");
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  var numberClampUtil = require("number-clamp-util") /*id: 317214*/;
  var touchInteractionUtil = require("touch-interaction-util") /*id: 593236*/;
  let eu = debugLoggerFactory.createLogger("scrollable:use-prevent-touch");
  function eh(e) {
    eu("cancelEvent(%s): cancel the event", e.type);
    e.stopPropagation();
    e.preventDefault();
  }
  var normalizeTouchEvent = require("normalize-touch-event") /*id: 64930*/;
  let eg = debugLoggerFactory.createLogger("scrollable:use-slider");
  let ep = e => {
    var i;
    let {
      scrollManage: r,
      isNeedScrollBar: n,
      isScrollBarShow: o,
      sliderOffset: l,
      sliderWidth: s,
      sliderRef: c
    } = e;
    let {
      scrollModel: d
    } = r;
    let [u, h] = reactCoreLibraryReexport.useState(undefined);
    let {
      sliderMaxOffset: f,
      isShowScrollbar: p
    } = d;
    let m = !!u;
    reactCoreLibraryReexport.useEffect(() => {
      if (!o) {
        h(undefined);
      }
    }, [o]);
    let v = useStableCallbackHook.useStableCallback(e => {
      eg("handlePointerDown(%s), capture pointer and set startPosition(translateX=%s)", e.type, l);
      e.stopPropagation();
      e.preventDefault();
      touchInteractionUtil.capturePointer(e);
      h({
        startSliderOffset: l,
        startPageX: normalizeTouchEvent.normalizeEvent(e).pageX
      });
    });
    let b = useStableCallbackHook.useStableCallback(e => {
      if (!u) {
        return;
      }
      let i = function (e, i, r) {
        let n = i - e.startPageX;
        return numberClampUtil.clampNumber(e.startSliderOffset + n, 0, r);
      }(u, normalizeTouchEvent.normalizeEvent(e).pageX, f);
      let n = d.getScrollRatioBySliderOffset(i);
      r.scrollByRatio(n, false, "slidermove");
      (function () {
        if (browserEnvironmentDetectionUtils.browserEnv.isSafari) {
          let e = window.getSelection();
          if (e == null ? undefined : e.rangeCount) {
            e.empty();
          }
        }
      })();
    });
    let y = useStableCallbackHook.useStableCallback(e => {
      if (u) {
        eg("handlePointerUp(%s), clear movingInfo", e.type);
        h(undefined);
      }
    });
    i = c.current;
    reactCoreLibraryReexport.useEffect(() => {
      if (i && n) {
        i.addEventListener("touchstart", eh);
        return () => {
          i.removeEventListener("touchstart", eh);
        };
      }
    }, [i, n]);
    let S = reactCoreLibraryReexport.useMemo(() => ({
      transform: `translateX(${l}px)`,
      width: s,
      opacity: +!!p
    }), [l, s, p]);
    return {
      sliderProps: {
        ...(docxScrollbarConfigPresets.feedHeaderScrollCfg.enableSliderDragging ? {
          onPointerDown: v,
          onPointerMove: b,
          onPointerUp: y
        } : {}),
        style: S
      },
      isMoving: m
    };
  };
  var useScrollState = require("use-scroll-state") /*id: 432226*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let eb = debugLoggerFactory.createEnabledLogger("scrollable:use-scrollbar");
  let ey = e => {
    let {
      ctx: r,
      isShowLoading: n,
      scrollContainerWidth: o,
      scrollItemMaxLeft: l,
      hostElement: c
    } = e;
    let {
      options: d,
      scrollManage: u,
      scrollModel: h,
      hookInstance: f,
      logId: p
    } = r;
    let {
      scrollbarToBlock: m
    } = d;
    let [v, b] = reactCoreLibraryReexport.useState(true);
    let y = reactCoreLibraryReexport.useRef(null);
    let S = reactCoreLibraryReexport.useRef(null);
    let k = function (e, i) {
      let [r, n] = reactCoreLibraryReexport.useState(null);
      let o = useStableCallbackHook.useStableCallback(e => {
        n(e);
        es("setIsMouseHover to %s", e);
      });
      reactCoreLibraryReexport.useEffect(() => {
        if (browserEnvironmentDetectionUtils.browserEnv.isIPad) {
          return;
        }
        if (!i) {
          o(null);
          return;
        }
        if (!e) {
          return;
        }
        let r = () => o(true);
        let n = () => o(false);
        e.addEventListener("mouseenter", r, tableLayoutConstants_1.passiveEventOpts);
        e.addEventListener("mouseleave", n, tableLayoutConstants_1.passiveEventOpts);
        return () => {
          e.removeEventListener("mouseenter", r);
          e.removeEventListener("mouseleave", n);
        };
      }, [e, i, o]);
      return r;
    }(c, v && docxScrollbarConfigPresets.feedHeaderScrollCfg.showScrollbarOnHover);
    let E = function (e, i) {
      let [r, n] = reactCoreLibraryReexport.useState(null);
      reactCoreLibraryReexport.useEffect(() => {
        if (!i) {
          return;
        }
        let {
          hookInstance: r
        } = e;
        let o = debounceUtil_1_1.debounce(() => n(false), 300);
        let l = () => {
          n(true);
          o();
        };
        let s = r.onScroll(l);
        let a = r.onSubScroll(l);
        return () => {
          o.cancel();
          s();
          a();
        };
      }, [e, i]);
      return r;
    }(u, v);
    let C = useScrollState.useScrollState(r == null ? undefined : r.blockManager?.layoutManager);
    let {
      sliderWidth: _,
      scrollbarWidth: R,
      sliderOffset: I
    } = h;
    reactCoreLibraryReexport.useEffect(() => f.onSetIsShowScrollBar(b), [f]);
    let M = !n && (!!k || !!E) && !C;
    let T = ep({
      scrollManage: u,
      isNeedScrollBar: v,
      isScrollBarShow: M,
      scrollbarWidth: R,
      sliderWidth: _,
      sliderOffset: I,
      sliderRef: y
    });
    let w = T.sliderProps.style;
    let B = {
      opacity: +!!M,
      transform: `translateX(${l}px)`,
      bottom: docxScrollbarConfigPresets.feedHeaderScrollCfg.sliderToBottom + docxScrollbarConfigPresets.feedHeaderScrollCfg.sliderHeight + (m || 0)
    };
    eb(p, "isScrollBarShow=%s(%s||%s), slider(width=%s, opacity=%s, offset=%s), isNeedScrollBar=%s", M, k, E, w.width, w.opacity, I, v);
    return v && reactJsxRuntimeCoreReexport.jsxs("div", {
      contentEditable: false,
      suppressContentEditableWarning: true,
      style: B,
      className: "scrollable-scrollbar",
      ref: S,
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: "scrollable-scrollbar-padding",
        style: {
          height: m || undefined,
          width: o,
          transform: `translateX(${-l}px)`
        }
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: s("slider", {
          active: T.isMoving
        }),
        ...T.sliderProps,
        ref: y
      })]
    });
  };
  let eS = e => {
    let {
      scrollManage: i,
      options: r
    } = e;
    let [n, o] = reactCoreLibraryReexport.useState(r.enableRightShadow);
    let [l, c] = reactCoreLibraryReexport.useState({});
    let {
      scrollModel: d,
      hookInstance: u
    } = i;
    d.setEnableRightShadow(n);
    let {
      isRightShadowVisible: h
    } = d;
    reactCoreLibraryReexport.useEffect(() => {
      let e = [u.onShadowStyleChange(e => c(i => deepEqualUtil_1.deepEqual(e, i) ? i : e)), u.onShadowChange(o)];
      return () => e.forEach(e => e());
    }, [u]);
    return {
      renderShadow: reactCoreLibraryReexport.useMemo(() => reactJsxRuntimeCoreReexport.jsx("div", {
        className: s("right-shadow scrollable-shadow", {
          visible: h
        }),
        style: {
          transition: "left 0.1s",
          ...l
        }
      }), [h, l])
    };
  };
  var docxShortcutFeatureDetection = require("docx-shortcut-feature-detection") /*id: 407607*/;
  let eE = e => {
    reactCoreLibraryReexport.useEffect(() => {
      if (!docxShortcutFeatureDetection.isTextCardAnchor()) {
        return;
      }
      let i = () => {
        let o = document.querySelector(".list-children .block.text-card-block.docx-table-block .scrollable-wrapper");
        let l = o == null ? undefined : o.querySelector(".scrollable-container");
        let s = (o == null ? undefined : o.style?.left) && (o == null ? undefined : o.style?.left) !== "0px";
        let a = (o == null ? undefined : o.style?.maxWidth) && (o == null ? undefined : o.style?.maxWidth) !== "none";
        if (o && l) {
          if (s || a) {
            if (s && a) {
              o.style.maxWidth = "none";
              l.style.maxWidth = "none";
            }
          } else {
            o.style.maxWidth = "100%";
            l.style.maxWidth = "100%";
          }
        }
      };
      if (document.querySelector(".shortcut-page-container").classList.contains("shortcut-page-container-mobile")) {
        e(264);
      } else {
        e(344);
      }
      i();
      let r = r => {
        if (r.detail.isPC) {
          e(344);
        } else {
          e(264);
        }
        i();
      };
      window.addEventListener("textShortcutChangeMode", r);
      return () => {
        window.removeEventListener("textShortcutChangeMode", r);
      };
    });
  };
  let eC = () => {
    let e = reactCoreLibraryReexport.useRef();
    return [e, () => {
      clearTimeout(e.current);
    }];
  };
  let e_ = e => {
    let i = reactCoreLibraryReexport.useRef({});
    let [r, n] = eC();
    let o = reactCoreLibraryReexport.useCallback(e => {
      n();
      (e ? [i.current[e]] : Object.values(i.current)).forEach(e => {
        if (typeof e == "function") {
          e();
        }
      });
      r.current = setTimeout(() => {
        if (e) {
          delete i.current[e];
        } else {
          i.current = {};
        }
      }, 10000);
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      let r = e.hookInstance.onAfterRender(e => {
        let {
          key: r,
          value: n
        } = e;
        i.current[r] = n;
        o(r);
      });
      return () => {
        r();
        n();
      };
    }, [o]);
    return o;
  };
  let eR = (e, i, r, n) => {
    reactCoreLibraryReexport.useEffect(() => {
      if (!e || !browserEnvironmentDetectionUtils.browserEnv.isIPad || ![docBlockTypeConstants.blockTypeConstants.SHEET].includes(i)) {
        return;
      }
      let o = e => {
        if (!r && !n) {
          e.stopPropagation();
        }
      };
      e.addEventListener("pointerdown", o, true);
      return () => {
        e.removeEventListener("pointerdown", o, true);
      };
    }, [e, i, r]);
  };
  let eI = (e, i) => {
    let r = i.current;
    let n = () => {
      if (!r) {
        return;
      }
      let {
        scrollLeft: i
      } = r;
      if (i > 0) {
        r.scrollLeft = 0;
        e.hookInstance.executeScroll(i, "useScrollForInput");
      }
    };
    reactCoreLibraryReexport.useEffect(() => {
      if (r) {
        r.addEventListener("scroll", n, tableLayoutConstants_1.passiveEventOpts);
        return () => {
          r.removeEventListener("scroll", n);
        };
      }
    }, [r]);
  };
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var docTokenStyleConstants = require("doc-token-style-constants") /*id: 611528*/;
  var docScrollEventManager = require("doc-scroll-event-manager") /*id: 361839*/;
  var throttledPathFilterStringify = require("throttled-path-filter-stringify") /*id: 245841*/;
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var memoizeFunctionUtil = require("memoize-function-util") /*id: 825529*/;
  function eN(e, i, r) {
    var n;
    if ((i = typeof (n = function (e, i) {
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
    }(i, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, i, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = r;
    }
    return e;
  }
  class eA {
    constructor() {
      eN(this, "getMainMaxScrollLeft", memoizeFunctionUtil.default((e, i, r) => {
        if (e && i) {
          return Math.max(0, e - i + r);
        }
      }));
      eN(this, "getScrollItemMaxLeft", (e, i) => e ? i : 0);
      eN(this, "getScrollItemLeft", (e, i) => e - i);
      eN(this, "getScrollBarPos", e => {
        if (isUndefinedCheck.isUndefined(e)) {
          return;
        }
        let {
          scrollLeft: i,
          clientWidth: r,
          scrollWidth: n
        } = e;
        return {
          isAtLeft: i === 0,
          isAtRight: n - (i + r) < 1
        };
      });
    }
  }
  function eO(e, i, r) {
    var n;
    if ((i = typeof (n = function (e, i) {
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
    }(i, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, i, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = r;
    }
    return e;
  }
  let eD = ["enableRightShadow", "isNeedPaddingLeft", "mainRawScrollLeft", "scrollContainerWidth", "scrollWrapperOffset", "subRawScrollLeft", "subScrollWidth", "subScrollerLeftOffset", "viewType", "scrollerRightPadding"];
  class ex {
    get mainScrollLeft() {
      return numberClampUtil.clampNumber(this.mainRawScrollLeft, 0, this.mainMaxScrollLeft || 0);
    }
    get subScrollLeft() {
      return numberClampUtil.clampNumber(this.subRawScrollLeft, 0, this.subMaxScrollLeft || 0);
    }
    getCore() {
      return throttledPathFilterStringify.throttledPathStr(this, [...eD, "scrollRatio", "isValidScrollLeft", "mainMaxScrollLeft", "mainScrollLeft", "subMaxScrollLeft", "subScrollLeft", "totalMaxScrollLeft", "totalScrollLeft", "scrollbarWidth", "maxScrollbarWidth"]);
    }
    setScrollContainerWidth(e) {
      this.scrollContainerWidth = e;
    }
    setScrollWrapperOffset(e) {
      this.scrollWrapperOffset = e;
    }
    setSubScrollerLeftOffset(e) {
      this.subScrollerLeftOffset = e;
    }
    setMainRawScrollLeft(e) {
      this.mainRawScrollLeft = e;
    }
    setSubScrollState(e) {
      this.subRawScrollLeft = e.scrollLeft;
      this.subScrollWidth = e.scrollWidth;
    }
    setIsNeedPaddingLeft(e) {
      this.isNeedPaddingLeft = e;
    }
    setEnableRightShadow(e) {
      this.enableRightShadow = e;
    }
    setViewType(e) {
      this.viewType = e;
    }
    setScrollerRightPadding(e) {
      this.scrollerRightPadding = e;
    }
    get mainMaxScrollLeft() {
      return this.helper.getMainMaxScrollLeft(this.scrollItemWidth, this.scrollContainerWidth, this.scrollItemMaxLeft);
    }
    get scrollItemMaxLeft() {
      return this.helper.getScrollItemMaxLeft(this.isNeedPaddingLeft, this.scrollWrapperOffset);
    }
    get scrollItemLeft() {
      return this.helper.getScrollItemLeft(this.scrollItemMaxLeft, this.mainScrollLeft);
    }
    get scrollItemWidth() {
      let {
        subClientWidth: e,
        scrollContainerWidth: i
      } = this;
      if (isUndefinedCheck.isUndefined(e)) {
        return undefined;
      } else {
        return Math.min(e, i);
      }
    }
    get totalMaxScrollLeft() {
      let {
        subScrollWidth: e,
        scrollbarWidth: i
      } = this;
      if (isUndefinedCheck.isUndefined(i) || isUndefinedCheck.isUndefined(e)) {
        return undefined;
      } else {
        return e - i;
      }
    }
    get isScrollable() {
      let {
        totalMaxScrollLeft: e
      } = this;
      if (isUndefinedCheck.isUndefined(e)) {
        return undefined;
      } else {
        return e > 0;
      }
    }
    get isReady() {
      return !!this.subScrollWidth && !!this.scrollContainerWidth;
    }
    calcAllScrollToEnd(e = false) {
      let {
        totalScrollLeft: i,
        totalMaxScrollLeft: r,
        scrollerRightPadding: n
      } = this;
      if (!isUndefinedCheck.isUndefined(i) && !isUndefinedCheck.isUndefined(r)) {
        return r - i - (e ? n : 0) < 1;
      }
    }
    get isRightShadowVisible() {
      return this.enableRightShadow && this.calcAllScrollToEnd(true) === false;
    }
    get totalScrollLeft() {
      let {
        mainScrollLeft: e,
        subScrollLeft: i
      } = this;
      if (isUndefinedCheck.isUndefined(i)) {
        return undefined;
      } else {
        return e + i;
      }
    }
    get scrollRatio() {
      let {
        totalScrollLeft: e,
        totalMaxScrollLeft: i
      } = this;
      if (!isUndefinedCheck.isUndefined(e) && !isUndefinedCheck.isUndefined(i)) {
        return i && e / i;
      }
    }
    get maxScrollbarWidth() {
      return this.scrollContainerWidth - this.scrollItemMaxLeft;
    }
    get scrollbarWidth() {
      let {
        subScrollWidth: e,
        maxScrollbarWidth: i
      } = this;
      if (isUndefinedCheck.isUndefined(e)) {
        return undefined;
      } else {
        return Math.min(e, i);
      }
    }
    get sliderWidth() {
      let {
        scrollbarWidth: e,
        subScrollWidth: i
      } = this;
      if (i && e) {
        return Math.max(Math.round(e * e / i), docxScrollbarConfigPresets.feedHeaderScrollCfg.sliderMinWidth);
      } else {
        return 0;
      }
    }
    get sliderMaxOffset() {
      let {
        scrollbarWidth: e,
        sliderWidth: i
      } = this;
      if (isUndefinedCheck.isUndefined(e)) {
        return 0;
      } else {
        return e - i;
      }
    }
    get sliderOffset() {
      let {
        sliderMaxOffset: e,
        scrollRatio: i
      } = this;
      if (isUndefinedCheck.isUndefined(e) || isUndefinedCheck.isUndefined(i)) {
        return 0;
      } else {
        return Math.round(e * i);
      }
    }
    get isShowScrollbar() {
      let {
        subScrollWidth: e,
        maxScrollbarWidth: i
      } = this;
      return !isUndefinedCheck.isUndefined(e) && e > i;
    }
    get isMainScrollToEnd() {
      let {
        mainScrollLeft: e,
        mainMaxScrollLeft: i
      } = this;
      if (!isUndefinedCheck.isUndefined(e) && !isUndefinedCheck.isUndefined(i)) {
        return i - e < 1;
      }
    }
    get isAllScrollToEnd() {
      return this.calcAllScrollToEnd();
    }
    get hasMainScroll() {
      let {
        mainScrollLeft: e
      } = this;
      if (isUndefinedCheck.isUndefined(e)) {
        return undefined;
      } else {
        return e > 0;
      }
    }
    get subMaxClientWidth() {
      let {
        scrollContainerWidth: e,
        subScrollerLeftOffset: i
      } = this;
      if (e) {
        return e + i;
      } else {
        return undefined;
      }
    }
    get subClientWidth() {
      let {
        subMaxClientWidth: e,
        subScrollWidth: i
      } = this;
      if (isUndefinedCheck.isUndefined(e) || isUndefinedCheck.isUndefined(i)) {
        return undefined;
      } else {
        return Math.min(e, i);
      }
    }
    get subMaxScrollLeft() {
      let {
        subScrollWidth: e,
        subClientWidth: i
      } = this;
      if (isUndefinedCheck.isUndefined(e) || isUndefinedCheck.isUndefined(i)) {
        return undefined;
      } else {
        return e - i;
      }
    }
    get subScrollStatus() {
      let {
        subScrollLeft: e,
        subScrollWidth: i,
        subClientWidth: r
      } = this;
      if (isUndefinedCheck.isUndefined(i) || isUndefinedCheck.isUndefined(r)) {
        return undefined;
      } else {
        return {
          scrollLeft: e,
          scrollWidth: i,
          clientWidth: r
        };
      }
    }
    get mainScrollStatus() {
      let {
        mainMaxScrollLeft: e,
        mainScrollLeft: i,
        scrollContainerWidth: r
      } = this;
      if (!!r && !isUndefinedCheck.isUndefined(e)) {
        return {
          scrollLeft: i,
          scrollWidth: r + e,
          clientWidth: r
        };
      }
    }
    get mainScrollbarPosition() {
      return this.helper.getScrollBarPos(this.mainScrollStatus);
    }
    get subScrollbarPosition() {
      return this.helper.getScrollBarPos(this.subScrollStatus);
    }
    get isValidScrollLeft() {
      return this.mainScrollLeft === this.mainRawScrollLeft && this.subScrollLeft === this.subRawScrollLeft;
    }
    isModelReady() {
      return this.isReady;
    }
    getSubScrollStateByWidth(e) {
      return {
        scrollLeft: this.subRawScrollLeft,
        scrollWidth: e
      };
    }
    clampMainScrollLeft(e) {
      let {
        mainMaxScrollLeft: i
      } = this;
      if (isUndefinedCheck.isUndefined(i)) {
        return undefined;
      } else {
        return numberClampUtil.clampNumber(e, 0, i);
      }
    }
    clampSubScrollLeft(e) {
      let {
        subMaxScrollLeft: i
      } = this;
      if (isUndefinedCheck.isUndefined(i)) {
        return undefined;
      } else {
        return numberClampUtil.clampNumber(e, 0, i);
      }
    }
    clampScrollLeft() {
      let e = this.clampMainScrollLeft(this.mainScrollLeft);
      let i = this.clampSubScrollLeft(this.subScrollLeft);
      return {
        mainScrollLeft: e,
        subScrollLeft: i,
        changed: e !== this.mainScrollLeft || i !== this.subScrollLeft
      };
    }
    getMainScrollLeftAfterScroll(e) {
      let {
        mainScrollLeft: i
      } = this;
      let r = isNumberUtil.isNumber(e) ? i + e : e.scrollLeft;
      return this.clampMainScrollLeft(r);
    }
    getScrollLeftByRatio(e) {
      let {
        mainMaxScrollLeft: i,
        totalMaxScrollLeft: r
      } = this;
      if (isUndefinedCheck.isUndefined(i) || isUndefinedCheck.isUndefined(r)) {
        return;
      }
      let n = Math.round(r * e);
      let o = Math.min(n, i);
      return {
        mainScrollLeft: o,
        subScrollLeft: n - o
      };
    }
    getScrollLeftByDistance(e) {
      let {
        totalScrollLeft: i,
        totalMaxScrollLeft: r,
        mainMaxScrollLeft: n
      } = this;
      if (isUndefinedCheck.isUndefined(i) || isUndefinedCheck.isUndefined(r) || isUndefinedCheck.isUndefined(n)) {
        return;
      }
      let o = numberClampUtil.clampNumber(0, i + e, r);
      let l = Math.min(o, n);
      return {
        mainScrollLeft: l,
        subScrollLeft: o - l
      };
    }
    getScrollRatioBySliderOffset(e) {
      let {
        sliderMaxOffset: i
      } = this;
      if (i) {
        return e / i;
      } else {
        return 0;
      }
    }
    getOffsetToShowRect(e, i, r = 1, n) {
      if (!this.isReady) {
        return 0;
      }
      let o = r * 20;
      let {
        scrollContainerWidth: l,
        scrollItemMaxLeft: s,
        totalScrollLeft: a
      } = this;
      let c = -s + o - (e - a);
      let d = i - a - (l - s - o);
      if (n && n.stickToLeft) {
        return -c;
      } else if (n == null ? undefined : n.stickToRight) {
        return d;
      } else if (c > 0 && d < 0) {
        return -Math.min(c, Math.abs(d));
      } else if (d > 0 && c < 0) {
        return Math.min(d, Math.abs(c));
      } else {
        return 0;
      }
    }
    scrollByDistance(e) {
      let i = this.getScrollLeftByDistance(e);
      if (i) {
        this.setMainRawScrollLeft(i.mainScrollLeft);
        this.subRawScrollLeft = i.subScrollLeft;
      }
    }
    constructor() {
      eO(this, "scrollContainerWidth", 0);
      eO(this, "scrollWrapperOffset", 0);
      eO(this, "mainRawScrollLeft", 0);
      eO(this, "subRawScrollLeft", 0);
      eO(this, "subScrollWidth", undefined);
      eO(this, "subScrollerLeftOffset", 0);
      eO(this, "enableRightShadow", undefined);
      eO(this, "isNeedPaddingLeft", undefined);
      eO(this, "viewType", undefined);
      eO(this, "scrollerRightPadding", 0);
      eO(this, "helper", new eA());
    }
  }
  var scrollableTouchWheelUtils = require("scrollable-touch-wheel-utils") /*id: 863817*/;
  function ej(e, i, r) {
    var n;
    if ((i = typeof (n = function (e, i) {
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
    }(i, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, i, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = r;
    }
    return e;
  }
  let e$ = debugLoggerFactory.createEnabledLogger("scrollable:scrollManage");
  class eH {
    getScrollContainer() {
      return this.containerRef.current;
    }
    scrollByRatio(e, i, r) {
      let {
        scrollModel: n
      } = this;
      let o = n.getScrollLeftByRatio(e);
      if (!o) {
        e$(this.logId, "scrollByRatio: skip, not ready");
        return;
      }
      let {
        scrollRatio: l,
        isScrollable: s
      } = n;
      if (!i && l === e) {
        e$(this.logId, "%s.scrollByRatio(%s), skip due to the same ratio", r, e);
        return;
      }
      if (!s) {
        e$(this.logId, "%s.scrollByRatio(%s): skip due to unscrollable", r, e);
        return;
      }
      let {
        mainScrollLeft: a,
        subScrollLeft: c
      } = o;
      e$(this.logId, "%s.scrollByRatio: %s, main/sub=%s/%s", r, e, a, c);
      this.scroll(a, c, r || "scrollByRatio");
    }
    scrollByDistance(e, i) {
      let {
        scrollModel: r
      } = this;
      let n = r.getScrollLeftByDistance(e);
      if (!n) {
        e$(this.logId, "%s.scrollByDistance: skip, not ready", i);
        return;
      }
      let {
        mainScrollLeft: o,
        subScrollLeft: l
      } = n;
      e$(this.logId, "%s.scrollByDistance: %s, main/sub=%s/%s", i, e, o, l);
      this.scroll(o, l, i || "scrollByDistance");
    }
    resyncScroll(e) {
      let {
        mainScrollLeft: i,
        subScrollLeft: r,
        changed: n
      } = this.scrollModel.clampScrollLeft();
      if (!isUndefinedCheck.isUndefined(i) && !isUndefinedCheck.isUndefined(r) && (n || i || r)) {
        this.scroll(i, r, `${e}.resyncScroll`);
      }
    }
    scroll(e, i, r) {
      let {
        hookInstance: n
      } = this;
      e$(this.logId, "%s.scroll: scrollLeft=%s + %s", r, e, i);
      n.executeScroll({
        scrollLeft: e
      }, r);
      n.executeSubScroll({
        scrollLeft: i
      }, r);
    }
    constructor(e) {
      ej(this, "hookInstance", docScrollEventManager.createScrollManager(this));
      ej(this, "utils", undefined);
      ej(this, "containerRef", undefined);
      ej(this, "options", undefined);
      ej(this, "nestedRecordId", undefined);
      ej(this, "isNeedNativeScroll", false);
      ej(this, "destroyCallbackList", []);
      ej(this, "lastTouchTurnInfo", {
        touchEventId: undefined,
        isNeedMainScroll: false
      });
      ej(this, "scrollModel", new ex());
      ej(this, "logId", undefined);
      ej(this, "scrollableContext", undefined);
      ej(this, "block", undefined);
      ej(this, "init", () => {
        this.destroyCallbackList = [this.utils.addWheel(this.containerRef.current, this.handleWheel), this.hookInstance.onIsNeedNativeScrollChange(e => {
          this.isNeedNativeScroll = e;
        })];
      });
      ej(this, "checkIsNeedNativeScroll", e => this.isNeedNativeScroll ? {
        nativeScroll: true,
        reason: "isNeedNativeScroll"
      } : e.shiftKey ? {
        nativeScroll: false,
        reason: "shift"
      } : this.utils.checkIfMainlyVertical(e) ? {
        nativeScroll: true,
        reason: "verticalScroll"
      } : this.options.enableNativeSubScroll === false ? {
        nativeScroll: false,
        reason: "enableNativeSubScroll=false"
      } : {
        nativeScroll: !this.scrollModel.mainMaxScrollLeft,
        reason: "checkMainScroll"
      });
      ej(this, "checkIsNestedScroll", (e, i) => {
        if (e.isTouchEvent) {
          return false;
        }
        let {
          currentTarget: r,
          target: n
        } = e;
        let l = r == null ? undefined : r.querySelector(`.${docxScrollableConstants.scrollableItem}`);
        if (!l || !l.contains(n)) {
          return false;
        }
        let s = r => {
          let {
            scrollWidth: n,
            clientWidth: o,
            scrollLeft: l
          } = r;
          let s = i && l <= 0;
          let a = !i && Math.floor(n - o - l) <= 0;
          e$(this.logId, "handleWheel(%s), isMoveLeft=%s, isAtLeft=%s, isAtRight=%s,", e.type, i, s, a);
          return s || a;
        };
        let a = n;
        while (a !== l) {
          var c;
          var d;
          if (((c = a.classList) === null || c === undefined ? undefined : c.contains(docTokenStyleConstants.docSelectors.CONTENT_SCROLLER)) && a.parentNode.closest(`.${docxScrollableConstants.scrollableItem}`) !== l) {
            return !s(a);
          }
          if (!((d = this.options.nestedScrollClasses) === null || d === undefined ? undefined : d.some(e => {
            var i;
            if (a == null) {
              return undefined;
            } else if ((i = a.classList) === null || i === undefined) {
              return undefined;
            } else {
              return i.contains(e);
            }
          }))) {
            a = a.parentNode;
            continue;
          }
          if (!s(a)) {
            return true;
          }
          a = a.parentNode;
        }
        return false;
      });
      ej(this, "debouncedCheckIsNestedScroll", debounceUtil_1_1.debounce(this.checkIsNestedScroll, 50, {
        leading: true
      }));
      ej(this, "handleWheel", e => {
        if (scrollableTouchWheelUtils.isTableBlock(this === null || this === undefined ? undefined : this.containerRef?.current)) {
          return;
        }
        this.hookInstance.setAfterRender({
          key: "scrollHorizontal",
          value: emptyExportFunction.emptyFunction
        });
        let r = this.utils.getDeltaX(e);
        if (r === 0) {
          e$(this.logId, "skip, no deltaX");
          return;
        }
        let n = this.utils.checkIfHorizontalLeft(r);
        let o = !n;
        let l = this.debouncedCheckIsNestedScroll(e, n);
        e$(this.logId, "handleWheel(%s), isNestedScroll=%s", e.type, l);
        if (l) {
          return;
        }
        let {
          enableNativeSubScroll: s
        } = this.options;
        let {
          nativeScroll: a,
          reason: c
        } = this.checkIsNeedNativeScroll(e);
        e$(this.logId, "handleWheel(%s), nativeScroll=%s(%s)", e.type, a, c);
        if (a === true) {
          if (c !== "verticalScroll") {
            this.hookInstance.emitSubNativeScrollDelta(e, r, "handleWheel");
          }
          return;
        }
        let {
          mainScrollbarPosition: d,
          subScrollbarPosition: u
        } = this.scrollModel;
        if (!d || !u) {
          e$(this.logId, "skip, not ready");
          return;
        }
        let {
          isAtLeft: h,
          isAtRight: f
        } = d;
        let {
          isAtLeft: g,
          isAtRight: p
        } = u;
        let m = !h && g && n || !f && o;
        let v = !g && n || !p && o;
        let b = !m && v;
        let y = b && s === true;
        let {
          touchEventId: S
        } = e;
        let k = this.lastTouchTurnInfo.touchEventId === S;
        let E = !!S && !!k && this.lastTouchTurnInfo.isNeedMainScroll;
        if (S && !k) {
          this.lastTouchTurnInfo = {
            touchEventId: S,
            isNeedMainScroll: m
          };
        }
        let C = y && !E;
        e$(this.logId, "handleWheel(%s), needScroll(main=%s, sub=%s), moveLeft=%s, deltaX=%s, atLeft/atRight(main=%s/%s, sub=%s/%s), nativeSubScroll=%s(enable=%s,raw=%s,lastIsNeedMainScroll=%s)", e.type, m, b, n, r, h, f, g, p, C, s, y, E);
        if (C) {
          this.hookInstance.emitSubNativeScrollDelta(e, r, "handleWheel");
          return;
        }
        if (m) {
          this.hookInstance.executeScroll(r, "handleWheel");
        } else if (b) {
          this.hookInstance.executeSubScroll(r, "handleWheel");
        }
        if (m || b) {
          e.stopPropagation();
        }
        if (e.cancelable) {
          e.preventDefault();
        }
      });
      ej(this, "destroy", () => {
        this.destroyCallbackList.forEach(e => e());
        this.destroyCallbackList = [];
        this.hookInstance.destroy();
      });
      let {
        options: i,
        blockManager: r,
        vcController: n,
        block: l,
        logId: s,
        nestedRecordId: a
      } = e;
      let {
        enableVcOptions: c
      } = i;
      this.utils = new scrollableTouchWheelUtils.ScrollableTouchHandler(i);
      this.containerRef = e.containerRef;
      this.options = e.options;
      this.logId = s;
      this.block = l;
      this.nestedRecordId = a;
      this.scrollableContext = {
        options: i,
        blockManager: r,
        scrollManage: this,
        hookInstance: this.hookInstance,
        scrollModel: this.scrollModel,
        blockId: l.id,
        recordId: l.recordId,
        logId: s,
        nestedRecordId: a
      };
    }
  }
  ej(eH, "lockVertical", scrollableTouchWheelUtils.createToggleState(false, 200));
  let eU = e => {
    let i = reactCoreLibraryReexport.useMemo(() => new eH(e), []);
    reactCoreLibraryReexport.useLayoutEffect(() => {
      i.init();
      return () => i.destroy();
    }, [i]);
    return {
      scrollManage: i
    };
  };
  var globalMousedownManager = require("global-mousedown-manager") /*id: 564276*/;
  let eV = {};
  let eZ = {
    zIndex: docxScrollableConstants.scrollConstant
  };
  let ez = [docBlockTypeConstants.blockTypeConstants.SHEET];
  let eK = (e, i) => {
    let [r, n] = reactCoreLibraryReexport.useState({});
    reactCoreLibraryReexport.useEffect(() => {
      let r = e.current;
      let l = r == null ? undefined : r.querySelector(`.${docxScrollableConstants.scrollableItem}`);
      let s = ez.includes(i);
      let a = () => {
        n(eZ);
      };
      let c = e => {
        let {
          target: r
        } = e;
        let o = e.path || e.composedPath && e.composedPath() || [];
        if (i === docBlockTypeConstants.blockTypeConstants.SHEET) {
          let e = document.querySelector(".block-toolbar__overlay");
          if (e && r && e.contains(r)) {
            return;
          }
        }
        if (l && r && !o.some(e => l === e) && !l.contains(r)) {
          n(eV);
        }
      };
      if (l && s) {
        l.addEventListener("click", a);
        globalMousedownManager.mousedownListener.addListener(c);
      }
      return () => {
        if (l && s) {
          l.removeEventListener("click", a);
          globalMousedownManager.mousedownListener.removeListener(c);
        }
      };
    }, [e.current]);
    return r;
  };
  var scrollPaddingSubjects = require("scroll-padding-subjects") /*id: 825748*/;
  let eG = debugLoggerFactory.createEnabledLogger("scrollable:index");
  let eq = docxFeatureFlags.isUpEnabled();
  class eJ extends editorContextFacade.EditorContextFacade {
    static getDefaultProps(e) {
      let {
        appMode: i
      } = e;
      return {
        enableRightShadow: true,
        isClipLeft: false,
        scrollbarToBlock: 0,
        subScrollerLeftOffset: 0,
        enableNativeSubScroll: "auto",
        ignoreScrollClasses: [],
        nestedScrollClasses: [],
        rootSelector: i === viewModeConstants.viewModes.HISTORY ? `.${docxEditorConstantsConfig.containerIds.HISTORY_CONTAINER}` : `.${docxEditorConstantsConfig.containerIds.ROOT}`,
        noCommentPanel: false,
        appMode: i
      };
    }
    getWrapper(e, i) {
      this.layoutHelper = new Y(i, this.editorContext.layout);
      let {
        isClipLeft: r,
        appMode: n
      } = i;
      return l => {
        let {
          blockManager: m,
          vcController: b
        } = this;
        let y = l.isShowLoading;
        let {
          layout: C,
          isHistory: B
        } = l.recursionProps;
        let P = l.hostElementRef.current;
        let {
          struct: L,
          model: N,
          canRenderChild: A
        } = l;
        let {
          id: O,
          type: D,
          recordId: x
        } = L;
        let F = `${D}=${O} `;
        let j = window[docxEditorConstantsConfig.hydrateScrollLayout]?.[x];
        let [$, H] = reactCoreLibraryReexport.useState((j == null ? undefined : j.width) || 0);
        let [U, W] = reactCoreLibraryReexport.useState((j == null ? undefined : j.margin) || 0);
        let [V, Z] = reactCoreLibraryReexport.useState(true);
        let z = reactCoreLibraryReexport.useRef(null);
        let K = reactCoreLibraryReexport.useRef(null);
        let X = reactCoreLibraryReexport.useRef(null);
        let G = Object.assign({}, i, this.editorContext.toPlainObject());
        let {
          isKeepBoundary: J,
          indentWidth: Y
        } = q(G, L);
        let er = docxPanelWidthSelector.getCurrentPanelWidth();
        let {
          isNarrowScreen: en,
          isRoomsNarrowScreen: el
        } = screenWidthObserverHook.useScreenWidthObserver();
        let {
          scrollManage: es
        } = eU({
          containerRef: z,
          options: i,
          blockManager: m,
          vcController: b,
          block: L,
          logId: F,
          nestedRecordId: x
        });
        let {
          hookInstance: ea,
          scrollModel: ec,
          scrollableContext: ed
        } = es;
        let {
          resetStyle: eu,
          style: eh,
          addAnimationIfNeed: ef
        } = function (e) {
          let {
            indentWidth: i,
            logId: r,
            model: n,
            scrollContainerWidth: o,
            scrollWrapperOffset: l
          } = e;
          let [s, c] = reactCoreLibraryReexport.useState({});
          let d = reactCoreLibraryReexport.useRef(0);
          let h = reactCoreLibraryReexport.useRef(i);
          let f = useStableCallbackHook.useStableCallback(() => {
            if (!isEmptyUtil.isEmpty(s) && ei) {
              c({});
            }
          });
          let p = useStableCallbackHook.useStableCallback(() => {
            if (isEmptyUtil.isEmpty(s) && ei) {
              c(ee);
            }
          });
          return {
            style: s,
            resetStyle: f,
            addAnimationIfNeed: useStableCallbackHook.useStableCallback(e => {
              let s = document.querySelector(`.${docxEditorConstantsConfig.containerIds.ROOT}`);
              if (!s || !ei) {
                return;
              }
              let a = s.clientWidth;
              et(r, "docxContainerWidth(%o-->%o),width(%o-->%o),offset(%o-->%o)", d.current, a, o, e.scrollContainerWidth, l, e.scrollWrapperOffset);
              let c = false;
              if (n.type === docBlockTypeConstants.blockTypeConstants.BITABLE) {
                let e = n.getBlockManager().getBlockViewByBlockIdNotCheck(n.id);
                c = !!e && !!e.getIsHalfFullScreen() && h.current !== i;
              } else if (n.type === docBlockTypeConstants.blockTypeConstants.BASE_REFER) {
                let e = n.getBlockManager().getBlockViewByBlockIdNotCheck(n.id);
                c = !!e && !!e.getIsHalfFullScreen() && h.current !== i;
              }
              if (d.current === a && !c && (e.scrollWrapperOffset !== l || e.scrollContainerWidth !== o)) {
                p();
              }
              d.current = a;
              h.current = i;
            })
          };
        }({
          logId: F,
          indentWidth: Y,
          model: N,
          scrollContainerWidth: $,
          scrollWrapperOffset: U
        });
        ec.setScrollContainerWidth($);
        ec.setScrollWrapperOffset(U);
        ec.setIsNeedPaddingLeft(V);
        let {
          isAllScrollToEnd: eg,
          isMainScrollToEnd: ep,
          hasMainScroll: em,
          scrollItemLeft: eb,
          scrollItemMaxLeft: ek,
          isReady: eC
        } = ec;
        let eM = function (e) {
          let [i, r] = reactCoreLibraryReexport.useState("");
          reactCoreLibraryReexport.useEffect(() => {
            let i = e.hookInstance.onSetWrapperClass(e => {
              r(e);
            });
            return () => {
              i();
            };
          }, [e.hookInstance]);
          return i;
        }(es);
        let eT = reactReduxCore.useSelector(docxViewStateUtil.getViewType);
        let ew = e_(es);
        let eB = useStableCallbackHook.useStableCallback(() => {
          let e = l.recursionProps.isPresentationMode ? P.clientWidth : P.getBoundingClientRect().width;
          if (!e) {
            return;
          }
          let {
            isKeepBoundary: i,
            indentWidth: r
          } = q(G, L);
          let n = this.layoutHelper.calcLayout(eT, i, r, e, docBlockZoomUtils.getPresentationZoomConfig(l), en, el, F);
          H(n.scrollContainerWidth);
          W(n.scrollWrapperOffset);
          let o = m.layoutManager.getReconciler().viewportMap.get(l.blockId);
          if (o) {
            o.updateRect();
          }
          ef(n);
          ew();
        });
        let eP = useDebounceCallbackHook_1.useDebounceCallback(eB, 250, {
          leading: true
        });
        let eL = useDebounceCallbackHook_1.useDebounceCallback(eB, 50, {
          leading: true
        });
        let eN = e => {
          if (D === docBlockTypeConstants.blockTypeConstants.TABLE) {
            let {
              containerMarginLeft: i,
              preContainerMarginLeft: r,
              containerWidth: n,
              preContainerWidth: o
            } = e;
            if (n !== o || i !== r) {
              requestAnimationFrame(() => {
                eL();
              });
            }
            return;
          }
          eP();
        };
        reactCoreLibraryReexport.useLayoutEffect(() => {
          if (!J && !y) {
            var e;
            let i = this.blockManager.getBlockViewByBlockIdNotCheck(O);
            if (i) {
              if ((e = this.rectForFixed) !== null && e !== undefined) {
                e.pushBlockId(O, {
                  block: i,
                  eleRef: z
                });
              }
            }
          }
          return () => {
            var e;
            if ((e = this.rectForFixed) !== null && e !== undefined) {
              e.deleteBlockId(O);
            }
          };
        }, [O, J, y]);
        reactCoreLibraryReexport.useEffect(() => {
          eP();
        }, [eT, eP]);
        eE(H);
        reactCoreLibraryReexport.useEffect(() => {
          eP();
        }, [er, eP]);
        reactCoreLibraryReexport.useEffect(() => {
          if (!C) {
            return;
          }
          eG(F, "debounceCalculate and add listeners for debounceCalculate");
          let e = () => {
            C.comment.getHostRectCache();
            requestAnimationFrame(eP);
          };
          eP();
          this.blockManager.addListener(editorUiConstants.editorResizeClass, eN);
          this.blockManager.addListener(renderEventConstants.enterBuffer, eP, O);
          docxEditorEventConstantsAndManager.globalEventEmitter.on(layoutEventTypes.layoutEventTypes.DOC_COMMENT_SHOW_CHANGE, e);
          if (!eq || n !== viewModeConstants.viewModes.MAIN_PC) {
            window.addEventListener("resize", eP);
          }
          let i = [C.catalogue.onLayoutChange(eP), ea.onGridChange(eP)];
          return () => {
            this.blockManager.removeListener(editorUiConstants.editorResizeClass, eN);
            this.blockManager.removeListener(renderEventConstants.enterBuffer, eP, O);
            docxEditorEventConstantsAndManager.globalEventEmitter.removeListener(layoutEventTypes.layoutEventTypes.DOC_COMMENT_SHOW_CHANGE, e);
            if (!eq || n !== viewModeConstants.viewModes.MAIN_PC) {
              window.removeEventListener("resize", eP);
            }
            i.forEach(e => e());
          };
        }, [eP, C, ea, O, F, n]);
        reactCoreLibraryReexport.useEffect(() => {
          let e = this.blockManager.layoutManager.getReconciler();
          eG(F, "add listeners");
          let i = () => {
            this.blockManager.eventEmitter.emit(docxScrollableConstants.scrollEvents.ON_SCROLL, undefined, O);
            let i = e.viewportMap.get(l.blockId);
            if (i && i.virtualScroller) {
              i.virtualScroller.handleScroll();
            }
          };
          let r = [ea.onSubScroll(i), ea.onScroll(() => {
            i();
            scrollPaddingSubjects.layoutSubjects.mainScroll$.next(N);
          }), ea.onIsNeedPaddingLeft(e => {
            Z(e);
            scrollPaddingSubjects.layoutSubjects.paddingChange$.next(N);
          })];
          return () => r.forEach(e => e());
        }, [ea, O, D, F]);
        S(ed);
        eo({
          ctx: ed,
          isShowLoading: y,
          isNeedPaddingLeft: V,
          scrollItemMaxLeft: ek
        });
        (function (e) {
          let {
            ctx: i,
            itemRef: r
          } = e;
          let {
            scrollModel: n,
            logId: o
          } = i;
          let {
            subScrollWidth: l
          } = n;
          let s = useDebounceCallbackHook_1.useDebounceCallback(() => {
            let e = r.current;
            if (!e) {
              return;
            }
            v(o, "hack: set opacity to force render");
            let i = e.style.opacity;
            e.style.opacity = "1.01";
            setTimeout(() => e.style.opacity = i);
          }, 0);
          reactCoreLibraryReexport.useEffect(() => {
            s();
            return () => s.cancel();
          }, [l, s]);
        })({
          ctx: ed,
          itemRef: K
        });
        reactCoreLibraryReexport.useEffect(() => {
          var e;
          if (!A) {
            return;
          }
          let i = m.layoutManager.getReconciler();
          if ((e = i.viewportMap.get(l.blockId)) !== null && e !== undefined) {
            e.bindScroller({
              setScrollerOffset: e => es.scrollByDistance(e, undefined),
              getScrollerRect: () => ({
                left: ec.mainRawScrollLeft + ec.subRawScrollLeft,
                width: ec.scrollContainerWidth,
                top: 0,
                height: 0
              }),
              getContentDistanceToStart: () => ec.scrollWrapperOffset
            });
          }
          return () => {
            var e;
            if ((e = i.viewportMap.get(l.blockId)) !== null && e !== undefined) {
              e.unbindScroller();
            }
          };
        }, [A]);
        let eA = reactCoreLibraryReexport.useMemo(() => [docBlockTypeConstants.blockTypeConstants.SHEET, docBlockTypeConstants.blockTypeConstants.BITABLE, docBlockTypeConstants.blockTypeConstants.BASE_REFER].includes(D) ? {
          contentEditable: false,
          suppressContentEditableWarning: true
        } : {}, [D]);
        let eO = !J && !B && r;
        let {
          renderShadow: eD
        } = eS(ed);
        let ex = ey({
          ctx: ed,
          isShowLoading: y,
          scrollContainerWidth: $,
          scrollItemMaxLeft: ek,
          hostElement: P
        });
        let eF = !ec.mainMaxScrollLeft;
        eR(z.current, D, J, eF);
        if (eG.enabled) {
          eG(F, "scrollToEnd(main=%s, all=%s), finalClipLeft=%s, isKeepBoundary=%s, ratio=%s, model=%o", ep, eg, eO, J, ec.scrollRatio, ec.getCore());
        }
        let ej = eK(z, D);
        eI(es, z);
        let e$ = s(docxScrollableConstants.scrollableWrapper, {
          "scrollable-mainscroll-end": ep === true,
          "scrollable-allscroll-end": eg === true,
          "scrollable-has-mainscroll": em,
          [eM]: !!eM
        });
        let eH = s(docxScrollableConstants.scrollableContainer, {
          "clip-left": eO,
          "clip-right": eg !== true,
          [docxScrollableConstants.scrollRectReady]: eC
        });
        return reactJsxRuntimeCoreReexport.jsxs("div", {
          style: {
            width: $,
            left: -U,
            ...eh
          },
          className: e$,
          ...eA,
          onTransitionEnd: eu,
          children: [reactJsxRuntimeCoreReexport.jsxs("div", {
            style: {
              width: $,
              ...ej,
              ...eh
            },
            onTransitionEnd: eu,
            className: eH,
            ref: z,
            children: [reactJsxRuntimeCoreReexport.jsx("div", {
              className: docxScrollableConstants.scrollableItem,
              style: {
                left: eb,
                ...eh
              },
              onTransitionEnd: eu,
              ref: K,
              children: reactJsxRuntimeCoreReexport.jsx(e, {
                ...l,
                scrollContainerWidth: $,
                scrollManage: ea,
                scrollItemMaxLeft: ek,
                isKeepBoundary: J,
                scrollableSlotRef: X
              })
            }), eD]
          }), ex, reactJsxRuntimeCoreReexport.jsx("div", {
            className: "scrollable-slot",
            style: {
              left: eb,
              ...eh
            },
            onTransitionEnd: eu,
            contentEditable: false,
            ref: X
          })]
        });
      };
    }
    constructor(...e) {
      var i;
      var r;
      var n;
      super(...e);
      r = undefined;
      if ((i = typeof (n = function (e, i) {
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
      }(i = "layoutHelper", "string")) == "symbol" ? n : n + "") in this) {
        Object.defineProperty(this, i, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[i] = r;
      }
    }
  }
  function eY() {
    docxEditorCore.registerViewExt(docxScrollableConstants.scrollProviderName, eJ);
  }
  require.d(exports, {
    registerScrollableView: function () {
      return eY;
    }
  });
}