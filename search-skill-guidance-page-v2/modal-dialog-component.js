// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'Modal'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 903195
         */
module.exports = function (module, exports, require) {
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var semiIdentifier = require("semi-identifier") /*id: 247778*/;
  let l = {
    DIALOG: `${semiIdentifier.semiIdentifier}-modal`
  };
  var semiButtonWrapperComponent = require("semi-button-wrapper-component") /*id: 654274*/;
  var componentAdapterBaseClass = require("component-adapter-base-class") /*id: 519643*/;
  var isPromiseUtil = require("is-promise-util") /*id: 688982*/;
  class d extends componentAdapterBaseClass.BaseAdapterClass {
    constructor(e) {
      super(Object.assign({}, e));
      this.toggleDisplayNone = (e, t) => {
        this._adapter.toggleDisplayNone(e, t);
      };
    }
    destroy() {
      this.afterHide();
    }
    handleCancel(e) {
      var t;
      let n = this._adapter.notifyCancel(e);
      if (isPromiseUtil.isPromise(n)) {
        this._adapter.setState({
          onCancelReturnPromiseStatus: "pending"
        });
        if ((t = n == null ? undefined : n.then(() => {
          this._adapter.setState({
            onCancelReturnPromiseStatus: "fulfilled"
          });
        })) !== null && t !== undefined) {
          t.catch(e => {
            this._adapter.setState({
              onCancelReturnPromiseStatus: "rejected"
            });
            throw e;
          });
        }
      }
    }
    handleOk(e) {
      var t;
      let n = this._adapter.notifyOk(e);
      if (isPromiseUtil.isPromise(n)) {
        this._adapter.setState({
          onOKReturnPromiseStatus: "pending"
        });
        if ((t = n == null ? undefined : n.then(() => {
          this._adapter.setState({
            onOKReturnPromiseStatus: "fulfilled"
          });
        })) !== null && t !== undefined) {
          t.catch(e => {
            this._adapter.setState({
              onOKReturnPromiseStatus: "rejected"
            });
            throw e;
          });
        }
      }
    }
    beforeShow() {
      this._adapter.disabledBodyScroll();
    }
    afterHide() {
      this._adapter.enabledBodyScroll();
      this._adapter.notifyClose();
    }
    enabledBodyScroll() {
      this._adapter.enabledBodyScroll();
    }
  }
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var propTypesFactoryWrapper = require("prop-types-factory-wrapper") /*id: 928010*/;
  var m = propTypesFactoryWrapper;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var g = classnamesUtils;
  var createContextProvider = require("create-context-provider") /*id: 289192*/;
  var semiIconButton = require("semi-icon-button") /*id: 845645*/;
  var typographyWrapperModule = require("typography-wrapper-module") /*id: 954330*/;
  var reactFoundationComponent = require("react-foundation-component") /*id: 323591*/;
  var keyboardKeyCodes_3 = require("keyboard-key-codes_3") /*id: 174510*/;
  class A extends componentAdapterBaseClass.BaseAdapterClass {
    constructor(e) {
      super(Object.assign(Object.assign({}, A.defaultAdapter), e));
      this.handleKeyDown = e => {
        let {
          closeOnEsc: t
        } = this.getProps();
        if (t && e.keyCode === keyboardKeyCodes_3.keyCodeMap.ESC) {
          e.stopPropagation();
          this.close(e);
          return;
        }
      };
    }
    destroy() {
      this.handleKeyDownEventListenerUnmount();
      this.modalDialogBlur();
      this.prevFocusElementReFocus();
    }
    handleDialogMouseDown() {
      this._adapter.notifyDialogMouseDown();
    }
    handleMaskMouseUp() {
      this._adapter.notifyDialogMouseUp();
    }
    handleKeyDownEventListenerMount() {
      this._adapter.addKeyDownEventListener();
    }
    handleKeyDownEventListenerUnmount() {
      this._adapter.removeKeyDownEventListener();
    }
    getMouseState() {
      this._adapter.getMouseState();
    }
    handleMaskClick(e) {
      let {
        dialogMouseDown: t
      } = this.getStates();
      if (e.target === e.currentTarget && !t) {
        this.close(e);
      }
    }
    close(e) {
      this._adapter.notifyClose(e);
    }
    modalDialogFocus() {
      this._adapter.modalDialogFocus();
    }
    modalDialogBlur() {
      this._adapter.modalDialogBlur();
    }
    prevFocusElementReFocus() {
      this._adapter.prevFocusElementReFocus();
    }
  }
  var closeIconComponent = require("close-icon-component") /*id: 111418*/;
  var throttledArrayDifference = require("throttled-array-difference") /*id: 90381*/;
  var isHtmlElementCheck = require("is-html-element-check") /*id: 287357*/;
  class C {
    constructor(e, t) {
      var n;
      this.addFocusRedirectListener = e => {
        this.focusRedirectListenerList.push(e);
        return () => this.removeFocusRedirectListener(e);
      };
      this.removeFocusRedirectListener = e => {
        this.focusRedirectListenerList = throttledArrayDifference.throttledArrayDiff(this.focusRedirectListenerList, e);
      };
      this.destroy = () => {
        var e;
        if ((e = this.container) !== null && e !== undefined) {
          e.removeEventListener("keydown", this.onKeyPress);
        }
      };
      this.shouldFocusRedirect = e => {
        if (!this.enable) {
          return false;
        }
        for (let t of this.focusRedirectListenerList) {
          if (!t(e)) {
            return false;
          }
        }
        return true;
      };
      this.focusElement = (e, t) => {
        let {
          preventScroll: n
        } = this.options;
        if (e != null) {
          e.focus({
            preventScroll: n
          });
        }
        t.preventDefault();
      };
      this.onKeyPress = e => {
        if (e && e.key === "Tab") {
          let t = C.getFocusableElements(this.container);
          if (t.length) {
            if (e.shiftKey) {
              this.handleContainerShiftTabKeyDown(t, e);
            } else {
              this.handleContainerTabKeyDown(t, e);
            }
          }
        }
      };
      this.handleContainerTabKeyDown = (e, t) => {
        let n = C.getActiveElement();
        let i = e[e.length - 1] === n;
        let r = e[0];
        if (i && this.shouldFocusRedirect(r)) {
          this.focusElement(r, t);
        }
      };
      this.handleContainerShiftTabKeyDown = (e, t) => {
        let n = C.getActiveElement();
        let i = e[0] === n;
        let r = e[e.length - 1];
        if (i && this.shouldFocusRedirect(r)) {
          this.focusElement(r, t);
        }
      };
      Object.freeze(t);
      this.container = e;
      this.options = t;
      this.enable = (n = t == null ? undefined : t.enable) === null || n === undefined || n;
      this.focusRedirectListenerList = (t == null ? undefined : t.onFocusRedirectListener) ? Array.isArray(t.onFocusRedirectListener) ? [...t.onFocusRedirectListener] : [t.onFocusRedirectListener] : [];
      this.container.addEventListener("keydown", this.onKeyPress);
    }
    get enable() {
      return this._enable;
    }
    set enable(e) {
      this._enable = e;
    }
    static getFocusableElements(e) {
      if (isHtmlElementCheck.isHtmlElement(e)) {
        return Array.from(e.querySelectorAll("input:not([disabled]):not([tabindex='-1']),textarea:not([disabled]):not([tabindex='-1']),button:not([disabled]):not([tabindex='-1']),a[href]:not([tabindex='-1']),select:not([disabled]):not([tabindex='-1']),area[href]:not([tabindex='-1']),iframe:not([tabindex='-1']),object:not([tabindex='-1']),*[tabindex]:not([tabindex='-1']),*[contenteditable]:not([tabindex='-1'])"));
      } else {
        return [];
      }
    }
    static getActiveElement() {
      if (document) {
        return document.activeElement;
      } else {
        return null;
      }
    }
  }
  function $(e, t) {
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
  let E = 0;
  class R extends reactFoundationComponent.FoundationComponent {
    constructor(e) {
      super(e);
      this.onKeyDown = e => {
        this.foundation.handleKeyDown(e);
      };
      this.onDialogMouseDown = () => {
        this.foundation.handleDialogMouseDown();
      };
      this.onMaskMouseUp = () => {
        this.foundation.handleMaskMouseUp();
      };
      this.onMaskClick = e => {
        this.foundation.handleMaskClick(e);
      };
      this.close = e => {
        this.foundation.close(e);
      };
      this.getMaskElement = () => {
        let e = $(this.props, []);
        let {
          mask: t,
          maskClassName: n
        } = e;
        if (t) {
          let t = g(`${l.DIALOG}-mask`, {});
          return reactCoreLibraryReexport.createElement("div", Object.assign({
            key: "mask"
          }, this.props.maskExtraProps, {
            className: g(t, n),
            style: e.maskStyle
          }));
        }
        return null;
      };
      this.renderCloseBtn = () => {
        let e;
        let {
          closable: t,
          closeIcon: n
        } = this.props;
        if (t) {
          let t = n || reactCoreLibraryReexport.createElement(closeIconComponent.CloseIcon, {
            "x-semi-prop": "closeIcon"
          });
          e = reactCoreLibraryReexport.createElement(semiIconButton.SemiIconButton, {
            "aria-label": "close",
            className: `${l.DIALOG}-close`,
            key: "close-btn",
            onClick: this.close,
            type: "tertiary",
            icon: t,
            theme: "borderless",
            size: "small"
          });
        }
        return e;
      };
      this.renderIcon = () => {
        let {
          icon: e
        } = this.props;
        if (e) {
          return reactCoreLibraryReexport.createElement("span", {
            className: `${l.DIALOG}-icon-wrapper`,
            "x-semi-prop": "icon"
          }, e);
        } else {
          return null;
        }
      };
      this.renderHeader = () => {
        if ("header" in this.props) {
          return this.props.header;
        }
        let {
          title: e
        } = this.props;
        let t = this.renderCloseBtn();
        let n = this.renderIcon();
        if (e == null) {
          return null;
        } else {
          return reactCoreLibraryReexport.createElement("div", {
            className: `${l.DIALOG}-header`
          }, n, reactCoreLibraryReexport.createElement(typographyWrapperModule.TypographyWrapper.Title, {
            heading: 5,
            className: `${l.DIALOG}-title`,
            id: `${l.DIALOG}-title`,
            "x-semi-prop": "title"
          }, e), t);
        }
      };
      this.renderBody = () => {
        let {
          bodyStyle: e,
          children: t,
          title: n
        } = this.props;
        let i = g(`${l.DIALOG}-body`, {
          [`${l.DIALOG}-withIcon`]: this.props.icon
        });
        let o = this.renderCloseBtn();
        let a = this.renderIcon();
        if (n != null || "header" in this.props) {
          return reactCoreLibraryReexport.createElement("div", {
            className: i,
            id: `${l.DIALOG}-body`,
            style: e,
            "x-semi-prop": "children"
          }, t);
        } else {
          return reactCoreLibraryReexport.createElement("div", {
            className: `${l.DIALOG}-body-wrapper`
          }, a, reactCoreLibraryReexport.createElement("div", {
            className: i,
            style: e,
            "x-semi-prop": "children"
          }, t), o);
        }
      };
      this.getDialogElement = () => {
        let e = $(this.props, []);
        let t = {};
        let n = g(`${l.DIALOG}`, {
          [`${l.DIALOG}-centered`]: e.centered,
          [`${l.DIALOG}-${e.size}`]: e.size
        });
        if (e.width) {
          t.width = e.width;
        }
        if (e.height) {
          t.height = e.height;
        }
        if (e.isFullScreen) {
          t.width = "100%";
          t.height = "100%";
          t.margin = "unset";
        }
        let i = this.renderBody();
        let o = this.renderHeader();
        let a = e.footer ? reactCoreLibraryReexport.createElement("div", {
          className: `${l.DIALOG}-footer`,
          "x-semi-prop": "footer"
        }, e.footer) : null;
        return reactCoreLibraryReexport.createElement("div", {
          key: "dialog-element",
          className: n,
          onMouseDown: this.onDialogMouseDown,
          style: Object.assign(Object.assign({}, e.style), t),
          id: this.dialogId
        }, reactCoreLibraryReexport.createElement("div", {
          role: "dialog",
          ref: this.modalDialogRef,
          "aria-modal": "true",
          "aria-labelledby": `${l.DIALOG}-title`,
          "aria-describedby": `${l.DIALOG}-body`,
          onAnimationEnd: e.onAnimationEnd,
          className: g([`${l.DIALOG}-content`, e.contentClassName, {
            [`${l.DIALOG}-content-fullScreen`]: e.isFullScreen
          }])
        }, o, i, a));
      };
      this.state = {
        dialogMouseDown: false,
        prevFocusElement: C.getActiveElement()
      };
      this.foundation = new A(this.adapter);
      this.dialogId = `dialog-${E++}`;
      this.modalDialogRef = reactCoreLibraryReexport.createRef();
    }
    get adapter() {
      return Object.assign(Object.assign({}, super.adapter), {
        notifyClose: e => {
          this.props.onClose(e);
        },
        notifyDialogMouseDown: () => {
          this.setState({
            dialogMouseDown: true
          });
        },
        notifyDialogMouseUp: () => {
          if (this.state.dialogMouseDown) {
            this.timeoutId = setTimeout(() => {
              this.setState({
                dialogMouseDown: false
              });
            }, 0);
          }
        },
        addKeyDownEventListener: () => {
          if (this.props.closeOnEsc) {
            document.addEventListener("keydown", this.foundation.handleKeyDown);
          }
        },
        removeKeyDownEventListener: () => {
          if (this.props.closeOnEsc) {
            document.removeEventListener("keydown", this.foundation.handleKeyDown);
          }
        },
        getMouseState: () => this.state.dialogMouseDown,
        modalDialogFocus: () => {
          var e;
          var n;
          let i;
          let {
            preventScroll: r
          } = this.props;
          if (this.modalDialogRef) {
            let t = C.getActiveElement();
            i = this.modalDialogRef.current.contains(t);
            if ((e = this.focusTrapHandle) !== null && e !== undefined) {
              e.destroy();
            }
            this.focusTrapHandle = new C(this.modalDialogRef.current, {
              preventScroll: r
            });
          }
          if (!i && (n = this.modalDialogRef?.current) !== null && n !== undefined) {
            n.focus({
              preventScroll: r
            });
          }
        },
        modalDialogBlur: () => {
          var e;
          var t;
          if ((e = this.modalDialogRef) !== null && e !== undefined) {
            e.current.blur();
          }
          if ((t = this.focusTrapHandle) !== null && t !== undefined) {
            t.destroy();
          }
        },
        prevFocusElementReFocus: () => {
          let {
            prevFocusElement: e
          } = this.state;
          let {
            preventScroll: t
          } = this.props;
          let n = objectPathGetDefault.getObjectPathDefault(e, "focus");
          if (isFunctionUtil_1.isFunction(n)) {
            e.focus({
              preventScroll: t
            });
          }
        }
      });
    }
    componentDidMount() {
      var e;
      this.foundation.handleKeyDownEventListenerMount();
      this.foundation.modalDialogFocus();
      let t = C.getFocusableElements(this.modalDialogRef.current);
      if (!this.modalDialogRef.current.contains(document.activeElement) && (e = t[0]) !== null && e !== undefined) {
        e.focus();
      }
    }
    componentWillUnmount() {
      clearTimeout(this.timeoutId);
      this.foundation.destroy();
    }
    render() {
      let e = this.props;
      let {
        maskClosable: t,
        className: n,
        getPopupContainer: i,
        maskFixed: o,
        getContainerContext: a
      } = e;
      let s = $(e, ["maskClosable", "className", "getPopupContainer", "maskFixed", "getContainerContext"]);
      let {
        direction: c
      } = this.context;
      let d = g(n, {
        [`${l.DIALOG}-popup`]: i && !o,
        [`${l.DIALOG}-fixed`]: o,
        [`${l.DIALOG}-rtl`]: c === "rtl"
      });
      let u = a();
      let p = this.getDataAttr(s);
      let h = reactCoreLibraryReexport.createElement("div", Object.assign({
        className: d
      }, p), this.getMaskElement(), reactCoreLibraryReexport.createElement("div", Object.assign({
        role: "none",
        className: g({
          [`${l.DIALOG}-wrap`]: true,
          [`${l.DIALOG}-wrap-center`]: this.props.centered
        }),
        onClick: t ? this.onMaskClick : null,
        onMouseUp: t ? this.onMaskMouseUp : null
      }, this.props.contentExtraProps), this.getDialogElement()));
      if (u && u.Provider) {
        return reactCoreLibraryReexport.createElement(u.Provider, {
          value: u.value
        }, h);
      } else {
        return h;
      }
    }
  }
  R.contextType = createContextProvider.context;
  R.propTypes = {
    close: m.func,
    getContainerContext: m.func,
    contentClassName: m.string,
    maskClassName: m.string,
    onAnimationEnd: m.func,
    preventScroll: m.bool
  };
  R.defaultProps = {
    close: emptyExportFunction.emptyFunction,
    getContainerContext: emptyExportFunction.emptyFunction,
    contentClassName: "",
    maskClassName: ""
  };
  var reactPortalContainer = require("react-portal-container") /*id: 361066*/;
  var aiCreationLocaleWrapper = require("ai-creation-locale-wrapper") /*id: 67026*/;
  var throttledOmitPathStringify = require("throttled-omit-path-stringify") /*id: 159496*/;
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  var commonFrontendUtils = require("common-frontend-utils") /*id: 264233*/;
  function O(e, t) {
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
  var P = e => {
    let [t, n] = reactCoreLibraryReexport.useState(true);
    let [i, o] = reactCoreLibraryReexport.useState();
    let [a, s] = reactCoreLibraryReexport.useState();
    let {
      direction: c
    } = e;
    let {
      title: d,
      content: u,
      icon: p,
      type: h,
      onCancel: m,
      onOk: f,
      className: v
    } = e;
    let b = O(e, ["title", "content", "icon", "type", "onCancel", "onOk", "className"]);
    let y = reactCoreLibraryReexport.useCallback(e => {
      let t = f && f(e);
      if (t && t.then) {
        o(true);
        t.then(function () {
          n(false);
          o(false);
        }, e => {
          o(false);
        });
      } else {
        n(false);
      }
    }, [f]);
    let x = reactCoreLibraryReexport.useCallback(e => {
      let t = m && m(e);
      if (t && t.then) {
        s(true);
        t.then(function () {
          n(false);
          s(false);
        }, e => {
          s(false);
        });
      } else {
        n(false);
      }
    }, [m]);
    let w = `${l.DIALOG}-confirm`;
    let A = g(v, w, {
      [`${w}-rtl`]: c === "rtl"
    });
    let _ = g(`${l.DIALOG}-${h}`);
    let k = commonFrontendUtils.isIconElement(p) ? reactCoreLibraryReexport.cloneElement(p, {
      className: `${w}-icon ${_}-icon`,
      size: "extra-large"
    }) : p;
    let S = d == null ? null : reactCoreLibraryReexport.createElement("span", {
      className: `${w}-title-text`
    }, d);
    let C = g(`${w}-content`, {
      [`${w}-content-withIcon`]: e.icon
    });
    return reactCoreLibraryReexport.createElement(et, Object.assign({
      className: A,
      title: S,
      confirmLoading: i,
      cancelLoading: a,
      onOk: y,
      onCancel: x,
      icon: k,
      visible: t
    }, b), reactCoreLibraryReexport.createElement("div", {
      className: C,
      "x-semi-prop": "content"
    }, u));
  };
  var infoCircleIcon = require("info-circle-icon") /*id: 444518*/;
  var tickCircleIcon = require("tick-circle-icon") /*id: 572060*/;
  var alertTriangleIcon = require("alert-triangle-icon") /*id: 704286*/;
  var alertCircleIcon = require("alert-circle-icon") /*id: 287588*/;
  let D = require("icon-component-factory") /*id: 129581*/.IconFactory(function (e) {
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
      d: "M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM11.8281 14.6094C10.9688 14.6094 10.5391 14.0723 10.5391 13.3691C10.5391 12.3242 11.0566 11.6504 12.2676 10.7324C12.2894 10.7158 12.3111 10.6993 12.3326 10.6829C13.1573 10.0555 13.7324 9.61807 13.7324 8.82812C13.7324 7.93945 12.9023 7.42188 11.9746 7.42188C11.2129 7.42188 10.627 7.70508 10.168 8.30078C9.83594 8.64258 9.57227 8.82812 9.12305 8.82812C8.38086 8.82812 8 8.31055 8 7.71484C8 7.10938 8.3418 6.49414 8.87891 6.02539C9.60156 5.40039 10.7539 5 12.2773 5C14.9922 5 16.8965 6.33789 16.8965 8.64258C16.8965 10.3223 15.8906 11.1328 14.709 11.9531C13.9082 12.5391 13.5273 12.8809 13.2246 13.5742L13.2238 13.5756C12.8922 14.1609 12.638 14.6094 11.8281 14.6094ZM11.8086 18.7695C10.8711 18.7695 10.0996 18.1641 10.0996 17.2266C10.0996 16.2891 10.8711 15.6836 11.8086 15.6836C12.7461 15.6836 13.5078 16.2891 13.5078 17.2266C13.5078 18.1641 12.7461 18.7695 11.8086 18.7695Z",
      fill: "currentColor"
    }));
  }, "help_circle");
  function z(e) {
    let t = document.createElement("div");
    document.body.appendChild(t);
    let n = Object.assign({}, e);
    let i = () => {
      if (reactDomEntryWrapper.unmountComponentAtNode(t) && t.parentNode) {
        t.parentNode.removeChild(t);
      }
      for (let e = 0; e < Y.length; e++) {
        if (Y[e] === l) {
          Y.splice(e, 1);
          break;
        }
      }
    };
    function o(n) {
      let {
        afterClose: o
      } = n;
      reactDomEntryWrapper.render(reactCoreLibraryReexport.createElement(P, Object.assign({}, n, {
        afterClose: function () {
          if (o != null) {
            o(...arguments);
          }
          i();
        },
        motion: e.motion
      })), t);
    }
    function l() {
      o(n = Object.assign(Object.assign({}, n), {
        visible: false
      }));
    }
    o(n);
    Y.push(l);
    return {
      destroy: l,
      update: function (e) {
        o(n = Object.assign(Object.assign({}, n), e));
      }
    };
  }
  function B(e) {
    return Object.assign({
      type: "info",
      icon: reactCoreLibraryReexport.createElement(infoCircleIcon.InfoCircleIcon, null)
    }, e);
  }
  function X(e) {
    return Object.assign({
      type: "success",
      icon: reactCoreLibraryReexport.createElement(tickCircleIcon.TickCircleIcon, null)
    }, e);
  }
  function H(e) {
    return Object.assign({
      type: "warning",
      icon: reactCoreLibraryReexport.createElement(alertTriangleIcon.AlertTriangleIcon, null)
    }, e);
  }
  function U(e) {
    return Object.assign({
      type: "error",
      icon: reactCoreLibraryReexport.createElement(alertCircleIcon.AlertCircleIcon, null),
      okButtonProps: Object.assign({
        type: "danger"
      }, e.okButtonProps)
    }, throttledOmitPathStringify.omitPathStringify(e, ["okButtonProps"]));
  }
  function V(e) {
    return Object.assign({
      type: "confirm",
      icon: reactCoreLibraryReexport.createElement(D, null)
    }, e);
  }
  function G(e, t) {
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
  var J = reactCoreLibraryReexport.forwardRef((e, t) => {
    var {
      afterClose: n,
      config: i
    } = e;
    G(e, ["afterClose", "config"]);
    let [o, l] = reactCoreLibraryReexport.useState(i);
    reactCoreLibraryReexport.useImperativeHandle(t, () => ({
      destroy: () => {
        l(e => Object.assign(Object.assign({}, e), {
          visible: false
        }));
      },
      update: e => {
        l(t => Object.assign(Object.assign({}, t), e));
      }
    }));
    return reactCoreLibraryReexport.createElement(P, Object.assign({}, o, {
      afterClose: () => {
        var e;
        if ((e = i == null ? undefined : i.afterClose) !== null && e !== undefined) {
          e.call(i);
        }
        n();
      }
    }));
  });
  let q = 0;
  var cssAnimationComponent = require("css-animation-component") /*id: 593626*/;
  function Q(e, t) {
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
  let Y = [];
  class ee extends reactFoundationComponent.FoundationComponent {
    constructor(e) {
      super(e);
      this.bodyOverflow = null;
      this.handleCancel = e => {
        this.foundation.handleCancel(e);
      };
      this.handleOk = e => {
        this.foundation.handleOk(e);
      };
      this.updateState = () => {
        let {
          visible: e
        } = this.props;
        this.foundation.toggleDisplayNone(!e);
      };
      this.renderFooter = () => {
        let {
          okText: e,
          okType: t,
          cancelText: n,
          confirmLoading: i,
          cancelLoading: o,
          hasCancel: s,
          footerFill: c
        } = this.props;
        let d = e => s ? reactCoreLibraryReexport.createElement(semiButtonWrapperComponent.SemiButtonWrapper, Object.assign({
          "aria-label": "cancel",
          onClick: this.handleCancel,
          loading: o === undefined ? this.state.onCancelReturnPromiseStatus === "pending" : o,
          type: "tertiary",
          block: c,
          autoFocus: true
        }, this.props.cancelButtonProps, {
          "x-semi-children-alias": "cancelText"
        }), n || e.cancel) : null;
        return reactCoreLibraryReexport.createElement(aiCreationLocaleWrapper.AiCreationLocale, {
          componentName: "Modal"
        }, (n, o) => reactCoreLibraryReexport.createElement("div", {
          className: g({
            [`${l.DIALOG}-footerfill`]: c
          })
        }, d(n), reactCoreLibraryReexport.createElement(semiButtonWrapperComponent.SemiButtonWrapper, Object.assign({
          "aria-label": "confirm",
          type: t,
          theme: "solid",
          block: c,
          loading: i === undefined ? this.state.onOKReturnPromiseStatus === "pending" : i,
          onClick: this.handleOk
        }, this.props.okButtonProps, {
          "x-semi-children-alias": "okText"
        }), e || n.confirm)));
      };
      this.renderDialog = () => {
        let e = this.props;
        let {
          footer: t,
          className: n,
          motion: i,
          maskStyle: o,
          keepDOM: a,
          style: s,
          zIndex: c,
          getPopupContainer: d,
          visible: u
        } = e;
        let p = Q(e, ["footer", "className", "motion", "maskStyle", "keepDOM", "style", "zIndex", "getPopupContainer", "visible"]);
        let h = "footer" in this.props ? t : this.renderFooter();
        let m = {
          zIndex: c
        };
        if (d) {
          m = {
            zIndex: c,
            position: "static"
          };
        }
        let f = g(n, {
          [`${l.DIALOG}-displayNone`]: a && this.state.displayNone
        });
        let v = this.props.visible || this.props.keepDOM && (!this.props.lazyRender || this._haveRendered) || this.props.motion && !this.state.displayNone;
        if (v) {
          this._haveRendered = true;
        }
        return reactCoreLibraryReexport.createElement(cssAnimationComponent.AnimationComponent, {
          motion: this.props.motion,
          animationState: u ? "enter" : "leave",
          startClassName: u ? `${l.DIALOG}-content-animate-show` : `${l.DIALOG}-content-animate-hide`,
          onAnimationEnd: () => {
            this.updateState();
          }
        }, e => {
          let {
            animationClassName: t,
            animationEventsNeedBind: n
          } = e;
          return reactCoreLibraryReexport.createElement(cssAnimationComponent.AnimationComponent, {
            motion: this.props.motion,
            animationState: u ? "enter" : "leave",
            startClassName: u ? `${l.DIALOG}-mask-animate-show` : `${l.DIALOG}-mask-animate-hide`,
            onAnimationEnd: () => {
              this.updateState();
            }
          }, e => {
            let {
              animationClassName: i,
              animationEventsNeedBind: l
            } = e;
            if (v) {
              return reactCoreLibraryReexport.createElement(reactPortalContainer.PortalContainer, {
                style: m,
                getPopupContainer: d
              }, " ", reactCoreLibraryReexport.createElement(R, Object.assign({}, p, {
                contentExtraProps: n,
                maskExtraProps: l,
                isFullScreen: this.state.isFullScreen,
                contentClassName: t,
                maskClassName: i,
                className: f,
                getPopupContainer: d,
                maskStyle: o,
                style: s,
                ref: this.modalRef,
                footer: h,
                onClose: this.handleCancel
              })));
            } else {
              return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null);
            }
          });
        });
      };
      this.state = {
        displayNone: !e.visible,
        isFullScreen: e.fullScreen
      };
      this.foundation = new d(this.adapter);
      this.modalRef = reactCoreLibraryReexport.createRef();
      this.scrollBarWidth = 0;
      this.originBodyWidth = "100%";
    }
    get adapter() {
      return Object.assign(Object.assign({}, super.adapter), {
        getProps: () => this.props,
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
          if (!e && this.bodyOverflow !== null && this.bodyOverflow !== "hidden") {
            document.body.style.overflow = this.bodyOverflow;
            document.body.style.width = this.originBodyWidth;
          }
        },
        notifyCancel: e => this.props.onCancel(e),
        notifyOk: e => this.props.onOk(e),
        notifyClose: () => {
          this.props.afterClose();
        },
        toggleDisplayNone: (e, t) => {
          if (e !== this.state.displayNone) {
            this.setState({
              displayNone: e
            }, t || emptyExportFunction.emptyFunction);
          }
        },
        notifyFullScreen: e => {
          if (e !== this.state.isFullScreen) {
            this.setState({
              isFullScreen: e
            });
          }
        }
      });
    }
    static getDerivedStateFromProps(e, t) {
      let n = {};
      if (e.fullScreen !== t.isFullScreen) {
        n.isFullScreen = e.fullScreen;
      }
      if (e.visible && t.displayNone) {
        n.displayNone = false;
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
      if (!t.displayNone && this.state.displayNone) {
        this.foundation.afterHide();
      }
    }
    componentWillUnmount() {
      if (this.props.visible) {
        this.foundation.destroy();
      } else {
        this.foundation.enabledBodyScroll();
      }
    }
    render() {
      let {
        visible: e,
        keepDOM: t,
        lazyRender: n
      } = this.props;
      return this.renderDialog();
    }
  }
  ee.propTypes = {
    mask: m.bool,
    closable: m.bool,
    centered: m.bool,
    visible: m.bool,
    width: m.oneOfType([m.string, m.number]),
    height: m.oneOfType([m.string, m.number]),
    confirmLoading: m.bool,
    cancelLoading: m.bool,
    okText: m.string,
    okType: m.string,
    cancelText: m.string,
    maskClosable: m.bool,
    onCancel: m.func,
    onOk: m.func,
    afterClose: m.func,
    okButtonProps: m.object,
    cancelButtonProps: m.object,
    style: m.object,
    className: m.string,
    maskStyle: m.object,
    bodyStyle: m.object,
    zIndex: m.number,
    title: m.node,
    icon: m.node,
    header: m.node,
    footer: m.node,
    hasCancel: m.bool,
    motion: m.bool,
    children: m.node,
    getPopupContainer: m.func,
    getContainerContext: m.func,
    maskFixed: m.bool,
    closeIcon: m.node,
    closeOnEsc: m.bool,
    size: m.oneOf(["small", "medium", "large", "full-width"]),
    keepDOM: m.bool,
    lazyRender: m.bool,
    direction: m.oneOf(["ltr", "rtl"]),
    fullScreen: m.bool,
    footerFill: m.bool
  };
  ee.__SemiComponentName__ = "Modal";
  ee.defaultProps = commonFrontendUtils.configProxyHandler(ee.__SemiComponentName__, {
    zIndex: 1000,
    motion: true,
    mask: true,
    centered: false,
    closable: true,
    visible: false,
    okType: "primary",
    maskClosable: true,
    hasCancel: true,
    onCancel: emptyExportFunction.emptyFunction,
    onOk: emptyExportFunction.emptyFunction,
    afterClose: emptyExportFunction.emptyFunction,
    maskFixed: false,
    closeOnEsc: true,
    size: "small",
    keepDOM: false,
    lazyRender: true,
    fullScreen: false
  });
  ee.useModal = function () {
    let [e, t] = function () {
      let [e, t] = reactCoreLibraryReexport.useState([]);
      return [e, function (e) {
        t(t => [...t, e]);
        return () => {
          t(t => t.filter(t => t !== e));
        };
      }];
    }();
    function n(e) {
      return function (n) {
        let i;
        q += 1;
        let o = reactCoreLibraryReexport.createRef();
        i = t(reactCoreLibraryReexport.createElement(J, {
          key: `semi-modal-${q}`,
          config: e(n),
          ref: o,
          afterClose: () => {
            i();
          }
        }));
        return {
          destroy: () => {
            if (o.current) {
              o.current.destroy();
            }
          },
          update: e => {
            if (o.current) {
              o.current.update(e);
            }
          }
        };
      };
    }
    return [{
      info: n(B),
      success: n(X),
      error: n(U),
      warning: n(H),
      confirm: n(V)
    }, reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, e)];
  };
  ee.info = function (e) {
    return z(B(e));
  };
  ee.success = function (e) {
    return z(X(e));
  };
  ee.error = function (e) {
    return z(U(e));
  };
  ee.warning = function (e) {
    return z(H(e));
  };
  ee.confirm = function (e) {
    return z(V(e));
  };
  ee.destroyAll = function () {
    while (Y.length) {
      let e = Y.pop();
      if (e) {
        e();
      }
    }
  };
  var et = ee;
  var en = et;
  require.d(exports, {
    Modal: function () {
      return en;
    }
  });
}