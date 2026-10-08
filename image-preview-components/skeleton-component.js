// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'Skeleton'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-after-interactive-ai-creation-guidance.67ffc317.js
         * chunkId: 15933
         * moduleId: 619442
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var propTypesFactoryWrapper = require("prop-types-factory-wrapper") /*id: 928010*/;
  var s = propTypesFactoryWrapper;
  var semiIdentifier = require("semi-identifier") /*id: 247778*/;
  let c = {
    PREFIX: `${semiIdentifier.semiIdentifier}-skeleton`
  };
  var avatarComponentConfig = require("avatar-component-config") /*id: 831970*/;
  function u(e, t) {
    var n = {};
    for (var r in e) {
      if (Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0) {
        n[r] = e[r];
      }
    }
    if (e != null && typeof Object.getOwnPropertySymbols == "function") {
      var i = 0;
      var r = Object.getOwnPropertySymbols(e);
      for (; i < r.length; i++) {
        if (t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i])) {
          n[r[i]] = e[r[i]];
        }
      }
    }
    return n;
  }
  let p = avatarComponentConfig.avatarConstants.SIZE;
  let h = avatarComponentConfig.avatarConstants.SHAPE;
  let m = e => t => n => reactCoreLibraryReexport.createElement(t, Object.assign({
    type: e
  }, n));
  class f extends reactCoreLibraryReexport.PureComponent {
    render() {
      let e = this.props;
      let {
        prefixCls: t,
        className: n,
        type: i,
        size: a,
        shape: s
      } = e;
      let l = u(e, ["prefixCls", "className", "type", "size", "shape"]);
      let c = o(n, `${t}-${i}`, {
        [`${t}-${i}-${a}`]: i.toUpperCase() === "AVATAR"
      }, {
        [`${t}-${i}-${s}`]: i.toUpperCase() === "AVATAR"
      });
      return reactCoreLibraryReexport.createElement("div", Object.assign({
        className: c
      }, l));
    }
  }
  f.propTypes = {
    type: s.string,
    prefixCls: s.string,
    style: s.object,
    className: s.string,
    size: s.oneOf(p),
    shape: s.oneOf(h)
  };
  f.defaultProps = {
    prefixCls: c.PREFIX,
    size: "medium",
    shape: "circle"
  };
  let g = m("avatar")(f);
  let v = m("image")(f);
  let b = m("title")(f);
  let y = m("button")(f);
  class _ extends reactCoreLibraryReexport.PureComponent {
    render() {
      let {
        prefixCls: e,
        className: t,
        style: n,
        rows: i
      } = this.props;
      let a = o(t, `${e}-paragraph`);
      return reactCoreLibraryReexport.createElement("ul", {
        className: a,
        style: n
      }, [...Array(i)].map((e, t) => reactCoreLibraryReexport.createElement("li", {
        key: t
      })));
    }
  }
  _.propTypes = {
    rows: s.number,
    prefixCls: s.string,
    style: s.object,
    className: s.string
  };
  _.defaultProps = {
    prefixCls: c.PREFIX,
    rows: 4
  };
  function w(e, t) {
    var n = {};
    for (var r in e) {
      if (Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0) {
        n[r] = e[r];
      }
    }
    if (e != null && typeof Object.getOwnPropertySymbols == "function") {
      var i = 0;
      var r = Object.getOwnPropertySymbols(e);
      for (; i < r.length; i++) {
        if (t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i])) {
          n[r[i]] = e[r[i]];
        }
      }
    }
    return n;
  }
  let x = c.PREFIX;
  class C extends reactCoreLibraryReexport.PureComponent {
    render() {
      let e;
      let t = this.props;
      let {
        placeholder: n,
        active: i,
        children: a,
        className: s,
        loading: l,
        style: c
      } = t;
      let d = w(t, ["placeholder", "active", "children", "className", "loading", "style"]);
      let u = o(x, {
        [`${x}-active`]: !!i
      }, s);
      if (l) {
        return reactCoreLibraryReexport.createElement("div", Object.assign({
          className: u,
          style: c
        }, d, {
          "x-semi-prop": "placeholder"
        }), n);
      } else {
        return a;
      }
    }
  }
  C.Avatar = g;
  C.Title = b;
  C.Button = y;
  C.Paragraph = _;
  C.Image = v;
  C.defaultProps = {
    loading: true
  };
  C.propTypes = {
    active: s.bool,
    placeholder: s.node,
    style: s.object,
    className: s.string,
    loading: s.bool,
    children: s.node
  };
  var E = C;
  require.d(exports, {
    Skeleton: function () {
      return E;
    }
  });
}