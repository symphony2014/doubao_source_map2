// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'SideSheet'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: coding-skill-chat-input.5642b6e3.js
         * chunkId: 18383
         * moduleId: 59995
         */
module.exports = function (module, exports, require) {
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactFoundationComponent = require("react-foundation-component") /*id: 323591*/;
  var propTypesFactoryWrapper = require("prop-types-factory-wrapper") /*id: 928010*/;
  var l = propTypesFactoryWrapper;
  var reactPortalContainer = require("react-portal-container") /*id: 361066*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var c = classnamesUtils;
  var createContextProvider = require("create-context-provider") /*id: 289192*/;
  var semiIdentifier = require("semi-identifier") /*id: 247778*/;
  let h = {
    PREFIX: `${semiIdentifier.semiIdentifier}-sidesheet`,
    DIALOG: `${semiIdentifier.semiIdentifier}-modal`
  };
  var semiIconButton = require("semi-icon-button") /*id: 845645*/;
  var closeIconComponent = require("close-icon-component") /*id: 111418*/;
  var dataAttributeFilter = require("data-attribute-filter") /*id: 584342*/;
  function v(e, t) {
    var n = {};
    for (var i in e) {
      if (Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0) {
        n[i] = e[i];
      }
    }
    if (e != null && typeof Object.getOwnPropertySymbols == "function") {
      var a = 0;
      var i = Object.getOwnPropertySymbols(e);
      for (; a < i.length; a++) {
        if (t.indexOf(i[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[a])) {
          n[i[a]] = e[i[a]];
        }
      }
    }
    return n;
  }
  let g = 0;
  let b = h.PREFIX;
  class y extends reactCoreLibraryReexport.PureComponent {
    constructor() {
      super(...arguments);
      this.onMaskClick = e => {
        if (e.target === e.currentTarget) {
          this.close(e);
        }
      };
      this.close = e => {
        let {
          onClose: t
        } = this.props;
        if (t) {
          t(e);
        }
      };
    }
    componentDidMount() {
      this.sideSheetId = `sidesheet-${g++}`;
    }
    componentWillUnmount() {
      clearTimeout(this.timeoutId);
    }
    getMaskElement() {
      let {
        mask: t,
        maskStyle: n,
        maskClosable: i
      } = this.props;
      if (t) {
        return reactCoreLibraryReexport.createElement("div", Object.assign({
          "aria-hidden": true,
          key: "mask",
          className: c(`${b}-mask`, this.props.maskClassName ?? ""),
          style: n,
          onClick: i ? this.onMaskClick : null
        }, this.props.maskExtraProps));
      } else {
        return null;
      }
    }
    renderHeader() {
      let e;
      let t;
      let {
        title: n,
        closable: i,
        headerStyle: o,
        closeIcon: r
      } = this.props;
      if (n) {
        e = reactCoreLibraryReexport.createElement("div", {
          className: `${b}-title`,
          "x-semi-prop": "title"
        }, this.props.title);
      }
      if (i) {
        let e = r || reactCoreLibraryReexport.createElement(closeIconComponent.CloseIcon, null);
        t = reactCoreLibraryReexport.createElement(semiIconButton.SemiIconButton, {
          className: `${b}-close`,
          key: "close-btn",
          onClick: this.close,
          type: "tertiary",
          icon: e,
          theme: "borderless",
          size: "small"
        });
      }
      return reactCoreLibraryReexport.createElement("div", {
        className: `${b}-header`,
        role: "heading",
        "aria-level": 1,
        style: Object.assign({}, o)
      }, e, t);
    }
    getDialogElement() {
      let t = v(this.props, []);
      let n = {};
      if (t.width) {
        n.width = t.width;
        if (!t.mask) {
          n.width = "100%";
        }
      }
      if (t.height) {
        n.height = t.height;
      }
      let i = this.renderHeader();
      return reactCoreLibraryReexport.createElement("div", Object.assign({
        key: "dialog-element",
        role: "dialog",
        tabIndex: -1,
        className: c(`${b}-inner`, `${b}-inner-wrap`, this.props.dialogClassName ?? "", `${b}-size-${t.size}`),
        style: Object.assign(Object.assign({}, t.style), n)
      }, this.props.wrapperExtraProps), reactCoreLibraryReexport.createElement("div", {
        className: `${b}-content`
      }, i, reactCoreLibraryReexport.createElement("div", {
        className: `${b}-body`,
        style: t.bodyStyle,
        "x-semi-prop": "children"
      }, t.children), t.footer ? reactCoreLibraryReexport.createElement("div", {
        className: `${b}-footer`,
        "x-semi-prop": "footer"
      }, t.footer) : null));
    }
    render() {
      let e = this.props;
      let {
        mask: t,
        className: n,
        width: i,
        onClose: o,
        maskStyle: r,
        maskClosable: l,
        maskClassName: s,
        title: d,
        closable: u,
        headerStyle: p,
        height: h,
        style: m,
        size: f,
        bodyStyle: g,
        dialogClassName: y,
        children: x,
        footer: C,
        maskExtraProps: w,
        wrapperExtraProps: k
      } = e;
      let E = v(e, ["mask", "className", "width", "onClose", "maskStyle", "maskClosable", "maskClassName", "title", "closable", "headerStyle", "height", "style", "size", "bodyStyle", "dialogClassName", "children", "footer", "maskExtraProps", "wrapperExtraProps"]);
      let S = c(n, {
        [`${b}-fixed`]: !t,
        [`${b}-size-${this.props.size}`]: !t
      });
      let N = {};
      if (!t && i) {
        N.width = i;
      }
      let j = dataAttributeFilter.filterDataAttrs(E);
      return reactCoreLibraryReexport.createElement("div", Object.assign({
        className: S,
        style: N
      }, j), this.getMaskElement(), this.getDialogElement());
    }
  }
  y.propTypes = {
    onClose: l.func,
    closeIcon: l.node
  };
  y.defaultProps = {
    onClose: emptyExportFunction.emptyFunction
  };
  var componentAdapterBaseClass = require("component-adapter-base-class") /*id: 519643*/;
  var keyboardKeyCodes_3 = require("keyboard-key-codes_3") /*id: 174510*/;
  class w extends componentAdapterBaseClass.BaseAdapterClass {
    constructor(e) {
      super(Object.assign(Object.assign({}, w.defaultAdapter), e));
      this.toggleDisplayNone = e => {
        this._adapter.toggleDisplayNone(e);
      };
    }
    get defaultAdapter() {
      return {
        handleCancel: emptyExportFunction.emptyFunction,
        beforeShow: emptyExportFunction.emptyFunction,
        afterHide: emptyExportFunction.emptyFunction
      };
    }
    destroy() {
      this.afterHide();
    }
    handleCancel(e) {
      this._adapter.notifyCancel(e);
    }
    beforeShow() {
      if (this.getProp("disableScroll")) {
        this._adapter.disabledBodyScroll();
      }
      this._adapter.setOnKeyDownListener();
    }
    afterHide() {
      if (this.getProp("disableScroll")) {
        this._adapter.enabledBodyScroll();
      }
      this._adapter.removeKeyDownListener();
    }
    handleKeyDown(e) {
      let {
        closeOnEsc: t
      } = this.getProps();
      if (t && e.keyCode === keyboardKeyCodes_3.keyCodeMap.ESC) {
        e.stopPropagation();
        this.handleCancel(e);
        return;
      }
    }
    onVisibleChange(e) {
      this._adapter.notifyVisibleChange(e);
    }
  }
  var cssAnimationComponent = require("css-animation-component") /*id: 593626*/;
  var commonFrontendUtils = require("common-frontend-utils") /*id: 264233*/;
  function S(e, t) {
    var n = {};
    for (var i in e) {
      if (Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0) {
        n[i] = e[i];
      }
    }
    if (e != null && typeof Object.getOwnPropertySymbols == "function") {
      var a = 0;
      var i = Object.getOwnPropertySymbols(e);
      for (; a < i.length; a++) {
        if (t.indexOf(i[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[a])) {
          n[i[a]] = e[i[a]];
        }
      }
    }
    return n;
  }
  let N = h.PREFIX;
  class j extends reactFoundationComponent.FoundationComponent {
    constructor(e) {
      super(e);
      this.handleCancel = e => {
        this.foundation.handleCancel(e);
      };
      this.handleKeyDown = e => {
        this.foundation.handleKeyDown(e);
      };
      this.updateState = () => {
        this.foundation.toggleDisplayNone(!this.props.visible);
      };
      this.state = {
        displayNone: !this.props.visible
      };
      this.foundation = new w(this.adapter);
      this.bodyOverflow = "";
      this.scrollBarWidth = 0;
      this.originBodyWidth = "100%";
    }
    get adapter() {
      return Object.assign(Object.assign({}, super.adapter), {
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
        notifyCancel: e => {
          if (this.props.onCancel) {
            this.props.onCancel(e);
          }
        },
        notifyVisibleChange: e => {
          this.props.afterVisibleChange(e);
        },
        setOnKeyDownListener: () => {
          if (window) {
            window.addEventListener("keydown", this.handleKeyDown);
          }
        },
        removeKeyDownListener: () => {
          if (window) {
            window.removeEventListener("keydown", this.handleKeyDown);
          }
        },
        toggleDisplayNone: e => {
          if (e !== this.state.displayNone) {
            this.setState({
              displayNone: e
            });
          }
        }
      });
    }
    static getDerivedStateFromProps(e, t) {
      let n = {};
      if (e.visible && t.displayNone) {
        n.displayNone = false;
      }
      if (!e.visible && !e.motion && !t.displayNone) {
        n.displayNone = true;
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
    componentDidUpdate(e, t, n) {
      if (!e.visible && this.props.visible) {
        this.foundation.beforeShow();
      }
      if (e.visible && !this.props.visible) {
        this.foundation.afterHide();
      }
      if (t.displayNone !== this.state.displayNone) {
        this.foundation.onVisibleChange(!this.state.displayNone);
      }
    }
    componentWillUnmount() {
      if (this.props.visible) {
        this.foundation.destroy();
      }
    }
    renderContent() {
      let e = this.props;
      let {
        placement: t,
        className: n,
        children: i,
        width: o,
        height: r,
        motion: l,
        visible: d,
        style: u,
        maskStyle: p,
        size: h,
        zIndex: m,
        getPopupContainer: f,
        keepDOM: _
      } = e;
      let v = S(e, ["placement", "className", "children", "width", "height", "motion", "visible", "style", "maskStyle", "size", "zIndex", "getPopupContainer", "keepDOM"]);
      let g = {
        zIndex: m
      };
      if (f) {
        g = {
          zIndex: m,
          position: "static"
        };
      }
      let {
        direction: b
      } = this.context;
      let x = t === "left" || t === "right";
      let C = t === "top" || t === "bottom";
      let w = c(N, n, {
        [`${N}-${t}`]: t,
        [`${N}-popup`]: f,
        [`${N}-horizontal`]: C,
        [`${N}-rtl`]: b === "rtl",
        [`${N}-hidden`]: _ && this.state.displayNone
      });
      let E = Object.assign(Object.assign(Object.assign({}, x ? o ? {
        width: o
      } : {} : {
        width: "100%"
      }), v), {
        visible: d,
        motion: false,
        size: h,
        className: w,
        height: C ? r || 448 : "100%",
        onClose: this.handleCancel
      });
      let j = this.props.visible || this.props.keepDOM || this.props.motion && !this.state.displayNone;
      return reactCoreLibraryReexport.createElement(cssAnimationComponent.AnimationComponent, {
        motion: this.props.motion,
        animationState: d ? "enter" : "leave",
        startClassName: d ? `${N}-animation-mask_show` : `${N}-animation-mask_hide`,
        onAnimationEnd: this.updateState
      }, e => {
        let {
          animationClassName: t,
          animationEventsNeedBind: n
        } = e;
        return reactCoreLibraryReexport.createElement(cssAnimationComponent.AnimationComponent, {
          motion: this.props.motion,
          animationState: d ? "enter" : "leave",
          startClassName: d ? `${N}-animation-content_show_${this.props.placement}` : `${N}-animation-content_hide_${this.props.placement}`,
          onAnimationEnd: this.updateState
        }, e => {
          let {
            animationClassName: o,
            animationStyle: r,
            animationEventsNeedBind: l
          } = e;
          if (j) {
            return reactCoreLibraryReexport.createElement(reactPortalContainer.PortalContainer, {
              getPopupContainer: f,
              style: g
            }, reactCoreLibraryReexport.createElement(y, Object.assign({}, E, {
              maskExtraProps: n,
              wrapperExtraProps: l,
              dialogClassName: o,
              maskClassName: t,
              maskStyle: Object.assign({}, p),
              style: Object.assign(Object.assign({}, r), u)
            }), i));
          } else {
            return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null);
          }
        });
      });
    }
    render() {
      let {
        zIndex: e,
        getPopupContainer: t,
        visible: n
      } = this.props;
      return this.renderContent();
    }
  }
  j.contextType = createContextProvider.context;
  j.propTypes = {
    bodyStyle: l.object,
    headerStyle: l.object,
    children: l.node,
    className: l.string,
    closable: l.bool,
    disableScroll: l.bool,
    getPopupContainer: l.func,
    height: l.oneOfType([l.number, l.string]),
    mask: l.bool,
    maskClosable: l.bool,
    maskStyle: l.object,
    motion: l.oneOfType([l.bool, l.object, l.func]),
    onCancel: l.func,
    placement: l.oneOf(["top", "right", "bottom", "left"]),
    size: l.oneOf(["small", "medium", "large"]),
    style: l.object,
    title: l.node,
    visible: l.bool,
    width: l.oneOfType([l.number, l.string]),
    zIndex: l.number,
    afterVisibleChange: l.func,
    closeOnEsc: l.bool,
    footer: l.node,
    keepDOM: l.bool,
    "aria-label": l.string
  };
  j.__SemiComponentName__ = "SideSheet";
  j.defaultProps = commonFrontendUtils.configProxyHandler(j.__SemiComponentName__, {
    visible: false,
    motion: true,
    mask: true,
    placement: "right",
    closable: true,
    footer: null,
    zIndex: 1000,
    maskClosable: true,
    size: "small",
    disableScroll: true,
    closeOnEsc: false,
    afterVisibleChange: emptyExportFunction.emptyFunction,
    keepDOM: false
  });
  require.d(exports, {
    SideSheet: function () {
      return j;
    }
  });
}