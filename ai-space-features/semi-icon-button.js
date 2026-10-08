// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'SemiIconButton'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11671.ea21fc6d.js
         * chunkId: 11671
         * moduleId: 845645
         */
module.exports = function (module, exports, require) {
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var propTypesFactoryWrapper = require("prop-types-factory-wrapper") /*id: 928010*/;
  var l = propTypesFactoryWrapper;
  var semiButtonConstants = require("semi-button-constants") /*id: 666341*/;
  require("semi-identifier") /*id: 247778*/.semiIdentifier;
  var semiButtonReactComponent = require("semi-button-react-component") /*id: 652199*/;
  var spinIconComponent = require("spin-icon-component") /*id: 982867*/;
  function f(e, t) {
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
  class h extends reactCoreLibraryReexport.PureComponent {
    render() {
      let e = this.props;
      let {
        children: t,
        iconPosition: n,
        iconSize: i,
        iconStyle: s,
        style: o,
        icon: l,
        noHorizontalPadding: u,
        theme: h,
        className: p,
        prefixCls: m,
        loading: g
      } = e;
      let _ = f(e, ["children", "iconPosition", "iconSize", "iconStyle", "style", "icon", "noHorizontalPadding", "theme", "className", "prefixCls", "loading"]);
      let v = Object.assign({}, o);
      if (Array.isArray(u)) {
        if (u.includes("left")) {
          v.paddingLeft = 0;
        }
        if (u.includes("right")) {
          v.paddingRight = 0;
        }
      } else if (u === true) {
        v.paddingLeft = 0;
        v.paddingRight = 0;
      } else if (typeof u == "string") {
        if (u === "left") {
          v.paddingLeft = 0;
        }
        if (u === "right") {
          v.paddingRight = 0;
        }
      }
      let y = null;
      let S = null;
      if (g && !_.disabled) {
        S = reactCoreLibraryReexport.createElement(spinIconComponent.SpinIcon, null);
      } else if (reactCoreLibraryReexport.isValidElement(l)) {
        S = l;
      }
      let b = a({
        [`${m}-content-left`]: n === "right",
        [`${m}-content-right`]: n === "left"
      });
      let E = this.props["x-semi-children-alias"] || "children";
      let w = t != null ? reactCoreLibraryReexport.createElement("span", {
        className: b,
        "x-semi-prop": E
      }, t) : null;
      y = n === "left" ? reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, S, w) : reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, w, S);
      let T = a(p, `${m}-with-icon`, {
        [`${m}-with-icon-only`]: w == null || w === "",
        [`${m}-loading`]: g
      });
      return reactCoreLibraryReexport.createElement(semiButtonReactComponent.SemiButton, Object.assign({}, _, {
        className: T,
        theme: h,
        style: v
      }), y);
    }
  }
  h.defaultProps = {
    iconPosition: semiButtonConstants.buttonConfig.DEFAULT_ICON_POSITION,
    prefixCls: semiButtonConstants.buttonClassPrefix.PREFIX,
    loading: false,
    noHorizontalPadding: false,
    onMouseEnter: emptyExportFunction.emptyFunction,
    onMouseLeave: emptyExportFunction.emptyFunction
  };
  h.elementType = "IconButton";
  h.propTypes = {
    iconStyle: l.object,
    style: l.object,
    loading: l.bool,
    prefixCls: l.string,
    icon: l.oneOfType([l.object, l.string, l.node]),
    iconSize: l.oneOf(["extra-small", "small", "default", "large", "extra-large", "custom"]),
    noHorizontalPadding: l.oneOfType([l.bool, l.string, l.array]),
    children: l.node,
    theme: l.string,
    iconPosition: l.oneOf(semiButtonConstants.buttonConfig.iconPositions),
    className: l.string,
    onMouseEnter: l.func,
    onMouseLeave: l.func
  };
  var p = h;
  require.d(exports, {
    SemiIconButton: function () {
      return p;
    }
  });
}