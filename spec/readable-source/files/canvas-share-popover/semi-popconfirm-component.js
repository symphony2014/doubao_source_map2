// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'Popconfirm'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: canvas-share-popover.d05211cb.js
         * chunkId: 91643
         * moduleId: 522098
         */
module.exports = function (module, exports, require) {
  var throttledOmitPathStringify = require("throttled-omit-path-stringify") /*id: 159496*/;
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var c = classnamesUtils;
  var propTypesFactoryWrapper = require("prop-types-factory-wrapper") /*id: 928010*/;
  var _ = propTypesFactoryWrapper;
  var semiIdentifier = require("semi-identifier") /*id: 247778*/;
  let u = {
    PREFIX: `${semiIdentifier.semiIdentifier}-popconfirm`,
    POPOVER: `${semiIdentifier.semiIdentifier}-popconfirm-popover`
  };
  var componentAdapterBaseClass = require("component-adapter-base-class") /*id: 519643*/;
  var isPromiseUtil = require("is-promise-util") /*id: 688982*/;
  class v extends componentAdapterBaseClass.BaseAdapterClass {
    init() {}
    destroy() {}
    handleCancel(e) {
      let i = this._adapter.notifyCancel(e);
      if (isPromiseUtil.isPromise(i)) {
        this._adapter.updateCancelLoading(true);
        i.then(e => {
          this.handleVisibleChange(false);
          this._adapter.updateCancelLoading(false);
        }, e => {
          this._adapter.updateCancelLoading(false);
        });
      } else {
        this.handleVisibleChange(false);
      }
    }
    handleConfirm(e) {
      let i = this._adapter.notifyConfirm(e);
      if (isPromiseUtil.isPromise(i)) {
        this._adapter.updateConfirmLoading(true);
        i.then(e => {
          this._adapter.updateConfirmLoading(false);
          this.handleVisibleChange(false);
        }, e => {
          this._adapter.updateConfirmLoading(false);
        });
      } else {
        this.handleVisibleChange(false);
      }
    }
    handleClickOutSide(e) {
      this._adapter.notifyClickOutSide(e);
    }
    handleVisibleChange(e) {
      if (!this._isControlledComponent("visible")) {
        this._adapter.setVisible(e);
      }
      if (e) {
        this.handleFocusOperateButton();
      } else {
        this._adapter.focusPrevFocusElement();
      }
      this._adapter.notifyVisibleChange(e);
    }
    handleFocusOperateButton() {
      let {
        cancelButtonProps: e,
        okButtonProps: i
      } = this._adapter.getProps();
      if (objectPathGetDefault.getObjectPathDefault(e, "autoFocus") && !objectPathGetDefault.getObjectPathDefault(e, "disabled")) {
        this._adapter.focusCancelButton();
      } else if (objectPathGetDefault.getObjectPathDefault(i, "autoFocus") && !objectPathGetDefault.getObjectPathDefault(i, "disabled")) {
        this._adapter.focusOkButton();
      }
    }
  }
  var closeIconComponent = require("close-icon-component") /*id: 111418*/;
  var alertTriangleIcon = require("alert-triangle-icon") /*id: 704286*/;
  var reactFoundationComponent = require("react-foundation-component") /*id: 323591*/;
  var popoverComponent = require("popover-component") /*id: 973583*/;
  var semiButtonWrapperComponent = require("semi-button-wrapper-component") /*id: 654274*/;
  var createContextProvider = require("create-context-provider") /*id: 289192*/;
  var aiCreationLocaleWrapper = require("ai-creation-locale-wrapper") /*id: 67026*/;
  var commonFrontendUtils = require("common-frontend-utils") /*id: 264233*/;
  function C(e, i) {
    var t = {};
    for (var n in e) {
      if (Object.prototype.hasOwnProperty.call(e, n) && i.indexOf(n) < 0) {
        t[n] = e[n];
      }
    }
    if (e != null && typeof Object.getOwnPropertySymbols == "function") {
      var a = 0;
      var n = Object.getOwnPropertySymbols(e);
      for (; a < n.length; a++) {
        if (i.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a])) {
          t[n[a]] = e[n[a]];
        }
      }
    }
    return t;
  }
  class j extends reactFoundationComponent.FoundationComponent {
    constructor(e) {
      super(e);
      this.handleCancel = e => this.foundation.handleCancel(e && e.nativeEvent);
      this.handleConfirm = e => this.foundation.handleConfirm(e && e.nativeEvent);
      this.handleVisibleChange = e => this.foundation.handleVisibleChange(e);
      this.handleClickOutSide = e => this.foundation.handleClickOutSide(e);
      this.stopImmediatePropagation = e => e && e.nativeEvent && e.nativeEvent.stopImmediatePropagation();
      this.renderConfirmPopCard = e => {
        let {
          initialFocusRef: i
        } = e;
        let {
          content: t,
          title: n,
          className: s,
          style: o,
          cancelType: l,
          icon: d,
          prefixCls: _,
          showCloseIcon: h
        } = this.props;
        let {
          direction: u
        } = this.context;
        let m = c(_, s, {
          [`${_}-rtl`]: u === "rtl"
        });
        let p = n != null;
        let v = t != null;
        let f = reactCoreLibraryReexport.isValidElement(d);
        let b = c({
          [`${_}-body`]: true,
          [`${_}-body-withIcon`]: f
        });
        return reactCoreLibraryReexport.createElement("div", {
          className: m,
          onClick: this.stopImmediatePropagation,
          style: o
        }, reactCoreLibraryReexport.createElement("div", {
          className: `${_}-inner`
        }, reactCoreLibraryReexport.createElement("div", {
          className: `${_}-header`
        }, f ? reactCoreLibraryReexport.createElement("i", {
          className: `${_}-header-icon`,
          "x-semi-prop": "icon"
        }, d) : null, reactCoreLibraryReexport.createElement("div", {
          className: `${_}-header-body`
        }, p ? reactCoreLibraryReexport.createElement("div", {
          className: `${_}-header-title`,
          "x-semi-prop": "title"
        }, n) : null), h ? reactCoreLibraryReexport.createElement(semiButtonWrapperComponent.SemiButtonWrapper, {
          className: `${_}-btn-close`,
          icon: reactCoreLibraryReexport.createElement(closeIconComponent.CloseIcon, null),
          size: "small",
          theme: "borderless",
          type: l,
          onClick: this.handleCancel
        }) : null), v ? reactCoreLibraryReexport.createElement("div", {
          className: b,
          "x-semi-prop": "content"
        }, isFunctionUtil_1.isFunction(t) ? t({
          initialFocusRef: i
        }) : t) : null, reactCoreLibraryReexport.createElement("div", {
          className: `${_}-footer`,
          ref: this.footerRef
        }, this.renderControls())));
      };
      this.state = {
        cancelLoading: false,
        confirmLoading: false,
        visible: e.defaultVisible || false
      };
      this.foundation = new v(this.adapter);
      this.footerRef = reactCoreLibraryReexport.createRef();
      this.popoverRef = reactCoreLibraryReexport.createRef();
    }
    static getDerivedStateFromProps(e, i) {
      let t = {};
      let {
        hasOwnProperty: n
      } = Object.prototype;
      if (n.call(e, "visible")) {
        t.visible = e.visible;
      }
      return t;
    }
    get adapter() {
      return Object.assign(Object.assign({}, super.adapter), {
        setVisible: e => this.setState({
          visible: e
        }),
        updateConfirmLoading: e => this.setState({
          confirmLoading: e
        }),
        updateCancelLoading: e => this.setState({
          cancelLoading: e
        }),
        notifyConfirm: e => this.props.onConfirm(e),
        notifyCancel: e => this.props.onCancel(e),
        notifyVisibleChange: e => this.props.onVisibleChange(e),
        notifyClickOutSide: e => this.props.onClickOutSide(e),
        focusCancelButton: () => {
          var i;
          let t = (i = this.footerRef?.current) === null || i === undefined ? undefined : i.querySelector("[data-type=cancel]");
          if (t != null) {
            t.focus({
              preventScroll: true
            });
          }
        },
        focusOkButton: () => {
          var i;
          let t = (i = this.footerRef?.current) === null || i === undefined ? undefined : i.querySelector("[data-type=ok]");
          if (t != null) {
            t.focus({
              preventScroll: true
            });
          }
        },
        focusPrevFocusElement: () => {
          var e;
          if ((e = this.popoverRef.current) !== null && e !== undefined) {
            e.focusTrigger();
          }
        }
      });
    }
    renderControls() {
      let {
        okText: e,
        cancelText: i,
        okType: t,
        cancelType: a,
        cancelButtonProps: o,
        okButtonProps: l
      } = this.props;
      let {
        cancelLoading: c,
        confirmLoading: d
      } = this.state;
      return reactCoreLibraryReexport.createElement(aiCreationLocaleWrapper.AiCreationLocale, {
        componentName: "Popconfirm"
      }, (_, h) => reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, reactCoreLibraryReexport.createElement(semiButtonWrapperComponent.SemiButtonWrapper, Object.assign({
        "data-type": "cancel",
        type: a,
        onClick: this.handleCancel,
        loading: c
      }, throttledOmitPathStringify.omitPathStringify(o, "autoFocus")), i || objectPathGetDefault.getObjectPathDefault(_, "cancel")), reactCoreLibraryReexport.createElement(semiButtonWrapperComponent.SemiButtonWrapper, Object.assign({
        "data-type": "ok",
        type: t,
        theme: "solid",
        onClick: this.handleConfirm,
        loading: d
      }, throttledOmitPathStringify.omitPathStringify(l, "autoFocus")), e || objectPathGetDefault.getObjectPathDefault(_, "confirm"))));
    }
    render() {
      let {
        direction: e
      } = this.context;
      let i = this.props;
      let {
        className: t,
        prefixCls: n,
        disabled: a,
        children: s,
        style: o,
        position: l = e === "rtl" ? "bottomRight" : "bottomLeft"
      } = i;
      let c = C(i, ["className", "prefixCls", "disabled", "children", "style", "position"]);
      if (a) {
        return s;
      }
      let {
        visible: d
      } = this.state;
      let _ = {
        onVisibleChange: this.handleVisibleChange,
        className: u.POPOVER,
        onClickOutSide: this.handleClickOutSide
      };
      if (this.isControlled("visible")) {
        _.trigger = "custom";
      }
      return reactCoreLibraryReexport.createElement(popoverComponent.PopoverComponent, Object.assign({
        ref: this.popoverRef
      }, c, {
        content: e => {
          let {
            initialFocusRef: i
          } = e;
          return this.renderConfirmPopCard({
            initialFocusRef: i
          });
        },
        visible: d,
        position: l
      }, _), s);
    }
  }
  j.contextType = createContextProvider.context;
  j.propTypes = {
    motion: _.oneOfType([_.bool, _.func, _.object]),
    disabled: _.bool,
    content: _.oneOfType([_.node, _.func]),
    title: _.any,
    prefixCls: _.string,
    className: _.string,
    style: _.object,
    icon: _.node,
    okText: _.string,
    okType: _.string,
    cancelText: _.string,
    cancelType: _.string,
    onCancel: _.func,
    onConfirm: _.func,
    onClickOutSide: _.func,
    onVisibleChange: _.func,
    visible: _.bool,
    defaultVisible: _.bool,
    okButtonProps: _.object,
    cancelButtonProps: _.object,
    stopPropagation: _.oneOfType([_.bool, _.string]),
    showCloseIcon: _.bool,
    zIndex: _.number,
    trigger: _.string,
    position: _.string
  };
  j.__SemiComponentName__ = "Popconfirm";
  j.defaultProps = commonFrontendUtils.configProxyHandler(j.__SemiComponentName__, {
    stopPropagation: true,
    trigger: "click",
    onVisibleChange: emptyExportFunction.emptyFunction,
    disabled: false,
    icon: reactCoreLibraryReexport.createElement(alertTriangleIcon.AlertTriangleIcon, {
      size: "extra-large"
    }),
    okType: "primary",
    cancelType: "tertiary",
    prefixCls: u.PREFIX,
    zIndex: 1030,
    showCloseIcon: true,
    onCancel: emptyExportFunction.emptyFunction,
    onConfirm: emptyExportFunction.emptyFunction,
    onClickOutSide: emptyExportFunction.emptyFunction
  });
  require.d(exports, {
    Popconfirm: function () {
      return j;
    }
  });
}