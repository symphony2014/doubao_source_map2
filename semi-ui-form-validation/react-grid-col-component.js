// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'GridCol'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 33772.61785936.js
         * chunkId: 33772
         * moduleId: 420189
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var propTypesFactoryWrapper = require("prop-types-factory-wrapper") /*id: 928010*/;
  var i = propTypesFactoryWrapper;
  var reactGridRowComponent = require("react-grid-row-component") /*id: 14775*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var l = classnamesUtils;
  var semiIdentifierPrefix = require("semi-identifier-prefix") /*id: 391399*/;
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
  let u = i.oneOfType([i.object, i.number]);
  class p extends reactCoreLibraryReexport.Component {
    render() {
      let e;
      let {
        props: t
      } = this;
      let {
        prefixCls: n,
        span: o,
        order: i,
        offset: a,
        push: s,
        pull: c,
        className: u,
        children: p
      } = t;
      let f = d(t, ["prefixCls", "span", "order", "offset", "push", "pull", "className", "children"]);
      let h = {};
      let m = `${n}-col`;
      ["xs", "sm", "md", "lg", "xl", "xxl"].forEach(e => {
        let n = {};
        if (typeof t[e] == "number") {
          n.span = t[e];
        } else if (typeof t[e] == "object") {
          n = t[e] || {};
        }
        delete f[e];
        h = Object.assign(Object.assign({}, h), {
          [`${m}-${e}-${n.span}`]: n.span !== undefined,
          [`${m}-${e}-order-${n.order}`]: n.order || n.order === 0,
          [`${m}-${e}-offset-${n.offset}`]: n.offset || n.offset === 0,
          [`${m}-${e}-push-${n.push}`]: n.push || n.push === 0,
          [`${m}-${e}-pull-${n.pull}`]: n.pull || n.pull === 0
        });
      });
      let v = l(m, {
        [`${m}-${o}`]: o !== undefined,
        [`${m}-order-${i}`]: i,
        [`${m}-offset-${a}`]: a,
        [`${m}-push-${s}`]: s,
        [`${m}-pull-${c}`]: c
      }, u, h);
      let {
        style: g
      } = f;
      try {
        e = this.context.gutters;
      } catch (e) {
        throw Error("please make sure <Col> inside <Row>");
      }
      g = Object.assign(Object.assign(Object.assign({}, e[0] > 0 ? {
        paddingLeft: e[0] / 2,
        paddingRight: e[0] / 2
      } : {}), e[1] > 0 ? {
        paddingTop: e[1] / 2,
        paddingBottom: e[1] / 2
      } : {}), g);
      return reactCoreLibraryReexport.createElement("div", Object.assign({}, f, {
        style: g,
        className: v,
        "x-semi-prop": "children"
      }), p);
    }
  }
  p.contextType = reactGridRowComponent.rowContext;
  p.propTypes = {
    span: i.number,
    order: i.number,
    offset: i.number,
    push: i.number,
    pull: i.number,
    className: i.string,
    children: i.node,
    xs: u,
    sm: u,
    md: u,
    lg: u,
    xl: u,
    xxl: u,
    prefixCls: i.string
  };
  p.defaultProps = {
    prefixCls: semiIdentifierPrefix.semiIdentifierConfig.PREFIX
  };
  exports.GridCol = p;
}