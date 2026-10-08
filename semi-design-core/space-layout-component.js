// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'Space'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 765807
         */
module.exports = function (module, exports, require) {
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var arrayIsArrayUtil = require("array-is-array-util") /*id: 447761*/;
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var s = classnamesUtils;
  var propTypesFactoryWrapper = require("prop-types-factory-wrapper") /*id: 928010*/;
  var d = propTypesFactoryWrapper;
  var semiIdentifier = require("semi-identifier") /*id: 247778*/;
  let p = {
    PREFIX: `${semiIdentifier.semiIdentifier}-space`
  };
  let h = "loose";
  let m = "medium";
  let f = "tight";
  let g = e => {
    let t = [];
    reactCoreLibraryReexport.Children.forEach(e, e => {
      if (e != null) {
        if (Array.isArray(e)) {
          t = t.concat(g(e));
        } else if (reactCoreLibraryReexport.isValidElement(e) && e.type && e.type.toString() === "Symbol(react.fragment)" && e.props) {
          t = t.concat(g(e.props.children));
        } else {
          t.push(e);
        }
      }
    });
    return t;
  };
  var dataAttributeFilter = require("data-attribute-filter") /*id: 584342*/;
  let b = p.PREFIX;
  class y extends reactCoreLibraryReexport.PureComponent {
    render() {
      let {
        children: e = null,
        style: t,
        className: n,
        spacing: a,
        wrap: c,
        align: d,
        vertical: u
      } = this.props;
      let p = Object.assign({}, t);
      let y = "";
      let x = "";
      if (isStringTypeCheck.isString(a)) {
        y = a;
        x = a;
      } else if (isNumberUtil.isNumber(a)) {
        p.rowGap = a;
        p.columnGap = a;
      } else if (arrayIsArrayUtil.isArray(a)) {
        if (isStringTypeCheck.isString(a[0])) {
          y = a[0];
        } else if (isNumberUtil.isNumber(a[0])) {
          p.columnGap = `${a[0]}px`;
        }
        if (isStringTypeCheck.isString(a[1])) {
          x = a[1];
        } else if (isNumberUtil.isNumber(a[1])) {
          p.rowGap = `${a[1]}px`;
        }
      }
      let w = s(b, n, {
        [`${b}-align-${d}`]: d,
        [`${b}-vertical`]: u,
        [`${b}-horizontal`]: !u,
        [`${b}-wrap`]: (!c || !u) && c,
        [`${b}-tight-horizontal`]: y === f,
        [`${b}-tight-vertical`]: x === f,
        [`${b}-medium-horizontal`]: y === m,
        [`${b}-medium-vertical`]: x === m,
        [`${b}-loose-horizontal`]: y === h,
        [`${b}-loose-vertical`]: x === h
      });
      let A = g(e);
      let _ = dataAttributeFilter.filterDataAttrs(this.props);
      return reactCoreLibraryReexport.createElement("div", Object.assign({}, _, {
        className: w,
        style: p,
        "x-semi-prop": "children"
      }), A);
    }
  }
  y.propTypes = {
    wrap: d.bool,
    align: d.oneOf(["start", "end", "center", "baseline"]),
    vertical: d.bool,
    spacing: d.oneOfType([d.string, d.number, d.array]),
    children: d.node,
    style: d.object,
    className: d.string
  };
  y.defaultProps = {
    vertical: false,
    wrap: false,
    spacing: "tight",
    align: "center"
  };
  var x = y;
  require.d(exports, {
    Space: function () {
      return x;
    }
  });
}