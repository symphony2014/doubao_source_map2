// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'SemiButton'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11671.ea21fc6d.js
         * chunkId: 11671
         * moduleId: 652199
         */
module.exports = function (module, exports, require) {
  var throttledOmitPathStringify = require("throttled-omit-path-stringify") /*id: 159496*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var propTypesFactoryWrapper = require("prop-types-factory-wrapper") /*id: 928010*/;
  var l = propTypesFactoryWrapper;
  var semiButtonConstants = require("semi-button-constants") /*id: 666341*/;
  var emptyFunctionExport = require("empty-function-export") /*id: 185067*/;
  function d(e, t) {
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
  let f = semiButtonConstants.buttonConfig.sizes;
  let {
    htmlTypes: h,
    btnTypes: p
  } = semiButtonConstants.buttonConfig;
  class m extends reactCoreLibraryReexport.PureComponent {
    render() {
      let e = this.props;
      let {
        children: t,
        block: n,
        htmlType: s,
        loading: o,
        circle: l,
        className: u,
        style: c,
        disabled: f,
        size: h,
        theme: p,
        type: m,
        prefixCls: g,
        iconPosition: _
      } = e;
      let v = d(e, ["children", "block", "htmlType", "loading", "circle", "className", "style", "disabled", "size", "theme", "type", "prefixCls", "iconPosition"]);
      let y = Object.assign(Object.assign({
        disabled: f
      }, throttledOmitPathStringify.omitPathStringify(v, ["x-semi-children-alias"])), {
        className: a(g, {
          [`${g}-${m}`]: !f && m,
          [`${g}-disabled`]: f,
          [`${g}-size-large`]: h === "large",
          [`${g}-size-small`]: h === "small",
          [`${g}-light`]: p === "light",
          [`${g}-block`]: n,
          [`${g}-circle`]: l,
          [`${g}-borderless`]: p === "borderless",
          [`${g}-${m}-disabled`]: f && m
        }, u),
        type: s,
        "aria-disabled": f
      });
      let S = {};
      if (!u || !u.includes("-with-icon")) {
        S["x-semi-prop"] = this.props["x-semi-children-alias"] || "children";
      }
      return reactCoreLibraryReexport.createElement("button", Object.assign({}, y, {
        onClick: this.props.onClick,
        onMouseDown: this.props.onMouseDown,
        style: c
      }), reactCoreLibraryReexport.createElement("span", Object.assign({
        className: `${g}-content`,
        onClick: e => f && e.stopPropagation()
      }, S), t));
    }
  }
  m.defaultProps = {
    disabled: false,
    size: "default",
    type: "primary",
    theme: "light",
    block: false,
    htmlType: "button",
    onMouseDown: emptyFunctionExport.emptyFunction,
    onClick: emptyFunctionExport.emptyFunction,
    onMouseEnter: emptyFunctionExport.emptyFunction,
    onMouseLeave: emptyFunctionExport.emptyFunction,
    prefixCls: semiButtonConstants.buttonClassPrefix.PREFIX
  };
  m.propTypes = {
    children: l.node,
    disabled: l.bool,
    prefixCls: l.string,
    style: l.object,
    size: l.oneOf(f),
    type: l.oneOf(p),
    block: l.bool,
    onClick: l.func,
    onMouseDown: l.func,
    circle: l.bool,
    loading: l.bool,
    htmlType: l.oneOf(h),
    theme: l.oneOf(semiButtonConstants.buttonConfig.themes),
    className: l.string,
    onMouseEnter: l.func,
    onMouseLeave: l.func,
    "aria-label": l.string
  };
  require.d(exports, {
    SemiButton: function () {
      return m;
    }
  });
}