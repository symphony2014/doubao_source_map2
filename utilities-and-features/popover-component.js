// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'PopoverComponent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: module_block_file.6e021e7d.js
         * chunkId: 12558
         * moduleId: 973583
         */
module.exports = function (module, exports, require) {
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var propTypesFactoryWrapper = require("prop-types-factory-wrapper") /*id: 928010*/;
  var d = propTypesFactoryWrapper;
  var createContextProvider = require("create-context-provider") /*id: 289192*/;
  var tooltipPopoverConstants = require("tooltip-popover-constants") /*id: 126132*/;
  var reactTooltipComponent = require("react-tooltip-component") /*id: 228812*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  function v(e, i) {
    var n = {};
    for (var r in e) {
      if (Object.prototype.hasOwnProperty.call(e, r) && i.indexOf(r) < 0) {
        n[r] = e[r];
      }
    }
    if (e != null && typeof Object.getOwnPropertySymbols == "function") {
      var l = 0;
      var r = Object.getOwnPropertySymbols(e);
      for (; l < r.length; l++) {
        if (i.indexOf(r[l]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[l])) {
          n[r[l]] = e[r[l]];
        }
      }
    }
    return n;
  }
  let m = function (e = {}) {
    let {
      position: i = "",
      className: n,
      arrowStyle: r,
      popStyle: l
    } = e;
    let s = v(e, ["position", "className", "arrowStyle", "popStyle"]);
    let c = i.indexOf("top") === 0 || i.indexOf("bottom") === 0;
    let d = a(n, tooltipPopoverConstants.popoverClasses.ARROW);
    let h = objectPathGetDefault.getObjectPathDefault(r, "borderOpacity", tooltipPopoverConstants.tooltipOptions.DEFAULT_ARROW_STYLE.borderOpacity);
    let p = objectPathGetDefault.getObjectPathDefault(r, "backgroundColor", objectPathGetDefault.getObjectPathDefault(l, "backgroundColor", tooltipPopoverConstants.tooltipOptions.DEFAULT_ARROW_STYLE.backgroundColor));
    let m = objectPathGetDefault.getObjectPathDefault(r, "borderColor", objectPathGetDefault.getObjectPathDefault(l, "borderColor", tooltipPopoverConstants.tooltipOptions.DEFAULT_ARROW_STYLE.borderColor));
    let g = Object.assign(Object.assign({}, s), {
      width: tooltipPopoverConstants.tooltipLayout.ARROW_BOUNDING.width,
      height: tooltipPopoverConstants.tooltipLayout.ARROW_BOUNDING.height,
      xmlns: "http://www.w3.org/2000/svg",
      className: d
    });
    if (c) {
      return reactCoreLibraryReexport.createElement("svg", Object.assign({}, g), reactCoreLibraryReexport.createElement("path", {
        d: "M0 0.5L0 1.5C4 1.5, 5.5 3, 7.5 5S10,8 12,8S14.5 7, 16.5 5S20,1.5 24,1.5L24 0.5L0 0.5z",
        fill: m,
        opacity: h
      }), reactCoreLibraryReexport.createElement("path", {
        d: "M0 0L0 1C4 1, 5.5 2, 7.5 4S10,7 12,7S14.5  6, 16.5 4S20,1 24,1L24 0L0 0z",
        fill: p
      }));
    } else {
      return reactCoreLibraryReexport.createElement("svg", Object.assign({}, g), reactCoreLibraryReexport.createElement("path", {
        d: "M0.5 0L1.5 0C1.5 4, 3 5.5, 5 7.5S8,10 8,12S7 14.5, 5 16.5S1.5,20 1.5,24L0.5 24L0.5 0z",
        fill: m,
        opacity: h
      }), reactCoreLibraryReexport.createElement("path", {
        d: "M0 0L1 0C1 4, 2 5.5, 4 7.5S7,10 7,12S6 14.5, 4 16.5S1,20 1,24L0 24L0 0z",
        fill: p
      }));
    }
  };
  m.propTypes = {
    position: d.string,
    className: d.string,
    arrowStyle: d.object,
    popStyle: d.object
  };
  var nullCheckUtil_1 = require("null-check-util_1") /*id: 179154*/;
  var commonFrontendUtils = require("common-frontend-utils") /*id: 264233*/;
  function w(e, i) {
    var n = {};
    for (var r in e) {
      if (Object.prototype.hasOwnProperty.call(e, r) && i.indexOf(r) < 0) {
        n[r] = e[r];
      }
    }
    if (e != null && typeof Object.getOwnPropertySymbols == "function") {
      var l = 0;
      var r = Object.getOwnPropertySymbols(e);
      for (; l < r.length; l++) {
        if (i.indexOf(r[l]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[l])) {
          n[r[l]] = e[r[l]];
        }
      }
    }
    return n;
  }
  let b = tooltipPopoverConstants.tooltipOptions.POSITION_SET;
  let E = tooltipPopoverConstants.tooltipOptions.TRIGGER_SET;
  class x extends reactCoreLibraryReexport.PureComponent {
    constructor(e) {
      super(e);
      this.focusTrigger = () => {
        var e;
        if ((e = this.tooltipRef.current) !== null && e !== undefined) {
          e.focusTrigger();
        }
      };
      this.renderPopCard = e => {
        let {
          initialFocusRef: i
        } = e;
        let {
          content: n,
          contentClassName: r,
          prefixCls: l
        } = this.props;
        let {
          direction: s
        } = this.context;
        let c = a(l, r, {
          [`${l}-rtl`]: s === "rtl"
        });
        let d = this.renderContentNode({
          initialFocusRef: i,
          content: n
        });
        return reactCoreLibraryReexport.createElement("div", {
          className: c
        }, reactCoreLibraryReexport.createElement("div", {
          className: `${l}-content`
        }, d));
      };
      this.renderContentNode = e => {
        let {
          initialFocusRef: i,
          content: n
        } = e;
        if (isFunctionUtil_1.isFunction(n)) {
          return n({
            initialFocusRef: i
          });
        } else {
          return n;
        }
      };
      this.tooltipRef = reactCoreLibraryReexport.createRef();
    }
    render() {
      let e = this.props;
      let {
        children: i,
        prefixCls: n,
        showArrow: r,
        arrowStyle: l = {},
        arrowBounding: s,
        position: a,
        style: c,
        trigger: d
      } = e;
      let h = w(e, ["children", "prefixCls", "showArrow", "arrowStyle", "arrowBounding", "position", "style", "trigger"]);
      let {
        spacing: f
      } = this.props;
      let v = !!r && reactCoreLibraryReexport.createElement(m, Object.assign({}, {
        position: a,
        className: "",
        popStyle: c,
        arrowStyle: l
      }));
      if (nullCheckUtil_1.isNil(f)) {
        f = r ? tooltipPopoverConstants.tooltipLayout.SPACING_WITH_ARROW : tooltipPopoverConstants.tooltipLayout.SPACING;
      }
      return reactCoreLibraryReexport.createElement(reactTooltipComponent.TooltipComponent, Object.assign({
        guardFocus: true,
        ref: this.tooltipRef
      }, h, {
        trigger: d,
        position: a,
        style: c,
        content: this.renderPopCard,
        prefixCls: n,
        spacing: f,
        showArrow: v,
        arrowBounding: s,
        role: d === "click" || d === "custom" ? "dialog" : "tooltip"
      }), i);
    }
  }
  x.contextType = createContextProvider.context;
  x.propTypes = {
    children: d.node,
    content: d.oneOfType([d.node, d.func]),
    visible: d.bool,
    autoAdjustOverflow: d.bool,
    motion: d.bool,
    position: d.oneOf(b),
    margin: d.oneOfType([d.number, d.object]),
    mouseEnterDelay: d.number,
    mouseLeaveDelay: d.number,
    trigger: d.oneOf(E).isRequired,
    contentClassName: d.oneOfType([d.string, d.array]),
    onVisibleChange: d.func,
    onClickOutSide: d.func,
    style: d.object,
    spacing: d.oneOfType([d.number, d.object]),
    zIndex: d.number,
    showArrow: d.bool,
    arrowStyle: d.shape({
      borderColor: d.string,
      backgroundColor: d.string,
      borderOpacity: d.oneOfType([d.string, d.number])
    }),
    arrowPointAtCenter: d.bool,
    arrowBounding: d.object,
    prefixCls: d.string,
    guardFocus: d.bool,
    disableArrowKeyDown: d.bool
  };
  x.__SemiComponentName__ = "Popover";
  x.defaultProps = commonFrontendUtils.configProxyHandler(x.__SemiComponentName__, {
    arrowBounding: tooltipPopoverConstants.tooltipLayout.ARROW_BOUNDING,
    showArrow: false,
    autoAdjustOverflow: true,
    zIndex: tooltipPopoverConstants.tooltipLayout.DEFAULT_Z_INDEX,
    motion: true,
    trigger: "hover",
    cancelText: "No",
    okText: "Yes",
    position: "bottom",
    prefixCls: tooltipPopoverConstants.popoverClasses.PREFIX,
    onClickOutSide: emptyExportFunction.emptyFunction,
    onEscKeyDown: emptyExportFunction.emptyFunction,
    closeOnEsc: true,
    returnFocusOnClose: true,
    guardFocus: true,
    disableFocusListener: true
  });
  var y = x;
  require.d(exports, {
    PopoverComponent: function () {
      return y;
    }
  });
}