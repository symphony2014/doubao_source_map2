// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'DropdownMenu'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 10691.328b6088.js
         * chunkId: 10691
         * moduleId: 761864
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var propTypesFactoryWrapper = require("prop-types-factory-wrapper") /*id: 928010*/;
  var a = propTypesFactoryWrapper;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var r = classnamesUtils;
  var dropdownTooltipConstants = require("dropdown-tooltip-constants") /*id: 657784*/;
  var componentAdapterBaseClass = require("component-adapter-base-class") /*id: 519643*/;
  var uiFocusNavigation = require("ui-focus-navigation") /*id: 152428*/;
  class u extends componentAdapterBaseClass.BaseAdapterClass {
    constructor() {
      super(...arguments);
      this.menuItemNodes = null;
      this.firstChars = [];
    }
    handleEscape(e) {
      if (this._adapter.getContext("trigger") === "custom") {
        (e && uiFocusNavigation.findPopupById(document.querySelectorAll("[data-popupid]"), e.id)).focus();
      }
    }
    setFocusByFirstCharacter(e, t) {
      let n = uiFocusNavigation.findNextCharIndex(this.menuItemNodes, e, this.firstChars, t);
      if (n >= 0) {
        uiFocusNavigation.manageListFocus(this.menuItemNodes, this.menuItemNodes[n]);
      }
    }
    onMenuKeydown(e) {
      let t = uiFocusNavigation.getParentByRole(e.target, "tooltip");
      this.menuItemNodes ||= [...e.target.parentNode.getElementsByTagName("li")].filter(e => e.ariaDisabled !== "true");
      if (this.firstChars.length === 0) {
        this.menuItemNodes.forEach(e => {
          var t;
          this.firstChars.push((t = e.textContent.trim()[0]) === null || t === undefined ? undefined : t.toLowerCase());
        });
      }
      let n = this.menuItemNodes.find(e => e.tabIndex === 0);
      switch (e.key) {
        case " ":
        case "Enter":
          e.target.click();
          break;
        case "Escape":
          this.handleEscape(t);
          break;
        case "ArrowUp":
          uiFocusNavigation.focusPrev(this.menuItemNodes, n);
          uiFocusNavigation.suppressEvent(e);
          break;
        case "ArrowDown":
          uiFocusNavigation.focusNext(this.menuItemNodes, n);
          uiFocusNavigation.suppressEvent(e);
          break;
        default:
          if (uiFocusNavigation.isSingleChar(e.key)) {
            this.setFocusByFirstCharacter(n, e.key);
          }
      }
    }
  }
  var reactLevelContext = require("react-level-context") /*id: 834364*/;
  var reactFoundationComponent = require("react-foundation-component") /*id: 323591*/;
  function v(e, t) {
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
  let m = dropdownTooltipConstants.dropdownClassNames.PREFIX;
  class g extends reactFoundationComponent.FoundationComponent {
    constructor(e) {
      super(e);
      this.foundation = new u(this.adapter);
    }
    get adapter() {
      return Object.assign({}, super.adapter);
    }
    render() {
      let e = this.props;
      let {
        children: t,
        className: n,
        style: o
      } = e;
      let a = v(e, ["children", "className", "style"]);
      return reactCoreLibraryReexport.createElement("ul", Object.assign({
        role: "menu",
        "aria-orientation": "vertical"
      }, a, {
        className: r(`${m}-menu`, n),
        style: o,
        onKeyDown: e => this.foundation.onMenuKeydown(e)
      }), t);
    }
  }
  g.propTypes = {
    children: a.node,
    className: a.string,
    style: a.object
  };
  g.contextType = reactLevelContext.levelContext;
  var _ = g;
  require.d(exports, {
    DropdownMenu: function () {
      return _;
    }
  });
}