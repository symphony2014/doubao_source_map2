// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'TextArea'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17574.32d72dbf.js
         * chunkId: 17574
         * moduleId: 252810
         */
module.exports = function (module, exports, require) {
  var debounceUtilWrapper = require("debounce-util-wrapper") /*id: 213804*/;
  var isObjectOrFunction_1_1 = require("is-object-or-function_1_1") /*id: 433743*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var throttledOmitPathStringify = require("throttled-omit-path-stringify") /*id: 159496*/;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var u = classnamesUtils;
  var propTypesFactoryWrapper = require("prop-types-factory-wrapper") /*id: 928010*/;
  var h = propTypesFactoryWrapper;
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var componentAdapterBaseClass = require("component-adapter-base-class") /*id: 519643*/;
  let y = null;
  let v = {
    "min-height": "0",
    "max-height": "none",
    height: "0",
    visibility: "hidden",
    overflow: "hidden",
    position: "absolute",
    "z-index": "-1000",
    top: "0",
    right: "0"
  };
  let b = e => {
    Object.keys(v).forEach(t => {
      e.style.setProperty(t, v[t], "important");
    });
  };
  let w = (e, t) => {
    let n = e.scrollHeight;
    if (t.sizingStyle.boxSizing === "border-box") {
      return n + t.borderSize;
    } else {
      return n - t.paddingSize;
    }
  };
  var throttledPathFilterStringify = require("throttled-path-filter-stringify") /*id: 245841*/;
  let x = ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "boxSizing", "fontFamily", "fontSize", "fontStyle", "fontWeight", "letterSpacing", "lineHeight", "paddingBottom", "paddingLeft", "paddingRight", "paddingTop", "tabSize", "textIndent", "textRendering", "textTransform", "width"];
  var O = e => {
    let t = window.getComputedStyle(e);
    if (t === null) {
      return null;
    }
    let n = throttledPathFilterStringify.throttledPathStr(t, x);
    let {
      boxSizing: o
    } = n;
    if (o === "") {
      return null;
    }
    let r = parseFloat(n.paddingBottom) + parseFloat(n.paddingTop);
    let a = parseFloat(n.borderBottomWidth) + parseFloat(n.borderTopWidth);
    return {
      sizingStyle: n,
      paddingSize: r,
      borderSize: a
    };
  };
  class C extends componentAdapterBaseClass.BaseAdapterClass {
    static get textAreaDefaultAdapter() {
      return {
        notifyChange: emptyExportFunction.emptyFunction,
        setValue: emptyExportFunction.emptyFunction,
        toggleFocusing: emptyExportFunction.emptyFunction,
        toggleHovering: emptyExportFunction.emptyFunction,
        notifyFocus: emptyExportFunction.emptyFunction,
        notifyBlur: emptyExportFunction.emptyFunction,
        notifyKeyDown: emptyExportFunction.emptyFunction,
        notifyEnterPress: emptyExportFunction.emptyFunction
      };
    }
    constructor(e) {
      super(Object.assign(Object.assign({}, C.textAreaDefaultAdapter), e));
      this.resizeTextarea = () => {
        let {
          height: t
        } = this.getStates();
        let {
          rows: n,
          autosize: o
        } = this.getProps();
        let r = this._adapter.getRef();
        let a = O(r);
        if (!a) {
          return;
        }
        let [i, s] = o !== null && typeof o == "object" ? [(o == null ? undefined : o.minRows) ?? n, o == null ? undefined : o.maxRows] : [n];
        let l = function (e, t, n = 1, o = Infinity) {
          if (!y) {
            (y = document.createElement("textarea")).setAttribute("tab-index", "-1");
            y.setAttribute("aria-hidden", "true");
            b(y);
          }
          if (y.parentNode === null) {
            document.body.appendChild(y);
          }
          let {
            paddingSize: r,
            borderSize: a,
            sizingStyle: i
          } = e;
          let {
            boxSizing: s
          } = i;
          Object.keys(i).forEach(e => {
            y.style[e] = i[e];
          });
          b(y);
          y.value = t;
          let l = w(y, e);
          y.value = "x";
          let c = w(y, e) - r - a;
          let d = c * n;
          if (s === "border-box") {
            d = d + r + a;
          }
          l = Math.max(d, l);
          let u = c * o;
          if (s === "border-box") {
            u = u + r + a;
          }
          return l = Math.min(u, l);
        }(a, r.value || r.placeholder || "x", i, s);
        if (t !== l) {
          this._adapter.notifyHeightUpdate(l);
          r.style.height = `${l}px`;
          return;
        }
      };
    }
    init() {
      this.setInitValue();
    }
    destroy() {}
    setInitValue() {
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
    handleValueChange(e) {
      this._adapter.setValue(e);
    }
    handleChange(e, t) {
      let {
        maxLength: n,
        minLength: o,
        getValueLength: r
      } = this._adapter.getProps();
      let a = e;
      if (n && isFunctionUtil_1.isFunction(r)) {
        a = this.handleVisibleMaxLength(e);
      }
      if (o && isFunctionUtil_1.isFunction(r)) {
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
        minLength: o
      } = this._adapter.getStates();
      if (isNumberUtil.isNumber(t) && t >= 0 && isFunctionUtil_1.isFunction(n) && isStringTypeCheck.isString(e)) {
        let r = n(e);
        if (r < t) {
          let n = e.length + (t - r);
          if (n !== o) {
            this._adapter.setMinLength(n);
          }
        } else if (o !== t) {
          this._adapter.setMinLength(t);
        }
      }
    }
    handleVisibleMaxLength(e) {
      let {
        maxLength: t,
        getValueLength: n
      } = this._adapter.getProps();
      if (isNumberUtil.isNumber(t) && t >= 0 && isStringTypeCheck.isString(e)) {
        if (isFunctionUtil_1.isFunction(n)) {
          if (n(e) > t) {
            return this.handleTruncateValue(e, t);
          }
        } else if (e.length > t) {
          return e.slice(0, t);
        }
        return e;
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
        let o = "";
        for (let r = 1, a = e.length; r <= a; r++) {
          let a = e.slice(0, r);
          if (n(a) > t) {
            break;
          }
          o = a;
        }
        return o;
      }
    }
    handleFocus(e) {
      let {
        value: t
      } = this.getStates();
      this._adapter.toggleFocusing(true);
      this._adapter.notifyFocus(t, e);
    }
    handleBlur(e) {
      let {
        value: t
      } = this.getStates();
      let {
        maxLength: n
      } = this.getProps();
      let o = t;
      if (n && (o = this.handleVisibleMaxLength(t)) !== t) {
        if (!this._isControlledComponent()) {
          this._adapter.setValue(o);
        }
        this._adapter.notifyChange(o, e);
      }
      this._adapter.toggleFocusing(false);
      this._adapter.notifyBlur(o, e);
    }
    handleKeyDown(e) {
      this._adapter.notifyKeyDown(e);
      if (e.keyCode === 13) {
        this._adapter.notifyPressEnter(e);
      }
    }
    handleMouseEnter(e) {
      this._adapter.toggleHovering(true);
    }
    handleMouseLeave(e) {
      this._adapter.toggleHovering(false);
    }
    isAllowClear() {
      let {
        value: e,
        isFocus: t,
        isHover: n
      } = this._adapter.getStates();
      let {
        showClear: o,
        disabled: r,
        readonly: a
      } = this._adapter.getProps();
      return e && o && !r && (t || n) && !a;
    }
    handleClear(e) {
      let {
        isFocus: t
      } = this.getStates();
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
      if (t) {
        this._adapter.notifyBlur("", e);
      }
      this._adapter.notifyChange("", e);
      this._adapter.notifyClear(e);
      this.stopPropagation(e);
    }
  }
  var semiInputConstants = require("semi-input-constants") /*id: 859366*/;
  var reactFoundationComponent = require("react-foundation-component") /*id: 323591*/;
  var clearIcon = require("clear-icon") /*id: 137025*/;
  var resizeObserverComponent = require("resize-observer-component") /*id: 376612*/;
  function j(e, t) {
    var n = {};
    for (var o in e) {
      if (Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0) {
        n[o] = e[o];
      }
    }
    if (e != null && typeof Object.getOwnPropertySymbols == "function") {
      var r = 0;
      var o = Object.getOwnPropertySymbols(e);
      for (; r < o.length; r++) {
        if (t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r])) {
          n[o[r]] = e[o[r]];
        }
      }
    }
    return n;
  }
  let P = semiInputConstants.inputPrefixConfig.PREFIX;
  class R extends reactFoundationComponent.FoundationComponent {
    constructor(e) {
      super(e);
      this.handleClear = e => {
        this.foundation.handleClear(e);
      };
      this.setRef = e => {
        this.libRef.current = e;
        let {
          forwardRef: t
        } = this.props;
        if (typeof t == "function") {
          t(e);
        } else if (t && typeof t == "object") {
          t.current = e;
        }
      };
      this.state = {
        value: "",
        isFocus: false,
        isHover: false,
        height: 0,
        minLength: e.minLength
      };
      this.focusing = false;
      this.foundation = new C(this.adapter);
      this.libRef = reactCoreLibraryReexport.createRef();
      this.throttledResizeTextarea = debounceUtilWrapper.createDebounce(this.foundation.resizeTextarea, 10);
    }
    get adapter() {
      return Object.assign(Object.assign({}, super.adapter), {
        setValue: e => this.setState({
          value: e
        }, () => {
          if (this.props.autosize) {
            this.foundation.resizeTextarea();
          }
        }),
        getRef: () => this.libRef.current,
        toggleFocusing: e => this.setState({
          isFocus: e
        }),
        toggleHovering: e => this.setState({
          isHover: e
        }),
        notifyChange: (e, t) => {
          this.props.onChange(e, t);
        },
        notifyClear: e => this.props.onClear(e),
        notifyBlur: (e, t) => this.props.onBlur(t),
        notifyFocus: (e, t) => this.props.onFocus(t),
        notifyKeyDown: e => {
          this.props.onKeyDown(e);
        },
        notifyHeightUpdate: e => {
          this.setState({
            height: e
          });
          this.props.onResize({
            height: e
          });
        },
        notifyPressEnter: e => {
          if (this.props.onEnterPress) {
            this.props.onEnterPress(e);
          }
        },
        setMinLength: e => this.setState({
          minLength: e
        })
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
    componentWillUnmount() {
      var e;
      var t;
      if (this.throttledResizeTextarea) {
        if ((t = (e = this.throttledResizeTextarea) === null || e === undefined ? undefined : e.cancel) !== null && t !== undefined) {
          t.call(e);
        }
        this.throttledResizeTextarea = null;
      }
    }
    componentDidUpdate(e, t) {
      if ((this.props.value !== e.value || this.props.placeholder !== e.placeholder) && this.props.autosize) {
        this.foundation.resizeTextarea();
      }
    }
    renderClearBtn() {
      let {
        showClear: e
      } = this.props;
      let t = this.foundation.isAllowClear();
      let n = u(`${P}-clearbtn`, {
        [`${P}-clearbtn-hidden`]: !t
      });
      if (e) {
        return reactCoreLibraryReexport.createElement("div", {
          className: n,
          onClick: this.handleClear
        }, reactCoreLibraryReexport.createElement(clearIcon.ClearIcon, null));
      } else {
        return null;
      }
    }
    renderCounter() {
      let e;
      let t;
      let n;
      let o;
      let {
        showCounter: r,
        maxCount: a,
        getValueLength: s
      } = this.props;
      if (r || a) {
        let {
          value: r
        } = this.state;
        t = r ? isFunctionUtil_1.isFunction(s) ? s(r) : r.length : 0;
        n = a || null;
        o = u(`${P}-textarea-counter`, {
          [`${P}-textarea-counter-exceed`]: t > n
        });
        e = reactCoreLibraryReexport.createElement("div", {
          className: o
        }, t, n ? "/" : null, n);
      } else {
        e = null;
      }
      return e;
    }
    render() {
      let e = this.props;
      let {
        autosize: t,
        placeholder: n,
        onEnterPress: o,
        onResize: l,
        disabled: d,
        readonly: p,
        className: h,
        showCounter: f,
        validateStatus: m,
        maxCount: g,
        defaultValue: y,
        style: v,
        forwardRef: b,
        getValueLength: w,
        maxLength: E,
        minLength: x,
        showClear: O,
        borderless: C,
        autoFocus: S
      } = e;
      let T = j(e, ["autosize", "placeholder", "onEnterPress", "onResize", "disabled", "readonly", "className", "showCounter", "validateStatus", "maxCount", "defaultValue", "style", "forwardRef", "getValueLength", "maxLength", "minLength", "showClear", "borderless", "autoFocus"]);
      let {
        isFocus: k,
        value: R,
        minLength: D
      } = this.state;
      let A = u(h, `${P}-textarea-wrapper`, {
        [`${P}-textarea-borderless`]: C,
        [`${P}-textarea-wrapper-disabled`]: d,
        [`${P}-textarea-wrapper-readonly`]: p,
        [`${P}-textarea-wrapper-${m}`]: !!m,
        [`${P}-textarea-wrapper-focus`]: k
      });
      let L = u(`${P}-textarea`, {
        [`${P}-textarea-disabled`]: d,
        [`${P}-textarea-readonly`]: p,
        [`${P}-textarea-autosize`]: isObjectOrFunction_1_1.isObjectOrFunction(t) ? isUndefinedCheck.isUndefined(t == null ? undefined : t.maxRows) : t,
        [`${P}-textarea-showClear`]: O
      });
      let M = Object.assign(Object.assign({}, throttledOmitPathStringify.omitPathStringify(T, "insetLabel", "insetLabelId", "getValueLength", "onClear", "showClear")), {
        autoFocus: S || this.props.autofocus,
        className: L,
        disabled: d,
        readOnly: p,
        placeholder: n || null,
        onChange: e => this.foundation.handleChange(e.target.value, e),
        onFocus: e => this.foundation.handleFocus(e),
        onBlur: e => this.foundation.handleBlur(e.nativeEvent),
        onKeyDown: e => this.foundation.handleKeyDown(e),
        value: R == null ? "" : R
      });
      if (!isFunctionUtil_1.isFunction(w)) {
        M.maxLength = E;
      }
      if (D) {
        M.minLength = D;
      }
      return reactCoreLibraryReexport.createElement("div", {
        className: A,
        style: v,
        onMouseEnter: e => this.foundation.handleMouseEnter(e),
        onMouseLeave: e => this.foundation.handleMouseLeave(e)
      }, t ? reactCoreLibraryReexport.createElement(resizeObserverComponent.ResizeObserverComp, {
        onResize: this.throttledResizeTextarea
      }, reactCoreLibraryReexport.createElement("textarea", Object.assign({}, M, {
        ref: this.setRef
      }))) : reactCoreLibraryReexport.createElement("textarea", Object.assign({}, M, {
        ref: this.setRef
      })), this.renderClearBtn(), this.renderCounter());
    }
  }
  R.propTypes = {
    autosize: h.oneOfType([h.bool, h.object]),
    borderless: h.bool,
    placeholder: h.string,
    value: h.string,
    rows: h.number,
    cols: h.number,
    maxCount: h.number,
    onEnterPress: h.func,
    validateStatus: h.string,
    className: h.string,
    style: h.object,
    showClear: h.bool,
    onClear: h.func,
    onResize: h.func,
    getValueLength: h.func
  };
  R.defaultProps = {
    autosize: false,
    borderless: false,
    rows: 4,
    cols: 20,
    showCounter: false,
    showClear: false,
    onEnterPress: emptyExportFunction.emptyFunction,
    onChange: emptyExportFunction.emptyFunction,
    onBlur: emptyExportFunction.emptyFunction,
    onFocus: emptyExportFunction.emptyFunction,
    onKeyDown: emptyExportFunction.emptyFunction,
    onResize: emptyExportFunction.emptyFunction,
    onClear: emptyExportFunction.emptyFunction
  };
  var D = reactCoreLibraryReexport.forwardRef((e, t) => reactCoreLibraryReexport.createElement(R, Object.assign({}, e, {
    forwardRef: t
  })));
  require.d(exports, {
    TextArea: function () {
      return D;
    }
  });
}