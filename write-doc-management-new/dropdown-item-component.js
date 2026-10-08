// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'DropdownItem'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 10691.328b6088.js
         * chunkId: 10691
         * moduleId: 325984
         */
module.exports = function (module, exports, require) {
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var l = classnamesUtils;
  var propTypesFactoryWrapper = require("prop-types-factory-wrapper") /*id: 928010*/;
  var s = propTypesFactoryWrapper;
  var dropdownTooltipConstants = require("dropdown-tooltip-constants") /*id: 657784*/;
  var reactLevelContext = require("react-level-context") /*id: 834364*/;
  var reactFoundationComponent = require("react-foundation-component") /*id: 323591*/;
  var reactTickIcon = require("react-tick-icon") /*id: 818313*/;
  let p = dropdownTooltipConstants.dropdownClassNames.PREFIX;
  class v extends reactFoundationComponent.FoundationComponent {
    render() {
      let {
        children: e,
        disabled: t,
        className: n,
        forwardRef: i,
        style: a,
        type: r,
        active: s,
        icon: d,
        onKeyDown: c,
        showTick: u,
        hover: v
      } = this.props;
      let {
        showTick: m
      } = this.context;
      let g = m ?? u;
      let _ = l(n, {
        [`${p}-item`]: true,
        [`${p}-item-disabled`]: t,
        [`${p}-item-hover`]: v,
        [`${p}-item-withTick`]: g,
        [`${p}-item-${r}`]: r,
        [`${p}-item-active`]: s
      });
      let f = {};
      if (!t) {
        ["onClick", "onMouseEnter", "onMouseLeave", "onContextMenu"].forEach(e => {
          if (this.context.level !== 1 && e === "onClick") {
            f.onMouseDown = t => {
              var n;
              var i;
              if (t.button === 0) {
                if ((i = (n = this.props)[e]) !== null && i !== undefined) {
                  i.call(n, t);
                }
              }
            };
          } else {
            f[e] = this.props[e];
          }
        });
      }
      let b = null;
      switch (true) {
        case g && s:
          b = reactCoreLibraryReexport.createElement(reactTickIcon.TickIcon, null);
          break;
        case g && !s:
          b = reactCoreLibraryReexport.createElement(reactTickIcon.TickIcon, {
            style: {
              color: "transparent"
            }
          });
          break;
        default:
          b = null;
      }
      let y = null;
      if (d) {
        y = reactCoreLibraryReexport.createElement("div", {
          className: `${p}-item-icon`
        }, d);
      }
      return reactCoreLibraryReexport.createElement("li", Object.assign({
        role: "menuitem",
        tabIndex: -1,
        "aria-disabled": t
      }, f, {
        onKeyDown: c,
        ref: e => i(e),
        className: _,
        style: a
      }, this.getDataAttr(this.props)), b, y, e);
    }
  }
  v.propTypes = {
    children: s.oneOfType([s.string, s.node]),
    name: s.string,
    disabled: s.bool,
    selected: s.bool,
    onClick: s.func,
    onMouseEnter: s.func,
    onMouseLeave: s.func,
    onContextMenu: s.func,
    className: s.string,
    style: s.object,
    forwardRef: s.func,
    type: s.oneOf(dropdownTooltipConstants.tooltipOptions.ITEM_TYPE),
    active: s.bool,
    icon: s.node
  };
  v.contextType = reactLevelContext.levelContext;
  v.defaultProps = {
    disabled: false,
    divided: false,
    selected: false,
    onMouseEnter: emptyExportFunction.emptyFunction,
    onMouseLeave: emptyExportFunction.emptyFunction,
    forwardRef: emptyExportFunction.emptyFunction
  };
  v.elementType = "Dropdown.Item";
  exports.DropdownItem = v;
}