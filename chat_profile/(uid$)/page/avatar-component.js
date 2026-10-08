// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'AvatarComponent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 16165
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var propTypesFactoryWrapper = require("prop-types-factory-wrapper") /*id: 928010*/;
  var a = propTypesFactoryWrapper;
  var avatarComponentConfig = require("avatar-component-config") /*id: 831970*/;
  var componentAdapterBaseClass = require("component-adapter-base-class") /*id: 519643*/;
  var pageNoopHandler = require("page-noop-handler") /*id: 73359*/;
  class u extends componentAdapterBaseClass.BaseAdapterClass {
    constructor(e) {
      super(Object.assign({}, e));
      this.handleFocusVisible = e => {
        let {
          target: t
        } = e;
        try {
          if (t.matches(":focus-visible")) {
            this._adapter.setFocusVisible(true);
          }
        } catch (e) {
          pageNoopHandler.noopHandler(true, "Warning: [Semi Avatar] The current browser does not support the focus-visible");
        }
      };
      this.handleBlur = () => {
        this._adapter.setFocusVisible(false);
      };
      this.changeScale = () => {
        let {
          gap: e
        } = this.getProps();
        let t = this._adapter.getAvatarNode();
        let n = t == null ? undefined : t.firstChild;
        let [i, r] = [(t == null ? undefined : t.offsetWidth) || 0, (n == null ? undefined : n.offsetWidth) || 0];
        if (i !== 0 && r !== 0 && e * 2 < i) {
          this._adapter.setScale(i - e * 2 > r ? 1 : (i - e * 2) / r);
        }
      };
    }
    init() {
      let {
        children: e
      } = this.getProps();
      if (typeof e == "string") {
        this.changeScale();
      }
    }
    destroy() {}
    handleImgLoadError() {
      let {
        onError: e
      } = this.getProps();
      if ((e ? e() : undefined) !== false) {
        this._adapter.notifyImgState(false);
      }
    }
    handleEnter(e) {
      this._adapter.notifyEnter(e);
    }
    handleLeave(e) {
      this._adapter.notifyLeave(e);
    }
  }
  var emptyFunctionExport = require("empty-function-export") /*id: 185067*/;
  var reactFoundationComponent = require("react-foundation-component") /*id: 323591*/;
  var uiFocusNavigation = require("ui-focus-navigation") /*id: 152428*/;
  var commonFrontendUtils = require("common-frontend-utils") /*id: 264233*/;
  var uniqueIdUtils = require("unique-id-utils") /*id: 912031*/;
  var v = e => {
    let {
      gradientStart: t,
      gradientEnd: n
    } = e;
    let r = uniqueIdUtils.generateRandomId();
    return reactCoreLibraryReexport.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "51",
      height: "52",
      viewBox: "0 0 51 52",
      fill: "none"
    }, reactCoreLibraryReexport.createElement("g", {
      filter: "url(#filter0_d_6_2)"
    }, reactCoreLibraryReexport.createElement("path", {
      d: "M40.4918 46.5592C44.6795 43.176 46.261 34.1333 47.5301 25.6141C49.5854 11.8168 39.6662 1 25.8097 1C11.2857 1 3 11.4279 3 25.3518C3 33.7866 6.29361 43.8947 10.4602 46.5592C12.5868 47.9192 12.5868 47.9051 25.8097 47.9192C38.3651 47.9282 38.5352 48.14 40.4918 46.5592Z",
      fill: `url(#${r})`
    })), reactCoreLibraryReexport.createElement("defs", null, reactCoreLibraryReexport.createElement("filter", {
      id: "filter0_d_6_2",
      x: "0.789215",
      y: "0.447304",
      width: "49.2216",
      height: "51.3549",
      filterUnits: "userSpaceOnUse",
      colorInterpolationFilters: "sRGB"
    }, reactCoreLibraryReexport.createElement("feFlood", {
      floodOpacity: "0",
      result: "BackgroundImageFix"
    }), reactCoreLibraryReexport.createElement("feColorMatrix", {
      in: "SourceAlpha",
      type: "matrix",
      values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
      result: "hardAlpha"
    }), reactCoreLibraryReexport.createElement("feOffset", {
      dy: "1.65809"
    }), reactCoreLibraryReexport.createElement("feGaussianBlur", {
      stdDeviation: "1.10539"
    }), reactCoreLibraryReexport.createElement("feColorMatrix", {
      type: "matrix",
      values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
    }), reactCoreLibraryReexport.createElement("feBlend", {
      mode: "normal",
      in2: "BackgroundImageFix",
      result: "effect1_dropShadow_6_2"
    }), reactCoreLibraryReexport.createElement("feBlend", {
      mode: "normal",
      in: "SourceGraphic",
      in2: "effect1_dropShadow_6_2",
      result: "shape"
    })), reactCoreLibraryReexport.createElement("linearGradient", {
      id: r,
      x1: "17.671",
      y1: "31.7392",
      x2: "17.671",
      y2: "47.9333",
      gradientUnits: "userSpaceOnUse"
    }, reactCoreLibraryReexport.createElement("stop", {
      stopColor: t
    }), reactCoreLibraryReexport.createElement("stop", {
      offset: "1",
      stopColor: n
    }))));
  };
  function b(e, t) {
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
  let y = avatarComponentConfig.avatarConstants.SIZE;
  let x = avatarComponentConfig.avatarConstants.SHAPE;
  let w = avatarComponentConfig.avatarConstants.COLOR;
  let A = avatarComponentConfig.avatarPrefixConfig.PREFIX;
  class _ extends reactFoundationComponent.FoundationComponent {
    constructor(e) {
      super(e);
      this.handleFocusVisible = e => {
        this.foundation.handleFocusVisible(e);
      };
      this.handleBlur = e => {
        this.foundation.handleBlur();
      };
      this.getContent = () => {
        let {
          children: e,
          onClick: t,
          imgAttr: n,
          src: r,
          srcSet: l,
          alt: a
        } = this.props;
        let {
          isImgExist: s
        } = this.state;
        let c = e;
        let d = t !== emptyFunctionExport.emptyFunction;
        let u = r && s;
        let h = {
          tabIndex: 0,
          onKeyDown: this.handleKeyDown,
          onFocus: this.handleFocusVisible,
          onBlur: this.handleBlur
        };
        if (u) {
          let e = d ? `clickable Avatar: ${a}` : a;
          let t = Object.assign(Object.assign({
            src: r,
            srcSet: l,
            onError: this.handleError
          }, n), {
            className: o({
              [`${A}-no-focus-visible`]: d
            })
          });
          let s = d ? Object.assign(Object.assign({}, t), h) : t;
          c = reactCoreLibraryReexport.createElement("img", Object.assign({
            alt: e
          }, s));
        } else if (typeof e == "string") {
          let t = a ?? e;
          let n = {
            role: "img",
            "aria-label": d ? `clickable Avatar: ${t}` : t,
            className: o(`${A}-label`, {
              [`${A}-no-focus-visible`]: d
            })
          };
          let r = d ? Object.assign(Object.assign({}, n), h) : n;
          let l = {
            transform: `scale(${this.state.scale})`
          };
          c = reactCoreLibraryReexport.createElement("span", {
            className: `${A}-content`,
            style: l
          }, reactCoreLibraryReexport.createElement("span", Object.assign({}, r, {
            "x-semi-prop": "children"
          }), e));
        }
        return c;
      };
      this.renderBottomSlot = () => {
        if (!this.props.bottomSlot) {
          return null;
        }
        if (this.props.bottomSlot.render) {
          return this.props.bottomSlot.render();
        }
        let n = this.props.bottomSlot.render ?? (() => {
          let t = {};
          if (this.props.bottomSlot.bgColor) {
            t.backgroundColor = this.props.bottomSlot.bgColor;
          }
          if (this.props.bottomSlot.textColor) {
            t.color = this.props.bottomSlot.textColor;
          }
          return reactCoreLibraryReexport.createElement("span", {
            style: t,
            className: o(`${A}-bottom_slot-shape_${this.props.bottomSlot.shape}`, `${A}-bottom_slot-shape_${this.props.bottomSlot.shape}-${this.props.size}`, this.props.bottomSlot.className ?? "")
          }, this.props.bottomSlot.text);
        });
        return reactCoreLibraryReexport.createElement("div", {
          className: o([`${A}-bottom_slot`]),
          style: this.props.bottomSlot.style ?? {}
        }, n());
      };
      this.renderTopSlot = () => {
        if (!this.props.topSlot) {
          return null;
        }
        if (this.props.topSlot.render) {
          return this.props.topSlot.render();
        }
        let l = {};
        if (this.props.topSlot.textColor) {
          l.color = this.props.topSlot.textColor;
        }
        return reactCoreLibraryReexport.createElement("div", {
          style: this.props.topSlot.style ?? {},
          className: o([`${A}-top_slot-wrapper`, this.props.topSlot.className ?? "", {
            [`${A}-animated`]: this.props.contentMotion
          }])
        }, reactCoreLibraryReexport.createElement("div", {
          className: o([`${A}-top_slot-bg`, `${A}-top_slot-bg-${this.props.size}`])
        }, reactCoreLibraryReexport.createElement("div", {
          className: o([`${A}-top_slot-bg-svg`, `${A}-top_slot-bg-svg-${this.props.size}`])
        }, reactCoreLibraryReexport.createElement(v, {
          gradientStart: this.props.topSlot.gradientStart ?? "var(--semi-color-primary)",
          gradientEnd: this.props.topSlot.gradientEnd ?? "var(--semi-color-primary)"
        }))), reactCoreLibraryReexport.createElement("div", {
          className: o([`${A}-top_slot`])
        }, reactCoreLibraryReexport.createElement("div", {
          style: l,
          className: o([`${A}-top_slot-content`, `${A}-top_slot-content-${this.props.size}`])
        }, this.props.topSlot.text)));
      };
      this.state = {
        isImgExist: true,
        hoverContent: "",
        focusVisible: false,
        scale: 1
      };
      this.onEnter = this.onEnter.bind(this);
      this.onLeave = this.onLeave.bind(this);
      this.handleError = this.handleError.bind(this);
      this.handleKeyDown = this.handleKeyDown.bind(this);
      this.getContent = this.getContent.bind(this);
      this.avatarRef = reactCoreLibraryReexport.createRef();
    }
    get adapter() {
      return Object.assign(Object.assign({}, super.adapter), {
        notifyImgState: e => {
          this.setState({
            isImgExist: e
          });
        },
        notifyEnter: e => {
          let {
            hoverMask: t
          } = this.props;
          this.setState({
            hoverContent: t
          }, () => {
            let {
              onMouseEnter: t
            } = this.props;
            if (t) {
              t(e);
            }
          });
        },
        notifyLeave: e => {
          this.setState({
            hoverContent: ""
          }, () => {
            let {
              onMouseLeave: t
            } = this.props;
            if (t) {
              t(e);
            }
          });
        },
        setFocusVisible: e => {
          this.setState({
            focusVisible: e
          });
        },
        setScale: e => {
          this.setState({
            scale: e
          });
        },
        getAvatarNode: () => {
          return this.avatarRef?.current;
        }
      });
    }
    componentDidMount() {
      this.foundation = new u(this.adapter);
      this.foundation.init();
    }
    componentDidUpdate(e) {
      if (this.props.src && this.props.src !== e.src) {
        let e = new Image(0, 0);
        e.src = this.props.src;
        e.onload = () => {
          this.setState({
            isImgExist: true
          });
        };
        e.onerror = () => {
          this.setState({
            isImgExist: false
          });
        };
        e.onabort = () => {
          this.setState({
            isImgExist: false
          });
        };
      }
      if (typeof this.props.children == "string" && this.props.children !== e.children) {
        this.foundation.changeScale();
      }
    }
    componentWillUnmount() {
      this.foundation.destroy();
    }
    onEnter(e) {
      this.foundation.handleEnter(e);
    }
    onLeave(e) {
      this.foundation.handleLeave(e);
    }
    handleError() {
      this.foundation.handleImgLoadError();
    }
    handleKeyDown(e) {
      let {
        onClick: t
      } = this.props;
      switch (e.key) {
        case "Enter":
          t(e);
          uiFocusNavigation.suppressEvent(e);
          break;
        case "Escape":
          e.target.blur();
      }
    }
    render() {
      let n = this.props;
      let {
        shape: r,
        children: l,
        size: a,
        color: s,
        className: c,
        hoverMask: d,
        onClick: u,
        imgAttr: p,
        src: h,
        srcSet: m,
        style: f,
        alt: g,
        gap: v,
        bottomSlot: y,
        topSlot: x,
        border: w,
        contentMotion: _
      } = n;
      let k = b(n, ["shape", "children", "size", "color", "className", "hoverMask", "onClick", "imgAttr", "src", "srcSet", "style", "alt", "gap", "bottomSlot", "topSlot", "border", "contentMotion"]);
      let {
        isImgExist: S,
        hoverContent: C,
        focusVisible: $
      } = this.state;
      let E = h && S;
      let R = o(A, {
        [`${A}-${r}`]: r,
        [`${A}-${a}`]: a,
        [`${A}-${s}`]: s && !E,
        [`${A}-img`]: E,
        [`${A}-focus`]: $,
        [`${A}-animated`]: _
      }, c);
      let T = C ? reactCoreLibraryReexport.createElement("div", {
        className: `${A}-hover`,
        "x-semi-prop": "hoverContent"
      }, C) : null;
      let N = reactCoreLibraryReexport.createElement("span", Object.assign({}, k, {
        style: w || y || x || w ? {} : f,
        className: R,
        onClick: u,
        onMouseEnter: this.onEnter,
        onMouseLeave: this.onLeave,
        role: "listitem",
        ref: this.avatarRef
      }), this.getContent(), T);
      if (w) {
        let n = {};
        if (w == null ? undefined : w.color) {
          n.borderColor = w.color;
        }
        N = reactCoreLibraryReexport.createElement("div", {
          style: Object.assign({
            position: "relative"
          }, f)
        }, N, reactCoreLibraryReexport.createElement("span", {
          style: n,
          className: o([`${A}-additionalBorder`, `${A}-additionalBorder-${a}`, {
            [`${A}-${r}`]: r
          }])
        }), this.props.border?.motion && reactCoreLibraryReexport.createElement("span", {
          style: n,
          className: o([`${A}-additionalBorder`, `${A}-additionalBorder-${a}`, {
            [`${A}-${r}`]: r,
            [`${A}-additionalBorder-animated`]: this.props.border?.motion
          }])
        }));
      }
      if (y || x || w) {
        return reactCoreLibraryReexport.createElement("span", {
          className: o([`${A}-wrapper`]),
          style: f
        }, N, x && ["small", "default", "medium", "large", "extra-large"].includes(a) && r === "circle" && this.renderTopSlot(), y && ["small", "default", "medium", "large", "extra-large"].includes(a) && this.renderBottomSlot());
      } else {
        return N;
      }
    }
  }
  _.__SemiComponentName__ = "Avatar";
  _.defaultProps = commonFrontendUtils.configProxyHandler(_.__SemiComponentName__, {
    size: "medium",
    color: "grey",
    shape: "circle",
    gap: 3,
    onClick: emptyFunctionExport.emptyFunction,
    onMouseEnter: emptyFunctionExport.emptyFunction,
    onMouseLeave: emptyFunctionExport.emptyFunction
  });
  _.propTypes = {
    children: a.node,
    color: a.oneOf(w),
    shape: a.oneOf(x),
    size: a.oneOf(y),
    hoverMask: a.node,
    className: a.string,
    style: a.object,
    gap: a.number,
    imgAttr: a.object,
    src: a.string,
    srcSet: a.string,
    alt: a.string,
    onError: a.func,
    onClick: a.func,
    onMouseEnter: a.func,
    onMouseLeave: a.func,
    bottomSlot: a.shape({
      render: a.func,
      shape: a.oneOf(["circle", "square"]),
      text: a.node,
      bgColor: a.string,
      textColor: a.string,
      className: a.string,
      style: a.object
    }),
    topSlot: a.shape({
      render: a.func,
      gradientStart: a.string,
      gradientEnd: a.string,
      text: a.node,
      textColor: a.string,
      className: a.string,
      style: a.object
    }),
    border: a.oneOfType([a.shape({
      color: a.string,
      motion: a.bool
    }), a.bool]),
    contentMotion: a.bool
  };
  _.elementType = "Avatar";
  require.d(exports, {
    AvatarComponent: function () {
      return _;
    }
  });
}