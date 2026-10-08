// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'CheckboxComponent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 10691.328b6088.js
         * chunkId: 10691
         * moduleId: 517004
         */
module.exports = function (module, exports, require) {
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var isBooleanUtil = require("is-boolean-util") /*id: 507922*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var propTypesFactoryWrapper = require("prop-types-factory-wrapper") /*id: 928010*/;
  var s = propTypesFactoryWrapper;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var c = classnamesUtils;
  var checkboxClassnameConfig = require("checkbox-classname-config") /*id: 911415*/;
  var componentAdapterBaseClass = require("component-adapter-base-class") /*id: 519643*/;
  var enterKeyCheck = require("enter-key-check") /*id: 943784*/;
  var pageNoopHandler = require("page-noop-handler") /*id: 73359*/;
  class m extends componentAdapterBaseClass.BaseAdapterClass {
    constructor(e) {
      super(Object.assign({}, e));
      this.clickState = false;
      this.handleFocusVisible = e => {
        let {
          target: t
        } = e;
        try {
          if (this.clickState) {
            this.clickState = false;
            return;
          }
          if (t.matches(":focus-visible")) {
            this._adapter.setFocusVisible(true);
          }
        } catch (e) {
          pageNoopHandler.noopHandler(true, "Warning: [Semi Checkbox] The current browser does not support the focus-visible");
        }
      };
      this.handleBlur = () => {
        this.clickState = false;
        this._adapter.setFocusVisible(false);
      };
    }
    init() {
      let {
        children: e,
        extra: t,
        extraId: n,
        addonId: i
      } = this.getProps();
      if (e && !i) {
        this._adapter.setAddonId();
      }
      if (t && !n) {
        this._adapter.setExtraId();
      }
    }
    notifyChange(e, t) {
      let n = this._adapter.generateEvent(e, t);
      this._adapter.notifyChange(n);
    }
    handleChange(e) {
      if (this.getProp("disabled")) {
        return;
      }
      if ((e == null ? undefined : e.type) === "click") {
        this.clickState = true;
      }
      this._adapter.focusCheckboxEntity();
      if (this._adapter.getIsInGroup()) {
        if (!this._adapter.getGroupDisabled()) {
          this.handleChangeInGroup(e);
        }
        return;
      }
      let t = !this.getState("checked");
      if (!this._isControlledComponent("checked")) {
        this.setChecked(t);
      }
      this.notifyChange(t, e);
    }
    handleChangeInGroup(e) {
      let {
        value: t
      } = this.getProps();
      let n = this._adapter.getGroupValue().includes(t);
      let i = this._adapter.generateEvent(!n, e);
      this._adapter.notifyChange(i);
      this._adapter.notifyGroupChange(i);
    }
    handleEnterPress(e) {
      if (enterKeyCheck.isEnterKey(e)) {
        this.handleChange(e);
      }
    }
    setChecked(e) {
      this._adapter.setNativeControlChecked(e);
    }
    destroy() {}
  }
  var sendMessageBoxContext = require("send-message-box-context") /*id: 344124*/;
  var iconComponentFactory = require("icon-component-factory") /*id: 129581*/;
  let f = iconComponentFactory.IconFactory(function (e) {
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
      d: "M17.4111 7.30848C18.0692 7.81171 18.1947 8.75312 17.6915 9.41119L11.1915 17.9112C10.909 18.2806 10.4711 18.4981 10.0061 18.5C9.54105 18.5019 9.10143 18.288 8.81592 17.9209L5.31592 13.4209C4.80731 12.767 4.92512 11.8246 5.57904 11.316C6.23296 10.8074 7.17537 10.9252 7.68398 11.5791L9.98988 14.5438L15.3084 7.58884C15.8116 6.93077 16.7531 6.80525 17.4111 7.30848Z",
      fill: "currentColor"
    }));
  }, "checkbox_tick");
  let b = iconComponentFactory.IconFactory(function (e) {
    return reactCoreLibraryReexport.createElement("svg", Object.assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      focusable: false,
      "aria-hidden": true
    }, e), reactCoreLibraryReexport.createElement("path", {
      d: "M5 12.5C5 11.6716 5.67157 11 6.5 11H17.5C18.3284 11 19 11.6716 19 12.5C19 13.3284 18.3284 14 17.5 14H6.5C5.67157 14 5 13.3284 5 12.5Z",
      fill: "currentColor"
    }));
  }, "checkbox_indeterminate");
  class y extends reactCoreLibraryReexport.PureComponent {
    blur() {
      this.inputEntity.blur();
    }
    focus() {
      let {
        preventScroll: e
      } = this.props;
      this.inputEntity.focus({
        preventScroll: e
      });
    }
    render() {
      let {
        indeterminate: e,
        checked: t,
        disabled: n,
        prefixCls: o,
        name: a,
        isPureCardType: r,
        addonId: s,
        extraId: d,
        focusInner: h,
        onInputFocus: p,
        onInputBlur: v
      } = this.props;
      let m = o || checkboxClassnameConfig.checkboxNames.PREFIX;
      let g = c({
        [`${m}-inner`]: true,
        [`${m}-inner-checked`]: !!t,
        [`${m}-inner-pureCardType`]: r
      }, checkboxClassnameConfig.checkboxNames.WRAPPER);
      let _ = c({
        [`${m}-inner-display`]: true,
        [`${m}-focus`]: h,
        [`${m}-focus-border`]: h && !t
      });
      let y = t ? reactCoreLibraryReexport.createElement(f, null) : e ? reactCoreLibraryReexport.createElement(b, null) : null;
      let k = {
        type: "checkbox",
        "aria-label": this.props["aria-label"],
        "aria-disabled": n,
        "aria-checked": t,
        "aria-labelledby": s,
        "aria-describedby": d || this.props["aria-describedby"],
        "aria-invalid": this.props["aria-invalid"],
        "aria-errormessage": this.props["aria-errormessage"],
        "aria-required": this.props["aria-required"],
        className: checkboxClassnameConfig.checkboxNames.INPUT,
        onChange: emptyExportFunction.emptyFunction,
        checked: t,
        disabled: n,
        onFocus: p,
        onBlur: v
      };
      if (a) {
        k.name = a;
      }
      return reactCoreLibraryReexport.createElement("span", {
        className: g
      }, reactCoreLibraryReexport.createElement("input", Object.assign({}, k, {
        ref: e => {
          this.inputEntity = e;
        }
      })), reactCoreLibraryReexport.createElement("span", {
        className: _
      }, y));
    }
  }
  y.contextType = sendMessageBoxContext.messageBoxContext;
  y.propTypes = {
    "aria-describedby": s.string,
    "aria-errormessage": s.string,
    "aria-invalid": s.bool,
    "aria-labelledby": s.string,
    "aria-required": s.bool,
    checked: s.bool,
    disabled: s.bool,
    onChange: s.func,
    children: s.node,
    grouped: s.bool,
    value: s.any,
    isPureCardType: s.bool,
    addonId: s.string,
    extraId: s.string,
    focusInner: s.bool,
    onInputFocus: s.func,
    onInputBlur: s.func,
    preventScroll: s.bool
  };
  y.defaultProps = {
    onChange: emptyExportFunction.emptyFunction
  };
  var reactFoundationComponent = require("react-foundation-component") /*id: 323591*/;
  var uniqueIdUtils = require("unique-id-utils") /*id: 912031*/;
  class x extends reactFoundationComponent.FoundationComponent {
    get adapter() {
      return Object.assign(Object.assign({}, super.adapter), {
        setNativeControlChecked: e => {
          this.setState({
            checked: e
          });
        },
        notifyChange: e => {
          let {
            onChange: t
          } = this.props;
          if (t) {
            t(e);
          }
        },
        generateEvent: (e, t) => {
          let {
            props: n
          } = this;
          return {
            target: Object.assign(Object.assign({}, n), {
              checked: e
            }),
            stopPropagation: () => {
              t.stopPropagation();
            },
            preventDefault: () => {
              t.preventDefault();
            },
            nativeEvent: {
              stopImmediatePropagation: () => {
                if (t.nativeEvent && typeof t.nativeEvent.stopImmediatePropagation == "function") {
                  t.nativeEvent.stopImmediatePropagation();
                }
              }
            }
          };
        },
        getIsInGroup: () => this.isInGroup(),
        getGroupValue: () => this.context && this.context.checkboxGroup.value || [],
        notifyGroupChange: e => {
          this.context.checkboxGroup.onChange(e);
        },
        getGroupDisabled: () => this.context && this.context.checkboxGroup.disabled,
        setAddonId: () => {
          this.setState({
            addonId: uniqueIdUtils.generateRandomId({
              prefix: "addon"
            })
          });
        },
        setExtraId: () => {
          this.setState({
            extraId: uniqueIdUtils.generateRandomId({
              prefix: "extra"
            })
          });
        },
        setFocusVisible: e => {
          this.setState({
            focusVisible: e
          });
        },
        focusCheckboxEntity: () => {
          this.focus();
        }
      });
    }
    constructor(e) {
      super(e);
      this.handleChange = e => this.foundation.handleChange(e);
      this.handleEnterPress = e => this.foundation.handleEnterPress(e);
      this.handleFocusVisible = e => {
        this.foundation.handleFocusVisible(e);
      };
      this.handleBlur = e => {
        this.foundation.handleBlur();
      };
      this.state = {
        checked: e.checked || e.defaultChecked || false,
        addonId: e.addonId,
        extraId: e.extraId,
        focusVisible: false
      };
      this.checkboxEntity = null;
      this.foundation = new m(this.adapter);
    }
    componentDidUpdate(e) {
      if (this.props.checked !== e.checked) {
        if (isUndefinedCheck.isUndefined(this.props.checked)) {
          this.foundation.setChecked(false);
        } else if (isBooleanUtil.isBoolean(this.props.checked)) {
          this.foundation.setChecked(this.props.checked);
        }
      }
    }
    isInGroup() {
      return !!this.context && !!this.context.checkboxGroup && !!("value" in this.props);
    }
    focus() {
      if (this.checkboxEntity) {
        this.checkboxEntity.focus();
      }
    }
    blur() {
      if (this.checkboxEntity) {
        this.checkboxEntity.blur();
      }
    }
    render() {
      let {
        disabled: e,
        style: t,
        prefixCls: n,
        className: i,
        indeterminate: o,
        children: a,
        onMouseEnter: r,
        onMouseLeave: s,
        extra: d,
        value: h,
        role: p,
        tabIndex: v,
        id: m,
        type: g
      } = this.props;
      let {
        checked: _,
        addonId: f,
        extraId: b,
        focusVisible: k
      } = this.state;
      let w = {
        checked: _,
        disabled: e
      };
      let x = this.isInGroup();
      if (x) {
        if (this.context.checkboxGroup.value) {
          let e = (this.context.checkboxGroup.value || []).includes(h);
          w.checked = e;
        }
        if (this.context.checkboxGroup.disabled) {
          w.disabled = this.context.checkboxGroup.disabled || this.props.disabled;
        }
        let {
          isCardType: e,
          isPureCardType: t
        } = this.context.checkboxGroup;
        w.isCardType = e;
        w.isPureCardType = t;
        w.name = this.context.checkboxGroup.name;
      } else {
        w.isPureCardType = g === checkboxClassnameConfig.checkboxGroupCfg.TYPE_PURECARD;
        w.isCardType = g === checkboxClassnameConfig.checkboxGroupCfg.TYPE_CARD || w.isPureCardType;
      }
      let C = n || checkboxClassnameConfig.checkboxNames.PREFIX;
      let E = w.isCardType || w.isPureCardType;
      let I = c(C, {
        [`${C}-disabled`]: w.disabled,
        [`${C}-indeterminate`]: o,
        [`${C}-checked`]: w.checked,
        [`${C}-unChecked`]: !w.checked,
        [`${C}-cardType`]: w.isCardType,
        [`${C}-cardType_disabled`]: w.disabled && w.isCardType,
        [`${C}-cardType_unDisabled`]: !w.disabled || !w.isCardType,
        [`${C}-cardType_checked`]: w.isCardType && w.checked && !w.disabled,
        [`${C}-cardType_checked_disabled`]: w.isCardType && w.checked && w.disabled,
        [i]: !!i,
        [`${C}-focus`]: k && E
      });
      let S = c(`${C}-extra`, {
        [`${C}-cardType_extra_noChildren`]: w.isCardType && !a
      });
      if (x) {
        this.context.checkboxGroup.name;
      }
      let T = this.props["x-semi-children-alias"] || "children";
      return reactCoreLibraryReexport.createElement("span", Object.assign({
        role: p,
        tabIndex: v,
        style: t,
        className: I,
        id: m,
        onMouseEnter: r,
        onMouseLeave: s,
        onClick: this.handleChange,
        onKeyPress: this.handleEnterPress,
        "aria-labelledby": this.props["aria-labelledby"]
      }, this.getDataAttr(this.props)), reactCoreLibraryReexport.createElement(y, Object.assign({}, this.props, w, {
        addonId: a && f,
        extraId: d && b,
        isPureCardType: w.isPureCardType,
        ref: e => {
          this.checkboxEntity = e;
        },
        focusInner: k && !E,
        onInputFocus: this.handleFocusVisible,
        onInputBlur: this.handleBlur
      })), a || d ? reactCoreLibraryReexport.createElement("div", {
        className: `${C}-content`
      }, a ? reactCoreLibraryReexport.createElement("span", {
        id: f,
        className: `${C}-addon`,
        "x-semi-prop": T
      }, a) : null, d ? reactCoreLibraryReexport.createElement("div", {
        id: b,
        className: S,
        "x-semi-prop": "extra"
      }, d) : null) : null);
    }
  }
  x.contextType = sendMessageBoxContext.messageBoxContext;
  x.propTypes = {
    "aria-describedby": s.string,
    "aria-errormessage": s.string,
    "aria-invalid": s.bool,
    "aria-labelledby": s.string,
    "aria-required": s.bool,
    checked: s.bool,
    defaultChecked: s.bool,
    disabled: s.bool,
    indeterminate: s.bool,
    onChange: s.func,
    value: s.any,
    style: s.object,
    className: s.string,
    prefixCls: s.string,
    onMouseEnter: s.func,
    onMouseLeave: s.func,
    extra: s.node,
    index: s.number,
    "aria-label": s.string,
    tabIndex: s.number,
    preventScroll: s.bool,
    type: s.string
  };
  x.defaultProps = {
    defaultChecked: false,
    indeterminate: false,
    onChange: emptyExportFunction.emptyFunction,
    onMouseEnter: emptyExportFunction.emptyFunction,
    onMouseLeave: emptyExportFunction.emptyFunction,
    type: "default"
  };
  x.elementType = "Checkbox";
  var C = x;
  require.d(exports, {
    CheckboxComponent: function () {
      return C;
    }
  });
}