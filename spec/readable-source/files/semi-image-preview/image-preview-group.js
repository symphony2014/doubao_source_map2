// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'ImagePreviewGroup'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 87086.37139240.js
         * chunkId: 87086
         * moduleId: 428656
         */
module.exports = function (module, exports, require) {
  var throttledOmitPathStringify = require("throttled-omit-path-stringify") /*id: 159496*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var isObjectOrFunction_1_1 = require("is-object-or-function_1_1") /*id: 433743*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var businessLayoutContext = require("business-layout-context") /*id: 937596*/;
  var reactFoundationComponent = require("react-foundation-component") /*id: 323591*/;
  var propTypesFactoryWrapper = require("prop-types-factory-wrapper") /*id: 928010*/;
  var d = propTypesFactoryWrapper;
  var businessImagePreview = require("business-image-preview") /*id: 80905*/;
  var componentAdapter = require("component-adapter") /*id: 515472*/;
  var uniqueIdUtils = require("unique-id-utils") /*id: 912031*/;
  var businessLayoutConfig = require("business-layout-config") /*id: 353607*/;
  require("async-business-layout_1") /*id: 764462*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var m = classnamesUtils;
  function v(e, t) {
    var i = {};
    for (var n in e) {
      if (Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0) {
        i[n] = e[n];
      }
    }
    if (e != null && typeof Object.getOwnPropertySymbols == "function") {
      var o = 0;
      var n = Object.getOwnPropertySymbols(e);
      for (; o < n.length; o++) {
        if (t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o])) {
          i[n[o]] = e[n[o]];
        }
      }
    }
    return i;
  }
  let b = businessLayoutConfig.imagePrefixConfig.PREFIX;
  class w extends reactFoundationComponent.FoundationComponent {
    get adapter() {
      return Object.assign({}, super.adapter);
    }
    constructor(e) {
      super(e);
      this.observerImages = () => {
        if (this.previewObserver) {
          this.previewObserver.disconnect();
        } else {
          this.previewObserver = new IntersectionObserver(e => {
            e.forEach(e => {
              let i = e.target.dataset?.src;
              if (e.isIntersecting && i) {
                e.target.src = i;
                e.target.removeAttribute("data-src");
                this.previewObserver.unobserve(e.target);
              }
            });
          }, {
            root: document.querySelector(`#${this.previewGroupId}`),
            rootMargin: this.props.lazyLoadMargin
          });
        }
        document.querySelectorAll(`.${b}-img`).forEach(e => this.previewObserver.observe(e));
      };
      this.handleVisibleChange = e => {
        this.foundation.handleVisibleChange(e);
      };
      this.handleCurrentIndexChange = e => {
        this.foundation.handleCurrentIndexChange(e);
      };
      this.loopImageIndex = () => {
        let {
          children: e
        } = this.props;
        let t = 0;
        let i = [];
        let n = [];
        let o = e => reactCoreLibraryReexport.Children.map(e, e => {
          var a;
          if (e && e.props && e.type && e.type.isSemiImage) {
            let {
              src: o,
              preview: l,
              alt: h
            } = e.props;
            if (l) {
              let h = isObjectOrFunction_1_1.isObjectOrFunction(l) && (a = l.src) !== null && a !== undefined ? a : o;
              i.push(h);
              n.push(l == null ? undefined : l.previewTitle);
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
          srcListInChildren: i,
          newChildren: o(e),
          titles: n
        };
      };
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
    componentDidMount() {
      if (this.props.lazyLoad) {
        this.observerImages();
      }
    }
    componentDidUpdate(e) {
      if (this.props.lazyLoad) {
        let t = reactCoreLibraryReexport.Children.toArray(e.children).map(e => reactCoreLibraryReexport.isValidElement(e) ? e.key : null);
        let i = reactCoreLibraryReexport.Children.toArray(this.props.children).map(e => reactCoreLibraryReexport.isValidElement(e) ? e.key : null);
        if (!deepEqualUtil_1.deepEqual(t, i)) {
          this.observerImages();
        }
      }
    }
    static getDerivedStateFromProps(e, t) {
      let i = {};
      if ("currentIndex" in e && e.currentIndex !== t.currentIndex) {
        i.currentIndex = e.currentIndex;
      }
      if ("visible" in e && e.visible !== t.visible) {
        i.visible = e.visible;
      }
      return i;
    }
    componentWillUnmount() {
      if (this.previewObserver) {
        this.previewObserver.disconnect();
        this.previewObserver = null;
      }
    }
    render() {
      let e = this.props;
      let {
        src: t,
        className: i,
        style: o,
        lazyLoad: r,
        setDownloadName: l
      } = e;
      let h = v(e, ["src", "className", "style", "lazyLoad", "setDownloadName"]);
      let d = Object.assign(Object.assign({}, throttledOmitPathStringify.omitPathStringify(h, ["previewCls", "previewStyle"])), {
        className: h == null ? undefined : h.previewCls,
        style: h == null ? undefined : h.previewStyle
      });
      let {
        currentIndex: c,
        visible: p
      } = this.state;
      let {
        srcListInChildren: g,
        newChildren: f,
        titles: w
      } = this.loopImageIndex();
      let y = [...(Array.isArray(t) ? t : typeof t == "string" ? [t] : []), ...g];
      return reactCoreLibraryReexport.createElement(businessLayoutContext.BusinessLayoutCtx.Provider, {
        value: {
          isGroup: true,
          previewSrc: y,
          titles: w,
          currentIndex: c,
          visible: p,
          lazyLoad: r,
          previewObserver: this.previewObserver,
          setCurrentIndex: this.handleCurrentIndexChange,
          handleVisibleChange: this.handleVisibleChange,
          setDownloadName: l
        }
      }, reactCoreLibraryReexport.createElement("div", {
        id: this.previewGroupId,
        style: o,
        className: m(`${b}-preview-group`, i)
      }, f), reactCoreLibraryReexport.createElement(businessImagePreview.ImagePreview, Object.assign({}, d, {
        ref: this.previewRef,
        src: y,
        currentIndex: c,
        visible: p,
        onVisibleChange: this.handleVisibleChange
      })));
    }
  }
  w.propTypes = {
    style: d.object,
    className: d.string,
    visible: d.bool,
    src: d.oneOfType([d.string, d.array]),
    currentIndex: d.number,
    defaultCurrentIndex: d.number,
    defaultVisible: d.bool,
    maskClosable: d.bool,
    closable: d.bool,
    zoomStep: d.number,
    infinite: d.bool,
    showTooltip: d.bool,
    closeOnEsc: d.bool,
    prevTip: d.string,
    nextTip: d.string,
    zoomInTip: d.string,
    zoomOutTip: d.string,
    downloadTip: d.string,
    adaptiveTip: d.string,
    originTip: d.string,
    lazyLoad: d.bool,
    lazyLoadMargin: d.string,
    preLoad: d.bool,
    preLoadGap: d.number,
    previewCls: d.string,
    previewStyle: d.object,
    disableDownload: d.bool,
    zIndex: d.number,
    renderHeader: d.func,
    renderPreviewMenu: d.func,
    getPopupContainer: d.func,
    onVisibleChange: d.func,
    onChange: d.func,
    onClose: d.func,
    onZoomIn: d.func,
    onZoomOut: d.func,
    onPrev: d.func,
    onNext: d.func,
    onDownload: d.func,
    onRotateLeft: d.func,
    onRatioChange: d.func
  };
  w.defaultProps = {
    src: [],
    lazyLoad: true,
    lazyLoadMargin: "0px 100px 100px 0px",
    closable: true
  };
  require.d(exports, {
    ImagePreviewGroup: function () {
      return w;
    }
  });
}