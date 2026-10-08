// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'x' to 'ToastFactory'
// - Renamed export 'Z' to 'toastInstance'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 10691.328b6088.js
         * chunkId: 10691
         * moduleId: 520872
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  var propTypesFactoryWrapper = require("prop-types-factory-wrapper") /*id: 928010*/;
  var l = propTypesFactoryWrapper;
  var componentAdapterBaseClass = require("component-adapter-base-class") /*id: 519643*/;
  class s extends componentAdapterBaseClass.BaseAdapterClass {
    constructor(e) {
      super(Object.assign(Object.assign({}, s.defaultAdapter), e));
      this.handleMouseInSideChange = e => {
        this._adapter.handleMouseInSideChange(e);
      };
      this.getInputWrapperRect = () => this._adapter.getInputWrapperRect();
    }
    hasToast(e) {
      return this._adapter.getState("list").map(e => {
        let {
          id: t
        } = e;
        return t;
      }).includes(e);
    }
    addToast(e) {
      let t = this._adapter.getState("list");
      t.push(e);
      this._adapter.updateToast(t, [], []);
    }
    updateToast(e, t) {
      let n = this._adapter.getState("list");
      let i = (n = n.map(n => n.id === e ? Object.assign(Object.assign({}, n), t) : n)).filter(t => t.id === e);
      this._adapter.updateToast(n, [], i);
    }
    removeToast(e) {
      let t = this._adapter.getState("list");
      let n = [];
      t = t.filter(t => t.id !== e || (n.push(t), false));
      this._adapter.updateToast(t, n, []);
    }
    destroyAll() {
      let e = this._adapter.getState("list");
      if (e.length > 0) {
        this._adapter.updateToast([], e, []);
      }
    }
  }
  var semiIdentifier = require("semi-identifier") /*id: 247778*/;
  let c = `${semiIdentifier.semiIdentifier}-toast`;
  let u = {
    PREFIX: c,
    WRAPPER: `${c}-wrapper`,
    LIST: `${c}-list`
  };
  let h = ["ltr", "rtl"];
  var reactFoundationComponent = require("react-foundation-component") /*id: 323591*/;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var g = classnamesUtils;
  var createContextProvider = require("create-context-provider") /*id: 289192*/;
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  class b extends componentAdapterBaseClass.BaseAdapterClass {
    constructor(e) {
      super(Object.assign(Object.assign({}, b.defaultAdapter), e));
      this._timer = null;
      this._id = null;
    }
    init() {
      this.startCloseTimer_();
      this._id = this._adapter.getProp("id");
    }
    destroy() {
      this.clearCloseTimer_();
    }
    startCloseTimer_() {
      let e = this._adapter.getProp("duration");
      if (e && isNumberUtil.isNumber(e)) {
        this._timer = setTimeout(() => {
          this.close();
        }, e * 1000);
      }
    }
    close(e) {
      if (e) {
        e.stopPropagation();
      }
      this._adapter.notifyWrapperToRemove(this._id);
      this._adapter.notifyClose();
    }
    clearCloseTimer_() {
      if (this._timer) {
        clearTimeout(this._timer);
        this._timer = null;
      }
    }
    restartCloseTimer() {
      this.clearCloseTimer_();
      this.startCloseTimer_();
    }
  }
  var semiIconButton = require("semi-icon-button") /*id: 845645*/;
  var alertTriangleIcon = require("alert-triangle-icon") /*id: 704286*/;
  var tickCircleIcon = require("tick-circle-icon") /*id: 572060*/;
  var infoCircleIcon = require("info-circle-icon") /*id: 444518*/;
  var alertCircleIcon = require("alert-circle-icon") /*id: 287588*/;
  var closeIconComponent = require("close-icon-component") /*id: 111418*/;
  var commonFrontendUtils = require("common-frontend-utils") /*id: 264233*/;
  let S = u.PREFIX;
  class T extends reactFoundationComponent.FoundationComponent {
    constructor(e) {
      super(e);
      this.toastEle = reactCoreLibraryReexport.createRef();
      this.clearCloseTimer = () => {
        this.foundation.clearCloseTimer_();
      };
      this.startCloseTimer = () => {
        this.foundation.startCloseTimer_();
      };
      this.restartCloseTimer = () => {
        this.foundation.restartCloseTimer();
      };
      this.state = {};
      this.foundation = new b(this.adapter);
    }
    get adapter() {
      return Object.assign(Object.assign({}, super.adapter), {
        notifyWrapperToRemove: e => {
          this.props.close(e);
        },
        notifyClose: () => {
          this.props.onClose();
        }
      });
    }
    componentDidMount() {
      this.foundation.init();
    }
    componentWillUnmount() {
      this.foundation.destroy();
    }
    close(e) {
      this.foundation.close(e);
    }
    renderIcon() {
      let {
        type: e,
        icon: t
      } = this.props;
      let n = {
        warning: reactCoreLibraryReexport.createElement(alertTriangleIcon.AlertTriangleIcon, null),
        success: reactCoreLibraryReexport.createElement(tickCircleIcon.TickCircleIcon, null),
        info: reactCoreLibraryReexport.createElement(infoCircleIcon.InfoCircleIcon, null),
        error: reactCoreLibraryReexport.createElement(alertCircleIcon.AlertCircleIcon, null)
      }[e];
      let o = "large";
      let a = g(`${S}-icon`, `${S}-icon-${e}`);
      if (t) {
        if (commonFrontendUtils.isIconElement(t)) {
          return reactCoreLibraryReexport.cloneElement(t, {
            size: o,
            className: `${S}-icon`
          });
        } else {
          return t;
        }
      } else if (e && n) {
        return reactCoreLibraryReexport.cloneElement(n, {
          size: o,
          className: a
        });
      } else {
        return null;
      }
    }
    render() {
      let {
        content: e,
        type: t,
        theme: n,
        showClose: o,
        textMaxWidth: a,
        className: l,
        style: r
      } = this.props;
      let s = this.props.direction || this.context.direction;
      let d = g(S, l, {
        [`${S}-${t}`]: true,
        [`${S}-${n}`]: n === "light",
        [`${S}-rtl`]: s === "rtl"
      });
      let c = {
        maxWidth: a
      };
      let u = this.props.positionInList ? this.props.positionInList.length - this.props.positionInList.index - 1 : 0;
      let h = reactCoreLibraryReexport.createElement("div", {
        ref: this.toastEle,
        role: "alert",
        "aria-label": `${t || "default"} type`,
        className: d,
        style: Object.assign(Object.assign({}, r), {
          transform: `translate3d(0,0,${u * -10}px)`
        }),
        onMouseEnter: this.clearCloseTimer,
        onMouseLeave: this.startCloseTimer,
        onAnimationStart: this.props.onAnimationStart,
        onAnimationEnd: this.props.onAnimationEnd
      }, reactCoreLibraryReexport.createElement("div", {
        className: `${S}-content`
      }, this.renderIcon(), reactCoreLibraryReexport.createElement("span", {
        className: `${S}-content-text`,
        style: c,
        "x-semi-prop": "content"
      }, e), o && reactCoreLibraryReexport.createElement("div", {
        className: `${S}-close-button`
      }, reactCoreLibraryReexport.createElement(semiIconButton.SemiIconButton, {
        onClick: e => this.close(e),
        type: "tertiary",
        icon: reactCoreLibraryReexport.createElement(closeIconComponent.CloseIcon, {
          "x-semi-prop": "icon"
        }),
        theme: "borderless",
        size: "small"
      }))));
      if (!this.props.stack) {
        return h;
      }
      {
        let e = this.props.stackExpanded && this.toastEle.current && getComputedStyle(this.toastEle.current).height || 0;
        return reactCoreLibraryReexport.createElement("div", {
          className: `${S}-zero-height-wrapper`,
          style: {
            height: e
          }
        }, h);
      }
    }
  }
  T.contextType = createContextProvider.context;
  T.propTypes = {
    onClose: l.func,
    content: l.node,
    close: l.func,
    duration: l.number,
    theme: l.oneOf(["normal", "light"]),
    type: l.oneOf(["warning", "success", "info", "error", "default"]),
    textMaxWidth: l.oneOfType([l.string, l.number]),
    style: l.object,
    className: l.string,
    showClose: l.bool,
    stack: l.bool,
    stackExpanded: l.bool,
    icon: l.node,
    direction: l.oneOf(h)
  };
  T.__SemiComponentName__ = "Toast";
  T.defaultProps = commonFrontendUtils.configProxyHandler(T.__SemiComponentName__, {
    onClose: emptyExportFunction.emptyFunction,
    content: "",
    close: emptyExportFunction.emptyFunction,
    duration: 3,
    textMaxWidth: 450,
    showClose: true,
    stack: false,
    stackExpanded: false,
    theme: "normal"
  });
  var uniqueIdUtils = require("unique-id-utils") /*id: 912031*/;
  function N(e, t) {
    var n = {};
    for (var i in e) {
      if (Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0) {
        n[i] = e[i];
      }
    }
    if (e != null && typeof Object.getOwnPropertySymbols == "function") {
      var o = 0;
      var i = Object.getOwnPropertySymbols(e);
      for (; o < i.length; o++) {
        if (t.indexOf(i[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[o])) {
          n[i[o]] = e[i[o]];
        }
      }
    }
    return n;
  }
  var $ = reactCoreLibraryReexport.forwardRef((e, t) => {
    var {
      afterClose: n
    } = e;
    var o = N(e, ["afterClose"]);
    let [a, l] = reactCoreLibraryReexport.useState(true);
    reactCoreLibraryReexport.useImperativeHandle(t, () => ({
      close: () => {
        l(false);
      }
    }));
    reactCoreLibraryReexport.useEffect(() => {
      if (!a) {
        n(o.id);
      }
    }, [a]);
    if (a) {
      return reactCoreLibraryReexport.createElement(T, Object.assign({}, o, {
        close: () => {
          l(false);
        }
      }));
    } else {
      return null;
    }
  });
  let R = {
    motion: true,
    zIndex: 1010,
    duration: 3
  };
  function P() {
    let [e, t] = function () {
      let [e, t] = reactCoreLibraryReexport.useState([]);
      return [e, function (e, n) {
        t(t => [{
          element: e,
          config: n
        }, ...t]);
        return e => {
          t(t => t.filter(t => {
            let {
              config: n
            } = t;
            return n.id !== e;
          }));
        };
      }];
    }();
    let n = reactCoreLibraryReexport.useRef(new Map());
    let o = e => {
      let o;
      let a = uniqueIdUtils.createTimestampId("semi_toast_");
      let l = Object.assign(Object.assign({}, e), {
        id: a
      });
      o = t(reactCoreLibraryReexport.createElement($, Object.assign({}, l, {
        key: a,
        afterClose: e => o(e),
        ref: e => {
          n.current.set(a, {
            close: (e == null ? undefined : e.close) ?? emptyExportFunction.emptyFunction
          });
        }
      })), Object.assign({}, l));
      return a;
    };
    let a = e => {
      let {
        close: i
      } = n.current.get(e) ?? {};
      if (i != null) {
        i();
      }
    };
    return [{
      success: e => o(Object.assign(Object.assign(Object.assign({}, R), e), {
        type: "success"
      })),
      info: e => o(Object.assign(Object.assign(Object.assign({}, R), e), {
        type: "info"
      })),
      error: e => o(Object.assign(Object.assign(Object.assign({}, R), e), {
        type: "error"
      })),
      warning: e => o(Object.assign(Object.assign(Object.assign({}, R), e), {
        type: "warning"
      })),
      open: e => o(Object.assign(Object.assign(Object.assign({}, R), e), {
        type: "default"
      })),
      close: e => a(e)
    }, reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, Array.isArray(e) && e.length ? reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, e.map(e => e.element)) : null)];
  }
  var cssAnimationComponent = require("css-animation-component") /*id: 593626*/;
  let Z = () => {
    var e;
    (e = class e extends reactFoundationComponent.FoundationComponent {
      constructor(e) {
        super(e);
        this.stack = false;
        this.innerWrapperRef = reactCoreLibraryReexport.createRef();
        this.handleMouseEnter = e => {
          if (this.stack) {
            this.foundation.handleMouseInSideChange(true);
          }
        };
        this.handleMouseLeave = e => {
          if (this.stack && this.foundation.getInputWrapperRect()?.height) {
            this.foundation.handleMouseInSideChange(false);
          }
        };
        this.state = {
          list: [],
          removedItems: [],
          updatedItems: [],
          mouseInSide: false
        };
        this.foundation = new s(this.adapter);
      }
      get adapter() {
        return Object.assign(Object.assign({}, super.adapter), {
          updateToast: (e, t, n) => {
            this.setState({
              list: e,
              removedItems: t,
              updatedItems: n
            });
          },
          handleMouseInSideChange: e => {
            this.setState({
              mouseInSide: e
            });
          },
          getInputWrapperRect: () => {
            var e;
            if ((e = this.innerWrapperRef.current) === null || e === undefined) {
              return undefined;
            } else {
              return e.getBoundingClientRect();
            }
          }
        });
      }
      static create(t) {
        let a = t.id ?? uniqueIdUtils.createTimestampId("toast");
        if (e.ref) {
          let n = document.querySelector(`#${this.wrapperId}`);
          ["top", "left", "bottom", "right"].map(e => {
            if (e in t) {
              n.style[e] = typeof t[e] == "number" ? `${t[e]}px` : t[e];
            }
          });
          if (!!t.stack !== e.ref.stack) {
            e.ref.stack = !!t.stack;
          }
          if (e.ref.has(a)) {
            e.ref.update(a, Object.assign(Object.assign({}, t), {
              id: a
            }));
          } else {
            e.ref.add(Object.assign(Object.assign({}, t), {
              id: a
            }));
          }
        } else {
          let n = document.createElement("div");
          this.wrapperId ||= uniqueIdUtils.createTimestampId("toast-wrapper").slice(0, 26);
          n.className = u.WRAPPER;
          n.id = this.wrapperId;
          n.style.zIndex = String(typeof t.zIndex == "number" ? t.zIndex : e.defaultOpts.zIndex);
          ["top", "left", "bottom", "right"].map(i => {
            if (i in e.defaultOpts || i in t) {
              let o = t[i] ? t[i] : e.defaultOpts[i];
              n.style[i] = typeof o == "number" ? `${o}px` : o;
            }
          });
          if (e.defaultOpts.getPopupContainer) {
            e.defaultOpts.getPopupContainer().appendChild(n);
          } else {
            document.body.appendChild(n);
          }
          reactDomEntryWrapper.render(reactCoreLibraryReexport.createElement(e, {
            ref: t => e.ref = t
          }), n, () => {
            e.ref.add(Object.assign(Object.assign({}, t), {
              id: a
            }));
            e.ref.stack = !!t.stack;
          });
        }
        return a;
      }
      static close(t) {
        if (e.ref) {
          e.ref.remove(t);
        }
      }
      static destroyAll() {
        if (e.ref) {
          e.ref.destroyAll();
          let t = document.querySelector(`#${this.wrapperId}`);
          reactDomEntryWrapper.unmountComponentAtNode(t);
          if (t) {
            t.parentNode.removeChild(t);
          }
          e.ref = null;
          this.wrapperId = null;
        }
      }
      static getWrapperId() {
        return this.wrapperId;
      }
      static info(t) {
        if (typeof t == "string") {
          t = {
            content: t
          };
        }
        return this.create(Object.assign(Object.assign(Object.assign({}, e.defaultOpts), t), {
          type: "info"
        }));
      }
      static warning(t) {
        if (typeof t == "string") {
          t = {
            content: t
          };
        }
        return this.create(Object.assign(Object.assign(Object.assign({}, e.defaultOpts), t), {
          type: "warning"
        }));
      }
      static error(t) {
        if (typeof t == "string") {
          t = {
            content: t
          };
        }
        return this.create(Object.assign(Object.assign(Object.assign({}, e.defaultOpts), t), {
          type: "error"
        }));
      }
      static success(t) {
        if (typeof t == "string") {
          t = {
            content: t
          };
        }
        return this.create(Object.assign(Object.assign(Object.assign({}, e.defaultOpts), t), {
          type: "success"
        }));
      }
      static config(t) {
        ["top", "left", "bottom", "right"].forEach(n => {
          if (n in t) {
            e.defaultOpts[n] = t[n];
          }
        });
        if (typeof t.zIndex == "number") {
          e.defaultOpts.zIndex = t.zIndex;
        }
        if (typeof t.duration == "number") {
          e.defaultOpts.duration = t.duration;
        }
        if (typeof t.getPopupContainer == "function") {
          e.defaultOpts.getPopupContainer = t.getPopupContainer;
        }
      }
      has(e) {
        return this.foundation.hasToast(e);
      }
      add(e) {
        return this.foundation.addToast(e);
      }
      update(e, t) {
        return this.foundation.updateToast(e, t);
      }
      remove(e) {
        return this.foundation.removeToast(e);
      }
      destroyAll() {
        return this.foundation.destroyAll();
      }
      render() {
        let {
          list: e
        } = this.state;
        let {
          removedItems: t,
          updatedItems: n
        } = this.state;
        e = Array.from(new Set([...e, ...t]));
        let o = n.map(e => {
          let {
            id: t
          } = e;
          return t;
        });
        let a = e => {
          if ((e == null ? undefined : e.foundation)?._id && o.includes(e.foundation._id)) {
            e.foundation.restartCloseTimer();
          }
        };
        return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, reactCoreLibraryReexport.createElement("div", {
          className: g({
            [`${u.PREFIX}-innerWrapper`]: true,
            [`${u.PREFIX}-innerWrapper-hover`]: this.state.mouseInSide
          }),
          ref: this.innerWrapperRef,
          onMouseEnter: this.handleMouseEnter,
          onMouseLeave: this.handleMouseLeave
        }, e.map((n, o) => {
          let l = t.find(e => e.id === n.id) !== undefined;
          return reactCoreLibraryReexport.createElement(cssAnimationComponent.AnimationComponent, {
            key: n.id,
            motion: n.motion,
            animationState: l ? "leave" : "enter",
            startClassName: l ? `${u.PREFIX}-animation-hide` : `${u.PREFIX}-animation-show`
          }, t => {
            let {
              animationClassName: r,
              animationEventsNeedBind: s,
              isAnimating: d
            } = t;
            if (l && !d) {
              return null;
            } else {
              return reactCoreLibraryReexport.createElement(T, Object.assign({}, n, {
                stack: this.stack,
                stackExpanded: this.state.mouseInSide,
                positionInList: {
                  length: e.length,
                  index: o
                },
                className: g({
                  [n.className]: !!n.className,
                  [r]: true
                })
              }, s, {
                style: Object.assign({}, n.style),
                close: e => this.remove(e),
                ref: a
              }));
            }
          });
        })));
      }
    }).defaultOpts = {
      motion: true,
      zIndex: 1010,
      content: ""
    };
    e.propTypes = {
      content: l.node,
      duration: l.number,
      onClose: l.func,
      icon: l.node,
      direction: l.oneOf(h),
      stack: l.bool
    };
    e.defaultProps = {};
    return e;
  };
  class F {
    static create(e) {
      let t = Z();
      t.useToast = P;
      if (e) {
        t.config(e);
      }
      return t;
    }
  }
  var M = F.create();
  require.d(exports, {
    ToastFactory: function () {
      return F;
    },
    toastInstance: function () {
      return M;
    }
  });
}