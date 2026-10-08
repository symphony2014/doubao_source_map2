// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'RadioGroup'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-tool-button.182dfecb.js
         * chunkId: 22819
         * moduleId: 579832
         */
module.exports = function (module, exports, require) {
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var propTypesFactoryWrapper = require("prop-types-factory-wrapper") /*id: 928010*/;
  var o = propTypesFactoryWrapper;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var s = classnamesUtils;
  var radioComponentConstants = require("radio-component-constants") /*id: 972818*/;
  var componentAdapterBaseClass = require("component-adapter-base-class") /*id: 519643*/;
  class d extends componentAdapterBaseClass.BaseAdapterClass {
    constructor(e) {
      super(Object.assign({}, e));
    }
    init() {
      let e = this._getDisplayValue();
      this._setValue(e);
    }
    _getDisplayValue() {
      let e;
      let {
        value: t,
        defaultValue: n
      } = this.getProps();
      if ("value" in this.getProps()) {
        e = t;
      } else if ("defaultValue" in this.getProps()) {
        e = n;
      }
      return e;
    }
    handleChange(e) {
      let t = this.getProp("mode");
      let n = this.getState("value");
      let {
        checked: i,
        value: r
      } = e.target;
      let a = this._adapter.isInProps("value");
      let o = Object.assign(Object.assign({}, e), {
        target: Object.assign(Object.assign({}, e.target), {
          value: r
        })
      });
      if (t === "advanced" && !i) {
        o.target.value = undefined;
      }
      if (!a) {
        if (t !== "advanced" || i) {
          this._setValue(r);
        } else {
          this._setValue(undefined);
        }
      }
      if (t === "advanced" || n !== r) {
        this._adapter.notifyChange(o);
      }
    }
    handlePropValueChange(e) {
      this._setValue(e);
    }
    _setValue(e) {
      this._adapter.setValue(e);
    }
    destroy() {}
  }
  var reactFoundationComponent = require("react-foundation-component") /*id: 323591*/;
  var radioComponent = require("radio-component") /*id: 39445*/;
  var reactContextProvider = require("react-context-provider") /*id: 9531*/;
  function m(e, t) {
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
  class g extends reactFoundationComponent.FoundationComponent {
    constructor(e) {
      super(e);
      this.onChange = e => {
        this.foundation.handleChange(e);
      };
      this.getFormatName = () => this.props.name || "default";
      this.state = {
        value: e.value || e.defaultValue
      };
      this.foundation = new d(this.adapter);
    }
    componentDidMount() {
      this.foundation.init();
    }
    componentDidUpdate(e) {
      if ((typeof e.value != "number" || !isNaN(e.value) || typeof this.props.value != "number" || !isNaN(this.props.value)) && e.value !== this.props.value) {
        this.foundation.handlePropValueChange(this.props.value);
      }
    }
    componentWillUnmount() {
      this.foundation.destroy();
    }
    get adapter() {
      return Object.assign(Object.assign({}, super.adapter), {
        setValue: e => {
          this.setState({
            value: e
          });
        },
        getProps: () => this.props,
        isInProps: e => e in this.props,
        notifyChange: e => {
          if (this.props.onChange) {
            this.props.onChange(e);
          }
        }
      });
    }
    render() {
      let e;
      let t = this.props;
      let {
        children: n,
        options: i,
        mode: a,
        prefixCls: o,
        className: l,
        style: u,
        direction: d,
        type: p,
        buttonSize: g,
        id: v
      } = t;
      let _ = m(t, ["children", "options", "mode", "prefixCls", "className", "style", "direction", "type", "buttonSize", "id"]);
      let b = p === radioComponentConstants.radioConstants.TYPE_BUTTON;
      let y = p === radioComponentConstants.radioConstants.TYPE_PURECARD;
      let w = p === radioComponentConstants.radioConstants.TYPE_CARD || y;
      let x = p === radioComponentConstants.radioConstants.TYPE_DEFAULT;
      let C = o || radioComponentConstants.radioGroupClasses.PREFIX;
      let k = s(l, {
        [C]: true,
        [`${C}-wrapper`]: true,
        [`${C}-${d}`]: d && !b,
        [`${C}-${d}-default`]: d && x,
        [`${C}-${d}-card`]: d && w,
        [`${C}-buttonRadio`]: b
      });
      let S = this.state.value;
      if (i) {
        e = (i || []).map((e, t) => typeof e == "string" ? reactCoreLibraryReexport.createElement(radioComponent.Radio, {
          key: t,
          disabled: this.props.disabled,
          value: e
        }, e) : reactCoreLibraryReexport.createElement(radioComponent.Radio, {
          key: t,
          disabled: e.disabled || this.props.disabled,
          value: e.value,
          extra: e.extra,
          className: e.className,
          style: e.style
        }, e.label));
      } else if (n) {
        e = reactCoreLibraryReexport.Children.map(n, (e, t) => reactCoreLibraryReexport.isValidElement(e) ? reactCoreLibraryReexport.cloneElement(e, {
          key: t
        }) : null);
      }
      return reactCoreLibraryReexport.createElement("div", Object.assign({
        className: k,
        style: u,
        id: v,
        "aria-label": this.props["aria-label"],
        "aria-invalid": this.props["aria-invalid"],
        "aria-errormessage": this.props["aria-errormessage"],
        "aria-labelledby": this.props["aria-labelledby"],
        "aria-describedby": this.props["aria-describedby"],
        "aria-required": this.props["aria-required"]
      }, this.getDataAttr(_)), reactCoreLibraryReexport.createElement(reactContextProvider.myContext.Provider, {
        value: {
          radioGroup: {
            onChange: this.onChange,
            value: S,
            disabled: this.props.disabled,
            name: this.getFormatName(),
            isButtonRadio: b,
            isCardRadio: w,
            isPureCardRadio: y,
            buttonSize: g,
            prefixCls: o
          },
          mode: a
        }
      }, e));
    }
  }
  g.propTypes = {
    defaultValue: o.any,
    disabled: o.bool,
    name: o.string,
    options: o.array,
    buttonSize: o.oneOf(radioComponentConstants.radioConstants.BUTTON_SIZE),
    type: o.oneOf([radioComponentConstants.radioConstants.TYPE_DEFAULT, radioComponentConstants.radioConstants.TYPE_BUTTON, radioComponentConstants.radioConstants.TYPE_CARD, radioComponentConstants.radioConstants.TYPE_PURECARD]),
    value: o.any,
    onChange: o.func,
    children: o.node,
    prefixCls: o.string,
    className: o.string,
    style: o.object,
    direction: o.oneOf(radioComponentConstants.radioConstants.DIRECTION_SET),
    mode: o.oneOf(radioComponentConstants.radioConstants.MODE),
    "aria-label": o.string,
    "aria-describedby": o.string,
    "aria-errormessage": o.string,
    "aria-invalid": o.bool,
    "aria-labelledby": o.string,
    "aria-required": o.bool,
    id: o.string
  };
  g.defaultProps = {
    disabled: false,
    onChange: emptyExportFunction.emptyFunction,
    direction: radioComponentConstants.radioConstants.DEFAULT_DIRECTION,
    mode: "",
    type: radioComponentConstants.radioConstants.TYPE_DEFAULT,
    buttonSize: "middle"
  };
  var v = g;
  require.d(exports, {
    RadioGroup: function () {
      return v;
    }
  });
}