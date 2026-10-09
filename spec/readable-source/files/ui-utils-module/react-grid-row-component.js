// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'g' to 'rowContext'
// - Renamed export 'Z' to 'GridRow'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 33772.61785936.js
         * chunkId: 33772
         * moduleId: 14775
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var i = classnamesUtils;
  var propTypesFactoryWrapper = require("prop-types-factory-wrapper") /*id: 928010*/;
  var s = propTypesFactoryWrapper;
  var semiIdentifierPrefix = require("semi-identifier-prefix") /*id: 391399*/;
  var commonFrontendUtils = require("common-frontend-utils") /*id: 264233*/;
  function d(e, t) {
    var n = {};
    for (var r in e) {
      if (Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0) {
        n[r] = e[r];
      }
    }
    if (e != null && typeof Object.getOwnPropertySymbols == "function") {
      var o = 0;
      var r = Object.getOwnPropertySymbols(e);
      for (; o < r.length; o++) {
        if (t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o])) {
          n[r[o]] = e[r[o]];
        }
      }
    }
    return n;
  }
  let u = ["xxl", "xl", "lg", "md", "sm", "xs"];
  let p = reactCoreLibraryReexport.createContext(null);
  let f = {
    xs: "(max-width: 575px)",
    sm: "(min-width: 576px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 992px)",
    xl: "(min-width: 1200px)",
    xxl: "(min-width: 1600px)"
  };
  class h extends reactCoreLibraryReexport.Component {
    constructor() {
      super(...arguments);
      this.state = {
        screens: {
          xs: true,
          sm: true,
          md: true,
          lg: true,
          xl: true,
          xxl: true
        }
      };
      this.unRegisters = [];
    }
    componentDidMount() {
      this.unRegisters = Object.keys(f).map(e => commonFrontendUtils.matchMediaHandler(f[e], {
        match: () => {
          if (typeof this.props.gutter == "object") {
            this.setState(t => ({
              screens: Object.assign(Object.assign({}, t.screens), {
                [e]: true
              })
            }));
          }
        },
        unmatch: () => {
          if (typeof this.props.gutter == "object") {
            this.setState(t => ({
              screens: Object.assign(Object.assign({}, t.screens), {
                [e]: false
              })
            }));
          }
        }
      }));
    }
    componentWillUnmount() {
      this.unRegisters.forEach(e => e());
    }
    getGutter() {
      let {
        gutter: e = 0
      } = this.props;
      let t = [0, 0];
      (Array.isArray(e) ? e.slice(0, 2) : [e, 0]).forEach((e, n) => {
        if (typeof e == "object") {
          for (let r = 0; r < u.length; r++) {
            let o = u[r];
            if (this.state.screens[o] && e[o] !== undefined) {
              t[n] = e[o];
              break;
            }
          }
        } else {
          t[n] = e || 0;
        }
      });
      return t;
    }
    render() {
      let e = this.props;
      let {
        prefixCls: t,
        type: n,
        justify: o,
        align: a,
        className: s,
        style: l,
        children: c
      } = e;
      let u = d(e, ["prefixCls", "type", "justify", "align", "className", "style", "children"]);
      let f = this.getGutter();
      let h = `${t}-row`;
      let m = i({
        [h]: n !== "flex",
        [`${h}-${n}`]: n,
        [`${h}-${n}-${o}`]: n && o,
        [`${h}-${n}-${a}`]: n && a
      }, s);
      let v = Object.assign(Object.assign(Object.assign({}, f[0] > 0 ? {
        marginLeft: -(f[0] / 2),
        marginRight: -(f[0] / 2)
      } : {}), f[1] > 0 ? {
        marginTop: -(f[1] / 2),
        marginBottom: -(f[1] / 2)
      } : {}), l);
      let g = Object.assign({}, u);
      delete g.gutter;
      return reactCoreLibraryReexport.createElement(p.Provider, {
        value: {
          gutters: f
        }
      }, reactCoreLibraryReexport.createElement("div", Object.assign({}, g, {
        className: m,
        style: v,
        "x-semi-prop": "children"
      }), c));
    }
  }
  h.propTypes = {
    type: s.oneOf(["flex"]),
    align: s.oneOf(["top", "middle", "bottom"]),
    justify: s.oneOf(["start", "end", "center", "space-around", "space-between"]),
    className: s.string,
    style: s.object,
    children: s.node,
    gutter: s.oneOfType([s.object, s.number, s.array]),
    prefixCls: s.string
  };
  h.defaultProps = {
    prefixCls: semiIdentifierPrefix.semiIdentifierConfig.PREFIX
  };
  h.RowContext = {
    gutters: s.any
  };
  var m = h;
  require.d(exports, {
    rowContext: function () {
      return p;
    },
    GridRow: function () {
      return m;
    }
  });
}