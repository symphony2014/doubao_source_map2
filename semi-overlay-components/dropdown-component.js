// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'Dropdown'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 10691.328b6088.js
         * chunkId: 10691
         * moduleId: 748649
         */
module.exports = function (module, exports, require) {
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var r = classnamesUtils;
  var propTypesFactoryWrapper = require("prop-types-factory-wrapper") /*id: 928010*/;
  var d = propTypesFactoryWrapper;
  var dropdownTooltipConstants = require("dropdown-tooltip-constants") /*id: 657784*/;
  var reactFoundationComponent = require("react-foundation-component") /*id: 323591*/;
  var reactTooltipComponent = require("react-tooltip-component") /*id: 228812*/;
  var tooltipConstants = require("tooltip-constants") /*id: 736928*/;
  var componentAdapterBaseClass = require("component-adapter-base-class") /*id: 519643*/;
  var uiFocusNavigation = require("ui-focus-navigation") /*id: 152428*/;
  class g extends componentAdapterBaseClass.BaseAdapterClass {
    handleVisibleChange(e) {
      this._adapter.setPopVisible(e);
      this._adapter.notifyVisibleChange(e);
      let {
        trigger: t
      } = this.getProps();
      if (e && t === "click") {
        let e = this._adapter.getPopupId();
        this.setFocusToFirstMenuItem(e);
      }
    }
    getMenuItemNodes(e) {
      let t = document.getElementById(e);
      if (t) {
        return Array.from(t.getElementsByTagName("li")).filter(e => e.ariaDisabled === "false");
      } else {
        return null;
      }
    }
    setFocusToFirstMenuItem(e) {
      let t = this.getMenuItemNodes(e);
      if (t) {
        uiFocusNavigation.focusFirst(t);
      }
    }
    setFocusToLastMenuItem(e) {
      let t = this.getMenuItemNodes(e);
      if (t) {
        uiFocusNavigation.focusLast(t);
      }
    }
    handleKeyDown(e) {
      var t;
      let i = ((t = e.target) === null || t === undefined ? undefined : t.attributes["data-popupid"])?.value;
      let {
        visible: o
      } = this._adapter.getStates();
      switch (e.key) {
        case " ":
        case "Enter":
          e.target.click();
          break;
        case "ArrowDown":
          this.setFocusToFirstMenuItem(i);
          if (o) {
            uiFocusNavigation.suppressEvent(e);
          }
          break;
        case "ArrowUp":
          this.setFocusToLastMenuItem(i);
          if (o) {
            uiFocusNavigation.suppressEvent(e);
          }
      }
    }
  }
  var dropdownMenuFoundation = require("dropdown-menu-foundation") /*id: 761864*/;
  var dropdownItemComponent = require("dropdown-item-component") /*id: 325984*/;
  var dropdownDivider = require("dropdown-divider") /*id: 10735*/;
  var reactLevelContext = require("react-level-context") /*id: 834364*/;
  let k = dropdownTooltipConstants.dropdownClassNames.PREFIX;
  class w extends reactCoreLibraryReexport.PureComponent {
    render() {
      let {
        className: e,
        style: t,
        children: n
      } = this.props;
      let {
        showTick: i
      } = this.context;
      let o = r({
        [`${k}-title`]: true,
        [`${k}-title-withTick`]: i
      }, e);
      return reactCoreLibraryReexport.createElement("div", {
        className: o,
        style: t
      }, n);
    }
  }
  w.propTypes = {
    children: d.node,
    className: d.string,
    style: d.object
  };
  w.contextType = reactLevelContext.levelContext;
  var commonFrontendUtils = require("common-frontend-utils") /*id: 264233*/;
  function C(e, t) {
    var n = {};
    for (var i in e) {
      if (Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0) {
        n[i] = e[i];
      }
    }
    if (e != null && typeof Object.getOwnPropertySymbols == "function") {
      var o = 0;
      var i = Object.getOwnPropertySymbols(e);
      for (; o < i.length; o++) {
        if (t.indexOf(i[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[o])) {
          n[i[o]] = e[i[o]];
        }
      }
    }
    return n;
  }
  let E = dropdownTooltipConstants.tooltipOptions.POSITION_SET;
  let I = dropdownTooltipConstants.tooltipOptions.TRIGGER_SET;
  class S extends reactFoundationComponent.FoundationComponent {
    constructor(e) {
      super(e);
      this.handleVisibleChange = e => this.foundation.handleVisibleChange(e);
      this.state = {
        popVisible: e.visible
      };
      this.foundation = new g(this.adapter);
      this.tooltipRef = reactCoreLibraryReexport.createRef();
    }
    get adapter() {
      return Object.assign(Object.assign({}, super.adapter), {
        setPopVisible: e => this.setState({
          popVisible: e
        }),
        notifyVisibleChange: e => this.props.onVisibleChange(e),
        getPopupId: () => this.tooltipRef.current.getPopupId()
      });
    }
    renderContent() {
      let {
        render: e,
        menu: t,
        contentClassName: n,
        style: i,
        showTick: o,
        prefixCls: l,
        trigger: s
      } = this.props;
      let d = r(l, n);
      let {
        level: c = 0
      } = this.context;
      let u = null;
      if (reactCoreLibraryReexport.isValidElement(e)) {
        u = e;
      } else if (Array.isArray(t)) {
        u = this.renderMenu();
      }
      return reactCoreLibraryReexport.createElement(reactLevelContext.levelContext.Provider, {
        value: {
          showTick: o,
          level: c + 1,
          trigger: s
        }
      }, reactCoreLibraryReexport.createElement("div", {
        className: d,
        style: i
      }, reactCoreLibraryReexport.createElement("div", {
        className: `${l}-content`,
        "x-semi-prop": "render"
      }, u)));
    }
    renderMenu() {
      let {
        menu: e
      } = this.props;
      let t = e.map((e, t) => {
        switch (e.node) {
          case "title":
            {
              let {
                name: n,
                node: i
              } = e;
              let o = C(e, ["name", "node"]);
              return reactCoreLibraryReexport.createElement(S.Title, Object.assign({}, o, {
                key: i + n + t
              }), n);
            }
          case "item":
            {
              let {
                node: n,
                name: i
              } = e;
              let o = C(e, ["node", "name"]);
              return reactCoreLibraryReexport.createElement(S.Item, Object.assign({}, o, {
                key: n + i + t
              }), i);
            }
          case "divider":
            return reactCoreLibraryReexport.createElement(S.Divider, {
              key: e.node + t
            });
          default:
            return null;
        }
      });
      return reactCoreLibraryReexport.createElement(S.Menu, null, t);
    }
    renderPopCard() {
      let {
        render: e,
        contentClassName: t,
        style: n,
        showTick: i,
        prefixCls: o
      } = this.props;
      let l = r(o, t);
      let {
        level: s = 0
      } = this.context;
      return reactCoreLibraryReexport.createElement(reactLevelContext.levelContext.Provider, {
        value: {
          showTick: i,
          level: s + 1
        }
      }, reactCoreLibraryReexport.createElement("div", {
        className: l,
        style: n
      }, reactCoreLibraryReexport.createElement("div", {
        className: `${o}-content`
      }, e)));
    }
    render() {
      let e = this.props;
      let {
        children: t,
        position: n,
        trigger: o,
        onVisibleChange: l,
        zIndex: s,
        className: d,
        motion: u,
        margin: p,
        style: v,
        prefixCls: m
      } = e;
      let g = C(e, ["children", "position", "trigger", "onVisibleChange", "zIndex", "className", "motion", "margin", "style", "prefixCls"]);
      let {
        spacing: _
      } = this.props;
      let {
        level: f
      } = this.context;
      let {
        popVisible: b
      } = this.state;
      let y = this.renderContent();
      if (f > 0) {
        _ = typeof _ == "number" ? _ : dropdownTooltipConstants.spacingConstants.NESTED_SPACING;
      } else if (_ == null) {
        _ = dropdownTooltipConstants.spacingConstants.SPACING;
      }
      return reactCoreLibraryReexport.createElement(reactTooltipComponent.TooltipComponent, Object.assign({
        zIndex: s,
        motion: u,
        margin: p,
        content: y,
        className: d,
        prefixCls: m,
        spacing: _,
        position: n,
        trigger: o,
        onVisibleChange: this.handleVisibleChange,
        showArrow: false,
        returnFocusOnClose: true,
        ref: this.tooltipRef
      }, g), reactCoreLibraryReexport.isValidElement(t) ? reactCoreLibraryReexport.cloneElement(t, {
        className: r(objectPathGetDefault.getObjectPathDefault(t, "props.className"), {
          [`${m}-showing`]: b
        }),
        "aria-haspopup": true,
        "aria-expanded": b,
        onKeyDown: e => {
          this.foundation.handleKeyDown(e);
          let n = objectPathGetDefault.getObjectPathDefault(t, "props.onKeyDown");
          if (n) {
            n(e);
          }
        }
      }) : t);
    }
  }
  S.Menu = dropdownMenuFoundation.DropdownMenu;
  S.Item = dropdownItemComponent.DropdownItem;
  S.Divider = dropdownDivider.DropdownDivider;
  S.Title = w;
  S.contextType = reactLevelContext.levelContext;
  S.propTypes = {
    children: d.node,
    contentClassName: d.oneOfType([d.string, d.array]),
    className: d.string,
    getPopupContainer: d.func,
    margin: d.oneOfType([d.number, d.object]),
    mouseEnterDelay: d.number,
    mouseLeaveDelay: d.number,
    menu: d.array,
    motion: d.oneOfType([d.bool, d.func, d.object]),
    onVisibleChange: d.func,
    prefixCls: d.string,
    position: d.oneOf(E),
    rePosKey: d.oneOfType([d.string, d.number]),
    render: d.node,
    spacing: d.oneOfType([d.number, d.object]),
    showTick: d.bool,
    style: d.object,
    trigger: d.oneOf(I),
    visible: d.bool,
    zIndex: d.number
  };
  S.__SemiComponentName__ = "Dropdown";
  S.defaultProps = commonFrontendUtils.configProxyHandler(S.__SemiComponentName__, {
    onVisibleChange: emptyExportFunction.emptyFunction,
    prefixCls: dropdownTooltipConstants.dropdownClassNames.PREFIX,
    zIndex: tooltipConstants.tooltipConfig.DEFAULT_Z_INDEX,
    motion: true,
    trigger: "hover",
    position: "bottom",
    mouseLeaveDelay: dropdownTooltipConstants.tooltipOptions.DEFAULT_LEAVE_DELAY,
    showTick: false,
    closeOnEsc: true,
    onEscKeyDown: emptyExportFunction.emptyFunction
  });
  var T = S;
  require.d(exports, {
    Dropdown: function () {
      return T;
    }
  });
}