// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'SwitchComponent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: super-task-ab-debug.d939873d.js
         * chunkId: 22412
         * moduleId: 962937
         */
module.exports = function (module, exports, require) {
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var propTypesFactoryWrapper = require("prop-types-factory-wrapper") /*id: 928010*/;
  var s = propTypesFactoryWrapper;
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
          pageNoopHandler.noopHandler(true, "Warning: [Semi Switch] The current browser does not support the focus-visible");
        }
      };
      this.handleBlur = () => {
        this._adapter.setFocusVisible(false);
      };
    }
    init() {
      let {
        disabled: e
      } = this.getProps();
      this.setDisabled(e);
    }
    setChecked(e) {
      this._adapter.setNativeControlChecked(e);
    }
    setDisabled(e) {
      this._adapter.setNativeControlDisabled(e);
    }
    handleChange(e, t) {
      if (this.getProps().checked === undefined) {
        this._adapter.setNativeControlChecked(e);
      }
      this._adapter.notifyChange(e, t);
    }
    destroy() {}
  }
  var semiIdentifier = require("semi-identifier") /*id: 247778*/;
  let h = {
    PREFIX: `${semiIdentifier.semiIdentifier}-switch`,
    FOCUS: `${semiIdentifier.semiIdentifier}-switch-focus`,
    LARGE: `${semiIdentifier.semiIdentifier}-switch-large`,
    SMALL: `${semiIdentifier.semiIdentifier}-switch-small`,
    CHECKED: `${semiIdentifier.semiIdentifier}-switch-checked`,
    DISABLED: `${semiIdentifier.semiIdentifier}-switch-disabled`,
    ACTIVE: `${semiIdentifier.semiIdentifier}-switch-active`,
    KNOB: `${semiIdentifier.semiIdentifier}-switch-knob`,
    NATIVE_CONTROL: `${semiIdentifier.semiIdentifier}-switch-native-control`,
    CHECKED_TEXT: `${semiIdentifier.semiIdentifier}-switch-checked-text`,
    UNCHECKED_TEXT: `${semiIdentifier.semiIdentifier}-switch-unchecked-text`,
    LOADING_SPIN: `${semiIdentifier.semiIdentifier}-switch-loading-spin`,
    LOADING: `${semiIdentifier.semiIdentifier}-switch-loading`
  };
  var reactFoundationComponent = require("react-foundation-component") /*id: 323591*/;
  var semiSpinComponent = require("semi-spin-component") /*id: 714437*/;
  function f(e, t) {
    var r = {};
    for (var o in e) {
      if (Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0) {
        r[o] = e[o];
      }
    }
    if (e != null && typeof Object.getOwnPropertySymbols == "function") {
      var i = 0;
      var o = Object.getOwnPropertySymbols(e);
      for (; i < o.length; i++) {
        if (t.indexOf(o[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[i])) {
          r[o[i]] = e[o[i]];
        }
      }
    }
    return r;
  }
  class v extends reactFoundationComponent.FoundationComponent {
    constructor(e) {
      super(e);
      this.handleFocusVisible = e => {
        this.foundation.handleFocusVisible(e);
      };
      this.handleBlur = e => {
        this.foundation.handleBlur();
      };
      this.state = {
        nativeControlChecked: e.defaultChecked || e.checked,
        nativeControlDisabled: false,
        focusVisible: false
      };
      this.switchRef = reactCoreLibraryReexport.createRef();
      this.foundation = new u(this.adapter);
    }
    componentDidMount() {
      this.foundation.init();
    }
    componentDidUpdate(e) {
      if (this.props.checked !== e.checked) {
        this.foundation.setChecked(this.props.checked);
      }
      if (this.props.disabled !== e.disabled) {
        this.foundation.setDisabled(this.props.disabled);
      }
    }
    componentWillUnmount() {
      this.foundation.destroy();
    }
    get adapter() {
      return Object.assign(Object.assign({}, super.adapter), {
        setNativeControlChecked: e => {
          this.setState({
            nativeControlChecked: e
          });
        },
        setNativeControlDisabled: e => {
          this.setState({
            nativeControlDisabled: e
          });
        },
        setFocusVisible: e => {
          this.setState({
            focusVisible: e
          });
        },
        notifyChange: (e, t) => {
          this.props.onChange(e, t);
        }
      });
    }
    render() {
      let {
        nativeControlChecked: e,
        nativeControlDisabled: t,
        focusVisible: r
      } = this.state;
      let o = this.props;
      let {
        className: n,
        style: l,
        onMouseEnter: s,
        onMouseLeave: c,
        size: d,
        checkedText: u,
        uncheckedText: m,
        loading: p,
        id: v
      } = o;
      let b = f(o, ["className", "style", "onMouseEnter", "onMouseLeave", "size", "checkedText", "uncheckedText", "loading", "id"]);
      let y = a(n, {
        [h.PREFIX]: true,
        [h.CHECKED]: e,
        [h.DISABLED]: t,
        [h.LARGE]: d === "large",
        [h.SMALL]: d === "small",
        [h.LOADING]: p,
        [h.FOCUS]: r
      });
      let w = {
        type: "checkbox",
        className: h.NATIVE_CONTROL,
        disabled: t || p,
        checked: e || false
      };
      let k = u && e && d !== "small";
      let _ = m && !e && d !== "small";
      return reactCoreLibraryReexport.createElement("div", Object.assign({
        className: y,
        style: l,
        onMouseEnter: s,
        onMouseLeave: c
      }, this.getDataAttr(b)), p ? reactCoreLibraryReexport.createElement(semiSpinComponent.Spin, {
        wrapperClassName: h.LOADING_SPIN,
        size: d === "default" ? "middle" : d
      }) : reactCoreLibraryReexport.createElement("div", {
        className: h.KNOB,
        "aria-hidden": true
      }), k ? reactCoreLibraryReexport.createElement("div", {
        className: h.CHECKED_TEXT,
        "x-semi-prop": "checkedText"
      }, u) : null, _ ? reactCoreLibraryReexport.createElement("div", {
        className: h.UNCHECKED_TEXT,
        "x-semi-prop": "uncheckedText"
      }, m) : null, reactCoreLibraryReexport.createElement("input", Object.assign({}, w, {
        ref: this.switchRef,
        id: v,
        role: "switch",
        "aria-checked": e,
        "aria-invalid": this.props["aria-invalid"],
        "aria-errormessage": this.props["aria-errormessage"],
        "aria-label": this.props["aria-label"],
        "aria-labelledby": this.props["aria-labelledby"],
        "aria-describedby": this.props["aria-describedby"],
        "aria-disabled": this.props.disabled,
        onChange: e => this.foundation.handleChange(e.target.checked, e),
        onFocus: e => this.handleFocusVisible(e),
        onBlur: e => this.handleBlur(e)
      })));
    }
  }
  v.propTypes = {
    "aria-label": s.string,
    "aria-labelledby": s.string,
    "aria-invalid": s.bool,
    "aria-errormessage": s.string,
    "aria-describedby": s.string,
    className: s.string,
    checked: s.bool,
    checkedText: s.node,
    defaultChecked: s.bool,
    disabled: s.bool,
    loading: s.bool,
    onChange: s.func,
    onMouseEnter: s.func,
    onMouseLeave: s.func,
    style: s.object,
    size: s.oneOf(["default", "small", "large"]),
    uncheckedText: s.node,
    id: s.string
  };
  v.defaultProps = {
    disabled: false,
    className: "",
    onChange: emptyExportFunction.emptyFunction,
    loading: false,
    onMouseEnter: emptyExportFunction.emptyFunction,
    onMouseLeave: emptyExportFunction.emptyFunction,
    size: "default"
  };
  var b = v;
  require.d(exports, {
    SwitchComponent: function () {
      return b;
    }
  });
}