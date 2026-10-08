// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'InputComponent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 410861
         */
module.exports = function (module, exports, require) {
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var c = classnamesUtils;
  var propTypesFactoryWrapper = require("prop-types-factory-wrapper") /*id: 928010*/;
  var u = propTypesFactoryWrapper;
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var safeObjectSetWrapper = require("safe-object-set-wrapper") /*id: 784610*/;
  var componentAdapterBaseClass = require("component-adapter-base-class") /*id: 519643*/;
  var semiInputConstants = require("semi-input-constants") /*id: 859366*/;
  var keyboardKeyCodes_3 = require("keyboard-key-codes_3") /*id: 174510*/;
  class g extends componentAdapterBaseClass.BaseAdapterClass {
    static get inputDefaultAdapter() {
      return {
        notifyChange: emptyExportFunction.emptyFunction,
        setValue: emptyExportFunction.emptyFunction
      };
    }
    constructor(e) {
      super(Object.assign(Object.assign({}, g.inputDefaultAdapter), e));
    }
    init() {
      this._setInitValue();
    }
    destroy() {
      if (this._timer) {
        clearTimeout(this._timer);
        this._timer = null;
      }
    }
    setDisable() {}
    _setInitValue() {
      let {
        defaultValue: e,
        value: t
      } = this.getProps();
      let n = e;
      if (this._isControlledComponent()) {
        n = t;
      }
      this._adapter.setValue(n);
    }
    setValue(e) {
      this._adapter.setValue(e);
    }
    handleChange(e, t) {
      let {
        maxLength: n,
        minLength: i,
        getValueLength: o
      } = this._adapter.getProps();
      let a = e;
      if (n && isFunctionUtil_1.isFunction(o)) {
        a = this.handleVisibleMaxLength(e);
      }
      if (i && isFunctionUtil_1.isFunction(o)) {
        this.handleVisibleMinLength(a);
      }
      if (!this._isControlledComponent()) {
        this._adapter.setValue(a);
      }
      this._adapter.notifyChange(a, t);
    }
    handleVisibleMinLength(e) {
      let {
        minLength: t,
        getValueLength: n
      } = this._adapter.getProps();
      let {
        minLength: i
      } = this._adapter.getStates();
      if (isNumberUtil.isNumber(t) && t >= 0 && isFunctionUtil_1.isFunction(n) && isStringTypeCheck.isString(e)) {
        let r = n(e);
        if (r < t) {
          let n = e.length + (t - r);
          if (n !== i) {
            this._adapter.setMinLength(n);
          }
        } else if (i !== t) {
          this._adapter.setMinLength(t);
        }
      }
    }
    handleVisibleMaxLength(e) {
      let {
        maxLength: t,
        getValueLength: n
      } = this._adapter.getProps();
      if (isNumberUtil.isNumber(t) && t >= 0 && isFunctionUtil_1.isFunction(n) && isStringTypeCheck.isString(e)) {
        if (n(e) > t) {
          return this.handleTruncateValue(e, t);
        } else {
          return e;
        }
      }
    }
    handleTruncateValue(e, t) {
      let {
        getValueLength: n
      } = this._adapter.getProps();
      if (!isFunctionUtil_1.isFunction(n)) {
        return e.slice(0, t);
      }
      {
        let i = "";
        for (let r = 1, o = e.length; r <= o; r++) {
          let o = e.slice(0, r);
          if (n(o) > t) {
            break;
          }
          i = o;
        }
        return i;
      }
    }
    handleClear(e) {
      let t = e;
      if (this._isControlledComponent("value")) {
        this._adapter.setState({
          isFocus: false
        });
      } else {
        this._adapter.setState({
          value: "",
          isFocus: false
        });
      }
      if (!t || typeof t != "object") {
        t = {};
      }
      safeObjectSetWrapper.safeObjectSet(t, semiInputConstants.inputConstants.CLEARBTN_CLICKED_EVENT_FLAG, true);
      this._adapter.notifyChange("", t);
      this._adapter.notifyClear(t);
      if (t) {
        this.stopPropagation(t);
      }
    }
    handleClick(e) {
      let {
        disabled: t
      } = this._adapter.getProps();
      let {
        isFocus: n
      } = this._adapter.getStates();
      if (!t && !n && this._adapter.isEventTarget(e)) {
        this._adapter.focusInput();
        this._adapter.toggleFocusing(true);
      }
    }
    handleModeChange(e) {
      if (e === "password") {
        this._adapter.setEyeClosed(true);
      } else {
        this._adapter.setEyeClosed(false);
      }
    }
    handleClickEye(e) {
      let t = this._adapter.getState("eyeClosed");
      this._adapter.focusInput();
      this._adapter.toggleFocusing(true);
      this._adapter.setEyeClosed(!t);
    }
    handleInputType(e) {
      let t = this._adapter.getProp("mode");
      let n = this._adapter.getState("eyeClosed");
      if (t === "password") {
        if (n) {
          return "password";
        } else {
          return "text";
        }
      } else {
        return e;
      }
    }
    handleMouseDown(e) {
      e.preventDefault();
    }
    handleMouseUp(e) {
      e.preventDefault();
    }
    handleBlur(e) {
      let {
        value: t
      } = this.getStates();
      this._adapter.toggleFocusing(false);
      this._adapter.notifyBlur(t, e);
    }
    handleFocus(e) {
      let {
        value: t
      } = this.getStates();
      this._adapter.toggleFocusing(true);
      this._adapter.notifyFocus(t, e);
    }
    handleInput(e) {
      this._adapter.notifyInput(e);
    }
    handleKeyDown(e) {
      this._adapter.notifyKeyDown(e);
    }
    handleKeyUp(e) {
      this._adapter.notifyKeyUp(e);
    }
    handleKeyPress(e) {
      this._adapter.notifyKeyPress(e);
      if (e.key === keyboardKeyCodes_3.enterKeyName) {
        this._adapter.notifyEnterPress(e);
      }
    }
    isAllowClear() {
      let {
        value: e,
        isFocus: t,
        isHovering: n
      } = this._adapter.getStates();
      let {
        showClear: i,
        disabled: r,
        showClearIgnoreDisabled: o
      } = this._adapter.getProps();
      return e && i && (!r || o) && (t || n);
    }
    handleClickPrefixOrSuffix(e) {
      let {
        disabled: t
      } = this._adapter.getProps();
      let {
        isFocus: n
      } = this._adapter.getStates();
      if (!t && !n) {
        this._adapter.focusInput();
        this._adapter.toggleFocusing(true);
      }
    }
    handlePreventMouseDown(e) {
      if (e && isFunctionUtil_1.isFunction(e.preventDefault)) {
        e.preventDefault();
      }
    }
    handleModeEnterPress(e) {
      if (["Enter", " "].includes(e == null ? undefined : e.key)) {
        this.handlePreventMouseDown(e);
        this.handleClickEye(e);
      }
    }
  }
  var commonFrontendUtils = require("common-frontend-utils") /*id: 264233*/;
  var reactFoundationComponent = require("react-foundation-component") /*id: 323591*/;
  var clearIcon = require("clear-icon") /*id: 137025*/;
  let w = require("icon-component-factory") /*id: 129581*/.IconFactory(function (e) {
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
      d: "M21.7071 3.70711C22.0976 3.31658 22.0976 2.68342 21.7071 2.29289C21.3166 1.90237 20.6834 1.90237 20.2929 2.29289L17.3135 5.27233C15.8114 4.50566 14.0321 4 12 4C5 4 1 10 1 12C1 13.1757 2.38219 15.7335 4.94345 17.6423L2.29289 20.2929C1.90237 20.6834 1.90237 21.3166 2.29289 21.7071C2.68342 22.0976 3.31658 22.0976 3.70711 21.7071L21.7071 3.70711ZM7.8284 14.7574L9.29237 13.2934C9.10495 12.9018 9 12.4631 9 12C9 10.3431 10.3431 9 12 9C12.4631 9 12.9018 9.10495 13.2934 9.29237L14.7574 7.8284C13.967 7.30488 13.0191 7 12 7C9.23858 7 7 9.23858 7 12C7 13.0191 7.30488 13.967 7.8284 14.7574Z",
      fill: "currentColor"
    }), reactCoreLibraryReexport.createElement("path", {
      d: "M12 20C10.7789 20 9.64914 19.8174 8.61594 19.5054L11.1871 16.9342C11.4516 16.9775 11.7232 17 12 17C14.7614 17 17 14.7614 17 12C17 11.7232 16.9775 11.4516 16.9342 11.1871L20.5032 7.61808C22.1342 9.27317 23 11.0695 23 12C23 14 19 20 12 20Z",
      fill: "currentColor"
    }));
  }, "eye_closed_solid");
  var eyeOpenedIcon = require("eye-opened-icon") /*id: 186127*/;
  function x(e, t) {
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
  let C = semiInputConstants.inputPrefixConfig.PREFIX;
  let k = semiInputConstants.inputConstants.SIZE;
  let T = semiInputConstants.inputConstants.STATUS;
  let E = semiInputConstants.inputConstants.MODE;
  class I extends reactFoundationComponent.FoundationComponent {
    constructor(e) {
      super(e);
      this.handleClear = e => {
        this.foundation.handleClear(e);
      };
      this.handleClick = e => {
        this.foundation.handleClick(e);
      };
      this.handleMouseOver = e => {
        this.setState({
          isHovering: true
        });
      };
      this.handleMouseLeave = e => {
        this.setState({
          isHovering: false
        });
      };
      this.handleModeChange = e => {
        this.foundation.handleModeChange(e);
      };
      this.handleClickEye = e => {
        this.foundation.handleClickEye(e);
      };
      this.handleMouseDown = e => {
        this.foundation.handleMouseDown(e);
      };
      this.handleMouseUp = e => {
        this.foundation.handleMouseUp(e);
      };
      this.handleModeEnterPress = e => {
        this.foundation.handleModeEnterPress(e);
      };
      this.handleClickPrefixOrSuffix = e => {
        this.foundation.handleClickPrefixOrSuffix(e);
      };
      this.handlePreventMouseDown = e => {
        this.foundation.handlePreventMouseDown(e);
      };
      this.state = {
        value: "",
        cachedValue: null,
        disabled: false,
        props: {},
        isFocus: false,
        isHovering: false,
        eyeClosed: e.mode === "password",
        minLength: e.minLength
      };
      this.inputRef = reactCoreLibraryReexport.createRef();
      this.prefixRef = reactCoreLibraryReexport.createRef();
      this.suffixRef = reactCoreLibraryReexport.createRef();
      this.foundation = new g(this.adapter);
    }
    get adapter() {
      return Object.assign(Object.assign({}, super.adapter), {
        setValue: e => this.setState({
          value: e
        }),
        setEyeClosed: e => this.setState({
          eyeClosed: e
        }),
        toggleFocusing: e => {
          this.setState({
            isFocus: e
          });
        },
        focusInput: () => {
          let {
            preventScroll: e
          } = this.props;
          let t = this.inputRef && this.inputRef.current;
          if (t) {
            t.focus({
              preventScroll: e
            });
          }
        },
        toggleHovering: e => this.setState({
          isHovering: e
        }),
        getIfFocusing: () => this.state.isFocus,
        notifyChange: (e, t) => this.props.onChange(e, t),
        notifyBlur: (e, t) => this.props.onBlur(t),
        notifyFocus: (e, t) => this.props.onFocus(t),
        notifyInput: e => this.props.onInput(e),
        notifyKeyPress: e => this.props.onKeyPress(e),
        notifyKeyDown: e => this.props.onKeyDown(e),
        notifyKeyUp: e => this.props.onKeyUp(e),
        notifyEnterPress: e => this.props.onEnterPress(e),
        notifyClear: e => this.props.onClear(e),
        setMinLength: e => this.setState({
          minLength: e
        }),
        isEventTarget: e => e && e.target === e.currentTarget
      });
    }
    static getDerivedStateFromProps(e, t) {
      let n = {};
      if (e.value !== t.cachedValue) {
        n.value = e.value;
        n.cachedValue = e.value;
      }
      return n;
    }
    componentDidUpdate(e) {
      let {
        mode: t
      } = this.props;
      if (e.mode !== t) {
        this.handleModeChange(t);
      }
    }
    componentDidMount() {
      this.foundation.init();
      let {
        disabled: e,
        autoFocus: t,
        preventScroll: n
      } = this.props;
      if (!e && (t || this.props.autofocus)) {
        this.inputRef.current.focus({
          preventScroll: n
        });
      }
    }
    renderPrepend() {
      let {
        addonBefore: e
      } = this.props;
      if (e) {
        let t = c({
          [`${C}-prepend`]: true,
          [`${C}-prepend-text`]: e && isStringTypeCheck.isString(e),
          [`${C}-prepend-icon`]: commonFrontendUtils.isIconElement(e)
        });
        return reactCoreLibraryReexport.createElement("div", {
          className: t,
          "x-semi-prop": "addonBefore"
        }, e);
      }
      return null;
    }
    renderAppend() {
      let {
        addonAfter: e
      } = this.props;
      if (e) {
        let t = c({
          [`${C}-append`]: true,
          [`${C}-append-text`]: e && isStringTypeCheck.isString(e),
          [`${C}-append-icon`]: commonFrontendUtils.isIconElement(e)
        });
        return reactCoreLibraryReexport.createElement("div", {
          className: t,
          "x-semi-prop": "addonAfter"
        }, e);
      }
      return null;
    }
    renderClearBtn() {
      let e = c(`${C}-clearbtn`);
      let {
        clearIcon: t
      } = this.props;
      if (this.foundation.isAllowClear()) {
        return reactCoreLibraryReexport.createElement("div", {
          className: e,
          onMouseDown: this.handleClear
        }, t || reactCoreLibraryReexport.createElement(clearIcon.ClearIcon, null));
      } else {
        return null;
      }
    }
    renderModeBtn() {
      let {
        eyeClosed: e
      } = this.state;
      let {
        mode: t,
        disabled: n
      } = this.props;
      let i = c(`${C}-modebtn`);
      let r = e ? reactCoreLibraryReexport.createElement(w, null) : reactCoreLibraryReexport.createElement(eyeOpenedIcon.EyeOpenedIcon, null);
      if (t !== "password" || n) {
        return null;
      } else {
        return reactCoreLibraryReexport.createElement("div", {
          role: "button",
          tabIndex: 0,
          "aria-label": e ? "Show password" : "Hidden password",
          className: i,
          onClick: this.handleClickEye,
          onMouseDown: this.handleMouseDown,
          onMouseUp: this.handleMouseUp,
          onKeyPress: this.handleModeEnterPress
        }, r);
      }
    }
    renderPrefix() {
      let {
        prefix: e,
        insetLabel: t,
        insetLabelId: n
      } = this.props;
      let i = e || t;
      if (!i) {
        return null;
      }
      let r = c({
        [`${C}-prefix`]: true,
        [`${C}-inset-label`]: t,
        [`${C}-prefix-text`]: i && isStringTypeCheck.isString(i),
        [`${C}-prefix-icon`]: commonFrontendUtils.isIconElement(i)
      });
      return reactCoreLibraryReexport.createElement("div", {
        className: r,
        onMouseDown: this.handlePreventMouseDown,
        onClick: this.handleClickPrefixOrSuffix,
        id: n,
        "x-semi-prop": "prefix,insetLabel"
      }, i);
    }
    renderSuffix(e) {
      let {
        suffix: t,
        hideSuffix: n
      } = this.props;
      if (!t) {
        return null;
      }
      let i = c({
        [`${C}-suffix`]: true,
        [`${C}-suffix-text`]: t && isStringTypeCheck.isString(t),
        [`${C}-suffix-icon`]: commonFrontendUtils.isIconElement(t),
        [`${C}-suffix-hidden`]: e && !!n
      });
      return reactCoreLibraryReexport.createElement("div", {
        className: i,
        onMouseDown: this.handlePreventMouseDown,
        onClick: this.handleClickPrefixOrSuffix,
        "x-semi-prop": "suffix"
      }, t);
    }
    getInputRef() {
      let {
        forwardRef: e
      } = this.props;
      if (!isUndefinedCheck.isUndefined(e)) {
        if (typeof e == "function") {
          return t => {
            e(t);
            this.inputRef = {
              current: t
            };
          };
        }
        if (Object.prototype.toString.call(e) === "[object Object]") {
          this.inputRef = e;
          return e;
        }
      }
      return this.inputRef;
    }
    render() {
      let e = this.props;
      let {
        addonAfter: t,
        addonBefore: n,
        autoFocus: i,
        clearIcon: o,
        className: a,
        disabled: l,
        defaultValue: d,
        placeholder: u,
        prefix: h,
        mode: f,
        insetLabel: p,
        insetLabelId: m,
        validateStatus: v,
        type: g,
        readonly: b,
        size: y,
        suffix: w,
        style: S,
        showClear: k,
        onEnterPress: T,
        onClear: E,
        hideSuffix: I,
        inputStyle: j,
        forwardRef: R,
        maxLength: N,
        getValueLength: $,
        preventScroll: M,
        borderless: P,
        showClearIgnoreDisabled: L,
        onlyBorder: D
      } = e;
      let O = x(e, ["addonAfter", "addonBefore", "autoFocus", "clearIcon", "className", "disabled", "defaultValue", "placeholder", "prefix", "mode", "insetLabel", "insetLabelId", "validateStatus", "type", "readonly", "size", "suffix", "style", "showClear", "onEnterPress", "onClear", "hideSuffix", "inputStyle", "forwardRef", "maxLength", "getValueLength", "preventScroll", "borderless", "showClearIgnoreDisabled", "onlyBorder"]);
      let {
        value: Z,
        isFocus: A,
        minLength: W
      } = this.state;
      let B = this.foundation.isAllowClear();
      let F = commonFrontendUtils.isIconElement(w);
      let z = this.getInputRef();
      let H = `${C}-wrapper`;
      let V = c(H, a, {
        [`${C}-wrapper__with-prefix`]: h || p,
        [`${C}-wrapper__with-suffix`]: w,
        [`${C}-wrapper__with-suffix-hidden`]: B && !!I,
        [`${C}-wrapper__with-suffix-icon`]: F,
        [`${C}-wrapper__with-append`]: n,
        [`${C}-wrapper__with-prepend`]: t,
        [`${C}-wrapper__with-append-only`]: n && !t,
        [`${C}-wrapper__with-prepend-only`]: !n && t,
        [`${H}-readonly`]: b,
        [`${H}-disabled`]: l,
        [`${H}-warning`]: v === "warning",
        [`${H}-error`]: v === "error",
        [`${H}-focus`]: A,
        [`${H}-clearable`]: k,
        [`${H}-modebtn`]: f === "password",
        [`${H}-hidden`]: g === "hidden",
        [`${H}-${y}`]: y,
        [`${C}-borderless`]: P,
        [`${C}-only_border`]: D != null
      });
      let U = c(C, {
        [`${C}-${y}`]: y,
        [`${C}-disabled`]: l,
        [`${C}-sibling-clearbtn`]: this.foundation.isAllowClear(),
        [`${C}-sibling-modebtn`]: f === "password"
      });
      let X = Object.assign(Object.assign({}, O), {
        style: j,
        className: U,
        disabled: l,
        readOnly: b,
        type: this.foundation.handleInputType(g),
        placeholder: u,
        onInput: e => this.foundation.handleInput(e),
        onChange: e => this.foundation.handleChange(e.target.value, e),
        onFocus: e => this.foundation.handleFocus(e),
        onBlur: e => this.foundation.handleBlur(e),
        onKeyUp: e => this.foundation.handleKeyUp(e),
        onKeyDown: e => this.foundation.handleKeyDown(e),
        onKeyPress: e => this.foundation.handleKeyPress(e),
        value: Z == null ? "" : Z
      });
      if (!isFunctionUtil_1.isFunction($)) {
        X.maxLength = N;
      }
      if (W) {
        X.minLength = W;
      }
      if (v === "error") {
        X["aria-invalid"] = "true";
      }
      let K = Object.assign({}, S);
      if (D !== undefined) {
        K = Object.assign({
          borderWidth: D
        }, S);
      }
      return reactCoreLibraryReexport.createElement("div", {
        className: V,
        style: K,
        onMouseEnter: e => this.handleMouseOver(e),
        onMouseLeave: e => this.handleMouseLeave(e),
        onClick: e => this.handleClick(e)
      }, this.renderPrepend(), this.renderPrefix(), reactCoreLibraryReexport.createElement("input", Object.assign({}, X, {
        ref: z
      })), this.renderClearBtn(), this.renderSuffix(B), this.renderModeBtn(), this.renderAppend());
    }
  }
  I.propTypes = {
    "aria-label": u.string,
    "aria-labelledby": u.string,
    "aria-invalid": u.bool,
    "aria-errormessage": u.string,
    "aria-describedby": u.string,
    "aria-required": u.bool,
    addonBefore: u.node,
    addonAfter: u.node,
    clearIcon: u.node,
    prefix: u.node,
    suffix: u.node,
    mode: u.oneOf(E),
    value: u.any,
    defaultValue: u.any,
    disabled: u.bool,
    readonly: u.bool,
    autoFocus: u.bool,
    type: u.string,
    showClear: u.bool,
    hideSuffix: u.bool,
    placeholder: u.any,
    size: u.oneOf(k),
    className: u.string,
    style: u.object,
    validateStatus: u.oneOf(T),
    onClear: u.func,
    onChange: u.func,
    onBlur: u.func,
    onFocus: u.func,
    onInput: u.func,
    onKeyDown: u.func,
    onKeyUp: u.func,
    onKeyPress: u.func,
    onEnterPress: u.func,
    insetLabel: u.node,
    insetLabelId: u.string,
    inputStyle: u.object,
    getValueLength: u.func,
    preventScroll: u.bool,
    borderless: u.bool
  };
  I.defaultProps = {
    addonBefore: "",
    addonAfter: "",
    prefix: "",
    suffix: "",
    readonly: false,
    type: "text",
    showClear: false,
    hideSuffix: false,
    placeholder: "",
    size: "default",
    className: "",
    onClear: emptyExportFunction.emptyFunction,
    onChange: emptyExportFunction.emptyFunction,
    onBlur: emptyExportFunction.emptyFunction,
    onFocus: emptyExportFunction.emptyFunction,
    onInput: emptyExportFunction.emptyFunction,
    onKeyDown: emptyExportFunction.emptyFunction,
    onKeyUp: emptyExportFunction.emptyFunction,
    onKeyPress: emptyExportFunction.emptyFunction,
    onEnterPress: emptyExportFunction.emptyFunction,
    validateStatus: "default",
    borderless: false
  };
  var j = reactCoreLibraryReexport.forwardRef((e, t) => reactCoreLibraryReexport.createElement(I, Object.assign({}, e, {
    forwardRef: t
  })));
  require.d(exports, {
    InputComponent: function () {
      return j;
    }
  });
}