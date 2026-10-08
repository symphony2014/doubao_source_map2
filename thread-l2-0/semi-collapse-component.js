// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'Collapse'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-action.ba18ba91.js
         * chunkId: 33086
         * moduleId: 795379
         */
module.exports = function (module, exports, require) {
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var propTypesFactoryWrapper = require("prop-types-factory-wrapper") /*id: 928010*/;
  var s = propTypesFactoryWrapper;
  var semiIdentifier = require("semi-identifier") /*id: 247778*/;
  let c = {
    PREFIX: `${semiIdentifier.semiIdentifier}-collapse`
  };
  var componentAdapterBaseClass = require("component-adapter-base-class") /*id: 519643*/;
  class v extends componentAdapterBaseClass.BaseAdapterClass {
    constructor(e) {
      super(Object.assign({}, e));
    }
    initActiveKey() {
      let {
        defaultActiveKey: e,
        activeKey: t,
        accordion: n
      } = this.getProps();
      let i = t || e;
      if (n) {
        i = Array.isArray(i) ? i[0] : i;
      }
      if (i && i.length) {
        return i = Array.isArray(i) ? i : [i];
      } else {
        return [];
      }
    }
    handleChange(e, t) {
      let {
        activeKey: n,
        accordion: i
      } = this.getProps();
      let {
        activeSet: r
      } = this.getStates();
      let o = new Set(r);
      if (o.has(e)) {
        o.delete(e);
      } else if (i) {
        o = new Set([e]);
      } else {
        o.add(e);
      }
      this._adapter.handleChange([...o.values()], t);
      if (n === undefined) {
        this._adapter.addActiveKey(o);
      }
    }
  }
  var reactFoundationComponent = require("react-foundation-component") /*id: 323591*/;
  var semiCollapsibleComponent = require("semi-collapsible-component") /*id: 132644*/;
  let m = reactCoreLibraryReexport.createContext({});
  var chevronDownIcon = require("chevron-down-icon") /*id: 36033*/;
  var chevronUpIcon = require("chevron-up-icon") /*id: 743994*/;
  var uniqueIdUtils = require("unique-id-utils") /*id: 912031*/;
  function b(e, t) {
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
  class y extends reactCoreLibraryReexport.PureComponent {
    constructor() {
      super(...arguments);
      this.headerExpandIconTriggerRef = reactCoreLibraryReexport.createRef();
      this.ariaID = "";
      this.handleClick = (e, t) => {
        var n;
        if (this.context.clickHeaderToExpand || ((n = this.headerExpandIconTriggerRef.current) === null || n === undefined ? undefined : n.contains(t.target))) {
          this.context.onClick(e, t);
        }
      };
    }
    componentDidMount() {
      this.ariaID = uniqueIdUtils.generateRandomId({});
    }
    renderHeader(e) {
      let t = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
      let {
        showArrow: n,
        header: i,
        extra: o
      } = this.props;
      let {
        expandIcon: l,
        collapseIcon: s
      } = this.context;
      let {
        expandIconPosition: d
      } = this.context;
      if (l === undefined) {
        l = reactCoreLibraryReexport.createElement(chevronDownIcon.ChevronDownIcon, null);
      }
      if (s === undefined) {
        s = reactCoreLibraryReexport.createElement(chevronUpIcon.ChevronUpIcon, null);
      }
      let u = reactCoreLibraryReexport.createElement("span", {
        ref: this.headerExpandIconTriggerRef,
        "aria-hidden": "true",
        className: a([`${c.PREFIX}-header-icon`, {
          [`${c.PREFIX}-header-iconDisabled`]: !t
        }])
      }, t && e ? s : l);
      let v = d === "left";
      if (typeof i == "string") {
        return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, n && (v ? u : null), reactCoreLibraryReexport.createElement("span", null, i), reactCoreLibraryReexport.createElement("span", {
          className: `${c.PREFIX}-header-right`
        }, reactCoreLibraryReexport.createElement("span", null, o), n && (v ? null : u)));
      } else {
        return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, n && (v ? u : null), i, n && (v ? null : u));
      }
    }
    render() {
      let e = this.props;
      let {
        className: t,
        children: n,
        itemKey: i,
        reCalcKey: o,
        header: l,
        extra: s,
        showArrow: d,
        disabled: u
      } = e;
      let v = b(e, ["className", "children", "itemKey", "reCalcKey", "header", "extra", "showArrow", "disabled"]);
      let {
        keepDOM: p,
        expandIconPosition: m,
        activeSet: g,
        motion: h
      } = this.context;
      let _ = g.has(i);
      let y = a(t, {
        [`${c.PREFIX}-item`]: true
      });
      let w = a({
        [`${c.PREFIX}-header`]: true,
        [`${c.PREFIX}-header-disabled`]: u,
        [`${c.PREFIX}-header-iconLeft`]: m === "left"
      });
      let k = a({
        [`${c.PREFIX}-content`]: true
      });
      return reactCoreLibraryReexport.createElement("div", Object.assign({
        className: y
      }, v), reactCoreLibraryReexport.createElement("div", {
        role: "button",
        tabIndex: 0,
        className: w,
        "aria-disabled": u,
        "aria-expanded": _ ? "true" : "false",
        "aria-owns": this.ariaID,
        onClick: e => !u && this.handleClick(i, e)
      }, this.renderHeader(_, n !== undefined && !u)), n && reactCoreLibraryReexport.createElement(semiCollapsibleComponent.Collapsible, {
        isOpen: _,
        keepDOM: p,
        motion: h,
        onMotionEnd: this.props.onMotionEnd,
        reCalcKey: o
      }, reactCoreLibraryReexport.createElement("div", {
        className: k,
        "aria-hidden": !_,
        id: this.ariaID
      }, reactCoreLibraryReexport.createElement("div", {
        className: `${c.PREFIX}-content-wrapper`
      }, n))));
    }
  }
  y.contextType = m;
  y.propTypes = {
    itemKey: s.string,
    extra: s.node,
    header: s.oneOfType([s.string, s.node]),
    className: s.string,
    reCalcKey: s.oneOfType([s.string, s.number]),
    showArrow: s.bool,
    disabled: s.bool
  };
  y.defaultProps = {
    showArrow: true,
    disabled: false
  };
  var emptyFunctionExport = require("empty-function-export") /*id: 185067*/;
  var commonFrontendUtils = require("common-frontend-utils") /*id: 264233*/;
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
  class E extends reactFoundationComponent.FoundationComponent {
    constructor(e) {
      super(e);
      this.onChange = (e, t) => {
        this.foundation.handleChange(e, t);
      };
      this.foundation = new v(this.adapter);
      let t = this.foundation.initActiveKey();
      this.state = {
        activeSet: new Set(t)
      };
      this.onChange = this.onChange.bind(this);
    }
    get adapter() {
      return Object.assign(Object.assign({}, super.adapter), {
        handleChange: (e, t) => this.props.onChange(e, t),
        addActiveKey: e => this.setState({
          activeSet: e
        })
      });
    }
    static getDerivedStateFromProps(e, t) {
      if (e.activeKey) {
        let n = new Set(Array.isArray(e.activeKey) ? e.activeKey : [e.activeKey]);
        if (!deepEqualUtil_1.deepEqual(n, t.activeSet)) {
          return Object.assign(Object.assign({}, t), {
            activeSet: n
          });
        }
      }
      return t;
    }
    componentWillUnmount() {
      this.foundation.destroy();
    }
    render() {
      let e = this.props;
      let {
        defaultActiveKey: t,
        accordion: n,
        style: i,
        motion: o,
        className: l,
        keepDOM: s,
        expandIconPosition: d,
        expandIcon: u,
        collapseIcon: v,
        children: p,
        clickHeaderToExpand: f
      } = e;
      x(e, ["defaultActiveKey", "accordion", "style", "motion", "className", "keepDOM", "expandIconPosition", "expandIcon", "collapseIcon", "children", "clickHeaderToExpand"]);
      let g = a(c.PREFIX, l);
      let {
        activeSet: h
      } = this.state;
      return reactCoreLibraryReexport.createElement("div", Object.assign({
        className: g,
        style: i
      }, this.getDataAttr(this.props)), reactCoreLibraryReexport.createElement(m.Provider, {
        value: {
          activeSet: h,
          expandIcon: u,
          collapseIcon: v,
          clickHeaderToExpand: f,
          keepDOM: s,
          expandIconPosition: d,
          onClick: this.onChange,
          motion: o
        }
      }, p));
    }
  }
  E.Panel = y;
  E.propTypes = {
    activeKey: s.oneOfType([s.string, s.array]),
    defaultActiveKey: s.oneOfType([s.string, s.array]),
    accordion: s.bool,
    clickHeaderToExpand: s.bool,
    onChange: s.func,
    expandIcon: s.node,
    collapseIcon: s.node,
    style: s.object,
    className: s.string,
    keepDOM: s.bool,
    motion: s.oneOfType([s.bool, s.func, s.object]),
    expandIconPosition: s.oneOf(["left", "right"])
  };
  E.__SemiComponentName__ = "Collapse";
  E.defaultProps = commonFrontendUtils.configProxyHandler(E.__SemiComponentName__, {
    defaultActiveKey: "",
    clickHeaderToExpand: true,
    onChange: emptyFunctionExport.emptyFunction,
    expandIconPosition: "right"
  });
  var S = E;
  require.d(exports, {
    Collapse: function () {
      return S;
    }
  });
}