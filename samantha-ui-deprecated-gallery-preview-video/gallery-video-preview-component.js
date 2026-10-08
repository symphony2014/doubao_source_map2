// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'xssContentSanitizer'
// - Resolved require(508971) to 'xss-content-sanitizer'
// - Renamed variable 'n' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'a' to 'reactFoundationComponent'
// - Resolved require(323591) to 'react-foundation-component'
// - Renamed variable 's' to 'businessLayoutConfig'
// - Resolved require(353607) to 'business-layout-config'
// - Renamed variable 'l' to 'propTypesFactoryWrapper'
// - Resolved require(928010) to 'prop-types-factory-wrapper'
// - Renamed variable 'd' to 'semiSpinComponent'
// - Resolved require(714437) to 'semi-spin-component'
// - Renamed variable 'u' to 'imageLayoutAdapter'
// - Resolved require(64313) to 'image-layout-adapter'
// - Renamed variable 'c' to 'localeDirectionCheck'
// - Resolved require(255854) to 'locale-direction-check'
// - Renamed variable 'p' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Resolved require.e(31730) to 'samantha-ui-deprecated-gallery-xgplayer-css'
// - Resolved require.bind(631708) to 'webpack-module-wrapper'
// - Resolved require.e(2348) to 'video-player-xgplayer'
// - Resolved require.e(12575) to 'xgplayer-media-player'
// - Resolved require.e(64826) to 'media-player-i18n-download'
// - Resolved require.e(65498) to 'samantha-ui-deprecated-gallery-xgplayer'
// - Resolved require.bind(65386) to 'xgplayer-ui-danmu-module'
// - Updated imported property 'U' to 'imagePrefixConfig' (module 353607)
// - Updated imported property 'Z' to 'FoundationComponent' (module 323591)
// - Updated imported property 'Z' to 'Spin' (module 714437)
// - Updated imported property 'l' to 'getBrowserLanguage' (module 255854)
// - Updated imported property 'Z' to 'ImageLayoutAdapter' (module 64313)
// - Updated imported property 'C' to 'sanitizeUrl' (module 508971)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: samantha-ui-deprecated-gallery-preview-video.78da36a6.js
         * chunkId: 24736
         * moduleId: 426499
         */
module.exports = function (module, exports, require) {
  let r;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactFoundationComponent = require("react-foundation-component") /*id: 323591*/;
  var businessLayoutConfig = require("business-layout-config") /*id: 353607*/;
  var propTypesFactoryWrapper = require("prop-types-factory-wrapper") /*id: 928010*/;
  var h = propTypesFactoryWrapper;
  var semiSpinComponent = require("semi-spin-component") /*id: 714437*/;
  var imageLayoutAdapter = require("image-layout-adapter") /*id: 64313*/;
  var localeDirectionCheck = require("locale-direction-check") /*id: 255854*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function m(e, t, i) {
    var r;
    if ((t = typeof (r = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var r = i.call(e, t || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = i;
    }
    return e;
  }
  let f = businessLayoutConfig.imagePrefixConfig.PREFIX;
  let g = `${f}-preview-image`;
  let R = async () => {
    let e = require.e("samantha-ui-deprecated-gallery-xgplayer-css") /*id: 31730*/.then(require.bind(require, "webpack-module-wrapper") /*id: 631708*/);
    let t = Promise.all([require.e("video-player-xgplayer") /*id: 2348*/, require.e("xgplayer-media-player") /*id: 12575*/, require.e("media-player-i18n-download") /*id: 64826*/, require.e("samantha-ui-deprecated-gallery-xgplayer") /*id: 65498*/]).then(require.bind(require, "xgplayer-ui-danmu-module") /*id: 65386*/);
    let r = await Promise.all([e, t]).catch(() => []);
    if (r.length === 2 && r[1].default) {
      return r[1].default;
    } else {
      return null;
    }
  };
  r = null;
  let y = async () => {
    if (r === null) {
      r = await R();
    }
    return r;
  };
  class b extends reactFoundationComponent.FoundationComponent {
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
      if (this.props.src) {
        this.initPlayer();
      }
    }
    componentWillUnmount() {
      window.removeEventListener("resize", this.onWindowResize);
      this.destroyPlayer();
    }
    async componentDidUpdate(e, t) {
      let i = "zoom" in this.props && this.props.zoom !== this.state.currZoom;
      let r = this.props.src && this.props.src !== e.src;
      if (r) {
        this.foundation.setLoading(true);
        this.initPlayer();
      }
      if (i) {
        this.foundation.calculatePreviewImage(this.props.zoom, null);
      }
      if (!i && !r && e) {
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
        crossOrigin: i
      } = this.props;
      let {
        width: r,
        height: o,
        top: n,
        left: a
      } = this.state;
      let s = this.state.loading || this.props.loading;
      let l = {
        position: "absolute",
        visibility: s ? "hidden" : "visible",
        transform: `rotate(${-t}deg)`,
        top: n,
        left: a,
        width: r,
        height: o
      };
      return reactJsxRuntimeCoreReexport.jsxs("div", {
        className: `${g}`,
        ref: this.containerRef,
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          style: l,
          onMouseMove: this.handleMoveImage,
          onMouseDown: this.onImageMouseDown,
          onContextMenu: this.handleRightClickImage,
          onDragStart: e => e.preventDefault(),
          children: reactJsxRuntimeCoreReexport.jsx("div", {
            ref: this.playerContainerRef,
            className: `${g}-video`
          })
        }), s && reactJsxRuntimeCoreReexport.jsx(semiSpinComponent.Spin, {
          size: "large",
          wrapperClassName: `${g}-spin`
        })]
      });
    }
    constructor(e) {
      super(e);
      m(this, "containerRef", undefined);
      m(this, "imageRef", undefined);
      m(this, "playerContainerRef", undefined);
      m(this, "playerRef", undefined);
      m(this, "foundation", undefined);
      m(this, "onWindowResize", () => {
        this.foundation.handleWindowResize();
      });
      m(this, "handleRightClickImage", e => {
        this.foundation.handleRightClickImage(e);
      });
      m(this, "handleLoad", e => {
        let t = e.target;
        let i = {
          target: {
            naturalWidth: t.videoWidth,
            naturalHeight: t.videoHeight
          }
        };
        this.foundation.handleLoad(i);
      });
      m(this, "handleError", e => {
        this.foundation.handleError(e);
      });
      m(this, "handleMoveImage", e => {
        this.foundation.handleMoveImage(e);
      });
      m(this, "onImageMouseDown", e => {
        this.foundation.handleImageMouseDown(e);
        e.stopPropagation();
      });
      m(this, "destroyPlayer", () => {
        if (this.playerRef.current !== null) {
          if (typeof this.playerRef.current.destroy == "function") {
            this.playerRef.current.destroy();
          }
          this.playerRef.current = null;
        }
      });
      m(this, "initPlayer", async () => {
        if (!this.playerContainerRef.current) {
          return;
        }
        this.destroyPlayer();
        let e = await y();
        if (e !== null) {
          this.playerRef.current = new e({
            el: this.playerContainerRef.current,
            url: this.props.src,
            width: "100%",
            height: "100%",
            lang: localeDirectionCheck.getBrowserLanguage(),
            autoplay: true,
            autoplayMuted: true,
            loop: true,
            commonStyle: {
              playedColor: "rgba(255, 255, 255, 0.70)",
              volumeColor: "rgba(255, 255, 255, 0.70)",
              sliderBtnStyle: {
                visibility: "hidden"
              }
            },
            videoAttributes: {
              crossOrigin: this.props.crossOrigin
            },
            ignores: ["playbackRate", "pip", "mini", "cssFullscreen", "fullscreen", "pc", "mobile", "time"],
            controls: {
              autoHide: false,
              mode: "bottom"
            },
            keyboard: {
              disableBodyTrigger: true
            }
          });
          if (this.playerRef.current.media) {
            this.imageRef.current = this.playerRef.current.media;
            this.imageRef.current.onloadedmetadata = this.handleLoad;
            this.imageRef.current.onerror = this.handleError;
          }
        }
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
      this.playerContainerRef = reactCoreLibraryReexport.createRef();
      this.playerRef = reactCoreLibraryReexport.createRef();
      this.foundation = new imageLayoutAdapter.ImageLayoutAdapter(this.adapter);
    }
  }
  m(b, "propTypes", {
    src: xssContentSanitizer.sanitizeUrl(h.string, null, {
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
      filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$J-%lJXRXBxW$$NNWFX%ll%bkJp-lZaNlkzaz$lb*x-T$doaWJsSnZX$k14T$d*$E1Xd*FXR%o1$2xkT2FH%khWbXRNTTA1N$d-az$hb%l5T$hka%1q$nNZbT$TZWt3eWJI%lpWMlJz$EZka2FHSkhlR3hq-m10MlkwaEtiR1J0-kd4a2$%bDNZMjFXTW1*WFZqTk1XRnB3$2tk$2RreH$$bnBs%jBaN$dqTldlZz09"
    }),
    rotation: h.number,
    style: h.object,
    zoom: h.number,
    ratio: h.string,
    disableDownload: h.bool,
    clickZoom: h.number,
    setRatio: h.func,
    onZoom: h.func,
    onLoad: h.func,
    onError: h.func
  });
  m(b, "defaultProps", {
    zoom: undefined
  });
  require.r(exports);
  require.d(exports, {
    default: function () {
      return b;
    }
  });
}