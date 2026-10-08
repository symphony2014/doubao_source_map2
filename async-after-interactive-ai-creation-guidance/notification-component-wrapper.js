// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'Notification'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 830647
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var propTypesFactoryWrapper = require("prop-types-factory-wrapper") /*id: 928010*/;
  var l = propTypesFactoryWrapper;
  var createContextProvider = require("create-context-provider") /*id: 289192*/;
  var componentAdapterBaseClass = require("component-adapter-base-class") /*id: 519643*/;
  class u extends componentAdapterBaseClass.BaseAdapterClass {
    addNotice(e) {
      let t = this._adapter.getNotices();
      this._adapter.updateNotices([e, ...t]);
    }
    has(e) {
      return this._adapter.getNotices().some(t => t.id === e);
    }
    update(e, t) {
      let n = this._adapter.getNotices();
      let i = (n = n.map(n => n.id === e ? Object.assign(Object.assign({}, n), t) : n)).filter(t => t.id === e);
      this._adapter.updateNotices(n, [], i);
    }
    removeNotice(e) {
      let t = this._adapter.getNotices();
      let n = [];
      t = t.filter(t => t.id !== e || (n.push(t), false));
      this._adapter.updateNotices(t, n);
    }
    destroyAll() {
      let e = this._adapter.getNotices();
      if (e.length > 0) {
        this._adapter.updateNotices([], e);
      }
    }
  }
  var semiIdentifier = require("semi-identifier") /*id: 247778*/;
  let f = {
    WRAPPER: `${semiIdentifier.semiIdentifier}-notification-wrapper`,
    LIST: `${semiIdentifier.semiIdentifier}-notification-list`,
    NOTICE: `${semiIdentifier.semiIdentifier}-notification-notice`
  };
  let p = {
    types: ["warning", "success", "info", "error", "default"],
    themes: ["normal", "light"],
    directions: ["ltr", "rtl"]
  };
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  class g extends componentAdapterBaseClass.BaseAdapterClass {
    constructor(e) {
      super(Object.assign(Object.assign({}, g.defaultAdapter), e));
      this._timer = null;
      this._id = null;
    }
    init() {
      this._startCloseTimer();
      this._id = this.getProp("id");
    }
    destroy() {
      this._clearCloseTimer();
    }
    _startCloseTimer() {
      let e = this.getProp("duration");
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
    _clearCloseTimer() {
      if (this._timer) {
        clearTimeout(this._timer);
        this._timer = null;
      }
    }
    restartCloseTimer() {
      this._clearCloseTimer();
      this._startCloseTimer();
    }
  }
  var semiIconButton = require("semi-icon-button") /*id: 845645*/;
  var reactFoundationComponent = require("react-foundation-component") /*id: 323591*/;
  var commonFrontendUtils = require("common-frontend-utils") /*id: 264233*/;
  var alertTriangleIcon = require("alert-triangle-icon") /*id: 704286*/;
  var tickCircleIcon = require("tick-circle-icon") /*id: 572060*/;
  var infoCircleIcon = require("info-circle-icon") /*id: 444518*/;
  var alertCircleIcon = require("alert-circle-icon") /*id: 287588*/;
  var closeIconComponent = require("close-icon-component") /*id: 111418*/;
  var uniqueIdUtils = require("unique-id-utils") /*id: 912031*/;
  function E(e, t) {
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
  let I = f.NOTICE;
  let {
    duration: j
  } = {
    duration: 3
  };
  let {
    types: R,
    themes: N,
    directions: $
  } = p;
  class M extends reactFoundationComponent.FoundationComponent {
    get adapter() {
      return Object.assign(Object.assign({}, super.adapter), {
        notifyWrapperToRemove: e => {
          this.props.close(e);
        },
        notifyClose: () => {
          this.props.onClose();
          if (this.props.onHookClose) {
            this.props.onHookClose();
          }
        }
      });
    }
    constructor(e) {
      super(e);
      this.clearCloseTimer = () => {
        this.foundation._clearCloseTimer();
      };
      this.startCloseTimer = () => {
        this.foundation._startCloseTimer();
      };
      this.close = e => {
        this.props.onCloseClick(this.props.id);
        this.foundation.close(e);
      };
      this.notifyClick = e => {
        this.props.onClick(e);
      };
      this.state = {
        visible: true
      };
      this.foundation = new g(this.adapter);
    }
    componentWillUnmount() {
      this.foundation.destroy();
    }
    renderTypeIcon() {
      let {
        type: e,
        icon: t
      } = this.props;
      let n = {
        warning: reactCoreLibraryReexport.createElement(alertTriangleIcon.AlertTriangleIcon, {
          size: "large"
        }),
        success: reactCoreLibraryReexport.createElement(tickCircleIcon.TickCircleIcon, {
          size: "large"
        }),
        info: reactCoreLibraryReexport.createElement(infoCircleIcon.InfoCircleIcon, {
          size: "large"
        }),
        error: reactCoreLibraryReexport.createElement(alertCircleIcon.AlertCircleIcon, {
          size: "large"
        })
      }[e];
      let r = a({
        [`${I}-icon`]: true,
        [`${I}-${e}`]: true
      });
      if (t) {
        n = t;
      }
      if (n) {
        return reactCoreLibraryReexport.createElement("div", {
          className: r,
          "x-semi-prop": "icon"
        }, commonFrontendUtils.isIconElement(n) ? reactCoreLibraryReexport.cloneElement(n, {
          size: n.props.size || "large"
        }) : n);
      } else {
        return null;
      }
    }
    render() {
      let e = this.props.direction || this.context.direction;
      let t = this.props;
      let {
        content: n,
        title: r,
        theme: o,
        position: s = e === "rtl" ? "topLeft" : "topRight",
        type: l,
        id: c,
        onCloseClick: d,
        className: u,
        showClose: h,
        style: f
      } = t;
      E(t, ["content", "title", "theme", "position", "type", "id", "onCloseClick", "className", "showClose", "style"]);
      let {
        visible: p
      } = this.state;
      let m = a(I, u, {
        [`${I}-close`]: !p,
        [`${I}-icon-show`]: R.includes(l),
        [`${I}-${l}`]: true,
        [`${I}-${o}`]: o === "light",
        [`${I}-rtl`]: e === "rtl"
      });
      let v = uniqueIdUtils.generateRandomId({});
      return reactCoreLibraryReexport.createElement("div", {
        className: m,
        style: f,
        onMouseEnter: this.clearCloseTimer,
        onMouseLeave: this.startCloseTimer,
        onClick: this.notifyClick,
        "aria-labelledby": v,
        role: "alert",
        onAnimationEnd: this.props.onAnimationEnd,
        onAnimationStart: this.props.onAnimationStart
      }, reactCoreLibraryReexport.createElement("div", null, this.renderTypeIcon()), reactCoreLibraryReexport.createElement("div", {
        className: `${I}-inner`
      }, reactCoreLibraryReexport.createElement("div", {
        className: `${I}-content-wrapper`
      }, r ? reactCoreLibraryReexport.createElement("div", {
        id: v,
        className: `${I}-title`,
        "x-semi-prop": "title"
      }, r) : "", n ? reactCoreLibraryReexport.createElement("div", {
        className: `${I}-content`,
        "x-semi-prop": "content"
      }, n) : ""), h && reactCoreLibraryReexport.createElement(semiIconButton.SemiIconButton, {
        className: `${I}-icon-close`,
        type: "tertiary",
        icon: reactCoreLibraryReexport.createElement(closeIconComponent.CloseIcon, null),
        theme: "borderless",
        size: "small",
        onClick: this.close
      })));
    }
  }
  M.contextType = createContextProvider.context;
  M.propTypes = {
    duration: l.number,
    id: l.string,
    title: l.node,
    content: l.node,
    type: l.oneOf(R),
    theme: l.oneOf(N),
    icon: l.node,
    onClick: l.func,
    onClose: l.func,
    onCloseClick: l.func,
    showClose: l.bool,
    close: l.func,
    direction: l.oneOf($)
  };
  M.__SemiComponentName__ = "Notification";
  M.defaultProps = commonFrontendUtils.configProxyHandler(M.__SemiComponentName__, {
    duration: j,
    id: "",
    close: emptyExportFunction.emptyFunction,
    onClose: emptyExportFunction.emptyFunction,
    onClick: emptyExportFunction.emptyFunction,
    onCloseClick: emptyExportFunction.emptyFunction,
    content: "",
    title: "",
    showClose: true,
    theme: "normal"
  });
  function P(e, t) {
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
  var L = reactCoreLibraryReexport.forwardRef((e, t) => {
    var {
      afterClose: n
    } = e;
    var r = P(e, ["afterClose"]);
    let [o, a] = reactCoreLibraryReexport.useState(true);
    reactCoreLibraryReexport.useImperativeHandle(t, () => ({
      close: () => {
        a(false);
      }
    }));
    reactCoreLibraryReexport.useEffect(() => {
      if (!o) {
        n(String(r.id));
      }
    }, [o]);
    if (o) {
      return reactCoreLibraryReexport.createElement(M, Object.assign({}, r, {
        onHookClose: () => {
          a(false);
        }
      }));
    } else {
      return null;
    }
  });
  let D = {
    duration: 3,
    position: "topRight",
    motion: true,
    content: "",
    title: "",
    zIndex: 1010
  };
  var cssAnimationComponent = require("css-animation-component") /*id: 593626*/;
  let Z = null;
  let A = {
    duration: 3,
    position: "topRight",
    motion: true,
    content: "",
    title: "",
    zIndex: 1010
  };
  class W extends reactFoundationComponent.FoundationComponent {
    constructor(e) {
      var t;
      super(e);
      t = this;
      this.add = e => this.foundation.addNotice(e);
      this.has = e => this.foundation.has(e);
      this.remove = e => {
        this.foundation.removeNotice(String(e));
      };
      this.update = (e, t) => this.foundation.update(e, t);
      this.destroyAll = () => this.foundation.destroyAll();
      this.renderNoticeInPosition = function (e, n, r = [], o = []) {
        let s = a(f.LIST);
        if (e.length) {
          let l = t.setPosInStyle(e[0]);
          return reactCoreLibraryReexport.createElement("div", {
            placement: n,
            key: n,
            className: s,
            style: l
          }, e.map((e, s) => {
            let l = r.find(t => t.id === e.id) !== undefined;
            return reactCoreLibraryReexport.createElement(cssAnimationComponent.AnimationComponent, {
              key: e.id,
              animationState: l ? "leave" : "enter",
              startClassName: `${f.NOTICE}-animation-${l ? "hide" : "show"}_${n}`
            }, n => {
              let {
                animationClassName: r,
                animationEventsNeedBind: s,
                isAnimating: c
              } = n;
              if (l && !c) {
                return null;
              } else {
                return reactCoreLibraryReexport.createElement(M, Object.assign({}, e, {
                  ref: e => {
                    if (e && o.some(t => t.id === e.props.id)) {
                      e.foundation.restartCloseTimer();
                    }
                  },
                  className: a({
                    [e.className]: !!e.className,
                    [r]: true
                  })
                }, s, {
                  style: Object.assign({}, e.style),
                  close: t.remove
                }));
              }
            });
          }));
        }
        return null;
      };
      this.state = {
        notices: [],
        removedItems: [],
        updatedItems: []
      };
      this.noticeStorage = [];
      this.removeItemStorage = [];
      this.foundation = new u(this.adapter);
    }
    get adapter() {
      var e = this;
      return Object.assign(Object.assign({}, super.adapter), {
        updateNotices: function (t, n = [], i = []) {
          e.noticeStorage = [...t];
          e.removeItemStorage = [...n];
          e.setState({
            notices: t,
            removedItems: n,
            updatedItems: i
          });
        },
        getNotices: () => this.noticeStorage
      });
    }
    static addNotice(e) {
      let n = (e = Object.assign(Object.assign({}, A), e)).id ?? uniqueIdUtils.createTimestampId("notification");
      if (Z) {
        if (Z.has(`${n}`)) {
          Z.update(n, e);
        } else {
          Z.add(Object.assign(Object.assign({}, e), {
            id: n
          }));
        }
      } else {
        let {
          getPopupContainer: t
        } = e;
        let o = document.createElement("div");
        this.wrapperId ||= uniqueIdUtils.createTimestampId("notification-wrapper").slice(0, 32);
        o.className = f.WRAPPER;
        o.id = this.wrapperId;
        o.style.zIndex = String(typeof e.zIndex == "number" ? e.zIndex : A.zIndex);
        if (t) {
          t().appendChild(o);
        } else {
          document.body.appendChild(o);
        }
        reactDomEntryWrapper.render(reactCoreLibraryReexport.createElement(W, {
          ref: e => Z = e
        }), o, () => {
          Z.add(Object.assign(Object.assign({}, e), {
            id: n
          }));
        });
      }
      return n;
    }
    static removeNotice(e) {
      if (Z) {
        Z.remove(e);
      }
      return e;
    }
    static info(e) {
      return this.addNotice(Object.assign(Object.assign({}, e), {
        type: "info"
      }));
    }
    static success(e) {
      return this.addNotice(Object.assign(Object.assign({}, e), {
        type: "success"
      }));
    }
    static error(e) {
      return this.addNotice(Object.assign(Object.assign({}, e), {
        type: "error"
      }));
    }
    static warning(e) {
      return this.addNotice(Object.assign(Object.assign({}, e), {
        type: "warning"
      }));
    }
    static open(e) {
      return this.addNotice(Object.assign(Object.assign({}, e), {
        type: "default"
      }));
    }
    static close(e) {
      return this.removeNotice(e);
    }
    static destroyAll() {
      if (Z) {
        Z.destroyAll();
        let e = document.querySelector(`#${this.wrapperId}`);
        reactDomEntryWrapper.unmountComponentAtNode(e);
        if (e) {
          e.parentNode.removeChild(e);
        }
        Z = null;
        this.wrapperId = null;
      }
    }
    static config(e) {
      ["top", "left", "bottom", "right"].map(t => {
        if (t in e) {
          A[t] = e[t];
        }
      });
      if (typeof e.zIndex == "number") {
        A.zIndex = e.zIndex;
      }
      if (typeof e.duration == "number") {
        A.duration = e.duration;
      }
      if (typeof e.position == "string") {
        A.position = e.position;
      }
    }
    setPosInStyle(e) {
      let t = {};
      ["top", "left", "bottom", "right"].forEach(n => {
        if (n in e) {
          let i = e[n];
          t[n] = typeof i == "number" ? `${i}px` : i;
        }
      });
      return t;
    }
    render() {
      let {
        notices: e
      } = this.state;
      let {
        removedItems: t,
        updatedItems: n
      } = this.state;
      e = Array.from(new Set([...e, ...t]));
      let r = {
        top: [],
        topLeft: [],
        topRight: [],
        bottom: [],
        bottomLeft: [],
        bottomRight: []
      };
      e.forEach(e => {
        let t = e.direction || this.context.direction;
        r[e.position || (t === "rtl" ? "topLeft" : "topRight")].push(e);
      });
      let o = Object.entries(r).map(e => {
        let i = e[0];
        let r = e[1];
        return this.renderNoticeInPosition(r, i, t, n);
      });
      return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, o);
    }
  }
  W.contextType = createContextProvider.context;
  W.propTypes = {
    style: l.object,
    className: l.string,
    direction: l.oneOf(p.directions)
  };
  W.defaultProps = {};
  W.useNotification = function () {
    let [e, t] = function () {
      let [e, t] = reactCoreLibraryReexport.useState([]);
      return [function () {
        let t = {
          top: [],
          topLeft: [],
          topRight: [],
          bottom: [],
          bottomLeft: [],
          bottomRight: []
        };
        e.forEach(e => {
          let {
            element: n,
            config: i
          } = e;
          let {
            position: r
          } = i;
          t[r].push(n);
        });
        return Object.entries(t).map(e => {
          let t = e[0];
          let n = e[1];
          if (Array.isArray(n) && n.length) {
            return reactCoreLibraryReexport.createElement("div", {
              key: t,
              className: a(f.LIST),
              placement: t
            }, n);
          } else {
            return null;
          }
        });
      }(), function (e, n) {
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
    let n = new Map();
    let r = e => {
      let r;
      let o = uniqueIdUtils.createTimestampId("semi_notice_");
      let a = Object.assign(Object.assign({}, e), {
        id: o
      });
      r = t(reactCoreLibraryReexport.createElement(L, Object.assign({
        key: o
      }, a, {
        afterClose: e => r(e),
        ref: e => {
          n.set(o, e);
        }
      })), Object.assign({}, a));
      return o;
    };
    return [{
      success: e => r(Object.assign(Object.assign(Object.assign({}, D), e), {
        type: "success"
      })),
      info: e => r(Object.assign(Object.assign(Object.assign({}, D), e), {
        type: "info"
      })),
      error: e => r(Object.assign(Object.assign(Object.assign({}, D), e), {
        type: "error"
      })),
      warning: e => r(Object.assign(Object.assign(Object.assign({}, D), e), {
        type: "warning"
      })),
      open: e => r(Object.assign(Object.assign(Object.assign({}, D), e), {
        type: "default"
      })),
      close: e => {
        let t = n.get(e);
        if (t) {
          t.close();
        }
      }
    }, reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, e)];
  };
  var B = W;
  require.d(exports, {
    Notification: function () {
      return B;
    }
  });
}