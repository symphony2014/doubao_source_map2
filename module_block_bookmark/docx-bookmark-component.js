// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'BookmarkBlockView'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_shortcut.41d20a88.js
         * chunkId: 35682
         * moduleId: 46028
         */
module.exports = function (module, exports, require) {
  var n;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var debounceUtilWrapper = require("debounce-util-wrapper") /*id: 213804*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var resizeObserverPolyfill = require("resize-observer-polyfill") /*id: 412454*/;
  var blockLoadPerformanceTracker = require("block-load-performance-tracker") /*id: 446264*/;
  var docBlockAnalyticsConstants = require("doc-block-analytics-constants") /*id: 337105*/;
  var docxShortcutFeatureDetection = require("docx-shortcut-feature-detection") /*id: 407607*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var blockMaskManagerBaseClass = require("block-mask-manager-base-class") /*id: 471875*/;
  var urlValidationUtils_1 = require("url-validation-utils_1") /*id: 233855*/;
  var linkServiceProvider = require("link-service-provider") /*id: 880405*/;
  var diProviderCollectEvent = require("di-provider-collect-event") /*id: 308105*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var b = classnamesUtils;
  var docxImageUrlUtils = require("docx-image-url-utils") /*id: 219802*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let k = "docx-bookmark";
  function S(e) {
    let {
      title: i,
      icon: r,
      summary: n,
      url: o,
      onClick: l,
      display: s,
      shouldShowCover: a
    } = e;
    let c = b(`${k}-card`, {
      column: s === "column"
    });
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: c,
      onClick: l,
      children: [a ? reactJsxRuntimeCoreReexport.jsx(M, {
        ...e
      }) : null, reactJsxRuntimeCoreReexport.jsxs("div", {
        className: `${k}-info`,
        children: [reactJsxRuntimeCoreReexport.jsxs("div", {
          className: `${k}-url-wrapper`,
          children: [r ? reactJsxRuntimeCoreReexport.jsx("span", {
            className: `${k}-icon`,
            style: {
              backgroundImage: `url(${r})`
            }
          }) : null, reactJsxRuntimeCoreReexport.jsx("span", {
            className: `${k}-url`,
            children: o
          })]
        }), reactJsxRuntimeCoreReexport.jsxs("div", {
          className: `${k}-detail`,
          children: [reactJsxRuntimeCoreReexport.jsx("span", {
            className: `${k}-title`,
            children: i
          }), reactJsxRuntimeCoreReexport.jsx("br", {}), n ? reactJsxRuntimeCoreReexport.jsx("span", {
            className: `${k}-summary`,
            children: n
          }) : null]
        })]
      })]
    });
  }
  function M(e) {
    let [i, r] = reactCoreLibraryReexport.useState(undefined);
    let {
      onCoverLoaded: n,
      onCoverError: o,
      shouldLoadCover: l,
      cover_url: a
    } = e;
    let c = reactCoreLibraryReexport.useCallback(e => {
      r(`url(${e})`);
      if (n != null) {
        n();
      }
    }, [n]);
    reactCoreLibraryReexport.useEffect(() => {
      if (l && a && !i) {
        docxImageUrlUtils.loadImage(a, true).then(e => {
          let i = docxImageUrlUtils.canvasToDataURL(e);
          c(i);
          return i;
        }).catch(() => {
          let e = docxShortcutFeatureDetection.isPDFMode() || docxShortcutFeatureDetection.isShortcutEnabled();
          if (o != null) {
            o("base64SrcError", !e);
          }
          if (!e) {
            docxImageUrlUtils.loadImage(a).then(() => {
              c(a);
              return a;
            }).catch(() => o == null ? undefined : o("originalSrcError"));
          }
        });
      }
    }, [l, a, i, o, c]);
    let d = {
      backgroundImage: i
    };
    if (e.cover_width && e.cover_height) {
      if (e.cover_width / e.cover_height >= 0.5) {
        d.backgroundPositionY = "center";
      } else {
        d.backgroundPositionY = "top";
      }
    }
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: `${k}-cover`,
      style: d
    });
  }
  function x(e) {
    let {
      url: i
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: `${k}-card loading`,
      children: [reactJsxRuntimeCoreReexport.jsxs("div", {
        className: `${k}-url-wrapper`,
        children: [reactJsxRuntimeCoreReexport.jsx("span", {
          className: `${k}-icon`
        }), reactJsxRuntimeCoreReexport.jsx("span", {
          className: `${k}-url`,
          children: i
        })]
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: `${k}-skeleton-item`,
        style: {
          maxWidth: "350px"
        }
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: `${k}-skeleton-item`
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: `${k}-skeleton-item`,
        style: {
          maxWidth: "576px"
        }
      })]
    });
  }
  function E(e, i, r) {
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
  (n = C || {}).ROW = "row";
  n.COLUMN = "column";
  var C = n;
  class _ extends blockMaskManagerBaseClass.BlockMaskManagerBase {
    get hasCoverUrl() {
      return !!this.snapshot.bookmark.cover_url;
    }
    get isPDF() {
      return this.props.recursionProps.isPDF === true;
    }
    get isShortcut() {
      return this.props.recursionProps.isShortcut === true;
    }
    get isSSR() {
      return this.props.recursionProps.isSSR === true;
    }
    get borderColor() {
      let {
        syncCursorSelected: e,
        syncCursorBorderColor: i
      } = this.props;
      if (e) {
        return i;
      } else {
        return undefined;
      }
    }
    blockViewDidMount() {
      super.blockViewDidMount();
      this.calcDisplayType();
      if (!this.hasCoverUrl || docxShortcutFeatureDetection.isShortcutEnabled() && !docxShortcutFeatureDetection.isPDFMode()) {
        this.handleCoverLoaded();
      }
      this.blockManager.layoutManager.notifyNodeHeightChange(this.id);
      let e = this.blockManager.layoutManager.getReconciler();
      if ([...e.getViewportNodes(), ...e.getBufferNodes()].includes(this.id)) {
        this.setState({
          shouldLoadCover: true
        });
      }
    }
    blockViewDidMove() {
      super.blockViewDidMove();
      this.disconnectResizeObserver();
      this.calcDisplayType();
      if (this.isViewportEntered()) {
        this.initResizeObserver();
      }
    }
    blockViewWillUnmount() {
      super.blockViewWillUnmount();
      this.disconnectResizeObserver();
    }
    onBufferEnter() {
      this.setState({
        shouldLoadCover: true
      });
    }
    onViewportEnter() {
      this.setState({
        shouldLoadCover: true
      });
      this.initResizeObserver();
    }
    onViewportLeave() {
      this.disconnectResizeObserver();
    }
    disconnectResizeObserver() {
      if (this.resizeObserver) {
        this.resizeObserver.disconnect();
      }
    }
    calcDisplayType() {
      var e;
      let i = (e = this.hostElement) === null || e === undefined ? undefined : e.getBoundingClientRect();
      if (!(i == null ? undefined : i.width)) {
        return;
      }
      let {
        width: r
      } = i;
      let {
        display: n
      } = this.state;
      let o = r > 288 ? C.ROW : C.COLUMN;
      if (o !== n) {
        this.setState({
          display: o
        });
      }
    }
    handleCoverLoaded() {}
    getOriginalUrl() {
      let {
        url: e
      } = this.snapshot.bookmark;
      return e;
    }
    renderLoading(e) {
      return reactJsxRuntimeCoreReexport.jsx(platformDocUtils.R0s, {
        history: platformDocUtils.m8M,
        hasUnSaveData: () => true,
        getUnSaveTip: () => t("CreationDoc_Docs_WebCardLoading_LeaveSubtitle"),
        children: reactJsxRuntimeCoreReexport.jsx(x, {
          url: e
        })
      });
    }
    reportTTU() {
      if (!this.hadReportTTU) {
        blockLoadPerformanceTracker.BlockLoadPerformanceTracker.reportBlockLoadStage(docBlockAnalyticsConstants.blockStateConstants.TTU, {
          id: this.model.id,
          time: new Date().getTime()
        });
        this.hadReportTTU = true;
      }
    }
    renderCard() {
      let e = this.snapshot.bookmark;
      let i = this.hasCoverUrl && !this.state.isCoverError && (!docxShortcutFeatureDetection.isShortcutEnabled() || !!docxShortcutFeatureDetection.isPDFMode());
      this.reportTTU();
      return reactJsxRuntimeCoreReexport.jsx(S, {
        ...e,
        onCoverLoaded: this.handleCoverLoaded,
        onCoverError: this.handleCoverError,
        onClick: this.handleClick,
        shouldShowCover: i,
        shouldLoadCover: this.state.shouldLoadCover,
        display: this.state.display
      });
    }
    renderContent() {
      let {
        title: e,
        url: i
      } = this.snapshot.bookmark;
      if (this.isSSR || !e) {
        return reactJsxRuntimeCoreReexport.jsx(x, {
          url: i
        });
      } else {
        return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
          children: this.renderCard()
        });
      }
    }
    render() {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: "docx-bookmark-wrapper",
        style: {
          boxShadow: this.borderColor ? `0 0 0 1px ${this.borderColor}` : undefined
        },
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: "docx-bookmark-content",
          children: this.renderContent()
        })
      });
    }
    constructor(e) {
      super(e);
      E(this, "resizeObserver", undefined);
      E(this, "initResizeObserver", () => {
        let e = this.hostElement;
        if (e) {
          this.resizeObserver ||= new resizeObserverPolyfill.ResizeObserver(this.handleResize);
          this.resizeObserver.observe(e);
        }
      });
      E(this, "handleResize", debounceUtilWrapper.createDebounce(() => {
        this.calcDisplayType();
      }, 100));
      E(this, "handleClick", e => {
        this.blockManager.editorAPI.getService(diProviderCollectEvent.collectEventName).collectPageClick("ccm_doc_content_page_click", {
          record_id: this.record.id,
          block_type: this.type
        }, {
          click: "block_custom_action",
          action_type: "click_bookmark",
          target: "none"
        });
        this.editorAPI.getService(linkServiceProvider.linkServiceProvider).open({
          url: this.snapshot.bookmark.url,
          title: this.snapshot.bookmark.title,
          event: e,
          external: true,
          blockId: this.id
        });
      });
      E(this, "handleCoverError", (e, i) => {
        if (!i) {
          this.setState({
            isCoverError: true
          });
          this.handleCoverLoaded();
        }
        let {
          cover_url: n
        } = this.snapshot.bookmark;
        let o = n && urlValidationUtils_1.parseUrl(n)?.origin;
        this.blockManager.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("docs_blocks_abnormal_behaviour_trace_dev", {
          action: "bookmark_cover_error",
          info: `${e},url:${o}`
        });
      });
      E(this, "hadReportTTU", false);
      this.state = {
        shouldLoadCover: this.isShortcut || this.isPDF || false,
        isCoverError: false,
        display: C.ROW
      };
    }
  }
  E(_, "type", docBlockTypeConstants.blockTypeConstants.BOOKMARK);
  var T = _;
  require.d(exports, {
    BookmarkBlockView: function () {
      return T;
    }
  });
}