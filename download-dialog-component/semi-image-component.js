// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'ZP' to 'SemiImage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 87078
         */
module.exports = function (module, exports, require) {
  var throttledOmitPathStringify = require("throttled-omit-path-stringify") /*id: 159496*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var isObjectOrFunction_1_1 = require("is-object-or-function_1_1") /*id: 433743*/;
  var isBooleanUtil = require("is-boolean-util") /*id: 507922*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactFoundationComponent = require("react-foundation-component") /*id: 323591*/;
  var propTypesFactoryWrapper = require("prop-types-factory-wrapper") /*id: 928010*/;
  var d = propTypesFactoryWrapper;
  var businessLayoutConfig = require("business-layout-config") /*id: 353607*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var f = classnamesUtils;
  let p = require("icon-component-factory") /*id: 129581*/.IconFactory(function (e) {
    return reactCoreLibraryReexport.createElement("svg", Object.assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      focusable: false,
      "aria-hidden": true
    }, e), reactCoreLibraryReexport.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M22.9998 12.0001C22.9998 18.0753 18.0749 23.0001 11.9998 23.0001C5.92463 23.0001 0.999756 18.0753 0.999756 12.0001C0.999756 5.92499 5.92463 1.00012 11.9998 1.00012C18.0749 1.00012 22.9998 5.92499 22.9998 12.0001ZM13.4998 17.5C13.4998 16.6718 12.8282 16.0001 11.9998 16.0001C11.1713 16.0001 10.4998 16.6718 10.4998 17.5C10.4998 18.3285 11.1713 19 11.9998 19C12.8282 19 13.4998 18.3285 13.4998 17.5ZM11.9998 5.00011C10.9136 5.00011 10.0505 5.91257 10.1107 6.99704L10.4166 12.5024C10.4632 13.3427 11.1582 14.0001 11.9998 14.0001C12.8413 14.0001 13.5363 13.3427 13.583 12.5024L13.8888 6.99704C13.9491 5.91257 13.0859 5.00011 11.9998 5.00011Z",
      fill: "currentColor"
    }));
  }, "upload_error");
  var eyeOpenedIcon = require("eye-opened-icon") /*id: 186127*/;
  var businessImagePreview = require("business-image-preview") /*id: 80905*/;
  var businessLayoutContext = require("business-layout-context") /*id: 937596*/;
  var componentAdapterBaseClass = require("component-adapter-base-class") /*id: 519643*/;
  class b extends componentAdapterBaseClass.BaseAdapterClass {
    constructor(e) {
      super(Object.assign({}, e));
      this.handleClick = e => {
        let {
          imageID: t,
          preview: n
        } = this.getProps();
        if (n) {
          if (this._adapter.getIsInGroup()) {
            let {
              setCurrentIndex: e,
              handleVisibleChange: n
            } = this._adapter.getContexts();
            e(t);
            n(true);
          } else {
            this.handlePreviewVisibleChange(true);
          }
        }
      };
      this.handleLoaded = e => {
        let {
          onLoad: t
        } = this.getProps();
        if (t) {
          t(e);
        }
        this.setState({
          loadStatus: "success"
        });
      };
      this.handleError = e => {
        let {
          onError: t
        } = this.getProps();
        if (t) {
          t(e);
        }
        this.setState({
          loadStatus: "error"
        });
      };
      this.handlePreviewVisibleChange = e => {
        let {
          preview: t
        } = this.getProps();
        if (isObjectOrFunction_1_1.isObjectOrFunction(t)) {
          let {
            onVisibleChange: n
          } = t;
          if (n) {
            n(e);
          }
          if (!("visible" in t)) {
            this.setState({
              previewVisible: e
            });
          }
        } else {
          this.setState({
            previewVisible: e
          });
        }
      };
    }
  }
  var aiCreationLocaleWrapper = require("ai-creation-locale-wrapper") /*id: 67026*/;
  var skeletonComponent = require("skeleton-component") /*id: 619442*/;
  require("async-business-layout_1") /*id: 764462*/;
  function S(e, t) {
    var n = {};
    for (var i in e) {
      if (Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0) {
        n[i] = e[i];
      }
    }
    if (e != null && typeof Object.getOwnPropertySymbols == "function") {
      var r = 0;
      var i = Object.getOwnPropertySymbols(e);
      for (; r < i.length; r++) {
        if (t.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r])) {
          n[i[r]] = e[i[r]];
        }
      }
    }
    return n;
  }
  let x = businessLayoutConfig.imagePrefixConfig.PREFIX;
  class C extends reactFoundationComponent.FoundationComponent {
    get adapter() {
      return Object.assign(Object.assign({}, super.adapter), {
        getIsInGroup: () => this.isInGroup()
      });
    }
    constructor(e) {
      super(e);
      this.handleClick = e => {
        this.foundation.handleClick(e);
      };
      this.handleLoaded = e => {
        this.foundation.handleLoaded(e);
      };
      this.handleError = e => {
        this.foundation.handleError(e);
      };
      this.handlePreviewVisibleChange = e => {
        this.foundation.handlePreviewVisibleChange(e);
      };
      this.renderDefaultLoading = () => {
        let {
          width: e,
          height: t
        } = this.props;
        return reactCoreLibraryReexport.createElement(skeletonComponent.Skeleton.Image, {
          style: {
            width: e,
            height: t
          }
        });
      };
      this.renderDefaultError = () => {
        let e = `${x}-status`;
        return reactCoreLibraryReexport.createElement("div", {
          className: e
        }, reactCoreLibraryReexport.createElement(p, {
          size: "extra-large"
        }));
      };
      this.renderLoad = () => {
        let e = `${x}-status`;
        let {
          placeholder: t
        } = this.props;
        if (t) {
          return reactCoreLibraryReexport.createElement("div", {
            className: e
          }, t);
        } else {
          return this.renderDefaultLoading();
        }
      };
      this.renderError = () => {
        let {
          fallback: e
        } = this.props;
        let t = `${x}-status`;
        let n = typeof e == "string" ? reactCoreLibraryReexport.createElement("img", {
          style: {
            width: "100%",
            height: "100%"
          },
          src: e,
          alt: "fallback"
        }) : e;
        if (e) {
          return reactCoreLibraryReexport.createElement("div", {
            className: t
          }, n);
        } else {
          return this.renderDefaultError();
        }
      };
      this.renderExtra = () => {
        let {
          loadStatus: e
        } = this.state;
        return reactCoreLibraryReexport.createElement("div", {
          className: `${x}-overlay`
        }, e === "error" && this.renderError(), e === "loading" && this.renderLoad());
      };
      this.getLocalTextByKey = e => reactCoreLibraryReexport.createElement(aiCreationLocaleWrapper.AiCreationLocale, {
        componentName: "Image"
      }, t => t[e]);
      this.renderMask = () => reactCoreLibraryReexport.createElement("div", {
        className: `${x}-mask`
      }, reactCoreLibraryReexport.createElement("div", {
        className: `${x}-mask-info`
      }, reactCoreLibraryReexport.createElement(eyeOpenedIcon.EyeOpenedIcon, {
        size: "extra-large"
      }), reactCoreLibraryReexport.createElement("span", {
        className: `${x}-mask-info-text`
      }, this.getLocalTextByKey("preview"))));
      this.state = {
        src: "",
        loadStatus: "loading",
        previewVisible: false
      };
      this.foundation = new b(this.adapter);
      this.imgRef = reactCoreLibraryReexport.createRef();
    }
    static getDerivedStateFromProps(e, t) {
      let n = {};
      if (e.src !== t.src) {
        n.src = e.src;
        n.loadStatus = "loading";
      }
      if (isObjectOrFunction_1_1.isObjectOrFunction(e.preview)) {
        let {
          visible: t
        } = e.preview;
        if (isBooleanUtil.isBoolean(t)) {
          n.previewVisible = t;
        }
      }
      return n;
    }
    isInGroup() {
      return !!this.context && !!this.context.isGroup;
    }
    isLazyLoad() {
      return !!this.context && this.context.lazyLoad;
    }
    render() {
      var e;
      let {
        src: t,
        loadStatus: n,
        previewVisible: a
      } = this.state;
      let l = this.props;
      let {
        src: c,
        width: d,
        height: u,
        alt: h,
        style: p,
        className: m,
        crossOrigin: g,
        preview: _,
        fallback: b,
        placeholder: y,
        imageID: w,
        setDownloadName: C
      } = l;
      let k = S(l, ["src", "width", "height", "alt", "style", "className", "crossOrigin", "preview", "fallback", "placeholder", "imageID", "setDownloadName"]);
      let T = Object.assign({
        width: d,
        height: u
      }, p);
      let E = f(x, m);
      let I = n === "success" && _ && !this.isInGroup();
      let j = _ && n === "success";
      let R = isObjectOrFunction_1_1.isObjectOrFunction(_) && (e = _.src) !== null && e !== undefined ? e : t;
      let N = isObjectOrFunction_1_1.isObjectOrFunction(_) && I ? Object.assign(Object.assign({}, throttledOmitPathStringify.omitPathStringify(_, ["className", "style", "previewCls", "previewStyle"])), {
        className: _ == null ? undefined : _.previewCls,
        style: _ == null ? undefined : _.previewStyle
      }) : {};
      return reactCoreLibraryReexport.createElement("div", {
        style: T,
        className: E,
        onClick: this.handleClick
      }, reactCoreLibraryReexport.createElement("img", Object.assign({
        ref: this.imgRef
      }, k, {
        src: this.isInGroup() && this.isLazyLoad() ? undefined : t,
        "data-src": t,
        alt: h,
        className: f(`${x}-img`, {
          [`${x}-img-preview`]: j,
          [`${x}-img-error`]: n === "error"
        }),
        width: d,
        height: u,
        crossOrigin: g,
        onError: this.handleError,
        onLoad: this.handleLoaded
      })), n !== "success" && this.renderExtra(), I && reactCoreLibraryReexport.createElement(businessImagePreview.ImagePreview, Object.assign({}, N, {
        src: R,
        visible: a,
        onVisibleChange: this.handlePreviewVisibleChange,
        crossOrigin: isUndefinedCheck.isUndefined(g) ? N == null ? undefined : N.crossOrigin : g,
        setDownloadName: C
      })));
    }
  }
  C.isSemiImage = true;
  C.contextType = businessLayoutContext.BusinessLayoutCtx;
  C.propTypes = {
    style: d.object,
    className: d.string,
    src: d.string,
    width: d.oneOfType([d.string, d.number]),
    height: d.oneOfType([d.string, d.number]),
    alt: d.string,
    placeholder: d.node,
    fallback: d.oneOfType([d.string, d.node]),
    preview: d.oneOfType([d.bool, d.object]),
    onLoad: d.func,
    onError: d.func,
    onClick: d.func,
    crossOrigin: d.string,
    imageID: d.number
  };
  C.defaultProps = {
    preview: true
  };
  var k = C;
  require.d(exports, {
    SemiImage: function () {
      return k;
    }
  });
}