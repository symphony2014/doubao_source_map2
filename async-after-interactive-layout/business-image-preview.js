// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'ImagePreview'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 80905
         */
module.exports = function (module, exports, require) {
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactFoundationComponent = require("react-foundation-component") /*id: 323591*/;
  var propTypesFactoryWrapper = require("prop-types-factory-wrapper") /*id: 928010*/;
  var l = propTypesFactoryWrapper;
  var businessLayoutConfig = require("business-layout-config") /*id: 353607*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var u = classnamesUtils;
  var reactPortalContainer = require("react-portal-container") /*id: 361066*/;
  var arrowLeftIcon = require("arrow-left-icon") /*id: 406937*/;
  var arrowRightIcon = require("arrow-right-icon") /*id: 798527*/;
  var closeIconComponent = require("close-icon-component") /*id: 111418*/;
  var businessLayoutContext = require("business-layout-context") /*id: 937596*/;
  let g = `${businessLayoutConfig.imagePrefixConfig.PREFIX}-preview-header`;
  let _ = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      onClose: n,
      titleStyle: i,
      className: r,
      renderHeader: a,
      closable: s
    } = e;
    return reactCoreLibraryReexport.createElement(businessLayoutContext.BusinessLayoutCtx.Consumer, null, e => {
      let l;
      let {
        currentIndex: c,
        titles: d
      } = e;
      if (d && typeof c == "number") {
        l = d[c];
      }
      return reactCoreLibraryReexport.createElement("section", {
        ref: t,
        className: u(g, r)
      }, reactCoreLibraryReexport.createElement("section", {
        className: `${g}-title`,
        style: i
      }, a ? a(l) : l), s && reactCoreLibraryReexport.createElement("section", {
        className: `${g}-close`,
        onMouseUp: n
      }, reactCoreLibraryReexport.createElement(closeIconComponent.CloseIcon, null)));
    });
  });
  var debounceUtilWrapper = require("debounce-util-wrapper") /*id: 213804*/;
  var chevronLeftIcon = require("chevron-left-icon") /*id: 220673*/;
  var chevronRightIcon = require("chevron-right-icon") /*id: 386685*/;
  var minusIconComponent = require("minus-icon-component") /*id: 554774*/;
  var plusIconComponent = require("plus-icon-component") /*id: 392476*/;
  var businessLayoutIcon = require("business-layout-icon") /*id: 587488*/;
  var windowAdaptionStrokedIcon = require("window-adaption-stroked-icon") /*id: 388419*/;
  var rotateIconComponent = require("rotate-icon-component") /*id: 305830*/;
  var downloadIcon = require("download-icon") /*id: 808129*/;
  var reactTooltipComponent = require("react-tooltip-component") /*id: 228812*/;
  var semiDividerComponent = require("semi-divider-component") /*id: 384623*/;
  var sliderComponentAdapter = require("slider-component-adapter") /*id: 938680*/;
  var businessLayoutAdapter = require("business-layout-adapter") /*id: 133109*/;
  var aiCreationLocaleWrapper = require("ai-creation-locale-wrapper") /*id: 67026*/;
  businessLayoutConfig.imagePrefixConfig.PREFIX;
  let M = `${businessLayoutConfig.imagePrefixConfig.PREFIX}-preview-footer`;
  class P extends reactFoundationComponent.FoundationComponent {
    get adapter() {
      return Object.assign({}, super.adapter);
    }
    constructor(e) {
      super(e);
      this.changeSliderValue = e => {
        this.foundation.changeSliderValue(e);
      };
      this.handleMinusClick = () => {
        this.changeSliderValue("minus");
      };
      this.handlePlusClick = () => {
        this.changeSliderValue("plus");
      };
      this.handleRotateLeft = () => {
        this.foundation.handleRotate("left");
      };
      this.handleRotateRight = () => {
        this.foundation.handleRotate("right");
      };
      this.handleSlideChange = debounceUtilWrapper.createDebounce(e => {
        this.foundation.handleValueChange(e);
      }, 50);
      this.handleRatioClick = () => {
        this.foundation.handleRatioClick();
      };
      this.customRenderViewMenu = () => {
        let {
          min: e,
          max: t,
          step: n,
          curPage: i,
          totalNum: r,
          ratio: o,
          zoom: a,
          disabledPrev: s,
          disabledNext: l,
          disableDownload: c,
          onNext: d,
          onPrev: u,
          onDownload: h,
          renderPreviewMenu: f
        } = this.props;
        let p = {
          min: e,
          max: t,
          step: n,
          curPage: i,
          totalNum: r,
          ratio: o,
          zoom: a,
          disabledPrev: s,
          disabledNext: l,
          disableDownload: c,
          onNext: d,
          onPrev: u,
          onDownload: h,
          onRotateLeft: this.handleRotateLeft,
          onRotateRight: this.handleRotateRight,
          disabledZoomIn: a === t,
          disabledZoomOut: a === e,
          onRatioClick: this.handleRatioClick,
          onZoomIn: this.handlePlusClick,
          onZoomOut: this.handleMinusClick,
          menuItems: this.getMenu()
        };
        return f(p);
      };
      this.getFinalIconElement = (e, t, n) => {
        let {
          showTooltip: i,
          zIndex: r
        } = this.props;
        if (i) {
          return reactCoreLibraryReexport.createElement(reactTooltipComponent.TooltipComponent, {
            content: t,
            key: `tooltip-${n}`,
            zIndex: r + 1
          }, e);
        } else {
          return e;
        }
      };
      this.getLocalTextByKey = e => reactCoreLibraryReexport.createElement(aiCreationLocaleWrapper.AiCreationLocale, {
        componentName: "Image"
      }, t => t[e]);
      this.getIconChevronLeft = () => {
        let {
          disabledPrev: e,
          onPrev: t,
          prevTip: n
        } = this.props;
        let i = reactCoreLibraryReexport.createElement(chevronLeftIcon.ChevronLeftIcon, {
          key: "chevron-left",
          size: "large",
          className: e ? `${M}-disabled` : "",
          onClick: e ? undefined : t
        });
        let r = n ?? this.getLocalTextByKey("prevTip");
        return this.getFinalIconElement(i, r, "chevron-left");
      };
      this.getIconChevronRight = () => {
        let {
          disabledNext: e,
          onNext: t,
          nextTip: n
        } = this.props;
        let i = reactCoreLibraryReexport.createElement(chevronRightIcon.ChevronRightIcon, {
          key: "chevron-right",
          size: "large",
          className: e ? `${M}-disabled` : "",
          onClick: e ? undefined : t
        });
        let r = n ?? this.getLocalTextByKey("nextTip");
        return this.getFinalIconElement(i, r, "chevron-right");
      };
      this.getIconMinus = () => {
        let {
          zoomOutTip: e,
          zoom: t,
          min: n
        } = this.props;
        let i = t === n;
        let r = reactCoreLibraryReexport.createElement(minusIconComponent.MinusIcon, {
          key: "minus",
          size: "large",
          onClick: i ? undefined : this.handleMinusClick,
          className: i ? `${M}-disabled` : ""
        });
        let a = e ?? this.getLocalTextByKey("zoomOutTip");
        return this.getFinalIconElement(r, a, "minus");
      };
      this.getIconPlus = () => {
        let {
          zoomInTip: e,
          zoom: t,
          max: n
        } = this.props;
        let i = t === n;
        let r = reactCoreLibraryReexport.createElement(plusIconComponent.PlusIcon, {
          key: "plus",
          size: "large",
          onClick: i ? undefined : this.handlePlusClick,
          className: i ? `${M}-disabled` : ""
        });
        let a = e ?? this.getLocalTextByKey("zoomInTip");
        return this.getFinalIconElement(r, a, "plus");
      };
      this.getIconRatio = () => {
        let e;
        let {
          ratio: t,
          originTip: n,
          adaptiveTip: i
        } = this.props;
        let r = {
          key: "ratio",
          size: "large",
          className: u(`${M}-gap`),
          onClick: this.handleRatioClick
        };
        let a = t === "adaptation" ? reactCoreLibraryReexport.createElement(businessLayoutIcon.BusinessLayoutIcon, Object.assign({}, r)) : reactCoreLibraryReexport.createElement(windowAdaptionStrokedIcon.WindowAdaptionIcon, Object.assign({}, r));
        e = t === "adaptation" ? n ?? this.getLocalTextByKey("originTip") : i ?? this.getLocalTextByKey("adaptiveTip");
        return this.getFinalIconElement(a, e, "ratio");
      };
      this.getIconRotate = () => {
        let {
          rotateTip: e
        } = this.props;
        let t = reactCoreLibraryReexport.createElement(rotateIconComponent.RotateIcon, {
          key: "rotate",
          size: "large",
          onClick: this.handleRotateLeft
        });
        let n = e ?? this.getLocalTextByKey("rotateTip");
        return this.getFinalIconElement(t, n, "rotate");
      };
      this.getIconDownload = () => {
        let {
          downloadTip: e,
          onDownload: t,
          disableDownload: n
        } = this.props;
        let i = reactCoreLibraryReexport.createElement(downloadIcon.DownloadIcon, {
          key: "download",
          size: "large",
          onClick: n ? undefined : t,
          className: u(`${M}-gap`, {
            [`${M}-disabled`]: n
          })
        });
        let r = e ?? this.getLocalTextByKey("downloadTip");
        return this.getFinalIconElement(i, r, "download");
      };
      this.getNumberInfo = () => {
        let {
          curPage: e,
          totalNum: t
        } = this.props;
        return reactCoreLibraryReexport.createElement("div", {
          className: `${M}-page`,
          key: "info"
        }, e, "/", t);
      };
      this.getSlider = () => {
        let {
          zoom: e,
          min: t,
          max: n,
          step: i,
          showTooltip: r
        } = this.props;
        return reactCoreLibraryReexport.createElement(sliderComponentAdapter.SliderComponent, {
          key: "slider",
          value: e,
          min: t,
          max: n,
          step: i,
          tipFormatter: e => `${e}%`,
          tooltipVisible: !!r && undefined,
          onChange: this.handleSlideChange
        });
      };
      this.getMenu = () => [this.getIconChevronLeft(), this.getNumberInfo(), this.getIconChevronRight(), this.getIconMinus(), this.getSlider(), this.getIconPlus(), this.getIconRatio(), this.getIconRotate(), this.getIconDownload()];
      this.getFooterMenu = () => {
        let e = this.getMenu();
        e.splice(3, 0, reactCoreLibraryReexport.createElement(semiDividerComponent.Divider, {
          layout: "vertical",
          key: "divider-first"
        }));
        e.splice(8, 0, reactCoreLibraryReexport.createElement(semiDividerComponent.Divider, {
          layout: "vertical",
          key: "divider-second"
        }));
        return e;
      };
      this.foundation = new businessLayoutAdapter.BusinessLayoutAdapter(this.adapter);
    }
    render() {
      let {
        className: e,
        renderPreviewMenu: t,
        forwardRef: n
      } = this.props;
      let i = u(M, `${M}-wrapper`, e, {
        [`${M}-content`]: !t
      });
      return reactCoreLibraryReexport.createElement("section", {
        className: i,
        ref: n
      }, t ? this.customRenderViewMenu() : this.getFooterMenu());
    }
  }
  P.propTypes = {
    curPage: l.number,
    totalNum: l.number,
    disabledPrev: l.bool,
    disabledNext: l.bool,
    disableDownload: l.bool,
    className: l.string,
    zoom: l.number,
    ratio: l.string,
    prevTip: l.string,
    nextTip: l.string,
    zoomInTip: l.string,
    zoomOutTip: l.string,
    rotateTip: l.string,
    downloadTip: l.string,
    adaptiveTip: l.string,
    originTip: l.string,
    showTooltip: l.bool,
    onZoomIn: l.func,
    onZoomOut: l.func,
    onPrev: l.func,
    onNext: l.func,
    onAdjustRatio: l.func,
    onRotateLeft: l.func,
    onDownload: l.func
  };
  P.defaultProps = {
    min: 10,
    max: 500,
    step: 10,
    showTooltip: false,
    disableDownload: false
  };
  var semiSpinComponent = require("semi-spin-component") /*id: 714437*/;
  var imageLayoutAdapter = require("image-layout-adapter") /*id: 64313*/;
  let O = businessLayoutConfig.imagePrefixConfig.PREFIX;
  let Z = `${O}-preview-image`;
  class A extends reactFoundationComponent.FoundationComponent {
    get adapter() {
      return Object.assign(Object.assign({}, super.adapter), {
        getContainer: () => this.containerRef.current,
        getImage: () => this.imageRef.current,
        setLoading: e => {
          this.setState({
            loading: e
          });
        },
        setImageCursor: e => {
          this.imageRef.current.style.cursor = e ? "grab" : "default";
        }
      });
    }
    constructor(e) {
      super(e);
      this.onWindowResize = () => {
        this.foundation.handleWindowResize();
      };
      this.handleRightClickImage = e => {
        this.foundation.handleRightClickImage(e);
      };
      this.handleLoad = e => {
        this.foundation.handleLoad(e);
      };
      this.handleError = e => {
        this.foundation.handleError(e);
      };
      this.handleMoveImage = e => {
        this.foundation.handleMoveImage(e);
      };
      this.onImageMouseDown = e => {
        this.foundation.handleImageMouseDown(e);
      };
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
        height: a,
        top: s,
        left: l
      } = this.state;
      let c = {
        position: "absolute",
        visibility: i ? "hidden" : "visible",
        transform: `rotate(${-t}deg)`,
        top: s,
        left: l,
        width: r,
        height: a
      };
      return reactCoreLibraryReexport.createElement("div", {
        className: `${Z}`,
        ref: this.containerRef
      }, reactCoreLibraryReexport.createElement("img", {
        ref: this.imageRef,
        src: e,
        alt: "previewImag",
        className: `${Z}-img`,
        key: e,
        onMouseMove: this.handleMoveImage,
        onMouseDown: this.onImageMouseDown,
        onContextMenu: this.handleRightClickImage,
        onDragStart: e => e.preventDefault(),
        onLoad: this.handleLoad,
        onError: this.handleError,
        style: c,
        crossOrigin: n
      }), i && reactCoreLibraryReexport.createElement(semiSpinComponent.Spin, {
        size: "large",
        wrapperClassName: `${Z}-spin`
      }));
    }
  }
  A.propTypes = {
    src: l.string,
    rotation: l.number,
    style: l.object,
    zoom: l.number,
    ratio: l.string,
    disableDownload: l.bool,
    clickZoom: l.number,
    setRatio: l.func,
    onZoom: l.func,
    onLoad: l.func,
    onError: l.func
  };
  A.defaultProps = {
    zoom: undefined
  };
  var imagePreviewAdapter = require("image-preview-adapter") /*id: 350570*/;
  var commonFrontendUtils = require("common-frontend-utils") /*id: 264233*/;
  let F = businessLayoutConfig.imagePrefixConfig.PREFIX;
  class z extends reactFoundationComponent.FoundationComponent {
    get adapter() {
      return Object.assign(Object.assign({}, super.adapter), {
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
            onPrev: r,
            onNext: o
          } = this.props;
          if (isFunctionUtil_1.isFunction(n)) {
            n(e);
          }
          if (t === "prev") {
            if (r) {
              r(e);
            }
          } else if (o) {
            o(e);
          }
        },
        notifyZoom: (e, t) => {
          let {
            onZoomIn: n,
            onZoomOut: r
          } = this.props;
          if (t) {
            if (isFunctionUtil_1.isFunction(n)) {
              n(e);
            }
          } else if (isFunctionUtil_1.isFunction(r)) {
            r(e);
          }
        },
        notifyClose: () => {
          let {
            onClose: e
          } = this.props;
          if (isFunctionUtil_1.isFunction(e)) {
            e();
          }
        },
        notifyVisibleChange: e => {
          let {
            onVisibleChange: t
          } = this.props;
          if (isFunctionUtil_1.isFunction(t)) {
            t(e);
          }
        },
        notifyRatioChange: e => {
          let {
            onRatioChange: t
          } = this.props;
          if (isFunctionUtil_1.isFunction(t)) {
            t(e);
          }
        },
        notifyRotateChange: e => {
          let {
            onRotateLeft: t
          } = this.props;
          if (isFunctionUtil_1.isFunction(t)) {
            t(e);
          }
        },
        notifyDownload: (e, t) => {
          let {
            onDownload: n
          } = this.props;
          if (isFunctionUtil_1.isFunction(n)) {
            n(e, t);
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
      });
    }
    constructor(e) {
      var t;
      super(e);
      t = this;
      this.viewVisibleChange = () => {
        this.foundation.handleViewVisibleChange();
      };
      this.handleSwitchImage = e => {
        this.foundation.handleSwitchImage(e);
      };
      this.handleDownload = () => {
        this.foundation.handleDownload();
      };
      this.handlePreviewClose = e => {
        this.foundation.handlePreviewClose(e);
      };
      this.handleAdjustRatio = e => {
        this.foundation.handleAdjustRatio(e);
      };
      this.handleRotateImage = e => {
        this.foundation.handleRotateImage(e);
      };
      this.handleZoomImage = function (e) {
        let n = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
        t.foundation.handleZoomImage(e, n);
      };
      this.handleMouseUp = e => {
        this.foundation.handleMouseUp(e.nativeEvent);
      };
      this.handleMouseMove = e => {
        this.foundation.handleMouseMove(e);
      };
      this.handleKeyDown = e => {
        this.foundation.handleKeyDown(e);
      };
      this.onImageError = () => {
        this.foundation.preloadSingleImage();
      };
      this.onImageLoad = e => {
        this.foundation.onImageLoad(e);
      };
      this.handleMouseDown = e => {
        this.foundation.handleMouseDown(e);
      };
      this.handleWheel = e => {
        this.foundation.handleWheel(e);
      };
      this.registryImageWrapRef = e => {
        if (this.imageWrapRef) {
          this.imageWrapRef.removeEventListener("wheel", this.handleWheel);
        }
        if (e) {
          e.addEventListener("wheel", this.handleWheel, {
            passive: false
          });
        }
        this.imageWrapRef = e;
      };
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
      this.scrollBarWidth = commonFrontendUtils.getScrollbarWidth();
      this.originBodyWidth = document.body.style.width;
      if (this.props.visible) {
        this.foundation.beforeShow();
      }
    }
    componentDidUpdate(e, t) {
      if (e.src !== this.props.src) {
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
      let {
        getPopupContainer: e,
        closable: t,
        zIndex: n,
        visible: i,
        className: r,
        style: a,
        infinite: s,
        zoomStep: l,
        crossOrigin: c,
        prevTip: d,
        nextTip: m,
        zoomInTip: v,
        zoomOutTip: g,
        rotateTip: b,
        downloadTip: y,
        adaptiveTip: w,
        originTip: S,
        showTooltip: x,
        disableDownload: C,
        renderPreviewMenu: k,
        renderHeader: T
      } = this.props;
      let {
        currentIndex: E,
        imgSrc: I,
        zoom: j,
        ratio: R,
        rotation: N,
        viewerVisible: $
      } = this.state;
      let M = {
        zIndex: n
      };
      if (e) {
        M = {
          zIndex: n,
          position: "static"
        };
      }
      let L = `${F}-preview`;
      let D = u(L, {
        [`${F}-hide`]: !i,
        [`${L}-popup`]: e
      }, r);
      let O = $ ? "" : `${L}-hide`;
      let Z = I.length;
      let W = Z !== 1 && (s || E !== 0);
      let B = Z !== 1 && (s || E !== Z - 1);
      return i && reactCoreLibraryReexport.createElement(reactPortalContainer.PortalContainer, {
        getPopupContainer: e,
        style: M
      }, reactCoreLibraryReexport.createElement("div", {
        className: D,
        style: a,
        onMouseDown: this.handleMouseDown,
        onMouseUp: this.handleMouseUp,
        ref: this.registryImageWrapRef,
        onMouseMove: this.handleMouseMove
      }, reactCoreLibraryReexport.createElement(_, {
        ref: this.headerRef,
        className: u(O),
        onClose: this.handlePreviewClose,
        renderHeader: T,
        closable: t
      }), reactCoreLibraryReexport.createElement(A, {
        src: I[E],
        onZoom: this.handleZoomImage,
        disableDownload: C,
        setRatio: this.handleAdjustRatio,
        zoom: j,
        ratio: R,
        rotation: N,
        crossOrigin: c,
        onError: this.onImageError,
        onLoad: this.onImageLoad
      }), W && reactCoreLibraryReexport.createElement("div", {
        ref: this.leftIconRef,
        className: u(`${L}-icon`, `${L}-prev`, O),
        onClick: () => this.handleSwitchImage("prev")
      }, reactCoreLibraryReexport.createElement(arrowLeftIcon.ArrowLeftIcon, {
        size: "large"
      })), B && reactCoreLibraryReexport.createElement("div", {
        ref: this.rightIconRef,
        className: u(`${L}-icon`, `${L}-next`, O),
        onClick: () => this.handleSwitchImage("next")
      }, reactCoreLibraryReexport.createElement(arrowRightIcon.ArrowRightIcon, {
        size: "large"
      })), reactCoreLibraryReexport.createElement(P, {
        forwardRef: this.footerRef,
        className: O,
        totalNum: Z,
        curPage: E + 1,
        disabledPrev: !W,
        disabledNext: !B,
        zoom: j * 100,
        step: l * 100,
        showTooltip: x,
        ratio: R,
        prevTip: d,
        nextTip: m,
        zIndex: n,
        zoomInTip: v,
        zoomOutTip: g,
        rotateTip: b,
        downloadTip: y,
        disableDownload: C,
        adaptiveTip: w,
        originTip: S,
        onPrev: () => this.handleSwitchImage("prev"),
        onNext: () => this.handleSwitchImage("next"),
        onZoomIn: this.handleZoomImage,
        onZoomOut: this.handleZoomImage,
        onDownload: this.handleDownload,
        onRotate: this.handleRotateImage,
        onAdjustRatio: this.handleAdjustRatio,
        renderPreviewMenu: k
      })));
    }
  }
  z.contextType = businessLayoutContext.BusinessLayoutCtx;
  z.propTypes = {
    style: l.object,
    className: l.string,
    visible: l.bool,
    src: l.oneOfType([l.string, l.array]),
    currentIndex: l.number,
    defaultCurrentIndex: l.number,
    defaultVisible: l.bool,
    maskClosable: l.bool,
    closable: l.bool,
    zoomStep: l.number,
    infinite: l.bool,
    showTooltip: l.bool,
    closeOnEsc: l.bool,
    prevTip: l.string,
    nextTip: l.string,
    zoomInTip: l.string,
    zoomOutTip: l.string,
    downloadTip: l.string,
    adaptiveTip: l.string,
    originTip: l.string,
    lazyLoad: l.bool,
    preLoad: l.bool,
    preLoadGap: l.number,
    disableDownload: l.bool,
    viewerVisibleDelay: l.number,
    zIndex: l.number,
    maxZoom: l.number,
    minZoom: l.number,
    renderHeader: l.func,
    renderPreviewMenu: l.func,
    getPopupContainer: l.func,
    onVisibleChange: l.func,
    onChange: l.func,
    onClose: l.func,
    onZoomIn: l.func,
    onZoomOut: l.func,
    onPrev: l.func,
    onNext: l.func,
    onDownload: l.func,
    onRatioChange: l.func,
    onRotateLeft: l.func
  };
  z.defaultProps = {
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
  };
  require.d(exports, {
    ImagePreview: function () {
      return z;
    }
  });
}