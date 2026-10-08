// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'CheckboxGroup'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 10691.328b6088.js
         * chunkId: 10691
         * moduleId: 654013
         */
module.exports = function (module, exports, require) {
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var propTypesFactoryWrapper = require("prop-types-factory-wrapper") /*id: 928010*/;
  var l = propTypesFactoryWrapper;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var s = classnamesUtils;
  var checkboxClassnameConfig = require("checkbox-classname-config") /*id: 911415*/;
  var componentAdapterBaseClass = require("component-adapter-base-class") /*id: 519643*/;
  var pageNoopHandler = require("page-noop-handler") /*id: 73359*/;
  class h extends componentAdapterBaseClass.BaseAdapterClass {
    static get checkboxGroupDefaultAdapter() {
      return {};
    }
    constructor(e) {
      super(Object.assign(Object.assign({}, h.checkboxGroupDefaultAdapter), e));
    }
    init() {
      let {
        defaultValue: e,
        value: t
      } = this.getProps();
      if (e !== undefined && !Array.isArray(e)) {
        pageNoopHandler.noopHandler(true, "Warning: [Semi CheckboxGroup] defaultValue should be an Array");
      }
      if (t !== undefined && !Array.isArray(t)) {
        pageNoopHandler.noopHandler(true, "Warning: [Semi CheckboxGroup] value should be an Array");
      }
    }
    notifyChange(e) {
      this._adapter.notifyChange(e);
    }
    handleChange(e) {
      let t = this.getState("value");
      let n = [];
      if (!Array.isArray(t)) {
        n = [t];
      }
      n = e.target.checked ? [...t, e.target.value] : t.filter((t, n) => t !== e.target.value);
      if (!("value" in this.getProps())) {
        this._adapter.updateGroupValue(n);
      }
      this.notifyChange(n);
    }
    getFormatName() {
      return this.getProp("name") || "default";
    }
    handlePropValueChange(e) {
      if (Array.isArray(e)) {
        this._adapter.updateGroupValue(e);
      } else {
        if (e === undefined) {
          this._adapter.updateGroupValue([]);
        }
        pageNoopHandler.noopHandler(true, "Warning: [Semi CheckboxGroup] value should be an Array");
      }
    }
    destroy() {}
  }
  var reactFoundationComponent = require("react-foundation-component") /*id: 323591*/;
  var sendMessageBoxContext = require("send-message-box-context") /*id: 344124*/;
  var checkboxComponent = require("checkbox-component") /*id: 517004*/;
  class g extends reactFoundationComponent.FoundationComponent {
    get adapter() {
      return Object.assign(Object.assign({}, super.adapter), {
        updateGroupValue: e => {
          this.setState({
            value: e
          });
        },
        notifyChange: e => {
          if (this.props.onChange) {
            this.props.onChange(e);
          }
        }
      });
    }
    constructor(e) {
      super(e);
      this.state = {
        value: e.value || e.defaultValue
      };
      this.foundation = new h(this.adapter);
      this.onChange = this.onChange.bind(this);
    }
    componentDidMount() {
      this.foundation.init();
    }
    componentDidUpdate(e) {
      if (!deepEqualUtil_1.deepEqual(e.value, this.props.value)) {
        this.foundation.handlePropValueChange(this.props.value);
      }
    }
    componentWillUnmount() {
      this.foundation.destroy();
    }
    onChange(e) {
      this.foundation.handleChange(e);
    }
    render() {
      let e;
      let {
        children: t,
        options: n,
        prefixCls: i,
        direction: a,
        className: l,
        id: r,
        style: c,
        type: u,
        disabled: h
      } = this.props;
      let p = u === checkboxClassnameConfig.checkboxGroupCfg.TYPE_PURECARD;
      let g = u === checkboxClassnameConfig.checkboxGroupCfg.TYPE_CARD || p;
      let _ = i || checkboxClassnameConfig.checkboxGroupNames.PREFIX;
      let f = s({
        [_]: true,
        [`${_}-wrapper`]: true,
        [`${_}-${a}`]: a,
        [`${_}-${a}-cardType`]: a && g,
        [`${_}-${a}-pureCardType`]: a && p
      }, l);
      let b = this.state.value.slice();
      if (n) {
        e = (n || []).map((e, t) => typeof e == "string" ? reactCoreLibraryReexport.createElement(checkboxComponent.CheckboxComponent, {
          role: "listitem",
          key: t,
          disabled: this.props.disabled,
          value: e,
          prefixCls: i
        }, e) : reactCoreLibraryReexport.createElement(checkboxComponent.CheckboxComponent, {
          role: "listitem",
          key: t,
          disabled: e.disabled || this.props.disabled,
          value: e.value,
          prefixCls: i,
          extra: e.extra,
          className: e.className,
          style: e.style,
          onChange: e.onChange
        }, e.label));
      } else if (t) {
        e = reactCoreLibraryReexport.Children.toArray(t).map((e, t) => reactCoreLibraryReexport.cloneElement(e, {
          key: t,
          role: "listitem"
        }));
      }
      return reactCoreLibraryReexport.createElement("div", Object.assign({
        id: r,
        role: "list",
        "aria-label": this.props["aria-label"],
        className: f,
        style: c,
        "aria-labelledby": this.props["aria-labelledby"],
        "aria-describedby": this.props["aria-describedby"]
      }, this.getDataAttr(this.props)), reactCoreLibraryReexport.createElement(sendMessageBoxContext.messageBoxContext.Provider, {
        value: {
          checkboxGroup: {
            onChange: this.onChange,
            value: b,
            disabled: this.props.disabled,
            name: this.foundation.getFormatName(),
            isCardType: g,
            isPureCardType: p
          }
        }
      }, e));
    }
  }
  g.propTypes = {
    "aria-describedby": l.string,
    "aria-errormessage": l.string,
    "aria-invalid": l.bool,
    "aria-labelledby": l.string,
    "aria-required": l.bool,
    defaultValue: l.array,
    disabled: l.bool,
    name: l.string,
    options: l.array,
    value: l.array,
    onChange: l.func,
    children: l.node,
    prefixCls: l.string,
    direction: l.oneOf(checkboxClassnameConfig.checkboxGroupCfg.DIRECTION_SET),
    className: l.string,
    type: l.oneOf([checkboxClassnameConfig.checkboxGroupCfg.TYPE_DEFAULT, checkboxClassnameConfig.checkboxGroupCfg.TYPE_CARD, checkboxClassnameConfig.checkboxGroupCfg.TYPE_PURECARD]),
    style: l.object
  };
  g.defaultProps = {
    disabled: false,
    onChange: () => {},
    type: checkboxClassnameConfig.checkboxGroupCfg.TYPE_DEFAULT,
    defaultValue: [],
    direction: checkboxClassnameConfig.checkboxGroupCfg.DEFAULT_DIRECTION
  };
  var _ = g;
  require.d(exports, {
    CheckboxGroup: function () {
      return _;
    }
  });
}