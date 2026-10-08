// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'Radio'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-tool-button.182dfecb.js
         * chunkId: 22819
         * moduleId: 39445
         */
module.exports = function (module, exports, require) {
  var isBooleanUtil = require("is-boolean-util") /*id: 507922*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var propTypesFactoryWrapper = require("prop-types-factory-wrapper") /*id: 928010*/;
  var s = propTypesFactoryWrapper;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var u = classnamesUtils;
  var componentAdapterBaseClass = require("component-adapter-base-class") /*id: 519643*/;
  var pageNoopHandler = require("page-noop-handler") /*id: 73359*/;
  class h extends componentAdapterBaseClass.BaseAdapterClass {
    constructor() {
      super(...arguments);
      this.handleFocusVisible = e => {
        let {
          target: t
        } = e;
        try {
          if (t.matches(":focus-visible")) {
            this._adapter.setFocusVisible(true);
          }
        } catch (e) {
          pageNoopHandler.noopHandler(true, "Warning: [Semi Radio] The current browser does not support the focus-visible");
        }
      };
      this.handleBlur = () => {
        this._adapter.setFocusVisible(false);
      };
    }
    init() {
      let {
        children: e,
        extra: t,
        extraId: n,
        addonId: i
      } = this._adapter.getProps();
      if (e && !i) {
        this._adapter.setAddonId();
      }
      if (t && !n) {
        this._adapter.setExtraId();
      }
    }
    setHover(e) {
      this._adapter.setHover(e);
    }
    setChecked(e) {
      this._adapter.setChecked(e);
    }
  }
  var radioComponentConstants = require("radio-component-constants") /*id: 972818*/;
  var uniqueIdUtils = require("unique-id-utils") /*id: 912031*/;
  var reactFoundationComponent = require("react-foundation-component") /*id: 323591*/;
  class v extends componentAdapterBaseClass.BaseAdapterClass {
    constructor(e) {
      super(Object.assign({}, e));
    }
    init() {
      let e = this._adapter.getProp("checked");
      let t = this._adapter.getProp("defaultChecked");
      this.setChecked(e || t);
    }
    setChecked(e) {
      this._adapter.setNativeControlChecked(e);
    }
    getChecked() {
      return this._adapter.getProp("checked");
    }
    handleChange(e) {
      let t = "checked" in this.getProps();
      let {
        checked: n
      } = e.target;
      let i = {
        target: Object.assign(Object.assign({}, this.getProps()), {
          checked: n
        }),
        stopPropagation: () => {
          e.stopPropagation();
        },
        preventDefault: () => {
          e.preventDefault();
        }
      };
      if (!t) {
        this.setChecked(n);
      }
      this._adapter.notifyChange(i);
    }
    destroy() {}
  }
  var reactContextProvider = require("react-context-provider") /*id: 9531*/;
  let b = require("icon-component-factory") /*id: 129581*/.IconFactory(function (e) {
    return reactCoreLibraryReexport.createElement("svg", Object.assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      focusable: false,
      "aria-hidden": true
    }, e), reactCoreLibraryReexport.createElement("circle", {
      cx: 12,
      cy: 12,
      r: 5,
      fill: "currentColor"
    }));
  }, "radio");
  class y extends reactFoundationComponent.FoundationComponent {
    constructor(e) {
      super(e);
      this.state = {
        checked: false
      };
      this.foundation = new v(this.adapter);
      this.onChange = this.onChange.bind(this);
    }
    get adapter() {
      return Object.assign(Object.assign({}, super.adapter), {
        setNativeControlChecked: e => {
          this.setState({
            checked: e
          });
        },
        notifyChange: e => {
          this.props.onChange(e);
        }
      });
    }
    componentDidMount() {
      this.foundation.init();
    }
    componentDidUpdate(e) {
      if (e.checked !== this.props.checked) {
        this.foundation.setChecked(this.props.checked);
      }
    }
    componentWillUnmount() {
      this.foundation.destroy();
    }
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
    onChange(e) {
      this.foundation.handleChange(e);
    }
    render() {
      let {
        disabled: e,
        mode: t,
        autoFocus: n,
        name: i,
        isButtonRadio: r,
        isPureCardRadioGroup: a,
        addonId: l,
        extraId: s,
        "aria-label": c,
        focusInner: d,
        onInputFocus: p,
        onInputBlur: h
      } = this.props;
      let {
        checked: m
      } = this.state;
      let g = this.props.prefixCls || radioComponentConstants.radioClasses.PREFIX;
      let v = u({
        [`${g}-inner`]: true,
        [`${g}-inner-checked`]: !!m,
        [`${g}-inner-buttonRadio`]: r,
        [`${g}-inner-pureCardRadio`]: a
      });
      let _ = u({
        [`${g}-focus`]: d,
        [`${g}-focus-border`]: d && !m,
        [`${g}-inner-display`]: !r
      });
      return reactCoreLibraryReexport.createElement("span", {
        className: v
      }, reactCoreLibraryReexport.createElement("input", {
        ref: e => {
          this.inputEntity = e;
        },
        autoFocus: n,
        type: t === "advanced" ? "checkbox" : "radio",
        checked: !!m,
        disabled: e,
        onChange: this.onChange,
        name: i,
        "aria-label": c,
        "aria-labelledby": l,
        "aria-describedby": s,
        onFocus: p,
        onBlur: h
      }), reactCoreLibraryReexport.createElement("span", {
        className: _
      }, m ? reactCoreLibraryReexport.createElement(b, null) : null));
    }
  }
  y.contextType = reactContextProvider.myContext;
  y.propTypes = {
    checked: s.bool,
    disabled: s.bool,
    isButtonRadio: s.bool,
    onChange: s.func,
    mode: s.oneOf(["advanced", ""]),
    "aria-label": s.string,
    focusInner: s.bool,
    onInputFocus: s.func,
    onInputBlur: s.func,
    preventScroll: s.bool
  };
  y.defaultProps = {
    onChange: emptyExportFunction.emptyFunction,
    isButtonRadio: false
  };
  function w(e, t) {
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
  class x extends reactFoundationComponent.FoundationComponent {
    constructor(e) {
      super(e);
      this.onChange = e => {
        let {
          onChange: t
        } = this.props;
        if (this.isInGroup()) {
          let {
            radioGroup: t
          } = this.context;
          if (t.onChange) {
            t.onChange(e);
          }
        }
        if (!("checked" in this.props)) {
          this.foundation.setChecked(e.target.checked);
        }
        if (t) {
          t(e);
        }
      };
      this.handleMouseEnter = e => {
        this.props.onMouseEnter(e);
        this.foundation.setHover(true);
      };
      this.handleMouseLeave = e => {
        this.props.onMouseLeave(e);
        this.foundation.setHover(false);
      };
      this.handleFocusVisible = e => {
        this.foundation.handleFocusVisible(e);
      };
      this.handleBlur = e => {
        this.foundation.handleBlur();
      };
      this.state = {
        hover: false,
        addonId: e.addonId,
        extraId: e.extraId,
        checked: e.checked || e.defaultChecked || false
      };
      this.foundation = new h(this.adapter);
      this.radioEntity = null;
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
    get adapter() {
      return Object.assign(Object.assign({}, super.adapter), {
        setHover: e => {
          this.setState({
            hover: e
          });
        },
        setAddonId: () => {
          this.setState({
            addonId: uniqueIdUtils.generateRandomId({
              prefix: "addon"
            })
          });
        },
        setChecked: e => {
          this.setState({
            checked: e
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
        }
      });
    }
    isInGroup() {
      return this.context && this.context.radioGroup;
    }
    focus() {
      this.radioEntity.focus();
    }
    blur() {
      this.radioEntity.blur();
    }
    render() {
      let e;
      let t;
      let n;
      let i;
      let r;
      let a;
      let l;
      let s;
      let c;
      let d = this.props;
      let {
        addonClassName: p,
        addonStyle: h,
        disabled: m,
        style: g,
        className: v,
        prefixCls: _,
        displayMode: b,
        children: x,
        extra: C,
        mode: k,
        type: S,
        value: E,
        name: T
      } = d;
      let j = w(d, ["addonClassName", "addonStyle", "disabled", "style", "className", "prefixCls", "displayMode", "children", "extra", "mode", "type", "value", "name"]);
      let {
        hover: P,
        addonId: N,
        extraId: R,
        focusVisible: I,
        checked: O
      } = this.state;
      let M = {
        checked: O,
        disabled: m
      };
      if (this.isInGroup()) {
        e = this.context.radioGroup.value === E;
        t = m || this.context.radioGroup.disabled;
        n = this.context.mode;
        i = this.context.radioGroup.isButtonRadio;
        r = this.context.radioGroup.isCardRadio;
        a = this.context.radioGroup.isPureCardRadio;
        s = this.context.radioGroup.buttonSize;
        c = _ || this.context.radioGroup.prefixCls;
        M.checked = e;
        M.disabled = t;
      } else {
        e = O;
        t = m;
        n = k;
        l = S === "button";
        c = _;
        i = S === radioComponentConstants.radioConstants.TYPE_BUTTON;
        a = S === radioComponentConstants.radioConstants.TYPE_PURECARD;
        r = S === radioComponentConstants.radioConstants.TYPE_CARD || a;
      }
      let D = i === undefined ? l : i;
      let A = c || radioComponentConstants.radioClasses.PREFIX;
      let $ = r || a || D;
      let L = u(A, {
        [`${A}-disabled`]: t,
        [`${A}-checked`]: e,
        [`${A}-${b}`]: !!b,
        [`${A}-buttonRadioComponent`]: l,
        [`${A}-buttonRadioGroup`]: i,
        [`${A}-buttonRadioGroup-${s}`]: i && s,
        [`${A}-cardRadioGroup`]: r,
        [`${A}-cardRadioGroup_disabled`]: t && r,
        [`${A}-cardRadioGroup_checked`]: r && e && !t,
        [`${A}-cardRadioGroup_checked_disabled`]: r && e && t,
        [`${A}-cardRadioGroup_hover`]: r && !e && P && !t,
        [v]: !!v,
        [`${A}-focus`]: I && (r || a)
      });
      let F = this.isInGroup() && this.context.radioGroup.name;
      let Z = u({
        [`${A}-addon`]: !D,
        [`${A}-addon-buttonRadio`]: D,
        [`${A}-addon-buttonRadio-checked`]: D && e,
        [`${A}-addon-buttonRadio-disabled`]: D && t,
        [`${A}-addon-buttonRadio-hover`]: D && !e && !t && P,
        [`${A}-addon-buttonRadio-${s}`]: D && s,
        [`${A}-focus`]: I && D
      }, p);
      return reactCoreLibraryReexport.createElement("label", Object.assign({
        style: g,
        className: L,
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave
      }, this.getDataAttr(j)), reactCoreLibraryReexport.createElement(y, Object.assign({}, this.props, M, {
        mode: n,
        name: T ?? F,
        isButtonRadio: D,
        isPureCardRadioGroup: a,
        onChange: this.onChange,
        ref: e => {
          this.radioEntity = e;
        },
        addonId: x && N,
        extraId: C && R,
        focusInner: I && !$,
        onInputFocus: this.handleFocusVisible,
        onInputBlur: this.handleBlur
      })), x || C ? reactCoreLibraryReexport.createElement("div", {
        className: u([`${A}-content`, {
          [`${A}-isCardRadioGroup_content`]: r
        }])
      }, x ? reactCoreLibraryReexport.createElement("span", {
        className: Z,
        style: h,
        id: N,
        "x-semi-prop": "children"
      }, x) : null, C && !D ? reactCoreLibraryReexport.createElement("div", {
        className: `${A}-extra`,
        id: R,
        "x-semi-prop": "extra"
      }, C) : null) : null);
    }
  }
  x.contextType = reactContextProvider.myContext;
  x.propTypes = {
    autoFocus: s.bool,
    checked: s.bool,
    defaultChecked: s.bool,
    value: s.any,
    style: s.object,
    className: s.string,
    disabled: s.bool,
    prefixCls: s.string,
    displayMode: s.oneOf(["vertical", ""]),
    onChange: s.func,
    onMouseEnter: s.func,
    onMouseLeave: s.func,
    mode: s.oneOf(radioComponentConstants.radioConstants.MODE),
    extra: s.node,
    addonStyle: s.object,
    addonClassName: s.string,
    type: s.oneOf([radioComponentConstants.radioConstants.TYPE_DEFAULT, radioComponentConstants.radioConstants.TYPE_BUTTON, radioComponentConstants.radioConstants.TYPE_CARD, radioComponentConstants.radioConstants.TYPE_PURECARD]),
    "aria-label": s.string,
    preventScroll: s.bool
  };
  x.defaultProps = {
    autoFocus: false,
    defaultChecked: false,
    value: undefined,
    style: undefined,
    onMouseEnter: emptyExportFunction.emptyFunction,
    onMouseLeave: emptyExportFunction.emptyFunction,
    mode: "",
    type: "default"
  };
  x.elementType = "Radio";
  var C = x;
  require.d(exports, {
    Radio: function () {
      return C;
    }
  });
}