// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'TabPane'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 23457.0bcdcee9.js
         * chunkId: 23457
         * moduleId: 772025
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var propTypesFactoryWrapper = require("prop-types-factory-wrapper") /*id: 928010*/;
  var s = propTypesFactoryWrapper;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var r = classnamesUtils;
  var tabsComponentConstants = require("tabs-component-constants") /*id: 413067*/;
  var dataAttributeFilter = require("data-attribute-filter") /*id: 584342*/;
  var contextExport = require("context-export") /*id: 499775*/;
  var cssAnimationComponent = require("css-animation-component") /*id: 593626*/;
  function u(e, t) {
    var i = {};
    for (var n in e) {
      if (Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0) {
        i[n] = e[n];
      }
    }
    if (e != null && typeof Object.getOwnPropertySymbols == "function") {
      var a = 0;
      var n = Object.getOwnPropertySymbols(e);
      for (; a < n.length; a++) {
        if (t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a])) {
          i[n[a]] = e[n[a]];
        }
      }
    }
    return i;
  }
  class p extends reactCoreLibraryReexport.PureComponent {
    constructor() {
      super(...arguments);
      this.ref = reactCoreLibraryReexport.createRef();
      this.getDirection = (e, t, i, n) => {
        if (t !== null && e !== null && Array.isArray(i) && i.length) {
          let a = i.findIndex(t => t.itemKey === e);
          let s = i.findIndex(e => e.itemKey === t);
          let o = i.findIndex(e => e.itemKey === n);
          if (a === s) {
            return o > a;
          } else {
            return s < a;
          }
        }
        return false;
      };
      this.shouldRender = () => {
        let {
          itemKey: e
        } = this.props;
        let {
          activeKey: t,
          lazyRender: i
        } = this.context;
        this._active = this._active || t === e;
        return !i || this._active;
      };
    }
    render() {
      let {
        tabPaneMotion: e,
        tabPosition: t,
        prevActiveKey: i
      } = this.context;
      let a = this.props;
      let {
        className: s,
        style: o,
        children: d,
        itemKey: p,
        tabIndex: g
      } = a;
      let m = u(a, ["className", "style", "children", "itemKey", "tabIndex"]);
      let f = this.context.activeKey === p;
      let b = r(s, {
        [tabsComponentConstants.tabsClassNames.TABS_PANE_INACTIVE]: !f,
        [tabsComponentConstants.tabsClassNames.TABS_PANE_ACTIVE]: f,
        [tabsComponentConstants.tabsClassNames.TABS_PANE]: true
      });
      let v = this.shouldRender();
      let y = (() => {
        let e = this.getDirection(this.context.activeKey, p, this.context.panes, i);
        if (t === "top") {
          if (e) {
            return tabsComponentConstants.tabsClassNames.TABS_PANE_ANIMATE_RIGHT_SHOW;
          } else {
            return tabsComponentConstants.tabsClassNames.TABS_PANE_ANIMATE_LEFT_SHOW;
          }
        } else if (e) {
          return tabsComponentConstants.tabsClassNames.TABS_PANE_ANIMATE_BOTTOM_SHOW;
        } else {
          return tabsComponentConstants.tabsClassNames.TABS_PANE_ANIMATE_TOP_SHOW;
        }
      })();
      let C = !this.context.panes.find(e => e.itemKey === i);
      let w = e && f && !C && !this.context.forceDisableMotion;
      return reactCoreLibraryReexport.createElement("div", Object.assign({
        ref: this.ref,
        role: "tabpanel",
        id: `semiTabPanel${p}`,
        "aria-labelledby": `semiTab${p}`,
        className: b,
        style: o,
        "aria-hidden": f ? "false" : "true",
        tabIndex: g || 0
      }, dataAttributeFilter.filterDataAttrs(m), {
        "x-semi-prop": "children"
      }), reactCoreLibraryReexport.createElement(cssAnimationComponent.AnimationComponent, {
        motion: w,
        animationState: f ? "enter" : "leave",
        startClassName: y
      }, e => {
        let {
          animationClassName: t,
          animationEventsNeedBind: i
        } = e;
        return reactCoreLibraryReexport.createElement("div", Object.assign({
          className: r(tabsComponentConstants.tabsClassNames.TABS_PANE_MOTION_OVERLAY, t),
          "x-semi-prop": "children"
        }, i), v ? d : null);
      }));
    }
  }
  p.isTabPane = true;
  p.contextType = contextExport.context;
  p.propTypes = {
    className: s.string,
    style: s.object,
    children: s.node,
    disabled: s.bool,
    itemKey: s.string,
    tab: s.node,
    icon: s.node,
    closable: s.bool
  };
  exports.TabPane = p;
}