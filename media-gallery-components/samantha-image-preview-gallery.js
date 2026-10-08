// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'h' to 'ImagePreviewGallery'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 927160
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var semiDividerComponent = require("semi-divider-component") /*id: 384623*/;
  var rtlLinkIcon = require("rtl-link-icon") /*id: 70222*/;
  var rtlSearchIcon_1 = require("rtl-search-icon_1") /*id: 547696*/;
  var addCircleIcon_1 = require("add-circle-icon_1") /*id: 5067*/;
  var rtlExpandArrowsIcon = require("rtl-expand-arrows-icon") /*id: 399455*/;
  var rtlCloseIcon = require("rtl-close-icon") /*id: 851909*/;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  let u = reactCoreLibraryReexport.createContext({});
  var reactFoundationComponent = require("react-foundation-component") /*id: 323591*/;
  var propTypesFactoryWrapper = require("prop-types-factory-wrapper") /*id: 928010*/;
  var m = propTypesFactoryWrapper;
  var businessLayoutConfig = require("business-layout-config") /*id: 353607*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var v = classnamesUtils;
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var reactPortalContainer = require("react-portal-container") /*id: 361066*/;
  var arrowLeftIcon = require("arrow-left-icon") /*id: 406937*/;
  var arrowRightIcon = require("arrow-right-icon") /*id: 798527*/;
  var chevronLeftIcon = require("chevron-left-icon") /*id: 220673*/;
  var chevronRightIcon = require("chevron-right-icon") /*id: 386685*/;
  var minusIconComponent = require("minus-icon-component") /*id: 554774*/;
  var plusIconComponent = require("plus-icon-component") /*id: 392476*/;
  var businessLayoutIcon = require("business-layout-icon") /*id: 587488*/;
  var windowAdaptionStrokedIcon = require("window-adaption-stroked-icon") /*id: 388419*/;
  var rotateIconComponent = require("rotate-icon-component") /*id: 305830*/;
  var downloadIcon = require("download-icon") /*id: 808129*/;
  var reactTooltipComponent = require("react-tooltip-component") /*id: 228812*/;
  var sliderComponentAdapter = require("slider-component-adapter") /*id: 938680*/;
  var businessLayoutAdapter = require("business-layout-adapter") /*id: 133109*/;
  var aiCreationLocaleWrapper = require("ai-creation-locale-wrapper") /*id: 67026*/;
  var debounceUtilWrapper = require("debounce-util-wrapper") /*id: 213804*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function M(e, t, n) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var i = n.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  let W = `${businessLayoutConfig.imagePrefixConfig.PREFIX}-preview-controls`;
  class F extends reactFoundationComponent.FoundationComponent {
    get adapter() {
      return {
        ...super.adapter
      };
    }
    render() {
      let {
        className: e,
        renderPreviewMenu: t,
        forwardRef: n
      } = this.props;
      let i = v(W, `${W}-wrapper footer`, e, {
        [`${W}-content`]: !t
      });
      return reactJsxRuntimeCoreReexport.jsx("section", {
        className: i,
        ref: n,
        children: t ? this.customRenderViewMenu() : this.getFooterMenu()
      });
    }
    constructor(e) {
      super(e);
      M(this, "foundation", undefined);
      M(this, "changeSliderValue", e => {
        this.foundation.changeSliderValue(e);
      });
      M(this, "handleMinusClick", () => {
        this.changeSliderValue("minus");
      });
      M(this, "handlePlusClick", () => {
        this.changeSliderValue("plus");
      });
      M(this, "handleRotateLeft", () => {
        this.foundation.handleRotate("left");
      });
      M(this, "handleRotateRight", () => {
        this.foundation.handleRotate("right");
      });
      M(this, "handleSlideChange", debounceUtilWrapper.createDebounce(e => {
        this.foundation.handleValueChange(e);
      }, 50));
      M(this, "handleRatioClick", () => {
        this.foundation.handleRatioClick();
      });
      M(this, "customRenderViewMenu", () => {
        let {
          min: e,
          max: t,
          step: n,
          curPage: i,
          totalNum: r,
          ratio: o,
          zoom: l,
          disabledPrev: a,
          disabledNext: s,
          disableDownload: c,
          onNext: d,
          onPrev: u,
          onDownload: p,
          renderPreviewMenu: h,
          imageMeta: m
        } = this.props;
        let f = {
          min: e,
          max: t,
          step: n,
          curPage: i,
          totalNum: r,
          ratio: o,
          zoom: l,
          disabledPrev: a,
          disabledNext: s,
          disableDownload: c,
          onNext: d,
          onPrev: u,
          onDownload: p,
          onRotateLeft: this.handleRotateLeft,
          onRotateRight: this.handleRotateRight,
          disabledZoomIn: l === t,
          disabledZoomOut: l === e,
          onRatioClick: this.handleRatioClick,
          onZoomIn: this.handlePlusClick,
          onZoomOut: this.handleMinusClick,
          onClose: this.props.onClose,
          menuItems: this.getMenu(),
          imageMeta: m
        };
        if (h == null) {
          return undefined;
        } else {
          return h(f);
        }
      });
      M(this, "getFinalIconElement", (e, t, n) => {
        let {
          showTooltip: i,
          zIndex: r = 0
        } = this.props;
        if (i) {
          return reactJsxRuntimeCoreReexport.jsx(reactTooltipComponent.TooltipComponent, {
            content: t,
            zIndex: r + 1,
            children: e
          }, `tooltip-${n}`);
        } else {
          return e;
        }
      });
      M(this, "getLocalTextByKey", e => reactJsxRuntimeCoreReexport.jsx(aiCreationLocaleWrapper.AiCreationLocale, {
        componentName: "Image",
        children: t => t[e]
      }));
      M(this, "getIconChevronLeft", () => {
        let {
          disabledPrev: e,
          onPrev: t,
          prevTip: n
        } = this.props;
        let i = reactJsxRuntimeCoreReexport.jsx(chevronLeftIcon.ChevronLeftIcon, {
          size: "large",
          className: e ? `${W}-disabled` : "",
          onClick: e ? undefined : t
        }, "chevron-left");
        let r = n ?? this.getLocalTextByKey("prevTip");
        return this.getFinalIconElement(i, r, "chevron-left");
      });
      M(this, "getIconChevronRight", () => {
        let {
          disabledNext: e,
          onNext: t,
          nextTip: n
        } = this.props;
        let i = reactJsxRuntimeCoreReexport.jsx(chevronRightIcon.ChevronRightIcon, {
          size: "large",
          className: e ? `${W}-disabled` : "",
          onClick: e ? undefined : t
        }, "chevron-right");
        let r = n ?? this.getLocalTextByKey("nextTip");
        return this.getFinalIconElement(i, r, "chevron-right");
      });
      M(this, "getIconMinus", () => {
        let {
          zoomOutTip: e,
          zoom: t,
          min: n
        } = this.props;
        let i = t === n;
        let r = reactJsxRuntimeCoreReexport.jsx(minusIconComponent.MinusIcon, {
          size: "large",
          onClick: i ? undefined : this.handleMinusClick,
          className: i ? `${W}-disabled` : ""
        }, "minus");
        let o = e ?? this.getLocalTextByKey("zoomOutTip");
        return this.getFinalIconElement(r, o, "minus");
      });
      M(this, "getIconPlus", () => {
        let {
          zoomInTip: e,
          zoom: t,
          max: n
        } = this.props;
        let i = t === n;
        let r = reactJsxRuntimeCoreReexport.jsx(plusIconComponent.PlusIcon, {
          size: "large",
          onClick: i ? undefined : this.handlePlusClick,
          className: i ? `${W}-disabled` : ""
        }, "plus");
        let o = e ?? this.getLocalTextByKey("zoomInTip");
        return this.getFinalIconElement(r, o, "plus");
      });
      M(this, "getIconRatio", () => {
        let e;
        let {
          ratio: t,
          originTip: n,
          adaptiveTip: i
        } = this.props;
        let r = {
          key: "ratio",
          size: "large",
          className: v(`${W}-gap`),
          onClick: this.handleRatioClick
        };
        let o = t === "adaptation" ? reactJsxRuntimeCoreReexport.jsx(businessLayoutIcon.BusinessLayoutIcon, {
          ...r
        }) : reactJsxRuntimeCoreReexport.jsx(windowAdaptionStrokedIcon.WindowAdaptionIcon, {
          ...r
        });
        e = t === "adaptation" ? n ?? this.getLocalTextByKey("originTip") : i ?? this.getLocalTextByKey("adaptiveTip");
        return this.getFinalIconElement(o, e, "ratio");
      });
      M(this, "getIconRotate", () => {
        let {
          rotateTip: e
        } = this.props;
        let t = reactJsxRuntimeCoreReexport.jsx(rotateIconComponent.RotateIcon, {
          size: "large",
          onClick: this.handleRotateLeft
        }, "rotate");
        let n = e ?? this.getLocalTextByKey("rotateTip");
        return this.getFinalIconElement(t, n, "rotate");
      });
      M(this, "getIconDownload", () => {
        let {
          downloadTip: e,
          onDownload: t,
          disableDownload: n
        } = this.props;
        let i = reactJsxRuntimeCoreReexport.jsx(downloadIcon.DownloadIcon, {
          size: "large",
          onClick: n ? undefined : t,
          className: v(`${W}-gap`, {
            [`${W}-disabled`]: n
          })
        }, "download");
        let r = e ?? this.getLocalTextByKey("downloadTip");
        return this.getFinalIconElement(i, r, "download");
      });
      M(this, "getNumberInfo", () => {
        let {
          curPage: e,
          totalNum: t
        } = this.props;
        return reactJsxRuntimeCoreReexport.jsxs("div", {
          className: `${W}-page`,
          children: [e, "/", t]
        }, "info");
      });
      M(this, "getSlider", () => {
        let {
          zoom: e,
          min: t,
          max: n,
          step: i,
          showTooltip: r
        } = this.props;
        return reactJsxRuntimeCoreReexport.jsx(sliderComponentAdapter.SliderComponent, {
          value: e,
          min: t,
          max: n,
          step: i,
          tipFormatter: e => `${e}%`,
          tooltipVisible: !!r && undefined,
          onChange: this.handleSlideChange
        }, "slider");
      });
      M(this, "getMenu", () => [this.getIconChevronLeft(), this.getNumberInfo(), this.getIconChevronRight(), this.getIconMinus(), this.getSlider(), this.getIconPlus(), this.getIconRatio(), this.getIconRotate(), this.getIconDownload()]);
      M(this, "getFooterMenu", () => {
        let e = this.getMenu();
        e.splice(3, 0, reactJsxRuntimeCoreReexport.jsx(semiDividerComponent.Divider, {
          layout: "vertical"
        }, "divider-first"));
        e.splice(8, 0, reactJsxRuntimeCoreReexport.jsx(semiDividerComponent.Divider, {
          layout: "vertical"
        }, "divider-second"));
        return e;
      });
      this.foundation = new businessLayoutAdapter.BusinessLayoutAdapter(this.adapter);
    }
  }
  M(F, "propTypes", {
    curPage: m.number,
    totalNum: m.number,
    disabledPrev: m.bool,
    disabledNext: m.bool,
    disableDownload: m.bool,
    className: m.string,
    zoom: m.number,
    ratio: m.string,
    prevTip: m.string,
    nextTip: m.string,
    zoomInTip: m.string,
    zoomOutTip: m.string,
    rotateTip: m.string,
    downloadTip: m.string,
    adaptiveTip: m.string,
    originTip: m.string,
    showTooltip: m.bool,
    onZoomIn: m.func,
    onZoomOut: m.func,
    onPrev: m.func,
    onNext: m.func,
    onAdjustRatio: m.func,
    onRotateLeft: m.func,
    onDownload: m.func,
    onClose: m.func
  });
  M(F, "defaultProps", {
    min: 10,
    max: 500,
    step: 10,
    showTooltip: false,
    disableDownload: false
  });
  let L = e => {
    let {
      src: t,
      onClick: n,
      isActive: r
    } = e;
    let o = reactCoreLibraryReexport.useRef(null);
    reactCoreLibraryReexport.useEffect(() => {
      if (r) {
        var e;
        if ((e = o.current) !== null && e !== undefined) {
          e.scrollIntoView({
            behavior: "smooth"
          });
        }
      }
    }, [r]);
    return reactJsxRuntimeCoreReexport.jsx("img", {
      ref: o,
      src: xssContentSanitizer.sanitizeUrl(t, null, {
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
        filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$J-%lJXRXBxW$$NNWFX%ll%bkJp-lZaNlkzaz$lb*x-T$doaWJsSnZX$k14T$d*$E1Xd*FXR%o1$2xkT2FH%khWbXRNTTA1N$d-az$hb%l5T$hka%1q$nNZbT$TZWt3eWJI%lpWMlJz$EZka2FHSkhlR3hq-m10MlkwaEtiR1J0-kd4a2$%bDNZMjFXTW1*WFZqTk1WMD$vWTIwN%1XTXlWbk5N-mxKNlp$ZEdl$m96$m5vPQ"
      }),
      onClick: () => n == null ? undefined : n(),
      className: r ? "semi-image-preview-active" : ""
    });
  };
  function D(e) {
    let {
      src: t,
      currentIndex: n,
      renderPrevBtn: r,
      renderNextBtn: o,
      onItemClick: l
    } = e;
    let [a, s] = reactCoreLibraryReexport.useState(false);
    let [c, u] = reactCoreLibraryReexport.useState(false);
    reactCoreLibraryReexport.useEffect(() => {
      var e;
      var t;
      let n = (e = p.current) === null || e === undefined ? undefined : e.querySelector("img:first-child");
      let i = (t = p.current) === null || t === undefined ? undefined : t.querySelector("img:last-child");
      let r = new IntersectionObserver((e, t) => {
        e.forEach(e => {
          if (e.target === n) {
            s(e.isIntersecting);
          }
          if (e.target === i) {
            u(e.isIntersecting);
          }
        });
      }, {
        root: p.current,
        threshold: 0.7
      });
      if (n) {
        r.observe(n);
      }
      if (i) {
        r.observe(i);
      }
      return () => {
        if (n) {
          r.unobserve(n);
        }
        if (i) {
          r.unobserve(i);
        }
        r.disconnect();
      };
    }, []);
    let p = reactCoreLibraryReexport.useRef(null);
    let h = "";
    if (a || c) {
      if (a) {
        if (!c) {
          h = "right";
        }
      } else {
        h = "left";
      }
    } else {
      h = "left-right";
    }
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "semi-image-preview-carousel footer",
      children: [r == null ? undefined : r(), o == null ? undefined : o(), reactJsxRuntimeCoreReexport.jsx("div", {
        style: {
          position: "absolute",
          top: -50,
          left: "50%",
          color: "white"
        }
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: v("semi-image-preview-carousel-list", h),
        ref: p,
        children: t == null ? undefined : t.map((e, t) => reactJsxRuntimeCoreReexport.jsx(L, {
          src: xssContentSanitizer.sanitizeUrl(e, null, {
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$J-%lJXRXBxW$$NNWFX%ll%bkJp-lZaNlkzaz$lb*x-T$doaWJsSnZX$k14T$d*$E1Xd*FXR%o1$2xkT2FH%khWbXRNTTA1N$d-az$hb%l5T$hka%1q$nNZbT$TZWt3eWJI%lpWMlJz$EZka2FHSkhlR3hq-m10MlkwaEtiR1J0-kd4a2$%bDNZMjFXTW1*WFZqTk1WMD$vWTIwN%1XTXlWbk5N-mxKNlp$ZEdl$m96$m5vPQ"
          }),
          onClick: () => l == null ? undefined : l(t),
          isActive: n === t
        }, t))
      })]
    });
  }
  var semiSpinComponent = require("semi-spin-component") /*id: 714437*/;
  var imageLayoutAdapter = require("image-layout-adapter") /*id: 64313*/;
  function X(e, t, n) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var i = n.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  let H = businessLayoutConfig.imagePrefixConfig.PREFIX;
  let U = `${H}-preview-image`;
  class V extends reactFoundationComponent.FoundationComponent {
    get adapter() {
      return {
        ...super.adapter,
        getContainer: () => this.containerRef.current,
        getImage: () => this.imageRef.current,
        setLoading: e => {
          this.setState({
            loading: e
          });
        },
        setImageCursor: e => {
          if (this.imageRef.current) {
            this.imageRef.current.style.cursor = e ? "grab" : "default";
          }
        }
      };
    }
    componentDidMount() {
      window.addEventListener("resize", this.onWindowResize);
    }
    componentWillUnmount() {
      window.removeEventListener("resize", this.onWindowResize);
    }
    componentDidUpdate(e, t) {
      let n = "zoom" in this.props && this.props.zoom !== this.state.currZoom;
      let i = this.props.src && this.props.src !== e.src;
      if (i) {
        this.foundation.setLoading(true);
      }
      if (n) {
        this.foundation.calculatePreviewImage(this.props.zoom, null);
      }
      if (!n && !i && e) {
        if ("ratio" in this.props && this.props.ratio !== e.ratio) {
          this.foundation.handleRatioChange();
        }
        if ("rotation" in this.props && this.props.rotation !== e.rotation) {
          this.onWindowResize();
        }
      }
    }
    render() {
      let {
        src: e,
        rotation: t,
        crossOrigin: n
      } = this.props;
      let {
        loading: i,
        width: r,
        height: o,
        top: l,
        left: a
      } = this.state;
      let s = {
        position: "absolute",
        visibility: i ? "hidden" : "visible",
        transform: `rotate(${-t}deg)`,
        top: l,
        left: a,
        width: r,
        height: o
      };
      return reactJsxRuntimeCoreReexport.jsxs("div", {
        className: `${U}`,
        ref: this.containerRef,
        children: [reactJsxRuntimeCoreReexport.jsx("img", {
          ref: this.imageRef,
          src: xssContentSanitizer.sanitizeUrl(e, null, {
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$J-%lJXRXBxW$$NNWFX%ll%bkJp-lZaNlkzaz$lb*x-T$doaWJsSnZX$k14T$d*$E1Xd*FXR%o1$2xkT2FH%khWbXRNTTA1N$d-az$hb%l5T$hka%1q$nNZbT$TZWt3eWJI%lpWMlJz$EZka2FHSkhlR3hq-m10MlkwaEtiR1J0-kd4a2$%bDNZMjFXTW1*WFZqTk1WMngw$1Zka2JFeH$$bnBs%jBaN$dqTldlZz09"
          }),
          alt: "previewImag",
          className: `${U}-img`,
          onMouseMove: this.handleMoveImage,
          onMouseDown: this.onImageMouseDown,
          onContextMenu: this.handleRightClickImage,
          onDragStart: e => e.preventDefault(),
          onLoad: this.handleLoad,
          onError: this.handleError,
          style: s,
          crossOrigin: n
        }, e), i && reactJsxRuntimeCoreReexport.jsx(semiSpinComponent.Spin, {
          size: "large",
          wrapperClassName: `${U}-spin`
        })]
      });
    }
    constructor(e) {
      super(e);
      X(this, "containerRef", undefined);
      X(this, "imageRef", undefined);
      X(this, "foundation", undefined);
      X(this, "onWindowResize", () => {
        this.foundation.handleWindowResize();
      });
      X(this, "handleRightClickImage", e => {
        this.foundation.handleRightClickImage(e);
      });
      X(this, "handleLoad", e => {
        this.foundation.handleLoad(e);
      });
      X(this, "handleError", e => {
        this.foundation.handleError(e);
      });
      X(this, "handleMoveImage", e => {
        this.foundation.handleMoveImage(e);
      });
      X(this, "onImageMouseDown", e => {
        this.foundation.handleImageMouseDown(e);
      });
      this.state = {
        width: 0,
        height: 0,
        loading: true,
        offset: {
          x: 0,
          y: 0
        },
        currZoom: 0,
        top: 0,
        left: 0
      };
      this.containerRef = reactCoreLibraryReexport.createRef();
      this.imageRef = reactCoreLibraryReexport.createRef();
      this.foundation = new imageLayoutAdapter.ImageLayoutAdapter(this.adapter);
    }
  }
  X(V, "propTypes", {
    src: xssContentSanitizer.sanitizeUrl(m.string, null, {
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
      filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$J-%lJXRXBxW$$NNWFX%ll%bkJp-lZaNlkzaz$lb*x-T$doaWJsSnZX$k14T$d*$E1Xd*FXR%o1$2xkT2FH%khWbXRNTTA1N$d-az$hb%l5T$hka%1q$nNZbT$TZWt3eWJI%lpWMlJz$EZka2FHSkhlR3hq-m10MlkwaEtiR1J0-kd4a2$%bDNZMjFXTW1*WFZqTk1WMngw$1Zka2JFeH$$bnBs%jBaN$dqTldlZz09"
    }),
    rotation: m.number,
    style: m.object,
    zoom: m.number,
    ratio: m.string,
    disableDownload: m.bool,
    clickZoom: m.number,
    setRatio: m.func,
    onZoom: m.func,
    onLoad: m.func,
    onError: m.func
  });
  X(V, "defaultProps", {
    zoom: undefined
  });
  var imagePreviewAdapter = require("image-preview-adapter") /*id: 350570*/;
  var fileDownloadUtilities = require("file-download-utilities") /*id: 552822*/;
  var reactSuspenseWrapper = require("react-suspense-wrapper") /*id: 944055*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  function Q(e, t, n) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var i = n.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  let Y = businessLayoutConfig.imagePrefixConfig.PREFIX;
  let ee = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryPromise(() => require.e("samantha-ui-deprecated-gallery-preview-video") /*id: 24736*/.then(require.bind(require, "gallery-video-preview-component") /*id: 426499*/)).then(e => ({
    default: e.default
  }))));
  class et extends reactFoundationComponent.FoundationComponent {
    get adapter() {
      return {
        ...super.adapter,
        getIsInGroup: () => this.isInGroup(),
        disabledBodyScroll: () => {
          let {
            getPopupContainer: e
          } = this.props;
          this.bodyOverflow = document.body.style.overflow || "";
          if (!e && this.bodyOverflow !== "hidden") {
            document.body.style.overflow = "hidden";
            document.body.style.width = `calc(${this.originBodyWidth || "100%"} - ${this.scrollBarWidth}px)`;
          }
        },
        enabledBodyScroll: () => {
          let {
            getPopupContainer: e
          } = this.props;
          if (!e && this.bodyOverflow !== "hidden") {
            document.body.style.overflow = this.bodyOverflow;
            document.body.style.width = this.originBodyWidth;
          }
        },
        notifyChange: (e, t) => {
          let {
            onChange: n,
            onPrev: i,
            onNext: r
          } = this.props;
          if (isFunctionUtil_1.isFunction(n)) {
            if (n != null) {
              n(e);
            }
          }
          if (t === "prev") {
            if (i != null) {
              i(e);
            }
          } else if (r != null) {
            r(e);
          }
        },
        notifyZoom: (e, t) => {
          let {
            onZoomIn: n,
            onZoomOut: i
          } = this.props;
          if (t) {
            if (isFunctionUtil_1.isFunction(n)) {
              if (n != null) {
                n(e);
              }
            }
          } else if (isFunctionUtil_1.isFunction(i)) {
            if (i != null) {
              i(e);
            }
          }
        },
        notifyClose: () => {
          let {
            onClose: e
          } = this.props;
          if (isFunctionUtil_1.isFunction(e)) {
            if (e != null) {
              e();
            }
          }
        },
        notifyVisibleChange: e => {
          let {
            onVisibleChange: t
          } = this.props;
          if (isFunctionUtil_1.isFunction(t)) {
            if (t != null) {
              t(e);
            }
          }
        },
        notifyRatioChange: e => {
          let {
            onRatioChange: t
          } = this.props;
          if (isFunctionUtil_1.isFunction(t)) {
            if (t != null) {
              t(e);
            }
          }
        },
        notifyRotateChange: e => {
          let {
            onRotateLeft: t
          } = this.props;
          if (isFunctionUtil_1.isFunction(t)) {
            if (t != null) {
              t(e);
            }
          }
        },
        notifyDownload: (e, t) => {
          let {
            onDownload: n
          } = this.props;
          if (isFunctionUtil_1.isFunction(n)) {
            if (n != null) {
              n(e, t);
            }
          }
        },
        notifyDownloadError: e => {
          let {
            onDownloadError: t
          } = this.props;
          if (isFunctionUtil_1.isFunction(t)) {
            if (t != null) {
              t(e);
            }
          }
        },
        registerKeyDownListener: () => {
          if (window) {
            window.addEventListener("keydown", this.handleKeyDown);
          }
        },
        unregisterKeyDownListener: () => {
          if (window) {
            window.removeEventListener("keydown", this.handleKeyDown);
          }
        },
        getSetDownloadFunc: () => {
          return this.context?.setDownloadName ?? this.props.setDownloadName;
        },
        isValidTarget: e => {
          let t = this.headerRef && this.headerRef.current;
          let n = this.footerRef && this.footerRef.current;
          let i = this.leftIconRef && this.leftIconRef.current;
          let r = this.rightIconRef && this.rightIconRef.current;
          let o = e.target;
          return (!t || !t.contains(o)) && (!n || !n.contains(o)) && (!i || !i.contains(o)) && (!r || !r.contains(o));
        }
      };
    }
    static getDerivedStateFromProps(e, t) {
      let n = {};
      let i = [];
      if (e.visible) {
        i = Array.isArray(e.src) ? e.src : [e.src];
      }
      if (!deepEqualUtil_1.deepEqual(i, t.imgSrc)) {
        n.imgSrc = i;
      }
      if (e.visible !== t.visible) {
        n.visible = e.visible;
        if (e.visible) {
          n.preloadAfterVisibleChange = true;
          n.viewerVisible = true;
          n.rotation = 0;
          n.ratio = "adaptation";
        }
      }
      if ("currentIndex" in e && e.currentIndex !== t.currentIndex) {
        n.currentIndex = e.currentIndex;
        n.ratio = "adaptation";
      }
      return n;
    }
    componentDidMount() {
      this.scrollBarWidth = globalThis && Object.prototype.toString.call(globalThis) === "[object Window]" ? window.innerWidth - document.documentElement.clientWidth : 0;
      this.originBodyWidth = document.body.style.width;
      if (this.props.visible) {
        this.foundation.beforeShow();
      }
    }
    componentDidUpdate(e, t) {
      if (e.src !== this.props.src) {
        this.foundation.updateTimer();
      }
      if (e.videoInfo !== this.props.videoInfo) {
        this.foundation.updateTimer();
      }
      if (!e.visible && this.props.visible) {
        this.foundation.beforeShow();
      }
      if (e.visible && !this.props.visible) {
        this.foundation.afterHide();
      }
    }
    componentWillUnmount() {
      this.foundation.clearTimer();
    }
    isInGroup() {
      return !!this.context && !!this.context.isGroup;
    }
    render() {
      var e;
      var t;
      let {
        getPopupContainer: n,
        zIndex: i,
        visible: r,
        className: o,
        style: l,
        infinite: a,
        zoomStep: s,
        crossOrigin: c,
        prevTip: u,
        nextTip: p,
        zoomInTip: h,
        zoomOutTip: m,
        rotateTip: f,
        downloadTip: g,
        adaptiveTip: b,
        originTip: y,
        showTooltip: _,
        disableDownload: k,
        renderPreviewMenu: S,
        videoInfo: C
      } = this.props;
      let {
        currentIndex: $,
        imgSrc: E,
        zoom: R,
        ratio: T,
        rotation: N,
        viewerVisible: j
      } = this.state;
      let I = {
        zIndex: i
      };
      if (n) {
        I = {
          zIndex: i,
          position: "static"
        };
      }
      let Z = `${Y}-preview`;
      let O = v(Z, {
        [`${Y}-hide`]: !r,
        [`${Z}-popup`]: n
      }, o);
      let M = j ? "" : `${Z}-hide`;
      let W = E.length;
      let L = W !== 1 && (a || $ !== 0);
      let z = W !== 1 && (a || $ !== W - 1);
      let B = C == null ? undefined : C.find(e => e.index === $);
      return r && reactJsxRuntimeCoreReexport.jsx(reactPortalContainer.PortalContainer, {
        getPopupContainer: n,
        style: I,
        children: reactJsxRuntimeCoreReexport.jsxs("div", {
          className: O,
          style: l,
          onMouseDown: this.handleMouseDown,
          onMouseUp: this.handleMouseUp,
          ref: this.registryImageWrapRef,
          onMouseMove: this.handleMouseMove,
          children: [reactJsxRuntimeCoreReexport.jsx(F, {
            forwardRef: this.footerRef,
            className: M,
            totalNum: W,
            curPage: $ + 1,
            disabledPrev: !L,
            disabledNext: !z,
            zoom: R * 100,
            step: s * 100,
            showTooltip: _,
            ratio: T,
            prevTip: u,
            nextTip: p,
            zIndex: i,
            zoomInTip: h,
            zoomOutTip: m,
            rotateTip: f,
            downloadTip: g,
            disableDownload: k,
            adaptiveTip: b,
            originTip: y,
            onPrev: () => this.handleSwitchImage("prev"),
            onNext: () => this.handleSwitchImage("next"),
            onZoomIn: this.handleZoomImage,
            onZoomOut: this.handleZoomImage,
            onDownload: this.handleDownload,
            onRotate: this.handleRotateImage,
            onAdjustRatio: this.handleAdjustRatio,
            onClose: this.handlePreviewClose,
            renderPreviewMenu: S,
            imageMeta: (e = (t = this.props).getImageMeta) === null || e === undefined ? undefined : e.call(t, $)
          }), B ? reactJsxRuntimeCoreReexport.jsx(ee, {
            src: xssContentSanitizer.sanitizeUrl(B == null ? undefined : B.src, null, {
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
              filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$J-%lJXRXBxW$$NNWFX%ll%bkJp-lZaNlkzaz$lb*x-T$doaWJsSnZX$k14T$d*$E1Xd*FXR%o1$2xkT2FH%khWbXRNTTA1N$d-az$hb%l5T$hka%1q$nNZbT$TZWt3eWJI%lpWMlJz$EZka2FHSkhlR3hq-m10MlkwaEtiR1J0-kd4a2$%bDNZMjFXTW1*WFZqTk1WMngxWW0x$2$$eH$$bnBs%jBaN$dqTldlZz09"
            }),
            loading: B == null ? undefined : B.loading,
            onZoom: this.handleZoomImage,
            disableDownload: k,
            setRatio: this.handleAdjustRatio,
            zoom: R,
            ratio: T,
            rotation: N,
            crossOrigin: c,
            onError: this.onImageError,
            onLoad: this.onImageLoad
          }) : reactJsxRuntimeCoreReexport.jsx(V, {
            src: xssContentSanitizer.sanitizeUrl(E[$], null, {
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
              filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$J-%lJXRXBxW$$NNWFX%ll%bkJp-lZaNlkzaz$lb*x-T$doaWJsSnZX$k14T$d*$E1Xd*FXR%o1$2xkT2FH%khWbXRNTTA1N$d-az$hb%l5T$hka%1q$nNZbT$TZWt3eWJI%lpWMlJz$EZka2FHSkhlR3hq-m10MlkwaEtiR1J0-kd4a2$%bDNZMjFXTW1*WFZqTk1WMngxWW0x$2$$eH$$bnBs%jBaN$dqTldlZz09"
            }),
            onZoom: this.handleZoomImage,
            disableDownload: k,
            setRatio: this.handleAdjustRatio,
            zoom: R,
            ratio: T,
            rotation: N,
            crossOrigin: c,
            onError: this.onImageError,
            onLoad: this.onImageLoad
          }), reactJsxRuntimeCoreReexport.jsx(D, {
            renderPrevBtn: () => L ? reactJsxRuntimeCoreReexport.jsx("div", {
              ref: this.leftIconRef,
              className: v(`${Z}-icon`, `${Z}-prev`),
              onClick: () => this.handleSwitchImage("prev"),
              children: reactJsxRuntimeCoreReexport.jsx(arrowLeftIcon.ArrowLeftIcon, {
                size: "large"
              })
            }) : null,
            renderNextBtn: () => z ? reactJsxRuntimeCoreReexport.jsx("div", {
              ref: this.rightIconRef,
              className: v(`${Z}-icon`, `${Z}-next`),
              onClick: () => this.handleSwitchImage("next"),
              children: reactJsxRuntimeCoreReexport.jsx(arrowRightIcon.ArrowRightIcon, {
                size: "large"
              })
            }) : null,
            src: xssContentSanitizer.sanitizeUrl(E, null, {
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
              filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$J-%lJXRXBxW$$NNWFX%ll%bkJp-lZaNlkzaz$lb*x-T$doaWJsSnZX$k14T$d*$E1Xd*FXR%o1$2xkT2FH%khWbXRNTTA1N$d-az$hb%l5T$hka%1q$nNZbT$TZWt3eWJI%lpWMlJz$EZka2FHSkhlR3hq-m10MlkwaEtiR1J0-kd4a2$%bDNZMjFXTW1*WFZqTk1WMngxWW0x$2$$eH$$bnBs%jBaN$dqTldlZz09"
            }),
            currentIndex: $,
            onItemClick: e => this.handleSwitchImageByIndex(e)
          })]
        })
      });
    }
    constructor(e) {
      var t;
      super(e);
      t = this;
      Q(this, "bodyOverflow", undefined);
      Q(this, "scrollBarWidth", undefined);
      Q(this, "originBodyWidth", undefined);
      Q(this, "context", undefined);
      Q(this, "foundation", undefined);
      Q(this, "imageWrapRef", undefined);
      Q(this, "headerRef", undefined);
      Q(this, "footerRef", undefined);
      Q(this, "leftIconRef", undefined);
      Q(this, "rightIconRef", undefined);
      Q(this, "viewVisibleChange", () => {
        this.foundation.handleViewVisibleChange();
      });
      Q(this, "handleSwitchImage", e => {
        this.foundation.handleSwitchImage(e);
      });
      Q(this, "handleSwitchImageByIndex", e => {
        if ("currentIndex" in this.props) {
          if (this.adapter.getIsInGroup()) {
            this.adapter.getContext("setCurrentIndex")(e);
          }
        } else {
          this.setState({
            currentIndex: e
          });
        }
        this.setState({
          rotation: 0
        });
      });
      Q(this, "handleDownload", () => {
        let {
          currentIndex: e
        } = this.state;
        let {
          videoInfo: t
        } = this.props;
        let n = t == null ? undefined : t.find(t => t.index === e);
        if (n) {
          let t = this.adapter.getSetDownloadFunc();
          let i = n.src;
          let r = t ? t(i) : i == null ? undefined : i.slice(i.lastIndexOf("/") + 1).split("?")[0];
          fileDownloadUtilities.downloadVideoAsMp4(i, r);
          this.adapter.notifyDownload(i, e);
          return;
        }
        this.foundation.handleDownload();
      });
      Q(this, "handlePreviewClose", e => {
        this.foundation.handlePreviewClose(e);
      });
      Q(this, "handleAdjustRatio", e => {
        this.foundation.handleAdjustRatio(e);
      });
      Q(this, "handleRotateImage", e => {
        this.foundation.handleRotateImage(e);
      });
      Q(this, "handleZoomImage", function (e) {
        let n = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
        t.foundation.handleZoomImage(e, n);
      });
      Q(this, "handleMouseUp", e => {
        this.foundation.handleMouseUp(e.nativeEvent);
      });
      Q(this, "handleMouseMove", e => {
        this.foundation.handleMouseMove(e);
      });
      Q(this, "handleKeyDown", e => {
        this.foundation.handleKeyDown(e);
        if ([40, 39, 38, 37].includes(e.keyCode)) {
          e.preventDefault();
        }
        if (e.keyCode === 39) {
          this.handleSwitchImage("next");
        } else if (e.keyCode === 37) {
          this.handleSwitchImage("prev");
        }
      });
      Q(this, "onImageError", () => {
        this.foundation.preloadSingleImage();
      });
      Q(this, "onImageLoad", e => {
        this.foundation.onImageLoad(e);
      });
      Q(this, "handleMouseDown", e => {
        this.foundation.handleMouseDown(e);
      });
      Q(this, "handleWheel", e => {
        this.foundation.handleWheel(e);
      });
      Q(this, "registryImageWrapRef", e => {
        if (this.imageWrapRef) {
          this.imageWrapRef.removeEventListener("wheel", this.handleWheel);
        }
        if (e) {
          e.addEventListener("wheel", this.handleWheel, {
            passive: false
          });
        }
        this.imageWrapRef = e;
      });
      this.state = {
        imgSrc: [],
        imgLoadStatus: new Map(),
        zoom: 0.1,
        currentIndex: 0,
        ratio: "adaptation",
        rotation: 0,
        viewerVisible: true,
        visible: false,
        preloadAfterVisibleChange: true,
        direction: ""
      };
      this.foundation = new imagePreviewAdapter.ImagePreviewAdapter(this.adapter);
      this.bodyOverflow = "";
      this.originBodyWidth = "100%";
      this.scrollBarWidth = 0;
      this.imageWrapRef = null;
      this.headerRef = reactCoreLibraryReexport.createRef();
      this.footerRef = reactCoreLibraryReexport.createRef();
      this.leftIconRef = reactCoreLibraryReexport.createRef();
      this.rightIconRef = reactCoreLibraryReexport.createRef();
    }
  }
  Q(et, "contextType", u);
  Q(et, "propTypes", {
    style: m.object,
    className: m.string,
    visible: m.bool,
    src: xssContentSanitizer.sanitizeUrl(m.oneOfType([m.string, m.array]), null, {
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
      filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$J-%lJXRXBxW$$NNWFX%ll%bkJp-lZaNlkzaz$lb*x-T$doaWJsSnZX$k14T$d*$E1Xd*FXR%o1$2xkT2FH%khWbXRNTTA1N$d-az$hb%l5T$hka%1q$nNZbT$TZWt3eWJI%lpWMlJz$EZka2FHSkhlR3hq-m10MlkwaEtiR1J0-kd4a2$%bDNZMjFXTW1*WFZqTk1WMngxWW0x$2$$eH$$bnBs%jBaN$dqTldlZz09"
    }),
    videoInfo: m.arrayOf(m.object),
    currentIndex: m.number,
    defaultCurrentIndex: m.number,
    defaultVisible: m.bool,
    maskClosable: m.bool,
    closable: m.bool,
    zoomStep: m.number,
    infinite: m.bool,
    showTooltip: m.bool,
    closeOnEsc: m.bool,
    prevTip: m.string,
    nextTip: m.string,
    zoomInTip: m.string,
    zoomOutTip: m.string,
    downloadTip: m.string,
    adaptiveTip: m.string,
    originTip: m.string,
    lazyLoad: m.bool,
    preLoad: m.bool,
    preLoadGap: m.number,
    disableDownload: m.bool,
    viewerVisibleDelay: m.number,
    zIndex: m.number,
    maxZoom: m.number,
    minZoom: m.number,
    renderHeader: m.func,
    renderPreviewMenu: m.func,
    getPopupContainer: m.func,
    onVisibleChange: m.func,
    onChange: m.func,
    onClose: m.func,
    onZoomIn: m.func,
    onZoomOut: m.func,
    onPrev: m.func,
    onNext: m.func,
    onDownload: m.func,
    onRatioChange: m.func,
    onRotateLeft: m.func
  });
  Q(et, "defaultProps", {
    showTooltip: false,
    zoomStep: 0.1,
    infinite: false,
    closeOnEsc: true,
    lazyLoad: false,
    preLoad: true,
    preLoadGap: 2,
    zIndex: businessLayoutConfig.layoutZIndexConfig.DEFAULT_Z_INDEX,
    maskClosable: true,
    viewerVisibleDelay: 10000,
    maxZoom: 5,
    minZoom: 0.1
  });
  var componentAdapter = require("component-adapter") /*id: 515472*/;
  var uniqueIdUtils = require("unique-id-utils") /*id: 912031*/;
  var throttledOmitPathStringify = require("throttled-omit-path-stringify") /*id: 159496*/;
  var isObjectOrFunction_1_1 = require("is-object-or-function_1_1") /*id: 433743*/;
  function el(e, t, n) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var i = n.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  require("async-business-layout_1") /*id: 764462*/;
  let ea = businessLayoutConfig.imagePrefixConfig.PREFIX;
  class es extends reactFoundationComponent.FoundationComponent {
    get adapter() {
      return {
        ...super.adapter
      };
    }
    componentDidMount() {
      if (this.props.lazyLoad) {
        this.observerImages();
      }
    }
    componentDidUpdate(e) {
      if (this.props.lazyLoad) {
        let t = reactCoreLibraryReexport.Children.toArray(e.children).map(e => reactCoreLibraryReexport.isValidElement(e) ? e.key : null);
        let n = reactCoreLibraryReexport.Children.toArray(this.props.children).map(e => reactCoreLibraryReexport.isValidElement(e) ? e.key : null);
        if (!deepEqualUtil_1.deepEqual(t, n)) {
          this.observerImages();
        }
      }
    }
    static getDerivedStateFromProps(e, t) {
      let n = {};
      if ("currentIndex" in e && e.currentIndex !== t.currentIndex) {
        n.currentIndex = e.currentIndex;
      }
      if ("visible" in e && e.visible !== t.visible) {
        n.visible = e.visible;
      }
      return n;
    }
    componentWillUnmount() {
      if (this.previewObserver) {
        this.previewObserver.disconnect();
        this.previewObserver = null;
      }
    }
    render() {
      let {
        src: e,
        className: t,
        style: n,
        lazyLoad: i,
        setDownloadName: r,
        ...o
      } = this.props;
      let l = {
        ...throttledOmitPathStringify.omitPathStringify(o, ["previewCls", "previewStyle"]),
        className: o == null ? undefined : o.previewCls,
        style: o == null ? undefined : o.previewStyle
      };
      let {
        currentIndex: a,
        visible: s
      } = this.state;
      let {
        srcListInChildren: c,
        newChildren: p,
        titles: h
      } = this.loopImageIndex();
      let m = [...(Array.isArray(e) ? e : typeof e == "string" ? [e] : []), ...c];
      return reactJsxRuntimeCoreReexport.jsxs(u.Provider, {
        value: {
          isGroup: true,
          previewSrc: m,
          titles: h,
          currentIndex: a,
          visible: s,
          lazyLoad: i,
          previewObserver: this.previewObserver,
          setCurrentIndex: this.handleCurrentIndexChange,
          handleVisibleChange: this.handleVisibleChange,
          setDownloadName: r
        },
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          id: this.previewGroupId,
          style: n,
          className: v(`${ea}-preview-group`, t),
          children: p
        }), reactJsxRuntimeCoreReexport.jsx(et, {
          ...l,
          ref: this.previewRef,
          src: xssContentSanitizer.sanitizeUrl(m, null, {
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$J-%lJXRXBxW$$NNWFX%ll%bkJp-lZaNlkzaz$lb*x-T$doaWJsSnZX$k14T$d*$E1Xd*FXR%o1$2xkT2FH%khWbXRNTTA1N$d-az$hb%l5T$hka%1q$nNZbT$TZWt3eWJI%lpWMlJz$EZka2FHSkhlR3hq-m10MlkwaEtiR1J0-kd4a2$%bDNZMjFXTW1*WFZqTk1ibEo2Wl$kR2$Wb3pWbm89"
          }),
          currentIndex: a,
          visible: s,
          onVisibleChange: this.handleVisibleChange
        })]
      });
    }
    constructor(e) {
      super(e);
      el(this, "foundation", undefined);
      el(this, "previewGroupId", undefined);
      el(this, "previewRef", undefined);
      el(this, "previewObserver", undefined);
      el(this, "observerImages", () => {
        if (this.previewObserver) {
          this.previewObserver.disconnect();
        } else {
          this.previewObserver = new IntersectionObserver(e => {
            e.forEach(e => {
              let n = e.target.dataset?.src;
              if (e.isIntersecting && n) {
                e.target.src = xssContentSanitizer.sanitizeUrl(n, null, {
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
                  filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$J-%lJXRXBxW$$NNWFX%ll%bkJp-lZaNlkzaz$lb*x-T$doaWJsSnZX$k14T$d*$E1Xd*FXR%o1$2xkT2FH%khWbXRNTTA1N$d-az$hb%l5T$hka%1q$nNZbT$TZWt3eWJI%lpWMlJz$EZka2FHSkhlR3hq-m10MlkwaEtiR1J0-kd4a2$%bDNZMjFXTW1*WFZqTk1ibEo2Wl$kR2$Wb3pWbm89"
                });
                e.target.removeAttribute("data-src");
                this.previewObserver.unobserve(e.target);
              }
            });
          }, {
            root: document.querySelector(`#${this.previewGroupId}`),
            rootMargin: this.props.lazyLoadMargin
          });
        }
        document.querySelectorAll(`.${ea}-img`).forEach(e => this.previewObserver.observe(e));
      });
      el(this, "handleVisibleChange", e => {
        this.foundation.handleVisibleChange(e);
      });
      el(this, "handleCurrentIndexChange", e => {
        this.foundation.handleCurrentIndexChange(e);
      });
      el(this, "loopImageIndex", () => {
        let {
          children: e
        } = this.props;
        let t = 0;
        let n = [];
        let r = [];
        let o = e => reactCoreLibraryReexport.Children.map(e, e => {
          if (e && e.props && e.type && e.type.isSemiImage) {
            let {
              src: o,
              preview: a
            } = e.props;
            if (a) {
              var l;
              let s = isObjectOrFunction_1_1.isObjectOrFunction(a) && (l = a.src) !== null && l !== undefined ? l : o;
              n.push(s);
              r.push(a == null ? undefined : a.previewTitle);
              return reactCoreLibraryReexport.cloneElement(e, {
                imageID: t++
              });
            }
            return e;
          }
          if (e && e.props && e.props.children) {
            return reactCoreLibraryReexport.cloneElement(e, {
              children: o(e.props.children)
            });
          } else {
            return e;
          }
        });
        return {
          srcListInChildren: n,
          newChildren: o(e),
          titles: r
        };
      });
      this.state = {
        currentIndex: e.currentIndex || e.defaultCurrentIndex || 0,
        visible: e.visible || e.currentDefaultVisible || false
      };
      this.foundation = new componentAdapter.ComponentAdapter(this.adapter);
      this.previewGroupId = uniqueIdUtils.generateRandomId({
        prefix: "semi-image-preview-group",
        length: 4
      });
      this.previewRef = reactCoreLibraryReexport.createRef();
    }
  }
  el(es, "propTypes", {
    style: m.object,
    className: m.string,
    visible: m.bool,
    src: xssContentSanitizer.sanitizeUrl(m.oneOfType([m.string, m.array]), null, {
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
      filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$J-%lJXRXBxW$$NNWFX%ll%bkJp-lZaNlkzaz$lb*x-T$doaWJsSnZX$k14T$d*$E1Xd*FXR%o1$2xkT2FH%khWbXRNTTA1N$d-az$hb%l5T$hka%1q$nNZbT$TZWt3eWJI%lpWMlJz$EZka2FHSkhlR3hq-m10MlkwaEtiR1J0-kd4a2$%bDNZMjFXTW1*WFZqTk1ibEo2Wl$kR2$Wb3pWbm89"
    }),
    currentIndex: m.number,
    defaultCurrentIndex: m.number,
    defaultVisible: m.bool,
    maskClosable: m.bool,
    closable: m.bool,
    zoomStep: m.number,
    infinite: m.bool,
    showTooltip: m.bool,
    closeOnEsc: m.bool,
    prevTip: m.string,
    nextTip: m.string,
    zoomInTip: m.string,
    zoomOutTip: m.string,
    downloadTip: m.string,
    adaptiveTip: m.string,
    originTip: m.string,
    lazyLoad: m.bool,
    lazyLoadMargin: m.string,
    preLoad: m.bool,
    preLoadGap: m.number,
    previewCls: m.string,
    previewStyle: m.object,
    disableDownload: m.bool,
    zIndex: m.number,
    renderHeader: m.func,
    renderPreviewMenu: m.func,
    getPopupContainer: m.func,
    onVisibleChange: m.func,
    onChange: m.func,
    onClose: m.func,
    onZoomIn: m.func,
    onZoomOut: m.func,
    onPrev: m.func,
    onNext: m.func,
    onDownload: m.func,
    onRotateLeft: m.func,
    onRatioChange: m.func
  });
  el(es, "defaultProps", {
    src: xssContentSanitizer.sanitizeUrl([], null, {
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
      filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$J-%lJXRXBxW$$NNWFX%ll%bkJp-lZaNlkzaz$lb*x-T$doaWJsSnZX$k14T$d*$E1Xd*FXR%o1$2xkT2FH%khWbXRNTTA1N$d-az$hb%l5T$hka%1q$nNZbT$TZWt3eWJI%lpWMlJz$EZka2FHSkhlR3hq-m10MlkwaEtiR1J0-kd4a2$%bDNZMjFXTW1*WFZqTk1ibEo2Wl$kR2$Wb3pWbm89"
    }),
    lazyLoad: true,
    lazyLoadMargin: "0px 100px 100px 0px",
    closable: true
  });
  var semiButtonWrapperComponent = require("semi-button-wrapper-component") /*id: 654274*/;
  function ed(e) {
    let {
      icon: t,
      onClick: n,
      onMouseUp: i
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(semiButtonWrapperComponent.SemiButtonWrapper, {
      icon: t,
      size: "large",
      type: "tertiary",
      onClick: n,
      onMouseUp: i,
      className: "action-button-yq7qBT"
    });
  }
  let eu = e => {
    let {
      onZoomIn: t,
      onZoomOut: n,
      onDownload: d,
      onClose: u,
      onClickSourceApp: p,
      onSourceAppShow: h,
      onClickDownload: m,
      imageMeta: f,
      curPage: g
    } = e;
    let {
      sourceAppIcon: v,
      sourceAppName: b,
      sourceAppUrl: y
    } = f || {};
    reactCoreLibraryReexport.useEffect(() => {
      if (v || b) {
        if (h != null) {
          h(f);
        }
      }
    }, [g]);
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: "semi-image-previewer-header-source-app",
        onClick: () => p == null ? undefined : p(f),
        children: y && reactJsxRuntimeCoreReexport.jsx(ed, {
          icon: reactJsxRuntimeCoreReexport.jsx(rtlLinkIcon.LinkIcon, {})
        })
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "semi-image-previewer-header-buttons",
        children: [reactJsxRuntimeCoreReexport.jsx(ed, {
          icon: reactJsxRuntimeCoreReexport.jsx(rtlSearchIcon_1.SearchRtlIcon, {}),
          onClick: n
        }), reactJsxRuntimeCoreReexport.jsx(ed, {
          icon: reactJsxRuntimeCoreReexport.jsx(addCircleIcon_1.AddCircleIcon, {}),
          onClick: t
        }), reactJsxRuntimeCoreReexport.jsx(semiDividerComponent.Divider, {
          layout: "vertical"
        }), reactJsxRuntimeCoreReexport.jsx(ed, {
          icon: reactJsxRuntimeCoreReexport.jsx(rtlExpandArrowsIcon.ExpandArrowsIcon, {}),
          onClick: () => {
            if (m != null) {
              m();
            }
            if (d != null) {
              d();
            }
          }
        })]
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: "semi-image-previewer-header-close",
        children: reactJsxRuntimeCoreReexport.jsx(ed, {
          icon: reactJsxRuntimeCoreReexport.jsx(rtlCloseIcon.RtlCloseIcon, {}),
          onMouseUp: u
        })
      })]
    });
  };
  function ep(e) {
    let {
      renderPreviewMenu: t,
      onClickSourceApp: n,
      onSourceAppShow: i,
      onClickDownload: r,
      ...o
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(es, {
      previewCls: "samantha-image-gallery",
      renderPreviewMenu: e => {
        let {
          imageMeta: o
        } = e;
        if (t) {
          return t(e);
        } else {
          return reactJsxRuntimeCoreReexport.jsx(eu, {
            ...e,
            imageMeta: o,
            onClickSourceApp: n,
            onSourceAppShow: i,
            onClickDownload: r
          });
        }
      },
      zoomStep: 0.2,
      ...o
    });
  }
  require.d(exports, {
    ImagePreviewGallery: function () {
      return ep;
    }
  });
}